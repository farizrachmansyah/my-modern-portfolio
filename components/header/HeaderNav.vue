<template>
  <nav>
    <ul class="list-nostyle flex v-center">
      <li
        v-for="(nav, i) in navData"
        :key="i"
      >
        <nuxt-link :to="nav.url">
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

</style>
