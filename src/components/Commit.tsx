import React from 'react';
import moment from 'moment';
import './Commit.scss'
export type CommitType = {
    committer: string;
    date: string;
    message: string;
    url: string;
    sha: string;
}

export const Commit = (props: CommitType) => {
    const { committer, date, message, url, sha } = props;

    return (
        <div className='commit-entry' >
            <div><span className='message'><b>{message}</b></span></div>
            <div>
                <span><b>{committer}</b> {moment(date).fromNow()}</span>
                <span>
                    <a href={url} target='_blank' rel='noreferrer'>{sha.substr(0, 7)}</a>
                </span>
            </div>
        </div >
    );
};
