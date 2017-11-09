<template>
	<div v-if="!loading" class="progress">
		  <mu-circular-progress :size="80" :strokeWidth="4" color="red"/>
	</div>
	<div class="article" v-else>
	  	<mu-breadcrumb>
		    <mu-breadcrumb-item href="/">&nbsp&nbspV2EX</mu-breadcrumb-item>
		    <mu-breadcrumb-item >{{content[0].node.title}}</mu-breadcrumb-item>
	  	</mu-breadcrumb>
		<mu-card>
		  	<mu-card-title :title="content[0].title" :subTitle="content[0].created | formatDate"/>
		  	<mu-card-text v-html="content[0].content_rendered">
		 	</mu-card-text>
		 	
		 	<router-link :to="{name:'user',params:{loginname:content[0].member.username}}">
		 		<mu-card-header :title="content[0].member.username" :subTitle="content[0].member.tagline | displaytagline">
		    		<mu-avatar :src="content[0].member.avatar_large" slot="avatar" alt='图片失效'/>
		  		</mu-card-header>
		  	</router-link>
		  	
		  	<div class="waist_line"></div>
		  	
		  	<ul>
			  <template v-for="reply in replies">
			    	<mu-card-text v-html="reply.content_rendered">
		 			</mu-card-text>
		 			
		 			<router-link :to="{name:'user',params:{loginname:reply.member.username}}">
			 			<mu-card-header :title="reply.member.username" :subTitle="reply.member.tagline | displaytagline">
					    	<mu-avatar :src="reply.member.avatar_large" slot="avatar" alt='图片失效'/>
					  	</mu-card-header>
		  			</router-link>
				  	
				  	<div class="reply_waist_line"></div>
			  </template>
			</ul>	
		</mu-card>
	</div>
</template>

<script>
export default {
  data () {
    return {
    	loading:false,
    }
  },
  filters:{
  	displaytagline(val){
  		if (val =='None') {
  			return '';
  		} else {
  			return val
  		}
  	}
  },
  methods:{
  	getContentData(){
  		this.$store.dispatch('getArticle',this.$route.params.id)
  	},
  	getRepliesData(){
  		this.$store.dispatch('getReplies',this.$route.params.id)
  	}
  },
  created(){
  	this.getContentData();
  	this.getRepliesData();
  },
  	computed:{
	  	content(){
	  		return this.$store.state.articleContent;
	  	},
	  	replies(){
	  		return this.$store.state.articleReplies;
	  	}
  	},
  	watch:{
  		//观察 store.state.articleContent 的是否生成，生成后在挂载页面。
  		//可以防止页面挂载，但是ajax的请求数据还没有生成而报错。
  		content(val){
  			if(val){
	  			this.loading = true;
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
	.article {
		.waist_line {
			height: 4px;
			background-color: pink;
		}
		.reply_waist_line {
			border-bottom: 1px solid #CBC9C9;
		}
		.mu-card img {
			width: 100%;
		}
	}
</style>