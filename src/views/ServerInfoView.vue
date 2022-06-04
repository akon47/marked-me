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
  name: "ServerInfoView",
  computed: {
    markdownText() {
      return "https://raw.githubusercontent.com/akon47/akon47/master/server_info.md";
    },
  },
});
</script>

<style></style>
