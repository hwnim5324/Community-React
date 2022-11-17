import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

export const PostViewerStyle = css`
    width: 100%;
    min-height: 46vh;
    margin-top: 30px;
    margin-bottom: 40px;
    padding-top: 30px;
    border-top: 1px solid ${COLORS.BLACK_300};
    border-bottom: 1px solid ${COLORS.BLACK_300};

    div{
        font-size: 16px;
    }
`;