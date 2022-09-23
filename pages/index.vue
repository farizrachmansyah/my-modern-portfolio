<template>
  <main class="site-main">
    <section id="home" class="site-section home">
      <h1 class="home-title text-red">
        Hi folks, my name is
      </h1>
      <h2 class="home-name">
        Fariz Rachmansyah.
      </h2>
      <h3 class="home-tagline">
        <span class="d-block">I build things that</span>
        <span>rock 'n rollin'.</span>
      </h3>
      <p class="home-desc">
        I'm a software engineer that passionate in crafting digital products.
        Currently, I'm focused on building various types of high-performance
        frontend web applications at
        <a
          href="https://suitmedia.com"
          target="_blank"
          class="text-red"
        >Suitmedia</a>.
      </p>
      <button class="btn--ghost-red mt-60 pv-20 ph-28">
        Get in touch
      </button>
    </section>

    <section v-for="item in menus" :id="item.title" :key="item.id" :class="['site-section', item.title]">
      <SectionAbout v-if="item.title === 'about'" />
      <SectionExperience v-else-if="item.title === 'experience'" />
      <SectionProject v-else-if="item.title === 'project'" />
      <!-- <SectionContact v-else /> -->
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      menus: [
        {
          id: '1',
          title: 'about'
        },
        {
          id: '2',
          title: 'experience'
        },
        {
          id: '3',
          title: 'project'
        },
        {
          id: '4',
          title: 'contact'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.site-main {
  min-height: 100vh;
  padding: 0 150px;
}

.site-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  &.about {
    max-width: 700px;
  }
  &.experience {
    max-width: 850px;
  }
}

.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;

  &-title,
  &-name,
  &-tagline,
  &-desc {
    margin: 0;
  }
  &-name,
  &-tagline {
    line-height: 1;
    font-family: $font_serif;
    font-weight: 400;
  }

  &-title {
    margin-bottom: 20px;
    font-family: $font_serif;
    font-size: 16px;
    font-weight: 400;
  }

  &-name {
    color: $secondary;
    font-size: 60px;
  }

  &-tagline {
    margin-top: 10px;
    font-size: 60px;
  }

  &-desc {
    max-width: 600px;
    margin-top: 20px;
    font-size: 20px;

    a::before,
    a::after {
      background-color: $primary;
    }
  }
}
</style>
