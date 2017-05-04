<template>
  <div class="wrap">
    <div class="logo"><p>点击右侧显示计数{{count}}</p></div>
    <div class="tabs">
      <ul>
    	<li class="active"><img src="../assets/list.png"></li>
    	<li><img src="../assets/charts.png"></li>
    	<li><img src="../assets/location.png"></li>
    	<li><img src="../assets/lists-1.png"></li>
      </ul>
    </div>
    <div class="clear"></div>
  	<div class="lists">
  	  <ul>
  	  	<li :class="{active : url === '/home'}"><img src="../assets/home.png"><router-link :to="{name: 'content'}">home</router-link></li>
  	  	<li :class="{active : url === '/charts'}"><img src="../assets/charts.png"><router-link :to="{name: 'charts'}">charts</router-link></li>
      </ul>
  	</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {url: ''}
  },
  created() {
    this.getUrl()
  },
  methods: {
  	getUrl() {
  	  this.url = this.$route.path
  	}
  },
  computed: {
  	...mapState(['count']),
  },
  watch: {
    '$route': 'getUrl'
  },
}
</script>
<style scoped>
*{
	padding: 0;
	margin: 0;
}
  .wrap{
	color: #fff;
  }
  .logo{
  	padding: 10px 0;
  	text-align: center;
  }
  .tabs,.tabs.ul{
  	width: 200px;
  }
  .tabs li{
  	float: left;
  	width: 50px;
  	height: 30px;
  	background: #434343;
  	text-align: center;
  }
  .tabs li img{
  	width: 20px;
  	height: 15px;
  	margin-top: 6px;
  }
  .tabs li.active{
  	background: none
  }
  .clear{clear: both;}
  .lists{
  	width: 200px;
  	padding: 20px 0px;
  }
  .lists li{
  	width: 200px;
  	height: 35px;
  	line-height: 35px;
  }
  .lists li a{
  	color: #fff;
  	text-decoration: none;
  }
  .lists li.active{
  	background: #CC4041;
  }
  .lists li img{
  	width: 20px;
  	height: 20px;
  	margin-right: 5px;
  	margin-left: 15px;
  }
</style>