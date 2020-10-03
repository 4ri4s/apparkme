import React, { useState } from 'react';
import { Container, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core'

import './Register.css';



export default function Register() {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        mail: '',
        telefono: '',
        password: ''
    })

    const handleInputChange = (e: any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    }

    const enviarDatos = (e: any) => {
        e.preventDefault();
        console.log(datos.nombre + '  ' + datos.apellido + ' ' + datos.mail + ' ' + datos.telefono + ' ' + datos.password + ' ')
    }



    return (

        <div className="wrapper">
            <div className="form-wrapper">
                <h1>Crear cuenta</h1>
                <form onSubmit={enviarDatos} >
                    <div className="nombre">
                        <label htmlFor="nombre">Nombre</label>
                        <input
                            placeholder="NOMBRE"
                            className="form-control"
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                        ></input>
                    </div>
                    <div className="apellido">
                        <label htmlFor="apellido">Apellido</label>
                        <input
                            placeholder="APELLIDO"
                            className="form-control"
                            type="text"
                            name="apellido"
                            onChange={handleInputChange}
                        ></input>

                    </div>
                    <div className="mail">
                        <label htmlFor="mail">Email</label>
                        <input
                            placeholder="MAIL"
                            className="form-control"
                            type="text"
                            name="mail"
                            onChange={handleInputChange}
                        ></input>

                    </div>
                    <div className="telefono">
                        <label htmlFor="telefono">Telefono</label>
                        <input
                            placeholder="TELEFONO"
                            className="form-control"
                            type="text"
                            name="telefono"
                            onChange={handleInputChange}
                        ></input>

                    </div>

                    <div className="password">
                        <label htmlFor="password">Contraseña</label>
                        <input
                            placeholder="CONTRASEÑA"
                            className="form-control"
                            type="password"
                            name="password"
                            onChange={handleInputChange}
                        ></input>

                    </div>
                    <div className="createAccount">
                        <button type="submit">Crear nueva cuenta</button>

                    </div>

                    <div className="createAccount">
                        <button > Continuar con Google</button>
                    </div>
                    <div className="createAccount">
                        <button > Continuar con Facebook</button>
                    </div>


                </form>
            </div>
        </div>

    )
}