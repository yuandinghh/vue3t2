<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="container-fluid p-2 bg-primary text-white text-center">
      <h1>我的第一张 Bootstrap 页面</h1>
      <p>请调整这张响应式页面的大小以查看效果！</p>
    </div>

    <div class="container  mt-5">
      <div class="row">
        <div class="col-sm-4">
          <h3>列 1</h3>
          <p>胜日寻芳泗水滨，无边光景一时新。</p>
          <p>等闲识得东风面，万紫千红总是春。</p>
        </div>
        <div class="col-sm-4">
          <h3>列 2</h3>
          <p>纷纷红紫已成尘，布谷声中夏令新。</p>
          <p>夹路桑麻行不尽，始知身是太平人。</p>
        </div>
        <div class="col-sm-4">
          <h3>列 3</h3>
          <p>远上寒山石径斜，白云生处有人家。</p>
          <p>停车坐爱枫林晚，霜叶红于二月花。</p>
        </div>
      </div>
    </div>
    <div class="d-flex p-3 bg-secondary text-white">
  <div class="p-2 bg-info">Flex item 1</div>
  <div class="p-2 bg-warning">Flex item 2</div>
  <div class="p-2 bg-primary">Flex item 3</div>
</div>
  </div>
</template>

<script lang="ts">
export default {

}
// // 数字去重的方法
// Array.prototype.unique = function () {
//   var res = [];
//   var json = {};
//   for (let i = 0; i < this.length; i++) {
//     if (!json[this[i]]) {
//       res.push(this[i]);
//       json[this[i]] = 1;
//     }
//   }
//   return res;
// }

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
