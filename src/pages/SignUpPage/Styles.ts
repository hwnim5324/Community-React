import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const SectionStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: calc((100% - 656px)/4);
`;

export const FormStyle = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
`;

export const TitleStyle = css`
    width: 460px;
    margin: auto;
    margin-bottom: 30px;
    font-size: 20px;
`;

export const InputStyle = css`
    width: 460px;
    height: 52px;
    font-size: 16px;
    border: 1px solid ${COLORS.BLACK_200};
    border-radius: 8px;
    outline: 0;
    padding-left: 10px;
    margin-top: 20px;

    ::placeholder{
        color: ${COLORS.BLACK_200};
    }
    :focus{
        outline: 1px solid ${COLORS.BLACK_500};
    }
`;

export const SubmitButtonStyle = css`
    width: 460px;
    height: 52px;
    font-size: 16px;
    border-radius: 8px;
    border: 0;
    margin-top: 50px;
    color: ${COLORS.WHITE_700};
    background-color: ${COLORS.BLACK_700};
    cursor: pointer;

    :hover{
        background-color: ${COLORS.BLACK_600};
    }
`;

export const RadioDivStyle = css`
    display: flex;
    justify-content: space-between;
    width: 460px;
    margin-top: 20px;
`;

export const RadioButtonStyle = css`
    width: 200px;
    height: 52px;
    border: 1px solid ${COLORS.BLACK_200};
    border-radius: 8px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    :hover{
        color: ${COLORS.WHITE_700};
        background-color: ${COLORS.BLACK_600};
        border: 0;
    }
`;

export const HiddenRadio = css`
    display: none;
    :checked + label{
        color: ${COLORS.WHITE_700};
        background-color: ${COLORS.BLACK_700};
        border: 0;
    }
`;