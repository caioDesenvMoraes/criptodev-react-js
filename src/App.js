// import { useState } from "react"
// import { api } from "./service/api"

// const App = () => {
//   const [data, setData] = useState({})
//   const [showForm, setShowForm] = useState(true)

//   const submitData = (e) => {
//     e.preventDefault()
//     api.post("", data).then(
//       res => {
//         if (res === 200 || 201) {
//           setShowForm(false)
//         }
//       }
//     )
//   }

//   if (!showForm) {
//     return(
//       <div>
//         <h2>Dados Enviados com sucesso!</h2>
//       </div>
//     )
//   }
  
//   return(
//     <div>
//       <h1>Hello World</h1>
//       <form onSubmit={ submitData }> 
//         <input 
//           type="text" 
//           placeholder="Informe o seu nome"
//           onChange={ e => setData({ ...data, name: e.target.value }) }
//         />
//         <input 
//           type="text" 
//           placeholder="Informe o seu e-mail"
//           onChange={ e => setData({ ...data, email: e.target.value })}
//         />
//         <input 
//           type="text" 
//           placeholder="Informe o seu telefone"
//           onChange={ e => setData({ ...data, phone: e.target.value })}
//         />
//         <input type="submit" value="Cadastrar"/>
//       </form>
//       <div>
//         <p>Nome: { data?.name }</p>
//         <p>Email: { data?.email }</p>
//         <p>Telefone: { data?.phone }</p>
//       </div>
//     </div>
//   )
// }

// export default App

import { useState, useEffect } from "react"
import { joke } from "./service/api"

export default function App() {
  const [ data, setData ] = useState({})
  const [ random, setRandom ] = useState(false)
  const [ isLoad, setIsLoad ] = useState(false)

  useEffect(() => {
    setIsLoad(true)
    joke.get("").then(
      res => {
        setData(res.data)
      }
    ).catch(e => console.error(e)).finally( () => setIsLoad(false))
  }, [random])

  const randomJoke = () => {
    setRandom(!random)
  }

  return(
    <div>
      { isLoad ? (
        <div>
          <h2>Carregando...</h2>
        </div>
      ) : (
        <div>
          <h2>Joke</h2>
          <div>
            <img src={data?.icon_url} alt={data?.value}/>
            <p>{ data?.value }</p>
          </div>
          <button onClick={ randomJoke }>Trocar Piada</button>
        </div>
      )}
    </div>
  )
}