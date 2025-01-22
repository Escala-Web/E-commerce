import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Estilo padrão do Quill
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
	Container,
	ContainerFormControll,
	ContainerPrevImage,
	ControlForm,
	ErrorMessageStyled,
	SubmitButton,
} from "./styles";

const validationSchema = Yup.object({
	name: Yup.string().required("Campo Nome é obrigatório"),
	price: Yup.string().required("Campo Preço é obrigatório"),
	stock: Yup.string().required("Campo Quantidade em Estoque é obrigatório"),
	sku: Yup.string().required("Campo Código do produto é obrigatório"),
	description: Yup.string().required("Campo Descrição é obrigatório"),
});

export const Formulario = () => {
	const [editorValue, setEditorValue] = useState("");
	const [images, setImages] = useState([]); // Para armazenar as imagens

	const handleEditorChange = (value) => {
		setEditorValue(value);
	};

	const handleSubmit = (values) => {
		console.log("Formulário enviado", { ...values, description: editorValue, path: images, title: values.name, alt_text: values.name });
	};

    const handleFileChange = (event) => {
        const files = event.target.files;
        const fileArray = Array.from(files); // Converte FileList para array
        setImages(fileArray); // Armazena os arquivos no estado
      };

	const modules = {
		toolbar: [
			[{ header: "1" }, { header: "2" }],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ align: [] }],
			["bold", "italic", "underline"],
			["link", "image"],
		],
	};

	return (
		<Container>
			<h1>Formulário com Validação</h1>
			<Formik
				initialValues={{
					name: "",
					price: "",
					stock: "",
					sku: "",
					description: ""
				}}
				validationSchema={validationSchema}
				onSubmit={handleSubmit}
			>
				{({ setFieldValue }) => (
					<Form className="formulario" encType="multipart/form-data">
						<ContainerFormControll>
							<ControlForm w="100%">
								<label htmlFor="name">Nome:</label>
								<Field type="text" id="name" name="name" className="input" />
								<ErrorMessage name="name" component={ErrorMessageStyled} />
							</ControlForm>

							<ControlForm w="50%">
								<label htmlFor="price">Preço:</label>
								<Field type="text" id="price" name="price" />
								<ErrorMessage name="price" component={ErrorMessageStyled} />
							</ControlForm>

							<ControlForm w="50%">
								<label htmlFor="stock">Quantidade em Estoque:</label>
								<Field type="text" id="stock" name="stock" />
								<ErrorMessage name="stock" component={ErrorMessageStyled} />
							</ControlForm>
						</ContainerFormControll>

						<ControlForm>
							<label htmlFor="sku">Código do Produto:</label>
							<Field type="text" id="sku" name="sku" />
							<ErrorMessage name="sku" component={ErrorMessageStyled} />
						</ControlForm>

						<ControlForm>
							<label htmlFor="path">Imagens:</label>
							<input 
                                multiple
                                name="path"
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}

                            />

							<ErrorMessage name="path" component={ErrorMessageStyled} />
						</ControlForm>

                        <ContainerPrevImage>
                            {images.map((img) => (
                                <img src={URL.createObjectURL(img)}/>
                            ))}
                        </ContainerPrevImage>

						<ControlForm>
							<label htmlFor="description">Descrição do Produto:</label>
							<ReactQuill
								value={editorValue}
								onChange={(value) => {
									setFieldValue("description", value);
									handleEditorChange(value);
								}}
								theme="snow"
								modules={modules}
								style={{ height: "300px", width: "100%" }}
							/>
							<ErrorMessage name="description" component={ErrorMessageStyled} />
						</ControlForm>

						<SubmitButton type="submit">Enviar</SubmitButton>
					</Form>
				)}
			</Formik>

		
		</Container>
	);
};
