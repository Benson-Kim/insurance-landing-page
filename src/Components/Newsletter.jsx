import React from "react";

const Newsletter = () => {
	return (
		<section className='mx-6 md:mx-12 xl:mx-44'>
			<div className='bg-secondary-pink rounded-md flex flex-col items-center justify-center py-12'>
				<p className='text-center tracking-wide text-primary-blue font-bold text-3xl leading-10'>
					Get your Personalized
					<br /> Insurance Today!{" "}
				</p>

				<p className='text-primary-gray leading-6 text-center my-4 '>
					No one shall be subjected to arbitrary arrest, detention or
					exile. Everyone is entitled in full equality to a fair and
					public hearing by an independent and impartial tribunal.{" "}
				</p>
				<form className='flex items-center gap-x-3'>
					<input
						type='email'
						placeholder='Enter your Email'
						className='ring-0 outline-none bg-white w-full font-light px-3 py-1.5 rounded-full  text-primary-blue text-opacity-40 text-lg border border-primary-pink border-opacity-0 focus:border-opacity-80 peer'
					/>
					<button
						to='/'
						className='text-white hover:bg-opacity-0 hover:border-opacity-75 border border-primary-pink border-opacity-0 hover:text-primary-blue font-medium bg-primary-pink px-5 py-2 tracking-wider rounded-full hover:shadow transition ease-in-out duration-500 peer-focus:bg-opacity-80'
					>
						Suscribe
					</button>
				</form>
			</div>
		</section>
	);
};

export default Newsletter;
