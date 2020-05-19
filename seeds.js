var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
	{
		name: "Salmon Creek",
		image:
			"https://images.unsplash.com/photo-1445308394109-4ec2920981b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
		description:
			"The place has a lot of trees and sweeping views of the grassy canyons.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
	},
	{
		name: "Granite Hill",
		image:
			"https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
		description:
			"This is a huge granite hill, no bathrooms. No Water. Great views.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
	},
	{
		name: "Mountain Goat Hill",
		image:
			"https://images.unsplash.com/photo-1476041800959-2f6bb412c8ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
		description:
			"A cool place, but not really a bunch of goats here. There are some hills and its kind of cozy.  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets"
	}
];

// Snowy Ridge - Its cozy and actually is warmer than it looks. Lots of nature
// Winter Haven - can be a bit dangerous in peak season, but otherwise easy to get in and out of.
// Lost Goals - Easy to get into, places of places to relax, fresh air and awesome views.

//addl comment
//Darth Vader
// There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.

function seedDB() {
	//remove all campgrounds
	Campground.remove({}, function(err) {
		if (err) {
			console.log(err);
		}
		console.log("removed campgrounds");
		//add a few campgrounds
		data.forEach(function(seed) {
			Campground.create(seed, function(err, campground) {
				if (err) {
					console.log(err);
				} else {
					console.log("added a campground");
					//create a comment
					Comment.create(
						{
							text: "This place is great, but I wish there was internet",
							author: "Homer"
						},
						function(err, comment) {
							if (err) {
								console.log(err);
							} else {
								campground.comments.push(comment);
								campground.save();
								console.log("Created new comment");
							}
						}
					);
				}
			});
		});
	});
}

module.exports = seedDB;
