export default {
	name: 'Character List',

	characterList: [
		{
			id: 1,

			name: 'Iron Man',

			alias: 'Tony Stark',

			movies: ['Iron Man', 'Iron Man 2'],

			comparison: {
				film: {
					caption: '',
					imageUrl: 'iron-man-1-ca.jpg'
				},

				comic: {
					caption: '',
					imageUrl: 'iron-man-1-cb.jpg'
				}
			},

			evolution: [
				{
					id: 1,

					name: "Iron Man",

					year: "2008",

					imageUrl: "iron-man-1-e1.jpg"
				},

				{

					id: 2,

					name: "Iron Man 2",

					year: "2010",

					imageUrl: "iron-man-1-e2.jpg"

				}
			]
		},

		{
			id: 2,

			name: 'Thor',

			alias: 'Thor Odinson',

			movies: ['Thor', 'Thor: The Dark World', 'Thor: Ragnarok'],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'thor-1-ca.jpg'

				},

				comic: {

					caption: '',

					imageUrl: 'thor-1-cb.jpg'

				}
			},

			evolution: [

				{
					id: 1,

					name: "Thor",

					year: "2011",

					imageUrl: "thor-1-e1.jpg"
				},

				{
					id: 2,

					name: "Thor: The Dark World",

					year: "2013",

					imageUrl: "thor-1-e2.jpg"
				}
			]
		},

		{
			id: 3,

			name: 'Captain America',

			alias: 'Steve Rodgers',

			movies: [ 'Captain America: The First Avenger', 'Captain America: The Winter Soldier', 'Captain America: Civil War' ],

			comparison: {

				film: {

					caption: '',
					imageUrl: 'captain-america-1-ca.jpg',

				},

				comic: {

					caption: '',
					imageUrl: 'captain-america-1-cb.jpg'

				}

			},

			evolution: [

				{
					id: 1,

					name: "Captain America: The First Avenger",

					year: "2011",

					imageUrl: "captain-america-1-e1.jpg"
				},

				{
					id: 2,

					name: "Captain America: The Winter Soldier",

					year: "2014",

					imageUrl: "captain-america-1-e2.jpg"
				}
			]

		}
	]
}