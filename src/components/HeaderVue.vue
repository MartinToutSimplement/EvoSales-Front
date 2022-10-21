<template>
    <div class="mainhead">
        <div class="navbar">

            <router-link to="/"><img src="../assets/evo-logo.png" alt="" class="logoevo"></router-link>

            <!-- <div class="groupe">
                <a href="HelloWorld.vue" class="buy">Buy</a>
                <a href="HelloWorld.vue" class="our">Sell</a>
                <a href="HelloWorld.vue" class="delivry">About Us</a>
            </div> --> 
            <div class="btnnav">
                <div class="dropdown">
                    <!-- <router-link to="/buy"><button class="dropbtn">Buy</button></router-link> -->
                    <router-link to="/buy"><button class="dropbtn">Buy</button></router-link>

                    <div class="dropdown-content">
                        <!-- <router-link to="/buy"><a href="#">Kitchen tools</a></router-link>
                        <router-link to="/buy"><a href="#">Bedding</a></router-link>
                        <router-link to="/buy"><a href="#">Household products</a></router-link> -->
                    </div>
                </div>



                
                <div class="dropdown">
                    <router-link to="/sell"><button class="dropbtn">Sell</button></router-link>

                    <div class="dropdown-content">
                        <!-- <router-link to="/sell"><a href="#">Kitchen tools</a></router-link>
                        <router-link to="/sell"><a href="#">Bedding</a></router-link>
                        <router-link to="/sell"><a href="#">Household products</a></router-link> -->
                    </div>
                </div>
                <div class="dropdown">
                    <router-link to="/about"><button class="dropbtn">About</button></router-link>
                    <!-- <button class="dropbtn">Other</button>
                    <div class="dropdown-content">
                        <router-link to="/about">About us</router-link>
                        <a href="#">Report</a>
                    </div> -->
                </div>
            </div>

            <div class="searchbar">
                <img src="../assets/akar-icons_search.png" class="icon">
                <input type="text" placeholder="Search.." class="search">
            </div>

            <div class="cart">
                <router-link to="/auth"><img src="../assets/account.png" alt="iconcart" class="iconcart"></router-link>
                <!-- <a href="HelloWorld.vue"><img src="../assets/signet.png" alt="iconcart" class="iconcart"></a> -->
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'HeaderVue',
    props: {

    },
    methods: {
        redirection() {
            window.location.href = 'google.com';
        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.template {
    background-color: black;
}

.btnnav {
    display: flex;
    justify-content: space-between;
    gap: 10%;
}

.mainhead {
    /* background-color: lightblue; */
    background-color: rgba(175, 209, 232, 0.2);
    margin: 0;
    padding: 0;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;


    height: 40px;
    padding: 2% 4%;
    margin: 0% 5%;


    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
}

.logoevo {
    width: 110px;
    
}

.groupe {
    display: flex;
    justify-content: space-between;
    gap: 20px;
}

.buy {
    font-family: 'Poppins', 'arial';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    /* Primary */

    color: blue;
    text-decoration: none;

}

.our {

    text-decoration: none;
    font-family: 'Poppins', 'arial';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;
}

.delivry {
    text-decoration: none;
    font-family: 'Poppins', 'arial';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    display: flex;
    align-items: center;

    color: #000000;
}

.searchbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    gap: 16px;


    background: #FFFFFF;
    box-shadow: 6px 2px 24px rgba(0, 0, 0, 0.13);
    border-radius: 35px;
}

.search {
    border: none;
}

.icon {
    border-radius: 35px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.iconcart {
    width: 35px;
}






/* .dropbtn {
    background-color: rgba(0, 16, 243, 0.321);
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    border-radius: 10px;
} */


/* The container <div> - needed to position the dropdown content */
.dropdown {
    position: relative;
    display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
/* .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f1f1f1;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
} */

/* Links inside the dropdown */
/* .dropdown-content a {
    font-family: Arial, Helvetica, sans-serif;
    color: black;
    padding: 7px 16px;
    text-decoration: none;
    display: block;
    border-radius: 10px;
} */

/* Change color of dropdown links on hover */
/* .dropdown-content a:hover {
    background-color: #ddd;
} */

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
    display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
    background-color: #626c6361;
}

/* CSS */
.dropbtn {
    background-color: rgba(51, 51, 51, 0.05);
   border-radius: 8px;
    border-width: 0;
    color: #333333;
    cursor: pointer;
    display: inline-block;
    font-family: "Haas Grot Text R Web", "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
    list-style: none;
    margin: 0;
    padding: 15px 25px;
    text-align: center;
    transition: all 200ms;
    vertical-align: baseline;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
}
</style>
  