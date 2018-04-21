<template>
  <div id="app">
   	<CountdownTimer endDate = "April 27, 2018" :film = "countDownFilm" v-on:set-modal-meta = "setModalMeta"></CountdownTimer>

  	<h2 class = "page-name">
  		Timeline
  	</h2>

   	<Timeline v-on:set-modal-meta = "setModalMeta"></Timeline>

    <TrailerModal :selectedMovie = "selectedMovie" 
      :startPlaying = "trailerIsPlaying"

      v-on:hide-player = "hidePlayer()"
    ></TrailerModal>
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';
import TrailerModal from './components/TrailerModal.vue';
import Timeline from './components/Timeline.vue';

export default {
  name: 'app',
  
  data () {
    return {

        countDownFilm: {
          id: 1,
          name: 'Avengers: Infinity War',
          releaseDate: 'April 27th, 2018',
          trailerUrl: 'https://youtu.be/mBeOUjf-NLA',
        },

        selectedMovie: this.countDownFilm,

        trailerIsPlaying: false
    }
  },

  methods: {
    setModalMeta: function (val) {

      this.selectedMovie = val.selectedMovie;
      this.trailerIsPlaying = val.trailerIsPlaying;
    },

    hidePlayer: function () {
        if ( this.trailerIsPlaying == false ) {
          return;
        }

        this.trailerIsPlaying = false;
      },
  },

  components: {
  	CountdownTimer,
    TrailerModal,
  	Timeline
  }
}
</script>

<style lang="scss">

</style>
