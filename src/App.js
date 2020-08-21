import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import ViewBookList from './components/ViewBookList';
import AddBook from './components/AddBook';
import { GlobalContextProvider } from './context/GlobalState';

function App() {

  return ( 
    <Router>
        <GlobalContextProvider>
          <div className="App container">
            <Header />
            <Route exact path='/' component={ViewBookList}/>
            <Route path="/add" component={AddBook}/>
          </div>
        </GlobalContextProvider>
    </Router>
    
  );
}

export default App;
