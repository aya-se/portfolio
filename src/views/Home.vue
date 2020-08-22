<template>
  <div class="home">
    <div class="tab">
      <el-menu mode="horizontal">
        <h1>
          <el-menu-item index="1">
            <h1>aya_se's portfolio</h1>
          </el-menu-item>
        </h1>
        <el-menu-item index="2"
          ><a class="link-content" @click="clickSmoothScroll('#about')">
            About</a
          ></el-menu-item
        >
        <el-menu-item index="3"
          ><a class="link-content" @click="clickSmoothScroll('#skill')">
            Skill</a
          ></el-menu-item
        >
      </el-menu>
    </div>
    <img src="../assets/icon.png" />
    <transition name="el-fade-in-linear">
      <div id="about">
        <h1><i class="el-icon-info" /> About</h1>
        <el-card class="box-card">
          <h3>
            <label for="name"><i class="el-icon-edit" /> 氏名</label>
          </h3>
          <p id="name">服部翔 (Kakeru Hattori)</p>
        </el-card>
        <el-card class="box-card">
          <h3>
            <label for="school"><i class="el-icon-school" /> 学校</label>
          </h3>
          <p id="school">東京工業大学 情報理工学院 情報工学系</p>
        </el-card>
        <el-card class="box-card">
          <h3>
            <label for="school"><i class="el-icon-date" /> 生年月日</label>
          </h3>
          <p id="school">2000年7月29日</p>
        </el-card>
        <el-card class="box-card">
          <h3>
            <label for="interest"
              ><i class="el-icon-star-off" /> 趣味・関心</label
            >
          </h3>
          <p id="interest">
            DTM, 機械学習, 競技プログラミング, Youtube etc.
          </p>
        </el-card>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div id="skill">
        <h1><i class="el-icon-user-solid" /> Skill</h1>
        <el-card class="box-card2">
          <h3>
            <label for="vue">Vue.js</label>
          </h3>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/logo.png"
          />
        </el-card>
        <el-card class="box-card2">
          <h3>
            <label for="go">Go</label>
          </h3>
          <img class="box-image" id="go" alt="Go logo" src="../assets/go.png" />
        </el-card>
        <el-card class="box-card2">
          <h3>
            <label for="javaScript">Java Script</label>
          </h3>
          <img
            class="box-image"
            id="javaScript"
            alt="javaScript logo"
            src="../assets/javascript.png"
          />
        </el-card>
        <el-card class="box-card2">
          <h3>
            <label for="Cpp">C++</label>
          </h3>
          <img
            class="box-image"
            id="cpp"
            alt="cpp logo"
            src="../assets/cpp.png"
          />
        </el-card>
        <el-card class="box-card2">
          <h3>
            <label for="python">Python</label>
          </h3>
          <img
            class="box-image"
            id="python"
            alt="python logo"
            src="../assets/python.png"
          />
        </el-card>
        <el-card class="box-card2">
          <h3>
            <label for="sql">SQL</label>
          </h3>
          <img
            class="box-image"
            id="sql"
            alt="sql logo"
            src="../assets/sql.png"
          />
        </el-card>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  methods: {
    clickSmoothScroll(x) {
      event.preventDefault();
      this.$SmoothScroll(document.querySelector(x), 800, null, null, "y");
    }
  }
};
</script>
<style>
.link-content {
  size: 50px;
}
.box-card {
  display: inline-block;
  width: 400px;
  height: 150px;
  margin: 10px;
}
.box-card2 {
  display: inline-block;
  width: 260px;
  height: 260px;
  margin: 10px;
}
.box-image {
  height: 160px;
}
</style>
