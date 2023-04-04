import { useEffect } from 'react'
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import Heading from '../../components/Heading/Heading'
import help_center from '../../assets/help-center.png'
// import team from './team.json'
// import patrons from './patrons.json'

const HelpCenter = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <Box
      sx={{
        minHeight: '100vh',
        pt: 15,
        pb: 5,
      }}
    >
      <Container>
        <Grid container spacing={7} alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={6}>
            <Box
              sx={{
                background: '#EEEEEE',
                borderRadius: '20px',
                width: '100%',
                boxShadow:
                  '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                overflow: 'hidden',
                textAlign: 'center',
              }}
            >
              <Box
                component={'img'}
                sx={{
                  objectFit: 'contain',
                  m: 'auto',
                  maxWidth: '100%',
                  maxHeight: '100%',
                }}
                src={help_center}
                alt="Image"
              />
            </Box>
          </Grid>

          <Grid item xs={12} sm={5}>
            <Stack direction="column" spacing={2} justifyContent="flext-start">
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Help for all
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
                align="center"
                paragraph
              >
                Being a mWarrior is a privilege, a grand opportunity to make a positive dent in this world. It gives you a chance to wash away the age-old societal taboo surrounding mental health. It allows you to directly impact the life of your peers. So, you can understand it is a big responsibility, one to be taken seriously.

Being a mWarrior means, being there for your peer, being the best listener one can be. 
              </Typography>
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Do's and Dont's
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
                align="center"
                paragraph
              >
                <ol>
                    <li>Self-care is self-preservation.</li>
                    <li>You must have your own oxygen mask on first.</li>
                    <li>Don’t moralize to your user.</li>
                </ol>
              </Typography>
              {/* <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
                align="center"
                paragraph
              >
                AntarDarshnam uses the latest technology like IoT and Blockchain
                to overcome various challenges in the art market. Piracy, no
                royalty and long gestation period are very common challenges
                faced by an artist.
              </Typography> */}
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color="primary"
                gutterBottom
              >
                Our Mission!
              </Typography>
              <Typography
                variant="h4"
                fontWeight="400"
                color="text.secondary"
                align="center"
                paragraph
              >
                <i>
                  To <b>enhance</b> the <b>Mental Health of people</b>{' '}
                  leveraging <b>technology.</b>
                </i>
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Container>

      {/* <Container>
        <Heading heading="Our Team" align="center" />
        <Grid container spacing={6} px={2} mb={6} justifyContent="center">
          {team.map((item, i) => (
            <Grid item key={i} xs={6} sm={4} md={2.4}>
              <Card
                sx={{
                  padding: 0,
                  borderRadius: '10px',
                  maxWidth: 300,
                  minHeight: 350,
                  margin: 'auto',
                  background: '#EEEEEE',
                  boxShadow:
                    '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                }}
              >
                <img
                  style={{
                    height: "250px",
                    width: "100%",
                    objectPosition: "center top",
                    objectFit: "cover",
                  }}
                  src={item.img}
                  alt={item.name}
                />
                <Typography
                  fontWeight="700"
                  variant="button"
                  component="h5"
                  align="center"
                  gutterBottom
                  px={2}
                >
                  {item.name}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontWeight="500"
                  align="center"
                  color="#7C7C7C"
                  paragraph
                  px={2}
                >
                  {item.designation}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Heading heading="Mentors & Patrons" align="center" />
        <Grid container spacing={6} px={2} mb={6} justifyContent="center">
          {patrons.map((item, i) => (
            <Grid item key={i} xs={6} sm={4} md={2.4}>
              <Card
                sx={{
                  padding: 0,
                  borderRadius: '10px',
                  maxWidth: 300,
                  minHeight: 360,
                  margin: 'auto',
                  background: '#EEEEEE',
                  boxShadow:
                    '-12px -12px 24px #FFFFFF, 12px 12px 24px rgba(142, 209, 252, 0.25)',
                }}
              >
                <img
                  style={{
                    height: '250px',
                    width: '100%',
                    backgroundPosition: 'center',
                  }}
                  src={item.img}
                  alt={item.name}
                />
                <Typography
                  fontWeight="700"
                  variant="button"
                  component="h5"
                  align="center"
                  gutterBottom
                  px={2}
                >
                  {item.name}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container> */}
    </Box>
  )
}

export default HelpCenter;
