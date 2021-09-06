import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyARPBLOS3fGlXZaz_dTiDbyPlhYPNhk_CQ",
    authDomain: "blogr-27b50.firebaseapp.com",
    databaseURL: "https://blogr-27b50-default-rtdb.firebaseio.com",
    projectId: "blogr-27b50",
    storageBucket: "blogr-27b50.appspot.com",
    messagingSenderId: "551208842666",
    appId: "1:551208842666:web:032eb2561aa2ba3362a7d3"
};
firebase.initializeApp(firebaseConfig)

createApp(App).use(store).use(router).mount('#app')
