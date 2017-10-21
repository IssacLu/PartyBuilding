<template>
  <div class="item2" id="data">
    <img src="../assets/通知.png" class="item1-img">
    <p>{{msg}}</p>
    <img class="item-pic"/>
    <span></span>
  </div>
</template>
<script>
  export default{
      name:'data',
    props:['msg'],
      data(){
          return{

          }
      },
  }
</script>
<style scoped>
  .item2{
    width: 49%;
    height: 140px;
    background: rgba(252,250,251,1);
    position: relative;
    float: left;
    margin-top: 20px;
  }
  .item-pic{
    width:45%;
    height:100px;
    position: relative;
    float: left;
    margin-left: 20px;
  }
</style>
