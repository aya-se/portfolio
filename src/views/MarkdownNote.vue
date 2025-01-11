<template>
  <MarkdownNote />
</template>

<script>
import { defineComponent } from "vue";
import MarkdownNote from "/src/notes/sample.md";
import "highlight.js/styles/github-dark.css";
import hljs from "highlight.js";

export default defineComponent({
  name: "MarkdownNoteView",
  data() {
    return {
      showIcon: false,
    };
  },
  components: {
    MarkdownNote,
  },
  mounted() {
    const links = this.$el.querySelectorAll(".markdown-body a");
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    });
    // コードブロックの編集
    const preBlocks = this.$el.querySelectorAll("pre");
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
          //alert("コードをコピーしました！");
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
  },
  methods: {
    onClick(url) {
      window.open(url, "_blank");
    },
  },
});
</script>
<style lang="scss">
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
