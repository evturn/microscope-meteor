var postsData = [
	{
		title: 'Introducing Telescope',
		author: 'Michael Jordan',
		url: 'http://nba.com'
	},
	{
		title: 'Meteor',
		author: 'Penny Hardaway',
		url: 'http://craigslist.org'
	},
	{
		title: 'Dudeman\'s Guide to Dudes',
		author: 'Dudeman',
		url: 'http://evturn.com'
	}
];
Template.postsList.helpers({
  posts: postsData
});