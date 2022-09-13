import { Avatar } from '@mui/material'
import React from 'react'
import PostButtons from './postButtons'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const Post = ({name,description,message,photoUrl}) => {
  return (
    <>
    <div className='container max-w-xl border-2 rounded-xl bg-[#fff] py-2 px-2'>
        <div className='flex items-center'>
            <Avatar />
            <div className='px-2'>
                <h1 className='font-medium text-lg'>{name}</h1>
                <h2>{description}</h2>
            </div>
        </div>


        <div className='py-5 px-2'>
            <h2>{message}</h2>
        </div>

        <div className='flex items-center px-2 gap-4'>
        <PostButtons Icon={ThumbUpIcon} title="Like"/>
        <PostButtons Icon={CommentIcon} title="Comment"/>
        <PostButtons Icon={ShareIcon} title="Share"/>
        <PostButtons Icon={SendIcon} title="Send"/>
        </div>
    </div>

    </>
  )
}

export default Post