import * as React from 'react';
import Navbar from '../components/Navbar';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Contato() {

   return (
      <>
         <Navbar />

         <Box
            sx={{
               minHeight: '100vh',
               pt: 12,
               pb: 6,
               px: 4,
               backgroundColor: 'var(--bg)',
               color: 'var(--text)',
            }}
          > 
            <Box sx={{ mb: 5, textAlign: 'center' }}>
               <Typography variant="h3" fontWeight={800} gutterBottom>
                  Fale Conosco!
               </Typography>

               <Typography variant="h6" sx={{ color: 'var(--text-secondary)' }}>
                  Alguma reclamação?j
               </Typography>
            </Box>


         </Box>
      </>
   );
}

export default Contato;