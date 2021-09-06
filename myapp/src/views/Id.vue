<template>
    <div id="ID">
        <Header></Header>
        <div id="Main">
            <div class="container">
                <div class="row p-3">
                    <div class="col-md-6 d-flex flex-column align-items-center"  >
                        <img src="../assets/logo.png" class="img-fluid"  alt="">
                    </div>
                    <div class="col-md-6">
                        <h3 class="blue">Product</h3> add an Favorite icon
                        <hr>
                        <p class="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit
                            . Amet maiores molestias nesciunt odio recusandae reprehenderit repudiandae sequi veniam! Cupiditate, vero.</p>

                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>


    import Footer from "../components/Footer";
    import Header from "../components/Header";
    export default {
        name: "Id",
        components: {
            'Header' :Header,
            'Footer' : Footer
        }
    }
</script>

<style scoped>

</style>