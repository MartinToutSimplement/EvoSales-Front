<template>
    <div class="principale">
        <HeaderVue />
        <h1 class="titre">Sign in</h1>
        <p class="textp">Enter your contact information to sign in</p>
        <div class="princ">
            <div class="rectangle">
                <section class="login">
                    <form>
                        <div class="innerFrame">

                            
                            <div class="field">
                                <input type="text" name="pseudo" id="pseudo" v-model="username"
                                    placeholder="Pseudo" class="inputn" maxlength="8">
                            </div>
                            <!-- limite de caracter -->
                            <div class="field">
                                <input type="text" name="username" id="username" v-model="username" class="inputn"
                                    placeholder="Email">
                            </div>
                            <div class="field">
                                <input type="password" name="password" id="password" v-model="password"
                                    placeholder="Password" class="inputn">
                            </div>
                
                            <button @click="login" type="button" class="butsub">Submit</button>
                            <div class="rout">
                                <router-link to='/auth' class="notlog">Already have account</router-link>
                            </div>

                        </div>
                    </form>
                </section>

            </div>


            <div class="separator"></div>

            <section class="test">
                <table>
                    <tr>
                        <td>Is logged in?</td>
                        <td>{{ isLoggedIn }}</td>
                    </tr>
                    <tr>
                        <td>Token UUID</td>
                        <td>{{ token }}</td>
                    </tr>
                </table>
                <button @click="check">Update</button>
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
            category: 'Choose category'
        }
    },
    methods: {
        login(){
            alert("Log in successfull")
        },
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
.titre{
    margin-top: 4%;
    margin-bottom: 2%;
}
.textp {
    color: #7E7D7A;
    font-size: large;
    padding: 0; 
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

.rectangle {
    margin: 0 auto;
    width: 30%;
    height: 380px;


    left: 6%;
    top: 105%;

    background: white;
    border-radius: 64px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
}
</style>