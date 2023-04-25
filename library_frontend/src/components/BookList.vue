<script>
export default {
	props: {
		//change libraries to libraries
		libraries: { type: Array, default: [] },
		activeIndex: { type: Number, default: -1 },
	},
	emits: ["update:activeIndex"],
	methods: {
		updateActiveIndex(index) {
			this.$emit("update:activeIndex", index);
		}
	}
};
</script>
<template>
	<ul class="list-group">
		<li
			class="list-group-item"
			v-for="(library, index) in libraries"
			:key="library._id"
			:class="{ bg: index === activeIndex }"
			@click="updateActiveIndex(index)"
		>
			<img v-if="library.image"  :src="`/src/assets/img/${library.image}`"   class="image" alt="">
			<img v-else=""  src="../assets/img/unnamed.png"  class="image"  alt="">
			<span class="name-list">
				{{ library.name }}
			</span>
		</li>
	</ul>
</template>
<style scoped>
	.image {
		height: 50px;
		width: 50px;
		border-radius: 50%	;
	}
	.name-list {
		display: inline-block;
		margin-left: 20px;
		text-transform: capitalize;
	}
	.list-group-item.bg {
		background-color: rgba(40, 50, 67,0.9);
		color: #fff	;
	}
	.list-group-item {
		margin-bottom: 12px;
		border: 1px solid transparent;
		transition: all linear .2s;
		border-radius: 4px;
		font-size: 20px;
		background-color: rgb(234, 234, 234, 0.3);
		text-align: left;
	}
	.list-group-item:hover {
		border-color: #161a21;
		cursor: pointer;
	}
</style>