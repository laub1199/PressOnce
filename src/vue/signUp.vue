<template>
  <div>
      <form id="signUp" method="POST" enctype="multipart/form-data" action="/signup">
        User Name: <input type="text" name="signUsername" id="signUsername">
        <br><br>
        Password: <input type="password" name="signPwd" id="signPwd">
        <br><br>
        Group: <select name="group">
            <option value="Admin">Admin</option>
            <option value="ATG">ATG</option>
            <option value="IBI">IBI</option>
        </select>
        <br><br>
        <input type = "submit" value = "confirm">
      </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style>
</style>