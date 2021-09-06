import Product2 from '../../src/components/Product2'
import {createStore} from "vuex";
import axios from "axios";

describe('Product2', () => {
  it('tests Vuex', async function () {
    const store = createStore({
      state:{
        posts:[]
      },
      mutations:{
        SetPosts(state,data){
          state.posts = data
        }
      },
      actions:{
        Getposts(context){
          axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
            context.commit('SetPosts',res.data)
            console.log(res.data)
          })
        }
      }
    })
    expect(store.state.posts).toHaveLength(0)

  });
})
