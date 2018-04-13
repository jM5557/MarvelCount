<template>
	<div id = "timer-wrapper">
		<div id = "timer-inner-wrapper">
			<img alt = "Latest Film Logo" src = "./../assets/images/logo-latest.png" />

			<div>
				<p class = "lbl">DAYS</p>
				<p class = "num">{{ days }}</p>
			</div>

			<div>
				<p class = "lbl">
					HOURS
				</p>
				<p class="num">
					{{ hours }}
				</p>
			</div>

			<div>
				<p class = "lbl">
					MINUTES
				</p>
				<p class="num">
					{{ minutes }}
				</p>
			</div>

			<div>
				<p class = "lbl">
					SECONDS
				</p>
				<p class="num">
					{{ seconds }}
				</p>
			</div>
		</div>

		<div class = "scroll-notify center">
			<p>scroll</p>
			<p class = "scroll-icon"></p>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'countdown-timer',

		props: ['endDate', 'film'],

		data () {
			return {
				currentTime: Math.trunc((new Date()).getTime() / 1000),

				endTime: Math.trunc(Date.parse(this.endDate) / 1000)
			}
		},

		computed: {

			days: function () {
				return Math.trunc((this.endTime - this.currentTime) / 3600 / 24);
			},

			hours: function () {
				return Math.trunc((this.endTime - this.currentTime) / 3600) % 24;
			},

			minutes: function () {
				return Math.trunc((this.endTime - this.currentTime) / 60) % 60; 
			},

			seconds: function () {
				return (this.endTime - this.currentTime) % 60;
			}

		},

		mounted: function ()  {
			window.setInterval(() => {
		        this.currentTime = Math.trunc((new Date()).getTime() / 1000);
		    }, 1000);
		}
	}
</script>