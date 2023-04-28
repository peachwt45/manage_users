<template>
  <div class="container">
          <h1>MANAGE USERS</h1>
    <div id="ucard">
      <my-card v-for="(users,ind) in $store.state.users" :userDetail="users" :index="ind"/>
      </div>
    </div>
</template>

<script>
import MyCard from '../components/MyCard'

export default {
  name: 'HomeView',
  components: {
    MyCard
  }
}

</script>
<style>

.container{
    margin: 50px auto;
    text-align: center;
}
</style>