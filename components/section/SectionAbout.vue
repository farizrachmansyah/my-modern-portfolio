<template>
  <div>
    <SectionHeading title="Who Am I" />
    <div class="inner">
      <p class="inner-text">
        Alright, let me introduce myself. I'm Fariz Rachmansyah and you can
        call me Fariz. At this moment, I'm a software engineer that
        focuses on web development with 3 years of total experience and nearly
        1 year of mature experience in an innovative startup environment.
      </p>
      <p class="inner-text">
        I am proficient in JavaScript, front-end frameworks, git workflows,
        web-based application development, and more. I also a fast-paced
        learner and a dedicated person in pursuing touchpoint. I've built many
        mini-projects and a few noteworthy ones.
      </p>
      <p class="inner-text">
        Behind my tech-savvy soul, I also enjoys traveling, solving problems,
        and discovering new ideas along the way.
      </p>
      <p class="inner-text">
        These are some technologies that I've recently used often:
      </p>
      <ul class="list-nostyle inner-list">
        <li class="item">
          JavaScript ES6+
        </li>
        <li class="item">
          Axios
        </li>
        <li class="item">
          Nuxt.js
        </li>
        <li class="item">
          Git
        </li>
        <li class="item">
          Vuex
        </li>
        <li class="item">
          SCSS
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.inner-text {
  font-size: 16px;

  @media #{$medium} {
    font-size: 20px;
  }
}

.inner-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(140px, 200px));
  gap: 10px;
  font-family: $font_serif;
  font-size: 10px;

  @media #{$medium} {
    font-size: 14px;
  }

  .item::before {
    content: '\2713';
    margin-right: 6px;
    color: $red;
  }
}
</style>
