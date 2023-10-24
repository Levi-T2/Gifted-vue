import { AppState } from "../AppState"
import { Gift } from "../models/Gift"
import { logger } from "../utils/Logger"
import { api } from "./AxiosService"

class GiftboxService {
    async getGifts() {
        const res = await api.get('/api/gifts')
        logger.log(res.data)
        const newGifts = res.data.map(pojo => new Gift(pojo))
        AppState.gifts = newGifts
        // logger.log(AppState.gifts)
    }

    openGift(giftId) {
        // NOTE working but needs to be a .put request instead of this stuff
          const foundGift = AppState.gifts.find(gift => giftId == gift.id)
        //   logger.log(foundGift)
          if(foundGift.opened == false) {
            foundGift.opened = true
          } else {
            foundGift.opened = false
            return
          }
      }

      async createGift(giftTag, giftUrl) {
        logger.log(giftTag, giftUrl)
        const res = await api.post('/api/gifts', {tag: giftTag, url: giftUrl})
        AppState.gifts.splice(0,0, new Gift(res.data))

      }
}

export const giftboxService= new GiftboxService()