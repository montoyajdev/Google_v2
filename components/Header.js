import React from 'react';
import google_search from '../images/google_search.png';
import Image from 'next/image';

function Header() {
	return (
		<header>
			<Image
				src={google_search}
				alt="Google"
				height={40}
				width={120}
				className="cursor-pointer"
			/>
		</header>
	);
}

export default Header;
