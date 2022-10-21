<template>
    <div class="principale">
        <HeaderVue />
        <h1 class="titre">Sell items near to you</h1>
        <p class="textp">Enter your contact information and what you are selling
            Jeffe
        </p>
        <div class="dropprin">
            <div class="dropdownp">
                <button class="dropbtnc">Product category: {{category}}</button>
                <div class="dropdown-content">

                    <a @click="changeCategory('Kitchen tools')">Kitchen tools</a>
                    <a @click="changeCategory('Bedding')">Bedding</a>
                    <a @click="changeCategory('Household products')">Household products</a>
                </div>
            </div>
        </div>


        <!-- <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet"> -->
        <div class="form__group">
            <form action="" class="forminput"></form>
            <input type="text" class="form__input" id="name" placeholder="Item Name" required="" v-model="name"/>
            <!-- <label for="name" class="form__label">Product Name</label> -->
            <input type="text" class="form__input" id="desc" placeholder="Price" required="" v-model="price"/>
            <input type="tel" class="form__input" id="desc" placeholder="Phone number" required="" v-model="tel"/>
            <input type="tel" class="form__input" id="desc" placeholder="Description" required="" v-model="description"/>
            <!-- <label for="desc" class="form__label">Description</label> -->
            <input class="custom-file-input" type="file" id="image" name="image" accept="image/png, image/jpeg"
                @change="onFile">
            <div class="imgsrc"><img :src="imgSrc" v-if="imgSrc" class="imgin" /></div>
            <button @click="submit" type="button" class="butsubb">Submit</button>
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
            category: 'Choose category',
            imgSrc: '',
            name: '',
            tel: '',
            price: '',
            imgProps: '',
            description: '',
        }
    },

    methods: {
        changeCategory(category) {
        this.category = category;
        },
        onFile(e) {
            const files = e.target.files
            if (!files.length) return

            const reader = new FileReader()
            reader.readAsDataURL(files[0])
            reader.onload = () => (this.imgSrc = reader.result)
        },
        submit: function () {
            if(this.imgSrc == ''){
                alert("You did not enter an image, we have replaced it with an empty image")
                this.imgProps = 'empty.jpg'
            }
            var component = this
            let options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_name: component.name,
                    category: component.category,
                    price: component.price,
                    phone_number: component.tel,
                    image: component.imgProps,
                    imgSrc: component.imgSrc,
                    description: component.description
                })
            }
            fetch('/api/card/tiakola', options)
                .then((response) => {
                    return response.json()
                })
                .then(() => {
                    component.name = ''
                    component.price = ''
                    component.tel = ''
                    component.category = 'Choose category'
                    component.imgSrc = ''
                    component.description = ''

                    
                    alert("Your product is online !")
                })
                .catch((error) => {
                    console.log(error)
                    component.isLoggedIn = false
                })
        },
        // filterArray(){
        //     const result = cat.filter(category => category == this.category);
        // }
    }
}


</script>

<style scopped>
.butsubb {
    margin-bottom: 3%;
    margin-top: 1%;
    border-radius: 10px;
    border: solid grey 2px;
    width: 330px;
    padding: 1% 0%;
    background-color: rgba(0, 16, 243, 0.321);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    cursor: pointer;
    border: none;
    color: white;
    font-size: 16px;
}

.imgsrc {
    margin-top: 1%;

}

.imgin {
    border-radius: 10px;
    width: 330px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

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
    padding-bottom: 15px;
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
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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

    left: 0px;
    position: relative;
    display: inline-block;
    right: 5%;
    padding: 1%;

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



*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    font-size: 62, 5%;
}



.form__label {
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    margin-left: -9rem;
    margin-top: 0.7rem;
    display: block;
    transition: all 0.3s;
    transform: translateY(0rem);

    /* left: 100px; */
}

.form__input {
    font-family: 'Roboto', sans-serif;
    color: #333;
    font-size: 16px;
    margin: 0 auto;
    padding: 15px 2rem;
    border-radius: 10px;
    background-color: rgb(255, 255, 255);
    border: none;
    width: 270px;
    display: block;
    border-bottom: 0.3rem solid transparent;
    transition: all 0.3s;
    margin-bottom: 1%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}

.form__input:placeholder-shown+.form__label {
    opacity: 0;
    visibility: hidden;
    -webkit-transform: translateY(-4rem);
    transform: translateY(-4rem);
    /* left: 100px; */
    top: -100px;

}


.custom-file-input::-webkit-file-upload-button {
    visibility: hidden;

}

.custom-file-input::before {

    content: 'Select an image';
    display: inline-block;
    background: rgba(0, 16, 243, 0.321);
    border: 1px solid rgba(0, 16, 243, 0.321);
    border-radius: 10px;
    padding: 15px 110px;
    outline: none;
    white-space: nowrap;
    /* -webkit-user-select: none; */
    cursor: pointer;
    font-size: 16px;
    color: white;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.custom-file-input {
    border-radius: 10px;
    width: 335px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

}

.custom-file-input:hover::before {
    border-color: black;
}

.custom-file-input:active::before {
    background: rgba(83, 94, 242, 0.321);
}
</style>