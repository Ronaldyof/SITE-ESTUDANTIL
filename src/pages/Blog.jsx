import * as React from 'react';
import Navbar from '../components/Navbar';

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

const cards = [
    {
        titulo: '📅 Calendário Acadêmico',
        texto: 'Consulte datas de matrícula, provas, feriados e eventos acadêmicos.',
        imagem: 'https://i.pinimg.com/736x/ca/98/9a/ca989a21ee96f789d39c39a05b6dc697.jpg',
        itens: [
            {
                nome: 'Matrículas',
                resumo: 'Período oficial de matrícula.',
                descricao: 'Aqui você pode colocar informações detalhadas sobre matrícula, rematrícula, documentos necessários e prazos.',
                foto: 'https://i.pinimg.com/736x/ca/98/9a/ca989a21ee96f789d39c39a05b6dc697.jpg',
            },
            {
                nome: 'Provas',
                resumo: 'Datas de avaliações.',
                descricao: 'Espaço para informar semanas de prova, recuperação, avaliações finais e orientações.',
                foto: 'https://i.pinimg.com/736x/ca/98/9a/ca989a21ee96f789d39c39a05b6dc697.jpg',
            },
            {
                nome: 'Feriados',
                resumo: 'Dias sem aula.',
                descricao: 'Aqui entram feriados, recessos e datas importantes do calendário acadêmico.',
                foto: 'https://i.pinimg.com/736x/ca/98/9a/ca989a21ee96f789d39c39a05b6dc697.jpg',
            },
        ],
    },
    {
        titulo: '📚 Biblioteca',
        texto: 'Acesse informações sobre acervo, empréstimos e horários da biblioteca.',
        imagem: 'https://i.pinimg.com/1200x/00/63/59/006359415ecc74da169bcf3da356cfff.jpg',
        itens: [
            {
                nome: 'Acervo',
                resumo: 'Livros disponíveis.',
                descricao: 'Aqui você pode colocar informações sobre livros, materiais digitais e consulta ao acervo.',
                foto: 'https://i.pinimg.com/736x/49/97/87/499787d74a115b640d945afcecafadf0.jpg',
            },
            {
                nome: 'Empréstimos',
                resumo: 'Regras e prazos.',
                descricao: 'Coloque aqui as regras de empréstimo, renovação e devolução de livros.',
                foto: 'https://i.pinimg.com/736x/95/aa/b5/95aab565bec764991e60e5d8da2b66d1.jpg',
            },
            {
                nome: 'Horários',
                resumo: 'Funcionamento da biblioteca.',

                descricao: `
                Segunda-feira: 07h às 21h
                Terça-feira: 07h às 21h
                Quarta-feira: 07h às 21h
                Quinta-feira: 07h às 21h
                Sexta-feira: 07h às 21h

                Sábado: 08h às 12h
                Domingo e feriados: Fechado.
`,

                foto: 'https://i.pinimg.com/736x/e6/94/d8/e694d89f61bf601bcd73de4d9a26cb3b.jpg',
            },
        ],
    },
    {
        titulo: '👨‍🏫 Professores',
        texto: 'Conheça os docentes, áreas de atuação e contatos institucionais.',
        imagem: 'https://i.pinimg.com/736x/8e/c5/24/8ec524d7b6a60fd712d46870606b7377.jpg',
        itens: [
            {
                nome: 'Prof. João Silva',
                resumo: 'Área: Banco de Dados.',
                descricao: 'Engenharia de Software - UFSC',
                foto: 'https://i.pinimg.com/736x/52/09/f6/5209f6863f1e5a4e552bdbbc30bf20fb.jpg',
            },

            {
                nome: 'Profa. Ana Pereira',
                resumo: 'Área: Programação.',
                descricao: 'Professora da área de programação, lógica e desenvolvimento de sistemas.',
                foto: 'https://i.pinimg.com/736x/fd/c0/d5/fdc0d57de594b1b3d58178de73f4d2a7.jpg',
            },
            {
                nome: 'Profa. Carla Mendes',
                resumo: 'Área: Programação, Banco de Dados. E Infraestrutura.',
                descricao: 'Professora da área de programação, lógica e desenvolvimento de sistemas, banco de dados e infraestrutura.',
                foto: 'https://i.pinimg.com/736x/74/22/09/7422099466eb4c742699e787c0e944de.jpg',
            },
            {
                nome: 'Profa. Maria Souza',
                resumo: 'Área: Banco de Dados.',
                descricao: 'Professora da área de banco de dados, modelagem, SQL e sistemas de informação.',
                foto: 'https://i.pinimg.com/736x/5f/cb/0a/5fcb0a5578d81bba2917013c511cc247.jpg',
            },
            {
                nome: 'Prof. Carlos Lima',
                resumo: 'Área: Redes.',
                descricao: 'Professor com atuação em redes de computadores, segurança e infraestrutura.',
                foto: 'https://i.pinimg.com/1200x/57/be/84/57be849433fc4628a2b82122fd2284d8.jpg',
            },
            
        ],
    },
    {
        titulo: '🎓 Cursos',
        texto: 'Veja os cursos técnicos, superiores e formações ofertadas pela instituição.',
        imagem: 'https://i.pinimg.com/1200x/ef/49/40/ef494009bf56fe0cecd592053147ef50.jpg',
        itens: [
            {
                nome: 'Informática',
                resumo: 'Curso técnico.',
                descricao: 'Curso voltado para programação, manutenção, banco de dados e desenvolvimento web.',
                foto: 'https://i.pinimg.com/1200x/ef/49/40/ef494009bf56fe0cecd592053147ef50.jpg',
            },
            {
                nome: 'Eletrotécnica',
                resumo: 'Curso técnico.',
                descricao: 'Curso voltado para instalações elétricas, comandos elétricos e sistemas de potência.',
                foto: 'https://i.pinimg.com/1200x/ef/49/40/ef494009bf56fe0cecd592053147ef50.jpg',
            },
            {
                nome: 'Edificações',
                resumo: 'Curso técnico.',
                descricao: 'Curso relacionado a construção civil, projetos, materiais e execução de obras.',
                foto: 'https://i.pinimg.com/1200x/ef/49/40/ef494009bf56fe0cecd592053147ef50.jpg',
            },
        ],
    },
    {
        titulo: '📢 Avisos',
        texto: 'Fique por dentro dos comunicados importantes e atualizações do campus.',
        imagem: 'https://i.pinimg.com/736x/7d/c5/f0/7dc5f095c34b7f4cd219657a6f1bb192.jpg',
        itens: [
            {
                nome: 'Comunicados',
                resumo: 'Avisos gerais.',
                descricao: 'Área para comunicados importantes, mudanças de horário, reuniões e orientações.',
                foto: 'https://i.pinimg.com/736x/7d/c5/f0/7dc5f095c34b7f4cd219657a6f1bb192.jpg',
            },
            {
                nome: 'Prazos',
                resumo: 'Datas importantes.',
                descricao: 'Espaço para informar prazos de inscrição, entrega de documentos e solicitações.',
                foto: 'https://i.pinimg.com/736x/7d/c5/f0/7dc5f095c34b7f4cd219657a6f1bb192.jpg',
            },
            {
                nome: 'Notícias',
                resumo: 'Atualizações recentes.',
                descricao: 'Aqui ficam notícias e atualizações públicas da instituição.',
                foto: 'https://i.pinimg.com/736x/7d/c5/f0/7dc5f095c34b7f4cd219657a6f1bb192.jpg',
            },
        ],
    },
    {
        titulo: '🎉 Eventos',
        texto: 'Acompanhe palestras, oficinas, semanas acadêmicas e eventos estudantis.',
        imagem: 'https://i.pinimg.com/1200x/4c/de/9b/4cde9be3286d7e6378273eb435f69a1f.jpg',
        itens: [
            {
                nome: 'Palestras',
                resumo: 'Eventos formativos.',
                descricao: 'Informações sobre palestras, convidados, horários e locais.',
                foto: 'https://i.pinimg.com/1200x/4c/de/9b/4cde9be3286d7e6378273eb435f69a1f.jpg',
            },
            {
                nome: 'Oficinas',
                resumo: 'Atividades práticas.',
                descricao: 'Espaço para oficinas, minicursos e atividades práticas para estudantes.',
                foto: 'https://i.pinimg.com/1200x/4c/de/9b/4cde9be3286d7e6378273eb435f69a1f.jpg',
            },
            {
                nome: 'Semana Acadêmica',
                resumo: 'Programação especial.',
                descricao: 'Detalhes sobre programação, inscrições e participação em semanas acadêmicas.',
                foto: 'https://i.pinimg.com/1200x/4c/de/9b/4cde9be3286d7e6378273eb435f69a1f.jpg',
            },
        ],
    },
];

function Blog() {
    const [modalAberto, setModalAberto] = React.useState(null);
    const [detalheAberto, setDetalheAberto] = React.useState(null);

    function abrirModal(card) {
        setModalAberto(card);
    }

    function fecharModal() {
        setModalAberto(null);
    }

    function abrirDetalhe(item) {
        setDetalheAberto(item);
    }

    function fecharDetalhe() {
        setDetalheAberto(null);
    }

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
                        SEJA BEM-VINDO!
                    </Typography>

                    <Typography variant="h6" sx={{ color: 'var(--text-secondary)' }}>
                        Explore as principais informações e recursos do nosso campus em um só lugar.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: '100%',
                        maxWidth: '1200px',
                        margin: '0 auto',
                        display: 'grid',
                        gridTemplateColumns: {
                            xs: '1fr',
                            sm: '1fr 1fr',
                            md: 'repeat(3, 1fr)',
                        },
                        gap: 4,
                    }}
                >
                    {cards.map((card) => (
                        <Card
                            key={card.titulo}
                            sx={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 4,
                                boxShadow: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                backgroundColor: 'var(--card-bg)',
                                color: 'var(--card-text)',
                            }}
                        >
                            <CardMedia
                                component="img"
                                image={card.imagem}
                                alt={card.titulo}
                                sx={{
                                    height: 250,
                                    objectFit: 'cover',
                                }}
                            />

                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="div" fontWeight={700}>
                                    {card.titulo}
                                </Typography>

                                <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                                    {card.texto}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button size="small" onClick={() => abrirModal(card)}>
                                    Acessar
                                </Button>
                            </CardActions>
                        </Card>
                    ))}
                </Box>
            </Box>

            <Modal open={Boolean(modalAberto)} onClose={fecharModal}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '85%',
                        maxWidth: '1000px',
                        maxHeight: '85vh',
                        overflowY: 'auto',
                        bgcolor: 'var(--card-bg)',
                        color: 'var(--card-text)',
                        borderRadius: 4,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h4" fontWeight={800} mb={3}>
                        {modalAberto?.titulo}
                    </Typography>

                    <Box
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: {
                                xs: '1fr',
                                sm: '1fr 1fr',
                                md: 'repeat(3, 1fr)',
                            },
                            gap: 3,
                        }}
                    >
                        {modalAberto?.itens.map((item) => (
                            <Card
                                key={item.nome}
                                sx={{
                                    borderRadius: 3,
                                    backgroundColor: 'var(--bg)',
                                    color: 'var(--text)',
                                }}
                            >
                                <CardMedia
                                    component="img"
                                    image={item.foto}
                                    alt={item.nome}
                                    sx={{
                                        height: 360,
                                        objectFit: 'cover',
                                    }}
                                />

                                <CardContent>
                                    <Typography variant="h6" fontWeight={700}>
                                        {item.nome}
                                    </Typography>

                                    <Typography variant="body2" sx={{ color: 'var(--text-secondary)' }}>
                                        {item.resumo}
                                    </Typography>
                                </CardContent>
                                

                                <CardActions>
                                    <Button size="small" onClick={() => abrirDetalhe(item)}>
                                        Ver detalhes
                                    </Button>
                                </CardActions>
                            </Card>
                        ))}
                    </Box>

                    <Button sx={{ mt: 3 }} onClick={fecharModal}>
                        Fechar
                    </Button>
                </Box>
            </Modal>
            <Modal open={Boolean(detalheAberto)} onClose={fecharDetalhe}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: {
                            xs: '90%',
                            sm: 450,
                        },
                        bgcolor: 'var(--card-bg)',
                        color: 'var(--card-text)',
                        borderRadius: 4,
                        boxShadow: 24,
                        p: 4,
                    }}
                >
                    <Typography variant="h5" fontWeight={800}>
                        {detalheAberto?.nome}
                    </Typography>

                    <Typography
                        sx={{
                            mt: 2,
                            color: 'var(--text-secondary)',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.8,
                        }}
                    >
                        {detalheAberto?.descricao}
                    </Typography>

                    <Button sx={{ mt: 3 }} onClick={fecharDetalhe}>
                        Fechar
                    </Button>
                </Box>
            </Modal>
        </>
    );
}

export default Blog;