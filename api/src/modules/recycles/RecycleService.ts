import { RecycleRepository } from "./RecycleRepository.js";

export class RecycleService{
    private recycleRepository = new RecycleRepository()

    async checkRecycle(userId: string, currentDate: Date){
        const hasRecycled = await this.recycleRepository.getRecyclesByDate(userId,currentDate)
        return hasRecycled !== null
    }

}
