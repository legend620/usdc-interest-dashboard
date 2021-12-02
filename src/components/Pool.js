import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
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
  TextField,
  InputAdornment,
} from '@mui/material'

import { FlexBox } from './styled'

import { setBalance } from '../store/reducers/user'
import { deposit, withdraw } from '../store/reducers/pool'

const Pool = ({ network }) => {
  const { id, name, currentAPY, depositedAmount } = network

  const [mode, setMode] = useState('deposit')
  const [amount, setAmount] = useState(0)

  const { balance, interestDays } = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const accuredInterest = () => {
    const amount = ((depositedAmount * currentAPY) / 100 / 365) * interestDays
    return amount.toFixed(2)
  }

  const handleModeChange = (event, newMode) => {
    setAmount(
      newMode === 'withdraw'
        ? parseFloat(accuredInterest()) + depositedAmount
        : 0,
    )
    setMode(newMode)
  }

  const handleConfirm = () => {
    if (mode === 'deposit') {
      dispatch(deposit({ id, amount }))
      dispatch(setBalance(balance - amount))
    } else {
      dispatch(withdraw({ id, amount }))
      dispatch(setBalance(balance + amount))
    }
    setAmount(0)
  }

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader title={name} titleTypographyProps={{ align: 'center' }} />
      <CardContent sx={{ pt: 0 }}>
        <FlexBox mb={1}>
          <Typography variant="body2">Current APY:</Typography>
          <Typography variant="body1">{currentAPY} %</Typography>
        </FlexBox>
        <FlexBox mb={1}>
          <Typography variant="body2">Amount Deposited:</Typography>
          <Typography variant="body1">
            {depositedAmount.toFixed(2)} USDC
          </Typography>
        </FlexBox>
        <FlexBox mb={1}>
          <Typography variant="body2">Accured Interest:</Typography>
          <Typography variant="body1">{accuredInterest()} USDC</Typography>
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
          <TextField
            error={balance < amount}
            helperText={balance < amount ? 'Insufficient balance' : ''}
            label="Amount"
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(parseFloat(e.target.value))}
            disabled={mode === 'withdraw'}
            InputProps={{
              endAdornment: <InputAdornment end="start">USDC</InputAdornment>,
            }}
          />
        </FormControl>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', pb: 4 }}>
        <Button
          variant="outlined"
          color="success"
          onClick={handleConfirm}
          disabled={balance < amount}
        >
          Confirm
        </Button>
      </CardActions>
    </Card>
  )
}

export default Pool
