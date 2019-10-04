<template>
  <div>
    <div class="d-flex flex-column align-items-center" v-bind:class="{ highlight: highlight }">
      <div class="proximity-msg mb-3">{{ proximityMsg }}</div>
      <div class="row chip-date justify-content-center align-items-center mb-4">
        <font-awesome-icon v-if="date" icon="calendar" class="mr-3"/>
        <span>{{ date ? date : '(?)' }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class UserBirthdayDate extends Vue {
  @Prop() private proximityMsg!: boolean;
  @Prop() private highlight!: boolean;
  @Prop() private date!: string;
}
</script>

<style scoped lang="scss">
.chip-date {
  background-color: white;
  border-color: #D5D5D5;
  color: #D5D5D5;
  border-style: solid;
  min-width: 185px;
  min-height: 50px;
  border-radius: 25px; 
  font-size: 20px;
}

.proximity-msg {
  color: #D5D5D5;
}

.highlight {
  color: white;

  .proximity-msg {
    color: #69B2FC;
  }

  .chip-date {
    color: white;
    border-style: none;
    background-color: #69B2FC;
  }
}

</style>
