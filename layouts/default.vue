<template>
  <div id="app">
    <header id="header" :class="{ 'scroll-up': onScrollingUp, 'scroll-down': onScrollingDown }">
      <div class="header-wrapper flex f-space-between v-center">
        <HeaderLogo />
        <div class="header-nav">
          <button
            class="btn--ghost-red nav-toggle"
            type="button"
            @click="showNav = !showNav"
          >
            <font-awesome-icon :icon="['fa-solid', showNav ? 'fa-xmark' : 'fa-bars-staggered']" />
          </button>
          <HeaderNav :is-open="showNav" />
        </div>
      </div>
    </header>
    <SidebarLeft />
    <SidebarRight />
    <div class="content" :class="{ 'nav-opened': showNav }">
      <nuxt />
    </div>
    <footer id="footer">
      <ul class="list-nostyle side-list">
        <li>
          <a href="https://github.com/farizrachmansyah" target="_blank" class="link">
            <font-awesome-icon icon="fa-brands fa-github" />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/farizrachmansyah" target="_blank" class="link">
            <font-awesome-icon icon="fa-brands fa-linkedin-in" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/farizrachmansyah/" target="_blank" class="link">
            <font-awesome-icon icon="fa-brands fa-instagram" />
          </a>
        </li>
        <li>
          <a href="https://open.spotify.com/user/farizrachmansyah" target="_blank" class="link">
            <font-awesome-icon icon="fa-brands fa-spotify" />
          </a>
        </li>
      </ul>
      <p class="mt-0 mb-10">
        Design inspired by Brittany Chiang
      </p>
      <p class="m-0">
        Absolutely built by me
      </p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      onScrollingUp: false,
      onScrollingDown: false,
      showNav: false
    }
  },
  watch: {
    showNav () {
      if (this.showNav) {
        document.getElementsByTagName('body')[0].style.overflow = 'hidden'
      } else {
        document.getElementsByTagName('body')[0].style.overflow = 'initial'
      }
    }
  },
  created () {
    this.$nuxt.$on('goToNavSection', (id) => {
      this.goToNavSection(id)
    })
  },
  mounted () {
    let lastScrollTop = window.pageYOffset || document.documentElement.scrollTop
    window.addEventListener('scroll', () => {
      const currScrollTop = window.pageYOffset || document.documentElement.scrollTop
      if (currScrollTop < lastScrollTop) {
        this.onScrollingDown = false
        this.onScrollingUp = true

        if (currScrollTop <= 0) {
          this.onScrollingUp = false
          this.onScrollingDown = false
        }
      } else if (currScrollTop > 50) {
        this.onScrollingUp = false
        this.onScrollingDown = true
      }
      lastScrollTop = currScrollTop
    })
  },
  methods: {
    goToNavSection (id) {
      if (this.showNav) {
        this.showNav = false
        setTimeout(() => {
          document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
        }, 300)
      } else {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  height: 70px;
  background-color: $black;
  transition: all 0.3s ease-out;

  @media #{$medium} {
    height: 100px;
  }

  &.scroll-up {
    height: 70px;
    transform: none;
    box-shadow: 0 10px 30px -15px #760a00;
  }
  &.scroll-down {
    transform: translate3d(0, -100%, 0);
  }

  .header-wrapper {
    height: 100%;
    padding: 0 25px;

    @media #{$medium} {
      padding: 0 50px;
    }
  }

  .nav-toggle {
    position: relative;
    z-index: 2;
    border: none;
    padding: 0;
    font-size: 26px;

    &:hover, &:focus {
      background: none;
    }

    @media #{$medium} {
      display: none;
    }
  }
}

.content {
  margin-bottom: 100px;

  &.nav-opened {
    filter: blur(3px);
  }
}

#footer {
  padding: 24px;
  font-family: $font_serif;
  font-size: 10px;
  text-align: center;

  @media #{$medium} {
    font-size: 12px;
  }

  .side-list {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    margin-bottom: 20px;

    .link {
      display: inline-block;
      padding: 12px 10px;
      font-size: 20px;
      transition: all 0.2s ease-in-out;

      &::after, &::before {
        all: unset;
      }

      &:hover {
        color: $red;
        transform: translateY(-10%);
      }
    }

    @media #{$medium} {
      display: none;
    }
  }
}
</style>
