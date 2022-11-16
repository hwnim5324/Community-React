import { NavLink } from 'react-router-dom';
import { NavStyle, NavBarUlStyle, NavBarLiStyle, NavBarSpanStyle } from './NavBar.styles';

interface Props {
	link: string,
	text: string
}

const Nav: React.FC<Props> = ( props: Props ) => {
	return (
		<li css={NavBarLiStyle}>
			<NavLink to={props.link}><span css={NavBarSpanStyle}>{props.text}</span></NavLink>
		</li>
	);
};

const NavBar = (): JSX.Element => {
	return (
		<nav css={NavStyle}>
			<ul css={NavBarUlStyle}>
				<Nav link='/' text='홈' />
			</ul>
		</nav>
	);
};

export default NavBar;