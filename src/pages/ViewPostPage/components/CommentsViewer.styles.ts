import { css } from '@emotion/react';

export const CommentsViewerStyle = css`
    padding-bottom: 30px;
    margin: 30px 0 30px 0;
    border-bottom: 1px solid black;
    :last-child{
        border: 0;
    }
`;

export const CommentDetailsStyle = css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    h3{
        font-size: 18px;
    }
    h4{
        font-size: 14px;
    }
`;

export const CommentStyle = css`
    padding: 10px 10px 10px 10px;
    font-size: 16px;
`;