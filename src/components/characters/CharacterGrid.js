import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({ items, isLoading }) => {
  // check if loading display spinner, else map through items and output as cards
  // use parenthesis because we are rendering jsx
  // 1. add key to h1 to remove key warning
  // 2. Change h1 to CharacterItem and pass item into component
  return isLoading ? <Spinner/>: <section className="cards">
    {items.map(item => (
      <CharacterItem key={item.char_id} item={item}></CharacterItem>
    ))}
  </section>
}

export default CharacterGrid
