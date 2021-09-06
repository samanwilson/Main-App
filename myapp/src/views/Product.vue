<template>
    <div id="Product">
        <Header :CustomData="HeaderData"></Header>
        <div id="Main">
            <div class="container my-5">
                <div class="row">
                    <h2 class="blue">Popular</h2>
                    <hr>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" v-for="(item,idx) in ShowProductsFromVuex" :key="idx">
                        <div class="card Card" >
                            <div class="card-img ">
                                <img :src="item.PFile" class="img-fluid"  alt="">
                            </div>
                            <div class="card-body">
                                <div class="card-title blue"><h4>{{item.PTitle}}</h4></div>
                                <hr>
                                <div class="card-text blue">{{item.PDesc}}</div>
                                <br>
                                <router-link to="/Product/Id/" class="btn btn-primary" tag="button">See more</router-link>
                            </div>

                        </div>
                    </div>
                </div>
                <br>
                <Product2></Product2>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CustomHeader from "../components/CustomHeader";
    import Footer from "../components/Footer";
    import Product2 from "../components/Product2";

    export default {
        name: "Product",
        data(){
            return{
                HeaderData:{
                    Name:'Product'
                    ,

                    Class:'fas fa-cubes align-self-center'
                    ,
                    Text:'Check Out our New Products out There'
                },
                id:2
            }
        },
        components:{
            'Header':CustomHeader,
            'Footer':Footer,
          "Product2" : Product2
        },
        computed:{
            ShowProductsFromVuex(){
             return   this.$store.getters.ShowProducts
            }
        }
    }
  </script>

<style scoped>

</style>