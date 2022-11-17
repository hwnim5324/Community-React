import { Link } from 'react-router-dom';
import { DivStyle, InputStyle, LogoLinkStyle, LogoStyle } from './SearchBar.styles';

const SearchBar = ():JSX.Element => {
	return(
		<div css={DivStyle}>
			<Link css={LogoLinkStyle} to='/'><img css={LogoStyle} src='assets/image/logo.png'/></Link>
			<input css={InputStyle} placeholder='검색어를 입력해주세요.' />
			<Link to='/signin'>로그인</Link>
		</div>
	);
};

export default SearchBar;