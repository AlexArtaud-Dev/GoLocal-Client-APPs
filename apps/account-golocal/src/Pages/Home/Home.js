import React, {useState} from 'react';
import { Sidebar } from 'primereact/sidebar';
import {withOidcUser, OidcSecure, useReactOidc} from '@axa-fr/react-oidc-context';
import Header from "../../Layouts/Header/Header";
import {Button} from "primereact/button";
import { Avatar } from 'primereact/avatar';
import { AvatarGroup } from 'primereact/avatargroup';
import jwt from 'jsonwebtoken';

export default function Home() {
    const {oidcUser} = useReactOidc();
    let access_token, decodedToken;
    if  (oidcUser){
        access_token = oidcUser.access_token;
        decodedToken = jwt.decode(access_token);
        console.log({token : access_token, decodedToken: decodedToken})

    }


    return(
        <OidcSecure>
        <div>
            <Header/>
            <div style={{display:"flex", flexDirection:"column"}}>
                {/*Push Architecture de base de l'application web -> Artaud Alexandre*/}

                <p >Home Page Account API</p>
            </div>
        </div>
        </OidcSecure>
    );
}
