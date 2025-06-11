document.addEventListener("DOMContentLoaded", function () {
  const htmlRoot = document.getElementById("htmlRoot");
  const langToggle = document.getElementById("langToggle");
  const currentYearSpan = document.getElementById("currentYear");

  let currentLanguage = localStorage.getItem("language") || "pt";

  const flags = {
    pt: '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 700 490"><rect width="700" height="490" fill="#009739"/><path d="M350 63L63 245l287 182L637 245z" fill="#fedd00"/><circle cx="350" cy="245" r="105" fill="#00136a"/><path d="M245 245a105 105 0 00210 0c0-12-1.7-23.5-5.5-34.3a105 105 0 01-199 .3c-3.8 10.8-5.5 22.3-5.5 34z" fill="none"/><path d="M245 245a105 105 0 00210 0c0-12-1.7-23.5-5.5-34.3a105 105 0 01-199 .3c-3.8 10.8-5.5 22.3-5.5 34z" fill="none" stroke="#fff" stroke-width="7"/><g fill="#fff"><path d="M350 190.7l5.2 16.2h17l-13.8 10 5.3 16.2-13.8-10-13.7 10 5.2-16.2-13.8-10h17zm-56.1 12.4l5.3 16.2h17l-13.8 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zm110.2 0l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zM253 232.5l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zm192 0l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zM240 270l5.3 16.2h17l-13.8 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zm218 0l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zm-190.2 12.4l5.3 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zm110.2 0l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zM350 297.3l5.2 16.2h17l-13.7 10 5.2 16.2-13.7-10-13.8 10 5.3-16.2-13.7-10h17zM317 167.3l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM383 167.3l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM297.7 180.7l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm104.6 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM282.5 203l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm135 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM275 232.5l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm150 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM282.5 262l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm135 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM297.7 284.3l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm104.6 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM317 297.7l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zm66 0l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM341.7 305.2l1.3 4.2h4.3l-3.5 2.5 1.3 4.2-3.5-2.5-3.4 2.5 1.3-4.2-3.4-2.5h4.3zM350 154.2l2.6 8.3h8.7l-7 5.2 2.6 8.3-7-5.2-7 5.2 2.6-8.3-7-5.2h8.7z</g></svg>',
    es: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3 2" width="22" height="16"><rect width="3" height="2" fill="#C60B1E"/><rect width="3" height="1" y="0.5" fill="#FFC400"/></svg>',
  };

  const translations = {
    pt: {
        // --- GERAL & INDEX.HTML (PT) ---
        "page_title": "DentComm - Marketing para Dentistas e Clínicas Odontológicas",
        "meta_description_index": "Potencialize sua clínica odontológica com as soluções de marketing digital da DentComm. Atraia mais pacientes, construa autoridade e alcance resultados incríveis.",
        "skip_to_content": "Pular para o conteúdo principal",
        "nav_sobre": "Sobre",
        "nav_beneficios": "Benefícios",
        "nav_planos": "Nossos Planos",
        "nav_depoimentos": "Depoimentos",
        "nav_blog": "Blog",
        "nav_contato_btn": "Contato",
        "lang_toggle_aria_label": "Mudar Idioma",
        "hero_title": "Mais do que marketing. <span>Resultado!</span>",
        "hero_subtitle": "Ajudamos dentistas a se tornarem marcas fortes, lucrativas e respeitadas com estratégia, clareza e foco real em resultados.",
        "hero_cta": "Solicitar Diagnóstico Gratuito",
        "sobre_title": "Sua Parceira de Crescimento",
        "sobre_p1": "Na DentComm, não prometemos mágica. <strong data-translate=\"sobre_p1_strong\">Prometemos estrutura, performance com posicionamento e crescimento com consciência.</strong> Somos uma agência de marketing e automação full service, especializada em dentistas da América Latina.",
        "sobre_p1_strong": "Prometemos estrutura, performance com posicionamento e crescimento com consciência.",
        "sobre_p2": "Nós acreditamos que todo dentista pode ser mais do que um profissional da saúde. Pode ser uma marca. Uma referência. Um líder. Ajudamos dentistas a crescerem com <strong data-translate=\"sobre_p2_strong\">inteligência, respeito à ciência e foco em resultado</strong>, transformando dúvidas em decisões e estagnação em progresso.",
        "sobre_p2_strong": "inteligência, respeito à ciência e foco em resultado",
        "beneficios_title": "Por que Escolher a DentComm para sua Clínica?",
        "beneficios_card1_title": "Hiperespecialização Odontológica",
        "beneficios_card1_desc": "Entendemos as nuances da jornada do paciente no universo odontológico. Falamos a língua da sua clínica.",
        "beneficios_card2_title": "Previsibilidade e ROI",
        "beneficios_card2_desc": "Estruture sua clínica com um retorno financeiro previsível e foco em resultados tangíveis para seus tratamentos.",
        "beneficios_card3_title": "Construção de Autoridade",
        "beneficios_card3_desc": "Posicionamos sua clínica como referência para atrair os melhores pacientes e se destacar na sua região.",
        "beneficios_card4_title": "Ecossistema Completo",
        "beneficios_card4_desc": "Tráfego, conteúdo, automações, CRM e design em uma solução integrada e personalizada para sua clínica.",
        "beneficios_card5_title": "Suporte Dedicado e Parceria Real",
        "beneficios_card5_desc": "Vamos além de uma simples prestação de serviço. Oferecemos suporte próximo e atuamos como verdadeiros parceiros.",
        "beneficios_card6_title": "Inovação e Inteligência Aplicada",
        "beneficios_card6_desc": "Usamos as últimas tendências, IA e tecnologias de marketing para garantir as estratégias mais eficazes para sua clínica.",
        "planos_title": "Planos Sob Medida para Cada Estágio da Sua Clínica",
        "planos_subtitle": "Do dentista que está começando no digital a grupos que buscam escala, temos a solução ideal.",
        "base_title": "DentComm Base",
        "base_ideal": "Para dentistas começando ou reestruturando a presença digital e que precisam de resultados com baixo risco.",
        "base_feat1": "Landing page por especialidade.",
        "base_feat2": "Criação de logotipo e identidade visual.",
        "base_feat3": "2 campanhas ativas por mês no Meta Ads.",
        "base_feat4": "Relatório de ROI e performance.",
        "flow_title": "DentComm Flow",
        "flow_ideal": "Para quem já tem presença digital e quer aumentar o volume de pacientes com automação e previsibilidade.",
        "flow_feat1": "Rebranding completo com manual da marca.",
        "flow_feat2": "5 campanhas no Meta Ads + 2 no Google Ads.",
        "flow_feat3": "Automação de WhatsApp com pré-triagem.",
        "flow_feat4": "Implantação de IA para otimizar disparos.",
        "core360_title": "DentComm Core360",
        "core360_ideal": "Para clínicas que desejam escalar com controle, integrando marketing, vendas e gestão em um ecossistema completo.",
        "core360_feat1": "Site institucional com páginas por especialidade.",
        "core360_feat2": "Campanhas ilimitadas em Meta e Google Ads.",
        "core360_feat3": "CRM avançado com automação comportamental.",
        "core360_feat4": "Dashboard executivo com dados em tempo real.",
        "fullstack_title": "DentComm Fullstack",
        "fullstack_ideal": "A DentComm assume 100% da operação digital, para clínicas e grupos que exigem delegação total com máxima performance.",
        "fullstack_feat1": "Operação 100% gerenciada pela DentComm.",
        "fullstack_feat2": "Conteúdo premium sob demanda (vídeos, animações).",
        "fullstack_feat3": "Pré-venda gerenciada com qualificação de leads.",
        "fullstack_feat4": "IA aplicada em toda a jornada do lead.",
        "planos_saiba_mais": "Saiba Mais",
        "planos_footer_cta_text": "Não tem certeza de qual plano é o ideal para sua clínica? ",
        "planos_footer_cta_btn": "Agende uma Análise Gratuita",
        "depoimentos_title": "Resultados Reais, Clínicas Satisfeitas",
        "depoimentos_card1_text": "“A DentComm nos ajudou a construir uma autoridade que nos trouxe 400 novos pacientes em 4 meses.”",
        "depoimentos_card1_author": "Dr. Rafael, Clínica Odonto SP",
        "depoimentos_card2_text": "“Com o plano de crescimento da DentComm, nossa clínica conseguiu atrair um fluxo constante de pacientes para harmonização facial, aumentando em 70% a procura por este procedimento em 60 dias!”",
        "depoimentos_card2_author": "Dra. Beatriz, Estética Dental Avançada - RJ",
        "depoimentos_card3_text": "“Duplicamos o faturamento da clínica em menos de 5 meses com um funil comercial completo e otimizado pela DentComm.”",
        "depoimentos_card3_author": "Clínica Sorriso Vital, Curitiba",
        "materiais_title": "Materiais Gratuitos para Impulsionar Sua Clínica",
        "materiais_subtitle": "Acesse nossos e-books e guias exclusivos para dentistas e clínicas odontológicas:",
        "alt_ebook1": "Capa do e-book Como atrair mais pacientes para sua clínica",
        "ebook1_title": "Guia: Como Atrair Mais Pacientes Qualificados para Sua Clínica",
        "alt_ebook2": "Capa do e-book Guia de Gestão e Marketing para Clínicas",
        "ebook2_title": "Guia Essencial de Gestão e Marketing para Clínicas Odontológicas",
        "alt_ebook3": "Capa do e-book Instagram para Dentistas e Clínicas",
        "ebook3_title": "Dominando o Instagram para Dentistas e Clínicas de Sucesso",
        "form_title": "Vamos Conversar?",
        "form_subtitle": "Preencha o formulário ou fale diretamente conosco no WhatsApp para um diagnóstico da sua clínica.",
        "form_label_nome": "Nome Completo",
        "form_label_email": "E-mail",
        "form_label_mensagem": "Mensagem",
        "form_placeholder_nome": "Seu Nome Completo",
        "form_placeholder_email": "Seu Melhor E-mail",
        "form_placeholder_mensagem": "Como podemos ajudar sua clínica a alcançar mais pacientes?",
        "form_btn_enviar": "Enviar Mensagem",
        "form_success_msg": "Mensagem enviada com sucesso! Entraremos em contato em breve.",
        "footer_sobre_title": "Sobre a DentComm",
        "footer_sobre_quemsomos": "Quem Somos",
        "footer_sobre_servicos": "Nossos Planos",
        "footer_sobre_blog": "Blog",
        "footer_contato_title": "Contato",
        "footer_contato_whatsapp": "Fale Conosco no WhatsApp",
        "footer_siga_title": "Siga a DentComm",
        "footer_copyright": "© {CURRENT_YEAR} DentComm. Todos os direitos reservados.",
        "footer_madewithlove": "Feito com 💙 para dentistas e clínicas que querem se destacar.",
        "blog_page_title": "Blog DentComm - Dicas e Estratégias de Marketing Odontológico",
        "blog_meta_description": "Acompanhe o blog da DentComm para dicas, insights e estratégias avançadas de marketing digital para dentistas e clínicas odontológicas.",
        "blog_hero_title": "Blog DentComm",
        "blog_hero_subtitle": "Insights, dicas e as últimas tendências em marketing digital para impulsionar sua clínica odontológica.",
        "blog_articles_title": "Nossos Artigos",
        "cat_marketing_digital": "Marketing Digital",
        "cat_gestao_clinica": "Gestão de Clínicas",
        "cat_seo_odontologico": "SEO Odontológico",
        "cat_redes_sociais": "Redes Sociais",
        "date_format_artigo1": "15 de Julho, 2025",
        "date_format_artigo2": "10 de Julho, 2025",
        "date_format_artigo3": "05 de Julho, 2025",
        "date_format_artigo4": "01 de Julho, 2025",
        "artigo1_title": "Como Atrair Mais Pacientes para sua Clínica Odontológica em 2025",
        "alt_artigo1_thumb": "Mulher sorrindo mostrando dentes brancos e saudáveis",
        "artigo1_excerpt": "Descubra estratégias comprovadas para aumentar o fluxo de pacientes na sua clínica, desde SEO local até campanhas eficazes nas redes sociais e otimização da experiência do paciente online...",
        "artigo2_title": "5 Dicas Essenciais de Gestão para Clínicas Odontológicas Modernas",
        "alt_artigo2_thumb": "Dentista explicando tratamento para paciente em um consultório moderno",
        "artigo2_excerpt": "Otimize a gestão da sua clínica com dicas práticas sobre finanças, equipe, atendimento ao paciente e uso de tecnologia para aumentar a eficiência e lucratividade do seu negócio odontológico...",
        "artigo3_title": "SEO para Dentistas: Como Aparecer no Topo do Google",
        "alt_artigo3_thumb": "Tela de computador mostrando resultados de busca para dentistas",
        "artigo3_excerpt": "Entenda os fundamentos do SEO específico para o setor odontológico e aprenda técnicas para melhorar o ranking da sua clínica nos resultados de busca do Google...",
        "artigo4_title": "Instagram para Clínicas Odontológicas: Guia Completo para Engajar Pacientes",
        "alt_artigo4_thumb": "Celular mostrando perfil de Instagram de uma clínica odontológica",
        "artigo4_excerpt": "Aprenda a usar o Instagram de forma estratégica para sua clínica: desde a criação de conteúdo atraente até o uso de stories, reels e anúncios para alcançar e engajar mais pacientes...",
        "artigo1_title_short": "Como Atrair Mais Pacientes em 2025",
        "artigo2_title_short": "5 Dicas de Gestão para Clínicas Modernas",
        "artigo3_title_short": "SEO para Dentistas: Guia Essencial",
        "artigo4_title_short": "Instagram para Clínicas: Estratégias",
        "blog_read_more": "Ler Artigo",
        "pagination_next": "Próximo",
        "sidebar_search_title": "Buscar no Blog",
        "sidebar_search_label": "Buscar por:",
        "sidebar_search_placeholder": "Digite e tecle Enter...",
        "sidebar_search_button": "Buscar",
        "sidebar_categories_title": "Categorias",
        "sidebar_recent_title": "Artigos Recentes",
        "sidebar_cta_title": "Impulsione Sua Clínica!",
        "sidebar_cta_desc": "Descubra como nossos planos podem transformar o marketing da sua clínica.",
        "sidebar_cta_btn": "Ver Nossos Planos",
        "sidebar_title_accessible": "Barra Lateral do Blog",
        "footer_sobre_blog_link": "Blog",
        "artigo1_seo_title": "Como Atrair Mais Pacientes para sua Clínica Odontológica em 2025 | Blog DentComm",
        "artigo1_seo_desc": "Aprenda estratégias eficazes de marketing digital, SEO local e redes sociais para aumentar o fluxo de pacientes na sua clínica odontológica neste ano.",
        "artigo_author_by": "Por",
        "author_name_dentcomm": "Equipe DentComm",
        "artigo1_read_time": "5 min de leitura",
        "alt_artigo1_featured": "Mulher sorrindo mostrando dentes brancos e saudáveis em close-up para artigo sobre atrair pacientes",
        "artigo1_p1": "Atrair um fluxo constante de novos pacientes é o pilar para o sucesso e crescimento de qualquer clínica odontológica. Em um mercado cada vez mais competitivo e digitalizado, simplesmente oferecer excelentes serviços não é mais suficiente. É crucial implementar estratégias de marketing eficazes que conectem sua clínica aos pacientes certos, no momento certo.",
        "artigo1_h2_seo_local": "Otimização para Buscas Locais (SEO Local)",
        "artigo1_p2_seo_local_desc": "Quando alguém precisa de um dentista, a primeira ação geralmente é uma busca no Google. Estar bem posicionado nos resultados locais é fundamental. Isso envolve:",
        "artigo1_li_gmb": "<strong>Google Meu Negócio (GMN):</strong> Mantenha seu perfil completo, atualizado, com fotos de qualidade, horário de funcionamento correto e incentive avaliações positivas. Responda a todas as avaliações, boas ou ruins, de forma profissional.",
        "artigo1_li_citations": "<strong>Citações Locais Consistentes:</strong> Garanta que o NAP (Nome, Endereço, Telefone) da sua clínica seja idêntico em todos os diretórios online relevantes (Páginas Amarelas, Yelp, Doctoralia, etc.) e no seu próprio site.",
        "artigo1_li_keywords_locais": "<strong>Palavras-chave Locais Estratégicas:</strong> Otimize o conteúdo do seu site (títulos, descrições, texto) com termos como \"dentista em [sua cidade]\", \"clínica odontológica [seu bairro]\", \"implantes dentários [sua cidade]\".",
        "artigo1_li_website_local": "<strong>Otimização On-Page Local:</strong> Inclua mapas incorporados, informações de contato visíveis e conteúdo específico para sua localidade no seu site.",
        "artigo1_h2_redes_sociais": "Engajamento Estratégico nas Redes Sociais",
        "artigo1_p3_redes_sociais_desc": "As redes sociais são canais poderosos para construir relacionamento, educar seu público e mostrar os diferenciais da sua clínica. Concentre-se em:",
        "artigo1_li_conteudo_valor": "<strong>Conteúdo de Valor e Relevante:</strong> Publique dicas de saúde bucal, informações sobre tratamentos (explicadas de forma simples), mitos e verdades, antes e depois (sempre com consentimento explícito do paciente e respeitando as normas do CFO), e os bastidores humanizados da clínica.",
        "artigo1_li_interacao": "<strong>Interação e Comunidade:</strong> Responda comentários e mensagens rapidamente, crie enquetes, caixas de perguntas e incentive a participação da sua audiência para construir uma comunidade engajada.",
        "artigo1_li_anuncios_segmentados": "<strong>Anúncios Segmentados com Inteligência:</strong> Utilize o poder da segmentação do Facebook e Instagram Ads para alcançar pessoas na sua região com interesses específicos em serviços odontológicos que você oferece, otimizando o orçamento para leads mais qualificados.",
        "artigo1_li_formatos_variados": "<strong>Formatos Variados:</strong> Explore vídeos curtos (Reels, TikToks), carrosséis informativos, stories interativos e lives com especialistas da sua clínica.",
        "artigo1_blockquote_expert": "\"O segredo não é apenas estar presente online, mas sim criar conexões genuínas e oferecer valor real aos seus potenciais pacientes. A confiança é a base de qualquer relacionamento duradouro, inclusive na odontologia.\"",
        "artigo1_h2_experiencia_paciente": "Otimização da Experiência do Paciente Online",
        "artigo1_p4_experiencia_paciente": "Desde o primeiro contato digital até o agendamento, a experiência do usuário deve ser impecável:",
        "artigo1_li_site_responsivo": "<strong>Site Rápido e Responsivo:</strong> Seu site deve carregar rapidamente e se adaptar perfeitamente a todos os dispositivos (desktops, tablets e celulares).",
        "artigo1_li_navegacao_intuitiva": "<strong>Navegação Clara e Intuitiva:</strong> Facilite para que os visitantes encontrem informações sobre tratamentos, equipe, contato e agendamento.",
        "artigo1_li_ctas_claros": "<strong>Call-to-Actions (CTAs) Claros:</strong> Use botões e links convidativos para \"Agendar Consulta\", \"Saiba Mais\", \"Entre em Contato\".",
        "artigo1_p_conclusao": "Implementando estas estratégias de forma consistente, sua clínica odontológica estará bem posicionada para atrair mais pacientes qualificados e alcançar um crescimento sustentável em 2025 e além. Lembre-se que o marketing digital é uma jornada contínua de aprendizado e otimização. A DentComm está aqui para ser sua parceira nessa jornada!",
        "blog_tags_title": "Tags:",
        "tag_marketing_odontologico": "Marketing Odontológico",
        "tag_seo_local": "SEO Local",
        "tag_atrair_pacientes": "Atrair Pacientes",
        "blog_share_text": "Compartilhe:",
        "blog_related_title": "Você Também Pode Gostar"
    },
    es: {
        // --- GERAL & INDEX.HTML (ESPANHOL) ---
        "page_title": "DentComm - Marketing para Dentistas y Clínicas Dentales",
        "meta_description_index": "Potencia tu clínica dental con las soluciones de marketing digital de DentComm. Atrae más pacientes, construye autoridad y alcanza resultados increíbles.",
        "skip_to_content": "Saltar al contenido principal",
        "nav_sobre": "Sobre Nosotros",
        "nav_beneficios": "Beneficios",
        "nav_planos": "Nuestros Planes",
        "nav_depoimentos": "Testimonios",
        "nav_blog": "Blog",
        "nav_contato_btn": "Contacto",
        "lang_toggle_aria_label": "Cambiar Idioma",
        "hero_title": "Más que marketing. <span>¡Resultado!</span>",
        "hero_subtitle": "Ayudamos a los dentistas a convertirse en marcas fuertes, rentables y respetadas con estrategia, claridad y un enfoque real en los resultados.",
        "hero_cta": "Solicitar Diagnóstico Gratuito",
        "sobre_title": "Tu Socio de Crecimiento",
        "sobre_p1": "En DentComm, no prometemos magia. <strong data-translate=\"sobre_p1_strong\">Prometemos estructura, rendimiento con posicionamiento y crecimiento con conciencia.</strong> Somos una agencia de marketing y automatización full service, especializada en dentistas de América Latina.",
        "sobre_p1_strong": "Prometemos estructura, rendimiento con posicionamiento y crecimiento con conciencia.",
        "sobre_p2": "Creemos que cada dentista puede ser más que un profesional de la salud. Puede ser una marca. Un referente. Un líder. Ayudamos a los dentistas a crecer con <strong data-translate=\"sobre_p2_strong\">inteligencia, respeto por la ciencia y enfoque en los resultados</strong>, transformando las dudas en decisiones y el estancamiento en progreso.",
        "sobre_p2_strong": "inteligencia, respeto por la ciencia y enfoque en los resultados",
        "beneficios_title": "¿Por Qué Elegir DentComm para tu Clínica?",
        "beneficios_card1_title": "Hiperespecialización Dental",
        "beneficios_card1_desc": "Entendemos los matices del recorrido del paciente en el universo dental. Hablamos el idioma de tu clínica.",
        "beneficios_card2_title": "Previsibilidad y ROI",
        "beneficios_card2_desc": "Estructura tu clínica con un retorno financiero predecible y enfoque en resultados tangibles para tus tratamientos.",
        "beneficios_card3_title": "Construcción de Autoridad",
        "beneficios_card3_desc": "Posicionamos tu clínica como referente para atraer a los mejores pacientes y destacar en tu región.",
        "beneficios_card4_title": "Ecosistema Completo",
        "beneficios_card4_desc": "Tráfico, contenido, automatizaciones, CRM y diseño en una solución integrada y personalizada para tu clínica.",
        "beneficios_card5_title": "Soporte Dedicado y Alianza Real",
        "beneficios_card5_desc": "Vamos más allá de una simple prestación de servicios. Ofrecemos un soporte cercano y actuamos como verdaderos aliados.",
        "beneficios_card6_title": "Innovación e Inteligencia Aplicada",
        "beneficios_card6_desc": "Utilizamos las últimas tendencias, IA y tecnologías de marketing para garantizar las estrategias más eficaces para tu clínica.",
        "planos_title": "Planes a Medida para Cada Etapa de Tu Clínica",
        "planos_subtitle": "Desde el dentista que comienza en el mundo digital hasta grupos que buscan escalar, tenemos la solución ideal.",
        "base_title": "DentComm Base",
        "base_ideal": "Para dentistas que comienzan o reestructuran su presencia digital y necesitan resultados con bajo riesgo.",
        "base_feat1": "Landing page por especialidad.",
        "base_feat2": "Creación de logotipo e identidad visual.",
        "base_feat3": "2 campañas activas al mes en Meta Ads.",
        "base_feat4": "Informe de ROI y rendimiento.",
        "flow_title": "DentComm Flow",
        "flow_ideal": "Para quienes ya tienen presencia digital y quieren aumentar el volumen de pacientes con automatización y previsibilidad.",
        "flow_feat1": "Rebranding completo con manual de marca.",
        "flow_feat2": "5 campañas en Meta Ads + 2 en Google Ads.",
        "flow_feat3": "Automatización de WhatsApp con precalificación.",
        "flow_feat4": "Implementación de IA para optimizar envíos.",
        "core360_title": "DentComm Core360",
        "core360_ideal": "Para clínicas que desean escalar con control, integrando marketing, ventas y gestión en un ecosistema completo.",
        "core360_feat1": "Sitio web institucional con páginas por especialidad.",
        "core360_feat2": "Campañas ilimitadas en Meta y Google Ads.",
        "core360_feat3": "CRM avanzado con automatización conductual.",
        "core360_feat4": "Dashboard ejecutivo con datos en tiempo real.",
        "fullstack_title": "DentComm Fullstack",
        "fullstack_ideal": "DentComm asume el 100% de la operación digital, para clínicas y grupos que exigen delegación total con máximo rendimiento.",
        "fullstack_feat1": "Operación 100% gestionada por DentComm.",
        "fullstack_feat2": "Contenido premium bajo demanda (videos, animaciones).",
        "fullstack_feat3": "Preventa gestionada con calificación de leads.",
        "fullstack_feat4": "IA aplicada en todo el recorrido del lead.",
        "planos_saiba_mais": "Saber Más",
        "planos_footer_cta_text": "¿No estás seguro de cuál es el plan ideal para tu clínica? ",
        "planos_footer_cta_btn": "Agenda un Análisis Gratuito",
        "depoimentos_title": "Resultados Reales, Clínicas Satisfechas",
        "depoimentos_card1_text": "“DentComm nos ayudó a construir una autoridad que nos trajo 400 nuevos pacientes en 4 meses.”",
        "depoimentos_card1_author": "Dr. Rafael, Clínica Odonto SP",
        "depoimentos_card2_text": "“¡Con el plan de crecimiento de DentComm, nuestra clínica logró atraer un flujo constante de pacientes para armonización facial, aumentando en un 70% la demanda de este procedimiento en 60 días!”",
        "depoimentos_card2_author": "Dra. Beatriz, Estética Dental Avanzada - RJ",
        "depoimentos_card3_text": "“Duplicamos la facturación de la clínica en menos de 5 meses con un embudo comercial completo y optimizado por DentComm.”",
        "depoimentos_card3_author": "Clínica Sonrisa Vital, Curitiba",
        "materiais_title": "Materiales Gratuitos para Impulsar Tu Clínica",
        "materiais_subtitle": "Accede a nuestros e-books y guías exclusivos para dentistas y clínicas dentales:",
        "alt_ebook1": "Portada del e-book Cómo atraer más pacientes para tu clínica",
        "ebook1_title": "Guía: Cómo Atraer Más Pacientes Calificados para Tu Clínica",
        "alt_ebook2": "Portada del e-book Guía de Gestión y Marketing para Clínicas",
        "ebook2_title": "Guía Esencial de Gestión y Marketing para Clínicas Dentales",
        "alt_ebook3": "Portada del e-book Instagram para Dentistas y Clínicas",
        "ebook3_title": "Dominando Instagram para Dentistas y Clínicas de Éxito",
        "form_title": "¿Hablamos?",
        "form_subtitle": "Completa el formulario o contáctanos directamente por WhatsApp para un diagnóstico de tu clínica.",
        "form_label_nome": "Nombre Completo",
        "form_label_email": "Correo Electrónico",
        "form_label_mensagem": "Mensaje",
        "form_placeholder_nome": "Tu Nombre Completo",
        "form_placeholder_email": "Tu Mejor Correo Electrónico",
        "form_placeholder_mensagem": "¿Cómo podemos ayudar a tu clínica a alcanzar más pacientes?",
        "form_btn_enviar": "Enviar Mensaje",
        "form_success_msg": "¡Mensaje enviado con éxito! Nos pondremos en contacto en breve.",
        "footer_sobre_title": "Sobre DentComm",
        "footer_sobre_quemsomos": "Quiénes Somos",
        "footer_sobre_servicos": "Nuestros Planes",
        "footer_sobre_blog": "Blog",
        "footer_contato_title": "Contacto",
        "footer_contato_whatsapp": "Habla con Nosotros por WhatsApp",
        "footer_siga_title": "Sigue a DentComm",
        "footer_copyright": "© {CURRENT_YEAR} DentComm. Todos los derechos reservados.",
        "footer_madewithlove": "Hecho con 💙 para dentistas y clínicas que quieren destacar.",
        "blog_page_title": "Blog DentComm - Consejos y Estrategias de Marketing Dental",
        "blog_meta_description": "Sigue el blog de DentComm para obtener consejos, ideas y estrategias avanzadas de marketing digital para dentistas y clínicas dentales.",
        "blog_hero_title": "Blog DentComm",
        "blog_hero_subtitle": "Ideas, consejos y las últimas tendencias en marketing digital para impulsar tu clínica dental.",
        "blog_articles_title": "Nuestros Artículos",
        "cat_marketing_digital": "Marketing Digital",
        "cat_gestao_clinica": "Gestión de Clínicas",
        "cat_seo_odontologico": "SEO Dental",
        "cat_redes_sociais": "Redes Sociales",
        "date_format_artigo1": "15 de Julio, 2025",
        "date_format_artigo2": "10 de Julio, 2025",
        "date_format_artigo3": "05 de Julio, 2025",
        "date_format_artigo4": "01 de Julio, 2025",
        "artigo1_title": "Cómo Atraer Más Pacientes a tu Clínica Dental en 2025",
        "alt_artigo1_thumb": "Mujer sonriendo mostrando dientes blancos y saludables",
        "artigo1_excerpt": "Descubre estrategias comprobadas para aumentar el flujo de pacientes en tu clínica, desde SEO local hasta campañas eficaces en redes sociales y optimización de la experiencia del paciente en línea...",
        "artigo2_title": "5 Consejos Esenciales de Gestión para Clínicas Dentales Modernas",
        "alt_artigo2_thumb": "Dentista explicando tratamiento a paciente en un consultorio moderno",
        "artigo2_excerpt": "Optimiza la gestión de tu clínica con consejos prácticos sobre finanzas, equipo, atención al paciente y uso de tecnología para aumentar la eficiencia y rentabilidad de tu negocio dental...",
        "artigo3_title": "SEO para Dentistas: Cómo Aparecer en lo Más Alto de Google",
        "alt_artigo3_thumb": "Pantalla de computadora mostrando resultados de búsqueda para dentistas",
        "artigo3_excerpt": "Entiende los fundamentos del SEO específico para el sector dental y aprende técnicas para mejorar el ranking de tu clínica en los resultados de búsqueda de Google...",
        "artigo4_title": "Instagram para Clínicas Dentales: Guía Completa para Involucrar Pacientes",
        "alt_artigo4_thumb": "Teléfono móvil mostrando perfil de Instagram de una clínica dental",
        "artigo4_excerpt": "Aprende a usar Instagram de forma estratégica para tu clínica: desde la creación de contenido atractivo hasta el uso de historias, reels y anuncios para alcanzar e involucrar a más pacientes...",
        "artigo1_title_short": "Cómo Atraer Más Pacientes en 2025",
        "artigo2_title_short": "5 Consejos de Gestión para Clínicas Modernas",
        "artigo3_title_short": "SEO para Dentistas: Guía Esencial",
        "artigo4_title_short": "Instagram para Clínicas: Estrategias",
        "blog_read_more": "Leer Artículo",
        "pagination_next": "Siguiente",
        "sidebar_search_title": "Buscar en el Blog",
        "sidebar_search_label": "Buscar por:",
        "sidebar_search_placeholder": "Escribe y presiona Enter...",
        "sidebar_search_button": "Buscar",
        "sidebar_categories_title": "Categorías",
        "sidebar_recent_title": "Artículos Recientes",
        "sidebar_cta_title": "¡Impulsa Tu Clínica!",
        "sidebar_cta_desc": "Descubre cómo nuestros planes pueden transformar el marketing de tu clínica.",
        "sidebar_cta_btn": "Ver Nuestros Planes",
        "sidebar_title_accessible": "Barra Lateral del Blog",
        "footer_sobre_blog_link": "Blog",
        "artigo1_seo_title": "Cómo Atraer Más Pacientes a tu Clínica Dental en 2025 | Blog DentComm",
        "artigo1_seo_desc": "Aprende estrategias eficaces de marketing digital, SEO local y redes sociales para aumentar el flujo de pacientes en tu clínica dental este año.",
        "artigo_author_by": "Por",
        "author_name_dentcomm": "Equipo DentComm",
        "artigo1_read_time": "5 min de lectura",
        "alt_artigo1_featured": "Mujer sonriendo mostrando dientes blancos y saludables en primer plano para artículo sobre atraer pacientes",
        "artigo1_p1": "Atraer un flujo constante de nuevos pacientes es el pilar para el éxito y crecimiento de cualquier clínica dental. En un mercado cada vez más competitivo y digitalizado, simplemente ofrecer excelentes servicios ya no es suficiente. Es crucial implementar estrategias de marketing eficaces que conecten tu clínica con los pacientes correctos, en el momento adecuado.",
        "artigo1_h2_seo_local": "Optimización para Búsquedas Locales (SEO Local)",
        "artigo1_p2_seo_local_desc": "Cuando alguien necesita un dentista, la primera acción generalmente es una búsqueda en Google. Estar bien posicionado en los resultados locales es fundamental. Esto implica:",
        "artigo1_li_gmb": "<strong>Google Mi Negocio (GMN):</strong> Mantén tu perfil completo, actualizado, con fotos de calidad, horario de funcionamiento correcto e incentiva valoraciones positivas. Responde a todas las valoraciones, buenas o malas, de forma profesional.",
        "artigo1_li_citations": "<strong>Citaciones Locales Consistentes:</strong> Asegúrate de que el NAP (Nombre, Dirección, Teléfono) de tu clínica sea idéntico en todos los directorios online relevantes (Páginas Amarillas, Yelp, Doctoralia, etc.) y en tu propio sitio web.",
        "artigo1_li_keywords_locais": "<strong>Palabras Clave Locales Estratégicas:</strong> Optimiza el contenido de tu sitio web (títulos, descripciones, texto) con términos como \"dentista en [tu ciudad]\", \"clínica dental [tu barrio]\", \"implantes dentales [tu ciudad]\".",
        "artigo1_li_website_local": "<strong>Optimización On-Page Local:</strong> Incluye mapas incrustados, información de contacto visible y contenido específico para tu localidad en tu sitio web.",
        "artigo1_h2_redes_sociais": "Interacción Estratégica en Redes Sociales",
        "artigo1_p3_redes_sociais_desc": "Las redes sociales son canales poderosos para construir relaciones, educar a tu público y mostrar los diferenciales de tu clínica. Enfócate en:",
        "artigo1_li_conteudo_valor": "<strong>Contenido de Valor y Relevante:</strong> Publica consejos de salud bucal, información sobre tratamientos (explicada de forma sencilla), mitos y verdades, antes y después (siempre con el consentimiento explícito del paciente y respetando las normativas), y el día a día humanizado de la clínica.",
        "artigo1_li_interacao": "<strong>Interacción y Comunidad:</strong> Responde comentarios y mensajes rápidamente, crea encuestas, cajas de preguntas e incentiva la participación de tu audiencia para construir una comunidad comprometida.",
        "artigo1_li_anuncios_segmentados": "<strong>Anuncios Segmentados con Inteligencia:</strong> Utiliza el poder de la segmentación de Facebook e Instagram Ads para alcanzar a personas en tu región con intereses específicos en los servicios dentales que ofreces, optimizando el presupuesto para leads más calificados.",
        "artigo1_li_formatos_variados": "<strong>Formatos Variados:</strong> Explora videos cortos (Reels, TikToks), carruseles informativos, historias interactivas y transmisiones en vivo con especialistas de tu clínica.",
        "artigo1_blockquote_expert": "\"El secreto no es solo estar presente online, sino crear conexiones genuinas y ofrecer valor real a tus pacientes potenciales. La confianza es la base de cualquier relación duradera, incluso en odontología.\"",
        "artigo1_h2_experiencia_paciente": "Optimización de la Experiencia del Paciente Online",
        "artigo1_p4_experiencia_paciente": "Desde el primer contacto digital hasta la cita, la experiencia del usuario debe ser impecable:",
        "artigo1_li_site_responsivo": "<strong>Sitio Web Rápido y Adaptable:</strong> Tu sitio web debe cargar rápidamente y adaptarse perfectamente a todos los dispositivos (computadoras de escritorio, tabletas y móviles).",
        "artigo1_li_navegacao_intuitiva": "<strong>Navegación Clara e Intuitiva:</strong> Facilita que los visitantes encuentren información sobre tratamientos, equipo, contacto y citas.",
        "artigo1_li_ctas_claros": "<strong>Llamadas a la Acción (CTAs) Claras:</strong> Usa botones y enlaces atractivos para \"Agendar Consulta\", \"Saber Más\", \"Contactar\".",
        "artigo1_p_conclusao": "Implementando estas estrategias de forma consistente, tu clínica dental estará bien posicionada para atraer más pacientes calificados y alcanzar un crecimiento sostenible en 2025 y más allá. Recuerda que el marketing digital es un viaje continuo de aprendizaje y optimización. ¡DentComm está aquí para ser tu socio en este viaje!",
        "blog_tags_title": "Etiquetas:",
        "tag_marketing_odontologico": "Marketing Dental",
        "tag_seo_local": "SEO Local",
        "tag_atrair_pacientes": "Atraer Pacientes",
        "blog_share_text": "Comparte:",
        "blog_related_title": "También Te Puede Gustar"
    }
  };

  function applyTranslations(lang) {
    if (!translations[lang]) {
      console.warn(`Language "${lang}" not found. Defaulting to "pt".`);
      lang = "pt";
    }

    htmlRoot.setAttribute("lang", lang === "pt" ? "pt-BR" : "es");

    let pageTitleKey = document.body.classList.contains('page-blog') ? "blog_page_title" : "page_title";
    let metaDescKey = document.body.classList.contains('page-blog') ? "blog_meta_description" : "meta_description_index";

    if (document.body.classList.contains('page-single-post')) {
      pageTitleKey = "artigo1_seo_title";
      metaDescKey = "artigo1_seo_desc";
    }
    
    document.title = translations[lang][pageTitleKey];
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag) {
        metaDescriptionTag.setAttribute('content', translations[lang][metaDescKey]);
    }

    if (langToggle) {
        const currentLangFlagSpan = langToggle.querySelector(".current-lang-flag");
        const langTextSpan = langToggle.querySelector(".lang-text");
        if (currentLangFlagSpan && flags[lang]) currentLangFlagSpan.innerHTML = flags[lang];
        if (langTextSpan) langTextSpan.textContent = lang.toUpperCase();
    }
    
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.dataset.translate;
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
      const key = el.dataset.translatePlaceholder;
      if (translations[lang][key]) el.placeholder = translations[lang][key];
    });

    document.querySelectorAll("[data-translate-alt]").forEach(el => {
      const key = el.dataset.translateAlt;
      if (translations[lang][key]) el.alt = translations[lang][key];
    });

    document.querySelectorAll("[data-translate-aria-label]").forEach(el => {
        const key = el.dataset.translateAriaLabel;
        if (translations[lang][key]) el.setAttribute("aria-label", translations[lang][key]);
    });
    
    if (currentYearSpan && translations[lang]["footer_copyright"]) {
        const year = new Date().getFullYear();
        const copyrightText = translations[lang]["footer_copyright"].replace("{CURRENT_YEAR}", year);
        const pElement = currentYearSpan.parentElement;
        pElement.innerHTML = copyrightText;
    }
    localStorage.setItem("language", lang);
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "pt" ? "es" : "pt";
      applyTranslations(currentLanguage);
    });
  }

  const smoothScrollLinks = document.querySelectorAll("a[href*='#']");
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const url = new URL(href, window.location.href);
      
      if (url.pathname !== window.location.pathname || url.search !== window.location.search) {
          if (url.hash) {
              localStorage.setItem('scrollToAnchor', url.hash);
          }
          return;
      }
      
      if (url.hash) {
        e.preventDefault();
        const targetElement = document.querySelector(url.hash);
        if (targetElement) {
            const mainNav = document.querySelector('.main-nav');
            const navToggleBtn = document.getElementById('navToggle');

            if (mainNav && mainNav.classList.contains('open')) {
              mainNav.classList.remove('open');
              if (navToggleBtn) {
                navToggleBtn.setAttribute('aria-expanded', 'false');
                const icon = navToggleBtn.querySelector('i');
                if (icon) icon.classList.replace('fa-times', 'fa-bars');
              }
            }
            
            const navbarEl = document.querySelector('.navbar');
            const navbarHeight = navbarEl ? navbarEl.offsetHeight : 80;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth"
            });
        }
      }
    });
  });

  const scrollToAnchor = localStorage.getItem('scrollToAnchor');
  if (scrollToAnchor) {
      const targetElement = document.querySelector(scrollToAnchor);
      if (targetElement) {
          setTimeout(() => { 
              const navbarEl = document.querySelector('.navbar');
              const navbarHeight = navbarEl ? navbarEl.offsetHeight : 80;
              const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - navbarHeight;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
      }
      localStorage.removeItem('scrollToAnchor'); 
  }

  const elementsToAnimate = document.querySelectorAll(
    ".hero-content, .section-header, .sobre-content p, " +
    ".benefit-card, .plano-card, .depoimento-card, .ebook-item, " +
    ".formulario-contato-col, .footer-column, .footer-bottom-bar, " +
    ".blog-post-preview, .sidebar-widget"
  );
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05 }); 

  elementsToAnimate.forEach(el => {
    el.classList.add("animate-init");
    observer.observe(el);
  });

  const navToggleBtn = document.getElementById('navToggle');
  const navMenuContainer = document.querySelector('.main-nav');
  if (navToggleBtn && navMenuContainer) {
    navToggleBtn.addEventListener('click', () => {
      navMenuContainer.classList.toggle('open');
      const isOpen = navMenuContainer.classList.contains('open');
      navToggleBtn.setAttribute('aria-expanded', isOpen.toString());
      const icon = navToggleBtn.querySelector('i');
      if (icon) {
        icon.classList.toggle('fa-bars', !isOpen);
        icon.classList.toggle('fa-times', isOpen);
      }
    });
  }
  
    const navLinksForScroll = document.querySelectorAll(".nav-links li a[href^='index.html#']");
    const sections = Array.from(navLinksForScroll).map(link => {
        const sectionId = new URL(link.href).hash;
        return sectionId ? document.querySelector(sectionId) : null;
    }).filter(section => section !== null);

    if (sections.length > 0) {
        window.addEventListener("scroll", () => {
            let currentActiveFound = false;
            const fromTop = window.scrollY + 120;

            sections.forEach((section) => {
                const correspondingLink = document.querySelector(`.nav-links li a[href$="#${section.id}"]`);
                if (!correspondingLink) return;

                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    navLinksForScroll.forEach(link => link.classList.remove("active"));
                    correspondingLink.classList.add("active");
                    currentActiveFound = true;
                }
            });
        });
    }

  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  if (contactForm && formSuccessMessage) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      
      formSuccessMessage.classList.add('active');
      contactForm.reset();
      
      setTimeout(() => {
        formSuccessMessage.classList.remove('active');
      }, 5000);
    });
  }

  applyTranslations(currentLanguage);
});