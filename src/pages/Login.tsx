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
                
            </div>
        </IonContent>
    </IonPage>
  );
};

export default Login;