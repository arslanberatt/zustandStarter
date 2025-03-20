import React from 'react'

const BlogSlugPage = async ({params}:{params: Promise<{slug:string}>}) => {
    const { slug } = await params  
    return (
    <div>My Post: {slug}</div>
  )
}

export default BlogSlugPage