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
		// 	findOneAndDelete( {
		// 		completed: false
		// 	// deleteOne( {
		// 	// deleteMany( {
		// 		// text: 'Eat lunch'
		// 	} ).
		// 		then(
		// 			result => {
		// 				console.log( result );
		// 			},
		// 			err => console.log( 'Unable to fetch todos', err ) );

		db.collection( 'Users' ).deleteMany( { name: 'Hector' } );
		db.collection( 'Users' ).findOneAndDelete( {
			_id: new ObjectID( '5c4b59c97160f30e935f6b9a' )
		} ).
			then( results => {
				console.log( JSON.stringify( results, undefined, 2 ) );
			} );

		// client.close();
	} );