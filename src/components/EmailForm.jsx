import { useState } from "react";
import { Button, Container, Typography, TextField, Box } from "@mui/material";
// import { EmailJSResponseStatus } from "@emailjs/browser";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";

function EmailEnvio() {
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [mensagem, setMensagem] = useState('');
   const [assunto, setAssunto] = useState('');
   const [loading, setLoading] = useState(false);

   const handleEnvio = () => {

      setLoading(true);

      const templateParams = {
         nome,
         email,
         assunto,
         mensagem,
      };

      emailjs
         .send(
            'service_b1oi6kn', //id do serviço
            'template_uyglczn', //id do template
            templateParams,
            'UWJlb3pdvokW4OylK'  // id publico
         )
         .then(() => {
            Swal.fire({
               title: 'Enviado',
               text: 'E-mail enviado com sucesso!!',
               icon: 'success',
               draggable: true,
            });
            setNome('');
            setEmail('');
            setAssunto('');
            setMensagem('');
         })
         .catch((error) => {
            console.error(error);
            Swal.fire({
               title: 'ERRO!',
               text: 'ERRO AO TENTAR ENVIAR E-MAIL!!!!',
               icon: 'error',
               draggable: true,
            })
         })
         .finally(() => {
            setLoading(false);
         });
   };

   return (
      <Box
         sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 5
         }}
      >

         <Typography variant="h5" mb={4}>
            Contate-nos
         </Typography>

         <TextField
            fullWidth
            label='Seu nome'
            variant="outlined"
            margin="normal"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            sx={{
               '& .MuiInputBase-input': { color: 'var(--text)' },
               '& .MuiInputLabel-root': { color: 'var(--text)' },
               '& .MuiOutlinedInput-root fieldset': { borderColor: 'var(--border)' },
               '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#d37325' },
               '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#e9862a', },
               '& .MuiInputLabel-root.Mui-focused': { color: '#e9862a' },
            }}
         />
         <TextField
            fullWidth
            label='Seu E-mail'
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
               '& .MuiInputBase-input': { color: 'var(--text)' },
               '& .MuiInputLabel-root': { color: 'var(--text)' },
               '& .MuiOutlinedInput-root fieldset': { borderColor: 'var(--border)' },
               '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#d37325' },
               '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#e9862a', },
               '& .MuiInputLabel-root.Mui-focused': { color: '#e9862a' },
            }}
         />

         <TextField
            fullWidth
            label='Assunto'
            variant="outlined"
            margin="normal"
            value={assunto}
            onChange={(e) => setAssunto(e.target.value)}
            sx={{
               '& .MuiInputBase-input': { color: 'var(--text)' },
               '& .MuiInputLabel-root': { color: 'var(--text)' },
               '& .MuiOutlinedInput-root fieldset': { borderColor: 'var(--border)' },
               '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#d37325' },
               '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#e9862a', },
               '& .MuiInputLabel-root.Mui-focused': { color: '#e9862a' },
            }}
         />

         <TextField
            fullWidth
            label='sua mensagem'
            variant="outlined"
            margin="normal"
            multiline
            rows={4}
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            sx={{
               '& .MuiInputBase-input': { color: 'var(--text)' },
               '& .MuiInputLabel-root': { color: 'var(--text)' },
               '& .MuiOutlinedInput-root fieldset': { borderColor: 'var(--border)' },
               '& .MuiOutlinedInput-root:hover fieldset': { borderColor: '#d37325' },
               '& .MuiOutlinedInput-root.Mui-focused fieldset': { borderColor: '#e9862a', },
               '& .MuiInputLabel-root.Mui-focused': { color: '#e9862a' },
            }}

         />
         <Button
            fullWidth
            variant="contained"
            color="warning"
            size="large"
            disabled={loading}
            onClick={handleEnvio}
            sx={{ mt: 3 }}
         >
            {loading ? 'Enviando...' : 'Enviar'}
         </Button>
      </Box>
   );
}
export default EmailEnvio;