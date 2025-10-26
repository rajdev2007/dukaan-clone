import { AmountProcessedCard } from "./components/AmountProcessedCard"
import { AppBar } from "./components/AppBar"
import { HeadingCard } from "./components/HeadingCard"
import { NextPayoutCard } from "./components/NextPayoutCard"
import { OrderFilterCard } from "./components/OrderFilterCard"
import { RevenueCard } from "./components/RevenueCard"
import { SubHeadingCard } from "./components/SubHeadingCard"


function App() {

  return (
    <div className="min-h-screen bg-[#fafafb] overflow-x-hidden">
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 bg-white">
          <AppBar title={"Payouts"}></AppBar>
        </div>
        <div className="col-span-12">
          <HeadingCard></HeadingCard>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[35%,35%,30%] gap-5 px-7">
            <div>
              <NextPayoutCard title={"Next Payout"} amount={"2,312.23"} orderCount={"23"} subTitle={"Next Payment Date"} day={"Today"} timestamp={"4:00"}></NextPayoutCard>
            </div>
            <div>
              <RevenueCard title={"Amount Pending"} amount={"92,312.20"} orderCount={"13"}></RevenueCard>
            </div>
            <div className="lg:mr-10">
              <AmountProcessedCard title={"Amount Processed"} amount={"23,92,312.19"}></AmountProcessedCard>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <SubHeadingCard payoutCount={22} refundCount={6}></SubHeadingCard>
        </div>
        <div className="col-span-12 bg-white ml-7 mr-7 rounded-[8px]">
          <div>
            <OrderFilterCard></OrderFilterCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
