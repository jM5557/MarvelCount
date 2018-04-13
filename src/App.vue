<template>
  <div id="app">
   	<CountdownTimer endDate = "April 27, 2018"></CountdownTimer>

	<h2 class = "page-name">
		Timeline
	</h2>

   	<Timeline></Timeline>
  </div>
</template>

<script>
import CountdownTimer from './components/CountdownTimer.vue';
import Timeline from './components/Timeline.vue';

export default {
  name: 'app',
  
  data () {
    return {
      
    }
  },

  components: {
  	CountdownTimer,
  	Timeline
  }
}
</script>

<style lang="scss">

</style>
