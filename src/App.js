import * as React from 'react'
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

export default function App() {
  return (
    <Container>
      <FlexBox my={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              USDC Balance
            </Typography>
            <Typography variant="h4">{1000}</Typography>
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
              />
              <Button variant="outlined" size="large" sx={{ ml: 2 }}>
                Input
              </Button>
            </FlexBox>
          </CardContent>
        </Card>
      </FlexBox>
      <Grid container spacing={4} justifyContent="center">
        <Grid item>
          <Pool />
        </Grid>
        <Grid item>
          <Pool />
        </Grid>
        <Grid item>
          <Pool />
        </Grid>
      </Grid>
    </Container>
  )
}
