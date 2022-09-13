import React from 'react'


const PostButtons = ({Icon,title}) => {
  return (
    <div className='flex justify-center items-center'>
{Icon && <Icon />}
<p>{title}</p>
    </div>
  )
}

export default PostButtons