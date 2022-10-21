import React, { useLayoutEffect, useRef } from "react";

import {
	Achievements,
	Blogs,
	Contact,
	Footer,
	Header,
	Hero,
	Newsletter,
	Services,
	Team,
	Testimonials,
} from "./Components";

const Layout = () => {
	const stickyHeader = useRef();
	useLayoutEffect(() => {
		const mainHeader = document.getElementById("mainHeader");
		let fixedTop = stickyHeader.current.offsetTop;
		const fixedHeader = () => {
			if (window.pageYOffset > fixedTop) {
				mainHeader.classList.add("fixedTop");
			} else {
				mainHeader.classList.remove("fixedTop");
			}
		};
		window.addEventListener("scroll", fixedHeader);
	}, []);

	return (
		<div>
			<Header stickyHeader={stickyHeader} />
			<div className='mt-28 bg-tertiary-gray'>
				<Hero />
				<Services />
				<Achievements />
				<Contact />
				<Team />
				<Testimonials />
				<Newsletter />
				<Blogs />
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
