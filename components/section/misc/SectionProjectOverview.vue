<template>
  <div :class="['project-overview', isEven ? 'even' : '']">
    <p class="project-overview-mark mt-0 mb-10">
      Featured Project
    </p>
    <h3 class="project-overview-title mt-0 mb-20">
      {{ overview.title }}
    </h3>
    <div class="project-overview-desc">
      <p class="m-0 text-left">
        {{ overview.desc }}
      </p>
    </div>
    <ul class="list-nostyle project-overview-tools flex mv-20">
      <li v-for="(tool, i) in overview.tools" :key="i">
        {{ tool }}
      </li>
    </ul>
    <div class="project-overview-links">
      <a :href="overview.repo_url" target="_blank">
        <font-awesome-icon icon="fa-regular fa-folder-open" />
      </a>
      <a :href="overview.site_url" target="_blank">
        <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    overview: {
      type: Object,
      default: () => {}
    },
    isEven: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.project-overview {
  position: relative;
  z-index: 1;
  padding: 30px;

  &::before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $black;
    opacity: 0.875;

    @media #{$medium} {
      all: unset;
    }
  }

  @media #{$small} {
    padding: 40px;
  }

  @media #{$medium} {
    position: absolute;
    z-index: unset;
    padding: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    max-width: 495px;
    text-align: right;
  }

  &.even {
    @media #{$medium} {
      right: unset;
      left: 0;
      text-align: left;

      .project-overview-tools, .project-overview-links {
        justify-content: flex-start;
      }
    }
  }

  &-mark {
    font-family: $font_serif;
    font-size: 10px;

    @media #{$small} {
      font-size: 12px;
    }
  }

  &-title {
    color: $secondary;
    // font-size: 28px;
    font-size: clamp(24px, 5vw, 28px);
  }

  &-desc {
    border-radius: 4px;
    font-size: 18px;

    @media #{$medium} {
      font-size: unset;
      padding: 20px;
      background-color: #131313;
      box-shadow: 0 10px 30px -15px #760a00;
    }
  }

  &-tools {
    flex-wrap: wrap;
    gap: 12px;
    font-family: $font_serif;
    font-size: 10px;

    @media #{$small} {
      font-size: 12px;
    }

    @media #{$medium} {
      gap: 20px;
      justify-content: flex-end;
    }
  }

  &-links {
    display: flex;
    margin-left: -10px;
    margin-right: -10px;
    font-size: 20px;

    @media #{$medium} {
      justify-content: flex-end;
    }

    a {
      padding: 10px;
      color: $secondary;

      &::after, &::before {
        all: unset;
      }

      &:hover {
        color: $red;
      }
    }
  }
}
</style>
