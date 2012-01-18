var mongoose = require('mongoose'),
  Schema = mongoose.Schema
  ObjectId = Schema.ObjectId;
  
//database connection
mongoose.connect('mongodb://localhost/vinyl');
  
//Album
var AlbumSchema = new Schema(
{
    id    	: ObjectId
  , title     : { type: String, index: true }
  , date      : Date
  , artist      : String
  , comments  : String
  , shelve      : String
  , section      : String
  , condition      : String
  , owner      : String
  , links      : String
});

var Album = mongoose.model('Album', AlbumSchema);
module.exports = mongoose.model('Album');

//methods
Album.findAll = function () {
  return this.find();
}

var blackroc = new Album({ title: 'Blackroc', artist: 'Black Keys + various', comments: 'Good stuff' });
//blackroc.save()
var roberto = new Album({ title: 'Canone Degli Spazi', artist: 'Roberto Caccapaglia', comments: 'Works great with AKG G701', condition: 'Mint' });
//roberto.save();



/*
//Comment
var Comment = new Schema();

Comment.add({
    title     : { type: String, index: true }
  , date      : Date
  , body      : String
  , comments  : [Comment]
});

var Links = new Schema();

Links.add({
    title     : { type: String, index: true }
  , date      : Date
  , link      : String
});

var Person = new Schema({
    name: {
        first: String
      , last : String
    }
  , email: { type: String, required: true, index: { unique: true, sparse: true } }
  , alive: Boolean
});


*/
