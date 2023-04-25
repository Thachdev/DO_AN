<template>
	<div  class="page">
		<h4> Thêm Thành Viên
			<img src="../assets/img/logo9pblue.png" class="img-user" alt="">
		</h4>
		<UserForm
			:user="user"
			@submit:user="createUser"
		/>
		<p>{{ message }}</p>
	</div>
</template>
<script>
import UserForm from "@/components/UserForm.vue";
import UserService from "@/services/user.service";
export default {
	components: {
		UserForm,
	}, 
	props: {
		_id: { type: String, required: true },
	},
	data() {
		return {
			user: {
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
		async createUser(data) {
			try {
				 await UserService.create(data);
				this.message = "Thành viên được thêm thành công.";
				
			} catch (error) {
				console.log(error);
			}
		},
		
	},
};
</script>
<style scoped>
	.page {
		margin: 100px auto 300px;
	}
	.img-user {
		width: 50px;
	}
</style>