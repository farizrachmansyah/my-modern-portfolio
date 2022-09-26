<template>
  <div class="logo">
    <nuxt-link to="/" @mouseover.native="metalOn = true" @mouseleave.native="metalOn = false">
      {{ metalOn ? '&#129311;' : '&#129304;' }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      metalOn: false
    }
  }
}
</script>

<style lang="scss" scoped>
.logo a {
  font-size: 32px;

  @media #{$medium} {
    font-size: 42px;
  }

  &::after, &::before {
    all: unset;
  }
}
</style>
