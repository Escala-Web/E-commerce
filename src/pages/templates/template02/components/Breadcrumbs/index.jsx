import { Link, useParams } from "react-router-dom"
import { Container } from "./styles"
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export const Breadcrumb = ({ page, productQTD }) => {
  
  
    return (
      <>
        <Container>
          <div className="container_title">
            <Link to="/">Página Inicial</Link>
            <MdKeyboardDoubleArrowRight className="icon-breadcrumb" />
            <p>{page}</p>
          </div>
          <div className="container_total">
            <p>Produtos encontrados ({productQTD?.total})</p>
          </div>
        </Container>
      </>
    );
  };
  

  