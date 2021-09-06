<template>
    <header class="AdminHeader">
        <nav class="navbar navbar-expand-lg  ">
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
                            <router-link to="/Company" class="a-default  text-white ">Company</router-link>
                        </li>
                        <li class="nav-item me-3 ">
                            <span class="   a-default text-white " @click="fadeup=!fadeup" style="cursor: pointer">Connect</span>
                            <transition name="fade-up" v-if="fadeup" appear>
                                <ul class="DropDown ">
                                    <li class="Dropdown-item d-flex  align-items-center "> <i class="fas fa-address-book  me-2 Icon"></i> <router-link to="/Contact" class="a-default DropDown-Link">Contact</router-link></li>
                                    <li class="Dropdown-item d-flex align-items-center "><i class="fab fa-blogger-b me-2 Icon"></i><router-link to="/Blog" class="a-default DropDown-Link">Blog</router-link></li>
                                    <li class="Dropdown-item d-flex align-items-center "> <i class="fab fa-instagram me-2 Icon"></i><router-link to="/Contact" class="a-default DropDown-Link">instagram</router-link></li>

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
            <!-- Welcome -->
        <div class="container">
            <div class="row mt-5">
                <div class="col-md-5">
                    <h3 class="text-white">Welcome</h3>
                </div>
            </div>
        </div>
    </header>
</template>

<script>

    export default {
        name: "Header",
        data(){
            return{
                fadeup:false,

            }
        }
    }
</script>

<style scoped>
    .red{
        color: #ff4457;
    }
    .orange{
        color: #fe846d;
    }

    .blue{
        color: #3b3e5f;
    }

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
</style>