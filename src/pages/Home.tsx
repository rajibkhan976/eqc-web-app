import Accordion from "../components/Accordion";
import Carousel from "../components/Carousel";

const Home = () => {
	return (
		<div className='row mx-auto'>
			<div className='col-12 my-4'>
				<Carousel />
			</div>
			<div className='col-12 mb-4'>
				<h3 className='my-4'>About us</h3>
				<Accordion />
			</div>
		</div>
	);
};

export default Home;
