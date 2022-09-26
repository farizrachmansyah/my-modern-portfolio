<template>
  <div>
    <SectionHeading title="How to reach me" :is-contact="true" />
    <div class="inner text-center">
      <h2 class="title">
        It would be an honor to work with you
      </h2>
      <p class="desc m-0">
        Actually I'm not currently looking for any new opportunities, but my inbox is always open. Whether you want to invite me to hangout or just have a question, I'll try my best to get back to you!
      </p>
      <div class="btn-wrapper mt-50">
        <a href="mailto:farizrachmansyah7@gmail.com" class="btn--ghost-red btn-contact">
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
  font-size: clamp(20px, 8vw, 60px);
}

.desc {
  font-size: 16px;

  @media #{$medium} {
    font-size: 20px;
  }
}

.btn-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px 24px;

  @media #{$small} {
    flex-direction: row;
  }
}

.btn-contact {
  flex: 1;
  width: 100%;
  padding: 20px 28px;

  @media #{$small} {
    width: unset;
  }

  @media #{$medium} {
    flex: unset;
  }

  &::after, &::before {
    all: unset;
  }
}
</style>
