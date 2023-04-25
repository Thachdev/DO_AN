<script>
export default {
	props: {
		// change contact to library
		library: { type: Object, required: true },
	},
	computed: {
		
	}
};
</script>
<template>
<div class="tesst row	">
	<div class="col-md-4">
		<img v-if="library.image"  :src="`/src/assets/img/${library.image}`"   class="image" alt="">
		<img v-else=""  src="../assets/img/unnamed.png"  class="image"  alt="">
	</div>


	<div class="col-md-8">
		<div class="p-1 heading-name ">
			{{ library.name }}
		</div>
		<div class="content-infor">
			<div class="p-1">
				<strong>Tác giả:</strong>
				{{ library.author }}
			</div>
			<div class="p-1">
				<strong>Mô tả:</strong>
				{{ library.phar }}
			</div>
			<div class="p-1">
				<strong>Số tập:</strong>
				{{ library.number }}
			</div>
		</div>
		
	</div>
	
	<!-- <div class="p-1">
		<strong>Like:&nbsp;</strong>
		<i v-if="library.favorite" class="ti-check"></i>
		<i v-else class="ti-close"></i>
		{{ library.favorite }}
	</div> -->
</div>
</template>
<style scoped>
	.image {
		width: 200px;
		height: 300px;
		margin-bottom: 20px;
	}
	.p-1.heading-name {
		font-size: 28px;
		text-transform: uppercase;
		font-weight: 600;
	}
	.p-1 {
		font-size: 20px	;
	}
	.tesst {
		padding: 16px 0;
		margin-top: 32px;
		border: 4px solid #161a21;
		background-color: rgba(61, 70, 85,0.08) ;
		border-radius: 8px;
	}
	.content-infor {
		margin-top: 20px;
		text-align: justify;
	}
</style>