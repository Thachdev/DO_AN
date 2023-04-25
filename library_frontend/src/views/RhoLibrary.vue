<template>
	<div class="page row">
		<div class="col-md-10">
			<InputSearch v-model="searchText" />
		</div>
		<div class="mt-3 mr-20 text-center col-md-4">
			<h1>
				Rho Library
				<img src="../assets/img/logo9pblue.png" class="img-logo" alt="">
			</h1>
			<BookList
				v-if="filteredLibrariesCount > 0"
				:libraries="filteredLibraries"
				v-model:activeIndex="activeIndex"
			/>
			<p v-else>Không có tryện.</p>
			<div class="mt-3 row justify-content-around align-items-center">
				<!-- <button class="btn btn-sm btn-info" @click="goToAddUser()">
					<i class="ti-reload"></i> Làm mới
				</button> -->
				<button class="btn btn-sm btn-custom" @click="goToAddLibrary()">
					<i class="fas fa-plus"></i> Thêm truyện
				</button>
				<!-- <button
				class="btn btn-sm btn-danger"
				@click="removeAllLibraries()"
					>
					<i class="ti-trash"></i> Xóa tất cả
				</button> -->
			</div>
		</div>
		<div class="mt-3 text-center col-md-8">
			<div v-if="activeLibrary">
				<h1>
					Thông tin chi tiết
					<i class="ti-bookmark-alt"></i>
				</h1>
				<BookInfo :library="activeLibrary" />
				<router-link
					class="a"
					:to="{
						name: 'library.text',
						params: { id: activeLibrary._id },
					}"
					>
					<span class="bg-read">
					 Đọc Truyện</span
					>
				</router-link>
			</div>
		</div>
	</div>
</template>
<script>
import BookInfo from "@/components/BookInfo.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList.vue";
import LibraryService from "@/services/library.service";
import UserService from "@/services/user.service";

export default {
	components: {
		BookInfo,
		InputSearch,
		BookList,
		UserService
	},
	data() {
		return {
			libraries: [],
			activeIndex: -1,
			searchText: "",
		};
	},
	watch: {
		searchText() {
			this.activeIndex = -1;
		},
	},
	computed: {
		libraryStrings() {
			return this.libraries.map((library) => {
				const { name, text, author, number, image } = library;
				return [name, text, author, number, image ].join("");
			});
		},
		filteredLibraries() {
			if (!this.searchText) return this.libraries;
			return this.libraries.filter((_library, index) =>
				this.libraryStrings[index].includes(this.searchText)
			);
		},
		activeLibrary() {
			if (this.activeIndex < 0) return null;
			return this.filteredLibraries[this.activeIndex];
		},
		filteredLibrariesCount() {
			return this.filteredLibraries.length;
		},
	},
	methods: {
		async retrieveLibraries() {
			try {
				this.libraries = await LibraryService.getAll();
			} catch (error) {
				console.log(error);
			}
		},
		refreshList() {
			this.retrieveLibraries();
			this.activeIndex = -1;
		},
		async removeAllLibraries() {
			if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
				try {
					await LibraryService.deleteAll();
					this.refreshList();
				} catch (error) {
					console.log(error);
				}
			}
		},
		goToAddLibrary() {
			this.$router.push({ name: "library.add" });
		},
		goToAddUser() {
			this.$router.push({ name: "user.add" });
		},
	},
	mounted() {
		this.refreshList();
	},
};
</script>
<style scoped>
	.page {
		text-align: left;
		max-width: 1200px;
		margin: 0 auto 100px;
	}
	.img-logo {
		width: 40px;
	}
	.text-center {
		text-align: center;
	}
	.col-md-10 {
		max-width: 100%;
		flex:  0 0 100%;
	}
	.bg-read {
		color: #161a21;
		font-weight: 600;
		border: 2px solid #161a21;
		display: block;
		margin-top: 20px;
		background-color: rgba(61, 70, 85,0.25) ;
		padding: 12px ;
		font-size: 20px;
		border-radius: 8px;
		transition: all linear .3s;
	}
	.bg-read:hover,.btn-custom:hover {
		background-color: #161a21;
		color: #eaeaea;
	} 
	a:hover {
		text-decoration: none;
		background-color: transparent;
	}
	.btn-custom {
		flex: 0.8;
		font-weight: 500;
		border: 2px solid #161a21;
		background-color: rgba(61, 70, 85,0.25) ;
		color: #161a21;
		padding: 12px 0;
		font-size: 18px;
		width: 500px;
		transition: all linear .3s;

	}
</style>