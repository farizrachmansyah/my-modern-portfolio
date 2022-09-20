<template>
  <main class="site-main">
    <section id="home" class="home">
      <h1 class="home-title text-red">
        Hi folks! Let me introduce you to me,
      </h1>
      <h2 class="home-name">
        Fariz Rachmansyah.
      </h2>
      <h3 class="home-tagline">
        Just an ordinary person.
      </h3>
      <p class="home-desc">
        I'm a software engineer that passionate in crafting digital products. Currently, I'm focused on building various types of high-performance frontend web applications at
        <a href="https://suitmedia.com" target="_blank" class="text-red">Suitmedia</a>.
      </p>
      <button class="btn--ghost-red mt-48 pv-20 ph-28">
        Get in touch!
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
  max-width: 1000px;
  margin: 0 auto;

  &-title, &-name, &-tagline, &-desc {
    margin: 0;
  }
  &-name, &-tagline {
    font-size: clamp(40px, 8vw, 80px);
    font-family: $font_serif;
    font-weight: 400;
  }

  &-title {
    margin-bottom: 20px;
    font-family: $font_mono;
    font-size: clamp(14px, 5vw, 16px);
    font-weight: 400;
  }

  &-name {
    line-height: 1.1;
    color: $primary;
  }

  &-tagline {
    line-height: 0.9;
    margin-top: 10px;
  }

  &-desc {
    line-height: 26px;
    max-width: 600px;
    margin-top: 48px;
    font-size: 20px;

    a::before, a::after {
      background-color: $primary;
    }
  }
}
</style>
