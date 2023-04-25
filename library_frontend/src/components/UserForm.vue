<template>
	<Form
		@submit="submitUser"
		:validation-schema="userFormSchema"
	>
		<div class="form-group">
			<label for="name">Tên:</label>
			<Field
				name="name"
				type="text"
				class="form-control"
				v-model="userLocal.name"
			/>
			<ErrorMessage name="name" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="image">Email:</label>
			<Field
				name="email"
				type="email"
				class="form-control"
				v-model="userLocal.email"
			/>
			<ErrorMessage name="email" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="address">Địa chỉ:</label>
			<Field
				name="address"
				type="text"
				class="form-control"
				v-model="userLocal.address"
			/>
			<ErrorMessage name="address" class="error-feedback" />
		</div>
		<div class="form-group">
		<label for="phone">Điện thoại:</label>
			<Field
				name="phone"
				type="tel"
				class="form-control"
				v-model="userLocal.phone"
			/>
			<ErrorMessage name="phone" class="error-feedback" />
		</div>
		<!-- <div class="form-group">
			<label for="phar">Mô tả</label>
			<Field
				name="phar"
				as="textarea"
				type="text"
				rows="10"
				class="form-control text-ctrl"
				v-model="userLocal.phar"
			/>
			<ErrorMessage name="phar" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="text">Nội dung</label>
			<Field
				name="text"
				as="textarea"
				type="text"
				rows="20"
				class="form-control text-ctrl"
				v-model="userLocal.text"
			/>
			<ErrorMessage name="text" class="error-feedback" />
		</div> -->
		<!-- <div class="form-group form-check">
			<input
				name="favorite"
				type="checkbox"
				class="form-check-input"
				v-model="userLocal.favorite"
			/>
			<label for="favorite" class="form-check-label">
				<strong>Sách yêu thích</strong>
			</label>
		</div> -->
		<div class="form-group">
			<button class="btn btn-custom-save">Lưu</button>
			<button
				v-if="userLocal._id"
				type="button"
				class="ml-2 btn btn-danger"
				@click="deleteUser"
			>
				Xóa
			</button>
		</div>
	</Form>
</template> 
<script>
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
export default {
	components: {
		Form,
		Field,
		ErrorMessage,
	},
	emits: ["submit:user", "delete:user"],

	props: {
		user: { type: Object, required: true }
	},
	data() {
		const userFormSchema = yup.object().shape({
			name: yup
					.string()
					.required("Tên phải có giá trị.")
					.min(2, "Tên phải ít nhất 2 ký tự.")
					.max(50, "Tên có nhiều nhất 50 ký tự."),
			email: yup
					.string()
					.email("E-mail không đúng.")
					.max(50, "E-mail tối đa 50 ký tự."),
			address: yup
					.string(),
				// .max(100, "Địa chỉ tối đa 100 ký tự."),
			phone: yup
					.string()
					.matches(
					/((09|03|07|08|05)+([0-9]{8})\b)/g,
					"Số điện thoại không hợp lệ."
					),
		});
		return {
			
			userLocal: this.user,
			userFormSchema,
		};
	},
	methods: {
		submitUser() {
			this.$emit("submit:user", this.userLocal);
		},
		deleteUser() {
			this.$emit("delete:user", this.userLocal.id);
		},
	},
};
</script>
<style scoped>
	@import "@/assets/form.css";
</style>
<style scoped> 
	.form-group {
		font-size: 18px;
	}
	.btn-custom-save {
		margin-top: 20px;
	}
</style>