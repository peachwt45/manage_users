<template>
    <div class="container">
        <h1>ADD USER</h1>
    <div id="ufrom">
      <My-Form/>
    </div>
    </div>
</template>

<script>
import MyForm from "../components/MyForm"

export default {
  name: 'adduser',
  components:{
    MyForm
  }
}

</script>

<style>
#ufrom { 
    width: 500px;
    margin: 50px auto;
}
#ufrom label{
    width: 100%;
    display: block;
    text-align: left;
    margin: 5px auto;
}
.container{
    margin: 50px auto;
    text-align: center;
}
</style>
