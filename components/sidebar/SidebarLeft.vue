<template>
  <div id="side-left">
    <ul class="list-nostyle side-list">
      <li>
        <a href="https://github.com/farizrachmansyah" target="_blank" class="link">
          <font-awesome-icon icon="fa-brands fa-github" />
        </a>
      </li>
      <li>
        <a href="https://linkedin.com/in/farizrachmansyah" target="_blank" class="link">
          <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/farizrachmansyah/" target="_blank" class="link">
          <font-awesome-icon icon="fa-brands fa-instagram" />
        </a>
      </li>
      <li>
        <a href="https://open.spotify.com/user/farizrachmansyah" target="_blank" class="link">
          <font-awesome-icon icon="fa-brands fa-spotify" />
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
#side-left {
  position: fixed;
  left: 40px;
  bottom: 0;
}

.side-list {
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
}

.link {
  display: inline-block;
  padding: 12px 10px;
  font-size: 20px;
  transition: all 0.2s ease-in-out;

  &::after, &::before {
    all: unset;
  }

  &:hover {
    color: $red;
    transform: translateY(-10%);
  }
}
</style>
