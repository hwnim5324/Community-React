import { Link } from 'react-router-dom';
import { DivStyle, InputStyle, LogoStyle } from './SearchBar.styles';

const SearchBar = ():JSX.Element => {
	return(
		<div css={DivStyle}>
			<img css={LogoStyle} src='assets/image/logo.png'/>
			<input css={InputStyle} />
			<Link to='/signin'>로그인</Link>
		</div>
	);
};

export default SearchBar;