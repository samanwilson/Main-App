<template>
    <div id="Product">
        <Header :CustomData="HeaderData"></Header>

            <div class="container my-5">
                <div class="row">
                    <h2 class="blue">Other</h2>
                    <hr>
                    <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" >
                        <div class="card Card" v-for="item in ShowPosts" :key="item.id" >
                            <div class="card-img ">
                                <img  class="img-fluid"  alt="">
                            </div>
                            <div class="card-body">
                                <div class="card-title blue"><h4>{{item.title}}</h4></div>
                                <hr>
                                <div class="card-text blue">{{item.body}}</div>
                                <br>
                                <router-link :to="'/SingleProduct/'+item.id" class="btn btn-primary" tag="button">See more</router-link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
</template>

<script>


    export default {
        name: "Product"
        ,
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
        computed:{
                ShowPosts(){
                    return this.$store.getters.ShowPosts
                }
        },
        created(){
            this.$store.dispatch('Getposts')
        }
    }
</script>

<style scoped>

</style>