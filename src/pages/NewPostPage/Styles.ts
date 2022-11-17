import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const SectionStyle = css`
    padding: 0 10% 0 10%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end
`;

export const TitleInputStyle = css`
    display: block;
    width: 100%;
    height: 52px;
    font-size: 16px;
    border: 1px solid ${COLORS.BLACK_200};
    border-radius: 3px;
    outline: 0;
    padding-left: 10px;
    margin: auto;
    margin-bottom: 30px;

    ::placeholder{
        color: ${COLORS.BLACK_300};
    }
    :focus{
        outline: 1px solid ${COLORS.BLACK_500};
    }
`;

export const SubmitButtonStyle = css`
    width: 200px;
    height: 52px;
    background-color: ${COLORS.BLACK_700};
    color: ${COLORS.WHITE_700};
    font-size: 16px;
    border-radius: 3px;
    margin-top: 40px;

    :hover{
        background-color: ${COLORS.BLACK_600};
    }
`;