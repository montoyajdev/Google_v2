import React from 'react';
import Image from 'next/image';

function Avatar({ url, width, height, className }) {
	return (
		<Image
			loading="lazy"
			className={`h-10
			rounded-full 
			cursor-pointer 
			transition duration-150 
			transform hover:scale-110 ${className}`}
			src={url}
			alt="profile pic"
			width={width}
			height={height}
		/>
	);
}

export default Avatar;
