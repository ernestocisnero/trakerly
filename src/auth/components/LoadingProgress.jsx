import { Box, LinearProgress } from '@mui/material'
import React from 'react'

export const LoadingProgress = () => {
  return (
    <Box sx={{ width: '100%', my:2 }}>
      <LinearProgress />
    </Box>
  )
}
