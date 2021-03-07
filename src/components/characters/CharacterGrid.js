import React from 'react'

const CharacterGrid = ({ items, isLoading }) => {
  // check if loading display spinner, else map through items and output as cards
  // use parenthesis because we are rendering jsx
  // add key to h1 to remove key warning
  return isLoading ? <h1>Loading...</h1> : <section className="cards">
    {items.map(item => (
      <h1 key={item.char_id}>{item.name}</h1>
    ))}
  </section>
}

export default CharacterGrid
