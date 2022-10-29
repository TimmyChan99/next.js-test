import { useEffect, useState } from "react"

export const images = () => {
	const [images, setImages] = useState([])

	useEffect(() => {
		const fetchImages = async () => {
    const resp = fetch(`https://api.unsplash.com/photos/?client_id=${process.env.NEXT_PUBLIC_ACCESS_KEY}`)
    const data = await resp
		const images = await data.json()
		setImages(images)
		}
		fetchImages()

		return () => {
			// cleanup
		}
	}, [])
	return (
		<div>
			<h1>Images</h1>
       {images.map(image => (
								 <img src={image.urls.regular} alt={image.alt_description} />
														))}
		</div>
	)
}

export default images

// Path: /images.js
