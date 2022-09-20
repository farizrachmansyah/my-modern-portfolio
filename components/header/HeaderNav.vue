<template>
  <nav>
    <ul class="list-nostyle flex v-center">
      <li
        v-for="(nav, i) in navData"
        :key="i"
        class="mr-12"
      >
        <nuxt-link :to="nav.url" class="nav-link pv-8 ph-12">
          {{ nav.name }}
        </nuxt-link>
      </li>
      <li>
        <button class="btn--ghost-red">
          Resume
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    navData: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-link {
  display: inline-block;
  font-family: $font_mono;
}
</style>
