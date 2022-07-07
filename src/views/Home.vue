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
    <img class="top-icon" src="../assets/icon.png" />

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
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>

    <div id="skill">
      <h1><i class="el-icon-s-opportunity" /> Skill</h1>
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
          <label for="react">React.js</label>
        </h3>
        <img
          class="box-image"
          id="react"
          alt="react logo"
          src="../assets/react.png"
        />
      </el-card>
      <el-card class="box-card2">
        <h3>
          <label for="next">Next.js</label>
        </h3>
        <img
          class="box-image"
          id="next"
          alt="next logo"
          src="../assets/next.png"
        />
      </el-card>
      <el-card class="box-card2">
        <h3>
          <label for="firebase">Firebase</label>
        </h3>
        <img
          class="box-image"
          id="firebase"
          alt="Firebase logo"
          src="../assets/firebase.png"
        />
      </el-card>
      <el-card class="box-card2">
        <h3>
          <label for="javaScript">JavaScript</label>
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
          <label for="javaScript">TypeScript</label>
        </h3>
        <img
          class="box-image"
          id="typeScript"
          alt="typeScript logo"
          src="../assets/typescript.png"
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

    <div id="work">
      <h1><i class="el-icon-s-claim" /> Work</h1>
      <el-card class="box-card3">
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <h3>ポートフォリオサイト</h3>
        <p>
          このWebサイトです。<br />Vue.jsを用いて制作しました。<br />Elementやsmoothscrollerなどを用いています。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/portfolio.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://aya-se.netlify.app/')"
          >Website</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/portfolio')"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <el-tag effect="plain" type="primary" class="tag">Go</el-tag>
        <el-tag effect="plain" type="danger" class="tag">MySQL</el-tag>
        <h3>Twitterクローン</h3>
        <p>
          Twitterを模したWebアプリです。<br />Vue.jsの他にGoやMySQLを用いて、フォロー・いいねなど基本的な機能を実装しました。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/logo.png"
          />
        </p>
        <el-button type="primary" class="button" disabled @click="onClick()"
          >Website</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/naro-portal-client')"
          >GitHub①</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/naro-portal-server')"
          >GitHub②</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <h3>自作曲の紹介Webサイト</h3>
        <p>
          趣味のDTMで制作した自作曲を試聴・DLすることができるWebサイトです。独自の試聴プレイヤーやタグなどによる検索機能にこだわりました。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/ayase-music.png"
          />
        </p>
        <el-button
          type="primary"
          class="button"
          @click="onClick('https://ayase-music.vercel.app/')"
          >Website</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/my-music')"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <el-tag effect="plain" type="warning" class="tag">Firebase</el-tag>
        <h3>ウマ娘レースプランナー</h3>
        <p>
          ウマ娘のレース一覧の閲覧、レース計画のレコメンドができるサイトです。Googleアカウントごとの進捗管理が可能です。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/umamusume-trophies.png"
          />
        </p>
        <el-button
          type="primary"
          class="button"
          @click="onClick('https://umamusume-trophies.vercel.app/')"
          >Website</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/umamusume-trophies')"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <el-tag effect="plain" type="primary" class="tag">Go</el-tag>
        <el-tag effect="plain" type="danger" class="tag">MySQL</el-tag>
        <h3>One Poll</h3>
        <p>
          大学のチーム開発の講義で開発したWebサービスです。投票形式の『Yahoo!知恵袋』を目指しました。講義内で最優秀賞に表彰されました。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/one-poll.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://one-poll.mazrean.com/')"
          >Website</el-button
        >
        <el-button type="info" class="web-button" disabled @click="onClick()"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="primary" class="tag">React.js</el-tag>
        <el-tag effect="plain" type="primary" class="tag">Next.js</el-tag>
        <h3>Wordle Blob Solver</h3>
        <p>
          『Wordle』の答えをかわいいBlobが一緒に考えてくれるサイトです。実装したアルゴリズムの紹介ページ、完全レスポンシブ対応なども特徴です。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/wordle-solver-blob.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://wordle-solver-ayase.vercel.app/')"
          >Website</el-button
        >
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/wordle-solver')"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="primary" class="tag">C++</el-tag>
        <h3>AtCoder (競技プログラミング)</h3>
        <p>
          制作物…とは少し違いますが、プログラミングコンテストによく参加しています。現在のレートはHighest1761(青)です(PASTは88点・上級)。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/atcoder.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://atcoder.jp/users/aya_se')"
          >Website</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="primary" class="tag">C++</el-tag>
        <el-tag effect="plain" type="info" class="tag">Vim Snippet</el-tag>
        <h3>cpp-snippets</h3>
        <p>
          競技プログラミングのコンテストで用いる典型的なデータ構造・アルゴリズム・関数をVisual
          Studioのスニペットとして整備したものです。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/github.png"
          />
        </p>
        <el-button
          type="info"
          class="web-button"
          @click="onClick('https://github.com/aya-se/cpp-snippets')"
          >GitHub</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="danger" class="tag">Python</el-tag>
        <el-tag effect="plain" type="warning" class="tag">Pandas</el-tag>
        <el-tag effect="plain" type="warning" class="tag">scikit-learn</el-tag>
        <el-tag effect="plain" type="warning" class="tag">PyTorch</el-tag>
        <h3>Kaggle (分析コンペ)</h3>
        <p>
          データ分析のコンペに参加しようと思っています。Titanicのチュートリアル等をやりました。今後はコンペに参加していきたいと思います。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/kaggle.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://qiita.com/aya_se')"
          >Website</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="primary" class="tag">C++</el-tag>
        <el-tag effect="plain" type="success" class="tag">Vue.js</el-tag>
        <h3>Qiita (記事投稿)</h3>
        <p>
          今後、何か制作などをした際は不定期に記事を投稿していきたいと思っています。まだほとんど書いていません。
        </p>
        <p>
          <img
            class="box-image"
            id="vue"
            alt="vue logo"
            src="../assets/qiita.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://qiita.com/aya_se')"
          >Website</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="info" class="tag">その他</el-tag>
        <h3>東京工業大学デジタル創作同好会traP</h3>
        <p>
          大学で所属しているサークルです。主に趣味のDTMや競技プログラミング等を中心に活動しています。
        </p>
        <p>
          <img
            class="box-image"
            id="traP"
            alt="traP logo"
            src="../assets/traP.png"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://trap.jp/')"
          >Website</el-button
        >
      </el-card>
      <el-card class="box-card3">
        <el-tag effect="plain" type="primary" class="tag">NLP</el-tag>
        <el-tag effect="plain" type="info" class="tag">その他</el-tag>
        <h3>岡崎研究室 (Okazaki Lab)</h3>
        <p>
          大学の学士特定課題研究で所属している研究室です。自然言語処理(NLP)の勉強・研究を進めていく予定です。
        </p>
        <p>
          <img
            class="box-image"
            id="lab"
            alt="lab logo"
            src="../assets/okazaki-lab.svg"
          />
        </p>
        <el-button
          type="primary"
          class="web-button"
          @click="onClick('https://www.nlp.c.titech.ac.jp/index.ja.html')"
          >Website</el-button
        >
      </el-card>
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
import activities from "@/data/activities.json";
import abouts from "@/data/abouts.json";
import accounts from "@/data/accounts.json";
export default defineComponent({
  name: "HomeView",
  data() {
    return {
      abouts: abouts,
      activities: activities,
      accounts: accounts
    };
  },
  components: { CustomHeader, AboutCard, AccountCard },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    }
  }
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
@media screen and (max-width: 480px) {
  .box-card {
    display: inline-block;
    width: 90%;
    height: auto;
    margin: 10px;
  }
  .box-card3 {
    display: inline-block;
    width: 90%;
    height: auto;
    margin: 10px;
  }
}
@media screen and (min-width: 480px) {
  .box-card {
    display: inline-block;
    width: 400px;
    height: auto;
    margin: 10px;
  }
  .box-card3 {
    display: inline-block;
    width: 400px;
    height: auto;
    margin: 10px;
  }
}
.box-card2 {
  display: inline-block;
  width: 260px;
  height: auto;
  margin: 10px;
}
.box-image {
  height: 160px;
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
.web-button {
  margin-bottom: 5px !important;
}
#lab {
  width: 90%;
}
</style>
