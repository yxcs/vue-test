<template>
  <div class="wrap">
    <div class="wrap-left">
      <my-home></my-home>
    </div>
    <div class="wrap-right">
      <div class="header">
        <my-header></my-header>
      </div>
      <div class="content"> 
      <router-view></router-view>
      </div>
      <div class="footer">
        <my-footer></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from './components/header'
import MyFooter from './components/footer'
import MyHome from './components/home'

export default {
  name: 'app',
  components: {
    MyHeader,
    MyFooter,
    MyHome
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.wrap{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.wrap-left{
  float: left;
  width: 200px;
  height: calc(100vh - 40px);
}
.wrap-right{
   float: left;
  width: calc(100vw - 200px);
  background: #fff;
}
.wrap-right>div{
  width: 100%;
}
.wrap-right .header{
  height: 60px;
}
.wrap-right .content{
  height: calc(100vh - 100px);
}
.wrap-right .footer{
  height: 40px;
  background: #232323;
}
</style>
