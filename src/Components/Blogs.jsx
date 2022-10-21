import React from "react";

import { Link } from "react-router-dom";

import { FaArrowRight, FaCalendarAlt, FaUserEdit } from "react-icons/fa";
import { TbStepInto } from "react-icons/tb";
import { CgArrowLongRightR } from "react-icons/cg";

const Blogdata = [
	{
		id: 1,
		image: "https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		author: "Jonas Kakaroto",
		tag: "Insurance Agency",
		heading: "When is the right momnet to acquire life insurance",
		date: "Oct 29, 2022",
	},
	{
		id: 2,
		image: "https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1hbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
		author: "Charlie Green",
		tag: "Insurance",
		heading: "Insurance covers risk of fire destroying properties",
		date: "Oct 29, 2022",
	},
	{
		id: 3,
		image: "https://images.unsplash.com/photo-1571844305128-244233caa679?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF3eWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		author: "Campos Felipe",
		tag: "Insurance Agency",
		heading: "When is the right momnet to acquire life insurance",
		date: "Oct 29, 2022",
	},
	{
		id: 4,
		image: "https://images.unsplash.com/photo-1641759653573-d5cbadb2b45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGJsYWNrJTIwd29tYW4lMjBvZmZpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
		author: "Illias Chebbi",
		tag: "Insurance Agency",
		heading: "When is the right momnet to acquire life insurance",
		date: "Oct 29, 2022",
	},
	{
		id: 5,
		image: "https://images.unsplash.com/photo-1628149321186-7d4c5b1170f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGJsYWNrJTIwbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
		author: "Ahmed Shera",
		tag: "Insurance Agency",
		heading: "When is the right momnet to acquire life insurance",
		date: "Oct 29, 2022",
	},
];

const Blogs = () => {
	return (
		<section className='pt-24 mx-6 md:mx-12 xl:mx-44' id='blogs'>
			<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
				Recents Blog Posts
				<TbStepInto className='w-10 ml-2 -rotate-90' />
			</h4>
			<div className='flex items-center justify-between'>
				<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
					News and insights from
					<br /> our{" "}
					<span className='text-primary-pink'>Experts</span>
				</p>
				<Link
					to='/'
					className='text-white hover:bg-opacity-0 hover:border-opacity-75 border border-primary-pink border-opacity-0 flex items-center gap-x-1.5 hover:text-primary-blue font-medium bg-primary-blue px-6 py-2.5 hover:shadow transition ease-in-out duration-500'
				>
					Explore more
					<i>
						<FaArrowRight />
					</i>
				</Link>
			</div>

			<div className='grid grid-cols-1 gap-8 mt-12 mb-8 place-content-center md:grid-cols-3'>
				{Blogdata?.map((blogdata, index) => (
					<BlogCard
						key={index}
						image={blogdata.image}
						tag={blogdata.tag}
						heading={blogdata.heading}
						author={blogdata.author}
						date={blogdata.date}
					/>
				))}
			</div>
		</section>
	);
};

export default Blogs;

export const BlogCard = ({ image, tag, heading, date, author }) => {
	return (
		<div
			to=''
			className='col-span-1 group  bg-tertiary-gray bg-opacity-80 border border-tertiary-gray shadow-md rounded-lg flex flex-col hover:shadow-xl hover:bg-white transition ease-in-out duration-500 hover:translate-x-0.5 '
		>
			<img
				src={image}
				alt={heading}
				className='object-cover w-full h-40 mb-4 transition duration-500 ease-in-out scale-95 group-hover:scale-100'
			/>
			<div className='px-6 py-4 my-2 '>
				<span className='px-1.5 py-0.5 rounded my-2.5 bg-primary-blue bg-opacity-25 text-primary-blue font-medium text-sm group-hover:text-primary-pink group-hover:bg-primary-pink group-hover:bg-opacity-20 '>
					{tag}
				</span>

				<h4 className='font-medium text-lg my-2.5 text-primary-blue leading-6'>
					{heading}
				</h4>
				<div className=' text-primary-blue my-2.5 text-opacity-70 flex justify-between items-center group-hover:text-opacity-85 transition-all ease-in-out duration-500'>
					<div className='flex items-center gap-x-2 '>
						<i>
							<FaCalendarAlt className='text-lg' />
						</i>
						{date}
					</div>
					<div className='flex items-center gap-x-2'>
						<i>
							<FaUserEdit className='text-lg' />
						</i>
						{author}
					</div>
				</div>
				<Link
					to=''
					className='flex items-center font-medium transition duration-500 ease-in cursor-pointer text-primary-blue hover:text-primary-pink'
				>
					Read More
					<i>
						<CgArrowLongRightR className='ml-2 text-3xl' />
					</i>
				</Link>
			</div>
		</div>
	);
};
