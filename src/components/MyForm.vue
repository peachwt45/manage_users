<template>
  <form @submit.prevent="swiftFunc({
          uname,
          udate,
          unumber,
          uaddress,
          username,
          password,
          photo
  })">
    <div class="form-group">
      <label>Your name</label>
      <input v-model="uname" type="text" class="form-control" placeholder="Enter your name" />
    </div>
    <div class="form-group">
      <label>Date of birth</label>
      <input v-model="udate" type="date" class="form-control" />
    </div>
    <div class="form-group">
      <label>Phone number</label>
      <input v-model="unumber" type="tel" id="phone" name="phone" class="form-control"  placeholder="Enter your phone number" pattern="[0-9]{10}" />
    </div>
    <div class="form-group">
      <label>Address</label>
      <textarea
        v-model="uaddress"
        type="text"
        class="form-control"
        placeholder="Enter your address"
      ></textarea>
    </div>
    <div class="form-group">
      <label>Username</label>
      <input v-model="username" type="text" class="form-control" placeholder="Enter Username" name="username" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input v-model="password" type="password" class="form-control" placeholder="Enter Password" name="psw" />
    </div>
    <div class="form-group">
      <label>Your photo [URL]</label>
      <input v-model="photo" type="text" class="form-control" placeholder="photo Image URL" />
    </div>
    <div class="ADDUSER">
    <button type="submit" class="btn btn-primary">{{textButton}}</button>
  </div>
  </form>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "Form",
  data: function() {
    if(this.$route.params&&this.$route.params.id) return {...this.$store.state.users[this.$route.params.id]}
    else return { 
          uname: "",
          udate: "",
          unumber: "",
          uaddress: "",
          username: "",
          password: "",
          photo: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=826&t=st=1682585848~exp=1682586448~hmac=d39441ece684d2140187d80075c72de3427d43c466eeb7f1e3a6b02554f24072",
        };
  },
  methods: {
    ...mapActions([
      "addusers",
      "editusers"
    ]),
    customEdituser(user){
      this.editusers({index:this.$route.params.id,data:user})
    }
     // testSubmit(){
     // console.log("name :",this.uname,"date :",this.udate,"username :",this.username)
   // } 
  }, 
  computed:{
    textButton(){
      if(this.$route.path =="/adduser") return "ADD USER"
      else return "EDIT USER"
    },
    swiftFunc(){
      if(this.$route.path =="/adduser") return this.addusers
      else return this.customEdituser
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#ufrom label{
    width: 100%;
    display: block;
    text-align: left;
  }
.ADDUSER {
  margin: 50px auto;
}

</style>
