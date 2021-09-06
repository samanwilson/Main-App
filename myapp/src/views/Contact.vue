<template>
    <Header></Header>
    <div id="Contact">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-md-8 text-center">
                    <h1>Contact Info</h1>
                    <hr>
                    <h3>instagram</h3>
                    <h3>MoBile Phone</h3>
                    <h3>Email</h3>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";

    export default {
        name: "Contact",
        components:{
            'Header' : Header,
            'Footer' : Footer

        }
    }
</script>

<style scoped>

</style>