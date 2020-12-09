<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light rounded border mb-3 px-4"
  >
    <div class="navbar-brand">
      <span>FilmInc</span>
    </div>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarNav"
    >
      <div>
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" active-class="active" class="nav-link">
              <span>Overzicht</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              to="/watchables"
              active-class="active"
              class="nav-link"
            >
              <span>Voorstellingen</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/scheduled" active-class="active" class="nav-link">
              <span>Inplanning</span>
            </router-link>
          </li>
          <li class="nav-item" v-if="isAdmin">
            <router-link to="/users" active-class="active" class="nav-link">
              <span>Gebruikers</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/project" active-class="active" class="nav-link">
              <span>Project informatie</span>
            </router-link>
          </li>
        </ul>
      </div>
      <button class="btn btn-light text-muted" @click="logout">
        Uitloggen
      </button>
    </div>
  </nav>
</template>
<script>
import router from "../../router/index";
import cacheService from "../../services/cache";
import tokenService from "../../services/token";

export default {
  name: "Navbar",
  data() {
    return {
      isAdmin: tokenService.isAdmin(),
    };
  },
  methods: {
    logout() {
      cacheService.write("token", null);
      router.push("/auth");
    },
  },
};
</script>
