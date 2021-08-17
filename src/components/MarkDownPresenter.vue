<template>
  <div class="markdown-container" v-html="htmlText"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { toHtml } from "@/api/markdown-parser";

export default defineComponent({
  components: {},
  name: "MarkDownPresenter",
  props: {
    markdownText: {
      type: String,
      required: true,
      default: "",
    },
  },
  data() {
    return {
      isLoading: false,
      htmlText: "",
    };
  },
  watch: {
    markdownText: function () {
      this.updateHtmlText();
    },
  },
  methods: {
    validURL(str: string): boolean {
      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator
      return !!pattern.test(str);
    },
    async updateHtmlText(): Promise<boolean> {
      this.isLoading = true;
      try {
        if (this.validURL(this.markdownText)) {
          const response = await fetch(this.markdownText);
          this.htmlText = toHtml(await response.text());
        } else {
          this.htmlText = toHtml(this.markdownText);
        }
        return true;
      } catch (error) {
        console.error(error);
      } finally {
        this.isLoading = false;
      }
      return false;
    },
  },
  mounted() {
    this.updateHtmlText();
  },
});
</script>

<style>
.markdown-container {
  background: transparent;
  min-width: 320px;
  max-width: 768px;
  width: 100%;
  padding: 10px;

  --main-color: #37352f;
  --border-color: #dbdddf;

  color: var(--main-color);
}

.markdown-container h1,
h2 {
  border-bottom: 1px solid var(--border-color);
  padding-bottom: 0.3em;
}

.markdown-container hr {
  background-color: var(--border-color);
  margin: 16px 0;
  padding: 0;
  border: 0;
  height: 3px;
}
</style>
