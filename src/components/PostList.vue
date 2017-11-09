<template>
	<div v-if="!loading" class="progress">
		  <mu-circular-progress :size="80" :strokeWidth="4" color="red"/>
	</div>
	<div id="content" v-else>
		 	<mu-list>
		 		<div class="tab-bar" @click="get_nodes_topics">
		 			<a name="hot">最热</a>
		 			<a name="tech">技术</a>
		 			<a name="create">创意</a>
		 			<a name="apple">Apple</a>
		 			<a name="jobs">酷工作</a>
		 			<a name="deals">交易</a>
		 			<a name="qna">问与答</a>
		 		</div>
		 		
			    <mu-sub-header>
			    	{{tab}}
			    </mu-sub-header>
			    <mu-list-item  v-for="topic in topic_list" :key='topic.id' :title="topic.title" :to='{name:"article",params:{id:topic.id}}'>
		      		<mu-avatar :src="topic.member.avatar_normal" slot="leftAvatar" alt='图片失效'/>
		      		<mu-badge :content="(topic.replies).toString()" primary slot="after"/>
			    </mu-list-item>
		  	</mu-list>
	</div>
</template>

<script>

export default {
	data () {
	    return {
	    	loading:false,
	    	tab:'最热'
	    }
	},
	methods:{
		getdata(){
			this.$store.dispatch('getArticleLists')
		},
		//采取事件委托方式，绑定事件到链接父节点
		get_nodes_topics(e){
			if (e.target.name === 'hot'){
				this.loading=false;
				this.getdata();
				this.tab = '最热';
			}else {
				this.loading=false;
				this.$store.dispatch('getNodes',e.target.name);
				this.tab = e.target.innerText	;
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