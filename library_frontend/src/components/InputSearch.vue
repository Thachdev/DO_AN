<script>
export default {
	props: {
		modelValue: { type: String, default: "" },
	},
	emits: ["submit", "update:modelValue"],
	methods: {
		updateModelValue(e) {
			this.$emit("update:modelValue", e.target.value);
		},
		submit() {
			this.$emit("submit");
		},
	},
};
</script>
<template>
	<div class="input-group">
		<input
			type="text"
			class="form-control"
			placeholder="Nhập thông tin cần tìm"
			:value="modelValue"
			@input="updateModelValue"
			@keyup.enter="submit"
		/>
		<div class="input-group-append ">
			<button
				class="btn btn-outline-secondary search-custom"
				type="button"
				@click="submit"
			>
			<i class="ti-search"></i> Tìm kiếm
			</button>
		</div>
	</div>
</template>
<style scoped>
	.search-custom {
		background-color: rgba(61, 70, 85,0.1) ;
		border: 1px solid #161a21;
		color: #161a21;
		font-weight: 400;

	}
	.search-custom:hover {
		background-color: rgba(22, 26, 33	);
		color: #fff;
	}
</style>