<template>
  <div id="app">
    <header id="header">
      <div class="header-wrapper flex f-space-between v-center">
        <HeaderLogo />
        <HeaderNav :nav-data="navData" />
      </div>
    </header>
    <SidebarLeft />
    <SidebarRight />
    <nuxt />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      navData: [
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
          name: 'Tools',
          url: '/tools'
        },
        {
          name: 'Contact',
          url: '/contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
#header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100px;

  .header-wrapper {
    height: 100%;
    padding: 0 50px;
  }
}
</style>
