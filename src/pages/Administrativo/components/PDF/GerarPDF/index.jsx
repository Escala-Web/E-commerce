import { usePDF } from "../../../../../hooks/pdf";
import { FooterPDF } from "../Footer"
import { HeaderPDF } from "../Header"
import { Container } from "../styles"

export const GerarPDF = ({ children }) => {

    const { elementHTML } = usePDF();

    console.log(elementHTML)

    return (
        <Container 
            id='pdf-relatorio'
        >
            <HeaderPDF />
                {children}
            <FooterPDF />
        </Container>
    )

}