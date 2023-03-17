<template>
  <nav>
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/xinwen">新闻</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
/*
let isDone: boolean = false;
console.log(isDone);

let age: number = 10;
console.log(age);

let firstName: string = "viking";
let message: string = `Hello, ${firstName}`;
console.log(message);

let u: undefined = undefined;
console.log(u);
let n: null = null;
console.log(n);

let num: number = undefined;
console.log(num);
let notSure: any = 4;
notSure = "maybe a string";
console.log(notSure);
notSure = true;
console.log(notSure);
//console.log(notSure.getName());*/

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
