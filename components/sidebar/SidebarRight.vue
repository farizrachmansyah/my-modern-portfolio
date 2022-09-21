<template>
  <div id="side-right">
    <a href="mailto:farizrachmansyah7@gmail.com" target="_blank" class="link">
      farizrachmansyah7@gmail.com
    </a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
#side-right {
  position: fixed;
  right: 40px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin-top: 20px;
    background-color: $secondary;
  }

  .link {
    padding: 12px 10px;
    writing-mode: vertical-rl;
    font-family: $font_serif;
    transition: all 0.2s ease-in-out;

    &::after, &::before {
      all: unset;
    }

    &:hover {
      color: $red;
      transform: translateY(-5%);
    }
  }
}
</style>
