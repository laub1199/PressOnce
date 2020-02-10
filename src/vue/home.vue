<template>
  <div id="resize">
      <img id="HomePageLogo" :src="logo" alt="logo"/>
      <h1>Welcome to PressOnce Prototype</h1>
      <h2>Login Page</h2>
      <br>
      <form id="loginForm" method="POST" enctype="multipart/form-data" action="/signin">
        User Name: <input type="text" name="username" id="loginUsername">
        <br><br>
        Password: <input type="password" name="password" id="loginPwd">
        <br>
        <input type = "submit" value = "Enter">
      </form>
      <span>Powered by Sennett LauB</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
        logo: './img/logo.png'
    }
  }
}
</script>

<style>
@import url('../styleS.css');
</style>

