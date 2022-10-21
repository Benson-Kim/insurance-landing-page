import React from "react";

import { BsArrowRight } from "react-icons/bs";

import ArrowUp from "../images/up-arrow.png";
import ContactBackground from "../images/contactbg.svg";

const Contact = () => {
	return (
		<section className='px-3 pt-24 bg-white md:px-6 xl:px-24 ' id='contact'>
			<div className='relative'>
				<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
					Get a Free Estimate
					<img src={ArrowUp} alt='' className='w-12 ml-2 rotate-90' />
				</h4>
				<img src={ContactBackground} alt='' className=' opacity-80' />
				<div className='mx-6 md:mx-12 xl:mx-44'>
					<div className='absolute top-16 left-1/4 '>
						<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
							Get an Insurance{" "}
							<span className='text-primary-pink'>Quote to</span>
							<br /> Get Started!
						</p>
					</div>
					<form
						action=''
						className='absolute w-3/5 px-12 py-6 border rounded-lg shadow-md focus-within:shadow-xl left-5 top-1/4 border-primary-blue border-opacity-30'
					>
						<div className='grid grid-cols-1 gap-4 my-8 place-content-center md:grid-cols-2'>
							<div className='relative col-span-1 border-2 rounded border-primary-blue border-opacity-20 focus-within:border-opacity-50 '>
								<input
									type='text'
									placeholder='Firstname'
									className='w-full capitalize h-full px-3.5 pt-3.5 pb-2 transition  outline-none duration-500 rounded ease-in-out border-none peer focus:placeholder:opacity-0 placeholder:text-primary-blue placeholder:text-opacity-60 text-lg text-primary-blue text-opacity-80'
								/>
								<label className='absolute top-0 px-1 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out opacity-0 text-primary-blue left-4 peer-focus:bg-white peer-focus:-translate-y-1/2 peer-focus:opacity-100'>
									Firstname
								</label>
							</div>
							<div className='relative col-span-1 border-2 rounded border-primary-blue border-opacity-20 focus-within:border-opacity-50 '>
								<input
									type='text'
									placeholder='Lastname'
									className='w-full capitalize h-full px-3.5 pt-3.5 pb-2 transition  outline-none duration-500 rounded ease-in-out border-none peer focus:placeholder:opacity-0 placeholder:text-primary-blue placeholder:text-opacity-60 text-lg text-primary-blue text-opacity-80'
								/>
								<label className='absolute top-0 px-1 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out opacity-0 text-primary-blue left-4 peer-focus:bg-white peer-focus:-translate-y-1/2 peer-focus:opacity-100'>
									Lastname
								</label>
							</div>
							<div className='relative col-span-1 border-2 rounded md:col-span-2 border-primary-blue border-opacity-20 focus-within:border-opacity-50 '>
								<input
									type='email'
									placeholder='email'
									className='w-full capitalize h-full px-3.5 pt-3.5 pb-2 transition  outline-none duration-500 rounded ease-in-out border-none peer focus:placeholder:opacity-0 placeholder:text-primary-blue placeholder:text-opacity-60 text-lg text-primary-blue text-opacity-80'
								/>
								<label className='absolute top-0 px-1 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out opacity-0 text-primary-blue left-4 peer-focus:bg-white peer-focus:-translate-y-1/2 peer-focus:opacity-100'>
									Email
								</label>
							</div>
							<div className='relative col-span-1 border-2 rounded border-primary-blue border-opacity-20 focus-within:border-opacity-50 '>
								<input
									type='text'
									placeholder='Lastname'
									className='w-full capitalize h-full px-3.5 pt-3.5 pb-2 transition  outline-none duration-500 rounded ease-in-out border-none peer focus:placeholder:opacity-0 placeholder:text-primary-blue placeholder:text-opacity-60 text-lg text-primary-blue text-opacity-80'
								/>
								<label className='absolute top-0 px-1 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out opacity-0 text-primary-blue left-4 peer-focus:bg-white peer-focus:-translate-y-1/2 peer-focus:opacity-100'>
									Lastname
								</label>
							</div>
							<div className='relative col-span-1 border-2 rounded border-primary-blue border-opacity-20 focus-within:border-opacity-50 '>
								<input
									type='number'
									placeholder='Limit Balance ($)'
									min='500'
									step='20'
									className='w-full capitalize h-full px-3.5 pt-3.5 pb-2 transition  outline-none duration-500 rounded ease-in-out border-none peer focus:placeholder:opacity-0 placeholder:text-primary-blue placeholder:text-opacity-60 text-lg text-primary-blue text-opacity-80'
								/>
								<label className='absolute top-0 px-1 text-lg font-medium tracking-wide transition-all duration-300 ease-in-out opacity-0 text-primary-blue left-4 peer-focus:bg-white peer-focus:-translate-y-1/2 peer-focus:opacity-100'>
									Limit Balance
								</label>
							</div>
						</div>
						<button
							type='submit'
							className='flex items-center gap-x-1.5 bg-primary-pink transition-all ease-in-out duration-500 text-white text-lg px-4 py-2 hover:shadow-md hover:bg-primary-blue'
						>
							Get a Quote
							<i>
								<BsArrowRight />
							</i>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
