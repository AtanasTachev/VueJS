<script setup>
import { RouterView } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'
import Navigation from './components/common/Navigation.vue';
</script>

<template>
  <div>
    <Navigation />
    <header>
      <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

      <div class="wrapper">
        <b-card>
            <b-nav pills> 
                <b-nav-item><router-link to="/">Home</router-link></b-nav-item>
                <b-nav-item><router-link to="/about">About</router-link></b-nav-item>
                <b-nav-item><router-link to="/artworks">Artworks</router-link></b-nav-item>
                <b-nav-item><router-link to="/contacts">Contacts</router-link></b-nav-item>
                <b-nav-item><router-link to="/login">Login</router-link></b-nav-item>
            </b-nav>
            <!-- <b-button variant="primary">Click</b-button> -->
        </b-card>
        <!-- <HelloWorld msg="You are doing fine" /> -->

        <!-- <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/contacts">Contacts</RouterLink>
          <RouterLink to="/artworks">Artworks</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </nav> -->
      </div>
    </header>
        
        <RouterView />
  </div>

</template>

<style>
@import '@/assets/base.css';

#app {
  /* max-width: 1280px; */
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 2034px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
