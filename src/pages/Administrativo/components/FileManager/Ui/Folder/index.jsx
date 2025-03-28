import { Container } from "./styles"
import { FaFolder } from "react-icons/fa";

export const Folder = () => {

    return (
        <>
            <Container>
                <div className="folder">
                    <FaFolder />
                </div>
                <div className="name">
                    <p>Iphone</p>
                </div>
            </Container>
        </>
    )
}