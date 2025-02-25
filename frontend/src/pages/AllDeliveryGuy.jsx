import { Typography } from '@mui/material'
import React from 'react'
import BasicTable from '../components/BasicTable'
function AllDeliveryGuy() {
  return (
    <div>
      <Typography variant='h3' sx={{
        textAlign:"center"
      }}>All Delivery Boys</Typography>
      <BasicTable></BasicTable>
    </div>
  )
}

export default AllDeliveryGuy
