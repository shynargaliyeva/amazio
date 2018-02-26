import React, { Component } from 'react';
import HomePage from './HomePage';
import CataloguePage from './CataloguePage';
import './App.css';
import { Link, Route, Switch, withRouter } from 'react-router-dom';


class App extends Component {
    constructor(){
        super();
        this.state = {
            products: []
        }
    }
    
    componentDidMount() {
        fetch("/api/catalogue")
            .then(res => res.json())
            .then(products => this.setState({ products }))
            .catch(err => console.log(err))
    }

    render() {
        return (
        <div className='App'>
            <header className='header-footer'>AMAZIO</header>
            <br/>
            <Link to='/catalogue'>Catalogue</Link> 
            <Switch>
                <Route exact path='/' render={() => <HomePage />} />
                <Route exact path='/catalogue' render={() => this.state.products.length ? 
                <CataloguePage products={this.state.products} /> : <h1>Loading...</h1>} />
            </Switch>
        </div>
        );
    }
}

export default App;