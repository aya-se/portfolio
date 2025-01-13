<template>
  <Container>
    <Wrapper>
      <Subtitle icon="bi-info-circle-fill" text="プロフィール" />
      <div class="about-cards-container">
        <div class="about-cards">
          <AboutCard
            v-for="(item, index) in abouts"
            :key="index"
            :title="item.title"
            :text="item.text"
            :icon="item.icon"
            :color="item.color"
          />
        </div>
      </div>
    </Wrapper>
    <Wrapper>
      <Subtitle icon="bi-chat-square-dots-fill" text="連絡先" />
      <p class="contact-item">
        <i class="bi bi-envelope-fill" />&nbsp;&nbsp;kakkeno1@gmail.com
      </p>
      <p class="contact-item">
        <i class="bi bi-twitter" />&nbsp;&nbsp;@ayase_lab
      </p>
      <p class="sns-links">
        <a
          href="https://x.com/ayase_lab"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
        >
          <i class="bi bi-twitter-x" style="color: #0f1419"
        /></a>
        <a
          href="https://github.com/aya-se"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
          ><i class="bi bi-github" style="color: #181717"
        /></a>
        <a
          href="https://www.linkedin.com/in/kakeru-hattori-973404240/"
          class="sns-link"
          target="_blank"
          rel="noreferrer"
          ><i class="bi bi-linkedin" style="color: #0077b5"
        /></a>
      </p>
    </Wrapper>
  </Container>
</template>

<script setup>
import Container from "/src/components/Container.vue";
import Wrapper from "/src/components/Wrapper.vue";
import AboutCard from "/src/components/AboutCard.vue";
import Subtitle from "/src/components/Subtitle.vue";
import abouts from "/src/data/abouts.json";
</script>
<style lang="scss">
.about-cards-container {
  display: flex;
  justify-content: center;
  width: 100%;
  .about-cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 1400px;
  }
}
.sns-links {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  .sns-link {
    text-decoration: none;
    margin: 0 10px;
    font-size: 32px;
  }
}
.contact-item {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  width: 100%;
  margin-left: 52px;
  color: #333333;
  letter-spacing: 0.05em;
  font-weight: normal;
}
@media screen and (max-width: 768px) {
  .sns-links {
    margin: 10px 0px;
    .sns-link {
      font-size: 28px;
    }
  }
  .contact-item {
    margin: 10px 0px 10px 32px;
  }
}
</style>
