import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { destroyNoodles } from './store'

const Noodle = ({ noodles, destroyNoodles, match })  => {
    return (
        <div>
            <ul>
                {
                    noodles.filter(noodle => noodle.id === match.params.id*1).map(noodle => {
                        return (
                            <ul key={noodle.id}>
                                <Link to={'/'}>
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

const mapDispatch = (dispatch) => {
    return {
        destroyNoodles: (noodles) => {
            dispatch(destroyNoodles(noodles))
        }
    }
}
export default connect(state => state, mapDispatch)(Noodle);