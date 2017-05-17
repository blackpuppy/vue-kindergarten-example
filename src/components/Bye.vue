<template>
  <div>
    <h1>Bye!</h1>
    <router-link to="/">Hello</router-link>
    <span>|</span>
    <router-link to="/secret">Secret</router-link>

    <p v-show="$bye.isAllowed('viewParagraph')">This paragraph is secret!</p>
  </div>
</template>

<script>
  import byePerimeter from '../perimeters/byePerimeter';

  export default {
    perimeters: [
      byePerimeter,
    ],
  };
</script>
