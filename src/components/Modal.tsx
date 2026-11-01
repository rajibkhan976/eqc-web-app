type ModalProps = {
	open: boolean;
	setOpen: () => void;
};

const Modal = ({ open, setOpen }): ModalProps => {
	return (
		<>
			{open ? (
				<div
					className='modal fade'
					id='exampleModal'
					tabIndex='-1'
					aria-labelledby='exampleModalLabel'
					aria-hidden='true'
					style={{ display: "block", opacity: "1" }}
				>
					<div className='modal-dialog modal-dialog-centered modal-dialog-scrollable'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h1
									className='modal-title fs-5'
									id='exampleModalLabel'
								>
									Modal title
								</h1>
								<button
									type='button'
									className='btn-close'
									data-bs-dismiss='modal'
									aria-label='Close'
									onClick={() => setOpen(false)}
								></button>
							</div>
							<div className='modal-body'>
								<h2 className='fs-5'>Tooltips in a modal</h2>
								<p>
									<a
										href='#'
										data-bs-toggle='tooltip'
										title='Tooltip'
									>
										This link
									</a>{" "}
									and{" "}
									<a
										href='#'
										data-bs-toggle='tooltip'
										title='Tooltip'
									>
										that link
									</a>{" "}
									have tooltips on hover.
								</p>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-bs-dismiss='modal'
									onClick={() => setOpen(false)}
								>
									Close
								</button>
								<button
									type='button'
									className='btn btn-primary'
									onClick={() => setOpen(false)}
								>
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>
			) : null}
		</>
	);
};

export default Modal;
