<script setup>

</script>

<template>
    <div class="Header">
       <h3>Where in the world?</h3>
       <div class="DarkMode">
           <img src="src/assets/Group 3.png" alt="Moon">
           <p>Dark Mode</p>
        </div>
    </div>

</template>



<style scoped>

.Header{
    display: flex;
    padding: 30px 16px;
    justify-content: space-between;
    background: #FFF;
   box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.06);
}


.DarkMode{
    align-items: center;
    display: Flex;
    gap:8px
}

.DarkMode p{
    color: #111517;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal; 
}
.DarkMode img{
  width: 16px;
  height: 16px;
}

.Header h3{
    color: #111517;
    font-size: 14px;
    font-weight: 800;
    line-height: 20px;
    font-family: 'Nunito Sans';
}

@media (min-width: 1024px){
    .Header{
        padding: 24px 80px;
    }

    .Header h3{
    font-size: 24px;
    line-height: normal;
}
.DarkMode p{
    font-size: 16px;   
}
.DarkMode img{
  width: 20px;
  height: 20px;
}
}
</style>