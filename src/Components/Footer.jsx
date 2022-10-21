import React from "react";

import { Link } from "react-router-dom";

import { FiSend } from "react-icons/fi";
import {
	RiFacebookFill,
	RiInstagramLine,
	RiMailSendFill,
	RiPhoneFill,
	RiTwitterFill,
} from "react-icons/ri";
import { BiMapPin } from "react-icons/bi";
import { FaPinterestP } from "react-icons/fa";

const Footer = () => {
	const [scrollTop, setScrollTop] = React.useState(false);
	React.useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.pageYOffset > 340) {
				setScrollTop(true);
			} else {
				setScrollTop(false);
			}
		});
	}, []);
	const bottomToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<footer className='bg-tertiary-pink'>
			<div className='flex justify-between py-12 mx-12 gap-x-12'>
				<article className='w-1/5 '>
					<h4 className='mb-8 text-lg font-medium text-primary-blue'>
						Explore
					</h4>
					<p className='py-1 mb-4 leading-7 text-primary-blue text-opacity-60'>
						Interactively disseminate client-based functionalies and
						resource-levelling. Competently network equity invested
						web-readiness
					</p>
					<ul className='flex gap-x-3.5 items-center'>
						<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-primary-pink'>
							<i>
								<RiFacebookFill className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
							</i>
						</li>
						<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-primary-pink'>
							<i>
								<RiInstagramLine className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
							</i>
						</li>
						<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-primary-pink'>
							<i>
								<RiTwitterFill className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
							</i>
						</li>
						<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out bg-white rounded-md cursor-pointer group hover:bg-primary-pink'>
							<i>
								<FaPinterestP className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
							</i>
						</li>
					</ul>
				</article>
				<article className='w-1/4'>
					<h4 className='mb-8 text-lg font-medium text-primary-blue'>
						Explore
					</h4>
					<div className='flex justify-between gap-x-9'>
						<ul>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>About Us</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Our Services</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>The Team</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Blog & News</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Our Partners</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Contact Us</Link>
							</li>
						</ul>
						<ul>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Terms & Conditions</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Privacy Policy</Link>
							</li>
							<li className='py-1 mb-1 transition duration-500 ease-in-out cursor-pointer text-primary-blue text-opacity-70 hover:translate-x-2 hover:text-opacity-100'>
								<Link to='/'>Support</Link>
							</li>
						</ul>
					</div>
				</article>
				<article>
					<h4 className='mb-8 text-lg font-medium text-primary-blue'>
						Contact
					</h4>
					<div className='flex flex-col gap-y-4'>
						<div className='flex gap-x-2.5 items-center'>
							<i>
								<RiPhoneFill className='text-3xl fill-primary-blue' />
							</i>
							<p className='text-lg font-light leading-7 tracking-wide text-opacity-75 text-primary-blue'>
								+61 456 487 789
							</p>
						</div>
						<div className='flex gap-x-2.5 items-center'>
							<i>
								<RiMailSendFill className='text-3xl fill-primary-blue' />
							</i>
							<p className='text-lg font-light leading-7 tracking-wide text-opacity-75 text-primary-blue'>
								hello@thequietyinsurance.com
							</p>
						</div>
						<div className='flex gap-x-2.5 items-center'>
							<i>
								<BiMapPin className='text-3xl fill-primary-blue' />
							</i>
							<p className='text-lg font-light leading-7 tracking-wide text-opacity-75 text-primary-blue'>
								123, Westlands, Melbourne <br /> New York City,
								USA
							</p>
						</div>
					</div>
				</article>
				<article>
					<h4 className='mb-8 text-lg font-medium text-primary-blue'>
						NewsLetter
					</h4>
					<div className='flex flex-col gap-y-4'>
						<p className='leading-7 text-primary-gray'>
							Sign up for our latest news & articles. We won't gie
							you spam mails.
						</p>

						<form className='flex gap-x-2 bg-white items-center border border-primary-blue border-opacity-25 rounded-full py-1 pr-2.5 pl-4 transition ease-in-out duration-500  focus-within:border-opacity-75'>
							<input
								type='email'
								placeholder='Enter your Email'
								className='w-full h-full text-lg outline-none peer ring-0 focus:ring-0 focus:outline-none placeholder:text-secondary-gray text-primary-gray placeholder:font-light placeholder:text-base'
							/>
							<button className='bg-primary-pink bg-opacity-70 peer-focus-within:bg-opacity-100 transition ease-in-out duration-500 p-1.5 flex items-center justify-center rounded-full'>
								<i className=''>
									<FiSend className='text-2xl text-white' />
								</i>
							</button>
						</form>
					</div>
				</article>
			</div>
			{scrollTop && (
				<button
					onClick={bottomToTop}
					className='fixed flex items-center justify-center w-10 h-10 text-4xl font-bold text-white transition duration-500 ease-in-out border-none rounded-full cursor-pointer bottom-6 right-6 bg-primary-blue hover:bg-primary-pink focus:bg-primary-pink'
				>
					&#8593;
				</button>
			)}
			<hr className='mx-40 border-t border-opacity-50 border-secondary-gray' />
			<div className='py-4'>
				<p className='font-medium leading-7 text-center text-primary-gray'>
					Copyright @2022. All rights reserved by Quiety
				</p>
			</div>
		</footer>
	);
};

export default Footer;
