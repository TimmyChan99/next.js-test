import React, { useState, useEffect } from 'react';
import { BsHeart, BsHeartFill } from 'react-icons/bs';
import { getUserAndUodateLikes, getLiked, getUserAndRemoveLike } from "../database";

const Image = ({ image }) => {

	const [liked, setLiked] = useState(false);
	const currentUser = JSON.parse(localStorage.getItem('user'));

	useEffect(() => {
		const isLiked = async () => {
			const liked = await getLiked(currentUser.user, image.id);
			setLiked(liked);
		};
		isLiked();
	}, []);


	// store the id of the image in the database
	const handleLike = async () => {
		const { liked: likedImgs } = await getUserAndUodateLikes(currentUser.user, image.id);
		const isLiked = likedImgs.includes(image.id);
		setLiked(isLiked);
	};

	// remove the id of the image from the database
	const handleUnlike = async () => {
		const { liked: likedImgs } = await getUserAndRemoveLike(currentUser.user, image.id);
		const isLiked = likedImgs.includes(image.id);
		setLiked(isLiked);
	};

	return (
		<div>
			<img src={image.urls.regular} alt={image.alt_description} />

			{liked ? (<button type='button' onClick={handleUnlike}>
				<BsHeartFill fill='red' />
			</button>
			) : (<button type='button' onClick={handleLike}>
				<BsHeart fill='red' />
			</button>
			)}
		</div>
	)
}

export default Image
