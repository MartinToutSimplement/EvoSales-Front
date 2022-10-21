<template>
    <div class="principale">
        <HeaderVue />
        <h1 class="titre">Log in</h1>
        <p v-if="!isLoggedIn" class="textp">Enter your contact information to log in</p>
        <p v-if="isLoggedIn" class="textv">You are already log in with token: {{token}}</p>
        <div class="princ">
            <div class="rectanglea">
                <section class="login">
                    <form>
                        <div class="innerFrame">

                            <div class="field">
                                <!-- <label for="username">Email</label> -->
                                <input type="text" name="username" id="username" v-model="username" class="inputn"
                                    placeholder="Email">
                            </div>
                            <div class="field">
                                <!-- <label for="password">Password</label> -->
                                <input type="password" name="password" id="password" v-model="password"
                                    placeholder="Password" class="inputn">
                            </div>
                            <button @click="login" type="button" class="butsub">Submit</button>
                            <div class="rout">
                                <router-link to='/Sign' class="notlog">Not subscribe yet ? Sign in !</router-link>
                            </div>

                        </div>
                    </form>
                </section>
            </div>

            <div class="separator"></div>

            <section class="test">
                <!-- <table>
                    <tr>
                        <td>Is logged in?</td>
                        <td>{{ isLoggedIn }}</td>
                    </tr>
                    <tr>
                        <td>Token UUID</td>
                        <td>{{ token }}</td>
                    </tr>
                </table> -->
                <button class="updatebut" @click="check">Update</button>
            </section>
        </div>


    </div>
</template>

<script>
import HeaderVue from '@/components/HeaderVue.vue';

export default {
    name: 'BuyView',
    components: { HeaderVue },

    data() {
        return {
            username: "",
            password: "",
            isLoggedIn: false,
            token: "",
        }
    },
    methods: {
        changeCategory(category) {
            this.category = category;
        },


        login: function () {

            var component = this
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: component.username,
                    password: component.password
                })
            }
            fetch('/api/login', options)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    component.isLoggedIn = true
                    component.token = data.token
                })
                .catch((error) => {
                    console.log(error)
                    component.isLoggedIn = false
                })
        },
        check: function () {
            var component = this
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    token: component.token
                })
            }
            fetch('/api/login/check', options)
                .then((response) => {
                    return response.json()
                })
                .then((data) => {
                    component.isLoggedIn = data.isLoggedIn
                })
        }
    }
    // filterArray(){
    //     const result = cat.filter(category => category == this.category);
    // }
}



</script>

<style scopped>
.updatebut{
    border: none;
    margin-top: 2%;
    padding: 0.8%;
    border-radius: 10px;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.updatebut:hover{
    background-color:#c6c6c6;
}
.titre {
    margin-top: 4%;
    margin-bottom: 2%;
}

.textp {
    color: #7E7D7A;
    font-size: large;
}
.textv {
    color: green;
    font-size: large;
}

.rout {
    margin-top: 2%;
}

.notlog {
    font-size: small;
}

.butsub {
    margin-top: 12%;
    border-radius: 10px;
    border: solid grey 2px;
    width: 70%;
    padding: 2% 0%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
}

.innerFrame {
    padding-top: 1%;

}

.inputn {

    border-radius: 10px;
    margin-top: 8%;
    width: 68%;
    padding: 2% 2%;
    border: solid 2px grey;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.butsub:hover {

    background-color: #626c6361;
}

::placeholder {
    font-family: Arial, Helvetica, sans-serif;

}

.princ {
    margin-top: 5%;
    margin-bottom: 5%;
}

.rectanglea {
    margin: 0 auto;
    width: 30%;
    height: 300px;


    left: 6%;
    top: 105%;

    background: white;
    border-radius: 64px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>