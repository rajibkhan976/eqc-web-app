import { useState } from "react";

import productOne from "../assets/product-1.jpg";
import productTwo from "../assets/product-2.jpg";
import productThree from "../assets/product-3.jpg";
import productFour from "../assets/product-4.jpg";
import productFive from "../assets/product-5.jpg";
import productSix from "../assets/product-6.jpg";

import Card from "../components/Card";
import FeatureBanner from "../components/FeatureBanner";
import Modal from "../components/Modal";

const Service = () => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<div className='row mx-auto'>
			<div className='col-12 my-4'>
				<FeatureBanner setOpen={setOpen} />
				<Modal
					open={open}
					setOpen={setOpen}
				/>
			</div>
			<h3>Our services</h3>
			<div className='col-12 my-4 d-flex flex-wrap justify-content-center'>
				<Card imgSrc={productOne} />
				<Card imgSrc={productTwo} />
				<Card imgSrc={productThree} />
				<Card imgSrc={productFour} />
				<Card imgSrc={productFive} />
				<Card imgSrc={productSix} />
			</div>
		</div>
	);
};

export default Service;
