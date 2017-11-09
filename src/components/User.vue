<template>
	<div v-if="!loading" class="progress">
		  <mu-circular-progress :size="80" :strokeWidth="4" color="red"/>
	</div>
	<div class="user" v-else>
		<mu-card>
		  	<mu-card-header :title="user_info.username" :subTitle="'加入于 '+createdTime">
			    <mu-avatar :src="user_info.avatar_large" slot="avatar" alt='图片失效'/>
		  	</mu-card-header>
		  	<mu-card-text>
			    历史发布的主题
		  	</mu-card-text>
	  		<div class="waist_line"></div>
	  		
		  	<ul>
		  		<template v-for="post of user_posts">
		  	 		<mu-card-title :title="post.title" :subTitle="post.created | formatDate"/>
		  		</template>
		  	</ul>
		  	
		</mu-card>
	</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      loading: false,
    }
  },
  methods:{
		getUserInfoData(){
			this.$store.dispatch('getUserInfo',this.$route.params.loginname)
		},
		getUserPostsData(){
			this.$store.dispatch('getUserPosts',this.$route.params.loginname)
		}
	},
	created(){
		this.getUserInfoData();
		this.getUserPostsData();
	},
	computed:{
		user_info(){
			return this.$store.state.userInfo;
		},
		user_posts(){
		    return this.$store.state.userPosts	;
		},
		//处理用户创建账号时间
		createdTime(){
			let signinTime = this.$store.state.userInfo.created;
			let time = new Date(signinTime*1000);
			let cnTime = time.toLocaleString();
			return cnTime;
		}
	},
	watch:{
		userInfomation(val){
			if(val){
				this.loading=true;
			}
		}
	}
}
</script>

<style lang="scss">
	.progress {
	    display: flex;
		justify-content: center;
	}
	.user {
		.userdetail {
			img {
				display: inline-block;
				width: 80px;
				height: 80px;
			}
		}
	}
</style>