import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const ProtetedRoute = ( props ) => {
	const [user, setUser] = useState(null);

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem('user')) || null;
		setUser(user);
	}, []);

	
	return (
		<div>
			{user ? props.children : <p 
			className="text-2xl font-medium flex items-center justify-center h-screen text-einc-900 ">
				You are not authorized login from 
			<Link href='/' className="font-bold underline p-2"> here </Link></p>}
		</div>
	)
}

export default ProtetedRoute;
