import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ProtetedRoute = (props) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user')) || null;
		setUser(user);
	}, []);


	return (
		<div>
			{user ? props.children : <p
				className="text-2xl font-medium flex flex-col items-center justify-center h-screen text-einc-900 space-y-5">
				You are not authorized login from
				<Link href='/' className="font-bold underline"> here </Link>
				to access this page
			</p>}
		</div>
	)
}

export default ProtetedRoute;
