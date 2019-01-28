const { ObjectID } = require( 'mongodb' );

const { mongoose } = require( './../server/db/mongoose' );
const { Todo } = require( './../server/models/todo' );
const { User } = require( './../server/models/user' );
const id = '55c4e117c96c2c4527bf3a22b';

// Todo.find( { _id: id } ).then( todos => {
// 	console.log( 'Todos', todos );
// } );
// Todo.findOne( { _id: id } ).then( todo => {
// 	console.log( 'Todo', todo );
// } );
// Todo.findById( id ).
// 	then( todo => {
// 		if ( !todo ) {
// 			return console.log( 'Id not found' );
// 		}
// 		console.log( 'Todo By Id', todo )
// 	} ).catch( e => {
// 		if ( !ObjectID.isValid( id ) ) {
// 			console.log( 'ID not valid' );
// 		}

// 		console.log( e );
// 	} );

User.findById( '5c4e901dcff333734d5bbfac' ).
	then( user => {
		if ( !user ) {
			return console.log( 'Unable to find user' );
		}

		console.log( JSON.stringify( user, undefined, 2 ) );
	}, e => console.log( e ) );