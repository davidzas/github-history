export type HistoryType = {
    sha: string;
    node_id: string;
    commit: Commit;
    url: string;
    html_url: string;
    comments_url: string;
    author?: null;
    committer?: null;
    parents?: (ParentsEntity | null)[] | null;
}
export type Commit = {
    author: AuthorOrCommitter;
    committer: AuthorOrCommitter;
    message: string;
    tree: Tree;
    url: string;
    comment_count: number;
    verification: Verification;
}
export type AuthorOrCommitter = {
    name: string;
    email: string;
    date: string;
}
export type Tree = {
    sha: string;
    url: string;
}
export type Verification = {
    verified: boolean;
    reason: string;
    signature?: null;
    payload?: null;
}
export type ParentsEntity = {
    sha: string;
    url: string;
    html_url: string;
}
