import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const NavStyle = css`
    height: 100%;
    border-bottom: 1px solid ${COLORS.BLACK_200};
`;

export const NavBarUlStyle = css`
    height: 100%;
    padding: 0 10% 0 10%;
`;

export const NavBarLiStyle = css`
    display: inline-flex;
    float: left;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100px;
    margin: 0;

    :last-child{
        float: right;
    }
`;

export const NavBarSpanStyle = css`
    display: inline-block;
    width: 100%;
    text-align: center;
`;