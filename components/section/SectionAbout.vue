<template>
  <div>
    <SectionHeading title="Who Am I" />
    <div class="inner">
      <p v-for="desc in descriptions" :key="desc.sys.id" class="inner-text">
        {{ desc.fields.text }}
      </p>
      <ul class="list-nostyle inner-list">
        <li v-for="tool in tools" :key="tool.sys.id" class="item">
          {{ tool.fields.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      descriptions: (state) => {
        return state.cms.content.about
      },
      tools: (state) => {
        return state.cms.content.tools
      }
    })
  }
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
