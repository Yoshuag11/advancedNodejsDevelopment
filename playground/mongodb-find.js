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

		db.collection( 'Users' ).find( {
				name: 'Hector'
			} ).
		// db.collection( 'Todos' ).find( {
		// 		_id: new ObjectID( '5c4b56a6c1546f5e70d0eee0' )
		// 	} ).
			// count().then( count => {
			// 		console.log( `Todos count: ${ count }` );
			toArray().then( docs => {
					console.log( 'Todos' );
					console.log( JSON.stringify( docs, undefined, 2 ) );
				}, err => console.log( 'Unable to fetch todos', err ));

		// client.close();
	} );