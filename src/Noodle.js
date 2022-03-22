import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Noodle = ({ noodles, match })  => {
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
                            </ul>
                        )
                    })
                }
            </ul>
        </div>
    )
}

const mapState = ({ noodles }) => {
    return {
        noodles
    }
}

export default connect(mapState)(Noodle);