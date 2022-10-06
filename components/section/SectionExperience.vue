<template>
  <div>
    <SectionHeading title="Where I've Worked" />
    <div class="inner flex">
      <ul class="list-nostyle company">
        <li v-for="ex in experiences" :key="ex.id">
          <button :class="['btn--transparent btn-company', setActive(ex.name)]" @click.prevent="active = ex.name">
            {{ ex.name }}
          </button>
        </li>
      </ul>
      <SectionExperienceDetail :detail="getDetail" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      active: null
    }
  },
  computed: {
    ...mapState({
      compData: (state) => {
        return state.cms.content.company
      },
      empTypeData: (state) => {
        return state.cms.content.employmentType
      },
      expData: (state) => {
        return state.cms.content.experience
      }
    }),
    experiences () {
      const experienceArr = []
      this.compData.forEach((company) => {
        const employmentsArr = []
        this.empTypeData.forEach((type) => {
          const jobsArr = []
          this.expData.forEach((ex) => {
            if (ex.fields.company.sys.id === company.sys.id && ex.fields.employment_type.sys.id === type.sys.id) {
              jobsArr.push({
                title: ex.fields.title,
                date_start: this.configDate(ex.fields.date_start),
                date_end: this.configDate(ex.fields.date_end),
                jobdesk: ex.fields.jobdesk
              })
            }
          })
          if (jobsArr.length) {
            employmentsArr.push({
              type: type.fields.type,
              jobs: jobsArr
            })
          }
        })
        if (employmentsArr.length) {
          experienceArr.unshift({
            id: company.sys.id,
            name: company.fields.name,
            employments: employmentsArr
          })
        }
      })
      return experienceArr
    },
    getDetail () {
      return this.experiences.find(item => item.name === this.active).employments
    }
  },
  created () {
    this.active = this.experiences[0].name
  },
  methods: {
    configDate (date) {
      if (date) {
        const realDate = new Date(date)
        return realDate.toLocaleString('en-US', {
          year: 'numeric',
          month: 'short'
        })
      } else {
        return null
      }
    },
    setActive (company) {
      return company === this.active ? 'active' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.inner {
  flex-direction: column;

  @media #{$large} {
    flex-direction: row;
  }
}
.company {
  display: flex;
  width: 100%;
  margin-bottom: 12px;
  overflow-x: auto;

  @media #{$large} {
    display: unset;
    width: unset;
    margin-bottom: 0;
  }

  .btn-company {
    width: 100%;
    height: 42px;
    border: none;
    padding: 0 12px;
    border-bottom: 2px solid #232323;
    border-radius: 0;
    text-align: left;
    font-size: 10px;

    @media #{$medium} {
      font-size: 14px;
    }

    @media #{$large} {
      padding: 0 20px;
      border-bottom: none;
      border-left: 2px solid #232323;
    }
  }
  .btn-company:hover, .btn-company:focus {
    color: $red;
    background-color: rgba($red, 0.2);
  }
  .btn-company.active {
    border-bottom: 2px solid $red;
    color: $red;

    @media #{$large} {
      border-bottom: none;
      border-left: 2px solid $red;
    }
  }
}
</style>
