<template>
  <div class="container">
    <div class="row responsiveSpacing">
      <div class="col-md-6 col-sm-12"
        v-for="user in usersBirthdayInfo"
        v-bind:key="user.id"
      >
        <UserBirthdayCard v-bind:birthdayInfo="user"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import UserBirthdayCard from './UserBirthdayCard.vue';
import UserBirthdayInfo from '../../models/user-birthday-info.model';

@Component({
  components: {
    UserBirthdayCard,
  },
})

export default class UIChallengeHome extends Vue {
  private usersBirthdayInfo: UserBirthdayInfo[] = [
    {
      id: 1, name: 'Luiggy', date: '04 - 04', photo: require('@/assets/image1.png'),
      favorite: true, highlight: true, proximityMsg: '¡SE ACERCA EL CUMPLEAÑOS!',
    },
    {
      id: 2, name: 'Matizze', date: '04 - 04', photo: require('@/assets/image2.png'),
      favorite: false, highlight: false, proximityMsg: 'PRÓXIMO EN CUMPLIR',
    },
    {
      id: 3, name: 'Sebas', date: '07 - 01', photo: require('@/assets/image3.png'),
      favorite: false, highlight: false, proximityMsg: 'PRÓXIMO EN CUMPLIR',
    },
    {
      id: 4, name: 'Nachito', date: undefined, photo: require('@/assets/image4.png'),
      favorite: true, highlight: false, proximityMsg: 'YA CUMPLIÓ',
    },
  ];
}
</script>

<style scoped lang="scss">

@import '~bootstrap/scss/_functions';
@import '~bootstrap/scss/_variables';
@import "~bootstrap/scss/mixins/_breakpoints";

.responsiveSpacing {
  margin-left: 0px;
  margin-right: 0px;
}

@include media-breakpoint-up(lg) {
  .responsiveSpacing {
    margin-left: 100px;
    margin-right: 100px;
  }
}

@include media-breakpoint-up(xl) {
  .responsiveSpacing {
    margin-left: 200px;
    margin-right: 200px;
  }
}


</style>
