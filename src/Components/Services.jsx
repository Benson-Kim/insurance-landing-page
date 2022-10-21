import React from "react";

import { Link } from "react-router-dom";

import { CgArrowLongRightR } from "react-icons/cg";

import ArrowUp from "../images/up-arrow.png";

import LifeInsurance from "../images/life-insurance.png";
import BsInsurance from "../images/business-insurance.png";
import HomeInsurance from "../images/home-insurance.png";
import CarInsurance from "../images/car-insurance.png";
import FireInsurance from "../images/fire-insurance.png";
import CargoInsurance from "../images/cargo-insurance.png";

const servicedata = [
	{
		id: 1,
		image: LifeInsurance,
		name: "Life insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
	{
		id: 2,
		image: BsInsurance,
		name: "Business insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
	{
		id: 3,
		image: HomeInsurance,
		name: "Home insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
	{
		id: 4,
		image: CarInsurance,
		name: "Car insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
	{
		id: 5,
		image: CargoInsurance,
		name: "Cargo insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
	{
		id: 6,
		image: FireInsurance,
		name: "Fire insurance",
		description:
			"Competently seize perfomance based growth multidisciplinary total linkage. Change for customized e-service applications",
	},
];

const Services = () => {
	return (
		<section className='pt-24 mx-6 md:mx-12 xl:mx-44' id='services'>
			<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
				Services
				<img src={ArrowUp} alt='' className='w-12 ml-2 rotate-90' />
			</h4>
			<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
				The Right Insurance Plan
				<br /> for <span className='text-primary-pink'>Every Need</span>
			</p>
			<div className='grid grid-cols-1 gap-8 mt-12 mb-8 place-content-center md:grid-cols-3'>
				{servicedata?.map((service, index) => (
					<ServiceCard
						key={index}
						image={service.image}
						name={service.name}
						description={service.description}
					/>
				))}
			</div>
			<p className='mb-12 leading-7 text-center text-primary-blue text-opacity-80'>
				Do you want to explore more services?{" "}
				<Link
					to=''
					className='font-medium underline transition duration-500 ease-in-out text-primary-blue underline-offset-2 hover:text-primary-pink'
				>
					just click here
				</Link>
			</p>
		</section>
	);
};

export default Services;

export const ServiceCard = ({ image, name, description }) => {
	return (
		<div className='col-span-1 group scale-95 bg-white shadow rounded-lg flex flex-col items-center px-6 py-4 hover:shadow-lg transition ease-in-out duration-500 hover:translate-y-0.5 '>
			<div className='flex items-center justify-center p-2 my-4 rounded-full bg-gradient-to-t from-secondary-pink to-white'>
				<img
					src={image}
					alt={name}
					className='object-contain w-16 h-16'
				/>
			</div>
			<h4 className='mb-1 text-xl font-medium leading-7 tracking-wide capitalize text-primary-blue'>
				{name}
			</h4>
			<p className='my-4 leading-6 text-center text-primary-gray '>
				{description}
			</p>
			<Link
				to=''
				className='flex items-center font-medium transition duration-500 ease-in cursor-pointer text-primary-blue hover:text-primary-pink'
			>
				Explore More
				<i>
					<CgArrowLongRightR className='ml-2 text-3xl' />
				</i>
			</Link>
		</div>
	);
};
