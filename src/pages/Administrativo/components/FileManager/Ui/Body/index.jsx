import { Container, ContentManager, HeaderManager } from "./styles";
import { IoArrowUndoSharp } from "react-icons/io5";
import { HiMiniFolderPlus } from "react-icons/hi2";
import { Folder } from "../Folder";

export const BodyContent = () => {
	return (
		<Container>
			<HeaderManager>
				<div className="dirname">
					<span>
						<IoArrowUndoSharp />
					</span>
					<p>Home</p>
				</div>
				<div className="actions_header">
					<span>
                    <HiMiniFolderPlus />
                    </span>
				</div>
			</HeaderManager>

            <ContentManager>
                <Folder />
            </ContentManager>
		</Container>
	);
};
