<template>
	<div v-if="library" class="page">
		<img v-if="library.image"  :src="`/src/assets/img/${library.image}`"   class="image" alt="">
		<img v-else=""  src="../assets/img/unnamed.png"  class="image"  alt="">	
	<h1 class="text-tf">{{library.name}}</h1>
	<p>{{library.text}}</p>
	<button class="btn-dele" @click="deleteLibrary()">Xóa </button>
	</div>
</template>
<script>
import LibraryService from "@/services/library.service";
export default {
	components: {
	},
	props: {
		id: { type: String, required: true },
	},
	data() {
		return {
			library: null,
		};
	},
	methods: {
		async getLibrary(id) {
			try {
				this.library = await LibraryService.get(id);
			} catch (error) {
				console.log(error);
				// Chuyển sang trang NotFound đồng thời giữ cho URL không đổi
				this.$router.push({
					name: "notfound",
					params: {
					pathMatch: this.$route.path.split("/").slice(1)
					},
					query: this.$route.query,
					hash: this.$route.hash,
				});
			}
		},

		async deleteLibrary() {
			if (confirm("Bạn muốn xóa Tập truyện này?")) {
				try {
					await LibraryService.delete(this.library._id);
					this.$router.push({ name: "rholibrary" });
				} catch (error) {
					console.log(error);
				}
			}
		},


	},
	created() {
		this.getLibrary(this.id);
	},
};
</script>
<style scoped>
	.image {
		height: 300px;
		width: 300px;
		border-radius: 50%;
	}
	.page {
		max-width: 1140px;
		text-align: center;
		margin: 0 auto 80px;
		min-height: 1200px;
	}
	.page h1 {
		margin: 40px 0;
	}
	.page p {
		font-size: 24px;
		width: 1140px;
		margin: 0 auto;
		text-align: justify;
	}
	.btn-dele {
		background-color: #161a21;
		color: #fff;
		float: right;
		padding: 8px 16px;
		border-radius: 4px;
	}
	.text-tf {
		text-transform: uppercase;
	}
</style>