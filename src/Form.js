import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            noodleId: '',
            name: ''
        }
        //this is after save(ev) & can 
        this.save = this.save.bind(this)
    }
    save(ev) {
        ev.preventDefault();
        const noodle = {
            name: this.state.name,
            noodleId: this.state.noodleId
        }
        console.log(noodle)
    }
    render() {
        const { noodles } = this.props
        const { name, noodleId } = this.state;
        const { save } = this;
        console.log(name, noodleId)
/*
0) AS A CLASS
class Form extends Component {
    render() {
        const { noodles } = this.props
        return ( 
            <.. form info .. />
        )
    }
}
1) ADDS THE KEYS & NAMES TO THE INPUT & SELECT
<form>
    <input name='name' placeholder='noodle name' />
    <select name='noodleId' >
        <option> --select noodle-- </option>
        {
            noodles.map( noodle => {
                return (
                    <option key={ noodle.id }>
                        { noodle.name }
                    </option>
                )
            })
        }
    </select>
    <button>Create</button>
</form>
2) ADDS THE VALUES AND GETTING THE STATE FROM THE VALUES
class Form extends Component {
    constructor() {
        super()
        this.state = {
            noodleId: '',
            name: ''
        }
    }
    render() {
        const { noodles } = this.props
        const { name, noodleId } = this.state
        return ( 
            <form>
                <input name='name' placeholder='noodle name' value={ name }/>
                <select value={ noodleId } name='noodleId' >
                    <option value=''> --select noodle-- </option>
                    {
                        noodles.map( noodle => {
                            return (
                                <option value={ noodle.id } key={ noodle.id }>
                                    { noodle.name }
                                </option>
                            )
                        })
                    }
                </select>
                <button>Create</button>
            </form>
        )
    }
}
3) ADDING ONCHANGE && DISABLING BUTTON
class Form extends Component {
    constructor() {
        super()
        this.state = {
            noodleId: '',
            name: ''
        }
    }
    render() {
        const { noodles } = this.props
        const { name, noodleId } = this.state
        return ( 
            <form>
                <input onChange={ev => this.setState({ name: ev.target.value })} name='name' placeholder='noodle name' value={ name }/>
                <select value={ noodleId } name='noodleId' onChange={ev => this.setState({ noodleId: ev.target.value })}>
                    <option value=''> --select noodle-- </option>
                    {
                        noodles.map( noodle => {
                            return (
                                <option value={ noodle.id } key={ noodle.id }>
                                    { noodle.name }
                                </option>
                            )
                        })
                    }
                </select>
                <button disabled={ !name || !noodleId }>Create</button>
            </form>
        )
    }
}
4) SAVE METHOD & SAVING THE FORM
class Form extends Component {
    constructor() {
        super()
        this.state = {
            noodleId: '',
            name: ''
        }
        this.save = this.save.bind(this)

    }
    save(ev) {
        ev.preventDefault();
        const noodle = {
            name: this.state.name,
            noodleId: this.state.noodleId
        }
        console.log(noodle)
    }
    render() {
        const { noodles } = this.props
        const { name, noodleId } = this.state
        const { save } = this.props
        return ( 
            <form onSubmit={ save }>
                <input onChange={ev => this.setState({ name: ev.target.value })} name='name' placeholder='noodle name' value={ name }/>
                <select value={ noodleId } name='noodleId' onChange={ev => this.setState({ noodleId: ev.target.value })}>
                    <option value=''> --select noodle-- </option>
                    {
                        noodles.map( noodle => {
                            return (
                                <option value={ noodle.id } key={ noodle.id }>
                                    { noodle.name }
                                </option>
                            )
                        })
                    }
                </select>
                <button disabled={ !name || !noodleId }>Create</button>
            </form>
        )
    }
}
*/

        return (
            <form onSubmit={ save }>
                <input onChange={ev => this.setState({ name: ev.target.value })} name='name' placeholder='noodle name' value={ name } />
                <select value={ noodleId } name='noodleId' onChange={ev => this.setState({ noodleId: ev.target.value })}>
                    <option value=''> --select an noodle-- </option>
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
                <button disabled={ !name || !noodleId }>Create Noodles</button>
            </form>
        )
    }
}

export default connect(state => state)(Form)