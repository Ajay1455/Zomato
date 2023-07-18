import React from 'react'
import Skeleton from '@mui/material/Skeleton'
import Stack from '@mui/material/Stack'

function SkeletonSet() {
  return (
    <>
      <Stack spacing={1} style={{width:"22rem"}} className=''>
        <Skeleton variant='rectangular' animation="wave" width={"21rem"} height={200} />
        <div>
          <Skeleton variant='text' animation="wave" width={"12rem"}/>
          <Skeleton variant='text' animation="wave" width={"5rem"}/>
        </div>
        <div>
        <Skeleton variant='text' animation="wave" width={"12rem"}/>
        <Skeleton variant='text' animation="wave" width={"5rem"}/>
        </div>
        <div>
        <Skeleton variant='circular' animation="wave" width={20} height={20}/>
        <Skeleton variant='text' animation="wave" width={"18rem"}/>
        </div>
      </Stack>
    </>
  )
}

export default SkeletonSet;