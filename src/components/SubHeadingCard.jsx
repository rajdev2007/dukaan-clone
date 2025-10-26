
export const SubHeadingCard = ({payoutCount, refundCount})=>{
    return <div className="ml-7">
        <div className="font-medium text-xl pt-2">
            Transactions | This Month
        </div>
        <div className="flex gap-4 pt-6">
            <div>
                <button className="bg-[#E6E6E6] text-[#808080] rounded-full pl-4 pr-4 pt-1.5 pb-1.5">
                    Payouts ({payoutCount})
                </button>
            </div>
            <div>
                <button className="bg-[#146EB4] text-white  rounded-full pl-4 pr-4 pt-1.5 pb-1.5">
                    Refunds ({refundCount})
                </button>
            </div>
        </div>
    </div>
}