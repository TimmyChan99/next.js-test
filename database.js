const { Level } = require('level');

const db = new Level('browserify-starter', {
	keyEncoding: 'view',
	valueEncoding: 'json'
})


const user = { username: 'user1', liked: [] }

// db.put('user1', user, (err) => {
// 	if (err) return console.log('Ooops!', err) // some kind of I/O error
// })
db.open()
// db.clear()

const uc = async () => {
	
	const user = db.get('user1')


	return user
}
module.exports = { db, uc }
