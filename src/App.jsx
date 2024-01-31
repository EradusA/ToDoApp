import TopAppBar from './Components/AppBar';
import TodoList from './Components/TodoList.jsx';
import React, { useState } from 'react';

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
  };

  return (
    <>
      <TopAppBar onSearchChange={handleSearchChange} />
      <TodoList searchTerm={searchTerm} />
    </>
  );
  };

  export default App;