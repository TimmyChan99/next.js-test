import { useEffect, useState } from "react";
import Header from "../components/Header";
import Image from "../components/Image";
import fetchImages from "../utils/fetchImages";

export const images = () => {
	const [images, setImages] = useState([])
	const [pageNumber, setPageNumber] = useState(1)
	const [totalPages, setTotalPages] = useState(0)
	const [loading, setLoading] = useState(false)

	
	useEffect(() => {
		const fetchAPI = async () => {
		const { images, total } = await fetchImages(pageNumber)
		
		setTotalPages(total)
		setImages(images)
		setLoading(false)
		}

		fetchAPI()

	}, [pageNumber])

	const nextPage = () => {
		setPageNumber((prev) => prev + 1)
	}
	const prevPage = () => {
		setPageNumber((prev) => prev - 1)
	}

	const imagesList = images.map((image) => {
		return <Image key={image.id} image={image} />
	})

	return (
		<div>
			<Header totalPages={totalPages} pageNumber={pageNumber} prevPage={prevPage} nextPage={nextPage} />
			{!loading ? (
				<ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-5 py-5">
					{imagesList}
				</ul>
			) : (<p>Loading...</p>)}
		</div>
	)
}

export default images

// Path: /images.js
