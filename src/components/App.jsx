import React, { Component } from 'react';
import HomePage from './HomePage';
import CataloguePage from './CataloguePage';
import './App.css';
import { Link, Route, Switch, /* withRouter */ } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';


class App extends Component {
    constructor(){
        super();
        this.state = {
            products: [],
            order: []

        }
    }
    
    handleAddToCart = (product) => {
        fetch('/api/checkout', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ product: product })
        })
        .then(data => data.json())
        .then((order) => {
            this.setState({ order: order})
        })
        .catch(err => console.log(err))
    }

    removeProduct = (e) => {

    }

    componentDidMount() {
        fetch("/api/catalogue")
            .then(res => res.json())
            .then(products => this.setState({ products }))
            .catch(err => console.log(err))

        fetch("/api/checkout")
            .then(res => res.json())
            .then(order => this.setState({order}))
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
                <CataloguePage products={this.state.products} 
                               handleAddToCart={this.handleAddToCart}
                               removeProduct={this.removeProduct}
                               
                /> : <h1>Loading...</h1>} />
                    <Route exact path="/checkout" render={() => this.state.order.length ?
                <CheckoutPage order={this.state.order} products={this.state.products}
                /> : <h1>Loading...</h1>} />
            </Switch>
        </div>
        );
    }
}

export default App;