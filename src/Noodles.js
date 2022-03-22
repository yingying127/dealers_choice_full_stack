import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Noodles = ({ noodles })  => {
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

export default connect(mapState)(Noodles);