<script setup>
import { useCountryStore } from '../stores/counter';
import { onMounted, onUpdated } from 'vue';
import {useRouter} from 'vue-router';
const router = useRouter();

const countryStore = useCountryStore();
countryStore.getCountryData(router.params);

onMounted(() =>{countryStore.getCountryData()})
  console.log(countryStore.countryData);
</script>

<template>
 <HeaderComponent />
  <main>
    <section>
    <div class="Detailed">
    <div class="DetailCountries">
      <img :src="countryStore.countryData[0]?.flags.png" :alt="countryStore.countryData[0]?.name.common" class="flag">
      <div class="Popular">
        <h2>{{ countryStore.countryData[0]?.name.common }}</h2>
        <div>
        <div class="Description">
        <p><strong>Native Name:</strong> <span v-for="nativeName in countryStore.countryData[0]?.name.nativeName" :key="nativeName">{{ nativeName.official }}</span></p>
        <p><strong>Population:</strong> {{ countryStore.countryData[0]?.population }}</p>
        <p><strong>Region:</strong> {{ countryStore.countryData[0]?.region }}</p>
        <p><strong>Subregion:</strong> {{ countryStore.countryData[0]?.subregion }}</p>
        <p><strong>Capital:</strong> {{ countryStore.countryData[0]?.capital[0] }}</p>
        </div>
        <div class="TopLevel">
        <p><strong>Top Level Domain:</strong> {{ countryStore.countryData[0]?.tld[0] }}</p>
        <div class="Mothertongue">
        <p><strong>Languages:</strong></p>
        <ul>
          <li v-for="language in countryStore.countryData[0]?.languages" :key="language">
            {{ language }}
          </li>
        </ul>
        </div>
        </div>
        </div>
        <div class="circumference">
          <p><strong>Border Countries:</strong></p>
          <ul>
            <li v-for="borderCountry in countryStore.countryData[0]?.borders" :key="borderCountry">
              {{ borderCountry }}
            </li>
          </ul>
        </div>
        
      </div>
      </div>
      </div>
      </section>
  </main>
</template>

<style scoped>
section{
  background: #FAFAFA;
  height: 100vh;
}
.DetailCountries{
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid red;
  gap: 20px;
  padding: 0px 20px;
}
.DetailCountries img{
width: 319.837px;
  height: 275.924px;
  border: 1px solid red;
}
.Popular{
    display: flex;
  flex-direction: column;
  justify-content: flex-start;
  border: 1px solid red;
  gap: 16px;  
}
.Popular h2{
  color: #111517;
  font-family: 'Nunito Sans';
  font-size: 22px;
  font-style: normal;
  font-weight: 800;
  line-height: normal; 
}
.Description{
    display: flex;
  flex-direction: column; 
}
.Description p{
font-family: 'Nunito Sans';
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 32px;  
}
.TopLevel{
    display: flex;
  flex-direction: column;
  gap: 5px;  
}
.TopLevel P{
 font-family: 'Nunito Sans';
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 32px;   
}
.Mothertongue{
  display: flex;
  gap: 5px; 
}
.Mothertongue ul{
    display: flex;
  gap: 5px;  
} 
.Mothertongue ul li{
list-style: none;
font-family: 'Nunito Sans';
font-size: 14px;
font-style: normal;
font-weight: 600;
line-height: 32px;
}
.circumference{
display: flex;
  flex-direction: column;
  gap: 10px; 
}
.circumference ul{
    display: flex;
  list-style: none;
  gap: 10px;
  flex-wrap: wrap;
}
.circumference ul li{
 border-radius: 2px;
background: #FFF;
padding: 6px 30px;
box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.10);
}

@media (min-width: 1024px) {

}
</style>
