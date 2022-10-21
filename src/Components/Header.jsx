import React from "react";
import { Link } from "react-router-dom";
import ScrollTo from "react-scroll-into-view";

const Header = ({ stickyHeader }) => {
	return (
		<nav id='mainHeader' ref={stickyHeader} className='shadow-lg'>
			<div className='flex items-center justify-between w-full py-2 mt-6 mb-2 px-28 '>
				<div className=''>
					<Link to='/'>
						<img
							src='./logo-cropped.svg'
							alt=''
							className='object-contain h-10 w-28'
						/>
					</Link>
				</div>
				<div className=''>
					<ul className='flex items-center w-2/3 gap-x-10'>
						<li className='mb-1 py-0.5 px-1.5 cursor-pointer '>
							<Link
								to=''
								className='text-lg font-medium tracking-wide transition duration-500 ease-in-out text-primary-gray hover:text-primary-pink'
							>
								Home
							</Link>
						</li>
						<li className='mb-1 py-0.5 px-1.5 cursor-pointer '>
							<ScrollTo selector='#about'>
								<Link
									to=''
									className='text-lg font-medium tracking-wide transition duration-500 ease-in-out text-primary-gray hover:text-primary-pink'
								>
									About
								</Link>
							</ScrollTo>
						</li>
						<li className='mb-1 py-0.5 px-1.5 cursor-pointer '>
							<ScrollTo selector='#services'>
								<Link
									to=''
									className='text-lg font-medium tracking-wide transition duration-500 ease-in-out text-primary-gray hover:text-primary-pink'
								>
									Services
								</Link>
							</ScrollTo>
						</li>
						<li className='mb-1 py-0.5 px-1.5 cursor-pointer '>
							<ScrollTo selector='#team'>
								<Link
									to=''
									className='text-lg font-medium tracking-wide transition duration-500 ease-in-out text-primary-gray hover:text-primary-pink'
								>
									Team
								</Link>
							</ScrollTo>
						</li>
						<li className='mb-1 py-0.5 px-1.5 cursor-pointer '>
							<ScrollTo selector='#blogs'>
								<Link
									to=''
									className='text-lg font-medium tracking-wide transition duration-500 ease-in-out text-primary-gray hover:text-primary-pink'
								>
									News
								</Link>
							</ScrollTo>
						</li>
					</ul>
				</div>
				<div className=''>
					<ScrollTo selector='#contact'>
						<button className='bg-primary-blue hover:shadow-md transition ease-in-out duration-500 text-white text-lg px-4 py-1.5 hover:translate-x-0.5'>
							Get a quote
						</button>
					</ScrollTo>
				</div>
			</div>
		</nav>
	);
};

export default Header;
