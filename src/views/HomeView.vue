<template>
  <div class="principale">
    <HeaderVue class="head"></HeaderVue>
    <HeroVue></HeroVue>
    <!-- <PopularVue class="pop"></PopularVue> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <h1 class="titlesec">Near to&nbsp;<span class="undero">you</span></h1>
    <SortCard class="pop" drinkTypes="All" />
    <router-view />
  </div>

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import HeaderVue from '../components/HeaderVue.vue';
// import PopularVue from '../components/PopularVue.vue';
import HeroVue from '../components/HeroVue.vue';
import SortCard from '@/components/SortCard.vue';



export default {
  name: 'App',
  components: {
    // HelloWorld,
    HeaderVue,
    // PopularVue,
    HeroVue,
    SortCard
  }
}
</script>

<style>
.titlesec {

  text-align: center;
  font-family: 'Poppins', 'arial';
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  width: 200px;
  margin: 0 auto;
  color: #000000;
}

.undero {
  text-decoration: underline;
  text-decoration-color: #2471A3;
}

#app {
  /* background-image: url('./assets/bg-image.png'); */
  background: rgb(255,255,255);
background: linear-gradient(138deg, rgba(255,255,255,1) 17%, rgba(209,241,255,1) 60%, rgba(150,238,255,1) 100%);

}

.head {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

}

.slot {
  width: 22%;
  text-align: center;
  margin: 0 auto;

}

.sloth {
  margin: 3%;
  padding: 0;
  /* width: 164px;
    height: 36px; */
  font-family: 'Poppins', arial;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;


  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
}

.slotp {
  margin: 3%;
  padding: 0;
  /* width: 164px;
    height: 36px; */
  font-family: 'Poppins', arial;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;


  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
}

.pop {
  padding-top: 2%;
  padding-bottom: 50px;
  width: 80%;
  margin: 0 auto;
}
</style>
