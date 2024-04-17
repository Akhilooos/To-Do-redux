import React, { useEffect } from 'react';

const AddandDeleteuser = () => {
 const api = "https://661f59ee16358961cd9417b1.mockapi.io/api/v1/users";

 const userToAdd = {
    name: "Arjit",
    email: 'arjit@gmail.com',
    avatar: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg",
    id:7
 };

 async function Adduser() {
    let res = await fetch(api, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(userToAdd)
    });

    let data = await res.json();
    console.log("Data from api", data);
 }

 useEffect(()=>{
    Adduser()
},[])


 return (
    <div>AddandDeleteuser</div>
 );
}

export default AddandDeleteuser;
