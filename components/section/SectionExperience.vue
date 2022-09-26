<template>
  <div>
    <SectionHeading title="Where I've Worked" />
    <div class="inner flex">
      <ul class="list-nostyle company">
        <li v-for="item in experiences" :key="item.id">
          <button :class="['btn--transparent btn-company', setActive(item.name)]" @click.prevent="active = item.name">
            {{ item.name }}
          </button>
        </li>
      </ul>
      <SectionExperienceDetail :detail="getDetail" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: null,
      experiences: [
        {
          id: '1',
          name: 'Suitmedia',
          employments: [
            {
              type: 'Internship',
              jobs: [
                {
                  title: 'Frontend Developer Intern',
                  date: {
                    start: 'Aug 2021',
                    end: 'Feb 2022'
                  },
                  activities: [
                    'Involved in more than 5 professional web application development projects for business clients',
                    'Fully responsible for client‐side e‐commerce platform development on B2B2C E‐Commerce SaaS project',
                    'Promoted after completing a 6-month internship due to strong performance and organizational impact'
                  ]
                }
              ]
            },
            {
              type: 'Freelance',
              jobs: [
                {
                  title: 'Frontend Developer',
                  date: {
                    start: 'Mar 2022',
                    end: 'May 2022'
                  },
                  activities: [
                    'Built various types of high‐performance frontend web applications',
                    "Work with a variety of different technologies like JavaScript's libraries",
                    'Communicate with multi-disciplinary teams of executives, analysts, designers, and developers on a daily basis'
                  ]
                }
              ]
            },
            {
              type: 'Full Time',
              jobs: [
                {
                  title: 'Frontend Developer',
                  date: {
                    start: 'Oct 2022',
                    end: 'Present'
                  },
                  activities: null
                }
              ]
            }
          ]
        },
        {
          id: '2',
          name: 'LePKom Gunadarma',
          employments: [
            {
              type: 'Contract'
            }
          ]
        }
      ]
    }
  },
  computed: {
    getDetail () {
      return this.experiences.find(item => item.name === this.active).employments
    }
  },
  created () {
    this.active = this.experiences[0].name
  },
  methods: {
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
