import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const SectionStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const FormStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 500px;
`;

export const LabelStyle = css`
    display: block;
    margin: 20px 0 0 0;
`;

export const InputStyle = css`
    display: block;
    width: 320px;
    height: 46px;
    
    font-size: 16px;
    border: none;
    border-bottom: 1px solid ${COLORS.BLACK_400};
    outline: 0;
    padding-left: 6px;
    margin-top: 10px;
`;

export const ButtonStyle = css`
    width: 320px;
    height: 46px;

    font-size: 16px;
    color: ${COLORS.WHITE_700};
    background-color: ${COLORS.BLUE_600};
    border: none;
    border-radius: 5px;
    margin-top: 30px;

    :hover{
        background-color: ${COLORS.BLUE_700};
    }
`;