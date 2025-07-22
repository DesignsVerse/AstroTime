import PanchangNumerologyPage from '@/components/Panchang/Panchang'
import PanchangFetcher from '@/components/Panchang/PanchangFetcher';
import React from 'react'

const page = () => {
  return (
    <div className='pt-14'>
      <PanchangNumerologyPage/>
      <PanchangFetcher/>
    </div>
  )
}

export default page;
