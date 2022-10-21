<template>
    <div class="principale">
        <HeaderVue />
        <h1 class="titre">Buy items near to you</h1>
        <p class="textp">Choose the category and select the items near to you</p>
        <div class="dropprin">
            <div class="dropdownp">
                <button class="dropbtnc">{{category}}</button>
                <div class="dropdown-content">
                    <a @click="changeCategory('All')">All Category</a>
                    <a @click="changeCategory('Kitchen tools')">Kitchen tools</a>
                    <a @click="changeCategory('Bedding')">Bedding</a>
                    <a @click="changeCategory('Household products')">Household products</a>
                </div>
            </div>
        </div>
        <SortCard class="pop" :drinkTypes="this.category" :key="this.category" />

    </div>
</template>

<script>
import HeaderVue from '@/components/HeaderVue.vue';
// import PopularVue from '@/components/PopularVue.vue';
import SortCard from '@/components/SortCard.vue';
export default {
    name: 'BuyView',
    components: { HeaderVue,
        //  PopularVue, 
         SortCard },

    data() {
        return {
            category: 'All',
            picked: ''
        }
    },
    methods: {
        changeCategory(category) {
            this.category = category;
        },
        // filterArray(){
        //     const result = cat.filter(category => category == this.category);
        // }
    }
}


</script>

<style scopped>
.principale{
    min-height: 100vh;
}
.titre {
    margin: 5%;
}


.textp {
    color: #7E7D7A;
    font-size: large;
}

.dropprin {
    padding-top: 2%;
    align-items: center;
    margin: 0 auto;
}

.dropbtnc {

    width: 300px;

    background-color: rgba(0, 16, 243, 0.321);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.dropbtnsell {
    background-color: rgba(243, 0, 0, 0.321);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
}

/* The container <div> - needed to position the dropdown content */
.dropdownp {

    left: 10px;
    position: relative;
    display: inline-block;
    right: 5%;
    padding: 5%;

}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    /* min-width: 160px; */
    width: 330px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
}

/* Links inside the dropdown */
.dropdown-content a {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
    background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdownp:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdownp:hover .dropbtn {
    background-color: #626c6361;
}
</style>