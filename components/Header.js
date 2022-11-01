import React from 'react'

const Header = ({ totalPages, pageNumber, prevPage, nextPage }) => {
	const { user } = JSON.parse(localStorage.getItem('user')) || {}

	return (
		<header className="text-zinc-900 flex flex-col md:flex-row items-center justify-between px-5 py-3 space-y-4">
			<h1 className="text-zinc-600 text-xl md:w-2/4 w-full text-center">Welcome back, <span className="font-bold">{user}</span></h1>
			<div className="flex items-center justify-center space-x-5 w-full font-medium md:w-2/4">
				{(pageNumber > 1) && (<button
					className="bg-zinc-200 text-zinc-900 px-5 py-2 rounded-md"
					onClick={prevPage}>
					Prev
				</button>)}
				{totalPages > 0 && <p
					className="text-zinc-600"
				> Page 
				<span className="underline font-bold text-zinc-700 p-1"> {pageNumber} </span> 
				of 
				<span className="underline font-bold text-zinc-700 p-1"> {totalPages} </span>
				</p>}
				{(pageNumber <= totalPages) && (<button
					className="bg-zinc-200 text-zinc-900 px-5 py-2 rounded-md"
					onClick={nextPage}>
					Next
				</button>)}
			</div>
		</header>
	)
}

export default Header
