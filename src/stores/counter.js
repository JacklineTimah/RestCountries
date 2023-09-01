
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
  //GETTERS
export const useCountryStore = defineStore('country',() =>{
  const countryData = ref([]);
  const countryname = ref('');
  const countriesData = ref([]);
  const search = ref ('');
  const indexRegion = ref ('');
 //ACTIONS
 async function getCountryData(){
try{
  const response = await axios.get('https://restcountries.com/v3.1/all?')
  countriesData.value=response.data;
}catch(error){
  console.error(error);
}
 };

 async function getCountryData(){
  try{
    const response = await axios.get('https://restcountries.com/v3.1/name/${countryname.value}')
    countryData.value=response.data;
  }catch(error){
    console.error(error);
  }
   }

 function updateCountry(name){
  console.log(name);
  countryname.value = name
 }
//filtered countries
const detailedCountries = computed (() =>{
  console.log(indexRegion.value)
  if(search.value){
    if(indexRegion.value){
      return countriesData.value.filter(country =>country.region=== detailedCountries.value && country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase()));
    }else{
      return countriesData.value.filter(country => country.name.common.toLowerCase().includes(search.value.toLocaleLowerCase())); 
    }
  }
    else{
      return countriesData.value
    }
  
});





 return { countryData,countryname,countriesData,getCountryData,updateCountry,detailedCountries,indexRegion,search}
}
)



