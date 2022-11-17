import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const DivStyle = css`
    height: 56px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${COLORS.WHITE_700};
    padding: 0 8% 0 8%;
`;

export const InputStyle = css`
    height: 40px;
    width: 540px;
    font-size: 16px;
    border: 1px solid ${COLORS.BLACK_300};
    border-radius: 8px;
    outline: 0;
    padding-left: 10px;
    margin-top: 20px;

    ::placeholder{
        color: ${COLORS.BLACK_300};
    }
    :focus{
        outline: 1px solid ${COLORS.BLACK_300};
    }
`;

export const LogoLinkStyle = css`
    height: 100%;
    display: flex;
    align-items: center;
`;

export const LogoStyle = css`
    height: 70%;
`;