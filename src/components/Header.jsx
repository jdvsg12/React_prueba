import CartWidgets from "./CartWidget"


const Header = ({ Test }) => {
    return (
        <header>
            <h1>{Test}</h1>
            <nav>
                <a href="/#">categoria 1</a>
                <a href="/#">categoria 2</a>
                <a href="/#">categoria 3</a>
                <CartWidgets />

            </nav>
        </header>
    )
}

export default Header