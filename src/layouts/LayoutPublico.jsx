import React from 'react'
import HeaderPublico from '../components/HeaderPublico'
import Footer from '../components/Footer'

const LayoutPublico = ({children}) => {
    return (
        <div className='mainContainer'>
            <HeaderPublico />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default LayoutPublico
