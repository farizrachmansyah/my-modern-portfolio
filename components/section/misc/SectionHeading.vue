<template>
  <h2 class="section-title flex v-center text-caps" :class="{'contact-section': isContact}">
    <div class="section-title-icon mr-12">
      &#9760;
    </div>
    <div class="section-title-text">
      {{ title }}
    </div>
  </h2>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    isContact: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.section-title {
  line-height: 0.4;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: $font_serif;
  font-size: 24px;

  &.contact-section {
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 16px;
  }

  &-icon {
    font-size: 2.5em;
    color: $red;
  }

  &-text {
    color: $red;
  }
}
</style>
