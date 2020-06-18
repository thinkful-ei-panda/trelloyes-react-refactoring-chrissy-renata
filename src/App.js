import React, {Component} from 'react'
import './styles/App.css'
import Store from './Store'
import List from './List'

// Random card
const newRandomCard = () => {
  const id = Math.random().toString(36).substring(2, 4)
    + Math.random().toString(36).substring(2, 4);
  return {
    id,
    title: `Random Card ${id}`,
    content: 'lorem ipsum',
  }
}

// // Delete/omit
function omit(obj, keyToOmit) {
  return Object.entries(obj).reduce (
    (newObj, [key, value]) =>
        key === keyToOmit ? newObj : {...newObj, [key] : value},{}
  );
}

class App extends Component {

    state = {
      store : Store,
    };

    handleDeleteCard = (cardId) => {
      const {lists, allCards} = this.state.store;
      const newLists = lists.map(list => ({
        ...list, 
        cardIds: list.cardIds.filter(id => id !== cardId)
      }));

      const newCards = omit(allCards, cardId);

      this.setState({
        store : {
          lists : newLists,
          allCards : newCards 
        }
      })
    };

    handleAddCard = (listId) => {
      const newCard = newRandomCard()
      const newLists = this.state.store.list.map(list => {
        if(list.id === listId){
          return {
            ...list,
            cardIds: [...list.cardIds, newCard.id]
          };
        }
        return list;
      })

      this.setState({
        store : {
          lists : newLists,
          allCards: {
            ...this.state.store.allCards,
            [newCard.id]: newCard
          }
        }
      })
    };

  render() {
    const { store } = this.state
    console.log(store)
    return (
      <main className='App-main'>
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
            key={list.id}
            id = {list.id}
            header={list.header}
            cards={list.cardIds.map(id => store.allCards[id])}
            onClickDelete = {this.handleDeleteCard}
            onClickAdd = {this.handleAddCard}>
            </List>
          ))}
        </div>
      </main>
    );
  }
}



export default App;
