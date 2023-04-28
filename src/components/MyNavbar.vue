<template>
  	<nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="https://cdn.pixabay.com/photo/2017/11/10/05/46/user-2935524_960_720.png" alt="" height="80"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <router-link class="nav-link mx-2 active" to="/adduser">ADD USER</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link mx-2 active" to="/">MANAGE</router-link>
          </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style scoped>
#neubar {
      background: #fae8d2;
      box-shadow: 4px 6px 12px rgba(0,0,0,0.4)
    }
    
    .nav-item .active {
      border-radius: 6px;
      background: linear-gradient(145deg, #ffe7ca, #f5d7b2);
      box-shadow:  4px 4px 8px #ddc1a0,
                   -4px -4px 8px #f7e5cc;
    }
    #neubar .dropdown-menu a:hover {
      color: #454545
    }
    #neubar .nav-item {
      margin : auto 4px;
    }
    #neubar a {
    
      padding-left:12px;
      padding-right:12px;
    }
    #neubar .dropdown-menu {
      background : #545454
    }
    a.navbar-brand {
      color: #454545
    }

</style>


