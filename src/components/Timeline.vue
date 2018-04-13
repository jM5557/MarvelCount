<template>
	<div id = "timeline-wrapper">
		<SearchBar :arrayToSearch = "movieList" propToSearchBy = "name"></SearchBar>

		<button v-on:click="toggleView()" class = "toggle-view-btn">View: {{ (selectedView == 'grid-view') ? 'Grid' : 'Timeline' }} </button>

		<ul :class = "selectedView">


			<li v-for = "movie in movieList"
				:key = "movie.id"
				v-on:click = "setSelectedMovie(movie)"
				:style = "'background-image: url(\'' + getPosterUrl(movie.poster) + '\');'"
			>
				<TimelineItem
					:movie = "movie"
					:startPlaying = "trailerIsPlaying"
				>
				</TimelineItem>
			</li>

		</ul>

		<TrailerModal :selectedMovie = "selectedMovie" 
			:startPlaying = "trailerIsPlaying"

			v-on:hide-player = "hidePlayer()"
		></TrailerModal>
	</div>
</template>

<script>
	import MovieList from './../data/movies.js';

	import { getImageWithLocalPath } from './../lib/helpers.js';

	import TimelineItem from './TimelineItem.vue';
	import TrailerModal from './TrailerModal.vue';
	import SearchBar from './SearchBar.vue';

	export default {
		name: 'timeline-item',

		props: [],

		data () {
			return {
				
				movieList: MovieList.movieList,

				selectedMovie: MovieList.movieList[MovieList.movieList.length - 1],

				trailerIsPlaying: false,

				selectedView: 'grid-view'
			}
		},

		methods: {

			setSelectedMovie: function (movie) {
				this.selectedMovie = movie;
				this.trailerIsPlaying = true;
			},

			hidePlayer: function () {
				if ( this.trailerIsPlaying == false ) {
					return;
				}

				this.trailerIsPlaying = false;
			},

			toggleView: function () {
				if (this.selectedView == 'grid-view') {
					this.selectedView = 'timeline-view';

					return;
				}

				this.selectedView = 'grid-view';
			},

			getPosterUrl: getImageWithLocalPath

		},

		components: {
			TimelineItem,
			TrailerModal,
			SearchBar
		}
	}
</script>