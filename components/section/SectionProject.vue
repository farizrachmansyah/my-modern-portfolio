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
  position: relative;
  margin-bottom: 100px;

  &-image {
    position: relative;
    width: 60%;
    box-shadow: 0 10px 30px -10px #760900;
    border-radius: 4px;
    overflow: hidden;
    transition: all 0.15s ease-in-out;
  }

  &.even {
    .project-item-image {
      margin-left: auto;
    }
  }
}
</style>
