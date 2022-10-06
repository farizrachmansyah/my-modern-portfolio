<template>
  <div>
    <h2 class="m-0 text-center text-secondary">
      Other Noteworthy Projects
    </h2>
    <ul class="list-nostyle inner">
      <li v-for="item in projects" :key="item.sys.id">
        <a :href="item.fields.site_url" class="inner-wrapper">
          <div class="inner-head">
            <a :href="item.fields.site_url" class="site">
              <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
            </a>
            <a :href="item.fields.repo_url" class="github">
              <font-awesome-icon icon="fa-regular fa-folder-open" />
            </a>
          </div>
          <div class="inner-body">
            <h3 class="title">
              {{ item.fields.title }}
            </h3>
            <p class="desc">
              {{ item.fields.desc }}
            </p>
          </div>
          <ul class="list-nostyle inner-foot">
            <li v-for="tool in item.fields.tools" :key="tool">
              {{ tool }}
            </li>
          </ul>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      projects: (state) => {
        return state.cms.content.projects.filter(item => !item.fields.is_featured)
      }
    })
  }
}
</script>

<style lang="scss" scoped>
.inner {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 16px;
  margin-top: 25px;

  @media #{$medium} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    margin-top: 50px;
  }

  &-wrapper {
    display: inline-block;
    width: 100%;
    padding: 18px 16px;
    border-radius: 4px;
    background-color: #131313;
    box-shadow: 0 10px 30px -15px #760a00;
    transition: all 0.2s ease-in-out;

    @media #{$large} {
      padding: 32px 28px;
    }

    &::after, &::before {
      all: unset;
    }

    &:hover {
      transform: translateY(-2%);
      box-shadow: 0 20px 30px -15px #760a00;

      .inner-body .title {
        color: $red;
      }
    }
  }

  &-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    @media #{$large} {
      margin-bottom: 35px;
    }

    .site {
      font-size: 24px;
      color: $red;

      &::after, &::before {
        all: unset;
      }

      &:hover {
        color: $red;
      }

      @media #{$large} {
        font-size: 40px;
      }
    }

    .github{
      &::after, &::before {
        all: unset;
      }

      &:hover {
        color: $red;
      }
    }
  }

  &-body {
    .title {
      margin-bottom: 10px;
      color: $secondary;
      font-size: 16px;

      @media #{$large} {
        font-size: 22px;
      }
    }
    .desc {
      margin: 0;
      font-size: 14px;

      @media #{$large} {
        font-size: inherit;
      }
    }
  }

  &-foot {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 20px;
    font-family: $font_serif;
    gap: 8px 16px;
    font-size: 10px;

    @media #{$large} {
      font-size: 12px;
    }
  }
}
</style>
