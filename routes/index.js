
/*
 * GET home page.
 */

var mongoose = require('mongoose');
var Album = require('../models/Album');

exports.index = function(req, res)
{
  res.render('index', { title: 'Vinyl Library' })
};

exports.library = function(req, res)
{
  //model 
  Album
  	.find()
  	.run(function (err, albums) 
  {
  	   //render view
 		res.render('library', 
  		{ 
  			title: 'Library',
  	  		albums: albums
  		})
  });
};

exports.album = function(req, res)
{  
  //model 
  Album
  	.findById(req.params.id, function (err, album) 
	  {
	  	   //render view
	 		res.render('album', 
	  		{ 
	  			title: 'Album',
	  	  		album: album
	  		})
	  });
};
