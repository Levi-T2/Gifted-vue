<template>
    <div class="component">
        <div @click="openGift(`${gift.id}`)" role="button" class="p-1">
          <p class="p-2 text-center" >{{ gift.tag }}</p>
          <img  v-if="gift.opened == true" :src="gift.url" alt="" class="img-fluid rounded">
        </div>
    </div>
</template>


<script>
import { Gift } from '../models/Gift';
import { giftboxService } from '../services/GiftboxService';

export default {

    props: {
        gift: { type: Gift, required: true}
    },

    setup(){
    return { 
        openGift(giftId) {
     giftboxService.openGift(giftId)
    },

     }
    }
};
</script>


<style lang="scss" scoped>

</style>