import { Button } from "@mui/material"
import { Link } from "react-router-dom"
import { Container } from "./styles"

export const HeaderBar = ({ menu }) => {

    return (
        <>
            <Container >
                <div className="header-bar">
                    {menu?.map((d) => (
                        <Link to={d.link}>
                        <Button className="button-link" variant="contained">{d.title}</Button>
                    </Link>
                    ))}
                </div>
            </Container>
        </>
    )


}