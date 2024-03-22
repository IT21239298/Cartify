import React from 'react'
import brush from "../../assets/images/Shop/brush.png"
import running_shoe from "../../assets/images/Shop/running-shoe.png"
import ring from "../../assets/images/Shop/engagement-ring.png"
import phones from "../../assets/images/Shop/smartphone.png"
import bags from "../../assets/images/Shop/travel-bag.png"
import electronic from "../../assets/images/Shop/electronic.png"


function ShopHeader() {
  return (
    <header className="py-4 shadow-sm bg-white">
    <div className="container flex items-center justify-between">

    <div className="flex items-center space-x-20">

    <a href="/">
    <div class="circle-container w-20">
        <img src={running_shoe} alt="Logo" className="circle-img" />
    </div>
    
    <div class="text-[16px] leading-3 font-semibold text-blue-950 ">Shoes</div>
</a>

<a href="/">
    <div class="circle-container w-20">
        <img src={ring} alt="Logo" className="circle-img" />
    </div>
    <div class="text-2xl"></div>
    <div class="text-[16px] leading-3 font-semibold text-blue-950">Jewelry & Watches
</div>
</a>


    <a href="/">
    <div class="circle-container w-20">
        <img src={brush} alt="Logo" className="circle-img" />
    </div>
   
    <div class="text-[16px] leading-3 font-semibold text-blue-950">Accessories</div>
</a>

<a href="/">
    <div class="circle-container w-20">
        <img src={phones} alt="Logo" className="circle-img" />
    </div>
    
    <div class="text-[16px] leading-3 font-semibold text-blue-950">Phone Accessories

</div>
</a>

<a href="/">
    <div class="circle-container w-20">
        <img src={bags} alt="Logo" className="circle-img" />
    </div>
    
    <div class="text-[16px] leading-3 font-semibold  text-blue-950">luggage and bags
</div>
</a>
<a href="/">
    <div class="circle-container w-20">
        <img src={electronic} alt="Logo" className="circle-img" />
    </div>
    
    <div class="text-[16px] leading-3 font-semibold text-blue-950">Consumer Electronics
</div>
</a>

</div>

        </div>
        </header>
  )
}

export default ShopHeader