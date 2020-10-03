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
            <div className="dark">
                
                <img src="http://localhost:8100/assets/icon/logo-apparkame.svg"></img>
                <h5 className="text-context-light" >Bienvenido de vuelta!</h5>
                <br></br>
                <br></br>
                <form >
                    <input type="text" placeholder="MAIL O TELEFONO"/>
                    <br></br>
                    <br></br>
                    <input type="text" placeholder="CONTRASEÑA"/>
                </form>
                <Link href="#">
                    Recuperar contraseña
                </Link>
                
            </div>
            <div>
                <i className="icono"></i>
            </div>
        </IonContent>
    </IonPage>
  );
};

export default Login;