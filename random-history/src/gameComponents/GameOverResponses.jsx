import { Box, Typography } from "@mui/material";

const GameOverResponses = ({score}) => {
  return (
    <Box ml='20px' mr='20px' sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: "wrap"
    }}>
      {score >= 5 ? (
        <Typography color='green' mb='20px' variant='h6'>You Have Conquered History!</Typography >
      ) :
         (<Typography color='red' mb='20px' variant='h6' >You Can't Get Five Points?</Typography >
      )}
    </Box>
  )
}
export default GameOverResponses