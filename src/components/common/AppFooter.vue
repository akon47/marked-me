<template>
  <div class="footer-background"></div>
</template>

<script>
export default {};
</script>

<style>
.footer-background {
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
</style>
