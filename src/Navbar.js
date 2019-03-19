import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
        <div id='nav' className='nav nav-pills'>
            <Link to='/api/'>HOME</Link>
            <Link to='/api/products'>PRODUCTS</Link>
            <a>SALES</a>
            <Link to='/api/products/create'>CREATE</Link>
        </div>
    )
}

export default Navbar;