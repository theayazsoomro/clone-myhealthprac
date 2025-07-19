import React from 'react'
import ChoosePlanCard from '../common/ChoosePlanCard'
import { Personal, Professional } from '@/app/constants/ChoosePlanData';


export default function ChoosePlan() {
  return (
    <div className="bg-gray-200 h-full p-2 md:p-8 grid md:grid-cols-2 gap-3 items-stretch pb-24">
        <ChoosePlanCard heading="Personal"  subHeading='For individuals seeking clarity and balance' bgColor='white' tableContent={Personal} />
        <ChoosePlanCard heading="Professional" subHeading='For practitioners delivering truly personalised care' bgColor='[rgb(184,162,133)]' tableContent={Professional}/>
    </div>
  )
}
