<template>
  <div class="wrap">
    <div>{{msg}}</div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '这里是header啦'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .wrap{
   font-size: 14px;
 }
</style>
