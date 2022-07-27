import React, {useState} from "react"
import { CartWidgets } from "./CartWidget"
import { Link } from "react-router-dom"
import "./header-model.css"


const Header = ({ Test }) => {

    const [active, setActive] = useState("navMenu")
    const [icon, setIcon] = useState("navToggler")
    const navToggler = () => {
        active === 'navMenu'? setActive("navMenu navActive"): setActive('navMenu')

        icon === 'navToggler'? setIcon("navToggler toggle") : setIcon('navToggler')


    }

    return (
        <header>
            <nav className="nav">
                <Link className="navBrand" to='/'>
                    <h1>{Test}</h1>
                </Link>
                <ul className={active}>
                    <li className="naveItem">
                        <Link onClick={navToggler} to='/category/men'>men</Link>
                    </li>
                    <li className="naveItem">
                        <Link onClick={navToggler} to='/category/women'>women</Link>
                    </li>
                    <li className="naveItem">
                        <Link onClick={navToggler} to='/category/electronics'>electronic</Link>
                    </li>
                    <li className="naveItem">
                        <Link onClick={navToggler} to='/category/jewelery'> jewelery</Link>
                    </li>
                    <li onClick={navToggler} className="naveItem">
                        <CartWidgets />
                    </li>
                </ul>
                <div onClick={navToggler} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav >
        </header >

    )
}

export default Header