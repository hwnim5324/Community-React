import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ( props: Props ) => {
	return(
		<>
			<Header />
			<main>
				{props.children}
			</main>
			<Footer />
		</>
	);
};

export default Layout;