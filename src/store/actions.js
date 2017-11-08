import axios from 'axios'

export default {
    getArticleLists(context) {
        axios({
	        	method: 'get',
                url: '/api/topics/hot.json',
              })
        .then((res) => {
        	if (res.status === 200){
           		 context.commit('loadArticleLists', res.data)
        	}
        })
        .catch((e) => {
            console.log('getArticleLists action error: ', e);
        });
    },
    getArticle(context,topicid) {
        axios({
        	methods:'get',
        	url:'/api/topics/show.json',
        	params:{
        		id:topicid
        	}
        })
        .then((res) => {
        	if (res.status === 200){
        		context.commit('loadArticle', res.data)
        	}
        }).catch((e) => {
            console.log('getArticle action error: ', e);
        });
    },
    getReplies(context, topic_id) {
       axios({
        	methods:'get',
        	url:'/api/replies/show.json',
        	params:{
        		topic_id:topic_id
        	}
        })
        .then((res) => {
        	if (res.status === 200){
        		context.commit('loadArticleReplies', res.data)
        	}
        }).catch((e) => {
            console.log('getReplies action error: ', e);
        });
    },
    getUserInfo(context, user_name) {
       axios({
        	methods:'get',
        	url:'/api/members/show.json',
        	params:{
        		username:user_name
        	}
        })
        .then((res) => {
        	if (res.status === 200){
        		context.commit('loadUserInfo', res.data)
        	}
        }).catch((e) => {
            console.log('getUserInfo action error: ', e);
        });
    },    
    getUserPosts(context,user_name){
    	axios({
    		methods:'get',
    		url:'/api/topics/show.json',
    		params:{
    			username:user_name
    		}
    	})
    	.then((res) => {
    		if(res.status === 200){
    			context.commit('loadUserPosts',res.data)
    		}
    	}).catch((e) => {
    		console.log('getUserPosts action error: ',e)
    	})
    },
    getNodes(context,node_name){
    	axios({
    		methods:'get',
    		url:'/api/topics/show.json',
    		params:{
    			node_name:node_name
    		}
    	})
    	.then((res) => {
    		if(res.status === 200){
    			context.commit('loadNodes',res.data)
    		}
    	})
    	.catch((e) => {
    		console.log('getNodes action error: ',e)
    	})
    }
}
