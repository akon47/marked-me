<template>
  <div class="content-container">
    <mark-down-presenter :markdownText="markdownText"></mark-down-presenter>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkDownPresenter from "../MarkDownPresenter.vue";

export default defineComponent({
  components: {
    MarkDownPresenter,
  },
  name: "AppContent",
  computed: {
    markdownText() {
      return "https://raw.githubusercontent.com/akon47/akon47/master/resume.md";
    },
  },
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
