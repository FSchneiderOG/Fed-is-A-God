// This is a comment

// think of a 'class' as a template
class Post {

	// the order of the items in the constructor is the order
	// in which data will be assigned

	constructor(
				title,
				link,
				author,
				img,
				body){
					this.title = title;
					this.link = link;
					this.author = author;
					this.img = img;
					this.body = body;
	}
}

const app = new Vue({

	// this is the HTML element that the app will operate from
	el: '#root',

	// this is the data elements that feed the app
	data: {

		// this is what the search is looking for
		// the default value is an empty string
		keyword: '',

		// this is an array of items that will be
		// interpreted by the Post class
		postlist: [
			// constructed Post item
			new Post(
				'Fidget Spinner VS Fidget Sinner', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'Your Friendly Neighborhood Spiderman',			// this is the AUTHOR place in the class
				'http://www.comedycake.com/wp-content/themes/patterns/timthumb.php?src=http%3A%2F%2Fwww.comedycake.com%2Fwp-content%2Fuploads%2F2015%2F01%2FBirdUpEricAndre.png&q=90&w=650&zc=1',	// this is the IMAGE place in the class
				'BOB BIBB IS ACTUALLY A GOD' // this is the BODY place in the class
				),

			new Post(
				'Second Post: a waste of your time',
				'https://vuejs.org',
				'Tom Cruise',
				'http://68.media.tumblr.com/1bcbaf43cdd5fa9623987700c0b5200b/tumblr_niq2rfSt3U1ryw9fko4_400.gif', // this is a local image in the same folder as the js script
				'When you get confused and accidentently feed the food you just microwaved to the dog instead of yourself'
				),

			new Post(
				'This Post: Enjoy Your Taco Hombre!',
				'https://google.com',
				'Danny Trejo',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4OsJJG7Nz25qDH06NSLY2-OppwZ0xyNHK1Wp2Zo3QLdg8mWt4g',
				'Please enjoy this beautiful picture of the Machete enjoying a real authentic Mexican taco while shirtless'
				),

			new Post(
				'You should just stop now',
				'https://vuejs.org',
				'IGN',
				'https://media.tenor.co/images/06681b2ec4eb5ac1873c90d01f9a097e/tenor.gif',
				'Barbosa dies at the end of the new Pirates of the Caribbean'
				),

			new Post(
				'fLy LiKe An EaGlE',
				'https://google.com',
				'Grigori Rasputin',
				'bg.png',
				'Den HÄR ass stolz'
				)
		]
	},

	// computed properties are functions
	// that work on the data they receive
	computed: {

		// this defines the search function
		filterlist(){

			// filterlist object
			// returns a filter funtion over the constructed post
			return this.postlist.filter((post)=>{

				// of an inculded array of title-toLowerCase matching any keyword-toLowerCase returned
				return post.title.toLowerCase().includes(this.keyword.toLowerCase());
			});
		}
	}

});



