<template>
    <div class="maincard">

        <h1 class="titlesec">Near to&nbsp;<span class="undero">you</span></h1>
        <!-- <div class="rec"></div> -->
        <div class="flex">
            <!-- <CardVue v-for="item in menus" :key="item.name" {{item.name}} {{item.price}}></CardVue> -->
            <CardVue v-for="menu in menus" :key="menu.name" :name=menu.name :price=menu.price :url=menu.url
                :grade="menu.grade"></CardVue>
            
        </div>
    </div>
</template>
   
<script>

import CardVue from './CardVue.vue';


export default {
    name: "PopularVue",
    props: {
        msg: String
    },
    components: { CardVue },
    
           
data() {
        return {
            menus: [
                {
                    name: "Kitchen tools",
                    price: "50$",
                    url: "spatula.jpg",
                    
                },
                {
                    name: "Blanket and sheets",
                    price: "21$",
                    url: "bowl.jpg",
                    
                },
                {
                    name: "household products",
                    price: "20$",
                    url: "towel.jpg",
                }]
        }

    },


//  return {
//  card_info: []
//  }
//  },

        
//     beforeMount() {
//  var component = this
//  fetch('/api/card_info').then(function (response) {
//  return response.json()
//  }).then(function (data) {
//  component.card_info = data
//  console.log(data)
//  })
// },


         
    // beforeUnmount() {
    //     alert("ouiii")
    // },

    methods: {
    }

}



//Stock in localstorage





</script>
   
   <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.undero {
    text-decoration: underline;
    text-decoration-color: #2471A3;
}

.rec {
    position: absolute;
    width: 88%;
    height: 40%;
    left: 6%;
    top: 105%;

    background: white;
    border-radius: 64px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;

}

.carde {
    filter: drop-shadow(10px 10px 32px rgba(0, 0, 0, 0.25));

    display: inline;
}

.flex {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 5%;
    row-gap: 20px;
    flex-wrap: wrap;
}

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

    color: #000000;
}
</style>
   