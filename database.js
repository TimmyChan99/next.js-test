const { Level } = require('level');

const db = new Level('usersData', {
	keyEncoding: 'view',
	valueEncoding: 'json'
})


const user1 = { username: 'muser1', liked: [] }
const user2 = { username: 'muser2', liked: [] }

// db.clear(['muser1', 'muser2']);

// db.open(() => {
// 	db.put('muser1', user1);
// 	db.put('muser2', user2);
// })

// db.open()

// db.get('muser1', (err, value) => {
// 	if (err) return console.log('Ooops!', err)
// 	console.log('user1', value)
// })

// get current user and update the liked images array
const getUserAndUodateLikes = async (currentUser, imgId) => {

	const user = await db.get(currentUser);
	if (user.liked.includes(imgId)) {
		return user;
	} else {
    const updatedLikes = [...user.liked, imgId];
		db.put(currentUser, {...user, liked: updatedLikes});
	return user
	}
}

// get current user and remove the image from the liked images array
const getUserAndRemoveLike = async (currentUser, imgId) => {
	const user = await db.get(currentUser);
	if (user.liked.includes(imgId)) {
		const updatedLikes = user.liked.filter(id => id !== imgId);
		db.put(currentUser, {...user, liked: updatedLikes});
		return user;
	} else {
		return user;
	}
}


// get likd images for a user and check if the image is liked
const getLiked = async (currentUser, imgId) => {
	const user = await db.get(currentUser);
	return user.liked.includes(imgId);
}

module.exports = { getUserAndUodateLikes, getLiked, getUserAndRemoveLike }
