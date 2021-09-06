import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
err:null,
    Articles:[],
    posts:[],
    Single:'',
    ProductData:[

    ],
    Msg:[

    ],
    MsgCount:0

  },
  getters:{
    ShowArticles(state){
      return state.Articles
    },
    ShowProducts(state){
      return state.ProductData

    },
    ShowMsg(state){
      return state.Msg
    },
    ShowSingle(state){
      return state.Single
    },
    ShowMsgCount(state){

      return state.MsgCount
    },
    ShowPosts(state){
      return state.posts

    }
  },
  mutations: {
    SetArticles(state,Data){
    state.Articles = Data

    },
    SetProducts(state,Data){
      try {
        state.ProductData.push(Data)
        console.log(state.ProductData)
      } catch (e) {
        alert(e)
      }



    },
    Getmsg(state,data){
     state.Msg.push(data)
      console.log(state.Msg)
    },
    IncrementMsg(state){
      state.MsgCount +=1
    },
    SetPosts(state,data){
      state.posts = data
    },
    SetSingle(state,data){
      state.Single = data
      console.log(state.posts)
}
  },
  actions: {

    GetArticles (context) {
      axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=f0290a229cc14e579888671ae521428f').then((response) => {
        const data = response.data.articles
        context.commit('SetArticles', data)
      })
    },

    GetQueryData(context,filter){
      axios.get('https://newsapi.org/v2/everything?q=' + filter + '&apiKey=f0290a229cc14e579888671ae521428f').then((response) => {
        const QueryData = response.data.articles
        context.commit('SetArticles',QueryData)


      }).catch((err)=>{
        alert(err)
      })
    },
    GetCategoryData(context,filter){
      axios.get('https://newsapi.org/v2/top-headlines?country=us&category='+filter +'&apiKey=f0290a229cc14e579888671ae521428f').then((response)=>{
        const CategoryData = response.data.articles
        context.commit('SetArticles',CategoryData)

      }).catch((err)=>{
        alert(err)
      })
    },
    Getposts(context){
      axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
        context.commit('SetPosts',res.data)
        console.log(res.data)
      })
    },
    SendMsgFromVuex (context,item){
      axios.post(' https://jsonplaceholder.typicode.com/posts',item).then((response) => {

        context.commit('Getmsg',response.data)
console.log(response)
      })

    },
    GetSingle(context,filter){
      axios.get('https://jsonplaceholder.typicode.com/posts/'+filter).then((res)=>{
        context.commit('SetSingle',res.data)

      })
    }
  },
  modules: {
  }
})
