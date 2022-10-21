import React from "react";

import { BsFillTelephonePlusFill } from "react-icons/bs";
import {
	TbBrandGitlab,
	TbBrandSlack,
	TbBrandTidal,
	TbSitemap,
} from "react-icons/tb";

import HeroBackground from "../images/herobg.png";
import Persona from "../images/persona.jpg";

const Hero = () => {
	return (
		<section className='px-6 pt-4 bg-white md:px-12 xl:px-44' id='about'>
			<div className='relative'>
				<img src={HeroBackground} alt='' className=' opacity-80' />
				<div className='absolute top-0 left-56 '>
					<h2 className='text-4xl font-bold leading-relaxed tracking-wide text-center text-primary-blue'>
						Insurance for the{" "}
						<span className='text-primary-pink'>Better of</span>
						<br /> Your Family Life
					</h2>
				</div>
				<div className='absolute flex flex-col items-center w-1/4 px-3 py-6 rounded-lg bg-tertiary-gray left-14 top-1/4'>
					<h5 className='mb-3 text-xl font-semibold leading-relaxed text-primary-blue '>
						Find the Agent Now
					</h5>
					<div className='flex items-center gap-x-3'>
						<i className='flex items-center justify-center w-12 h-12 rounded bg-primary-pink'>
							<BsFillTelephonePlusFill className='text-3xl opacity-90 fill-white' />
						</i>
						<div className=''>
							<p className='text-lg text-primary-blue text-opacity-80'>
								Emergency Contact
							</p>
							<p className='text-lg font-semibold text-primary-blue text-opacity-90'>
								+01 477 699 565
							</p>
						</div>
					</div>
				</div>
				<div className='absolute flex flex-wrap items-center w-1/2 -mt-10 justify-evenly gap-y-8 left-8 top-2/3'>
					<div className='flex items-center gap-x-1.5 px-4 py-2 cursor-pointer transition ease-in-out duration-500 rounded  hover:bg-white hover:text-opacity-100 group hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-1 text-primary-blue text-opacity-50 bg-tertiary-gray bg-opacity-0 '>
						<TbBrandSlack className='text-4xl rounded-full p-0.5 bg-primary-blue bg-opacity-20' />
						<p className='text-xl font-semibold'>ProfitWell</p>
					</div>
					<div className='flex items-center gap-x-1.5 px-4 py-2 cursor-pointer transition ease-in-out duration-500 rounded  hover:bg-white hover:text-opacity-100 group hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-1 text-primary-blue text-opacity-50 bg-tertiary-gray bg-opacity-0 '>
						<TbBrandTidal className='text-4xl rounded-full p-0.5 bg-primary-blue bg-opacity-20' />
						<p className='text-xl font-semibold'>Amplitude</p>
					</div>
					<div className='flex items-center gap-x-1.5 px-4 py-2 cursor-pointer transition ease-in-out duration-500 rounded  hover:bg-white hover:text-opacity-100 group hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-1 text-primary-blue text-opacity-50 bg-tertiary-gray bg-opacity-0 '>
						<TbSitemap className='text-4xl rounded-full p-0.5 bg-primary-blue bg-opacity-20' />
						<p className='text-xl font-semibold'>Sitemate</p>
					</div>

					<div className='flex items-center gap-x-1.5 px-4 py-2 cursor-pointer transition ease-in-out duration-500 rounded  hover:bg-white hover:text-opacity-100 group hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-1 text-primary-blue text-opacity-50 bg-tertiary-gray bg-opacity-0 '>
						<TbBrandGitlab className='text-4xl rounded-full p-0.5 bg-primary-blue bg-opacity-20' />
						<p className='text-xl font-semibold'>Yappy</p>
					</div>
				</div>
				<div className='absolute top-0 right-0'>
					<img
						src={Persona}
						alt=''
						className='rounded-full  w-[28rem] h-[28rem]'
					/>
				</div>
			</div>

			<div className='flex flex-col lg:flex-row'></div>
		</section>
	);
};

export default Hero;

export const Trustees = ({ brandlogo, brandname }) => {
	return (
		<div className='flex items-center gap-x-1.5 px-4 py-2 cursor-pointer transition ease-in-out duration-500 rounded  hover:bg-white hover:text-opacity-100 group hover:bg-opacity-100 hover:shadow-lg hover:-translate-y-1 text-primary-blue text-opacity-50 bg-white bg-opacity-0 '>
			<i className='w-10 h-10 bg-opacity-0 rounded-full bg-primary-blue group-hover:bg-opacity-10'>
				{brandlogo}
			</i>
			<p>{brandname}</p>
		</div>
	);
};
