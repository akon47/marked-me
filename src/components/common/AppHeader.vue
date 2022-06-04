<template>
  <div class="header-background">
    <div class="title"></div>
    <div class="router-nav">
      <router-link to="/home">Home</router-link>
      <router-link to="/server-info">ServerInfo</router-link>
    </div>
    <div class="link-nav">
      <a href="https://stats.uptimerobot.com/2owrXSVNLl" target="_blank"
        >Server Status</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header-background {
  width: 100%;
  height: 100%;
  background: linear-gradient(10deg, #a1d9b4 20%, #32988a 30%, #000e3c 70%);
  background-repeat: no-repeat;
  background-size: 1000% 100%;
  animation: Gradient 60s ease infinite;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.router-nav {
  position: absolute;
  left: 5px;
  top: 10px;
}

.router-nav a {
  margin: 3px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  background-color: #000000a0;
  border-radius: 5px;
  padding: 2px 8px;
}

.router-nav a.router-link-exact-active {
  color: white;
  font-weight: bold;
}

.link-nav {
  position: absolute;
  right: 5px;
  top: 10px;
}

.link-nav a {
  margin: 3px;
  cursor: pointer;
  color: white;
  text-decoration: none;
  background-color: #000000a0;
  border-radius: 5px;
  padding: 2px 8px;
}

.link-nav a:hover {
  text-decoration: underline;
}

@keyframes Gradient {
  0% {
    background-position: 40% 50%;
  }
  50% {
    background-position: 70% 50%;
  }
  100% {
    background-position: 40% 50%;
  }
}

.header-background .title {
  color: white;
  font-weight: bold;
  font-size: 40pt;
}

@media screen and (max-height: 850px) {
  .header-background .title {
    color: white;
    font-weight: bold;
    font-size: 25pt;
  }
}
</style>
