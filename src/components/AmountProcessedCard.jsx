
export const AmountProcessedCard = ({title, amount})=>{
    return <div className="bg-white rounded shadow-sm rounded-lg">
        <div className="flex justify-start text-lg text-gray-700 pt-2 pl-3">
            <div className="pl-2 pt-2">
                {title}
            </div>
            <div className="pt-1 pl-2 pt-3">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 30" stroke-width="2" stroke="currentColor" class="size-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
            </svg>
            </div>

        </div>
        <div className="flex justify-between pl-3 pb-3">
            <div className="text-3xl font-semibold pl-2 pt-3">
                ₹{amount}
            </div>
        </div>
    </div>
}