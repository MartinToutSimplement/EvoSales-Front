<template>
    <div class="maincard">
        <!-- <div class="rec"></div> -->
        <div class="flex">
            <CardVue v-for="menu in menus" :key="menu.product_name" :name=menu.product_name :price=menu.price
                :url=menu.image :imgSrc="menu.imgSrc" :description="menu.description" :phone_number="menu.phone_number">
            </CardVue>
            <h2 v-if="menus.length === 0" class="alert">No items are currently available</h2>
        </div>
    </div>
</template>

<script>
import CardVue from './CardVue.vue';
export default {
    name: 'SortCard',
    components: { CardVue },
    props: {
        drinkTypes: String
    },
    data() {
        return {
            menus: [],
        }

    },
    beforeCreate() {
        console.log(this.drinkTypes)
        var component = this
        if (this.drinkTypes == "Kitchen tools") {

            fetch('/api/card/kt').then(function (response) {
                return response.json()
            }).then(function (data) {
                component.menus = data
                console.log(data)
            })
        } else if (this.drinkTypes == "Bedding") {

            fetch('/api/card/bedding').then(function (response) {
                return response.json()
            }).then(function (data) {
                component.menus = data
                console.log(data)
            })
        } else if (this.drinkTypes == "Household products") {

            fetch('/api/card/hp').then(function (response) {
                return response.json()
            }).then(function (data) {
                component.menus = data
                console.log(data)
            })
        }
        else if (this.drinkTypes == "All") {
            console.log("import all cards")
            fetch('/api/card').then(function (response) {
                return response.json()
            }).then(function (data) {
                component.menus = data
                console.log(data)
            })
        }

    }
}
</script>

<style>
.titrediv {
    margin: 0 auto;
}

.undero {
    text-decoration: underline;
    text-decoration-color: orange;
}

.rec {
    position: absolute;
    width: 88%;
    height: 40%;
    left: 6%;
    top: 120%;

    background: #F9D9AA;
    border-radius: 64px;

}

.carde {
    filter: drop-shadow(10px 10px 32px rgba(0, 0, 0, 0.25));

    display: inline;
}

.flex {
    display: flex;
    justify-content: space-evenly;
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
    /* display: flex;
    align-items: center; */
    letter-spacing: 0.04em;

    color: #000000;
}
</style>