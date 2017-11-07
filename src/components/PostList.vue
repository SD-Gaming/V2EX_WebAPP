<template>
	<div v-if="!loading" class="progress">
		  <mu-circular-progress :size="80" :strokeWidth="4" color="red"/>
	</div>
	<div id="content" v-else>
		<!--<mobile-tear-sheet>-->
		 	<mu-list>
		 		<div class="tab-bar">
		 			<a>技术</a>
		 			<a>创意</a>
		 			<a>Apple</a>
		 			<a>酷工作</a>
		 			<a>交易</a>
		 			<a>城市</a>
		 		</div>
		 		<div class="nav-bar">
		 			<a>问与答</a>
		 			<a>最热</a>
		 			<a>全部</a>
		 			<a>R2</a>
		 			<a>节点</a>
		 			<a>关注</a>
		 		</div>
			    <mu-sub-header>
			    	最热主题
			    </mu-sub-header>
			    <mu-list-item  v-for="topic in latest_topics" :key='topic.id' :title="topic.title" :to='{name:"article",params:{id:topic.id}}'>
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
		}
	},
	created(){
		this.getdata();
	},
	computed:{
		latest_topics(){
			return this.$store.state.articleLists;
		}
	},
	watch:{
		latest_topics(val){
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