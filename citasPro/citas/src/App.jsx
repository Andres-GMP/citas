import Cabecera from "./components/Cabecera"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import {useState} from "react"

function App() {

  const [pacientes, setPacientes] = useState([])
  const [paciente, setPaciente] =  useState({})

  return (
    <div className="text-slate-800">
      <Cabecera />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
        <Formulario
          setPacientes = {setPacientes}
          pacientes = {pacientes}
          paciente = {paciente}
          />
        <Listado 
          pacientes = {pacientes}
          setPaciente  = {setPaciente} />
      </div>

    </div>
  )
}

export default App
