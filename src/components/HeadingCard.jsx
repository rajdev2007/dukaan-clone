
export const HeadingCard = ()=>{
    return <div className="flex justify-between">
        <div className="font-medium text-xl ml-7">
            Overview
        </div>
        <div className="mr-7">
            <button className="border pl-3.5 pt-1.5 pr-3.5 pb-1.5 rounded">
                <div className="flex gap-2">
                    <div>
                        This Month
                    </div>
                    <div className="pt-1">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                        </svg>
                    </div>
                </div>
            </button>
        </div>
    </div>
}
