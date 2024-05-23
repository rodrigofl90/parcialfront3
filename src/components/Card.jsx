
console.log(CardStyles)

const Card = ({info}) => {
  const {nombre, musicaPreferida, librosPreferidos} = info
   



  return (
  <div className='card'>
    <h2>Información personal</h2>
    <h4>{nombre}</h4>
    <h4>{musicaPreferida}</h4>
    <h4>{librosPreferidos}</h4>


  </div> 
  
    
  )
}

export default Usuarios
