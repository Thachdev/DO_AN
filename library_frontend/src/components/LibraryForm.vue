<template>
	<Form
		@submit="submitLibrary"
		:validation-schema="libraryFormSchema"
	>
		<div class="form-group">
			<label for="name">Tên</label>
			<Field
				name="name"
				type="text"
				class="form-control"
				v-model="libraryLocal.name"
			/>
			<ErrorMessage name="name" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="image">Ảnh</label>
			<Field
				name="image"
				class="input-custom"
				accept="image/png, image/jpeg"
				type="file"
				:value="libraryLocal.image"
				@input="event => libraryLocal.image = event.target.files[0].name"
			/>
			<ErrorMessage name="image" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="author">Tác giả</label>
			<Field
				name="author"
				type="text"
				class="form-control"
				v-model="libraryLocal.author"
			/>
			<ErrorMessage name="author" class="error-feedback" />
		</div>
		<div class="form-group">
		<label for="number">Số tập</label>
			<Field
				name="number"
				type="tel"
				class="form-control"
				v-model="libraryLocal.number"
			/>
			<ErrorMessage name="number" class="error-feedback" />
		</div>
		<div class="form-group">
			<label for="phar">Mô tả</label>
			<Field
				name="phar"
				as="textarea"
				type="text"
				rows="10"
				class="form-control text-ctrl"
				v-model="libraryLocal.phar"
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
				v-model="libraryLocal.text"
			/>
			<ErrorMessage name="text" class="error-feedback" />
		</div>
		<!-- <div class="form-group form-check">
			<input
				name="favorite"
				type="checkbox"
				class="form-check-input"
				v-model="libraryLocal.favorite"
			/>
			<label for="favorite" class="form-check-label">
				<strong>Sách yêu thích</strong>
			</label>
		</div> -->
		<div class="form-group">
			<button class="btn btn-custom-save">Lưu</button>
			<button
				v-if="libraryLocal._id"
				type="button"
				class="ml-2 btn btn-danger"
				@click="deleteLibrary"
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
	emits: ["submit:library", "delete:library"],

	props: {
		library: { type: Object, required: true }
	},
	data() {
		const libraryFormSchema = yup.object().shape({
			name: yup
				.string()
				.required("Tên phải có giá trị.")
				.min(2, "Tên phải ít nhất 2 ký tự.")
				.max(50, "Tên có nhiều nhất 50 ký tự."),
			image: yup
				.string(),
			text: yup
				.string(),
			author: yup
				.string(),
			number: yup
				.string()
				.matches(
					/(([0-9])\b)/g,
					"Số không hợp lệ."
				),
			phar: yup
				.string(),
		});
		return {
			
			libraryLocal: this.library,
			libraryFormSchema,
		};
	},
	methods: {
		submitLibrary() {
			this.$emit("submit:library", this.libraryLocal);
		},
		deleteLibrary() {
			this.$emit("delete:library", this.libraryLocal.id);
		},
	},
};
</script>
<style scoped>
	@import "@/assets/form.css";
</style>