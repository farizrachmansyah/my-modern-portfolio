<template>
  <div>
    <SectionHeading title="How to reach me" :is-contact="true" />
    <div class="inner text-center">
      <h2 class="title">
        It would be an honor to work with you
      </h2>
      <p class="m-0">
        Actually I'm not currently looking for any new opportunities, but my inbox is always open. Whether you want to invite me to hangout or just have a question, I'll try my best to get back to you!
      </p>
      <div class="mt-50">
        <a href="mailto:farizrachmansyah7@gmail.com" class="btn--ghost-red btn-contact mr-24">
          Reach via email
        </a>
        <a href="tel:6289628192023" class="btn--ghost-red btn-contact">
          Reach via number
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title {
  margin-top: 0;
  margin-bottom: 10px;
  line-height: 1.1;
  text-transform: capitalize;
  color: $secondary;
  font-size: 60px;
}

.btn-contact {
  padding: 20px 28px;

  &::after, &::before {
    all: unset;
  }
}
</style>
