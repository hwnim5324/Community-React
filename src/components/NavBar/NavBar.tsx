import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
	return (
		<nav>
			<p>hi</p>
			<ul>
				<li>
					<NavLink to='/'>홈</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;