<template>
  <header>
    <div class="header-sp">
      <router-link class="header-title" to="/">
        <img src="/icon.png" alt="header-icon" class="header-icon" />
        AYASE Lab
      </router-link>
      <div class="header-button">
        <input type="checkbox" class="menu-btn" id="menu-btn" />
        <label for="menu-btn" class="menu-icon"
          ><span class="navicon"></span
        ></label>
        <ul class="menu">
          <router-link to="/" class="menu-item"> プロフィール </router-link>
          <router-link to="/background" class="menu-item"> 経歴 </router-link>
          <router-link to="/note" class="menu-item"> 記事 </router-link>
          <router-link to="/work" class="menu-item"> 作品 </router-link>
        </ul>
      </div>
    </div>
    <div class="header-pc">
      <router-link class="header-title" to="/">
        <img src="/icon.png" alt="header-icon" class="header-icon" />
        AYASE Lab
      </router-link>
      <ul class="menu">
        <router-link to="/" class="menu-item"> プロフィール </router-link>
        <router-link to="/background" class="menu-item"> 経歴 </router-link>
        <router-link to="/note" class="menu-item"> 記事 </router-link>
        <router-link to="/work" class="menu-item"> 作品 </router-link>
      </ul>
    </div>
  </header>
</template>
<style lang="scss">
header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  background: white;
  z-index: 100;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.header-pc {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  max-width: 1152px;
}
.header-sp {
  display: none;
}
@media screen and (max-width: 1000px) {
  .header-pc {
    display: none;
  }
  .header-sp {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    width: 100%;
    .header-button {
      display: flex;
      justify-content: right;
      align-items: center;
      width: calc(100% - 220px);
    }
  }
}
.header-title {
  display: flex;
  justify-content: left;
  align-items: center;
  width: 200px;
  height: 100%;
  font-size: 24px;
  margin-right: 20px;
  text-decoration: none;
  color: #ed7100;
  .header-icon {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin: 10px;
  }
}

.menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  .menu-item {
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 20px;
    font-size: 16px;
    text-decoration: none;
    color: #333333;
    font-family: "Open Sans", serif;
    letter-spacing: 0.05em;
    transition: all 0.1s ease;
    &:hover {
      color: #ed7100 !important;
      font-weight: bold;
      border-bottom: 2px solid #ed7100;
    }
    &:visited {
      color: #333333;
    }
  }
}

@media screen and (max-width: 1000px) {
  .menu {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    position: absolute;
    width: 100%;
    height: auto;
    top: 0;
    margin-top: 70px;
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
      border-top: 1px solid #ddd;
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
    background: #ddd;
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
      background: #ddd;
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
}
</style>
<script>
export default {
  name: "HeaderComponent",
};
</script>
