<template>
  <div class="content-container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppContent",
});
</script>

<style scoped>
.content-container {
  width: 100%;
  height: 100%;
  overflow: auto;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
