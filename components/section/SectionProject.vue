<template>
  <div>
    <SectionHeading title="What I've Built" />
    <div class="inner">
      <ul class="list-nostyle">
        <li v-for="(item, i) in projects" :key="i" :class="['project-item', (i+1)%2 === 0 ? 'even' : '']">
          <div class="project-item-image">
            <img :src="item.image" :alt="`${item.overview.project_title} Overview`">
          </div>
          <SectionProjectOverview :overview="item.overview" :is-even="(i+1)%2 === 0" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      projects: [
        {
          image: 'assets/img-tes.png',
          overview: {
            project_title: 'Scrapesi',
            project_desc: 'Web Scraping implementation using Puppeteer and Nuxt on web-based job portal system.',
            project_tools: [
              {
                name: 'Nuxt.js'
              },
              {
                name: 'Vuex'
              },
              {
                name: 'Puppeteer.js'
              },
              {
                name: 'VS Code'
              }
            ],
            project_sources: [
              {
                name: 'Github',
                url: 'https://github.com/farizrachmansyah/scrapesi'
              },
              {
                name: 'Site',
                url: 'https://scrapesi.herokuapp.com'
              }
            ]
          }
        },
        {
          image: 'assets/img-tes.png',
          overview: {
            project_title: 'Scrapesi',
            project_desc: 'Web Scraping implementation using Puppeteer and Nuxt on web-based job portal system.',
            project_tools: [
              {
                name: 'Nuxt.js'
              },
              {
                name: 'Vuex'
              },
              {
                name: 'Puppeteer.js'
              },
              {
                name: 'VS Code'
              }
            ],
            project_sources: [
              {
                name: 'Github',
                url: 'https://github.com/farizrachmansyah/scrapesi'
              },
              {
                name: 'Site',
                url: 'https://scrapesi.herokuapp.com'
              }
            ]
          }
        },
        {
          image: 'assets/img-tes.png',
          overview: {
            project_title: 'Scrapesi',
            project_desc: 'Web Scraping implementation using Puppeteer and Nuxt on web-based job portal system.',
            project_tools: [
              {
                name: 'Nuxt.js'
              },
              {
                name: 'Vuex'
              },
              {
                name: 'Puppeteer.js'
              },
              {
                name: 'VS Code'
              }
            ],
            project_sources: [
              {
                name: 'Github',
                url: 'https://github.com/farizrachmansyah/scrapesi'
              },
              {
                name: 'Site',
                url: 'https://scrapesi.herokuapp.com'
              }
            ]
          }
        }
      ]
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
    width: 60%;
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
