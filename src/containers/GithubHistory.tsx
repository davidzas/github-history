import React, { useState } from 'react';
import './GithubHistory.scss';
import socketClient from "socket.io-client";
import { History } from '../components/History';
import { CommitType } from '../components/Commit';
import { HistoryType } from '../types';
const SERVER = "http://127.0.0.1:8080/";


export const GIthubHistory = () => {

    const [data, setData] = useState<Array<CommitType>>();
    const [socket, setSocket] = useState<any>();

    const parseData = (rawData: Array<HistoryType>) => {
        const commits: Array<CommitType> = [];
        console.log(rawData);
        rawData && Array.isArray(rawData) && rawData.map((c: HistoryType) => {
            return commits.push({
                committer: c.commit.committer.name,
                date: c.commit.committer.date,
                message: c.commit.message,
                sha: c.sha,
                url: c.html_url
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


