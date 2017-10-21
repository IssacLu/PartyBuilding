<template>
  <div id="app">
  <vhead></vhead>
  <div class="picture">
    <p class="text">党建系统新版回归</p>
  </div>
    <div class="item">
    <vland></vland>
    <vnotice></vnotice>
      <vspecial :msg="logomsg[0]" style="margin-right: 16px"></vspecial>
      <vspecial :msg="logomsg[1]"></vspecial>
      <img src="./assets/网上党课.png" class="item2-pic" />
      <vmodel></vmodel>
      <img src="./assets/影像课程.png" class="item3-pic" />
      <vtrain></vtrain>
    </div>
      <vfoot></vfoot>

  </div>
</template>

<script>
  import head from './components/head.vue'
  import land from './components/land.vue'
  import notice from './components/notice.vue'
  import special from './components/special.vue'
  import model from  './components/model.vue'
  import train from './components/train.vue'
  import foot from './components/foot.vue'
export default {
  components: {
      'vhead':head,
      'vland':land,
      'vnotice':notice,
      'vspecial':special,
      'vmodel':model,
      'vtrain':train,
      'vfoot':foot,
  },
  data(){
      return{
          logomsg:['党建专项','支部分采']
      }
  }
}
</script>

<style>
  .picture{
    width: 62.5%;
    height: 290px;
    position: relative;
    margin:0 auto;
    border: 1px solid black;
    background: white;
  }
  .text{
    width: 100%;
    height: 30px;
    position: relative;
    margin-top: 255px;
    background: rgba(0,0,0,0.35);
    color: rgba(255,255,255,0.7);
    text-align: center;
    padding-top: 5px;
  }
  .item{
    height: 200px;
    width: 62.5%;
    margin: 0 auto;
    margin-top: 20px;
  }
  span{
    font-size: 12px;
  }
  li{
    list-style: none;
  }
  p{
    color: rgba(215,0,0,1);
    font-size: 14px;
    text-align: left;
    margin-top: 13px;
    margin-bottom: 3px;
  }
  .item1-img{
    width: 17px;
    height: 17px;
    float: left;
    margin-left: 10px;
    margin-top: 15px;
    margin-right: 10px;
  }
  .item2-pic {
    width: 24%;
    height: 112px;
    position: relative;
    float: left;
   margin-top: 20px;

  }
  .item3-pic{
    width: 24%;
    height: 112px;
    position: relative;
    margin-top: 20px;
    float: right;
  }
</style>
