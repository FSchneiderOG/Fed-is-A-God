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
				'First Post! Yay!', 		// this is the TITLE place in the class
				'https://google.com',	// this is the LINK place in the class
				'An Author',			// this is the AUTHOR place in the class
				'http://www.comedycake.com/wp-content/themes/patterns/timthumb.php?src=http%3A%2F%2Fwww.comedycake.com%2Fwp-content%2Fuploads%2F2015%2F01%2FBirdUpEricAndre.png&q=90&w=650&zc=1',	// this is the IMAGE place in the class
				'Lorem ipsum dolor sit amet, consectetur.' // this is the BODY place in the class
				),

			new Post(
				'Second Post: Lorem',
				'https://vuejs.org',
				'Sammie Author',
				'http://68.media.tumblr.com/1bcbaf43cdd5fa9623987700c0b5200b/tumblr_niq2rfSt3U1ryw9fko4_400.gif', // this is a local image in the same folder as the js script
				'This has a local image. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra euismod euismod. Nulla leo est, venenatis at fringilla eget, tincidunt sed justo. In efficitur dui odio, sit amet finibus sem hendrerit ut. Etiam vestibulum sem vel metus lobortis, vitae dictum metus sagittis. Nulla facilisi. '
				),

			new Post(
				'This Post: Crazy Fredrick',
				'https://google.com',
				'Bob Author',
				'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4OsJJG7Nz25qDH06NSLY2-OppwZ0xyNHK1Wp2Zo3QLdg8mWt4g',
				'Crazy Fredrick bought many very exquisite opal jewels.'
				),

			new Post(
				'Another Post: promptly judged',
				'https://vuejs.org',
				'Jane Author',
				'https://media.tenor.co/images/06681b2ec4eb5ac1873c90d01f9a097e/tenor.gif',
				'We promptly judged antique ivory buckles for the next prize.'
				),

			new Post(
				'Last Post: Jaded zombies',
				'https://google.com',
				'Anptoght Author',
				'#',
				'Jaded zombies acted quaintly but kept driving their oxen forward.'
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



