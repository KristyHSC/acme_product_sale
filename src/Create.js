import React, {Component} from 'react'
import axios from 'axios'

export default class Create extends Component {
    constructor(){
        super()
        this.state = {
            name: ' ',
            price: 0,
            discount: 0,
            availability: ' '
        }
        this.changeState = this.changeState.bind(this);
        this.submitForm = this.submitForm.bind(this)
    }

    changeState (event) {
        this.setState({
            [event.target.name]: event.target.value
        })
        console.log(this.state)
    }

    submitForm (event) {
        event.preventDefault()
        axios.post('/api/products', this.state)
            .then(resp => console.log(resp.data))
            .catch(error => console.log(error))
    }

    render (){
        const {name, price, discount, availability} = this.state
        return (
            <form onSubmit={this.submitForm}>
                <label htmlFor='Name'>Name</label>
                <input
                    id = "name"
                    name = "name"
                    type='text'
                    onChange = {this.changeState}
                    value = {name}
                    />

                <label htmlFor='Price'>Price</label>
                <input 
                    id='price'
                    name='price'
                    type='number'
                    onChange = {this.changeState}
                    value = {price}
                    />

                <label htmlFor='Discount'>Discount Percentage</label>
                <input
                    id = "discount"
                    name = "discount"
                    type = "number"
                    onChange = {this.changeState}
                    value = {discount}
                    />

                <label htmlFor='Availability'>Availability</label>
                <input
                    id = "availability"
                    name = "availability"
                    type = "text"
                    onChange = {this.changeState}
                    value = {availability}
                />

                <button type='submit'>Create</button>
            </form>
        )
    }
}