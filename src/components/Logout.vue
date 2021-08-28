<template>
    <div>
<h2>You are lgoout</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    created() {
        let token = localStorage.getItem('token');
        if(!token){
            return false;
        }
        axios.get("http://localhost:8000/logout?api_token="+token)
        .then(response => {
            localStorage.removeItem('token');
            Event.$emit('logout')
            return response
        });
    }
}
</script>