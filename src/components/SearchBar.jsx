export const SearchBar = ({placeholder, bgColor, style})=>{ 
    return <div> 
        <div className={`flex items-center gap-2 px-4 py-1.5 sm:py-[9px] w-full max-w-xs bg-${bgColor} text-[#808080] rounded ${style}`}> 
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" className="text-lg" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" > 
                <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path> 
            </svg> 
            <input type="text" placeholder={placeholder} className="bg-transparent outline-none w-full" /> 
        </div> 
    </div> 
}