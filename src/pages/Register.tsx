import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import axios from 'axios';

import React, { useState } from 'react';
import { useParams } from 'react-router';
import {FacebookLoginButton , GoogleLoginButton} from 'react-social-login-buttons';
// import ExploreContainer from '../components/ExploreContainer';
import './Register.css';

const Register: React.FC = () => {
    const { name } = useParams<{ name: string; }>();
    const [datos, setDatos] = useState({
        name: '',
        surname: '',
        login: '',
        telephone: '',
        password: '',
        dni: ''
    })

    const handleInputChange = (e: any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value

        })
    }
    const enviarDatos = async (e: any) => {
        e.preventDefault();

        const resultado = await axios.post("https://mbar.pythonanywhere.com/signup",
            datos
        );

        console.log(resultado);
        alert(resultado)
    }

    return (

        <IonPage>
            <IonContent fullscreen className="alinear">
                <div className="dark container d-block d-sm-none icono" >
                    
                    <br></br>
                    <h1 className="text-context-light">Crear cuenta</h1>
                    <form onSubmit={enviarDatos}  >
                        <input type="text" className="form-control"
                            name="name"
                            onChange={handleInputChange}
                            placeholder="NOMBRE" />
                        <br />
                        <input className="form-control" 
                            type="text" 
                            name="surname" 
                            onChange={handleInputChange} 
                            placeholder="APELLIDO" />
                        <br />
                        <input className="form-control" 
                            type="text"
                            name="dni" onChange={handleInputChange} 
                            placeholder="DNI" />
                        <br></br>
                        <input className="form-control"
                            type="text"
                            name="login" 
                            onChange={handleInputChange} 
                            placeholder="MAIL" />
                        <br></br>
                        <input className="form-control"
                            type="text" 
                            name="telephone" 
                            onChange={handleInputChange} 
                            placeholder="NUMERO DE TELEFONO" />
                        <br></br>
                        <input className="form-control" 
                            type="password"
                            name="password" 
                            onChange={handleInputChange} 
                            placeholder="CONTRASEÑA" />
                    <br></br>
                    <input type="submit" className="form-control" value="Crear nueva cuenta"></input> 
                 
                    </form>     
                    <div className="text-center pt-2">
                       <span>  O inicia sesion con:</span> 
                    </div> 
                    <GoogleLoginButton>Continuar con Google</GoogleLoginButton>
                    <FacebookLoginButton> Continuar con Facebook</FacebookLoginButton>
                    <div className="text-center">
                        <a href="#">Politica de privacidad</a> 
                        <span className="p-2">  </span>  
                        <a href="#">Terminos del servicio</a> 
                    </div>  
    
                    <br></br>
             
                    
                </div>


            </IonContent>
        </IonPage>
    );
};

export default Register;