type ToastsProps = {
	open: boolean;
	setOpen: () => void;
};

const Toasts = ({ open, setOpen }): ToastsProps => {
	console.log(open);

	return (
		<>
			{open ? (
				<div
					className='toast mb-3'
					role='alert'
					aria-live='assertive'
					aria-atomic='true'
					style={{ display: "block" }}
				>
					<div className='toast-header'>
						<strong className='me-auto'>Success</strong>
						<small>11 mins ago</small>
						<button
							type='button'
							className='btn-close'
							data-bs-dismiss='toast'
							aria-label='Close'
							onClick={() => setOpen(false)}
						></button>
					</div>
					<div className='toast-body'>
						Hello, world! This is a toast message.
					</div>
				</div>
			) : null}
		</>
	);
};

export default Toasts;
