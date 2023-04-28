<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="main-box clearfix">
        <div class="table-responsive">
          <table class="table user-list">
            <tbody>
            <tr>
            <td>
        <img :src="userDetail.photo" class="card-img" alt />
        <span class="user-link">{{userDetail.uname}}</span>
          </td>
          <td>
            <span class="user-subhead">{{userDetail.udate}}</span>
          </td>
          <td>
              <span class="user-subhead">{{userDetail.uaddress}}</span>
            </td>
          <td>
              <span class="user-subhead">{{userDetail.unumber}}</span>
            </td>
          <td>
              <span class="user-subhead">username : {{userDetail.username}}</span>
            </td>
          <td>
              <span class="user-subhead">password : {{userDetail.password}}</span>
            </td>
          
            <td style="width: 20%;">
            <router-link :to="'/edituser/'+index" class="btn btn-primary">EDIT</router-link>
            <a href="#"  @click.prevent="confirmDelete(index)" class="btn btn-danger">DELETE</a>
          </td>
        </tr>
        </tbody>
        </table>
        </div>
        </div>
        </div>
      </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: "MyCard",
  props: ["userDetail", "index"],
  methods: {
      ...mapActions([
        "deleteuser"
  ]),
  confirmDelete(index){
    var confirm = window.confirm("Are You sure to delete user");
    if(confirm) this.deleteuser(index)
    else return
  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css">

/* USER LIST TABLE */
.user-list tbody td > img {
position: relative;
max-width: 50px;
float: left;
margin-right: 15px;
}
.user-list tbody td .user-link {
display: block;
font-size: 1.25em;
margin-left: 60px;
}
.user-list tbody td .user-subhead {
font-size: 0.875em;
font-style: italic;
}

</style>
