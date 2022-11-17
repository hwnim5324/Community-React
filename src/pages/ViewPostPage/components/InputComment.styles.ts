import { css } from '@emotion/react';
import { COLORS } from '../../../styles/Colors';

export const CommentInputStyle = css`
    font-family: 'Noto Sans KR',sans-serif;
    resize: none;
    border: 1px solid ${COLORS.BLACK_300};
    border-radius: 5px;
    padding: 10px 10px 10px 10px;
    font-size: 16px;
    width: 100%;
    height: 120px;
`;

export const SubmitButtonStyle = css`
    width: 120px;
    height: 48px;
    border-radius: 5px;
    font-size: 16px;
    margin: 30px 0 30px 0;
    float: right;
    color: ${COLORS.WHITE_700};
    background-color: ${COLORS.BLACK_700};
    :hover{
        background-color: ${COLORS.BLACK_600};
    }
`;