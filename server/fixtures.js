if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		author: 'Michael Jordan',
		url: 'http://nba.com'
	});
	Posts.insert({
		title: 'Meteor',
		author: 'Penny Hardaway',
		url: 'http://craigslist.org'
	});
	Posts.insert({
		title: 'Dudeman\'s Guide to Dudes',
		author: 'Dudeman',
		url: 'http://evturn.com'
	});
}