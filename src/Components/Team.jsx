import React from "react";

import { FaPinterestP } from "react-icons/fa";
import { TbStepInto } from "react-icons/tb";
import { RiFacebookFill, RiInstagramLine, RiTwitterFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Teamdata = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Jonas Kakaroto",
		role: "President & CEO",
		description:
			"Mike Sommers is the 15th chief executive of the American Petroleum Institute (Quiety), the largest trade association representing all aspects of America's natural gas and oil industry.",
		facebook: "",
		instagram: "",
		twitter: "https://benson-kim.com",
		pinterest: "",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		name: "Charlie Green",
		role: "Chief Advocacy Officer",
		description:
			"Mike Sommers is the 15th chief executive of the American Petroleum Institute (Quiety), the largest trade association representing all aspects of America's natural gas and oil industry.",
		facebook: "",
		instagram: "",
		twitter: "https://benson-kim.com",
		pinterest: "",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1571844305128-244233caa679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Mateus Campos Felipe",
		role: "Business Operations and Strategy Director",
		description:
			" she works across all of Quiety's operational channels, enhancing employee engagement throughout the organization and serving as a key strategic partner to Quiety leadership",
		facebook: "",
		instagram: "",
		twitter: "",
		pinterest: "",
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1641759653573-d5cbadb2b45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJsYWNrJTIwd29tYW4lMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		name: "Illias Chebbi",
		role: "Chief Human Resources Officer",
		description:
			"Responsible for leading all aspects of human resources for Quiety including talent acquisition, talent management, training and development, and compensation and benefits.",
		facebook: "",
		instagram: "",
		twitter: "",
		pinterest: "",
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		name: "Ahmed Shera",
		role: "President of Corporate Policy",
		description:
			"He leads Quiety's efforts for corporate issues that apply across all segments of the insurance gas industry value chain",
		facebook: "",
		instagram: "",
		twitter: "",
		pinterest: "",
	},
	{
		id: 6,
		image: "https://media.istockphoto.com/photos/attractive-businesswoman-sitting-at-the-desk-indoors-in-office-stock-picture-id1355693407?b=1&k=20&m=1355693407&s=170667a&w=0&h=CVs9tCYB0uL3C9Fk5r6MNwysl-o6trz3UbqWzAtGSAM=",
		name: "Romane Gautun",
		role: "Chief Financial Officer",
		description:
			"Romane Gautun serves as the CFO of the Quiety Insurance Ltd where he is responsible for Quiety's financial operations, budget management, and aligning financial performance with strategy",
		facebook: "",
		instagram: "",
		twitter: "",
		pinterest: "",
	},
	{
		id: 7,
		image: "https://media.istockphoto.com/photos/male-professional-business-executive-portrait-picture-id530933258?b=1&k=20&m=530933258&s=170667a&w=0&h=-Zz8SvsRQBWBDm4G61t8HmqKetpLrsoi8K8UU0dDhRU=",
		name: "Marvin Meyer",
		role: "Chief Information Officer",
		description:
			"Provides the vision and leadership to advance the Quiety mission through the cost efficient and secure use of Information Technology (IT",
		facebook: "",
		instagram: "",
		twitter: "",
		pinterest: "",
	},
];

const Team = () => {
	return (
		<section className='pt-24 mx-6 md:mx-12 xl:mx-44' id='team'>
			<div className=''>
				<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
					Experties Area
					<TbStepInto className='w-10 ml-2 -rotate-90' />
				</h4>
				<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
					Meet our{" "}
					<span className='text-primary-pink'>Experienced</span>
					<br /> Team Members
				</p>
			</div>
			<div className='grid grid-cols-1 gap-8 mt-12 mb-8 place-content-center md:grid-cols-3'>
				{Teamdata?.map((teammember, index) => (
					<TeamMember
						key={index}
						image={teammember.image}
						name={teammember.name}
						role={teammember.role}
						description={teammember.description}
						facebook={teammember.facebook}
						instagram={teammember.instagram}
						twitter={teammember.twitter}
						pinterest={teammember.pinterest}
					/>
				))}
			</div>
			<p className='mb-12 leading-7 text-center text-primary-blue text-opacity-80'>
				Do you want to explore more team members?{" "}
				<Link
					to=''
					className='font-medium underline transition duration-500 ease-in-out hover:text-primary-blue underline-offset-2 text-primary-pink'
				>
					just click here
				</Link>
			</p>
		</section>
	);
};

export default Team;

export const TeamMember = ({
	image,
	name,
	role,
	description,
	facebook,
	instagram,
	twitter,
	pinterest,
}) => {
	return (
		<Link
			to=''
			className='col-span-1 group  bg-white shadow-md rounded-lg flex flex-col items-center px-6 py-4 hover:shadow-xl transition ease-in-out duration-500 hover:translate-y-0.5 '
		>
			<img
				src={image}
				alt={name}
				className='my-4 transition duration-500 ease-in-out rounded-full h-28 w-28 group-hover:scale-105'
			/>
			<h4 className='mb-1 text-lg font-medium leading-7 text-primary-blue'>
				{name}
			</h4>
			<h6 className='text-opacity-75 text-primary-blue'>{role}</h6>
			<p className='my-4 leading-6 text-center text-primary-gray '>
				{description}
			</p>
			<ul className='flex gap-x-3.5 items-center'>
				{facebook && (
					<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out rounded-md cursor-pointer bg-tertiary-gray group-hover:bg-primary-blue group-hover:text-white hover:bg-primary-pink'>
						<i>
							<RiFacebookFill className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
						</i>
					</li>
				)}
				{instagram && (
					<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out rounded-md cursor-pointer bg-tertiary-gray group-hover:bg-primary-blue group-hover:text-white hover:bg-primary-pink'>
						<i>
							<RiInstagramLine className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
						</i>
					</li>
				)}
				{twitter && (
					<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out rounded-md cursor-pointer bg-tertiary-gray group-hover:bg-primary-blue group-hover:text-white hover:bg-primary-pink'>
						<i>
							<RiTwitterFill className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
						</i>
					</li>
				)}
				{pinterest && (
					<li className='flex items-center justify-center p-2 transition duration-500 ease-in-out rounded-md cursor-pointer bg-tertiary-gray group-hover:bg-primary-blue group-hover:text-white hover:bg-primary-pink'>
						<i>
							<FaPinterestP className='text-xl transition duration-500 ease-in-out text-primary-blue group-hover:text-white ' />
						</i>
					</li>
				)}
			</ul>
		</Link>
	);
};
