import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from '@mui/material'

import { FlexBox } from './components/styled'
import Pool from './components/Pool'

import { setInterestDays } from './store/reducers/user'

export default function App() {
  const [days, setDays] = useState(0)

  const balance = useSelector((state) => state.user.balance)
  const networks = useSelector((state) => state.pool.networks)

  const dispatch = useDispatch()

  const handleUpdateInterestDays = () => {
    console.log(days)
    dispatch(setInterestDays(days))
  }

  return (
    <Container>
      <FlexBox my={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              USDC Balance
            </Typography>
            <Typography variant="h4">{balance.toFixed(2)}</Typography>
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <FlexBox>
              <TextField
                id="days-to-progress"
                label="Days To Progress"
                variant="outlined"
                type="number"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
              <Button
                variant="outlined"
                size="large"
                sx={{ ml: 2 }}
                onClick={handleUpdateInterestDays}
              >
                Input
              </Button>
            </FlexBox>
          </CardContent>
        </Card>
      </FlexBox>
      <Grid container spacing={4} justifyContent="center">
        {networks.map((network) => (
          <Grid item key={network.id}>
            <Pool network={network} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
