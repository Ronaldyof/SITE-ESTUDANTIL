import * as React from 'react';
import Navbar from '../components/Navbar';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function Contato() {
   return (
      <>
         <Navbar />
         <Box>
            <Box
   sx={{
      textAlign: 'center',
      mb: 8,
   }}
>
   <Typography
      variant="h2"
      fontWeight={700}
      color="var(--text)"
   >
      Fale Conosco!
   </Typography>

   <Typography
      variant="h6"
      sx={{
         color: 'var(--text-secondary)',
         mt: 2,
      }}
   >
      Entre em contato conosco.
   </Typography>
</Box>

          
          </Box>
      </>
   );
}

export default Contato;