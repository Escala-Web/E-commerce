import { Link, useParams } from "react-router-dom"
import { Container, LinkStyle, Title } from "./styles"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Breadcrumb = ({ page }) => {
    const { category } = useParams();
  
    return (
      <>
        <Container>
          <Title>
            <LinkStyle to="/">Página Inicial</LinkStyle>
            <MdKeyboardDoubleArrowRight className="icon-breadcrumb" />
            {page ? (
              page
            ) : (
              category
                .toLowerCase()
                .replace(/-/g, ' ')
                .replace(/\b\w/g, (char) => char.toUpperCase())
            )}
          </Title>
        </Container>
      </>
    );
  };
  

  