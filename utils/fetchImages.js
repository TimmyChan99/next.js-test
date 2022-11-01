const fetchImages = async (pageNumber) => {
	const resp = fetch(`https://api.unsplash.com/photos?page=${pageNumber}`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			Authorization: `Client-ID ${process.env.NEXT_PUBLIC_ACCESS_KEY}`,
		},
	})
	const data = await resp
	const images = await data.json()
	const total = data.headers.get("x-total")
	return { images, total }
};

export default fetchImages;
