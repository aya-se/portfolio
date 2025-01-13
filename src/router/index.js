import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Background from "../views/Background.vue";
import Work from "../views/Work.vue";
import Note from "../views/Note.vue";
import Post from "../views/Post.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/background",
    name: "Background",
    component: Background,
  },
  {
    path: "/work",
    name: "Work",
    component: Work,
  },
  {
    path: "/note",
    name: "Note",
    component: Note,
  },
  {
    path: "/posts/:id",
    name: "MarkdownNote",
    component: Post,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
