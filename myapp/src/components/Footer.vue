<template>
    <div id="Footer"  class="bg-dark" >
        <div class="container">
            <div class="row py-5">
                <div class="col-lg-3 col-md-6 col-sm-6">
                    <h2 class="text-white">Blogr</h2>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column justify-content-center">
                    <h6 class="text-white"><b>Connect</b></h6>
                    <br>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">contact</p></router-link>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">Instagram</p></router-link>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">LinkedIn</p></router-link>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column justify-content-center">
                    <h6 class="text-white"><b>Product</b></h6>
                    <br>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">Cars</p></router-link>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">Guns</p></router-link>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">Things</p></router-link>
                </div>

                <div class="col-lg-3 col-md-6 col-sm-6 ">
                    <div>   <h6 class="text-white d-flex flex-column justify-content-center"><b>Company</b></h6></div>
                    <br>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">About</p></router-link>
                    <router-link to="/" class="a-default"><p class="text-white Footer-Item">Our Team</p></router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>

</style>