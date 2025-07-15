import KundliPage from '@/components/ram/kundali'
import React from 'react'
import { kundliData } from '@/data/kundliData'

export async function generateStaticParams() {
  return Object.keys(kundliData).map((character) => ({ character }));
}

const page = ({ params }: { params: { character: string } }) => {
  return (
    <div>
      <KundliPage params={params} />
    </div>
  )
}

export default page
