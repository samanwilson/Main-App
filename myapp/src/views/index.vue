<template>
<div id="APP">
    <AppHeader></AppHeader>
    <div id="Main">
        <section id="Future " class="my-5">
        <div class="container-fluid">
            <div class="row d-flex justify-content-center mt-5">
                <div class="col-md-6">
                    <h2 class="text-center blue">Designed For The Future</h2>
                </div>
            </div>
            <div class="row my-5">
                <div class="col-md-2"></div>
                <div class="col-md-4">
                    <div class="Future-Text-Container">
                        <h3 class="blue">Introducing An Editor</h3>
                        <br>
                        <p class="blue">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi facere iste odit omnis placeat?</p>
                        <br>
                        <br>
                        <h3 class="blue">Rebust Content Management</h3>
                        <p class="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at deserunt excepturi magni nobis numquam odit optio quae, quam recusandae rem repellendus tempore veritatis! Aperiam architecto exercitationem nulla vel.</p>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12 Future-Bg ">

                </div>
            </div>
        </div>
        </section>
        <section id="Art">
            <div class="container-fluid">
              <div class="row">
                  <div class="col-md-6 d-flex justify-content-center ">
                      <div class="col-md-6 ">
                          <img src="../assets/illustration-phones.svg" class="img-fluid"  alt="">
                      </div>

                  </div>
                  <div class="col-md-6 py-5">
                      <div class="Art-Text-Container">
                      <h3 class="text-white "> State of the Art Infrastructure</h3>
                          <p class="text-white w-75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam aut error fugit laudantium magnam neque odit placeat repellat tempora unde.</p>
                      </div>
                  </div>
              </div>
            </div>
        </section>
        <section id="AfterArt">
            <div class="container-fluid">
                <div class="row my-5">
                    <div class="col-md-6 col-sm-12 ">
                        <img src="../assets/illustration-laptop-desktop.svg" class="img-fluid" alt="">
                    </div>
                    <div class="col-md-4 d-flex flex-column justify-content-center">
                        <div class="Future-Text-Container ">
                            <h3 class="blue">Introducing An Editor</h3>
                            <br>
                            <p class="blue">  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eligendi facere iste odit omnis placeat?</p>
                            <br>
                            <br>
                            <h3 class="blue">Rebust Content Management</h3>
                            <p class="blue">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias at deserunt excepturi magni nobis numquam odit optio quae, quam recusandae rem repellendus tempore veritatis! Aperiam architecto exercitationem nulla vel.</p>
                        </div>
                    </div>
                    <div class="col-md-2"></div>
                </div>
            </div>
        </section>
    </div>
    <app-footer></app-footer>
</div>
</template>

<script>
    import Header from "../components/Header";
    import Footer from "../components/Footer";


    export default {

       components:{
           'AppHeader' :Header,
           'AppFooter' :Footer
       }


    ,

        mounted (){
           console.log('hello world')
        }

    }

</script>

<style scoped>
    .blue{
        color: #3b3e5f;
    }

</style>