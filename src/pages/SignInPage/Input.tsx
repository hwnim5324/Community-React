import { css } from '@emotion/react';
import { COLORS } from '../../styles/Colors';

interface Props {
    label: string,
    type: string,
    palceholder: string,
    name: string
}

const InputDataHandler = ( e: React.FormEvent<HTMLInputElement> ) => {
//setState
};

const Input: React.FC<Props> = ( props: Props ) => {
	return(
		<label css={LabelStyle}>
			{props.label}
			<input css={InputStyle} type={props.type} placeholder={props.palceholder} name={props.name} onChange={InputDataHandler}/>
		</label>
	);
};

const LabelStyle = css`
    display: block;
    margin: 20px 0 0 0;
`;

const InputStyle = css`
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

export default Input;