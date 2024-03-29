import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'reactjs-popup/dist/index.css';
import "./deleteAcct.css";
import { serverURL } from '../index.js';

function handleButtonPress() {
    var url = `${serverURL}/auth/delete-user`;
    const config = {
        headers:{
          "Authorization": `Bearer ${window.sessionStorage.getItem("userToken")}`
        }
    };

    axios.delete(url, config).then((response) => {
        // const data = response.data;
        // setEmail(data);
        window.sessionStorage.removeItem("userToken");
        console.log("Account successfully deleted");
    });
}

function returnButton (value) {
    return (<input type="submit" value={value} onClick={() => handleButtonPress()}/>);
}

function DeleteAcct() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    useEffect(() => {
        if (window.sessionStorage.getItem("userToken") === null) {
            //user is not logged in, redirect to /login
            navigate('/login');
            return;
        }

        navigate('/deleteacct');
        
        var url = `${serverURL}/auth/user`;
        const config = {
            headers:{
            "Authorization": `Bearer ${window.sessionStorage.getItem("userToken")}`
            }
        };
        
        axios.get(url, config).then((response) => {
            const data = response.data;
            setEmail(data);
        });
    }, [])

    return (
        <div data-testid="delete_parent" className='deleteparent'>
            <div className="gold-background">
                <div data-testid="delete_header" className="Purd-Head2">
                    Purdue Course Finder
                </div>
                <div data-testid="delete_back_button" className='back-button'>
                    <a href="/modifyAccount" className="button2">Go Back</a>
                </div>
                <p>&nbsp;</p>
            </div>

            <p>&nbsp;</p>

            <div>
                <div className="user-info">
                    <p>First Name: first_name</p>
                    <p>Last Name: last_name</p>
                    <p>Email: {email}</p>
                </div>
            </div>

            <p>&nbsp;</p>

            <div data-testid="delete_delete_button" className="box">
                <a href="#ConfirmDelete" className="button2">Delete Account</a>
            </div>

            <div data-testid="delete_confirm_window" className="overlay" id="ConfirmDelete">
                <div className="wrapper" data-testid="delete_popup">
                    <h2>Are you sure you would like to Delete Your Account? This cannot be undone.</h2>
                    {/* eslint-disable-next-line */}
                    <a href="#" className="close">&times;</a>
                    <div className="content">
                        <div className="container">
                            <form>
                                <div className="box">
                                    {returnButton('Confirm')}
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteAcct;
