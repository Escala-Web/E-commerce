import { Box, Container, Paper, Typography } from "@mui/material"
import { Link } from "react-router-dom"

export const NotFount = () => {
    return (
        <>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh'}}>
                <Box component={Paper} style={{padding: '4rem'}}>
                    <Typography variant="h2" component='div' textAlign='center'>Página não encontrada</Typography>
                    <Link to='/administrativo'>
                        <Typography variant="h4" component='div' textAlign='center' marginTop='1rem'>Tentar novamente </Typography>
                    </Link>
                </Box>
            </Container>
        </>
    )
}