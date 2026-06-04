import React from 'react';
import Navbar from '../components/Navbar';
import Contatos from '../components/Contatos';
import EmailForm from '../components/EmailForm';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Contato() {
   return (
      <>
         <Navbar />

         {/* Cabeçalho */}
         <Box
            sx={{
               py: 8,
               textAlign: 'center',
            }}
         >

            <Typography variant="h3" fontWeight="bold"
               sx={{
                  marginTop: 2,
               }}
            >
               Fale conosco
            </Typography>


         </Box>

         {/* Conteúdo principal */}
         <Box
            sx={{
               width: '100%',
               maxWidth: '1600px',
               mx: 'auto',
               px: 3,
               py: 6,
               display: 'grid',
               gridTemplateColumns: {
                  xs: '1fr',
                  md: '1fr 1fr',
               },
               gap: 30,
               alignItems: 'start',
            }}
         >
            <Contatos />

            <EmailForm />
         </Box>
      </>
   );
}
