import React from 'react'
import Footer from '../components/Footer'
import HeaderAdmin from '../components/HeaderAdmin'

const LayoutPrivado = ({children}) => {
    return (
        <div className='mainContainer'>
            <HeaderAdmin/>
            <main>{children}</main>
            <Footer/>
        </div>
    )
}

export default LayoutPrivado
