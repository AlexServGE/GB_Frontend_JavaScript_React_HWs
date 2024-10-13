import { Bottom } from '../../../../shared-components/Bottom/Bottom';
import { Categories } from '../Categories/Categories';
import { Footer } from '../../../../shared-components/Footer/Footer';
import { Header } from '../../../../shared-components/Header/Header';
import { Intro } from '../Intro/Intro';
import { Offers } from '../../../../shared-components/Offers/Offers';
import ProductsList from '../ProductsList/ProductsList';
import { Subscribe } from '../../../../shared-components/Subscribe/Subscribe';

export const IndexPage = () => {
	return (
		<>
			<Header />
			<Intro />
			<Categories />
			<ProductsList />
			<Offers />
			<Subscribe />
			<Bottom />
			<Footer />
		</>
	);
};
