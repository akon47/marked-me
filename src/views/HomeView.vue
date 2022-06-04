<template>
  <mark-down-presenter :markdownText="markdownText"></mark-down-presenter>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MarkDownPresenter from "../components/MarkDownPresenter.vue";

export default defineComponent({
  components: {
    MarkDownPresenter,
  },
  name: "HomeView",
  computed: {
    markdownText() {
      return "https://raw.githubusercontent.com/akon47/akon47/master/resume.md";
    },
  },
});
</script>

<style></style>
