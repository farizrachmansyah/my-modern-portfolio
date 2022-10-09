<template>
  <nav :class="{'nav-opened': isOpen}">
    <ul class="list-nostyle nav-wrapper">
      <li
        v-for="menu in menus"
        :key="menu.sys.id"
        class="mr-12"
      >
        <button class="btn nav-link pv-8 ph-12" @click.prevent="$nuxt.$emit('goToNavSection', menu.fields.name)">
          {{ menu.fields.name }}
        </button>
      </li>
      <li>
        <button class="btn--ghost-red" title="Download Resume" @click.prevent="downloadResume()">
          Resume
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapState({
      menus: (state) => {
        return state.cms.content.menu
      },
      resume: (state) => {
        return state.cms.content.resume
      }
    })
  },
  methods: {
    async downloadResume () {
      const blob = await fetch(this.resume.fields.file.url).then(res => res.blob())
      const link = document.createElement('a')
      link.href = URL.createObjectURL(blob)
      link.download = this.resume.fields.file.fileName
      link.click()
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
  border: none;
  background: none;
  font-family: $font_serif;
  font-size: 12px;
  text-transform: capitalize;
  color: $primary;

  &:hover {
    color: $red;
  }
}
</style>
