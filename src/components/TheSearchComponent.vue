<script setup>
</script>

<template>
<button class="search">
  <div class="rectangle"></div>
  <img  class="search2" src="src/assets/search2.png" alt="searchicon">
  <div class="search-for-a-country">Search for a country…</div>
</button>


  
</template>

<style scoped>
.search,
.search * {
  box-sizing: border-box;
}
.search {
  width: 343px;
  height: 48px;
  position: relative;
}
.rectangle {
  background: #ffffff;
  border-radius: 5px;
  width: 343px;
  height: 48px;
  position: absolute;
  left: 0px;
  top: 0px;
  box-shadow: 0px 2px 9px 0px rgba(0, 0, 0, 0.05);
}
.search2 {
  position: absolute;
  left: 32px;
  top: 16px;
  overflow: visible;
}
.search-for-a-country {
  color: #c4c4c4;
  text-align: left;
  font: 400 12px/20px "Nunito Sans", sans-serif;
  position: absolute;
  left: 74px;
  top: calc(50% - 10px);
}















@media (min-width: 750px){
  

}
</style>