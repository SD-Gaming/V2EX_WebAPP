<template>
	<div>
		<div class="footer">
			<div>
	            © 2017 V2EX 
			</div>
			<div class="about">
			  	<mu-raised-button label="关于" class="demo-snackbar-button" @click="showSnackbar"/>
			  	<mu-snackbar v-if="snackbar" message="API不支持登录、评论功能" action="关闭" @actionClick="hideSnackbar" @close="hideSnackbar"/>
			</div>
		</div>
		<div class="blank">
		</div>
	</div>
</template>

<script>
export default {
	name: 'footer',
  	data () {
	    return {
	      snackbar: false,
      toast: false
	    }
  	},
  	methods: {
    	showSnackbar () {
      this.snackbar = true
      if (this.snackTimer) clearTimeout(this.snackTimer)
      this.snackTimer = setTimeout(() => { this.snackbar = false }, 2000)
    },
    hideSnackbar () {
      this.snackbar = false
      if (this.snackTimer) clearTimeout(this.snackTimer)
    },
    showToast () {
      this.toast = true
      if (this.toastTimer) clearTimeout(this.toastTimer)
      this.toastTimer = setTimeout(() => { this.toast = false }, 2000)
    },
    hideToast () {
      this.toast = false
      if (this.toastTimer) clearTimeout(this.toastTimer)
    }
  }
}
</script>

<style scoped lang="scss">
	.footer {
		background: white;
		display: flex;
		justify-content: space-between;
		padding: 0px 10px 0px 10px;
		color: #999;
		.about {
			padding-right: 5px;
		}
	}
	.blank {
		background: white;
		width: 100%;
		height: 60px;
	}
</style>