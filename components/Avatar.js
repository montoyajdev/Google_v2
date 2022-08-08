import React from 'react';
import Image from 'next/image';

function Avatar({ url, width, height }) {
	return (
		<Image
			loading="lazy"
			className=" rounded-full 
			cursor-pointer 
			transition duration-150 
			transform hover:scale-110"
			src={url}
			alt="profile pic"
			layout="intrinsic"
			width={width}
			height={height}
		/>
	);
}

export default Avatar;
