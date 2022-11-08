/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const NavBar = (): JSX.Element => {
	return (
		<nav>
			<p css={css`
				font-size: 60px;
			`}>hi</p>
			<ul>
				<li>
					<NavLink to='/'>홈</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;