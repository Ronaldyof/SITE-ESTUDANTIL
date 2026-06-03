import { Box, Typography, Stack, Paper, } from "@mui/material";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contatos() {

   const openWhatsapp = () => {
      const link = "https://wa.me/5597984274012";
      window.open(link, '_blank');
   }



   return (
      <>
         <Box>
            <Typography variant="h5" mb={2}
               sx={{
                  marginBottom: 2,
               }}>
               Entre em contato por:
            </Typography>
            <Stack spacing={2}>
               <Paper sx={{
                  p: 1,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                     transform: 'translateY(-4px) translateX(-4px)',
                     boxShadow: 8
                  },
               }}>
                  <Typography variant="body1">
                     Telefone
                  </Typography>
                  <Typography variant="body2">
                     (97) 98427-4012
                  </Typography>
               </Paper>

               <Paper onClick={(openWhatsapp)}
                  sx={{
                     p: 1,
                     cursor: 'pointer',
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) translateX(-4px)',
                        boxShadow: 8
                     },
                  }}>
                  <Typography variant="body1">
                     Whatsapp
                  </Typography>
                  <Typography variant="body2">
                     (97) 98427-4012
                  </Typography>
               </Paper>


               <Paper sx={{
                  p: 1,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                     transform: 'translateY(-4px) translateX(-4px)',
                     boxShadow: 8
                  },
               }}>
                  <Typography variant="body1">
                     E-mail
                  </Typography>
                  <Typography variant="body2">
                     iarleylacerda14@gmail.com
                  </Typography>
               </Paper>

               <Paper sx={{
                  p: 1,
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  '&:hover': {
                     transform: 'translateY(-4px) translateX(-4px)',
                     boxShadow: 8
                  },}}
                  >
                  <Typography variant="body1">
                     Localização
                  </Typography>

                  <Typography variant="body2">
                     R. qualquer, 123, Bairro qualquer, Cidade - Estado
                  </Typography>
               </Paper>
            </Stack>
            <Box  sx={{
               marginTop: 2,
               }}
             >
               <Typography variant="h6">
                  siga nas redes sociais
               </Typography>

               <Box sx={{
                  display: 'flex',
                  gap: 1,
                  marginTop: 1,
                  }}>

                  <InstagramIcon sx={{
                     cursor: 'pointer',
                     borderRadius: 2,
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) ',
                     },
                     }}
                     onClick={(() => window.open('https://www.instagram.com/dev_bobzin', '_blank'))}
                  />
                  
                  <XIcon sx={{
                     cursor: 'pointer',
                     borderRadius: 2,
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) ',
                     },
                     }}
                  />

                  <FacebookIcon sx={{
                     cursor: 'pointer',
                     borderRadius: 2,
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) ',
                     },
                     }}
                  />

                  <LinkedInIcon sx={{
                     cursor: 'pointer',
                     borderRadius: 2,
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) ',
                     },
                     }}
                  />

                  <GitHubIcon sx={{
                     cursor: 'pointer',
                     borderRadius: 2,
                     transition: 'all 0.4s ease',
                     '&:hover': {
                        transform: 'translateY(-4px) ',
                     },
                     }}
                  />
               </Box>
            </Box>
         </Box>
      </>
   );
}
export default Contatos;