<template>
	<div class="progress">
  		<mu-circular-progress :size="80" :strokeWidth="4" color="red" v-show="!loading"/>
		<div id="content" v-show="loading">
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
	</div>
</template>

<script>

export default {
	data () {
	    return {
	    	loading:false,
	    	tab:'最热',
	    	drawtab:null
	    }
	},
	methods:{
		getdata(){
			this.$store.dispatch('getArticleLists')
		},
		//采取事件委托方式，绑定事件到<a>标签的父节点，节省性能
		get_nodes_topics(e){
			//对触发事件的元素进行筛选，根据触发点击的<a>标签属性，进行节点标签内文章列表的切换
			if (e.target.name === 'hot'){
				this.getdata();
				this.tab = '最热';
			}else {
				this.$store.dispatch('getNodes',e.target.name);
				this.tab = e.target.innerText	;
			}
			//优化UE，实现当前节点标签点击着色，同时其他节点恢复白色。
			//此处实现的方法有很多种，开始我使用的是 v-if 进行进度条的条件渲染，发现在DOM属性销毁和重建以后，内联样式无法保存，出现点击瞬间变色马上回复原色情况
			//后来考虑到频繁的切换使用 v-show 更加的节省性能，所以用 v-show 来实现条件渲染，效果并没有改变
			//但是为了实现单选变色，进行了一些尝试，发现下面这种比较‘便宜’不需要大面积的改动。
			//直觉上应该有更好的办法，容后面更加深入了再进行优化。
			if(this.drawtab === null) {
				this.drawtab = e.target;
				this.drawtab.style.background = '#fdbb88d6'; 
			} else {
				this.drawtab.style.background = 'white'; 
				this.drawtab = e.target;
				this.drawtab.style.background = '#fdbb88d6'; 
			}
			this.loading=false;
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
	    	.backcolor {
	    		background: rgb(204,204,204);
	    	}
	    	a {
	    		flex-basis:15%;
	    		text-align: center;
	    	}
	    }
	}
</style>