<template>
  <div class="detail">
    <ul class="list-nostyle detail-type flex v-center">
      <li v-for="(item, i) in detail" :key="i">
        <button :class="['btn--transparent', 'btn-type', item.type === active ? 'active' : '']" @click.prevent="active = item.type">
          {{ item.type }}
        </button>
      </li>
    </ul>

    <div v-for="(item, i) in getEmploymentJobs" :key="i" class="detail-act mt-24">
      <h3 class="title mt-0 mb-8">
        {{ item.title }}
      </h3>
      <p class="date mt-0 mb-24">
        {{ item.date_start }} - {{ item.date_end }}
      </p>

      <div v-if="item.jobdesk">
        <ul class="list-nostyle">
          <li v-for="(act, j) in item.jobdesk" :key="j" class="list-item">
            {{ act }}
          </li>
        </ul>
      </div>
      <div v-else>
        <p class="m-0">
          TBA
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    detail: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      active: this.detail[0].type
    }
  },
  computed: {
    getEmploymentJobs () {
      return this.detail.find(item => item.type === this.active).jobs
    }
  },
  watch: {
    detail () {
      this.active = this.detail[0].type
    }
  }
}
</script>

<style lang="scss" scoped>
.detail {
  flex: 1;

  @media #{$large} {
    margin-left: 40px;
  }

  &-type {
    width: 100%;
    overflow-x: auto;
    border-bottom: 2px solid #232323;

    @media #{$large} {
      width: unset;
    }

    .btn-type {
      position: relative;
      border: none;
      border-radius: 0;
      font-size: 10px;

      @media #{$medium} {
        font-size: 14px;
      }

      &::after {
        content: '';
        position: absolute;
        left: 50%;
        top: 55%;
        transform: translate(-50%, -50%) rotateZ(-7deg);
        width: 100%;
        height: 1px;
        background-color: $red;
        transition: all 0.1s 0.1s ease-in-out;
      }
      &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotateZ(7deg);
        width: 100%;
        height: 1px;
        background-color: $red;
        transition: all 0.1s ease-in-out;
      }

      &.active {
        &::after, &::before {
          width: 0;
          height: 0;
        }
      }
    }
  }

  &-act {
    .title {
      font-size: 20px;

      @media #{$medium} {
        font-size: 24px;
      }
    }

    .date {
      font-family: $font_serif;
      font-size: 10px;

      @media #{$medium} {
        font-size: 12px;
      }
    }

    .list-item {
      position: relative;
      margin-bottom: 10px;
      padding-left: 30px;
      font-size: 16px;

      @media #{$medium} {
        font-size: 20px;
      }

      &::before {
        content: '\2713';
        position: absolute;
        left: 0;
        top: 0;
        color: $red;
      }
    }
  }
}
</style>
