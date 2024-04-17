import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUSers } from '../redux/UserSlice';

const Userlist = () => {
 const dispatch = useDispatch();
 const user = useSelector(state => state.users.userList);

 useEffect(() => {
    dispatch(fetchUSers());
 }, []); 

 return (
    <div>
      {user.map((eachuser) => {
        return (
          <div key={eachuser.id}>
            <p>{eachuser.name}</p>
            <img src={eachuser.avatar}/>
            </div>
        );
      })}
    </div>
 );
};

export default Userlist;
