import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/searchbox/searchbox.component'

import './App.css';


class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchField: ''
        }

    }

    changeHandler = (e) => {
        this.setState({ searchField: e.target.value })
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(resbody => this.setState({ monsters: resbody }))
    }

    render() {
        const { monsters, searchField } = this.state;
        const filteredMonsters = monsters.filter(monster =>
            monster.name.toLowerCase().includes(searchField.toLowerCase()));


        return (
            <div className='App'>
                <h1> Monster Roladex </h1>
                    <SearchBox placeholder='search monster'
                    changeHandler={this.changeHandler}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;