<template>
  <div class="row">
        <div class="col-md-offset-4 col-md-3">
            <div class="form-login">
            <form @submit.prevent="onSubmit">
                <h4>Welcome back.</h4>
                <input type="email" id="email" class="form-control input-sm chat-input" placeholder="email" v-model="email" />
                <br>
                <input type="password" id="userPassword" class="form-control input-sm chat-input" placeholder="password" v-model="password"/>
                <br>
                <div class="wrapper">
                <span class="group-btn">     
                    <button type="submit">Login</button>
                    <!--<a href="#" class="btn btn-primary btn-md">login <i class="fa fa-sign-in"></i></a>-->
                </span>
                </div>
            </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        onSubmit() {
            const formData = {
                email: this.email,
                password: this.password
            }   
            this.$store.dispatch('login', {email: formData.email, password: formData.password}); 
        }
        
    }
}
</script>


<style scoped>
@import url(http://fonts.googleapis.com/css?family=Roboto:400);
body {
  background-color:#fff;
  -webkit-font-smoothing: antialiased;
  font: normal 14px Roboto,arial,sans-serif;
}

.container {
    padding: 25px;
    position: fixed;
}

.form-login {
    background-color: #EDEDED;
    padding-top: 10px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 15px;
    border-color:#d2d2d2;
    border-width: 5px;
    box-shadow:0 1px 0 #cfcfcf;
}

h4 { 
 border:0 solid #fff; 
 border-bottom-width:1px;
 padding-bottom:10px;
 text-align: center;
}

.form-control {
    border-radius: 10px;
}

.wrapper {
    text-align: center;
}

</style>

