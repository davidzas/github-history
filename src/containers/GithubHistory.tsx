import React from 'react';
import './GithubHistory.scss';
import socketClient from "socket.io-client";
const SERVER = "http://127.0.0.1:8080";


export const GIthubHistory = () => {
    return (
        <div className='github-history-container'>
            <div className='main-panel'>
                <h2>Check in real time this project's github history</h2>
            </div>
        
        </div>
    );
};


