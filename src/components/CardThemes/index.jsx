import { Link } from "react-router-dom"
import { Card, CardBody, CardLink, ConatinerCard, ContainerTitle } from "./styles"

export const CardThemes = ({data, title}) => {

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
                                <CardLink to={`/${the.id}/editor-page`}>Adcionar</CardLink>
                            </CardBody>
                        </Card>
                    )
                })}
            </ConatinerCard>

        </>
    )

}