<template>
<div class="state">
  <img src="../assets/用户.png" class="item1-img"/>
  <p>个人状态</p>
  <span class="look">登陆查看个人状态</span>
  <input type="button" value="登录"  class="btn"/>
</div>
</template>
<script>
  export  default{

  }
</script>
<style scoped>
  .state{
    width:36% ;
    height: 140px;
    float: left;
    background: rgba(252,250,251,1);
    text-align: center;
  }

  .btn{
    color: rgba(252,250,251,1);
    background: rgba(215,0,0,1);
    width: 30%;
    height: 30px;
    margin-top: 35px;
    border: none;
  }
  .look{
    position: absolute;
    margin-top: 10px;
  }
</style>
