import { BrowserRouter, Routes } from "react-router-dom";
import { ContainerContent, ContainerRouter } from "../style";

export const TemplateLayout = ({header, children, footer}) => {
    return (
		<>
			
			
					{header}
					<ContainerContent>
						<Routes>
                            {children}
                        </Routes>
					</ContainerContent>
                    {footer}
				
			
		</>
	);
}