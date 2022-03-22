import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            noodleId: '',
            name: ''
        }
    }
    render() {
        const { noodles } = this.props
        const { name, noodleId } = this.state;
        console.log(name, noodleId)

        return (
            <form>
                <input name='name' placeholder='noodle name' value={ name }/>
                <select name='noodleId'>
                    <option value={ noodleId }> --select an noodle-- </option>
                    {
                        noodles.map( noodle => {
                            return (
                                <option value={ noodle.id} key={noodle.id}>
                                    { noodle.name }
                                </option>
                            )
                        })
                    }
                </select>
                <button>Create Noodles</button>
            </form>
        )
    }
}

export default connect(state => state)(Form)