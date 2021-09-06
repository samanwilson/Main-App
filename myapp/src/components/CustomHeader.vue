<template>
    <div class="CustomHeader">
        <nav class="navbar navbar-expand-lg   ">
            <div class="container p-3">
                <div class="navbar-brand">
                    <router-link to="/" class=" Brand text-white"> <h3 >Blogr</h3> </router-link>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#Navbar"  aria-expanded="false" aria-label="Toggle navigation">
                    <img src="../assets/icon-hamburger.svg" class="img-fluid" alt="">
                </button>
                <div class="collapse navbar-collapse" id="Navbar">
                    <ul class="navbar-nav ">
                        <li class="nav-item me-3   ">
                            <router-link to="/Product" class="a-default text-white ">Product</router-link>
                        </li>
                        <li class="nav-item me-3  " >
                            <router-link to="/Company" class="a-default text-white ">Company</router-link>
                        </li>
                        <li class="nav-item me-3 ">
                            <span class="   a-default text-white " @click="fadeup=!fadeup" style="cursor: pointer">Connect</span>
                            <transition name="fade-up" v-if="fadeup" appear>
                                <ul class="DropDown ">
                                    <li class="Dropdown-item d-flex  align-items-center "> <i class="fas fa-address-book  me-2 Icon"></i> <router-link to="/Contact" class="a-default DropDown-Link" exact-active-class="active" >Contact</router-link></li>
                                    <li class="Dropdown-item d-flex align-items-center "><i class="fab fa-blogger-b me-2 Icon"></i><router-link to="/Blog" class="a-default DropDown-Link" active-class="active">Blog</router-link></li>
                                    <li class="Dropdown-item d-flex align-items-center "> <i class="fab fa-instagram me-2 Icon"></i><router-link to="/Contact" class="a-default DropDown-Link" active-class="active">instagram</router-link></li>

                                </ul>
                            </transition>
                        </li>
                    </ul>

                    <div class="navbar-nav ms-auto">
                        <button class=" btn Custom-Btn me-2"> <router-link to="/Login" class="a-default text-white">login</router-link></button>
                        <button class=" btn Custom-Btn me-2"><router-link to="/Login" class="a-default text-white">Sign Up</router-link></button>
                    </div>
                </div>
            </div>
        </nav>
        <br>
        <div class="container-fluid">
            <div class="row d-flex justify-content-center">
                <div class="col-md-6 ">
                    <div class="d-flex justify-content-center ">
                        <h1 class="text-white text-center me-3">{{ CustomData.Name }}</h1>
                        <i :class="CustomData.Class" style="color: white"></i>
                    </div>

                    <br>
                    <h4 class="text-white text-center" >{{CustomData.Text}}</h4>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CustomHeader",
        data(){
            return{
                fadeup:false,


            }
        },
        props:[
            'CustomData'
        ],

    }

</script>

<style scoped>
    .fade-up-enter-from{
        opacity: 0;
        transform: translateY(-50px);
    }
    .fade-up-enter-to{
        opacity: 1;
        transform: translateY(0px);
    }
    .fade-up-enter-active{
        transition: 1s ease;
    }

    .fade-up-leave-to{
        opacity: 0;
        transform: translateY(-50px);
    }
    .fade-up-leave-from{
        opacity: 1;
        transform: translateY(0px);
    }
    .fade-up-enter-active{
        transition: 1s ease;
    }
    .active{
        border-bottom: solid 2px white;
    }
</style>