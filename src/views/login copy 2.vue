<template>
  <div class="login">
     <h2 class="my-5">Sign In</h2>
  <div class="mt-4">
        <form @submit.prevent="loginUser" 
        class="fadeIn second zero-raduis">
        
     
  
 
    <b-card img-src="" 
    img-alt="Card image" img-left class="mb-3">
      <b-card-text>    
  <div class="fadeIn second zero-raduis">
    <label for="username">Username</label>
    <b-form-input 
      name=username
      v-model="username"
      placeholder="กรอกชื่อผู้ใช้"
      id = "email"
      class=''
      type = "text"
      key=username>
       </b-form-input>
  </div>
    <div class="fadeIn second zero-raduis">
      <label for="password">Password</label>
    <b-form-input 
    name=password
    v-model="password"
    placeholder="กรอกรหัสผ่าน"
    id = "password"
    class='form-control'
    type = "password"
    key=password
    >

    </b-form-input>
    
  </div>
  
  <div>
  <b-button 
  
  @click="loginUser">เข้าสู่เว็บไซต์</b-button>
  <b-button href="/Register">สมัครสมาชิกสำหรับผู้สมัครงาน</b-button>
  <b-button href="/Register2">สมัครสมาชิกสำหรับงานจ้าง/สถานประกอบการ</b-button>
  <b-button href="/company_search">ค้นหา</b-button>
  <b-button href="/company_employer">ค้นหาบริษัท</b-button>
</div>

        
      </b-card-text>
    </b-card>
        </form>
  </div>

  </div>
  

</template>

<script>
import axios from "axios"
// import website from "./website.vue";
export default {
  name: 'login',
  comments: {
  //  website
  },
  data() {
    return {  
      username: "",
      password: "",
      // user: {
      //   username: 'matt'
      // },
      // message: ""
    };
  },
  created() {
    console.log('created')
  },
  methods: {
   async loginUser() {
      console.log('loginUser')
      console.log('this.username', this.username)
      console.log('this.password', this.password)
      console.log('this.data',this.data)
     
      let uri = "http://localhost:3000/login";
      axios.post(uri, {
          username: this.username, 
          password: this.password,   
      })
      .then(responseLogin => {
        console.log('RESPONSE API LOGIN', responseLogin)         
        if (responseLogin.data.status.code === 0) {
          alert("สำเร็จ  >>", responseLogin.data);
          localStorage.setItem('username', JSON.stringify(responseLogin.data.data.username))
          localStorage.setItem('user', JSON.stringify(responseLogin.data.data.type))
          localStorage.setItem('user', JSON.stringify(responseLogin.data.data))
          console.log("มันคืออะไร",responseLogin.data.data.type)
          console.log('type>>>', responseLogin.data.data.type)
          if (responseLogin.data.data.type === "user" ){
            this.$router.push("/website")
          } else{
            this.$router.push("/website2")
          }
        } else{
          
          alert("รหัสผิดพลาด")
        }
      })
      .catch(err => {
        // eslint-disable-next-line no-console
        console.log(err);
      });  
    }
  },  
};


</script>
<style>
 @import url(https://fonts.googleapis.com/css?family=Roboto:300);

.login {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
}
.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
}
.form input {
  font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
}
.form button {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  background: #4CAF50;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}
.form button:hover,.form button:active,.form button:focus {
  background: #43A047;
}
.form .message {
  margin: 15px 0 0;
  color: #b3b3b3;
  font-size: 12px;
}
.form .message a {
  color: #4CAF50;
  text-decoration: none;
}
.form .register-form {
  display: none;
}
.container {
  position: relative;
  z-index: 1;
  max-width: 300px;
  margin: 0 auto;
}
.container:before, .container:after {
  content: "";
  display: block;
  clear: both;
}
.container .info {
  margin: 50px auto;
  text-align: center;
}
.container .info h1 {
  margin: 0 0 15px;
  padding: 0;
  font-size: 36px;
  font-weight: 300;
  color: #1a1a1a;
}
.container .info span {
  color: #4d4d4d;
  font-size: 12px;
}
.container .info span a {
  color: #000000;
  text-decoration: none;
}
.container .info span .fa {
  color: #EF3B3A;
}
body {
  background: #FFFFFF; /* fallback for old browsers */
  background: -webkit-linear-gradient(right, #FFFFFF, #8DC26F);
  background: -moz-linear-gradient(right, #FFFFFF, #8DC26F);
  background: -o-linear-gradient(right, #FFFFFF, #8DC26F);
  background: linear-gradient(to left, #FFFFFF, #8DC26F);
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;      
}

</style>