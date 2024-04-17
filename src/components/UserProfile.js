import React, { useEffect, useState } from 'react';

const UserProfile = () => {
 const url = "https://randomuser.me/api/"; 

 const [users, setUsers] = useState([]); 

 async function fetchUser() {
    const res = await fetch(url);
    const data = await res.json();
    setUsers(data.results);
 }

 useEffect(() => {
    fetchUser();
 }, []);
 return (
    <div className="container mx-auto p-4">
      <button 
        onClick={fetchUser} 
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Refresh
      </button>
      <div>
        {users.map((eachUser) => {
          return (
            <div key={eachUser.id.value} className="bg-gray-200 p-4 rounded-lg mb-4">
              <h3 className="text-xl font-bold">Firstname: {eachUser.name.first}</h3>
              <h3 className="text-xl font-bold">Lastname: {eachUser.name.last}</h3>
              <p>Email: {eachUser.email}</p>
              <img src={eachUser.picture.medium} alt={eachUser.name.first} className="w-32 h-32 rounded-full mx-auto mt-4"/>
            </div>
          );
        })}
      </div>
    </div>
 );
};

export default UserProfile;
