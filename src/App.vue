<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/dashboard">Dashboard</router-link>
      <div @click="toDoPageAbout">Go About</div>
    </nav>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    toDoPageAbout(){
      this.$router.push({
        name: 'about',
        params: {
          isTrial: 0
        },
        query: {
          isTrial: 0
        }
      })
    }
  },
  created(){
    console.log(this.$router)
  }
}
</script>r
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
