import React from 'react'
import { ReferNowButton } from "./ReferModal";
const HowToRefer = () => {
  return (
    <div class="bg-blue-50 py-16 px-8 mt-20">
  <div class="max-w-5xl mx-auto text-center">
    <h2 class="text-2xl md:text-3xl font-bold text-gray-900">How Do I <span class="text-blue-600">Refer?</span></h2>
  </div>


  <div class="mt-12 flex flex-col md:flex-row items-center justify-center gap-10 relative">
    

    <div class="text-center max-w-xs">
      <div class="relative w-32 h-32 mx-auto">
        <div class="absolute inset-0 bg-white shadow-lg rounded-full flex items-center justify-center">
          <img src="../assets/friend.png" alt="Submit Referral" class="w-12"/>
        </div>
        <div class="absolute top-1/2 -right-16 w-16 h-16 hidden md:block">
          <svg class="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h18m0 0l-6-6m6 6l-6 6"></path>
          </svg>
        </div>
      </div>
      <p class="mt-4 text-gray-700">Submit referrals easily via our website’s referral section.</p>
    </div>

    <div class="text-center max-w-xs">
      <div class="relative w-32 h-32 mx-auto">
        <div class="absolute inset-0 bg-white shadow-lg rounded-full flex items-center justify-center">
          <img src="../assets/note.png" alt="Earn Rewards" class="w-12"/>
        </div>
        <div class="absolute top-1/2 -right-16 w-16 h-16 hidden md:block">
          <svg class="w-full h-full text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 12h18m0 0l-6-6m6 6l-6 6"></path>
          </svg>
        </div>
      </div>
      <p class="mt-4 text-gray-700">Earn rewards once your referral joins an Accredian program.</p>
    </div>

   
    <div class="text-center max-w-xs">
      <div class="relative w-32 h-32 mx-auto">
        <div class="absolute inset-0 bg-white shadow-lg rounded-full flex items-center justify-center">
          <img src="../assets/wallet.png" alt="Bonus Reward" class="w-12"/>
        </div>
      </div>
      <p class="mt-4 text-gray-700">Referrer receives a bonus 30 days after program enrollment.</p>
    </div>

  </div>

  <div class="mt-12 text-center">
    <button class="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md">
    <ReferNowButton />
    </button>
  </div>

</div>

  )
}

export default HowToRefer
