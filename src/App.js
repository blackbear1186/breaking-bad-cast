import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from "./components/ui/Header";
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import "./App.css";

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // Add query and setQuery useState to search for names
  const [query, setQuery] = useState('');

  // use useEffect hook to fetch api data using async await axios promise
  // 1. Add name={query} to end of api url to search by name
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)

      // pass result.data into setItems function
      setItems(result.data)
      // setIsLoading to false
      setIsLoading(false)
    }
    // call fetchItems
    fetchItems()
    // 3. Add query as a dependency to array which fires off each time it changes
  }, [query])
  // pass the state variables into CharacterGrid
  // 2. Add getQuery prop and pass q from Search file into empty function and setQuerty callback
  return (
    <div className="container">
      <Header />
      <Search getQuery={q => setQuery(q)}/>
      <CharacterGrid isLoading={isLoading} items={items}/>
    </div>
  );
};

export default App;
