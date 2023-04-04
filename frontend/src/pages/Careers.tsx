import { useEffect } from 'react'
import { Box, Card, Container, Grid, Stack, Typography } from '@mui/material'
import Heading from '../components/Heading/Heading'
import about from '../assets/about1.png'
// import team from './team.json'
// import patrons from './patrons.json'

const About = () => {
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
      <Container sx={{backgroundColor: 'primary.main'}}>
        <Grid container spacing={7} alignItems="center" justifyContent="center">
          {/* <Grid item xs={12} sm={6}>
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
                  maxHeight: '75vh',
                }}
                src={about}
                alt="Image"
              />
            </Box>
          </Grid> */}

          <Grid item xs={12} sm={5}>
            <Stack direction="column" spacing={2} justifyContent="flext-start">
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color={'white'}
                gutterBottom
              >
               Are you the hero this world needs?
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color="text.secondary"
                align="center"
                fontSize="36px"
                paragraph
              >
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                fontSize="80px"
                color={'white'}
                align="center"
                paragraph
              >
              Build | Improve | Spread Smile
              </Typography>
              <Typography
                variant="body2"
                fontSize="45px"
                fontWeight="400"
                
                color={'white'}
                align="center"
                paragraph
              >
                AntarDarshnam is a Psychology based organization. Apart from
                bridging the gap between the schools and councellors, we use
                latest technology to overcome various pschological challenges
                faced by students. Resources Company Newsletter
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
                color={'white'}
                gutterBottom
              >
                Our Mission!
              </Typography>
              <Typography
                variant="h4"
                fontWeight="400"
                color={'white'}
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
      <Container sx={{
        minHeight: '100vh',
        pt: 15,
        pb: 5,
      }}>
        <Grid container spacing={7} alignItems="center" justifyContent="center">

          <Grid item xs={12} sm={5}>
            <Stack direction="column" spacing={2} justifyContent="flext-start">
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color={'black'}
                gutterBottom
              >
                Are you the hero this world needs?
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color={'black'}
                align="center"
                paragraph
              >
                And so our tagline “Live Healthy”!
              </Typography>
              <Typography
                variant="body2"
                fontWeight="400"
                color={'black'}
                align="center"
                paragraph
              >
                AntarDarshnam is a Psychology based organization. Apart from
                bridging the gap between the schools and councellors, we use
                latest technology to overcome various pschological challenges
                faced by students. Resources Company Newsletter
              </Typography>
              <Typography
                component="h3"
                variant="h3"
                align="center"
                color={'black'}
                gutterBottom
              >
                Our Mission!
              </Typography>
              <Typography
                variant="h4"
                fontWeight="400"
                color={'black'}
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

export default About

// import classes from './Careers.module.css';

// const Careers = () => {
//     return (
//         <div className={classes.main}>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio modi quod odio obcaecati voluptatibus, ea nam qui, minima voluptas doloribus illo eos provident! Ad autem provident corrupti sequi cumque nulla.
//             Maiores, quidem tempore. Dicta suscipit consequuntur facere magni, officia similique doloremque quaerat enim itaque architecto nihil mollitia, quia asperiores exercitationem nostrum nulla commodi. Voluptatibus quis vel, debitis minus nam pariatur!
//             Dolore aspernatur odit illum commodi deserunt vero deleniti numquam optio ipsum assumenda voluptate adipisci, sequi eum, consequuntur quia debitis corporis placeat velit totam in eveniet qui sit rerum expedita. Eos.
//             Tempora, rem at. Eveniet, illo earum. Iste atque nesciunt numquam, unde modi ab beatae ratione. Soluta, explicabo nihil minima modi quasi quo vitae exercitationem dignissimos praesentium repudiandae porro sunt molestias?
//             Sapiente distinctio voluptatem ab facere omnis quos facilis laboriosam cum ipsa, earum eveniet sunt dolores ipsum odit enim voluptatibus suscipit libero, doloremque iste ratione velit illo reprehenderit eligendi? Ipsa, aliquid.
//             Enim commodi magni ratione architecto voluptas excepturi, rerum perferendis ullam voluptatum eos eaque quam aliquid odio officiis eveniet fugit tenetur, quibusdam voluptates corporis ea. In at quo blanditiis ipsam! Recusandae.
//         </div>
//     );
// };

// export default Careers;