import { OrderFilterHeader } from "./OrderFilterHeader"
import { SearchBar } from "./SearchBar"

export const OrderFilterCard = ()=>{
    return <div className="ml-3 mr-3 pt-4">
        <div className="flex justify-between">
            <div>
                <SearchBar placeholder={"Order ID or transactions ID"} bgColor={"white"} style={"border"}></SearchBar>
            </div>
            <div className="flex gap-4">
                <div>
                    <button className="flex items-center gap-1 text-[#4D4D4D] rounded border pb-1.5 pt-2 pl-3 pr-1">
                        <div>
                            Sort
                        </div>
                        <div className="pt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 34 34" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                        </div>
                    </button>
                </div>
                <div>
                    <button className="text-[#4D4D4D] rounded border pb-2.5 pt-2 pl-2 pr-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 26 26" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div className="pt-3">
            <OrderFilterHeader></OrderFilterHeader>
        </div>
    </div>
}