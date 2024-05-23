import Card from './components/Card'
import { useState } from 'react'

const personas = [
  {
    id: 1,
    nombre: "Juan",
    musicaPreferida: "Rock",
    librosPreferidos: "1984",
  },
  {
    id: 2,
    nombre: "María",
    musicaPreferida: "Pop", 
    librosPreferidos: "To Kill a Mockingbird",
  },
  {
    id: 3,
    nombre: "Carlos",
    musicaPreferida: "Hip-Hop",
    librosPreferidos: "The Catcher in the Rye"
  },
  {
    id: 4,
    nombre: "Ana",
    musicaPreferida: "Indie",
    librosPreferidos: "Jane Eyre"
  }
];


function App() { 
const [nombre, setNombre] = useState("");
const [musicaPreferida, setMusica] = useState("");
const [librosPreferidos, setLibro] = useState("");

const reset = () => {
    setNombre("");
    setMusica("");
    setLibro("");
  }
  const [show, setShow] = useState(false)
  const [error, setError] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(nombre.trim().length > 3 && musicaPreferida.length >= 6  && librosPreferidos.includes(" ")){
      setShow(true)
      setError(false)
    } else{
          setError(true)
    }
  }
  

  return (
    <>
      <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
            <label >Musica Preferida</label>
            <input type="text" value={musicaPreferida} onChange={(e) => setMusica(e.target.value)}  />
            <label >Libro Preferido</label>
            <input type="text" value={librosPreferidos} onChange={(e) => setLibro(e.target.value)} />
            <button>Enviar</button>
            <button onClick={reset}>reset</button>
        </form>
        {show ? (
         <Envio nombre={nombre} musicaPreferida={musicaPreferida} librosPreferidos={librosPreferidos}/>
      ) : null}
      {error ? <p>Debe colocar la información correctamente!</p> : null}
      <div className='list-Container'>
        {personas.map((persona) => (<Card info ={persona} key = {persona.id}/>))   }
      </div>
    </>
  )
}

export default App
