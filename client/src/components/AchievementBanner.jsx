import React from 'react'
import { assets } from '../assets/assets'

const AchievementBanner = () => {
    return (
        <div className='mt-24 items-start md:items-center'>
            <div class="flex md:flex-row flex-col border border-primary/50 rounded-lg  justify-between gap-5 text-sm  bg-white p-8">
                <div class="space-y-4 md:max-w-75">
                    <div class="flex items-center gap-3">
                        <div class="bg-gray-500/10 w-max p-2.5 rounded">
                            <img src={assets.ab_image2} alt="" className='w-[22px] h-[22px]' />
                        </div>
                        <h3 class="text-base font-medium text-gray-800">5,200+ Lives Touched</h3>
                    </div>
                    <p class="text-gray-500">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</p>
                </div>
                <div class="space-y-4 md:max-w-75">
                    <div class="flex items-center gap-3">
                        <div class="bg-gray-500/10 w-max p-2.5 rounded">
                            <img src={assets.ab_image3} alt="" className='w-[22px] h-[22px]' />
                        </div>
                        <h3 class="text-base font-medium text-gray-800">LKR 250 Million+ Raised</h3>
                    </div>
                    <p class="text-gray-500">Non laboris consequat cupidatat laborum magna. Eiusmod non irure cupidatat duis commodo amet.</p>
                </div>
                <div class="space-y-4 md:max-w-75">
                    <div class="flex items-center gap-3">
                        <div class="bg-gray-500/10 w-max p-2.5 rounded">
                            <img src={assets.ab_image1} alt="" className='w-[22px] h-[22px]' />
                        </div>
                        <h3 class="text-base font-medium text-gray-800">20,000+ Verified Donors</h3>
                    </div>
                    <p class="text-gray-500">Officia excepteur ullamco ut sint duis proident non adipisicing. Voluptate incididunt anim.</p>
                </div>
            </div>
        </div>
    )
}

export default AchievementBanner