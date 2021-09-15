import React from 'react'
import Navbar, {SubNavbar} from './navbar'
import Footer from './footer'


export default function Layout(props) {
    return (
        <div>
            <Navbar />
            <SubNavbar/>
            
            <div>
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}
