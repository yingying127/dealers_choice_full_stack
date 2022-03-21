import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import { connect, Provider } from 'react-redux';
import store, { loadNoodles } from './store'
import Noodles from './Noodle'

// ORIGINAL REACT:
// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             noodles: []
//         }
//     }
//     async componentDidMount() {
//         const noodles = (await axios.get('/api/noodles')).data
//         this.setState({ noodles })
//     }
//     render() {
//         const { noodles } = this.state;
//         return (
//             <div>
//                 <h1>Sunsweet's Noodle Shop</h1>
//                 <div>
//                     {
//                         noodles.map(noodle => {
//                             return (
//                                 <p key={noodle.id}>
//                                     { noodle.name }
//                                 </p>
//                             )
//                         })
//                     }
//                 </div>
//             </div>
//         )
//     }
// }

const App = connect(
    state => state,
    (dispatch) => {
        return {
            bootstrap: async() => {
                // const noodles = (await axios.get('/api/noodles')).data
                // dispatch(loadNoodles(noodles))
                dispatch(loadNoodles())
            }
        }
    }
)(class App extends Component {
    async componentDidMount() {
        this.props.bootstrap();
    }
    render() {
        const { noodles } = this.props;
        return (
            <div>
                <h1>Sunsweet's Noodle Shop</h1>
                <Noodles />
            </div>
        )
    }
})

render(<Provider store={store}><App /></Provider>, document.querySelector('#root'));
