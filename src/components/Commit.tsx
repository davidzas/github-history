import React from 'react';
import moment from 'moment';

export type CommitType = {
    commiter: string;
    date: string;
    message: string;
    url: string;
    sha: string;
}

export const Commit = (props: CommitType) => {
    const { commiter, date, message, url, sha } = props;

    return (
        <div>
            <b>{commiter}</b> {moment(date).fromNow()}
        </div>
    );
};
