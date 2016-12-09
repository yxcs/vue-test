<template>
  <div class="wrap">
    <div>
      <ul v-for="item in datas">
    	<li><router-link :to="{name: 'details', params: {id : item.cid}}">{{item.title}}</router-link></li>
      </ul>
    </div>
    <div class="increment" @click="increment">点击查看左侧效果</div>
  </div>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
  data() {
  	return {datas: []}
  },
  created() {
  	this.$http.get("http://localhost/wx/vue/lists.php").then(data => {
  		const datas = JSON.parse(data.body)
  		this.datas = datas
  	  })
  },
  methods: {
  	...mapMutations(['increment'])
  },
  computed: {
  }
}
</script>

<style scoped>
	.wrap{
		font-size: 16px;
	}
	.increment{
		width: 100%;
		height: 50px;
		text-align: center;
		line-height: 50px;
		font-size: 30px;
		cursor: pointer;
	}
</style>