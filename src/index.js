import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class App extends Component {
    constructor() {
        super()
        this.state = {
            noodles: []
        }
    }
    async componentDidMount() {
        const noodles = (await axios.get('/api/noodles')).data
        this.setState({ noodles })
    }
    render() {
        const { noodles } = this.state;
        return (
            <div>
                <h1>Sunsweet's Noodle Shop</h1>
                <div>
                    {
                        noodles.map(noodle => {
                            return (
                                <p key={noodle.id}>
                                    { noodle.name }
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

render(<App />, document.querySelector('#root'));
