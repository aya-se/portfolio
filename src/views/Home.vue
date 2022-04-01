<template>
  <div id="home">
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
    <a
      class="link-content"
      href="#home"
      v-smooth-scroll="{ duration: 800, offset: -100 }"
    >
      <h1 id="top-title">aya_se's portfolio</h1></a
    >
    <img class="top-icon" src="../assets/icon.png" />
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
            <label for="hobby"><i class="el-icon-s-platform" /> 趣味</label>
          </h3>
          <p id="hobby">
            DTM, 競技プログラミング, Minecraft, Youtube
          </p>
        </el-card>
        <el-card class="box-card">
          <h3>
            <label for="certification"
              ><i class="el-icon-success" /> 資格</label
            >
          </h3>
          <p id="certification">
            英検2級, 基本情報技術者, G検定, PAST上級
          </p>
        </el-card>
        <el-card class="box-card">
          <h3>
            <label for="interest"
              ><i class="el-icon-star-off" /> 興味・関心</label
            >
          </h3>
          <p id="interest">
            機械学習, 自然言語処理, アルゴリズム etc.
          </p>
        </el-card>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
      <div id="account">
        <h1><i class="el-icon-menu" /> Account</h1>
        <el-card class="box-card2">
          <el-link target="_blank" href="https://twitter.com/Hakuba_snow"
            ><h3>Twitter</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/twitter.png" />
          </p>
        </el-card>
        <el-card class="box-card2">
          <el-link target="_blank" href="https://github.com/aya-se"
            ><h3>GitHub</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/github.png" />
          </p>
        </el-card>
        <el-card class="box-card2">
          <el-link target="_blank" href="https://qiita.com/aya_se"
            ><h3>Qiita</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/qiita.png" />
          </p>
        </el-card>
        <el-card class="box-card2">
          <el-link target="_blank" href="https://atcoder.jp/users/aya_se"
            ><h3>AtCoder</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/atcoder.png" />
          </p>
        </el-card>
        <el-card class="box-card2">
          <el-link target="_blank" href="https://www.kaggle.com/ayasse"
            ><h3>Kaggle</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/kaggle.png" />
          </p>
        </el-card>
        <el-card class="box-card2">
          <el-link
            target="_blank"
            href="https://www.youtube.com/channel/UCW4FH8oKhHE8vIRnr0StJ8g"
            ><h3>Youtube</h3></el-link
          >
          <p>
            <img class="box-image" src="../assets/youtube.png" />
          </p>
        </el-card>
      </div>
    </transition>
    <transition name="el-fade-in-linear">
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
    </transition>
    <transition name="el-fade-in-linear">
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
    </transition>
    <transition name="el-fade-in-linear">
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
          <el-tag effect="plain" type="warning" class="tag"
            >scikit-learn</el-tag
          >
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
    </transition>
    <transition name="el-fade-in-linear">
      <div id="contact">
        <h1><i class="el-icon-s-comment" /> Contact</h1>
        GmailもしくはTwitterがおそらく一番反応早いと思うので、載せておきます。
        <p><b>Gmail： </b>kakkeno1@gmail.com</p>
        <p><b>Twitter： </b>@Hakuba_snow</p>
      </div>
    </transition>
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
export default {
  name: "Home",
  data() {
    return {
      activities: [
        {
          content: "東京工業大学 情報理工学院に入学",
          timestamp: "2019年4月初旬",
          size: "large",
          color: "gray"
        },
        {
          content: "地元の個別指導塾で塾講師のバイトを開始",
          timestamp: "2019年8月上旬～2020年1月上旬",
          size: "large",
          color: "gray"
        },
        {
          content: "基本情報技術者試験に合格",
          timestamp: "2019年10月初旬",
          size: "large",
          color: "gray"
        },
        {
          content: "AtCoderのレートが水色(1200)に到達",
          timestamp: "2019年11月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "教育系の会社で事務(データ分析・資料作成等)のバイトを開始",
          timestamp: "2019年12月上旬～2022年3月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "G検定に合格",
          timestamp: "2020年3月上旬",
          size: "large",
          color: "gray"
        },
        {
          content: "東京工業大学 情報理工学院 情報工学系に進学",
          timestamp: "2020年4月初旬",
          size: "large",
          color: "gray"
        },
        {
          content: "PAST(アルゴリズム実技検定)上級を取得",
          timestamp: "2021年6月上旬",
          size: "large",
          color: "gray"
        },
        {
          content: "当ポートフォリオサイトを開設",
          timestamp: "2020年8月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "『自作曲公開Webサイト』を制作開始",
          timestamp: "2020年8月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "ICPC国内予選に参加(チーム戦)",
          timestamp: "2020年11月上旬",
          size: "large",
          color: "gray"
        },
        {
          content: "AtCoderのレートが青色(1600)に到達",
          timestamp: "2020年12月中旬",
          size: "large",
          color: "gray"
        },
        {
          content: "GCI2020-winterを修了",
          timestamp: "2021年3月上旬",
          size: "large",
          color: "gray"
        },
        {
          content: "M3(同人音楽即売会)に参加",
          timestamp: "2021年4月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "東京海上日動システムズのインターン(1Day)に参加",
          timestamp: "2021年5月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "『ウマ娘レースプランナー』を制作",
          timestamp: "2021年8月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "Mynavi Engineer Internship 2021(4Day)に参加 (最優秀賞)",
          timestamp: "2021年9月下旬",
          size: "large",
          color: "gray"
        },
        {
          content:
            "『One Poll』を大学の講義でチーム開発 (主にフロントエンド担当)",
          timestamp: "2021年12月上旬～2022年1月下旬",
          size: "large",
          color: "gray"
        },
        {
          content: "『Wordle Blob Solver』を製作開始",
          timestamp: "2022年2月上旬",
          size: "large",
          color: "gray"
        },
        {
          content:
            "株式会社マイナビ就業型インターンシップ(フロントエンド)に参加",
          timestamp: "2022年2月上旬～6月下旬(予定)",
          size: "large",
          color: "gray"
        },
        {
          content: "大学の学士特定課題研究で岡崎研究室(Okazaki Lab)に配属",
          timestamp: "2022年4月上旬",
          size: "large",
          color: "gray"
        }
      ]
    };
  },
  components: {},
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    }
  }
};
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
