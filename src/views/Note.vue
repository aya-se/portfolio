<template>
  <div id="note">
    <div id="notes">
      <h2 class="subtitle"><i class="bi bi-stack" />&nbsp;記事</h2>
      工事中......
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "NoteView",
  data() {
    return {};
  },
  components: {},
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
  justify-content: left;
  width: 100%;
  padding: 10px 20px 30px;
}
.subtitle {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  margin: 20px;
  color: #333333;
  font-size: 32px;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  font-weight: normal;
}
</style>
