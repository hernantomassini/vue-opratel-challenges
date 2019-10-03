<template>
  <div>

  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class UserBirthdayDate extends Vue {
  @Prop() private color!: string;
  @Prop() private date!: string;
  @Prop() private showCalendarIcon!: boolean;
}
</script>

<style scoped lang="scss">
</style>
