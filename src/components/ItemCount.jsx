import { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const itemsAdd = () => {
        if (count >= stock) return
        setCount(count + 1)
    }

    const itemsRemove = () => {
        if (count <= 0) return;
        setCount(count - 1)
    }

    const quantityToAdd = () => {
        onAdd(count)
    }
    return (
        <div className="countItem">
            <p>(Disponible {stock})</p>
            <div className="btnCount">
                <button onClick={itemsRemove}>-</button>
                <p>{count}</p>
                <button onClick={itemsAdd}>+</button>
                <button onClick={quantityToAdd}>Confirmar</button>
            </div>
        </div>
    )
}


export default ItemCount