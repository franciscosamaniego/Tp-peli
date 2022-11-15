import { useEffect } from "react";
import Item from "./Item";
import { useState } from "react";
import axios from "axios";

const ItemSelector = () => {
const [ItemArr, setItemArr] = useState([]);
const [ItemType, setItemType] = useState("");
const [DisplayedItems, setDisplayedItems] = useState([]);
const [adminEnable, setadminEnable] = useState(false);

    useEffect(() => {
        axios.get('/movies')
        .then(res => {
            setItemArr(res.data);
        })
        .catch(error => {
            console.error(error)
        })
        }, [])

        useEffect(() => {
            console.log(ItemArr);
            if (ItemType !== "") setDisplayedItems(ItemArr.filter(Item => Item.Type === ItemType).map(item => <Item Name={item.Name} Gender={item.Gender} Sinopsis={item.Sinopsis} Califs={item.Califs} key={item._id} item_id = {item._id} admin_mode = {adminEnable}/>))
        }, [adminEnable, ItemType])
    
    return (
        <div>
            <div className="text-center">
            <button className="btn btn-warning"onClick={event => setadminEnable(!adminEnable)}>Administrar</button>
            </div>
            <br></br>
            <button className="btn btn-primary"onClick={event => setItemType("Pelicula")}>Peliculas</button>
            <button className="btn btn-danger right"onClick= { event => setItemType("Serie")}>Series</button>
            {DisplayedItems}
        </div>
    );
}

export default ItemSelector;