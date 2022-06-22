import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer"
import { Routes, Route } from "react-router-dom"

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/detail/:id' element={<ItemDetailContainer/>} />
                <Route path='/category/:category' element={<ItemListContainer/>} />
            </Routes>
        </main>
    )
}

export default Main