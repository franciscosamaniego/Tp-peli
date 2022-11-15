import React from "react";
import { useState } from "react";
import axios from 'axios'

  
function Form() {
    const [form, setForm] = useState({
      "Name" :'',
      "Type" : '',
      "Gender" : '',
      "Sinopsis" : '',
      "Califs" : [{'Calif' : 0}],
      "Image" : ''
      });

      function handleSubmit(event) {
        event.preventDefault()
        console.log(form)
        console.log(JSON.stringify(form))
        axios.post('/movies', form)
        .then(respose =>{
          console.log("Peticion Envidada")
          console.log(respose)
          window.location.reload()}
        )
        .catch(error => {
          console.error(error);
        })
      }

      function reload(event) {
      window.location.reload();
    }

  return (
    <form onSubmit={handleSubmit} className="centrar">
    <label>
    Nombre
    <input
    value={form.Name}
    onChange={e =>{
      setForm({
        ...form,
        Name: e.target.value
      })
    }}
    />
    </label>
    <br/>
    <label>
    Pelicula
    </label>
    <input
    name = "Type"
    type ="radio"
    value={form.Type}
    onChange={e =>{
      setForm({
        ...form,
        Type: "Pelicula"

      })
    }}
    />
    <label>
    Serie
    </label>
    <input
    name = "Type"
    type ="radio"
    value={form.Type}
    onChange={
      ()=>{
      setForm({
        ...form,
        Type: "Serie",

      })
    }}
    />
    <br/>
    <label>
    Genero
    <input
    value={form.Gender}
    onChange={e =>{
      setForm({
        ...form,
        Gender: e.target.value
      })
    }}
    />
    </label>
    <br></br>
    <label>
    Sinopsis
    <input
    value={form.Sinopsis}
    onChange={e =>{
      setForm({
        ...form,
        Sinopsis: e.target.value
      })
    }}
    />
    </label>
    <br></br>
    <label>
    Calificacion
    </label>
    <input
    type = "number"
    min = "0"
    max = "10"
    value={form.Califs[0].Calif}
    onChange={e =>{
      setForm({
        ...form,
        Califs : [{Calif : +e.target.value}]
      })
    }}
    />
    <br></br>
    <label>
    Imagen
    <input
    value={form.Image}
    onChange={e =>{
      setForm({
        ...form,
        Image: e.target.value
      })
    }}
    />
    </label>
    <br></br>
  <input class="btn btn-success"
  type = "submit"
  onClick={reload}
  />
    </form>
  )
}

export default Form
