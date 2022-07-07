<template>
  <header id="tab" class="tab" data-scroll-header>
    <el-menu mode="horizontal" collapse-transition>
      <el-menu-item index="2" class="menu-item"
        ><a
          class="link-content"
          href="#about"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>About</b></a
        ></el-menu-item
      >
      <el-menu-item index="3" class="menu-item"
        ><a
          class="link-content"
          href="#account"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>Account</b></a
        ></el-menu-item
      >
      <el-menu-item index="4" class="menu-item"
        ><a
          class="link-content"
          href="#history"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>History</b></a
        ></el-menu-item
      >
      <el-menu-item index="5" class="menu-item"
        ><a
          class="link-content"
          href="#skill"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>Skill</b></a
        ></el-menu-item
      >
      <el-menu-item index="6" class="menu-item"
        ><a
          class="link-content"
          href="#work"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>Work</b></a
        ></el-menu-item
      >
      <el-menu-item index="7" class="menu-item"
        ><a
          class="link-content"
          href="#contact"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          <b>Contact</b></a
        ></el-menu-item
      >
    </el-menu>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: {
    msg: String
  }
};
</script>
