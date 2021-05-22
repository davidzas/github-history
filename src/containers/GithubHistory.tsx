import React, { useState } from 'react';
import './GithubHistory.scss';
import socketClient from "socket.io-client";
import { History } from '../components/History';
import { CommitType } from '../components/Commit';
const SERVER = "http://127.0.0.1:8080/";


export const GIthubHistory = () => {

    const [data, setData] = useState<Array<CommitType>>();
    const [socket, setSocket] = useState<any>();

    const parseData = (rawData: any) => {
        const commits: Array<CommitType> = [];
        console.log(rawData);
        rawData && rawData.map((commit: any) => {
            return commits.push({
                committer: commit.commit.committer.name,
                date: commit.commit.committer.date,
                message: commit.message,
                sha: commit.sha,
                url: commit.html_url
            });
        });
        return commits;
    };

    const configureSocket = () => {
        let s = socketClient(SERVER);
        s.on('connection', () => {
            console.log('Socket connected');
            s.emit('refresh');
        });
        s.on('data', (d: any) => setData(parseData(d)));
        setSocket(s);
    };

    !socket && configureSocket();

    return (
        <div className='github-history-container'>
            <div className='main-panel'>
                <h2>Check in real time this project's github history</h2>
                <History commits={data} />
            </div>

        </div>
    );
};


