const { ObjectID } = require( 'mongodb' );

const { mongoose } = require( './../server/db/mongoose' );
const { Todo } = require( './../server/models/todo' );
const { User } = require( './../server/models/user' );
const id = '55c4e117c96c2c4527bf3a22b';

// Todo.remove( {} ).
// 	then( result => console.log( result ) );
// Todo.findByIdAndRemove( '5c4f6cbab12b6d08002e74e7' ).
// 	then( todo => console.log( todo ) );
Todo.findOneAndRemove( { _id: '5c4f6daab12b6d08002e752d' } ).
	then( todo => console.log( todo ) );