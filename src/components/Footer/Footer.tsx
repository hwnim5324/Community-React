import { FooterStyle } from './Footer.styles';

const Footer = (): JSX.Element => {
	return(
		<footer css={FooterStyle}>
			<a href='https://github.com/hwnim5324' target='_blank' rel="noreferrer">Github</a> | <a href='https://velog.io/@hwnim5324' target='_blank' rel="noreferrer">Blog</a>
		</footer>
	);
};

export default Footer;