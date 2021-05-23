import React from 'react';
import { Commit, CommitType } from './Commit';

export type HistoryType = {
    commits?: Array<CommitType>;
};

export const History = ({ commits }: HistoryType) => {
    console.log(commits);
    return (
        <div>
            {commits && commits.map(c => {
                return <Commit {...c} />;
            })}
        </div>
    );
};
