import React from 'react';
import { connect } from 'react-redux';

const Noodles = ({ noodles })  => {
    return (
        <ul>
            {
                noodles.map(noodle => {
                    return (
                        <ul key={noodle.id}>
                            { noodle.name }
                         </ul>
                    )
                })
            }
        </ul>
    )
}

const mapState = ({ noodles }) => {
    return {
        noodles
    }
}

export default connect(mapState)(Noodles);