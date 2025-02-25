import { Typography } from '@mui/material'
import React from 'react'
import BasicTable from '../components/BasicTable'
function AllRestaurant() {
  return (
    <div>
      <Typography variant='h3'
      sx={{
        textAlign:"center"
      }}
      >All Restaurants</Typography>
      <BasicTable/>
    </div>
  )
}

export default AllRestaurant
