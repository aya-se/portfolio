<template>
  <Container>
    <div class="post-layout">
      <Wrapper class="post-content">
        <Wrapper class="post-info" v-if="postData">
          <h1>{{ postData.title }}</h1>
          <div class="post-date">
            <i class="bi bi-calendar-check-fill" />{{ postData.date }}
          </div>
          <div class="post-tags">
            <i class="bi bi-tags-fill" />
            <span v-for="tag in postData.tags" :key="tag" class="post-tag">
              {{ tag }}
            </span>
          </div>
        </Wrapper>
        <component :is="markdownFile" v-if="markdownFile" />
      </Wrapper>
      <aside class="post-aside">
        <div class="post-toc">
          <h2>目次</h2>
          <ul>
            <li
              v-for="(h, idx) in headings"
              :key="idx"
              :style="{
                marginLeft: (h.level - 1) * 10 + 'px',
                fontSize: 18 - h.level * 2 + 'px',
              }"
            >
              <a :href="`#${h.id}`" @click.prevent="scrollToHeading(h.id)">{{
                h.text
              }}</a>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </Container>
</template>

<script setup>
import Container from "../components/Container.vue";
import Wrapper from "../components/Wrapper.vue";
import { computed, onMounted, nextTick, shallowRef, ref } from "vue";
import { useRoute } from "vue-router";
import hljs from "highlight.js";
import "highlight.js/styles/github-dark.css";
import notes from "../data/notes.json";

const postData = computed(() => notes.find((note) => note.id === id));

const route = useRoute();
const id = route.params.id || "abci-introduction-vscode-anaconda";

const markdownFile = shallowRef(null);
const headings = ref([]);

onMounted(async () => {
  const markdown = await import(`../notes/${id}.md`);
  markdownFile.value = markdown.default;

  await nextTick();

  setLinksTargetBlank();
  setupPreBlocks();
  collectHeadings();
});

const setLinksTargetBlank = () => {
  const links = document.querySelectorAll(".markdown-body a");
  links.forEach((link) => {
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener noreferrer");
  });
};

const setupPreBlocks = () => {
  const preBlocks = document.querySelectorAll("pre");
  preBlocks.forEach((pre) => {
    const copyIcon = document.createElement("i");
    copyIcon.className = "bi bi-copy copy-icon";
    copyIcon.style = `
      position: absolute;
      top: 10px;
      right: 15px;
      font-size: 20px;
      color: #fff;
      cursor: pointer;
    `;

    copyIcon.addEventListener("click", (e) => {
      const preElement = e.target.parentElement;
      const codeElement = preElement.querySelector("code");
      const codeContent = codeElement ? codeElement.textContent : "";
      navigator.clipboard.writeText(codeContent).then(() => {
        const copiedMessage = document.createElement("span");
        copiedMessage.textContent = "コピーしました！";
        copiedMessage.className = "copied-message";

        copiedMessage.style = `
          position: absolute;
          top: 5px;
          right: 55px;
          padding: 5px 10px;
          border-radius: 5px;
          background-color: #252f3e;
          color: #fff;
          font-size: 14px;
          z-index: 100;
        `;
        preElement.appendChild(copiedMessage);

        setTimeout(() => {
          preElement.removeChild(copiedMessage);
        }, 1500);
      });
    });

    const oldIcon = pre.querySelector(".copy-icon");
    if (oldIcon) {
      pre.removeChild(oldIcon);
    }
    pre.appendChild(copyIcon);

    const code = pre.querySelector("code");
    if (!code || code.getAttribute("data-highlighted")) return;
    hljs.highlightElement(code);
  });
};

const collectHeadings = () => {
  const headingEls = document.querySelectorAll(
    ".markdown-body h1, .markdown-body h2, .markdown-body h3"
  );
  const results = [];

  headingEls.forEach((el, index) => {
    const level = parseInt(el.tagName[1], 10);
    el.id = `heading-${index}`;
    const text = el.textContent.trim();
    results.push({ level, text, id: el.id });
  });

  headings.value = results;
};

const scrollToHeading = (id) => {
  const target = document.getElementById(id);
  if (!target) return;

  const offset = 70;
  const y = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({ top: y, behavior: "smooth" });
};
</script>
<style lang="scss">
.post-layout {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  .post-content {
    width: calc(100% - 330px);
  }
  .post-aside {
    position: relative;
    width: 250px;
    padding: 10px 0 0 20px;
    margin: 30px 0 30px 20px;
    border-left: 1px solid #ddd;
    .post-toc {
      position: fixed;
      top: 100px;
      text-align: left;
      width: 250px;
      h2 {
        font-size: 20px;
        margin: 20px 0;
      }
      ul {
        list-style: none;
        padding: 0;
        li {
          margin: 10px 0;
          a {
            text-decoration: none;
            color: #333;
            &:hover {
              color: #ed7100;
            }
          }
        }
      }
    }
  }
}
.post-info {
  text-align: left;
  i {
    margin-right: 10px;
  }
  .post-date {
    width: 100%;
    margin: 10px 0;
  }
  .post-tags {
    width: 100%;
    margin: 10px 0;
    .post-tag {
      font-size: 14px;
      display: inline-block;
      margin-right: 10px;
      padding: 2px 10px;
      background-color: #ededed;
      border-radius: 5px;
    }
  }
}
.markdown-body {
  overflow: hidden;
  font-size: 17px;
  padding: 10px 20px 30px;
  text-align: left;
  line-height: 200%;
  h1 {
    font-size: 28px;
    padding: 10px 0;
    margin: 20px 0;
    border-bottom: 1px solid #ddd;
  }
  h2 {
    font-size: 24px;
    padding: 5px 0 5px 16px;
    margin: 25px 0 10px;
    border-left: 6px solid #ed7100;
  }
  a {
    color: #ed7100;
  }
  code {
    font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace,
      Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    color: #e83e8c;
    background-color: #f6f8fa;
    border-radius: 5px;
    padding: 2px 5px;
    margin: 0 5px;
  }
  pre {
    position: relative;
    background-color: #252f3e;
    border-radius: 5px;
    padding: 20px;
    margin: 20px 0;
    overflow-x: auto;
    code {
      color: #fff;
      background-color: transparent;
      font-size: 15px;
      border-radius: 0;
      border: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
