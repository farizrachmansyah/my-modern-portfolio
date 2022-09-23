<template>
  <div :class="['project-overview', isEven ? 'even' : '']">
    <p class="project-overview-mark mt-0 mb-10">
      Featured Project
    </p>
    <h3 class="project-overview-title mt-0 mb-20">
      {{ overview.project_title }}
    </h3>
    <div class="project-overview-desc p-20">
      <p class="m-0 text-left">
        {{ overview.project_desc }}
      </p>
    </div>
    <ul class="list-nostyle project-overview-tools flex mv-20">
      <li v-for="(tool, i) in overview.project_tools" :key="i">
        {{ tool.name }}
      </li>
    </ul>
    <div class="project-overview-links">
      <div v-for="(source, i) in overview.project_sources" :key="i">
        <a :href="source.url" target="_blank">
          <font-awesome-icon :icon="source.name === 'Github' ? 'fa-regular fa-folder-open' : 'fa-solid fa-up-right-from-square'" />
        </a>
      </div>
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
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  max-width: 495px;
  text-align: right;

  &.even {
    right: unset;
    left: 0;
    text-align: left;

    .project-overview-tools, .project-overview-links {
      justify-content: flex-start;
    }
  }

  &-mark {
    font-family: $font_serif;
    font-size: 12px;
  }

  &-title {
    color: $secondary;
    font-size: 28px;
  }

  &-desc {
    border-radius: 4px;
    background-color: #131313;
    box-shadow: 0 10px 30px -15px #760900;
  }

  &-tools {
    justify-content: flex-end;
    font-family: $font_serif;
    font-size: 12px;

    & > li:not(:last-child) {
      margin-right: 20px;
    }
  }

  &-links {
    display: flex;
    justify-content: flex-end;
    margin-right: -10px;

    a {
      padding: 10px;
      color: $secondary;

      &::after, &::before {
        all: unset;
      }

      &:hover {
        color: $red;
        transform: translateY(-10%);
      }
    }
  }
}
</style>
