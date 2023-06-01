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
        <li class="menu-item">
          <a
            class="link-content"
            href="#top"
            v-smooth-scroll="{ duration: 800, offset: -80 }"
          >
            TOP</a
          >
        </li>
        <li class="menu-item">
          <a
            class="link-content"
            href="#about"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            ABOUT</a
          >
        </li>
        <li class="menu-item">
          <a
            class="link-content"
            href="#experience"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            EXPERIENCE</a
          >
        </li>
        <li class="menu-item">
          <a
            class="link-content"
            href="#history"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            HISTORY</a
          >
        </li>
        <li class="menu-item">
          <a
            class="link-content"
            href="#work"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            WORKS</a
          >
        </li>
        <li class="menu-item">
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
      <ul class="menu">
        <li class="menu-item">
          <a
            class="link-content"
            href="#top"
            v-smooth-scroll="{ duration: 800, offset: -80 }"
          >
            TOP</a
          >
        </li>
        <li index="2" class="menu-item">
          <a
            class="link-content"
            href="#about"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            ABOUT</a
          >
        </li>
        <li index="3" class="menu-item">
          <a
            class="link-content"
            href="#experience"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            EXPERIENCE</a
          >
        </li>
        <li index="4" class="menu-item">
          <a
            class="link-content"
            href="#history"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            HISTORY</a
          >
        </li>
        <li index="5" class="menu-item">
          <a
            class="link-content"
            href="#work"
            v-smooth-scroll="{ duration: 800, offset: -60 }"
          >
            WORKS</a
          >
        </li>
        <li index="6" class="menu-item">
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
  </header>
</template>
<style lang="scss">
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
.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 60px;
}
.menu-item {
  display: flex;
  padding: auto;
  width: 16.6666%;
  height: 60px;
  &:hover {
    background: #f5f5f5;
    border-bottom: 2px solid hotpink;
  }
}
.link-content {
  width: 100%;
  padding: 18px 0;
  font-size: 16px;
  text-decoration: none;
  color: #333333;
  font-family: "Open Sans", serif;
  letter-spacing: 0.05em;
  transition: all 0.1s ease;
  &:visited {
    color: #333333;
  }
  &:hover {
    color: hotpink;
    font-weight: bold;
  }
}
@media screen and (max-width: 640px) {
  .menu {
    display: flex;
    flex-wrap: wrap;
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
    .menu-item {
      width: 100%;
      height: 50px;
      border-top: 1px solid #2c3e50;
      margin: 0 20px;
      &:hover {
        border-bottom: none;
      }
    }
    .link-content {
      width: 100%;
      padding: 16px 0;
      font-size: 16px;
      line-height: 18px;
      text-decoration: none;
      letter-spacing: 2px;
      text-transform: capitalize;
    }
  }

  .menu-btn {
    display: none;
    &:checked {
      ~ .menu {
        transform: scale(1, 1);
        transform-origin: top;
        transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
        a,
        li {
          opacity: 1;
          transition: color 0.1s ease, weight 0.1s ease;
        }
      }
    }
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
    &:before,
    &:after {
      content: "";
      display: block;
      height: 100%;
      width: 100%;
      position: absolute;
      background: #ccc;
      transition: 0.3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    }
    &:before {
      top: 9px;
    }

    &:after {
      bottom: 9px;
    }
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: rgba(0, 0, 0, 0);
    transition: 0.2192s cubic-bezier(0.04, 0.04, 0.12, 0.96) 0.1008s;
    &:before {
      transform: rotate(-45deg);
    }
    &:after {
      transform: rotate(45deg);
    }
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon {
    &:before {
      top: 0;
    }
    &:after {
      bottom: 0;
    }
  }

  .navtext-container {
    width: 100%;
    height: 60px;
    position: absolute;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    .navtext {
      letter-spacing: 0.05em;
      font-size: 20px;
    }
  }
}
</style>
<script>
export default {
  name: "HeaderComponent",
};
</script>
