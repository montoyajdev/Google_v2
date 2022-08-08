import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
function Search() {
	return (
		<div>
			<Head>
				<title>Search Results</title>
			</Head>

			{/*HEADER*/}
			<Header />
			{/*Search Results*/}
		</div>
	);
}

export default Search;
