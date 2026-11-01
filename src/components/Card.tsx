type CardProps = {
	imgSrc: string;
};

const Card = ({ imgSrc }): CardProps => {
	return (
		<div
			className='card mx-2 my-2'
			style={{ width: "18rem" }}
		>
			<img
				src={imgSrc}
				className='card-img-top'
				alt={imgSrc}
			/>
			<div className='card-body'>
				<h5 className='card-title'>Card title</h5>
				<p className='card-text'>
					Some quick example text to build on the card title and make up the
					bulk of the card’s content.
				</p>
				<a
					href='#'
					className='btn btn-secondary'
				>
					Know more
				</a>
			</div>
		</div>
	);
};

export default Card;
