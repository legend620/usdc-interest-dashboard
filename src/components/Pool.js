import React, { useState } from 'react'
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Box,
  Button,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
} from '@mui/material'

import { FlexBox } from './styled'

const Pool = ({ data }) => {
  const [mode, setMode] = useState('deposit')
  const [amount, setAmount] = useState(0)

  const handleModeChange = (event, newMode) => setMode(newMode)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader
        title={'Compound'}
        titleTypographyProps={{ align: 'center' }}
      />
      <CardContent sx={{ pt: 0 }}>
        <FlexBox mb={1}>
          <Typography variant="body2">Current APY:</Typography>
          <Typography variant="body1">{5}%</Typography>
        </FlexBox>
        <FlexBox mb={1}>
          <Typography variant="body2">Amount Deposited:</Typography>
          <Typography variant="body1">{5}%</Typography>
        </FlexBox>
        <FlexBox mb={1}>
          <Typography variant="body2">Accured Interest:</Typography>
          <Typography variant="body1">{5}%</Typography>
        </FlexBox>
        <Box display="flex" justifyContent="center" py={2}>
          <ToggleButtonGroup
            value={mode}
            color="primary"
            exclusive
            onChange={handleModeChange}
          >
            <ToggleButton size="small" value={'deposit'}>
              Deposit
            </ToggleButton>
            <ToggleButton size="small" value={'withdraw'}>
              Withdraw
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <FormControl fullWidth variant="standard">
          <InputLabel htmlFor="amount">Amount</InputLabel>
          <Input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            endAdornment={<InputAdornment position="end">$</InputAdornment>}
          />
        </FormControl>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: 4 }}>
        <Button variant="outlined" color="success">
          Confirm
        </Button>
      </CardActions>
    </Card>
  )
}

export default Pool
