<template>
  <div class="header-background">
    <div class="title">kimhwan.kr</div>
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
</style>
