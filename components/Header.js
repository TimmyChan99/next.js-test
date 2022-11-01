import React from 'react'

const Header = ({ totalPages, pageNumber, prevPage, nextPage }) => {
	const { user } = JSON.parse(localStorage.getItem('user')) || {}

	return (
		<header>
			<h1>Welcome back, <span>{user}</span></h1>
			{totalPages > 0 && <p>Page {pageNumber} of {totalPages}</p>}
			{(pageNumber > 1) && (<button onClick={prevPage}>Prev Page</button>)}
			{(pageNumber <= totalPages) && (<button onClick={nextPage}>Next Page</button>)}
		</header>
	)
}

export default Header
