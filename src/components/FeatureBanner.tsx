import heroImg from "../assets/hero.jpg";

type FeatureBannerProps = {
	setOpen?: () => void;
};

const FeatureBanner = ({ setOpen }): FeatureBannerProps => {
	return (
		<div className='card text-center'>
			<h3 className='card-header'>Featured</h3>
			<img
				src={heroImg}
				alt='hero'
			/>
			<div className='card-body'>
				<h5 className='card-title'>Special title treatment</h5>
				<p className='card-text'>
					With supporting text below as a natural lead-in to additional content.
				</p>
				<button
					type='button'
					className='btn btn-secondary'
					onClick={() => setOpen(true)}
				>
					Show more
				</button>
			</div>
			<div className='card-footer text-body-secondary'>2 days ago</div>
		</div>
	);
};

export default FeatureBanner;
