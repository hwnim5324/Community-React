import NavBar from '../NavBar/NavBar';
import { HeaderStyle } from './Header.styles';

const Header = (): JSX.Element => {
	return(
		<header css={HeaderStyle}>
			<NavBar />
		</header>
	);
};

export default Header;