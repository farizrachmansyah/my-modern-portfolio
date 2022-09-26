<template>
  <div id="app">
    <header id="header" :class="{ 'scroll-up': onScrollingUp, 'scroll-down': onScrollingDown }">
      <div class="header-wrapper flex f-space-between v-center">
        <HeaderLogo />
        <HeaderNav :nav-data="menus" />
      </div>
    </header>
    <SidebarLeft />
    <SidebarRight />
    <div class="content">
      <nuxt />
    </div>
    <footer id="footer">
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
      menus: [
        {
          name: 'About',
          url: '/about'
        },
        {
          name: 'Experience',
          url: '/experience'
        },
        {
          name: 'Project',
          url: '/project'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    }
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
  height: 100px;
  background: transparent;
  transition: all 0.3s ease-out;

  &.scroll-up {
    height: 70px;
    transform: none;
    background-color: rgba(19, 19, 19, 0.85);
    box-shadow: 0 10px 30px -15px #760900;
    backdrop-filter: blur(12px);
  }
  &.scroll-down {
    transform: translate3d(0, -100%, 0);
  }

  .header-wrapper {
    height: 100%;
    padding: 0 50px;
  }
}

.content {
  margin-bottom: 100px;
}

#footer {
  padding: 24px;
  font-family: $font_serif;
  font-size: 12px;
  text-align: center;
}
</style>
