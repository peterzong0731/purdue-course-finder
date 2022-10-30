import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Favorites() {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (window.sessionStorage.getItem("userToken") === null) {
            //user is not logged in, redirect to /login
            navigate('/login');
            return;
        }
    }, [])
  
  return (
    <div>
        <p> Favorites Page has not been implemented yet </p>
    </div>
  );
}

export default Favorites;