import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MainStyle } from './/Layout.styles';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ( props: Props ) => {
	return(
		<>
			<Header />
			<main css={MainStyle}>
				{props.children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;