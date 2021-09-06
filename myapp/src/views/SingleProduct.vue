<template>
    <div id="Product">
        <Header :CustomData="HeaderData"></Header>

        <div class="container my-5">
            <div class="row">
                <h2 class="blue">Other</h2>
                <hr>
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6" >
                    <div class="card Card" >
                        <div class="card-img ">
                            <img  class="img-fluid"  alt="">
                        </div>
                        <div class="card-body">
                            <div class="card-title blue"><h4>{{ShowSingle.title}}</h4></div>
                            <hr>
                            <div class="card-text blue">{{ShowSingle.body}}</div>
                            <br>

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
                id:2,
                ID:this.$route.params.id
            }
        },
        computed:{
            ShowSingle(){
                return this.$store.getters.ShowSingle
            }
        },
        created(){
            this.$store.dispatch('GetSingle',this.ID)
        }
    }
</script>

<style scoped>

</style>