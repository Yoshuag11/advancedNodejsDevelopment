// const MongoClient = require( 'mongodb' ).MongoClient;
const { MongoClient, ObjectID } = require( 'mongodb' );

const obj = new ObjectID();

console.log( obj );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp',
	{ useNewUrlParser: true },
	  ( err, client ) => {
		if ( err ) {
			return console.log( 'Unable to connect to MongoDB server' );
		}

		console.log( 'Connected to MongoDB server' );

		const db = client.db( 'TodoApp' );

		// db.collection( 'Todos' ).insertOne( {
		// 	text: 'Eat lunch',
		// 	completed: false
		// }, ( err, result ) => {
		// 	if ( err ) {
		// 		return console.log( 'Unable to insert todo', err );
		// 	}

		// 	console.log( JSON.stringify( result.ops, undefined, 2 ) );
		// } );
		// Insert new doc into the Users collection.
		db.collection( 'Users' ).insertOne( {
			name: 'Pedro',
			age: 31,
			location: 'Tijuana'
		}, ( err, result ) => {
			if ( err ) {
				return console.log( 'Unable to insert user', err );
			}

			console.log( result.ops[ 0 ]._id.getTimestamp() );
			console.log( JSON.stringify( result.ops, undefined, 2 ) );
		} );
		client.close();
	} );