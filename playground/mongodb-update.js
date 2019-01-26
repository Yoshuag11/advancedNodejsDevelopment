// const MongoClient = require( 'mongodb' ).MongoClient;
const { MongoClient, ObjectID } = require( 'mongodb' );

MongoClient.connect( 'mongodb://localhost:27017/TodoApp',
	{ useNewUrlParser: true },
	  ( err, client ) => {
		if ( err ) {
			return console.log( 'Unable to connect to MongoDB server' );
		}

		console.log( 'Connected to MongoDB server' );

		const db = client.db( 'TodoApp' );

		// db.collection( 'Todos' ).
		// 	findOneAndUpdate( {
		// 		_id: new ObjectID( '5c4b98ec619d3e25d66aca8c' )
		// 	}, {
		// 		$set: {
		// 			completed: true
		// 		}
		// 	}, {
		// 		returnOriginal: false
		// 	} ).
		// 		then(
		// 			result => console.log( result ) ,
		// 			err => console.log( 'Unable to update todo', err ) );

		db.collection( 'Users' ).findOneAndUpdate( {
				_id: new ObjectID( '5c4bac757df9ec383522b81f' )
			}, {
				$inc: {
					age: 1
				},
				$set: {
					name: 'Hector'
				}
			}, {
				returnOriginal: false
			} ).
				then( result => console.log( result ) );

		// client.close();
	} );