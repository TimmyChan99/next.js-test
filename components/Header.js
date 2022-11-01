import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Header = ({ totalPages, pageNumber, prevPage, nextPage }) => {
	const [user, setUser] = useState(null);
  const router = useRouter();

	useEffect(() => {
	const { user } = JSON.parse(localStorage.getItem('user')) || {}
		setUser(user);
	}, [])

const logout = () => {
	localStorage.removeItem('user')
	router.push('/')
}

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
			{ user && <button
				className="text-white bg-zinc-900 px-5 py-2 rounded-md font-medium "
				onClick={logout}>
				Logout
			</button>
			}
		</header>
	)
}

export default Header
