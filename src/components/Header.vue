<template>
	<div class="header">
	  	<router-link :to="{name:'root'}">
	  		<img src="../assets/logo@2x.png"/>
	  	</router-link>
	  	<div class="enter_port">
	  		<a href="/">首页</a>
	  		<a>注册</a>
	  		<a>登录</a>
	  	</div>
	</div>
</template>

<script>
	export default {
	  name: 'head',
	}
</script>

<style scoped lang="scss">
	.header {
		background: white;
		display: flex;
		justify-content: space-between;
		padding: 6px 10px 0 5px;
		img {
			width: 80px;
			height: 25px;
		}
		.enter_port {
			padding-top: 2px;
			a {
				padding-right: 10px;
			}
		}
	}
</style>