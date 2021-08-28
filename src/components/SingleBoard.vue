<template>
    <div>
        <h1>Single Boards</h1>

        <v-container fluid>
     
        </v-container>
    </div>
</template>

<script>

// import axios from 'axios'
export default {
    data(){
        return{
            boards:[]
        }
    },
    // mounted(){
    //     let token = localStorage.getItem('token');
    //     console.log(token);
    //     axios.get("http://localhost:8000/boards?api_token="+token)
    //     // .then(response =>{
    //     //     console.log(response);
    //     //     this.boards = response.data.boards;
    //     .then(({data})=>(this.boards = data))
    //     // });
    // }
}
</script>