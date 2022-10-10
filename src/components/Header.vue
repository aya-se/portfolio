<template>
  <header id="tab" class="tab" data-scroll-header>
    <el-menu mode="horizontal" collapse-transition>
      <el-menu-item index="1" class="menu-item"
        ><a
          class="link-content"
          href="#top"
          v-smooth-scroll="{ duration: 800, offset: -80 }"
        >
          TOP</a
        ></el-menu-item
      >
      <el-menu-item index="2" class="menu-item"
        ><a
          class="link-content"
          href="#about"
          v-smooth-scroll="{ duration: 800, offset: -60 }"
        >
          ABOUT</a
        ></el-menu-item
      >
      <el-menu-item index="3" class="menu-item"
        ><a
          class="link-content"
          href="#experience"
          v-smooth-scroll="{ duration: 800, offset: -60 }"
        >
          EXPERIENCE</a
        ></el-menu-item
      >
      <el-menu-item index="4" class="menu-item"
        ><a
          class="link-content"
          href="#history"
          v-smooth-scroll="{ duration: 800, offset: -60 }"
        >
          HISTORY</a
        ></el-menu-item
      >
      <el-menu-item index="5" class="menu-item"
        ><a
          class="link-content"
          href="#work"
          v-smooth-scroll="{ duration: 800, offset: -60 }"
        >
          WORKS</a
        ></el-menu-item
      >
      <el-menu-item index="6" class="menu-item"
        ><a
          class="link-content"
          href="#contact"
          v-smooth-scroll="{ duration: 800, offset: -60 }"
        >
          CONTACT</a
        ></el-menu-item
      >
    </el-menu>
  </header>
</template>
<style>
.el-menu {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
}
.menu-item {
  padding: 0 !important;
  width: 16.6666%;
}
.link-content {
  font-size: 16px;
  text-decoration: none;
  color: #333333 !important;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  transition: weight 0.1s ease;
  width: 100%;
}
.link-content:visited {
  color: #333333 !important;
}
.link-content:hover {
  color: hotpink !important;
  font-weight: bold;
}
@media screen and (max-width: 640px) {
  .menu-item {
    width: 33.3333%;
    height: 36px !important;
  }
  .link-content {
    font-size: 14px;
    margin: auto 0 !important;
    height: 36px !important;
    line-height: 36px;
  }
}
</style>
<script>
export default {
  name: "HeaderComponent",
};
</script>
