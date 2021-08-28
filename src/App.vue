<template>
  <v-app id="inspire">
    <v-app-bar
      app 
    >
    <v-menu offset-y v-if='loggedIn'>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-icon left>mdi-developer-board</v-icon>Boards
        </v-btn>
      </template>
      <v-list>
        <div v-for="board in boards" :key="board.id" >
         <router-link :to ="{name:'SingleBoard',params:{id:board.id}}" tag='v-list-tile' >
               {{board.name}} 
            </router-link>
        </div>
      </v-list>
    </v-menu>
    
     
  <v-spacer></v-spacer>
      <v-toolbar-title >
        <router-link to="/" tag="span"><v-btn >{{title}}</v-btn></router-link></v-toolbar-title>

      <v-spacer></v-spacer>
      <div v-if="!loggedIn">
      <router-link to="/register" tag="span"><v-btn >Register</v-btn></router-link>
      <router-link to="/login" tag="span"><v-btn >Login</v-btn></router-link>
      </div>

      <v-menu offset-y v-if='loggedIn'>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
         <v-icon left>mdi-developer-board</v-icon>{{user.username}}
        </v-btn>
      </template>
      <v-list>
        
          <router-link to="/logout">Logout</router-link>
        
      </v-list>
        </v-menu>
    </v-app-bar>


    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
  export default {
    data () {
      return {
        boards: '',
        user:'',
        title: 'TODOAPP',
        loggedIn:false,
        
      }
    
      },
      created() {
        Event.$on('login',()=>{
          this.loggedIn=true;
        });

        Event.$on('logout',()=>{
          this.loggedIn=false;
        });

        Event.$on('boardsLoaded',($boards)=>{
          this.boards=$boards;
        });

        let token = localStorage.getItem('token');
        if(token){
          this.loggedIn=true;
        }
         
        axios.get("http://localhost:8000/users/"+token+"?api_token="+token)
        .then((response)=>{
          console.log(response);
          this.user =response.data.user;
        })
        // .then(({data})=>(this.user = data))
      }

  }
</script>