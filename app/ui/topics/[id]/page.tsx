import React from 'react'

async function page({params}: { params: { id: string }}) {

  await new Promise((r) => setTimeout(r, 3000));
  return (
    <div>Topics Page: {params.id}</div>
  )
}

export default page