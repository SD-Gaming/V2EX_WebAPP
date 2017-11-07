export default {
    loadArticleLists(state, data) {
        state.articleLists = data;
    },
    loadArticle(state,data) {
        state.articleContent = data;
    },
    loadArticleReplies(state, data) {
        state.articleReplies = data
    },
    loadUserInfo(state, data) {
        state.userInfo = data
    },
    loadUserPosts(state, data) {
        state.userPosts = data
    }
}
