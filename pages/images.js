import { useEffect, useState } from "react"

export const images = () => {
	const [images, setImages] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchImages = async () => {
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
			setTotalPages(total)
			setImages(images)
			setLoading(false)
		}

		fetchImages()

		return () => {
			// cleanup
		}
	}, [pageNumber])

	const nextPage = () => {
		setPageNumber((prev) => prev + 1)
	}
	const prevPage = () => {
		setPageNumber((prev) => prev - 1)
	}

	return (
		<div>
			<h1>Images</h1>
			<input type="number" placeholder="Search by pages" />
			{totalPages > 0 && <p>Page {pageNumber} of {totalPages}</p>}
			{(pageNumber > 1) && (<button onClick={prevPage}>Prev Page</button>)}
			{(pageNumber <= totalPages) && (<button onClick={nextPage}>Next Page</button>)}
			{!loading ? (images.map(image => (
				<img src={image.urls.regular} alt={image.alt_description} />
			))) : (<p>Loading...</p>)}
		</div>
	)
}

export default images

// Path: /images.js
