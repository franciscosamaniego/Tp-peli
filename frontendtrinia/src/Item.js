import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const Item = props => {
const [CalifProm, setCalifProm] = useState(0);
const [newCalif, setnewCalif] = useState({
    Calif : 0
});


function deleteItem(event){
    event.preventDefault()
    axios.delete('/movies/' + props.item_id)
    .then(respose =>{
        console.log("Peticion Envidada")
        console.log(respose)}
      )
      .catch(error => {
        console.error(error);
      })
      window.location.reload()
}

function handleCalif(event){
    event.preventDefault()
    props.Califs.push(newCalif)
    console.log(props.Califs);
    axios.put('/movies/' + props.item_id, props.Califs)
    .then(respose =>{
        console.log("Peticion Envidada")
        console.log(respose)}
      )
      .catch(error => {
        console.error(error);
      })
      window.location.reload()
}

    useEffect(() => {
        let prom = 0;
        console.log()
        for (const calif of props.Califs) {
            prom += calif.Calif
        }
        console.log(props.Califs)
        prom = prom / props.Califs.length;
        prom = prom.toFixed(2)
        setCalifProm(prom) 
    }, [props.Califs])

    
    return (
        <div>
            <h3>{props.Name}</h3>
            <ul>
                <li>Genero: {props.Gender}</li>
                <li>Sinopsis: {props.Sinopsis}</li>
                <li>Calificación: {CalifProm}</li>
                <form onSubmit={handleCalif}>
                    <label>Ingrese su Calificacion : </label>
                    <input
                    data-itemid = {props.item_id} 
                    type= "number"
                    min = "0"
                    max = "10"
                    value = {newCalif.Calif}
                    onChange={e =>{
                        setnewCalif({
                          ...newCalif,
                          Calif : +e.target.value
                        })
                      }}
                    />
                    <button type = "submit">Enviar</button>
                </form>
            </ul>
            
            <p>{props.admin_mode ? <button onClick={deleteItem}>Eliminar</button> : ''}</p>
        </div>
    )
} 

export default Item