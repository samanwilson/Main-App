<template>
    <div id="Panel">
        <Header></Header>
        <div id="Main">
            <div class="container-fluid p-0">
                <div class="row">
                <div class="col-md-4 AsideBar">
                    <div class="list-group" id="List">
                        <a href="#Favorites" class="list-group-item List-Custom-Css" data-bs-toggle="list" >Favorites</a>
                        <a href="#Add" class="list-group-item List-Custom-Css" data-bs-toggle="list" >Add Product</a>
                        <a href="#Messages" class="list-group-item List-Custom-Css" data-bs-toggle="list" >See Messages</a>
                    </div>
                </div>
                <div class="col-md-8 MainContent">
                    <div class="tab-content">
                    <div id="Favorites" class="tab-pane fade">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="card " style="max-width: 540px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="../assets/logo.png" alt="..." class="img-fluid me-3">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <a href="" class="a-default blue"> <h5 class="card-title">Card title</h5> </a>
                                                <p class="card-text blue">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text text-muted"> <i class="fas fa-at align-self-center text-muted"></i> author: <small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card " style="max-width: 540px;">
                                    <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="../assets/logo.png" alt="..." class="img-fluid me-3">
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <a href="" class="a-default blue"> <h5 class="card-title">Card title</h5> </a>
                                                <p class="card-text blue">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                <p class="card-text text-muted"> <i class="fas fa-at align-self-center text-muted"></i> author: <small class="text-muted">Last updated 3 mins ago</small></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div id="Add" class="tab-pane fade">
                        <div class="row">
                            <div class="col-md-12 my-2">
                                <input type="text" class="form-control w-50" placeholder="Enter Product  Name" v-model="ProductDetail.PTitle">

                            </div>
                            <div class="col-md-12 my-2">
                                <input type="text" class="form-control w-75" placeholder="Enter Product  Description" v-model="ProductDetail.PDesc">
                            </div>
                            <div class="col-md-12 my-2">
                                <input type="file" v-on:change="PFileFunc" class="form-control w-75" id="PFile"  >

                            </div>
                            <div class="col-md-12 my-2">
                                <button class="btn btn-primary" @click="AddProductToVuex(ProductDetail)">Add</button>

                            </div>
                        </div>
                    </div>

                        <div id="Messages" class="tab-pane fade">
                           <div class="row  ">
                               <h3 class="blue my-2 "> You Have {{ShowVuexCount}} New Messages</h3>
                           </div>
                            <hr>
                            <div class="row">
                                <div class="col-md-8">
                                    <div class="MessageContainer" v-for="item in ShowVuexMsg" :key="item.id">
                                        <div class="d-flex align-items-center">
                                            <h4 class="text-danger me-3">From : {{item.Email}}</h4>
                                            <span class="text-muted" style="cursor: pointer" @click="RemoveBtn">Read</span>


                                        </div>

                                        <p class="blue">{{item.Msg}}</p>
                                    </div>
                                </div>
                            </div>
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
    import AdminHeader from "../components/AdminHeader";
    import Footer from "../components/Footer";

    export default {
        name: "Panel",
        components:{
            'Header':AdminHeader,
            'Footer':Footer
        },
        data(){
            return{

                ProductDetail:[
                    {
                        PTitle:'asd',
                        PDesc:'asd',
                        PFile:''
                    }
                ]



            }
        },
        methods:{

            PFileFunc(){
                const FileSelector = document.querySelector('#PFile')
                this.ProductDetail.PFile = FileSelector.files[0].name

            },
            RemoveBtn(){

            },
            AddProductToVuex(ProductDetail){
                this.$store.commit('SetProducts',ProductDetail)


            }
        },
        computed:{
            ShowVuexMsg(){

                return this.$store.getters.ShowMsg
            },
            ShowVuexCount(){
                return this.$store.getters.ShowMsgCount
            }
        }

    }
</script>

<style scoped>

</style>