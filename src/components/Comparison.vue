<template>
	<div id = "comparison-wrapper">
		<SearchBar :arrayToSearch = "characterList" :propToSearchBy = "'name'"></SearchBar>

		<div id = "comparison-menu-toggle" v-on:click = "displayMenu" :class = "menuIsVisible ? 'on' : ''"></div>

		<ul id = "comparison-menu" v-if="menuIsVisible">
			<li v-for="character in characterList" v-on:click="setSelectedCharacter(character)" :class = "(character == selectedCharacter) ? 'selected' : ''">
				{{ character.name }}
			</li>
		</ul>

		<div id = "comparison-inner-wrapper">
			<ComparisonItem :item = "selectedCharacter" ></ComparisonItem>
		</div>
	</div>
</template>

<script>
	import CharacterList from './../data/characters.js';
	import SearchBar from './SearchBar.vue';
	import ComparisonItem from './ComparisonItem.vue';

	export default {
		name: 'comparison',

		data () {
			return {
				characterList: CharacterList.characterList,

				selectedCharacter: CharacterList.characterList[0],

				menuIsVisible: false
			}
		},

		methods: {
			setSelectedCharacter: function (character) {
			
				this.selectedCharacter = character;
			
			},

			displayMenu : function () {
				this.menuIsVisible = !this.menuIsVisible;
			}
		},

		components: {
			SearchBar,
			ComparisonItem
		}
	}
</script>