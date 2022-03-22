import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { destroyNoodles } from './store'

const Noodles = ({ noodles, destroyNoodles })  => {
    return (
        <div>
            <ul>
                {
                    noodles.map(noodle => {
                        return (
                            <ul key={noodle.id}>
                                <Link to={`/${noodle.id}`}>
                                    { noodle.name }
                                </Link>
                                <button id='deleteButton' onClick={() => destroyNoodles(noodle)}>x</button>
                            </ul>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapDispatch = (dispatch, { history }) => {
    return {
        destroyNoodles: (noodles) => {
            dispatch(destroyNoodles(noodles, history))
        }
    }
}

export default connect(state => state, mapDispatch)(Noodles);