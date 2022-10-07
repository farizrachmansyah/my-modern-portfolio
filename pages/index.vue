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
        I build things that rock 'n rollin'.
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
      <button class="btn--ghost-red home-btn pv-20 ph-28" @click.prevent="goToContact()">
        Get in touch
      </button>
    </section>

    <section id="about" class="site-section about">
      <SectionAbout />
    </section>
    <section id="experience" class="site-section experience">
      <SectionExperience />
    </section>
    <section id="project" class="site-section project">
      <SectionProject />
    </section>
    <section id="other-projects" class="site-section other-projects">
      <SectionOtherProjects />
    </section>
    <section id="contact" class="site-section contact">
      <SectionContact />
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
  },
  methods: {
    goToContact () {
      document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>

<style lang="scss" scoped>
.site-main {
  min-height: 100vh;
  padding: 0 25px;

  @media #{$small} {
    padding: 0 50px;
  }
  @media #{$medium} {
    padding: 0 100px;
  }
  @media #{$large} {
    padding: 0 150px;
  }
}

.site-section {
  max-width: 1000px;
  margin: 0 auto;
  padding: 100px 0;

  &.home {
    padding: 0;
  }
  &.about {
    max-width: 700px;
  }
  &.experience {
    max-width: 850px;
  }
  &.contact {
    max-width: 550px;
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
    font-size: clamp(20px, 8vw, 60px);
    // font-size: 60px;
  }

  &-title {
    margin-bottom: 20px;
    font-family: $font_serif;
    font-size: clamp(10px, 3.5vw, 16px);
    font-weight: 400;
  }

  &-name {
    color: $secondary;
  }

  &-tagline {
    margin-top: 10px;
    max-width: 800px;
  }

  &-desc {
    max-width: 600px;
    margin-top: 20px;
    font-size: clamp(16px, 4vw, 20px);
    // font-size: 20px;

    a::before,
    a::after {
      background-color: $primary;
    }
  }

  &-btn {
    margin-top: 60px;
  }
}
</style>
