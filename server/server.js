const express = require( 'express' );
const bodyParser = require( 'body-parser' );

const mongoose = require( './db/mongoose' );
const { User } = require( './models/user' );
const { Todo } = require( './models/todo' );

const app = express();
const port = 3000;

app.listen( port, () => console.log( `Listening on port ${ 3000 }` ) );
app.use( bodyParser.json() );
app.get( '/todos', ( req, res ) => {
	Todo.find().
		then(
			todos => res.send( { todos } ),
			e => res.status( 400 ).send( e )
		);
} );
app.post( '/todos', ( req, res ) => {
	const todo = new Todo( { text: req.body.text } );

	todo.save().then(
		doc => res.send( doc ),
		e => res.status( 400 ).send( e ) );
} );

module.exports = { app };