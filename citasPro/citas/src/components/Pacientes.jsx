import React, { useState } from 'react'

export const Pacientes = ({pacientes, setPaciente}) => {

  return (
    <div>
        <div className=' p-5 bg-white shadow-md mt-5 rounded-lg '>
                <p className='uppercase text-gray-800 font-bold'>Nombre paciente: <span className='font-normal normal-case'>{pacientes.nombre}</span></p>
                <p className='uppercase text-gray-800 font-bold'>Correo: <span className='font-normal normal-case'>{pacientes.correo}</span></p>
                <p className='uppercase text-gray-800 font-bold'>Sintomas: <span className='font-normal normal-case'>{pacientes.sintomas}</span></p>
                <p className='uppercase text-gray-800 font-bold'>Fecha: <span className='font-normal normal-case'>{pacientes.fecha}</span></p>
                <div className='flex justify-between gap-2 mt-4'>
                  <input type="button" value = {"EDITAR"} className = 'bg-blue-700 w-full rounded-md hover: cursor-pointer' onClick = {()=>setPaciente(pacientes)}/>
                  <input type="button" value = {"ELIMINAR"} className = 'bg-red-500  w-full  p-1 rounded-md hover: cursor-pointer'/>
                </div>
            </div>
    </div>
  )
}

export default Pacientes
