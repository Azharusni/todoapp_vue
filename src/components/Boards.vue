<template>
    <div>
        <h1>Boards</h1>

        <v-container fluid>
      <v-row dense >
        
        <v-col v-for="board in boards" :key="board.id">
          
          <router-link :to="{name:'SingleBoard', params:{id:board.id}}">
          <div>
            <v-card  dark class="primary ma-1" style="cursor:pointer">  
              <v-card-title >{{board.name}}</v-card-title>
            </v-card>
            </div>
          </router-link>
          
        </v-col>
        
      </v-row>
    </v-container>
    </div>
</template>

<script>

import axios from 'axios'
export default {
    data(){
        return{
            boards:''
        }
    },
    mounted(){
        let token = localStorage.getItem('token');
        if(!token){
          
          this.$router.push('/login')   
        }
        
        axios.get("http://localhost:8000/boards?api_token="+token)
        .then(response =>{
            
            this.boards = response.data;
        Event.$emit('boardsLoaded',this.boards);
        });
        // .then(({data})=>(this.boards = data),
        // Event.$emit('boardsLoaded',this.boards)
        // )
    }
}
</script>