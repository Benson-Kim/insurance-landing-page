import React from "react";

import ArrowUp from "../images/up-arrow.png";

import CheckedUser from "../images/checked-user.png";
import Trophy from "../images/trophy-64.png";
import Happy from "../images/happy-85.png";
import Like from "../images/like-64.png";

const achievements = [
	{
		id: 1,
		icon: CheckedUser,
		heading: "5.6M+",
		desc: "insurance users",
	},
	{
		id: 2,
		icon: Trophy,
		heading: "74+",
		desc: "awards & achievements",
	},
	{
		id: 3,
		icon: Happy,
		heading: "96%",
		desc: "customer satisfaction",
	},
	{
		id: 4,
		icon: Like,
		heading: "45k+",
		desc: "happy customers",
	},
];

const Achievements = () => {
	return (
		<section className='mx-6 md:mx-12 xl:mx-44'>
			<h4 className='flex items-center justify-center text-xl font-semibold leading-10 text-primary-pink'>
				Achievements
				<img src={ArrowUp} alt='' className='w-10 ml-2 rotate-90' />
			</h4>

			<p className='text-3xl font-bold leading-10 tracking-wide text-center text-primary-blue'>
				Most Interesting Facts
				<br /> and Smart{" "}
				<span className='text-primary-pink'>Communication</span>
			</p>
			<p className='my-4 leading-6 text-center text-primary-gray '>
				No one shall be subjected to arbitrary arrest, detention or
				exile. Everyone is entitled in full equality to a fair and
				public hearing by an independent and impartial tribunal, in the
				determination of his rights and obligations and of any criminal
				charge against him.
			</p>
			<div className='flex items-center justify-around py-6 mt-12 mb-8 bg-white rounded-md shadow-md'>
				{achievements?.map((achievement, index) => (
					<div
						key={index}
						className='flex items-center justify-center w-full px-6 border-r-2 md:w-1/2 xl:w-1/4 gap-x-3 border-opacity-5 border-primary-blue last:border-none'
					>
						<img
							src={achievement.icon}
							alt=''
							className='object-contain w-20 h-20'
						/>
						<div className='flex flex-col gap-y-2 '>
							<h3 className='text-2xl font-bold tracking-wide text-primary-blue'>
								{achievement.heading}
							</h3>
							<p className='text-lg font-medium tracking-wide capitalize text-primary-blue text-opacity-80'>
								{achievement.desc}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Achievements;
