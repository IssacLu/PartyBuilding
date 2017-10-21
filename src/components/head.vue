<template>
  <div class="nav">
  <div class="system">
    <span>天津大学党建系统</span>
    </br>
    <span class="English">Party Construction Management System</span>
  </div>
  <div>
    <ul>
      <li class="list">
        <a href="#">首  页</a>
      </li>
      <li class="list">
        <a href="#">网上党校</a>
        <ul class="detial">
          <li>
            <a>申请人培训</a>
          </li>
          <li>
            <a>积极分子培训</a>
          </li>
          <li>
            <a>预备党员党校</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#" >我的支部</a>
        <ul class="detial">
          <li>
            <a>个人状态</a>
          </li>
          <li>
            <a>支部情况</a>
          </li>
          <li>
            <a>我的消息</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#">通知公告</a>
        <ul class="detial">
          <li>
            <a>党校公告</a>
          </li>
          <li>
            <a>活动通知</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#">党建专项</a>
        <ul class="detial">
          <li>
            <a>身边的英雄</a>
          </li>
          <li>
            <a>中央精神</a>
          </li>
          <li>
            <a>群众路线</a>
          </li>
          <li>
            <a>中国梦</a>
          </li>
        </ul>

      </li>
      <li class="list">
        <a href="#">党建培训</a>
        <ul class="detial">
          <li>
            <a>党校培训</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#">重要文件</a>
        <ul class="detial">
          <li>
            <a>党史文献</a>
          </li>
          <li>
            <a>规章制度</a>
          </li>
          <li>
            <a>经典导读</a>
          </li>
          <li>
            <a>常用文书</a>
          </li>
          <li>
            <a>入党必读</a>
          </li>
          <li>
            <a>系统手册</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#" >理论学习</a>
        <ul class="detial">
          <li>
            <a>理论经典</a>
          </li>
          <li>
            <a>摄像课程</a>
          </li>
        </ul>
      </li>
      <li class="list">
        <a href="#">支部分采</a>
      </li>
    </ul>
  </div>
  <div class="land">
    <img src="../assets/登陆用户.png" />
    <a href="">登录</a>
  </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped>
  .nav{
    width: 100%;
    height: 40px;
    background:#c60001;
    color: white;
    font-size: 14px;
    text-align: center;
  }
  ul li{
    list-style: none;
    float: left;
  }
  .list{
    width: 7.7%;
    padding-top: 10px;
  }
  a{
    text-decoration: none;
    color: white;
    font-size: 14px;
  }
  .detial a{
    display: none;
  }
  .system{
    float: left;
    width: 22%;
  }
  .land{
    float: right;
    width: 100px;
    margin-right: 30px;
    margin-top: 10px;
  }
  .English{
    font-size: 8px;
  }
  img{
    width: 20px;
    height: 20px;
  }
</style>
