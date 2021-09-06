<template>
    <div id="Company">
<Header :CustomData="HeaderData"></Header>
        <div id="Main">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-6 col-md-12 col-sm-12 p-5 ">
                        <div class="list-group " >
                            <div class="list-group-item Collapse-Item">
                                <i class="fas fa-map-marker-alt me-2"></i>
                                <a class="Collapse-btn" data-bs-toggle="collapse" href="#FirstCollapse">Address</a>
                                <div class="collapse" id="FirstCollapse">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio facere nulla quidem! Ipsa, placeat reprehenderit!</p>
                                </div>
                            </div>
                            <div class="list-group-item Collapse-Item">
                                <i class="fas fa-phone me-2"></i>
                                <a class="Collapse-btn" data-bs-toggle="collapse" href="#SecondCollapse">Contact Numbers</a>
                                <div class="collapse" id="SecondCollapse">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum facere laborum neque quo quos vitae!
                                </div>
                            </div>
                            <div class="list-group-item Collapse-Item">
                                <i class="far fa-envelope-open me-2"></i>
                                <a class="Collapse-btn" data-bs-toggle="collapse" href="#ThirdCollapse">Contact Emails</a>
                                <div class="collapse" id="ThirdCollapse">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem culpa debitis maiores quaerat sunt tempore!
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 col-sm-12 ">
                        <div class="iframe-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12948.325263819119!2d51.43537573250023!3d35.77337883276462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0429bdffccbd%3A0x7cbcaaf2fcb5fc81!2sQolhak%2C%20District%203%2C%20Tehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1619667002883!5m2!1sen!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>

                    <div class="row d-flex justify-content-center my-5">
                        <div class="col-6 ">
                            <form @submit.prevent="SendMsg(MsgData)">
                                <div class="input-group">
                                    <input type="email" class="form-control" placeholder="Email@Email.com" v-model="MsgData.Email">
                                    <button class="btn btn-primary" type="submit">Submit</button>
                                </div>

                                <textarea class="form-control" cols="30" rows="10" v-model="MsgData.Msg"></textarea>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
    import CustomHeader from "../components/CustomHeader";
    import Footer from "../components/Footer";

    export default {
        name: "Company",
        data(){
            return{
                HeaderData:{
                    Name:'Company'
                    ,
                    Class:'fas fa-building align-self-center'
                    ,
                    Text:'Know More About Our Company'
                },
                MsgData:{
                    Email:'',
                    Msg:''
                }
            }
        },

        components:{
            'Header':CustomHeader
            ,
            'Footer':Footer
        },
        methods:{
            SendMsg (item){
                this.$store.dispatch('SendMsgFromVuex',item)
                this.$store.commit('IncrementMsg')
            }
        }
    }
</script>

<style scoped>

</style>