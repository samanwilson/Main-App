<template>
    <div id="Login">
        <Header></Header>
        <div id="main">
            <div class="container">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-6" >
                        <div class="form-container p-5 my-5" v-if="ShowLogin == 'true'">
                            <form @submit.prevent="Login" >
                                <h2 class="blue">Login</h2>
                                <input type="email" class="form-control" placeholder="enter an Email" v-model="email">
                                <br>
                                <input type="password" id="Password" class="form-control w-50" placeholder="Enter a Password" v-model="password">
                                <div class="d-flex ">
                                    <input type="checkbox" id="Check" class="form-check me-3 align-self-center" value="true" @click="LPassword">
                                    <label for="Check" class="form-check-label ">Show password</label>
                                </div>
                                <br>

                                <button class="btn Custom-Login-Btn" type="submit">Click</button>

                            </form>
                            <br>
                            <div class="d-flex">
                                <p class="me-2">Dont Have An Account?</p><p class="text-primary" @click="toggleLogin ">Click Here</p>
                            </div>

                        </div>
                        <div class="form-container p-5 my-5" v-if="Showreg =='true'">
                            <form @submit.prevent="Register">
                                <h2 class="blue">Register</h2>
                                <br>
                                <input type="email" class="form-control" placeholder="enter an Email" v-model="email">
                                <br>
                                <input type="password" id="RegisterPassword" class="form-control w-50" placeholder="Enter a Password" v-model="password">
                                <div class="d-flex ">
                                    <input type="checkbox" id="registerCheck" class="form-check me-3 align-self-center" value="true" @click="RPassword">
                                    <label for="Check" class="form-check-label ">Show password</label>
                                </div>
                                <br>
                                <button class="btn Custom-Login-Btn" type="submit">submit</button>
                            </form>
                            <br>
                            <div class="d-flex">
                                <p class="me-2">Already Have An Account?</p><p class="text-primary" @click="ToggleReg">Click Here</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    import firebase from 'firebase'
    import {useRoute, useRouter} from "vue-router";

    export default {
        name: "Login",
        components:{
            "Header":Header,
            'Footer':Footer
        },
        data(){
            return{
            ShowLogin:'true',
                Showreg:'false',
                email:'',
                password:'',
                Route:useRoute(),
                Router:useRouter()

            }
        },



        methods:{
            Login(){
                firebase.auth().signInWithEmailAndPassword(this.email , this.password)
                    .then(() => {
                        this.email = ''
                        this.password = ''
                    }).then((response) => {
                        alert(response)
                    this.Router.replace('/Panel')

                }).catch((err) => {
                        console.log(err)
                })
            },
            Register (){
                firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((user)=>{
                    console.log(user)
                }).then(()=>{
                    this.email = ''
                    this.password = ''
                    this.ShowLogin = 'true'
                        this.Showreg = 'false'
                    alert('please Login To your Account')
                }).catch((err) => {
                    console.log(err.message)
                })
            },
            LPassword(){

                let PassOut = document.getElementById('Password')
                if(PassOut.type==='password'){
                    PassOut.type ='text'
                }   else {
                    PassOut.type ='password'
                }
            },
            RPassword(){

                let PassOut = document.getElementById('RegisterPassword')
                if(PassOut.type==='password'){
                    PassOut.type ='text'
                }   else {
                    PassOut.type ='password'
                }
            },
            toggleLogin(){

                    this.ShowLogin=!this.ShowLogin
                    this.Showreg = 'true'

                console.log(this.ShowLogin)
                console.log(this.Showreg)
            },
            ToggleReg(){
                this.ShowLogin= 'true'
                this.Showreg = 'false'
            },


        },

    }


</script>

<style scoped>

</style>