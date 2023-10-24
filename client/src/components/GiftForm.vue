<template>
    <div class="component">
  <div class="modal fade" id="giftModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
          <form @submit.prevent="createGift()" class="p-4">
            <div  class="p-2">
              <label for="giftTag" class="form-label">Gift Tag</label>
              <input v-model="editable" type="text" class="form-control" required id="giftTag">
            </div>
            <div class="p-2">
              <label for="giftUrl">Gift Url</label>
              <input v-model="editable2" type="text" class="form-control" required id="giftUrl">
            </div>
            <button class="btn btn-outline-dark rounded-pill" type="submit">Submit Gift</button> 
          </form>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</div>
    </div>
</template>


<script>
import { ref } from 'vue';
import { giftboxService } from '../services/GiftboxService';

export default {
    setup(){
        const editable = ref('');
        const editable2 = ref('');
    return { 
        editable,
        editable2,
        async createGift() {
                const giftTag = editable.value;
                const giftUrl = editable2.value;
                // logger.log(giftTag)
                await giftboxService.createGift(giftTag, giftUrl);
            }
    }
    }
};
</script>


<style lang="scss" scoped>

</style>