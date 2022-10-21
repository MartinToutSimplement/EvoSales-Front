<template>
  <div class="about">
    <HeaderVue></HeaderVue>
    <div class="marg">
      <h3>Website made by</h3>
      <p>Martin Lucas</p>
      <p>Jefferson Lin</p>
      <p>Clement Bosc</p>
    </div>

  </div>
</template>
<script>
import HeaderVue from '@/components/HeaderVue.vue';
export default {
  name: 'BuyView',
  components: { HeaderVue }
}
</script>
<style scoped>
.about {
  min-height: 100vh;
}
.marg{
  margin-top: 13%;
}
p{
  margin: 1%;
}
</style>