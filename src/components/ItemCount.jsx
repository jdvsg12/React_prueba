import { useState } from "react";

function ItemCount({stock, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const itemsAdd = () => {
        if (count >= stock) return
        setCount(count + 1)
    }

    const itemsRemove = () => {
        if(count <= 0) return;
        setCount(count - 1)   
    }

    const confirm = () => {
       onAdd = console.log(count)
    }
return (
    <div className="cardItem">
        <img src="https://cdn.pixabay.com/photo/2018/12/06/16/12/birds-3860034_960_720.jpg" alt="logo" />
        <p>Tenemos {count} items</p>
        <div className="btnCount">
        <button onClick={itemsAdd}>+</button>
        <button onClick={itemsRemove}>-</button>
        <button onClick={confirm}>Confirmar</button>

        </div>
    </div>
)
}


export default ItemCount