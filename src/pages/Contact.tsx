import { useState } from "react";

import teamOne from "../assets/team-1.jpg";
import teamTwo from "../assets/team-2.jpg";

import Card from "../components/Card";
import ContactForm from "../components/ContactForm";
import FeatureBanner from "../components/FeatureBanner";
import Modal from "../components/Modal";
import Toasts from "../components/Toasts";

const Contact = () => {
	const [open, setOpen] = useState<boolean>(false);
	const [openToasts, setOpenToasts] = useState<boolean>(false);

	return (
		<div className='row mx-auto'>
			<div className='col-12 col-md-6 mx-auto my-4'>
				<Toasts
					open={openToasts}
					setOpen={setOpenToasts}
				/>
				<ContactForm setOpen={setOpenToasts} />
			</div>
			<div className='col-12 mb-3'>
				<FeatureBanner setOpen={setOpen} />
				<Modal
					open={open}
					setOpen={setOpen}
				/>
			</div>
			<h3>Our team</h3>
			<div className='col-12 my-3 d-flex flex-wrap justify-content-center'>
				<Card imgSrc={teamOne} />
				<Card imgSrc={teamTwo} />
			</div>
		</div>
	);
};

export default Contact;
