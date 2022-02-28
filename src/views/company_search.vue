<template>
    <div class="company_search">
        <form @submit.prevent="company"
        class="">
        <div class="container">
            <div class="row mt-3">
                <div class="col-2 mx-auto text-canter">
                    <button class="btn btn-primary"
                    @click="setUsers">Get User</button>
                </div>
            </div>
            <div class="row mt-3" v-if="!status">
                <div class="col-2 mx-auto text-center">
                    <i class="fas fa-spinner fa-spin fa-2x"></i>
                </div>
            </div>
            <div class="row">
                
                <div class="p-3 text-center col-4" v-for="list in users" :key="list.id">
                    <div class="card">
                        <button class="float-right btn btn-sm btn-danger"
            @click="งงงงงงงงงง()">
            <i class="fas fa-trash"></i></button>
                        <div class="card-header">{{ list.name}}</div>

                        <div class="card-body">email: {{ list.email }}</div>
                    </div>
                </div>
            </div>
        </div>
        </form>
    </div>
</template>
// <script>
import axios from "axios";
export default{
    name: "company_search",
    data() {
        return {
           
            users:[]
        
        };
    },
   
    methods: {
        setUsers() {
            console.log('setUsers', this.setUsers)
            this.status = false;
            let uri = "http://localhost:3000/user/fetch";
            axios.post(uri, {
                userType: 'user'          
            })
            .then(user => {
                if (user.data.status.code === 0){ 

                   this.users = user.data.user                
                } else {
                    console.log('ผิดพลาด')
                }
                
            })

        },
       
    },
}


</script>
