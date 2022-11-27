<template>
	<!-- 大盒子 -->
	<div class="box">
		<div class="passwordContainer">
			<div class="user-image">
				<img src="../../assets/7.png" alt="" />
				<!-- <img src="./images/1.jpg" alt=""> -->
			</div>
			<div class="">
				账号
				<el-input
					placeholder="请输入用户名"
					size="min"
					class="input"
					v-model="loginForm.phone"
				/>
			</div>
			<div class="">
				密码
				<el-input
					type="text"
					placeholder="请输入密码"
					size="min"
					class="input"
					v-model="loginForm.password"
				/>
			</div>
			<el-button
				style="margin-top: 20px"
				type="primary"
				size="big"
				class="button"
				@click.prevent="handleLogin"
				>注册/登录
			</el-button>
		</div>
	</div>
</template>

<script setup>
	// 引入响应式数据
	import { ref } from "vue";
	// 引入仓库
	import { useUserInfoStore } from "../../store/userinfo";
	const userInfoStore = useUserInfoStore();

	//  声明响应式数据绑定用户名和密码
	const loginForm = ref({
		phone: "15931294039",
		password: "111111",
	});
	// 点击登录的回调
	//点击登录按钮
	const handleLogin = async () => {
		const { phone, password } = loginForm.value;
		try {
			//userInfoStore仓库调用login方法，携带账号与密码发请求---->登录请求
			let result = await userInfoStore.login(phone, password);
			console.log(result);
			// return result;
			// router.push();
		} finally {
		}
	};
</script>

<style scoped>
	.box {
		width: 100%;
		height: 667px;

		/* background:rgb(105, 223, 255); */
		background: linear-gradient(to top, #ddfcfc, #82e7e1, #ccf2fb);
		/* padding-top:100px; */
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.user-image {
		width: 100px;
		height: 100px;
		/* background: pink; */
		margin: 20px auto;
	}
	.user-image img {
		/* border-radius: 50%; */
		width: 100%;
		height: 100%;
	}
	.passwordContainer {
		width: 100%;
		height: 400px;
		/* height: 100%; */
	}
	.input {
		width: 70%;
		padding: 10px;
	}
	/* .button{

} */
</style>
