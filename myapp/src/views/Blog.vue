<template>
    <div id="Blog">
        <Header :CustomData="HeaderData"></Header>
        <div id="main">
            <div class="container ">
                <div class="row g-0 ">
                    <div class="col-md-8 p-5">
                        <h2 class="blue">{{Title}}</h2>
                        <div class="card " style="max-width: 540px; border: none" v-for="item in ShowVuexData" :key="item.author">
                            <div class="row g-0">
                                <div class="col-md-4 d-flex">
                                    <img :src="item.urlToImage" alt="No image" class="img-fluid rounded me-3 align-self-center" >
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <a href="" class="a-default blue"> <h5 class="card-title">{{item.title}}</h5> </a>
                                        <p class="card-text blue">{{item.description}}</p>
                                        <a :href="item.url">See More</a>
                                        <p class="card-text text-muted"> author: <small class="text-muted">{{item.author}}</small></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4 p-5">
                        <input type="search" class="form-control" placeholder="Search Pan cakes..." v-model="Query" @keypress.enter="QueryData(Query)">
                        <br>
                        <a class="Collapse-btn " data-bs-toggle="collapse" href="#BlogCollapse"><h5>categories</h5></a>
                        <div class="collapse" id="BlogCollapse">
                            <div class="Check-Container d-flex  ">
                            <input type="checkbox" class="form-check align-self-center m-0 me-3" id="Sport" value="sports" v-model="CategoryQuery">
                                <label for="Sport" class="align-self-center ">Sports</label>
                            </div>
                            <div class="Check-Container d-flex  ">
                                <input type="checkbox" class="form-check align-self-center m-0 me-3" id="Science" value="science" v-model="CategoryQuery">
                                <label for="Science" class="align-self-center ">science</label>
                            </div>
                            <div class="Check-Container d-flex  ">
                                <input type="checkbox" class="form-check align-self-center m-0 me-3" id="Technology" value="technology" v-model="CategoryQuery">
                                <label for="Technology" class="align-self-center ">Technology</label>
                            </div>
                            <div class="Check-Container d-flex  ">
                                <input type="checkbox" class="form-check align-self-center m-0 me-3" id="Health" value="health" v-model="CategoryQuery">
                                <label for="Health" class="align-self-center ">health</label>
                            </div>

                            <button class="btn btn-primary" @click="CategoryData(CategoryQuery[0])" >Submit</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "../components/Footer";
    import CustomHeader from "../components/CustomHeader";


    export default {
        name: "Blog",
        components:{
            'Header':CustomHeader,
            'Footer': Footer
        },
        computed:{
            ShowVuexData(){
                return this.$store.getters.ShowArticles
            }
        },
        methods:{
            QueryData(Query){

                this.$store.dispatch('GetQueryData',Query)

            },
            CategoryData(category){
                this.$store.dispatch('GetCategoryData',category)
            }
        }
        ,
        data(){
            return{
                HeaderData:{
                    Name:'Blog',
                    Class:'fab fa-blogger-b align-self-center',
                    Text:'Check Out News Around You Daily And 24/7',
                },
                Title:'Top Headlines',
                Query:'',
                CategoryQuery:[]

            }
        },
        created(){
            this.$store.dispatch('GetArticles')

        }
    }
</script>

<style scoped>

</style>