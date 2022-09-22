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
.company {
  position: relative;

  .btn-company {
    width: 100%;
    border: none;
    border-left: 2px solid #333;
    border-radius: 0;
    padding: 0 20px;
    text-align: left;
    height: 42px;
  }
  .btn-company:hover, .btn-company:focus {
    color: $red;
    background-color: rgba($red, 0.2);
  }
  .btn-company.active {
    border-left: 2px solid $red;
    color: $red;
  }
}
</style>
