<template>
  <main class="site-main">
    <section id="home" class="home">
      <h1 class="home-title text-red">
        Hi folks, my name is
      </h1>
      <h2 class="home-name">
        Fariz Rachmansyah.
      </h2>
      <h3 class="home-tagline">
        I build things to be rock 'n rollin'.
      </h3>
      <p class="home-desc">
        I'm a software engineer that passionate in crafting digital products. Currently, I'm focused on building various types of high-performance frontend web applications at
        <a href="https://suitmedia.com" target="_blank" class="text-red">Suitmedia</a>.
      </p>
      <button class="btn--ghost-red mt-60 pv-20 ph-28">
        Get in touch
      </button>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>

<style lang="scss" scoped>
.site-main {
  min-height: 100vh;
  padding: 0 150px;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;

  &-title, &-name, &-tagline, &-desc {
    margin: 0;
  }
  &-name, &-tagline {
    line-height: 1;
    font-family: $font_serif;
    font-size: clamp(24px, 8vw, 48px);
    font-weight: 400;
  }

  &-title {
    margin-bottom: 20px;
    font-family: $font_mono;
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
  }

  &-name {
    color: $primary;
  }

  &-tagline {
    margin-top: 10px;
  }

  &-desc {
    line-height: 26px;
    max-width: 600px;
    margin-top: 20px;
    font-size: 20px;

    a::before, a::after {
      background-color: $primary;
    }
  }
}
</style>
