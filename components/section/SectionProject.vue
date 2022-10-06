<template>
  <div>
    <SectionHeading title="What I've Built" />
    <div class="inner">
      <ul class="list-nostyle">
        <li v-for="(item, i) in projects" :key="i" :class="['project-item', (i+1)%2 === 0 ? 'even' : '']">
          <div class="project-item-image">
            <img :src="item.image.fields.file.url" :alt="item.image.fields.title" loading="lazy">
          </div>
          <SectionProjectOverview :overview="item.overview" :is-even="(i+1)%2 === 0" />
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
      projectData: (state) => {
        return state.cms.content.projects.filter(item => item.fields.is_featured)
      }
    }),
    projects () {
      return this.projectData.map((item) => {
        const projectObj = {
          image: item.fields.image,
          overview: this.getOverview(item.fields)
        }
        return projectObj
      })
    }
  },
  methods: {
    getOverview (fields) {
      const overviewObj = {}
      for (const prop in fields) {
        if (prop !== 'image') {
          overviewObj[prop] = fields[prop]
        }
      }
      return overviewObj
    }
  }
}
</script>

<style lang="scss" scoped>
.project-item {
  margin-bottom: 50px;
  background: url('~/static/assets/img-tes.png');
  background-position: center;
  background-size: cover;
  border-radius: 4px;
  box-shadow: 0 10px 30px -15px #760a00;

  @media #{$medium} {
    position: relative;
    background: none;
    border-radius: 0;
    box-shadow: none;
    margin-bottom: 100px;
  }

  &-image {
    display: none;
    position: relative;
    width: 65%;
    box-shadow: 0 10px 30px -10px #760a00;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.15s ease-in-out;

    @media #{$medium} {
      display: block;
    }
  }

  &.even {
    .project-item-image {
      margin-left: auto;
    }
  }
}
</style>
