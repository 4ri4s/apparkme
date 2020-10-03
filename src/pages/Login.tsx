import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { Link, TextField } from '@material-ui/core';
import React from 'react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Login.css';

const Login: React.FC = () => {

  const { name } = useParams<{ name: string; }>();


  return (
    <IonPage>
        <IonContent fullscreen className="alinear">

            <div className="dark container d-block d-sm-none" >
                
                <br></br>
                <img src="http://localhost:8100/assets/icon/logo-apparkame.svg"></img>
                <br></br>
                <br></br>
                <div className="container">
                    <h2 className="text-context-light" >Bienvenido de vuelta!</h2>
                </div>
                <br></br>
                <br></br>
                <form >
                    <input type="text" className="form-control" placeholder="MAIL O TELEFONO"/>
                    <br></br>
                    <input type="text" className="form-control" placeholder="CONTRASEÑA"/>
                </form>
                <a href="#">
                    OLVIDE MI CONTRASEÑA
                </a>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <input type="button" className="form-control" value="Ingresar"></input>
                <br></br>
                <img className="ico-unlam" src="http://localhost:8100/assets/icon/unlam_logo.png" ></img>
            </div>
            
            <div>
                <i className="icono"></i>
                
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
                </div>

                <img className="icon-apparkme-pc" src="http://localhost:8100/assets/icon/logo-apparkame.svg"></img>

            </div>
        </IonContent>
    </IonPage>
  );
};

export default Login;