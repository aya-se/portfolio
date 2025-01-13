<template>
  <footer>
    <div class="footer-copyright">
      <p>
        Copyright&nbsp;©&nbsp;Kakeru&nbsp;HATTORI.&nbsp;All&nbsp;Rights&nbsp;Reserved.
      </p>
    </div>
  </footer>
</template>
<style lang="scss">
footer {
  width: 100%;
  background: white;
  border-top: 1px solid #ddd;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  .footer-copyright {
    color: #333333;
    font-size: 14px;
    font-family: "Open Sans", serif;
    padding: 10px 20px 10px;
  }
}
</style>
<script>
export default {
  name: "FooterComponent",
};
</script>
