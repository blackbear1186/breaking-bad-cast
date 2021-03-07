import React from 'react';
import CharacterItem from './CharacterItem';

const CharacterGrid = ({ items, isLoading }) => {
  // check if loading display spinner, else map through items and output as cards
  // use parenthesis because we are rendering jsx
  // 1. add key to h1 to remove key warning
  // 2. Change h1 to CharacterItem and pass item into component
  return isLoading ? <h1>Loading...</h1> : <section className="cards">
    {items.map(item => (
      <CharacterItem key={item.char_id} item={item}></CharacterItem>
    ))}
  </section>
}

export default CharacterGrid
