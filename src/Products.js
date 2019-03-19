import React, {Component} from 'react'
import axios from 'axios'

export default class Products extends Component{
    constructor(){
        super()
        this.state = {
            products: []
        }
        //this.addProduct = this.addProduct.bind(this)
    }

    componentDidMount(){
        axios.get('/api/products')
            .then(resp => this.setState({products: resp.data}))
            .then(() => console.log(this.state))
            .catch(error => console.log(error))
    } 

    // addProduct (product) {
    //     this.setState({
    //         products: [...this.state.products, product]
    //     })
    // }

    render() {
        return (
            <div>
                {this.state.products.map(product => (
                    <div key={product.id} className='box-text'>
                        <h3>{product.name}</h3>
                        <p>{product.price}</p>
                        <p>{product.discount}</p>
                        <p>{product.availabiltiy}</p>
                    </div>
                ))}
            </div>
        )
    }
}