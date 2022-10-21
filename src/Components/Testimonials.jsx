import React from "react";
import { TbStepInto } from "react-icons/tb";

const Testimonials = () => {
	return (
		<section className='mx-6 pt-44 md:mx-12 xl:mx-44' id='testimonials'>
			<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
				Testimonials
				<TbStepInto className='w-10 ml-2 -rotate-90' />
			</h4>
			<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
				What our <span className='text-primary-pink'>Customers</span>{" "}
				are
				<br /> Talking About
			</p>
			<div className=''>
				<div className=''>
					<img
						src='https://wallpapers.com/wallpapers/fiery-world-map-t6gvri5wcwba85sl.html?embed=true'
						alt=''
					/>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
