import NavBar from '../NavBar/NavBar';
import { HeaderStyle } from './Header.styles';
import SearchBar from '../SearchBar/SearchBar';

const Header = (): JSX.Element => {
	return(
		<header css={HeaderStyle}>
			<SearchBar />
			<NavBar />
		</header>
	);
};

export default Header;