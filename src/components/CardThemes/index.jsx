import { Link } from "react-router-dom"
import { Card, CardBody, CardLink, ConatinerCard, ContainerTitle } from "./styles"
import { useContext } from "react"
import { HeaderConsume } from "../../context/Header"


export const CardThemes = ({data, title}) => {

    const {session, setSession} = useContext(HeaderConsume);

    return (
        <>
            <ContainerTitle>
                <h2>{title}</h2>
            </ContainerTitle>

            <ConatinerCard>
                {data.map((the) => {
                    return (
                        <Card key={the.id}>
                            <img src={the.image} title={the.name}/>
                            <CardBody>
                                <p>{the.name}</p>
                                <CardLink onClick={() => setSession(true)} to={`/administrativo/${the.id}/editor-page`}>Adicionar</CardLink>
                            </CardBody>
                        </Card>
                    )
                })}
            </ConatinerCard>

        </>
    )

}