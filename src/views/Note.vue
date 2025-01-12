<template>
  <div id="note">
    <div id="notes">
      <Subtitle icon="bi-stack" text="記事" />
      <router-link
        v-for="note in notes"
        :key="note.id"
        :to="`/posts/${note.id}`"
      >
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ note.title }}</h5>
            <p class="card-text">{{ note.date }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Subtitle from "/src/components/Subtitle.vue";
import notes from "/src/data/notes.json";

export default defineComponent({
  name: "NoteView",
  data() {
    return {
      notes: notes,
    };
  },
  components: {
    Subtitle,
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
