import { CartWidgets } from "./CartWidget"
import { Link } from "react-router-dom"


const Header = ({ Test }) => {

    return (
        <header>
            <Link to='/'>
            <h1>{Test}</h1>
            </Link>
            <nav>
                <Link to='/category/men'>men</Link>
                <Link to='/category/women'>women</Link>
                <Link to='/category/electronics'>electronic</Link>
                <Link to='/category/jewelery'> jewelery</Link>
                <CartWidgets />

            </nav >
        </header >
        
    )
}

export default Header