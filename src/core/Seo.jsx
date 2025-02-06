import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { Helmet } from "react-helmet-async";

export const Seo = () => {
	const [metas, setMetas] = useState([]);
	const [loading, setLoading] = useState(true); 
	const location = useLocation();
	const { items, error } = useApi("/seo");

	useEffect(() => {
		if (items && items.length > 0) {
			const filterSeo = items.filter(
				(f) => f.pagina_link === location.pathname
			);
			setMetas(filterSeo);
		}
		setLoading(false); 
	}, [location, items]);

	if (loading) {
		return
	}

	if (error) {
		return
	}

	return (
		<>
			<Helmet>
				<title>{metas[0]?.meta_title || "Título Padrão"}</title>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content={metas[0]?.meta_description || "Descrição Padrão"}
				/>
				<meta
					name="keywords"
					content={metas[0]?.meta_keywords || "palavras-chave, padrão"}
				/>

				<meta
					name="google-site-verification"
					content={metas[0]?.google_search_console || "Descrição Padrão"}
				/>

				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${metas[0]?.google_analytics}`}
				></script>
				<script>
					{`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${metas[0]?.google_analytics}');
                    `}
				</script>
			</Helmet>
		</>
	);
};
