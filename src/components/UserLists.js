/*
    Creado por Kevin Benavides
 */

import React from 'react';
import {useState} from "react";

function formatName(user){
    return `${user.name} ${user.lastname}`;
}

function UserList ({users}) {

    const[usersList, setUsersList] = useState(users);

     const handleAddName = (event) =>{
         console.log("e", event)
         console.log("Añadir")
         const newName = document.querySelector("#name").value;
         const newLastname = document.querySelector("#lastname").value;
         console.log("newName", newName)
         console.log("newLastname", newLastname)
         const newUser= {
             name: newName,
             lastname: newLastname
         }

         setUsersList((prevUsersList) => {
             //SPREAD OPERATOR
             console.log(prevUsersList.name[1])
             return [...prevUsersList, newUser ];
         })

         document.querySelector("#name").value="";
         document.querySelector("#lastname").value="";
 }

    return (
        <>
            <h1>Lista de usuarios</h1>
            <input type="text" id="name" placeholder="Ingrese un nombre"/>
            <input type="text" id="lastname" placeholder="Ingrese un apellido"/>
            <button onClick={handleAddName}> Añadir</button>
            <ul>
                {
                    usersList.map((user, index) => {
                        return <li key={index}> {formatName(user)}</li>
                    })
                }
            </ul>
        </>
    );
}

export default UserList;