import CartWidgets from "./CartWidget"


const Header = ({ Test }) => {
    return (
        <header>
            <h1>{Test}</h1>
            <nav>
                <a href="#">Link1</a>
                <a href="#">Link2</a>
                <a href="#">Link3</a>
                <CartWidgets />

            </nav>
        </header>
    )
}

export default Header