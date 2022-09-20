<template>
  <div id="app">
    <header>
      <div class="container flex f-space-between v-center">
        <HeaderLogo />
        <HeaderNav :nav-data="navData" />
      </div>
    </header>
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
</style>
