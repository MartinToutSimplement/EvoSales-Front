<template>
    <div class="maincard">
        <div class="squaresix">
            <div class="squarefive" id="card" ref="myid">
                <!-- <div class="rate"> -->
                <div class="gra">
                    <p class="grade">{{price}}</p>
                    <img src="../assets/cash.png" alt="star" class="star">
                </div>

                <!-- <a href="HelloWorld.vue"><img :src="url" alt="cafe" class="product"></a> -->
                <a ><img v-if="imgSrc" :src="imgSrc" alt="cafe" class="product"></a>
                <a ><img v-if="url" :src="require(`@/assets/image/${url}`)" alt="cafe" class="product"></a>
                <!-- </div> -->
                <div class="bodycard">
                    <div class="text">

                        <p class="name">{{name}}</p>
                        
                    </div>
                    <p>{{description}}</p>
                    <button @click="ShowTel" class="add"><p class="textbut">Call</p></button>
                </div>
            </div>
        </div>


    </div>
</template>
  
<script>
export default {
    name: 'CardVue',
    props: {
        name: String,
        price: String,
        url: String,
        imgSrc: String,
        description: String,
        phone_number: String
        
    },
    data() {
        return {
            clicked: true,
            clickedcold: true
        }
    },
    // beforeUnmount(){
    //     alert("Are you sure to leave the page?")
    // },
    methods: {
        ShowTel(){
            alert('You can purchase "' + this.name + '" by contacting the owner at: \n '+ this.phone_number)
        }
    },


}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.add{
    text-align: center;
    margin: 4%;
    padding: 2% 6%;
    border: none;
    border-radius: 10px;
    padding-right: 7%;
    background-color: rgb(234, 237, 237);
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    cursor: pointer;
}

.add:hover{
    background-color: rgb(204, 209, 209);
}
.maincard {
    filter: drop-shadow(10px 10px 32px rgba(0, 0, 0, 0.25));
}

.gra {
    display: flex;
    justify-content: space-between;
    gap: 4px;
    align-items: center;
    position: absolute;
    left: 8%;
    top: 7%;
    padding: 2px 8px;
    background: #FFFFFF;
    border-radius: 27px;
    border: solid 4px rgba(220, 220, 220, 0.3);
}

.temp {
    display: flex;
    justify-content: space-around;
    align-items: baseline;
    padding: 3% 4%;
}

.rate {


    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 4px;

    background: #FFFFFF;
    border-radius: 50px;
}

.star {
    width: 20px;
    height: 20px;


    /* Inside auto layout */
    /* 
    flex: none;
    order: 1;
    flex-grow: 0; */
}

.grade {


    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 21px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;
    margin: 0;

    /* Secondary */

    color: #2F2105;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.squaresix {

    /* width: 355px;
    height: 385px; */

    padding: 6px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.7) 100%);
    backdrop-filter: blur(2px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 12px;
}

.product {
    width: 300px;
    height: 300px;
    border-radius: 25px;
    padding: 10px;
    object-fit: cover;
}

.squarefive {

    /* width: 343px;
    height: 373px; */


    background: #FFFFFF;
    border-radius: 12px;
    border: solid 4px rgba(220, 220, 220, 0.3);
}

.kelvin {

    /* width: 48px;
    height: 36px; */
    margin: 3%;
    padding: 0;
    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    /* identical to box height */

    /* display: flex; */
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    /* Secondary */

    color: #2F2105;

}

.name {
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

    /* Secondary */

    color: #2F2105;
}

.framefour {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;


    width: 64px;
    height: 32px;


    border: 2px solid #FFD28F;
    border-radius: 8px;
}

.framefour:hover {
    cursor: pointer;
    background-color: lightgrey;
}


.cold {

    width: 40px;
    height: 24px;

    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFD28F;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.frametree {
    box-sizing: border-box;

    /* Auto layout */

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;


    width: 64px;
    height: 32px;


    /* Primary */

    border: 2px solid #FF912B;
    border-radius: 8px;
}

.frametree:hover {
    cursor: pointer;
    background-color: lightgrey;
}

.hot {
    width: 30px;
    height: 24px;

    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    /* Primary */

    color: #FF912B;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.add {
    width: 18px;
    height: 17px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.framefive {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px;
    gap: 10px;

    width: 23px;
    height: 23px;

    /* Primary */
    float: right;
    background: #FF912B;
    border-radius: 64px;

}

.text {
    display: flex;
    justify-content: space-around;
    margin: 0% 2%;

}
</style>
  