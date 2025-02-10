import { MdEditSquare } from "react-icons/md"
import { ContainerPageSectionBody } from "../../components/Section"
import { ContainerAction, ContainerActionDelete, ContainerActionEdit, StyledTable, StyledTd, StyledTh, StyledTr } from "../styles"
import { FaTrashAlt } from "react-icons/fa"
import { useEffect, useState } from "react"
import { https } from "../../../../config/https"

export const SubCategory = ({data}) => {

    const [category, setCategory] = useState([]);

    async function findAllCategorys() {
        try {
            const { data } = await https.get('/categories/get-categories');
            setCategory(data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        findAllCategorys();
    }, [])

    console.log(data)

    return (
        <ContainerPageSectionBody>
                        <StyledTable>
                            <thead>
                                <tr>
                                    <StyledTh>ID</StyledTh>
                                    <StyledTh>Categoria</StyledTh>
                                    <StyledTh>Descrição</StyledTh>
                                    <StyledTh style={{textAlign:'center'}}>Ação</StyledTh>
                                </tr>
                            </thead>
                            <tbody>
                                {(category?.content || [])
                                .filter(d => d.parent_category_id === data)
                                .map((d) => (
                                    <StyledTr key={d.id_category}>
                                        <StyledTd>{d.id_category}</StyledTd>
                                        <StyledTd>{d.name}</StyledTd>
                                        <StyledTd>{d.description}</StyledTd>
                                    
                                        <StyledTd>
                                            <ContainerAction>
                                                <ContainerActionEdit onClick={() => toggleEdit(d)}>
                                                    <MdEditSquare size={20} color="#fff"/>
                                                </ContainerActionEdit>
                                                <ContainerActionDelete onClick={() => deleteCategory(d.id_category)}>
                                                    <FaTrashAlt size={20} color="#fff"/>
                                                </ContainerActionDelete>
                                            </ContainerAction>
        
                                        </StyledTd>
                                    </StyledTr>
                                ))}
                            </tbody>
                        </StyledTable>
                    </ContainerPageSectionBody>
    )
}