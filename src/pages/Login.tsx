import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import axios from 'axios';
import './Login.css';

const Login: React.FC = () => {

    const [datos, setDatos] = useState({
        login: '',
        password: ''
    })

    const handleInputChange = (e: any) => {
        setDatos({
            ...datos,
            [e.target.name]: e.target.value
        })
    }

    const enviarDatos = async (e:any) => {
        e.preventDefault();
        const resultado = await axios.post("http://mbar.pythonanywhere.com/login", 
            datos
        );

        console.log(resultado);
        alert(resultado.data.access_token);
    }

  return (
    <IonPage>
        <IonContent fullscreen className="alinear">

            <div className="dark container d-block d-sm-none icono no-padding-top" >
                <div className="arriba">
                    <br></br>
                    <img src="assets/icon/logo-apparkame.svg"></img>
                    <br></br>
                    <div className="container">
                        <h2 className="text-context-light" >Bienvenido de vuelta!</h2>
                    </div>
                    <br></br>
                    <form onSubmit={enviarDatos}>
                        <input name="login" type="text" onChange={handleInputChange} className="form-control" placeholder="MAIL O TELEFONO"/>
                        <br></br>
                        <input name="password" type="password" onChange={handleInputChange} className="form-control" placeholder="CONTRASEÑA"/>
                        <a href="#">
                        OLVIDE MI CONTRASEÑA
                        </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <input type="submit" className="form-control" value="Ingresar"></input>
                        <br></br>
                    </form>
                    

                    <footer className="footer">
                        <img className="ico-unlam" src="assets/icon/unlam_logo.png" ></img>

                    </footer>
                </div>
                
            </div>
            
            <div>
                
                
                {/* 
                    LO DE ABAJO ES PARA MODO PC O DE TAMAÑO MAYOR A UN CELULAR
                */}
                <div className="dark d-none d-sm-block">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Apparkme</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        </ul>
                    </div>
                    </nav>
                    <img className="icon-apparkme-pc" src="assets/icon/logo-apparkame.svg"></img>
                </div>

               

            </div>
        </IonContent>
    </IonPage>
  );
};

export default Login;