<template>
  <div id="note">
    <div id="notes">
      <Subtitle icon="bi-stack" text="記事" />
      <MarkdownNote />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import MarkdownNote from "./MarkdownNote.vue";
import Subtitle from "/src/components/Subtitle.vue";
export default defineComponent({
  name: "NoteView",
  data() {
    return {};
  },
  components: {
    MarkdownNote,
    Subtitle,
  },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style lang="scss">
#note {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
#notes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px 20px 30px;
}
</style>
