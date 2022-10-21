<template>
    <div class="maincard">
        <img src="../assets/forkpng.png" alt="fork" class="fork">
        <div class="content">
            <div class="textdiv">
                <div class="title"><h1 class="enjoy">Save&nbsp;<span class="spanco"> money</span></h1></div>
                <h1 class="enjoy">and reduce waste</h1>
                <p class="textg">Do something for the environment and save money by recycling</p>
            </div>

            <!-- <div class="plus">
                <button class="order">
                    <p class="textbut">Order Now</p>
                    <img src="../assets/Groupdeux.png" alt="cart" class="cart">
                </button>
                <a>
                    <p class="more">More menu</p>
                </a>
            </div> -->
        </div>
        <img src="../assets/pngegg.png" alt="menage" class="menage">
        <!-- <img src="../assets/img-hero.png" alt="cafe" class="cafe"> -->

    </div>
</template>
   
<script>


export default {
    name: "HeroVue",
    props: {
        msg: String
    }

}
</script>
   
<style scoped>
.textdiv{
    display: flex;
    align-content: center;
    flex-direction: column;
    align-items: center;
}
.maincard {
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.fork {
    width: 20%;
    height: 20%;
}

.menage {
    width: 20%;
    height: 20%;
}

.spanco {
    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    display: flex;
    align-items: center;

    /* Secondary */

    color: #2471A3;
}

.more {
    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    white-space: nowrap;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #F4AE26;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.more:hover {
    color: #f48326;
    cursor: pointer;
}

.cart {
    width: 22px;
    height: 22px;


    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
}

.textbut {
    margin: 0;
    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    display: flex;
    align-items: center;
    text-align: center;

    color: #FFFFFF;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.plus {
    margin-left: 8%;
    display: flex;
    justify-content: space-around;
    float: left;
    gap: 50%;
}

.order {
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0px 25px;
    gap: 10px;
    background: #2F2105;
    box-shadow: 0px 4px 32px rgba(223, 195, 124, 0.25);
    border-radius: 20px;
}

.order:hover {
    background: black;
    cursor: pointer;
}

.textg {
    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    display: flex;
    align-items: center;

    /* light */

    color: #7E7D7A;
    
}

.enjoy {

    font-family: 'Poppins', arial;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    display: flex;
    align-items: center;

    /* Secondary */

    color: #2F2105;
}

.maincard {
    margin: 5% 5%;
    display: flex;
    justify-content: space-around;
}

.cafe {
    width: 40%;
}
</style>
   