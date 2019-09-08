import React from 'react';
import CategoryList from '../pages/CategoryList';
import CategoryItem  from '../pages/ItemPage';
import HomePage from '../pages/HomePage';
import { BrowserRouter, Route } from 'react-router-dom';
import { CategoriesStore } from '../contexts/CategoriesContext';

class App extends React.Component{
    render(){
        return (
            <div className="ui container">
                <h1> STAR WARS </h1>
                <a href="/">HOME</a>
                <CategoriesStore>
                    <BrowserRouter>
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/list/:category" component={CategoryList} />
                        <Route exact path="/item" component={CategoryItem} />
                    </BrowserRouter>
                </CategoriesStore>
            </div>
        );
    }
}


export default App;
