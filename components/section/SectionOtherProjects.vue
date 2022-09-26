<template>
  <div>
    <h2 class="m-0 text-center text-secondary">
      Other Noteworthy Projects
    </h2>
    <ul class="list-nostyle inner mt-50">
      <li v-for="item in 6" :key="item">
        <a href="#" class="inner-wrapper">
          <div class="inner-head">
            <a href="#" class="site">
              <font-awesome-icon icon="fa-solid fa-up-right-from-square" />
            </a>
            <a href="#" class="github">
              <font-awesome-icon icon="fa-regular fa-folder-open" />
            </a>
          </div>
          <div class="inner-body">
            <h3 class="title">
              bblblb
            </h3>
            <p class="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, quod. Ex veritatis eaque repellendus voluptatum.
            </p>
          </div>
          <ul class="list-nostyle inner-foot">
            <li>tool 1</li>
            <li>tool 2</li>
            <li>tool 3</li>
          </ul>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.inner {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 16px;

  &-wrapper {
    display: inline-block;
    padding: 32px 28px;
    border-radius: 4px;
    background-color: #131313;
    box-shadow: 0 10px 30px -15px #760900;
    transition: all 0.2s ease-in-out;

    &::after, &::before {
      all: unset;
    }

    &:hover {
      transform: translateY(-2%);
      box-shadow: 0 20px 30px -15px #760900;

      .other-projects-body .title {
        color: $red;
      }
    }
  }

  &-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 35px;

    .site {
      font-size: 40px;
      color: $red;
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
      font-size: 22px;
    }
    .desc {
      margin: 0;
      font-size: 16px;
    }
  }

  &-foot {
    display: flex;
    align-items: center;
    margin-top: 20px;
    font-family: $font_serif;
    font-size: 12px;
    gap: 0 16px;
  }
}
</style>
