type ContactFormProps = {
	setOpen: () => void;
};

const ContactForm = ({ setOpen }): ContactFormProps => {
	return (
		<>
			<h3 style={{ textAlign: "left" }}>Contact us</h3>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlInput1'
					className='form-label d-block my-3'
					style={{ textAlign: "left" }}
				>
					Email address
				</label>
				<input
					type='email'
					className='form-control'
					id='exampleFormControlInput1'
					placeholder='name@example.com'
				/>
			</div>
			<div className='mb-3'>
				<label
					htmlFor='exampleFormControlTextarea1'
					className='form-label d-block my-3'
					style={{ textAlign: "left" }}
				>
					Message
				</label>
				<textarea
					className='form-control'
					id='exampleFormControlTextarea1'
					rows='3'
				></textarea>
			</div>
			<div className='col-auto'>
				<button
					type='submit'
					className='btn btn-secondary mb-3'
					onClick={() => setOpen(true)}
				>
					Send message
				</button>
			</div>
		</>
	);
};

export default ContactForm;
