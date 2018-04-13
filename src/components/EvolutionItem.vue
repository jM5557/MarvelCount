<template>
	
	<div class = "evolution-item-wrapper">
		<button id = "toggle-view" class = "toggle-view-btn" v-on:click = "toggleView()">
			View: {{ (selectedView == 'select') ? 'Select' : 'Grid' }}
		</button>
		
		<div v-if = "selectedView == 'select'" :style = "'background-image: url(\'' + getImage(selectedEvolutionItem.imageUrl) + '\');'" class="selected-item">
		</div>

		<div :class = "(selectedView == 'select') ? 'evolution-inner-item-wrapper select' : 'evolution-inner-item-wrapper'">
			<div v-for = "evolutionItem in character.evolution"

			:class = "(selectedView == 'select' && evolutionItem.id == selectedEvolutionItem.id) ? 'evolution-inner-item selected' : 'evolution-inner-item'"

			:style = "( selectedView == 'grid') ? 'background-image: url(\'' + getImage(evolutionItem.imageUrl) + '\');' : ''"

			:key = "evolutionItem.id"

			v-on:click = "( selectedView == 'select' ) ? setSelectedEvolutionItem(evolutionItem) : ''"
			>
				<div class = "item-meta">
					
					<p class = "name"> {{ evolutionItem.name }} </p>
						
						<tr></tr>

					<p class = "year"> {{ evolutionItem.year }} </p>

				</div>

			</div>
		</div>
			

	</div>

</template>

<script>
	import { getImageWithLocalPath } from './../lib/helpers.js';

	export default {
		name: 'evolution-item',

		props: [ 'character' ],

		data () {

			return {
				selectedEvolutionItem: this.character.evolution[0],

				selectedView: 'select'
			}

		},

		methods: {

			getImage: getImageWithLocalPath,

			setSelectedEvolutionItem: function (item) {

				this.selectedEvolutionItem = item;

			},

			toggleView: function () {

				if ( this.selectedView == 'grid') {
					this.selectedView = 'select';
				}

				else {
					this.selectedView = 'grid';
				}

			}

		}
	}
</script>