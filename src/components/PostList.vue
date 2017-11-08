<template>
	<div v-if="!loading" class="progress">
		  <mu-circular-progress :size="80" :strokeWidth="4" color="red"/>
	</div>
	<div id="content" v-else>
		<!--<mobile-tear-sheet>-->
		 	<mu-list>
		 		<div class="tab-bar" @click="get_nodes_topics">
		 			<a name="hot">最热</a>
		 			<a name="tech">技术</a>
		 			<a name="create">创意</a>
		 			<a name="apple">Apple</a>
		 			<a name="jobs">酷工作</a>
		 			<a name="deals">交易</a>
		 			<a name="city">城市</a>
		 		</div>
		 		<!--<div class="nav-bar">
		 			<a>问与答</a>
		 			<a href="/">最热</a>
		 			<a>全部</a>
		 			<a>R2</a>
		 			<a>节点</a>
		 			<a>关注</a>
		 		</div>-->
			    <mu-sub-header>
			    	最热主题
			    </mu-sub-header>
			    <mu-list-item  v-for="topic in topic_list" :key='topic.id' :title="topic.title" :to='{name:"article",params:{id:topic.id}}'>
		      		<mu-avatar :src="topic.member.avatar_normal" slot="leftAvatar"/>
		      		<mu-badge :content="(topic.replies).toString()" primary slot="after"/>
			    </mu-list-item>
		  	</mu-list>
		<!--</mobile-tear-sheet>-->
	</div>
</template>

<script>

export default {
	data () {
	    return {
	    	loading:false,
	    }
	},
	methods:{
		getdata(){
			this.$store.dispatch('getArticleLists')
		},
		get_nodes_topics(e){
			console.log(e.target.name)
			if (e.target.name === 'hot'){
				this.loading=false;
				this.getdata();
			}else if (e.target.name === 'tech') {
				this.loading=false;
				this.$store.dispatch('getNodes','tech')
			}
		}
	},
	created(){
		this.getdata();
	},
	computed:{
		topic_list(){
			return this.$store.state.articleLists;
		}
	},
	watch:{
		topic_list(val){
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
	#content {
	    border: 4px solid #fcb2b2;
	    .tab-bar {
	    	display:flex;
	    	justify-content: space-around;
	    	a {
	    		flex-grow: 1;
	    		text-align: center;
	    	}
	    }
	    .nav-bar {
	    	display: flex;
	    	justify-content: flex-start;
	    	a {
	    		flex-basis:15%;
	    		text-align: center;
	    	}
	    }
	}
</style>