import { Typography } from '@mui/material'
import React from 'react'
import BasicTable from '../components/BasicTable'
function AllUsers() {
  return (
    <div>
      <Typography variant='h3' sx={{
        textAlign:"center",
      }}>All Users</Typography>
      <BasicTable></BasicTable>
    </div>
  )
}

export default AllUsers
