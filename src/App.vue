<template>
  <div id="app">
  	<v2ex-header></v2ex-header>
  	<div class="container">
	  	<router-view></router-view>
  	</div>
    <v2ex-footer></v2ex-footer>
  </div>
</template>

<script>
import v2exHeader from './components/Header'
import v2exFooter from './components/Footer'

export default {
  name: 'app',
	components:{
			v2exHeader,
			v2exFooter
	}
}
</script>

<style lang="scss">
#app {
	min-width: 310px;
	ul {
		padding: 0;
	}
	.container {
		border: 4px solid pink;
	}
}
</style>
