import { useEffect, useState } from "react"

export const images = () => {
	const [images, setImages] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [totalPages, setTotalPages] = useState(0)

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
		}
		fetchImages()

		return () => {
			// cleanup
		}
	}, [pageNumber])

	const nextPage = () => {
		setPageNumber(pageNumber + 1)
	}
  const prevPage = () => {
		setPageNumber(pageNumber - 1)
	}

	return (
		<div>
			<h1>Images</h1>
			{ totalPages > 0 && <p>Page {pageNumber} of {totalPages}</p>}
			{(pageNumber > 1 ) && (<button onClick={prevPage}>Prev Page</button>)}
			{(pageNumber <= totalPages) && (<button onClick={nextPage}>Next Page</button>)}
       {images.map(image => (
								 <img src={image.urls.regular} alt={image.alt_description} />
														))}
		</div>
	)
}

export default images

// Path: /images.js
