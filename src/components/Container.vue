<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss">
.container {
  width: 100%;
  overflow: hidden;
  padding: 0 20px;
  margin: 0 20px;
}
@media screen and (max-width: 768px) {
  .container {
    padding: 0 10px;
    margin: 0;
  }
}
</style>
