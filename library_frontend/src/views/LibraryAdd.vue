<template>
	<div v-if="library" class="page ">
		<h4> Thêm Sách</h4>
		<LibraryForm
			:library="library"
			@submit:library="createLibrary"
		/>
		<p>{{ message }}</p>
	</div>
</template>
<script>
import LibraryForm from "@/components/LibraryForm.vue";
import LibraryService from "@/services/library.service";
export default {
	components: {
		LibraryForm,
	}, 
	props: {
		_id: { type: String, required: true },
	},
	data() {
		return {
			library: {
				'name': "",
				'image': "",
				'text':"",
				'author':"",
				'number': "",
				'favorite':"",
				'phar': ""
			},
			message: "",
		};
	},
	methods: {
		async createLibrary(data) {
			try {
				 await LibraryService.create(data);
				this.message = "Truyện được thêm thành công.";
				
			} catch (error) {
				console.log(error);
			}
		},
		
	},
};
</script>