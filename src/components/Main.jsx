import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"
import { Cart } from "./Cart"

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/cart' element={<Cart/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/category/:category' element={<ItemListContainer/>} />
            </Routes>
        </main>
    )
}

export default Main