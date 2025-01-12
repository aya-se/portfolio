<template>
  <div class="wrapper">
    <slot />
  </div>
</template>

<style lang="scss">
.wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  margin: 10px 20px 30px;
}
</style>
