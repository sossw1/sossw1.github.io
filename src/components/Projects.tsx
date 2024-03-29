import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Typography
} from '@mui/material';
import theme from '../Theme';
import { useMediaQuery } from '@mui/material';

export default function Projects() {
  const size450Down = useMediaQuery(theme.breakpoints.down(450));
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container sx={{ mb: '3rem' }}>
      <Typography variant='h4' component='h2' mb='2rem' sx={{ ...theme.serif }}>
        <b style={{ fontSize: '40px', marginRight: '0.5rem' }}>02.</b> Projects
      </Typography>
      <Grid container direction='row' justifyContent='center' spacing={4}>
        <Grid item textAlign='center' xs={12} sm={10} md={8} lg={6}>
          <Card
            sx={{
              borderRadius: '10px'
            }}
          >
            <CardHeader
              title={
                <Typography variant='h5' sx={{ ...theme.serif }}>
                  Chatter
                </Typography>
              }
            />
            <CardMedia
              component='img'
              image='/images/chatter-screenshot.png'
              height={lgUp ? '450px' : undefined}
              alt='Chatter app screenshot'
            />
            <CardContent>
              <Typography variant='body2' sx={{ ...theme.sans }}>
                A real-time chat application that allows you to add friends,
                <br hidden={size450Down} />
                join chat rooms and send messages to people
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item textAlign='center' xs={12} sm={10} md={8} lg={6}>
          <Card sx={{ borderRadius: '10px' }}>
            <CardHeader
              title={
                <Typography variant='h5' sx={{ ...theme.serif }}>
                  Takeoff
                </Typography>
              }
            />
            <CardMedia
              component='img'
              image='/images/takeoff-screenshot.png'
              height={lgUp ? '450px' : undefined}
              alt='Takeoff app screenshot'
            />
            <CardContent>
              <Typography variant='body2' sx={{ ...theme.sans }}>
                Social media hub for travelers to share their trips
                <br hidden={smDown} /> and plan itineraries for future getaways
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item textAlign='center' xs={12} sm={10} md={8} lg={6}>
          <Card sx={{ borderRadius: '10px' }}>
            <CardHeader
              title={
                <Typography variant='h5' sx={{ ...theme.serif }}>
                  Project Purple Planet
                </Typography>
              }
            />
            <CardMedia
              component='img'
              image='/images/purple-planet-screenshot.png'
              height={lgUp ? '450px' : undefined}
              alt='Project Purple Planet app screenshot'
            />
            <CardContent>
              <Typography variant='body2' sx={{ ...theme.sans }}>
                Project manager application similar to Kanban
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
