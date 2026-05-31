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
                nome: 'Notas',
                resumo: 'Notas semestrais.',
                descricao: 'PROGRAMAÇÃO ORIENTADA A OBJETOS  ㅤㅤㅤ 1º Semestre: 7,5 | 2º Semestre: 8,0 ',
                descricao1: 'BANCO DE DADOS  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ 1º Semestre: 8,0 | 2º Semestre: 8,5  ',
                foto: 'https://i.pinimg.com/1200x/73/e0/ee/73e0ee753d5081ce93d88dca157a23f7.jpg',
            },
            {
                nome: 'Provas',
                resumo: 'Datas de avaliações.',
                descricao: ' DIA 17/11 - PROGRAMAÇÃO ORIENTADA A OBJETOS ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  DIA 24/11 - BANCO DE DADOS',
                descricao1: 'DIA 01/12 - PROVA FINAL DE PROGRAMAÇÃO ORIENTADA A OBJETOS ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ DIA 08/12 - PROVA FINAL DE BANCO DE DADOS',
                foto: 'https://i.pinimg.com/1200x/1c/07/01/1c070150f6e5b66bc733f4f992e93531.jpg',
            },
            {
                nome: 'Feriados',
                resumo: 'Dias sem aula.',
                descricao: 'DIA 15/11 - PROCLAMAÇÃO DA REPÚBLICA ㅤㅤㅤ  DIA 25/12 - NATAL',
                descricao1: 'DIA 01/01 - ANO NOVO ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ  DIA 20/01 - DIA DE SÃO SEBASTIÃO',
                foto: 'https://i.pinimg.com/736x/be/8b/6a/be8b6a79fc85fd370f95b56482100c40.jpg',
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
                foto: 'https://i.pinimg.com/1200x/97/e9/6d/97e96d59aaddac07bd44d86cc1e1d1d9.jpg',
            },
            {
                nome: 'Eletrotécnica',
                resumo: 'Curso técnico.',
                descricao: 'Curso voltado para instalações elétricas, comandos elétricos e sistemas de potência.',
                foto: 'https://i.pinimg.com/736x/93/d4/78/93d47831aaea2fb58be27f3cd9299529.jpg',
            },
            {
                nome: 'Administração',
                resumo: 'Curso técnico.',
                descricao: 'Curso relacionado a construção civil, projetos, materiaishttps://i.pinimg.com/1200x/77/6c/78/776c78b869e72d984b7dae22bbdab81d.jpge execução de obras.',
                foto: 'https://i.pinimg.com/1200x/77/6c/78/776c78b869e72d984b7dae22bbdab81d.jpg',
            },
            {
                nome: 'Engenharia de Software',
                resumo: 'Curso superior.',
                descricao: 'Curso superior voltado para desenvolvimento de software, metodologias ágeis e engenharia de requisitos.',
                foto: 'https://i.pinimg.com/736x/cc/5c/1a/cc5c1a3ecb6bc8775cfa544563cc48dc.jpg',
            },
            {
                nome: 'Sistemas de Informação',
                resumo: 'Curso superior.',
                descricao: 'Curso superior voltado para desenvolvimento de sistemas, análise de requisitos e engenharia de software.',
                foto: 'https://i.pinimg.com/1200x/de/a9/8a/dea98abca535991c6ac5e45d3f30494a.jpg',
            },
            {
                nome: 'Análise e Desenvolvimento de Sistemas',
                resumo: 'Curso superior.',
                descricao: 'Curso superior voltado para análise e desenvolvimento de sistemas, engenharia de software e metodologias de desenvolvimento.',
                foto: 'https://i.pinimg.com/736x/35/df/d6/35dfd6b261ef41a231f94de287d61161.jpg',
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
                descricao: 'Dia 12/06 - Reunião de pais e mestres às 19h no auditório.',
                descricao1: 'Dia 20/06 - Entrega de boletins semestrais para os alunos do ensino médio.',
                foto: 'https://i.pinimg.com/736x/55/02/c7/5502c7df9b65d0d47259aa5f791cad94.jpg',
            },
            {
                nome: 'Prazos',
                resumo: 'Datas importantes.',
                descricao: 'Dia 30/06 - Prazo final para matrícula do segundo semestre.',
                descricao1: 'Dia 15/07 - Início das aulas do segundo semestre.',
                foto: 'https://i.pinimg.com/1200x/03/a1/9b/03a19b3573644e99b67a2754ac741824.jpg',
            },
            {
                nome: 'Notícias',
                resumo: 'Atualizações recentes.',
                descricao: 'Dia 10/06 - Inauguração do novo laboratório de informática com equipamentos de última geração.',
                descricao1: 'Nota de pesar - Dia 18/06 - Lamentamos informar o falecimento do professor Carlos Lima, um grande educador e colega querido por todos. Nossos pensamentos estão com sua família e amigos neste momento difícil.',
                foto: 'https://i.pinimg.com/736x/c6/b0/50/c6b050be4d3fc95e0e64b5675bab2024.jpg',
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
                descricao: 'Informamos que no dia 30/06, às 19h, teremos a palestra "Inovações em Tecnologia" com o renomado Gustavo Guanabara, no auditório principal. Não perca esta oportunidade de aprender com um dos maiores especialistas em tecnologia do país!',
                descricao1: 'Informamos que no dia 15/07, às 18h, teremos a palestra "Carreiras em TI" com a especialista em recrutamento de tecnologia, Ana Pereira, no auditório.',
                foto: 'https://i.pinimg.com/736x/d7/65/44/d76544b6872e83a22c64ea3346151092.jpg',
            },
            {
                nome: 'Oficinas',
                resumo: 'Atividades práticas.',
                descricao: 'Informamos que no dia 05/07, das 14h às 17h, teremos a oficina "Desenvolvimento de Aplicativos Móveis" com o professor João Silva, no laboratório de informática. Venha aprender a criar seu próprio aplicativo para Android e iOS!',
                descricao1: 'Informamos que no dia 12/07, das 10h às 13h, teremos a oficina "Introdução à Programação" com o professor Maria Santos, no laboratório de informática.',
                foto: 'https://i.pinimg.com/1200x/d3/92/76/d3927622b5befe0f891d01bc9978e607.jpg',
            },
            {
                nome: 'Semana Acadêmica',
                resumo: 'Programação especial.',
                descricao: 'Informamos que de 20 a 24/07, teremos a Semana Acadêmica com palestras, workshops e atividades culturais. Confira a programação completa no site do campus e participe!',
                descricao1: 'Informamos que de 20 a 24/07, teremos a Semana Acadêmica com palestras, workshops e atividades culturais. Confira a programação completa no site do campus e participe!',
                foto: 'https://i.pinimg.com/736x/39/ce/30/39ce30c6de5aeeda56a976d52c75a1ce.jpg',
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
                    <Typography
                        sx={{
                            mt: 2,
                            color: 'var(--text-secondary)',
                            whiteSpace: 'pre-line',
                            lineHeight: 1.8,
                        }}
                    >
                        {detalheAberto?.descricao1}
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