<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12 p-3 text-center">
      <button type="button" class="btn btn-primary rounded-pill" data-bs-toggle="modal" data-bs-target="#giftModal">
        Create Gift
      </button>
      </div>
    </section>
    <section class="row justify-content-center">
      <div v-for="gift in gifts" :key="gift.id" class="col-12 col-md-3 m-3 card-style">
          <GiftCard :gift="gift"/>
      </div>
    </section>
  </div>
        <GiftForm />
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { giftboxService } from '../services/GiftboxService.js'
import { AppState } from '../AppState';
import Pop from '../utils/Pop';
import GiftCard from '../components/GiftCard.vue';
import GiftForm from '../components/GiftForm.vue';


export default {
    setup() {
        async function getGifts() {
            try {
                await giftboxService.getGifts();
            }
            catch (error) {
                Pop.error(error);
            }
        }
        onMounted(() => {
            getGifts();
        });
        return {
   
            gifts: computed(() => AppState.gifts),
        };
    },
    components: { GiftCard, GiftForm }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
