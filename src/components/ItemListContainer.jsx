import ItemCount from "../components/ItemCount.jsx"

const ItemListContainer = () => {

    return (
        <div>
        <ItemCount stock={5} initial={1} onAdd={onAdd} />
     
        </div>

    )

}

export default ItemListContainer