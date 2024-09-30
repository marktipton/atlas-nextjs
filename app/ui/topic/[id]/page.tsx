import React from 'react'

function page({params}: { params: { id: string }}) {
  return (
    <div>Topics Page: {params.id}</div>
  )
}

export default page