<template>
  <nav :class="{'nav-opened': isOpen}">
    <ul class="list-nostyle nav-wrapper">
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
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  right: 0;
  top: 0;
  transform: translateX(100%);
  background: #131313;
  height: 100%;
  width: 77.5%;
  transition: all 0.3s ease-in-out;

  &.nav-opened {
    transform: none;
  }

  @media #{$medium} {
    all: unset;
    display: block;
  }
}

.nav-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 24px;
  height: 100%;

  @media #{$medium} {
    flex-direction: row;
    gap: unset;
    height: unset;
  }
}

.nav-link {
  display: inline-block;
  font-family: $font_serif;
  font-size: 12px;
}
</style>
