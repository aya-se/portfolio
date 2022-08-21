<template>
  <div id="home">
    <CustomHeader />
    <a
      class="link-content"
      href="#home"
      v-smooth-scroll="{ duration: 800, offset: -100 }"
    >
      <h1 id="top-title">aya_se's portfolio</h1></a
    >
    <img class="top-icon" src="../assets/hattori.jpg" />

    <div id="about">
      <h1><i class="el-icon-info" /> About</h1>
      <AboutCard
        v-for="(item, index) in abouts"
        :key="index"
        :title="item.title"
        :text="item.text"
        :icon="item.icon"
      />
    </div>

    <div id="account">
      <h1><i class="el-icon-menu" /> Account</h1>
      <AccountCard
        v-for="(item, index) in accounts"
        :key="index"
        :title="item.title"
        :link="item.link"
        :image="item.image"
      />
    </div>

    <div id="history">
      <h1><i class="el-icon-s-data" /> History</h1>
      <el-timeline>
        <el-timeline-item
          class="timeline"
          v-for="(item, index) in activities"
          :key="index"
          :icon="item.icon"
          :type="item.type"
          :color="item.color"
          :size="item.size"
          :timestamp="item.timestamp"
        >
          {{ item.content }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="skill">
      <h1><i class="el-icon-s-opportunity" /> Skill</h1>
      <SkillCard
        v-for="(item, index) in skills"
        :key="index"
        :title="item.title"
        :level="item.level"
        :text="item.text"
        :image="item.image"
      />
    </div>

    <div id="work">
      <h1><i class="el-icon-s-claim" /> Work</h1>
      <WorkCard
        v-for="(item, index) in works"
        :key="index"
        :title="item.title"
        :text="item.text"
        :tags="item.tags"
        :buttons="item.buttons"
        :image="item.image"
        :onClick="onClick"
      />
    </div>

    <div id="contact">
      <h1><i class="el-icon-s-comment" /> Contact</h1>
      <p><b>Gmail： </b>kakkeno1@gmail.com</p>
      <p><b>Twitter： </b>@Hakuba_snow</p>
    </div>

    <a
      class="link-content"
      href="#home"
      v-smooth-scroll="{ duration: 800, offset: -100 }"
    >
      <h2>aya_se's portfolio</h2></a
    >
  </div>
</template>

<script>
import { defineComponent } from "vue";
import CustomHeader from "@/components/Header.vue";
import AboutCard from "@/components/AboutCard.vue";
import AccountCard from "@/components/AccountCard.vue";
import SkillCard from "@/components/SkillCard.vue";
import WorkCard from "@/components/WorkCard.vue";
import activities from "@/data/activities.json";
import abouts from "@/data/abouts.json";
import accounts from "@/data/accounts.json";
import skills from "@/data/skills.json";
import works from "@/data/works.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      abouts: abouts,
      activities: activities,
      accounts: accounts,
      skills: skills,
      works: works,
    };
  },
  components: { CustomHeader, AboutCard, AccountCard, SkillCard, WorkCard },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style>
#home {
  overflow: hidden;
}
.tab {
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 100;
  background-color: white;
}
.top-icon {
  border-radius: 3rem;
  transition: 0.3s all ease;
  width: 400px;
  height: 400px;
}
.top-icon:hover {
  opacity: 0.7;
}
@media screen and (max-width: 640px) {
  #top-title {
    padding-top: 50px;
  }
  .menu-item {
    width: 33.3333%;
    overflow: hidden;
  }
}
@media screen and (min-width: 640px) {
  .menu-item {
    width: 16.6666%;
    overflow: hidden;
  }
}
.link-content {
  text-decoration: none;
  color: #2c3e50;
}
.link-content:visited {
  color: #2c3e50;
}
.link-content:hover {
  color: #00acee;
}
.timeline {
  width: auto;
  height: auto;
  font-size: 20px;
  padding-top: 20px;
  margin-right: 20px;
}
.tag {
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
}
</style>
