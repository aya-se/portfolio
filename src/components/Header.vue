<template>
  <header>
    <div class="header-sp">
      <div class="navtext-container">
        <div class="navtext">KAKERU HATTORI</div>
      </div>
      <input type="checkbox" class="menu-btn" id="menu-btn" />
      <label for="menu-btn" class="menu-icon"
        ><span class="navicon"></span
      ></label>
      <ul class="menu">
        <li class="nav-item">
          <a
            class="link-content"
            href="#top"
            v-smooth-scroll="{ duration: 800, offset: -80 }"
          >
            TOP</a
          >
        </li>
        <li class="nav-item">
          <a
            class="link-content"
            href="#about"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            ABOUT</a
          >
        </li>
        <li class="nav-item">
          <a
            class="link-content"
            href="#experience"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            EXPERIENCE</a
          >
        </li>
        <li class="nav-item">
          <a
            class="link-content"
            href="#history"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            HISTORY</a
          >
        </li>
        <li class="nav-item">
          <a
            class="link-content"
            href="#work"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            WORKS</a
          >
        </li>
        <li class="nav-item">
          <a
            class="link-content"
            href="#contact"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            CONTACT</a
          >
        </li>
      </ul>
    </div>
    <div class="header-pc">
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
    </div>
  </header>
</template>
<style>
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background: white;
  z-index: 100;
  border-bottom: 1px solid #ddd;
}
.header-pc {
  display: block;
}
.header-sp {
  display: none;
}
@media screen and (max-width: 640px) {
  .header-pc {
    display: none;
  }
  .header-sp {
    display: block;
  }
}
.el-menu {
  display: flex !important;
  flex-wrap: wrap !important;
  justify-content: center !important;
  border: none !important;
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
  transition: all 0.1s ease;
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

/* Nav items */
.menu {
  list-style: none;
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  margin-top: 60px;
  padding: 0 0 0 0;
  clear: both;
  background: white;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
  transform: scale(1, 0);
  transform-origin: top;
  border-bottom: 1px solid #ddd;
}

/* Hamburger menu button */
.menu-btn:checked ~ .menu {
  transform: scale(1, 1);
  transform-origin: top;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

/* Hamburger menbu text */
.menu a {
  text-decoration: none;
  font-weight: 500;
  letter-spacing: 2px;
  font-size: 16px;
  text-transform: capitalize;
  color: #ddd;
  opacity: 0;
}

.menu li {
  border-top: 1px solid #2c3e50;
  padding: 7.5px 0;
  margin: 0 20px;
  opacity: 0;
}

.menu-btn:checked ~ .menu a,
.menu-btn:checked ~ .menu li {
  opacity: 1;
  transition: color 0.1s ease, weight 0.1s ease;
}

.menu-btn {
  display: none;
}

.menu-icon {
  position: relative;
  display: flex;
  justify-content: right;
  cursor: pointer;
  padding: 28.5px 24px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

.navicon {
  background: #ccc;
  display: block;
  height: 3px;
  width: 28px;
  position: relative;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

.navicon:before,
.navicon:after {
  content: "";
  display: block;
  height: 100%;
  width: 100%;
  position: absolute;
  background: #ccc;
  transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}

.navicon:before {
  top: 9px;
}

.navicon:after {
  bottom: 9px;
}

/* Hamburger Menu Animation Start */
.menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before {
  top: 0;
}
.menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  bottom: 0;
}

.menu-btn:checked ~ .menu-icon .navicon {
  background: rgba(0, 0, 0, 0);
  transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
}
/* Hamburger Menu Animation End */

/* Navbar Container */
.navtext-container {
  width: 100%;
  height: 60px;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Navbar Text */
.navtext {
  letter-spacing: 0.05em;
  font-size: 20px;
}
</style>
<script>
export default {
  name: "HeaderComponent",
};
</script>
