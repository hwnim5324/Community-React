import { Link } from 'react-router-dom';
import { UserNavStyle, LinkStyle } from './/UsersNav.styles';

const UsersNav = ():JSX.Element => {
	return (
		<ul css={UserNavStyle}>
			<li css={LinkStyle}><Link to='/findId'>아이디 찾기</Link></li>|
			<li css={LinkStyle}><Link to='/findPw'>비밀번호 찾기</Link></li>
			<li css={LinkStyle}><Link to='/signup'>회원가입</Link></li>
		</ul>
	);
};

export default UsersNav;