import React from 'react'
import { Avatar } from '@mui/material'

const HeaderMenus = ({avatar,Icon,title}) => {
  return (
    <div className='header-Menu flex flex-col justify-center items-center'>
        {Icon && <Icon />}
        {avatar && (
        <Avatar className="" src={avatar}/>
        )}
        <h4 className='hidden lg:block'>{title}</h4>
    </div>
  )
}

export default HeaderMenus