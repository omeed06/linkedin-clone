import React from 'react'
import { Avatar } from '@mui/material'

const HeaderMenus = ({avatar,Icon,title}) => {
  return (
    <div className='flex flex-col justify-center items-center'>
        {Icon && <Icon />}
        {avatar && (
        <Avatar className="" src={avatar}/>
        )}
        <h4>{title}</h4>

    </div>
  )
}

export default HeaderMenus