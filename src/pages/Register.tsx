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

                <div className="dark d-none d-sm-block">
                    {/* Menu superior pronto en componente */}
                    <nav className="navbar navbar-expand-lg navbar-dark ">
                        <a className="navbar-brand" href="#">Apparkme</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                            <li className="nav-item ">
                                <a className="nav-link" href="#">Ingresar <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="/page/signup">Registrate</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ayuda
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Android</a>
                                <a className="dropdown-item" href="#">Iphone</a>
                                </div>
                            </li>
                            </ul>
                        </div>
                    </nav>


                    <section className="container row col-12">
                    <div className="col-sm-3 col-xl-4"></div>
                        <div className="col-sm-6 col-xl-4">
                            <h2 className="text-context-light">Crear cuenta</h2>
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
                        </div>
                        <div className="col-sm-3 col-xl-4"></div>
                    </section>
                    


                </div>


            </IonContent>
        </IonPage>
    );
};

export default Register;