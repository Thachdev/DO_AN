<template>
	<footer class="mt-120px">
        <div class="wrap">
			<a href="#">
            <img src="../assets/img/logo9pblue.png" alt="" class="footer-logo">
        </a>
        <div class="footer-address">
            <!-- <h3 class="footer-heading">
                address
            </h3> -->
            <p class="footer-phar addre">
                <!-- <a href="https://www.google.com/maps"> <i class="ti-location-arrow"></i> 28/2/2 Huỳnh Phan Hộ, Phường Trà An, Quận Bình Thủy, Tp. Cân Thơ</a>
                <a href="tel:0774008040"> <i class="ti-mobile"></i> 0774008040</a>
                <a href="mailto:phu3009@gmail.com"><i class="far fa-envelope"></i>phu3009@gmail.com</a> -->
				Chào mừng bạn đến với Rho Library, Rho Library là một nền tảng nội dung số trên internet, nơi thành viên có thể tự do xuất bản những nội dung tiếng Việt như: Tiểu thuyết, light novel, truyện ngắn hoặc thơ văn khác. Với những chức năng được cải tiến liên tục, Rho Library sẽ mang lại cho Tác giả sáng tác truyện, Dịch giả đăng truyện và Người đọc truyện online những trải nghiệm tuyệt vời nhất. Đừng ngại đăng ký tài khoản tại Rho Library, chỉ mất 30s và hoàn toàn miễn phí.
			</p>
        </div>
        <!-- <div class="footer-contact">
           
            <p class="footer-phar mb-32px-on-mobie">
                <a href="https://www.facebook.com/tuilaminhphunehihi"><i class=" conact-icon fab fa-facebook"></i></a>
                <a href="https://www.instagram.com/"><i class=" conact-icon fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/"><i class=" conact-icon fab fa-youtube"></i></a>
            </p>
        </div> -->
		</div>
	</footer>
</template>
<style scoped>
	.mt-120px {
		margin-top: 120px;
	}
	footer {
		border-top: 1px solid #161a21;
		position: relative;
		bottom: 0;
		right: 0;
		left: 0;
		color: #161a21;
		background-color: rgba(61, 70, 85,0.25) ;

	}
	.wrap {
		display: flex;
		width: 1200px;
		margin: 0 auto;
		margin-top: 12px;
	}
	a:hover {
		text-decoration: none;
		background-color: transparent;	
	}
	.footer-logo {
		height: 120px;
	}
	.footer-heading {
		text-transform: uppercase;
		letter-spacing: 2px;
		margin: 20px 0 ;
	}
	.footer-phar {
		width: 800px;
		margin-left: 40px;
		margin-top: 12px;
	}
	.footer-phar a {
		color: #fff;
		text-decoration: none;
		margin-bottom: 8px;
		transition: all linear .3s;
	}
	.footer-phar a:hover {
		color: rgba(255, 255 , 255, 0.6);
	}
	.footer-phar a i {
		width: 24px;
	}
	.conact-icon {
		font-size: 32px;
		margin-right: 32px;
	}
</style>