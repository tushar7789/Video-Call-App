import React from 'react';
import './index.css';
import axios from 'axios';

const HomePage = () => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const name = document.getElementById("username").value;
        console.log("great ", name);

        try {
            const response = await axios.post("http://127.0.0.1:3001/user", {
                "username" : name,
            });
            console.log(response);
        }catch (error) {
            console.log(error);
        }

    }

    return (
        <div id="container">
            <div id="input-container">
                <input type="text" placeholder="Enter name " id="username"/>
                <button onClick={onSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default HomePage;