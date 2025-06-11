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
        "page_title": "DentComm: Marketing Odontológico Focado em Resultados",
        "meta_description_index": "Marketing para dentistas e clínicas. A DentComm cria estratégias para atrair pacientes, construir autoridade e gerar crescimento com previsibilidade e ROI.",
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
        "blog_page_title": "Blog DentComm | Marketing e Gestão para Clínicas Odontológicas",
        "blog_meta_description": "Acompanhe o blog da DentComm para dicas, insights e estratégias avançadas de marketing digital e gestão para dentistas e clínicas odontológicas.",
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
        "ver_outros_planos": "Ver todos os planos",
        "artigo1_seo_title": "Como Atrair Pacientes para Clínica Odontológica em 2025 | DentComm",
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
        "blog_related_title": "Você Também Pode Gostar",
        "btn_cta_padrao": "Agendar Análise Estratégica",
        "base_page_title": "Plano Base: Estrutura Digital para Dentistas | DentComm",
        "base_meta_description": "Conheça o Plano Base: a solução ideal para dentistas que buscam iniciar sua captação de pacientes online com landing page, campanhas e ROI claro.",
        "base_hero_title": "Plano Base: <span>A Estrutura Essencial</span> para Atrair Seus Primeiros Pacientes",
        "base_hero_subtitle": "Entregamos a estrutura mínima para qualquer dentista construir autoridade digital e entender, na prática, o retorno de suas ações.",
        "base_porque_title": "Começando no Digital ou Precisando de Foco? <br class=\"desktop-only\">O Plano Base é o Ponto de Partida Certo.",
        "base_porque_subtitle": "Ideal para dentistas que desejam captar pacientes de forma ativa, mas precisam de uma solução de baixo risco, com clareza e sem complexidade.",
        "base_desafio_title": "As Dores que o Plano Base Resolve:",
        "base_desafio_1": "Publicar conteúdo sem ver retorno em agendamentos.",
        "base_desafio_2": "Perder pacientes por desorganização no atendimento via WhatsApp.",
        "base_desafio_3": "Investir em marketing sem saber se o dinheiro está voltando.",
        "base_desafio_4": "Não ter clareza de como transformar seguidores em uma agenda cheia.",
        "base_features_main_title": "O Que Você Recebe no Plano Base?",
        "base_feat1_title": "Estrutura de Captação e Atendimento",
        "base_feat1_desc": "Criamos uma Landing Page focada na sua especialidade e implantamos um funil de vendas com etapas personalizadas para o setor odontológico, com formulário integrado ao CRM.",
        "base_feat2_title": "Identidade Digital e Presença Online",
        "base_feat2_desc": "Desenvolvemos seu logotipo e paleta visual, entregamos textos prontos para bio do Instagram e WhatsApp, e fornecemos um kit com 4 artes por semana para manter seu feed profissional.",
        "base_feat3_title": "Tráfego e Captação de Pacientes",
        "base_feat3_desc": "Gerenciamos 2 campanhas ativas por mês no Meta Ads (Instagram/Facebook) com foco em captação local para o WhatsApp e posicionamento de autoridade.",
        "base_feat4_title": "Suporte e Estratégia",
        "base_feat4_desc": "Você recebe um treinamento gravado sobre como converter conversas em agendamentos, templates de mensagens e participa de uma reunião quinzenal de estratégia com nossos especialistas.",
        "base_feat5_title": "Análise de Resultados e ROI",
        "base_feat5_desc": "Apresentamos um relatório claro com o número de leads, custo por lead e o cálculo de ROI realista, mostrando o faturamento gerado a partir do investimento em marketing.",
        "base_faq_title": "Perguntas Frequentes sobre o Plano Base",
        "base_faq1_q": "O Plano Base é indicado para qual tipo de dentista?",
        "base_faq1_a": "É perfeito para dentistas de qualquer especialidade que estão começando sua presença digital, reestruturando sua captação de pacientes ou que desejam ter resultados claros com um investimento inicial controlado e de baixo risco.",
        "base_faq2_q": "A verba de anúncios para o Meta Ads está inclusa na mensalidade?",
        "base_faq2_a": "Não. A mensalidade do plano cobre toda a estratégia, criação, gestão e suporte da DentComm. A verba para os anúncios é um valor à parte, pago diretamente para a plataforma (Meta). Sugerimos uma verba mínima para garantir que as campanhas tenham um bom desempenho.",
        "base_faq3_q": "Eu preciso ter conhecimento em marketing para contratar o plano?",
        "base_faq3_a": "De forma alguma. O objetivo do Plano Base é justamente oferecer a estrutura e o conhecimento para que você não precise se preocupar com isso. Nós cuidamos de toda a parte técnica e estratégica, e orientamos você nas tomadas de decisão.",
        "base_final_cta_title": "Dê o Primeiro Passo para uma Agenda Cheia e Previsível.",
        "base_final_cta_subtitle": "O Plano Base é a parceria ideal para iniciar sua jornada de crescimento com o pé direito. Vamos conversar sobre seus objetivos?",
        "flow_page_title": "Plano Flow: Automação e Marketing para Clínicas | DentComm",
        "flow_meta_description": "Evolua sua captação de pacientes com o Plano Flow. Oferecemos automação, campanhas multicanal e inteligência de dados para escalar sua clínica.",
        "flow_hero_title": "Plano Flow: <span>Escale sua Captação</span> com Automação e Inteligência",
        "flow_hero_subtitle": "Ideal para dentistas que já estão no digital, mas precisam crescer com controle, previsibilidade e uma gestão otimizada da jornada do paciente.",
        "flow_porque_title": "Sua Captação de Pacientes Está Inconstante? <br class=\"desktop-only\">O Flow Traz Previsibilidade e Crescimento.",
        "flow_porque_subtitle": "Se você sente que está perdendo oportunidades por falta de tempo ou automação e precisa de um método para aumentar o volume de agendamentos, o Plano Flow é a evolução que sua clínica precisa.",
        "flow_desafio_title": "Os Desafios que Superamos com o Flow:",
        "flow_desafio_1": "Captação inconsistente: um mês a agenda está cheia, no outro, vazia.",
        "flow_desafio_2": "Baixa conversão: muitos pacientes chegam, mas poucos agendam.",
        "flow_desafio_3": "Atendimento confuso, repetitivo e sem um padrão de qualidade.",
        "flow_desafio_4": "Produção de conteúdo vista como uma obrigação cansativa e ineficaz.",
        "flow_features_main_title": "As Ferramentas do Flow para seu Crescimento:",
        "flow_feat1_title": "Rebranding Completo",
        "flow_feat1_desc": "Realizamos o redesenho total da sua identidade visual, com nova logo, paleta de cores e tipografia. Entregamos um manual de marca profissional para garantir consistência em todos os canais.",
        "flow_feat2_title": "Campanhas de Tráfego Otimizadas",
        "flow_feat2_desc": "Gerenciamos 5 campanhas simultâneas no Meta Ads e 2 no Google Ads (Pesquisa e YouTube), com segmentações avançadas por localização, comportamento e engajamento.",
        "flow_feat3_title": "CRM e Atendimento Automatizado",
        "flow_feat3_desc": "Implementamos um CRM com funil de conversão ajustado por canal e automações de WhatsApp, como mensagem de entrada, pré-triagem e lembretes automáticos após 48h sem resposta.",
        "flow_feat4_title": "Nutrição e Reativação de Leads",
        "flow_feat4_desc": "Executamos 3 campanhas de e-mail marketing mensais e reengajamos até 1.000 leads antigos da sua base com disparos segmentados e rastreáveis para não perder nenhuma oportunidade.",
        "flow_feat5_title": "Inteligência Artificial Ativada",
        "flow_feat5_desc": "Utilizamos as funcionalidades de IA do RD Station Marketing para sugerir assuntos de e-mails, segmentar leads por comportamento e otimizar os horários de disparo com base em dados de abertura.",
        "flow_feat6_title": "Estratégia Comercial e Suporte",
        "flow_feat6_desc": "Fornecemos scripts personalizados por canal, treinamento para sua equipe interna focado em conversão e reengajamento, e suporte técnico para ajustes operacionais no CRM e automações.",
        "flow_faq_title": "Perguntas Frequentes sobre o Plano Flow",
        "flow_faq1_q": "Já tenho uma logo. Preciso fazer o rebranding?",
        "flow_faq1_a": "O rebranding é uma etapa estratégica do Flow para garantir que sua imagem esteja alinhada a um novo patamar de profissionalismo e autoridade. Analisamos sua identidade atual e, em conjunto, decidimos se um redesenho completo ou apenas ajustes pontuais são necessários para atingir os objetivos.",
        "flow_faq2_q": "O que significa 'pré-triagem' no WhatsApp?",
        "flow_faq2_a": "É uma automação que faz as perguntas iniciais essenciais ao paciente (ex: 'Qual tratamento você busca?', 'Você é um novo paciente?'), organizando as informações antes mesmo de sua equipe iniciar o atendimento. Isso economiza tempo e qualifica o lead, permitindo que sua equipe foque na conversão.",
        "flow_faq3_q": "Como funciona o treinamento da equipe?",
        "flow_faq3_a": "Oferecemos sessões de treinamento online (gravadas e/ou ao vivo) para sua equipe de atendimento, focadas em técnicas de conversão, uso correto dos scripts, gestão do funil no CRM e melhores práticas para reengajar pacientes. O objetivo é padronizar e otimizar o atendimento para aumentar a taxa de agendamento.",
        "flow_final_cta_title": "Transforme Leads em Pacientes e Inconsistência em Previsibilidade.",
        "flow_final_cta_subtitle": "O Plano Flow é a parceria estratégica que sua clínica precisa para crescer de forma organizada e inteligente. Vamos destravar seu potencial?",
        "core360_page_title": "Plano Core360: Ecossistema de Marketing Integrado | DentComm",
        "core360_meta_description": "Integre marketing, vendas e gestão com o Plano Core360 da DentComm. A solução completa para clínicas que buscam escalar com controle, dados e previsibilidade.",
        "core360_hero_title": "Plano Core360: <span>O Ecossistema Completo</span> para Dominar seu Mercado",
        "core360_hero_subtitle": "Integre marketing, atendimento, vendas e gestão. A solução definitiva para clínicas que buscam previsibilidade de agenda e crescimento sustentável.",
        "core360_porque_title": "Seu Crescimento Está Desorganizado e Difícil de Escalar? <br class=\"desktop-only\">O Core360 Traz Controle e Previsibilidade.",
        "core360_porque_subtitle": "Para clínicas com múltiplas especialidades e equipe estruturada que precisam de um sistema integrado para gerenciar a jornada do paciente de ponta a ponta e tomar decisões baseadas em dados.",
        "core360_desafio_title": "Os Desafios de Clínicas em Expansão:",
        "core360_desafio_1": "Crescimento desorganizado e difícil de escalar de forma sustentável.",
        "core360_desafio_2": "Equipe sem um padrão de atendimento, resultando em baixa conversão.",
        "core360_desafio_3": "Falta de rastreamento de resultados por campanha e canal de marketing.",
        "core360_desafio_4": "ROI baixo ou desconhecido pela ausência de uma visão integrada.",
        "core360_features_main_title": "As Entregas do Ecossistema Core360:",
        "core360_feat1_title": "Integração Total do Ecossistema",
        "core360_feat1_desc": "Conectamos site, páginas por especialidade, central de agendamento, CRM, WhatsApp, e-mail e chatbots em um sistema único e coeso para uma gestão impecável.",
        "core360_feat2_title": "Tráfego Multicanal Flexível",
        "core360_feat2_desc": "Criamos campanhas ilimitadas no Meta Ads e Google Ads, distribuídas por objetivos (captação, autoridade, conversão) e com segmentações profundas por especialidade e comportamento.",
        "core360_feat3_title": "Landing Pages Personalizadas",
        "core360_feat3_desc": "Desenvolvemos landing pages ilimitadas e específicas para cada campanha ou ação, com layout otimizado para conversão, botão de WhatsApp, formulários e call tracking.",
        "core360_feat4_title": "CRM e Automação Comportamental",
        "core360_feat4_desc": "Implementamos funis por canal e especialidade, com automações baseadas no comportamento do lead (clicou, agendou, ignorou) e alertas internos para sua equipe.",
        "core360_feat5_title": "Nutrição e Relacionamento 360°",
        "core360_feat5_desc": "Executamos campanhas ilimitadas de e-mail e WhatsApp com IA, nutrindo leads por interesse (estética, dor, prevenção) e recuperando contatos inativos com mais de 90 dias.",
        "core360_feat6_title": "Inteligência Artificial e Dashboards",
        "core360_feat6_desc": "Utilizamos IA para pontuação automática de leads e otimização de campanhas. Você terá acesso a um dashboard executivo com dados em tempo real e ROI por especialidade.",
        "core360_faq_title": "Perguntas Frequentes sobre o Core360",
        "core360_faq1_q": "Minha clínica precisa ter quantas especialidades para o Core360?",
        "core360_faq1_a": "O plano é indicado para clínicas que possuem pelo menos duas especialidades ativas. Isso nos permite criar funis, campanhas e nutrições segmentadas, extraindo o máximo potencial da plataforma e garantindo um ROI mais claro por área.",
        "core360_faq2_q": "O que é 'automação comportamental'?",
        "core360_faq2_a": "Significa que o sistema reage automaticamente às ações do seu lead. Por exemplo: se um lead clica em um e-mail sobre 'implantes', ele pode ser automaticamente movido para um funil específico desse tratamento e receber mais informações sobre o tema, aumentando a chance de conversão.",
        "core360_faq3_q": "Como funciona o Dashboard Executivo?",
        "core360_faq3_a": "É um painel online, acessível por você e sua equipe, que centraliza as métricas mais importantes em tempo real: leads por campanha, custo por conversão, taxa de agendamento e o ROI por especialidade. Ele transforma dados complexos em insights visuais para uma tomada de decisão rápida e estratégica.",
        "core360_final_cta_title": "Deixe de Adivinhar e Comece a Dominar seu Mercado com Dados.",
        "core360_final_cta_subtitle": "O Plano Core360 é a parceria que sua clínica precisa para escalar de forma inteligente e sustentável. Pronto para ter uma visão 360° do seu crescimento?",
        "fullstack_page_title": "Plano Fullstack: Gestão Completa de Marketing e Vendas | DentComm",
        "fullstack_meta_description": "Delegue 100% da sua operação de marketing digital com o Plano Fullstack. A DentComm gerencia tudo, da estratégia à pré-venda, para você focar nos pacientes.",
        "fullstack_hero_title": "Plano Fullstack: <span>Foque no seu Paciente,</span> a Operação Digital é Nossa",
        "fullstack_hero_subtitle": "Assumimos completamente a operação digital da sua clínica, da estratégia à execução. Cresça com escala, qualidade, previsibilidade e tempo livre.",
        "fullstack_porque_title": "Sem Tempo para Cuidar do Marketing e das Vendas? <br class=\"desktop-only\">Com o Fullstack, Você Delega com Confiança.",
        "fullstack_porque_subtitle": "Para clínicas com múltiplos dentistas e grupos odontológicos que precisam de uma parceira que assuma a responsabilidade pela geração de resultados, padronização e crescimento em escala.",
        "fullstack_desafio_title": "As Dores de Quem Precisa Delegar:",
        "fullstack_desafio_1": "Falta de tempo para cuidar da área comercial e do marketing da clínica.",
        "fullstack_desafio_2": "Inconsistência na agenda entre os diferentes profissionais e especialidades.",
        "fullstack_desafio_3": "Atendimento desorganizado e com uma taxa de conversão abaixo do potencial.",
        "fullstack_desafio_4": "Crescimento sem dados, sem controle e sem clareza de qual o retorno real sobre o investimento.",
        "fullstack_features_main_title": "Fullstack: Sua Operação de Marketing e Vendas, Gerenciada por Nós.",
        "fullstack_feat1_title": "Operação 100% Gerenciada",
        "fullstack_feat1_desc": "A DentComm assume toda a rotina de marketing e pré-vendas, com um consultor exclusivo dedicado ao seu projeto, interagindo diretamente com sua recepção para garantir a máxima performance.",
        "fullstack_feat2_title": "Conteúdo e Imagem Premium",
        "fullstack_feat2_desc": "Produzimos 8 artes por semana, além de vídeos, animações e kits gráficos sob demanda para campanhas sazonais e promoções, com redesign contínuo da sua identidade visual.",
        "fullstack_feat3_title": "CRM + Pré-venda Gerenciada",
        "fullstack_feat3_desc": "Nossa equipe assume a gestão dos leads no CRM, realizando a triagem, qualificação e o agendamento ativo via WhatsApp ou e-mail, enviando apenas os pacientes prontos para sua clínica.",
        "fullstack_feat4_title": "Suporte Total à Clínica",
        "fullstack_feat4_desc": "Oferecemos consultoria de posicionamento comercial, auxiliamos na estrutura de atendimento e participamos de reuniões internas da sua clínica, se necessário, para alinhar a operação.",
        "fullstack_feat5_title": "Inteligência Estratégica",
        "fullstack_feat5_desc": "Aplicamos IA em toda a jornada do lead para previsão de conversão, sugestão de campanhas e pontuação de leads. Você terá acesso total aos relatórios e sugestões preditivas.",
        "fullstack_feat6_title": "Relatórios e Painéis Avançados",
        "fullstack_feat6_desc": "Fornecemos relatórios semanais completos da operação e um dashboard interativo com dados em tempo real sobre CPL, CAC, taxa de conversão e faturamento atribuído por campanha.",
        "fullstack_faq_title": "Perguntas Frequentes sobre o Plano Fullstack",
        "fullstack_faq1_q": "O que significa 'pré-venda gerenciada' na prática?",
        "fullstack_faq1_a": "Significa que nossa equipe de especialistas assume o primeiro contato com todos os leads gerados. Nós qualificamos, nutrimos e realizamos o agendamento diretamente no seu sistema. Sua recepção recebe apenas a confirmação do paciente agendado, eliminando o trabalho de atendimento inicial e maximizando a taxa de conversão.",
        "fullstack_faq2_q": "Este plano é indicado para um dentista autônomo?",
        "fullstack_faq2_a": "O Plano Fullstack é desenhado para estruturas mais robustas, como clínicas com múltiplos dentistas, especialidades diversas ou grupos odontológicos. Dentistas autônomos com alto volume e que desejam delegação total também podem se beneficiar, mas geralmente os planos Base, Flow ou Core360 são mais indicados para iniciar.",
        "fullstack_faq3_q": "Como é a comunicação entre a DentComm e minha equipe?",
        "fullstack_faq3_a": "A comunicação é constante e fluida. Designamos um consultor exclusivo para seu projeto que manterá contato diário com sua recepção ou gestor através de canais como WhatsApp ou Slack. Além disso, realizamos reuniões de alinhamento e performance ilimitadas, conforme a necessidade da operação.",
        "fullstack_final_cta_title": "Sua única preocupação será oferecer o melhor atendimento. O resto, pode deixar com a gente.",
        "fullstack_final_cta_subtitle": "O Plano Fullstack é a parceria definitiva para clínicas que buscam crescimento em escala com tranquilidade e confiança. Vamos conversar?",
    },
    es: {
        "page_title": "DentComm: Marketing Dental Enfocado en Resultados",
        "meta_description_index": "Marketing para dentistas y clínicas. DentComm crea estrategias para atraer pacientes, construir autoridad y generar crecimiento con previsibilidad y ROI.",
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
        "blog_page_title": "Blog DentComm | Marketing y Gestión para Clínicas Dentales",
        "blog_meta_description": "Sigue el blog de DentComm para obtener consejos, ideas y estrategias avanzadas de marketing digital y gestión para dentistas y clínicas dentales.",
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
        "ver_outros_planos": "Ver todos los planes",
        "artigo1_seo_title": "Cómo Atraer Pacientes a tu Clínica Dental en 2025 | DentComm",
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
        "blog_related_title": "También Te Puede Gustar",
        "btn_cta_padrao": "Agendar Análisis Estratégico",
        "base_page_title": "Plan Base: Estructura Digital para Dentistas | DentComm",
        "base_meta_description": "Conoce el Plan Base: la solución ideal para dentistas que buscan iniciar su captación de pacientes online con landing page, campañas y ROI claro.",
        "base_hero_title": "Plan Base: <span>La Estructura Esencial</span> para Atraer a Tus Primeros Pacientes",
        "base_hero_subtitle": "Entregamos la estructura mínima para que cualquier dentista construya autoridad digital y entienda, en la práctica, el retorno de sus acciones.",
        "base_porque_title": "¿Comenzando en el Mundo Digital o Necesitando Enfoque? <br class=\"desktop-only\">El Plan Base es el Punto de Partida Correcto.",
        "base_porque_subtitle": "Ideal para dentistas que desean captar pacientes de forma activa, pero necesitan una solución de bajo riesgo, con claridad y sin complejidad.",
        "base_desafio_title": "Los Dolores que el Plan Base Resuelve:",
        "base_desafio_1": "Publicar contenido sin ver retorno en citas.",
        "base_desafio_2": "Perder pacientes por desorganización en la atención por WhatsApp.",
        "base_desafio_3": "Invertir en marketing sin saber si el dinero está regresando.",
        "base_desafio_4": "No tener claridad sobre cómo transformar seguidores en una agenda llena.",
        "base_features_main_title": "¿Qué Recibes en el Plan Base?",
        "base_feat1_title": "Estructura de Captación y Atención",
        "base_feat1_desc": "Creamos una Landing Page enfocada en tu especialidad e implementamos un embudo de ventas con etapas personalizadas para el sector dental, con formulario integrado al CRM.",
        "base_feat2_title": "Identidad Digital y Presencia Online",
        "base_feat2_desc": "Desarrollamos tu logotipo y paleta visual, entregamos textos listos para la biografía de Instagram y WhatsApp, y proporcionamos un kit con 4 artes por semana para mantener tu feed profesional.",
        "base_feat3_title": "Tráfico y Captación de Pacientes",
        "base_feat3_desc": "Gestionamos 2 campañas activas al mes en Meta Ads (Instagram/Facebook) con enfoque en captación local para WhatsApp y posicionamiento de autoridad.",
        "base_feat4_title": "Soporte y Estrategia",
        "base_feat4_desc": "Recibes una capacitación grabada sobre cómo convertir conversaciones en citas, plantillas de mensajes y participas en una reunión quincenal de estrategia con nuestros especialistas.",
        "base_feat5_title": "Análisis de Resultados y ROI",
        "base_feat5_desc": "Presentamos un informe claro con el número de leads, costo por lead y el cálculo de ROI realista, mostrando la facturación generada a partir de la inversión en marketing.",
        "base_faq_title": "Preguntas Frecuentes sobre el Plan Base",
        "base_faq1_q": "¿Para qué tipo de dentista está indicado el Plan Base?",
        "base_faq1_a": "Es perfecto para dentistas de cualquier especialidad que están comenzando su presencia digital, reestructurando su captación de pacientes o que desean tener resultados claros con una inversión inicial controlada y de bajo riesgo.",
        "base_faq2_q": "¿El presupuesto para anuncios de Meta Ads está incluido en la mensualidad?",
        "base_faq2_a": "No. La mensualidad del plan cubre toda la estrategia, creación, gestión y soporte de DentComm. El presupuesto para los anuncios es un valor aparte, pagado directamente a la plataforma (Meta). Sugerimos un presupuesto mínimo para garantizar que las campañas tengan un buen rendimiento.",
        "base_faq3_q": "¿Necesito tener conocimientos de marketing para contratar el plan?",
        "base_faq3_a": "De ninguna manera. El objetivo del Plan Base es precisamente ofrecer la estructura y el conocimiento para que no tengas que preocuparte por eso. Nos encargamos de toda la parte técnica y estratégica, y te orientamos en la toma de decisiones.",
        "base_final_cta_title": "Da el Primer Paso Hacia una Agenda Llena y Predecible.",
        "base_final_cta_subtitle": "El Plan Base es la alianza ideal para iniciar tu camino de crecimiento con el pie derecho. ¿Hablamos de tus objetivos?",
        "flow_page_title": "Plan Flow: Automatización y Marketing para Clínicas | DentComm",
        "flow_meta_description": "Evoluciona tu captación de pacientes con el Plan Flow. Ofrecemos automatización, campañas multicanal e inteligencia de datos para escalar tu clínica.",
        "flow_hero_title": "Plan Flow: <span>Escala tu Captación</span> con Automatización e Inteligencia",
        "flow_hero_subtitle": "Ideal para dentistas que ya están en el mundo digital, pero necesitan crecer con control, previsibilidad y una gestión optimizada del recorrido del paciente.",
        "flow_porque_title": "¿Tu Captación de Pacientes es Inconstante? <br class=\"desktop-only\">El Flow Aporta Previsibilidad y Crecimiento.",
        "flow_porque_subtitle": "Si sientes que estás perdiendo oportunidades por falta de tiempo o automatización y necesitas un método para aumentar el volumen de citas, el Plan Flow es la evolución que tu clínica necesita.",
        "flow_desafio_title": "Los Desafíos que Superamos con el Flow:",
        "flow_desafio_1": "Captación inconsistente: un mes la agenda está llena, al otro, vacía.",
        "flow_desafio_2": "Baja conversión: muchos pacientes llegan, pero pocos programan una cita.",
        "flow_desafio_3": "Atención confusa, repetitiva y sin un estándar de calidad.",
        "flow_desafio_4": "La producción de contenido se ve como una obligación tediosa e ineficaz.",
        "flow_features_main_title": "Las Herramientas del Flow para tu Crecimiento:",
        "flow_feat1_title": "Rebranding Completo",
        "flow_feat1_desc": "Realizamos el rediseño total de tu identidad visual, con un nuevo logotipo, paleta de colores y tipografía. Entregamos un manual de marca profesional para garantizar la coherencia en todos los canales.",
        "flow_feat2_title": "Campañas de Tráfico Optimizadas",
        "flow_feat2_desc": "Gestionamos 5 campañas simultáneas en Meta Ads y 2 en Google Ads (Búsqueda y YouTube), con segmentaciones avanzadas por ubicación, comportamiento y engagement.",
        "flow_feat3_title": "CRM y Atención Automatizada",
        "flow_feat3_desc": "Implementamos un CRM con un embudo de conversión ajustado por canal y automatizaciones de WhatsApp, como mensajes de bienvenida, precalificación y recordatorios automáticos después de 48h sin respuesta.",
        "flow_feat4_title": "Nutrición y Reactivación de Leads",
        "flow_feat4_desc": "Ejecutamos 3 campañas de email marketing mensuales y reenganchamos hasta 1,000 leads antiguos de tu base con envíos segmentados y rastreables para no perder ninguna oportunidad.",
        "flow_feat5_title": "Inteligencia Artificial Activada",
        "flow_feat5_desc": "Utilizamos las funcionalidades de IA de RD Station Marketing para sugerir asuntos de correos electrónicos, segmentar leads por comportamiento y optimizar los horarios de envío basados en datos de apertura.",
        "flow_feat6_title": "Estrategia Comercial y Soporte",
        "flow_feat6_desc": "Proporcionamos guiones personalizados por canal, capacitación para tu equipo interno enfocada en conversión y reenganche, y soporte técnico para ajustes operativos en el CRM y automatizaciones.",
        "flow_faq_title": "Preguntas Frecuentes sobre el Plan Flow",
        "flow_faq1_q": "¿Ya tengo un logotipo. Necesito hacer el rebranding?",
        "flow_faq1_a": "El rebranding es un paso estratégico del Flow para asegurar que tu imagen esté alineada con un nuevo nivel de profesionalismo y autoridad. Analizamos tu identidad actual y, juntos, decidimos si es necesario un rediseño completo o solo ajustes puntuales para alcanzar los objetivos.",
        "flow_faq2_q": "¿Qué significa 'precalificación' en WhatsApp?",
        "flow_faq2_a": "Es una automatización que realiza las preguntas iniciales esenciales al paciente (ej: '¿Qué tratamiento buscas?', '¿Eres un paciente nuevo?'), organizando la información incluso antes de que tu equipo comience la atención. Esto ahorra tiempo y califica al lead, permitiendo que tu equipo se enfoque en la conversión.",
        "flow_faq3_q": "¿Cómo funciona la capacitación del equipo?",
        "flow_faq3_a": "Ofrecemos sesiones de capacitación en línea (grabadas y/o en vivo) para tu equipo de atención, enfocadas en técnicas de conversión, uso correcto de los guiones, gestión del embudo en el CRM y mejores prácticas para reenganchar pacientes. El objetivo es estandarizar y optimizar la atención para aumentar la tasa de citas.",
        "flow_final_cta_title": "Convierte Leads en Pacientes y la Inconsistencia en Previsibilidad.",
        "flow_final_cta_subtitle": "El Plan Flow es la alianza estratégica que tu clínica necesita para crecer de manera organizada e inteligente. ¿Desbloqueamos tu potencial?",
        "core360_page_title": "Plan Core360: Ecosistema de Marketing Integrado | DentComm",
        "core360_meta_description": "Integra marketing, ventas y gestión con el Plan Core360 de DentComm. La solución completa para clínicas que buscan escalar con control, datos y previsibilidad.",
        "core360_hero_title": "Plan Core360: <span>El Ecosistema Completo</span> para Dominar tu Mercado",
        "core360_hero_subtitle": "Integra marketing, atención, ventas y gestión. La solución definitiva para clínicas que buscan previsibilidad de agenda y crecimiento sostenible.",
        "core360_porque_title": "¿Tu Crecimiento es Desorganizado y Difícil de Escalar? <br class=\"desktop-only\">Core360 Aporta Control y Previsibilidad.",
        "core360_porque_subtitle": "Para clínicas con múltiples especialidades y un equipo estructurado que necesitan un sistema integrado para gestionar el recorrido del paciente de principio a fin y tomar decisiones basadas en datos.",
        "core360_desafio_title": "Los Desafíos de las Clínicas en Expansión:",
        "core360_desafio_1": "Crecimiento desorganizado y difícil de escalar de manera sostenible.",
        "core360_desafio_2": "Equipo sin un estándar de atención, lo que resulta en una baja conversión.",
        "core360_desafio_3": "Falta de seguimiento de resultados por campaña y canal de marketing.",
        "core360_desafio_4": "ROI bajo o desconocido debido a la falta de una visión integrada.",
        "core360_features_main_title": "Las Entregas del Ecosistema Core360:",
        "core360_feat1_title": "Integración Total del Ecosistema",
        "core360_feat1_desc": "Conectamos sitio web, páginas por especialidad, centro de citas, CRM, WhatsApp, correo electrónico y chatbots en un sistema único y cohesivo para una gestión impecable.",
        "core360_feat2_title": "Tráfico Multicanal Flexible",
        "core360_feat2_desc": "Creamos campañas ilimitadas en Meta Ads y Google Ads, distribuidas por objetivos (captación, autoridad, conversión) y con segmentaciones profundas por especialidad y comportamiento.",
        "core360_feat3_title": "Landing Pages Personalizadas",
        "core360_feat3_desc": "Desarrollamos landing pages ilimitadas y específicas para cada campaña o acción, con un diseño optimizado para la conversión, botón de WhatsApp, formularios y seguimiento de llamadas.",
        "core360_feat4_title": "CRM y Automatización Conductual",
        "core360_feat4_desc": "Implementamos embudos por canal y especialidad, con automatizaciones basadas en el comportamiento del lead (hizo clic, agendó, ignoró) y alertas internas para tu equipo.",
        "core360_feat5_title": "Nutrición y Relación 360°",
        "core360_feat5_desc": "Ejecutamos campañas ilimitadas de correo electrónico y WhatsApp con IA, nutriendo leads por interés (estética, dolor, prevención) y recuperando contactos inactivos con más de 90 días.",
        "core360_feat6_title": "Inteligencia Artificial y Dashboards",
        "core360_feat6_desc": "Utilizamos IA para la puntuación automática de leads y la optimización de campañas. Tendrás acceso a un dashboard ejecutivo con datos en tiempo real y ROI por especialidad.",
        "core360_faq_title": "Preguntas Frecuentes sobre Core360",
        "core360_faq1_q": "¿Cuántas especialidades necesita tener mi clínica para el Core360?",
        "core360_faq1_a": "El plan está indicado para clínicas que tienen al menos dos especialidades activas. Esto nos permite crear embudos, campañas y nutriciones segmentadas, extrayendo el máximo potencial de la plataforma y garantizando un ROI más claro por área.",
        "core360_faq2_q": "¿Qué es la 'automatización conductual'?",
        "core360_faq2_a": "Significa que el sistema reacciona automáticamente a las acciones de tu lead. Por ejemplo, si un lead hace clic en un correo sobre 'implantes', puede ser movido automáticamente a un embudo específico de ese tratamiento y recibir más información sobre el tema, aumentando la posibilidad de conversión.",
        "core360_faq3_q": "¿Cómo funciona el Dashboard Ejecutivo?",
        "core360_faq3_a": "Es un panel en línea, accesible para ti y tu equipo, que centraliza las métricas más importantes en tiempo real: leads por campaña, costo por conversión, tasa de citas y el ROI por especialidad. Transforma datos complejos en insights visuales para una toma de decisiones rápida y estratégica.",
        "core360_final_cta_title": "Deja de Adivinar y Comienza a Dominar tu Mercado con Datos.",
        "core360_final_cta_subtitle": "El Plan Core360 es la alianza que tu clínica necesita para escalar de forma inteligente y sostenible. ¿Listo para tener una visión 360° de tu crecimiento?",
        "fullstack_page_title": "Plan Fullstack: Gestión Completa de Marketing y Ventas | DentComm",
        "fullstack_meta_description": "Delega el 100% de tu operación de marketing digital con el Plan Fullstack. DentComm gestiona todo, desde la estrategia hasta la preventa, para que te enfoques en los pacientes.",
        "fullstack_hero_title": "Plan Fullstack: <span>Enfócate en tu Paciente,</span> la Operación Digital es Nuestra",
        "fullstack_hero_subtitle": "Asumimos completamente la operación digital de tu clínica, desde la estrategia hasta la ejecución. Crece con escala, calidad, previsibilidad y tiempo libre.",
        "fullstack_porque_title": "¿Sin Tiempo para Ocuparte del Marketing y las Ventas? <br class=\"desktop-only\">Con Fullstack, Delegas con Confianza.",
        "fullstack_porque_subtitle": "Para clínicas con múltiples dentistas y grupos dentales que necesitan un socio que asuma la responsabilidad de generar resultados, estandarización y crecimiento a escala.",
        "fullstack_desafio_title": "Los Dolores de Quien Necesita Delegar:",
        "fullstack_desafio_1": "Falta de tiempo para ocuparse del área comercial y de marketing de la clínica.",
        "fullstack_desafio_2": "Inconsistencia en la agenda entre los diferentes profesionales y especialidades.",
        "fullstack_desafio_3": "Atención desorganizada y con una tasa de conversión por debajo del potencial.",
        "fullstack_desafio_4": "Crecimiento sin datos, sin control y sin claridad sobre el retorno real de la inversión.",
        "fullstack_features_main_title": "Fullstack: Tu Operación de Marketing y Ventas, Gestionada por Nosotros.",
        "fullstack_feat1_title": "Operación 100% Gestionada",
        "fullstack_feat1_desc": "DentComm asume toda la rutina de marketing y preventas, con un consultor exclusivo dedicado a tu proyecto, interactuando directamente con tu recepción para garantizar el máximo rendimiento.",
        "fullstack_feat2_title": "Contenido e Imagen Premium",
        "fullstack_feat2_desc": "Producimos 8 artes por semana, además de videos, animaciones y kits gráficos bajo demanda para campañas estacionales y promociones, con rediseño continuo de tu identidad visual.",
        "fullstack_feat3_title": "CRM + Preventa Gestionada",
        "fullstack_feat3_desc": "Nuestro equipo asume la gestión de los leads en el CRM, realizando la selección, calificación y programación activa de citas por WhatsApp o correo electrónico, enviando solo a los pacientes listos a tu clínica.",
        "fullstack_feat4_title": "Soporte Total a la Clínica",
        "fullstack_feat4_desc": "Ofrecemos consultoría de posicionamiento comercial, ayudamos en la estructura de atención y participamos en reuniones internas de tu clínica, si es necesario, para alinear la operación.",
        "fullstack_feat5_title": "Inteligencia Estratégica",
        "fullstack_feat5_desc": "Aplicamos IA en todo el recorrido del lead para la predicción de conversiones, sugerencia de campañas y puntuación de leads. Tendrás acceso total a los informes y sugerencias predictivas.",
        "fullstack_feat6_title": "Informes y Paneles Avanzados",
        "fullstack_feat6_desc": "Proporcionamos informes semanales completos de la operación y un dashboard interactivo con datos en tiempo real sobre CPL, CAC, tasa de conversión e ingresos atribuidos por campaña.",
        "fullstack_faq_title": "Preguntas Frecuentes sobre el Plan Fullstack",
        "fullstack_faq1_q": "¿Qué significa 'preventa gestionada' en la práctica?",
        "fullstack_faq1_a": "Significa que nuestro equipo de especialistas asume el primer contacto con todos los leads generados. Calificamos, nutrimos y programamos la cita directamente en tu sistema. Tu recepción solo recibe la confirmación del paciente agendado, eliminando el trabajo de atención inicial y maximizando la tasa de conversión.",
        "fullstack_faq2_q": "¿Este plan es adecuado para un dentista autónomo?",
        "fullstack_faq2_a": "El Plan Fullstack está diseñado para estructuras más robustas, como clínicas con múltiples dentistas, diversas especialidades o grupos dentales. Los dentistas autónomos con un alto volumen y que deseen una delegación total también pueden beneficiarse, pero generalmente los planes Base, Flow o Core360 son más adecuados para empezar.",
        "fullstack_faq3_q": "¿Cómo es la comunicación entre DentComm y mi equipo?",
        "fullstack_faq3_a": "La comunicación es constante y fluida. Asignamos un consultor exclusivo a tu proyecto que mantendrá contacto diario con tu recepción o gerente a través de canales como WhatsApp o Slack. Además, realizamos reuniones ilimitadas de alineación y rendimiento, según las necesidades de la operación.",
        "fullstack_final_cta_title": "Tu única preocupación será ofrecer la mejor atención. El resto, déjalo en nuestras manos.",
        "fullstack_final_cta_subtitle": "El Plan Fullstack es la alianza definitiva para clínicas que buscan un crecimiento a escala con tranquilidad y confianza. ¿Hablamos?",
    }
  };

  function applyTranslations(lang) {
    if (!translations[lang]) {
      console.warn(`Language "${lang}" not found. Defaulting to "pt".`);
      lang = "pt";
    }

    htmlRoot.setAttribute("lang", lang === "pt" ? "pt-BR" : "es");

    let pageTitleKey = "page_title"; 
    let metaDescKey = "meta_description_index";

    const bodyClass = document.body.className;

    if (bodyClass.includes('page-blog')) {
        pageTitleKey = "blog_page_title";
        metaDescKey = "blog_meta_description";
    } else if (bodyClass.includes('page-single-post')) {
        pageTitleKey = "artigo1_seo_title";
        metaDescKey = "artigo1_seo_desc";
    } else if (bodyClass.includes('page-plano-base')) {
        pageTitleKey = "base_page_title";
        metaDescKey = "base_meta_description";
    } else if (bodyClass.includes('page-plano-flow')) {
        pageTitleKey = "flow_page_title";
        metaDescKey = "flow_meta_description";
    } else if (bodyClass.includes('page-plano-core360')) {
        pageTitleKey = "core360_page_title";
        metaDescKey = "core360_meta_description";
    } else if (bodyClass.includes('page-plano-fullstack')) {
        pageTitleKey = "fullstack_page_title";
        metaDescKey = "fullstack_meta_description";
    }
    
    document.title = translations[lang][pageTitleKey] || translations['pt'][pageTitleKey];
    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && translations[lang][metaDescKey]) {
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
      if (translations[lang][key] !== undefined) {
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
    
    const yearSpan = document.getElementById('currentYear');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
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

  // Animação de entrada (com stagger)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        if (entry.target.hasAttribute('data-stagger-animation')) {
            const children = entry.target.querySelectorAll('.animate-init');
            children.forEach((child, index) => {
                child.style.transitionDelay = `${index * 100}ms`;
                child.classList.add('animate');
            });
        } else {
            entry.target.classList.add("animate");
        }
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 }); 

  document.querySelectorAll('.animate-init, [data-stagger-animation]').forEach(el => {
    if (el.hasAttribute('data-stagger-animation')) {
        const children = el.querySelectorAll('.animate-init');
        children.forEach(child => observer.observe(el));
    } else {
        observer.observe(el);
    }
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
  
    const navLinksForScroll = document.querySelectorAll(".nav-links li a[href*='index.html#']");
    const sections = Array.from(navLinksForScroll).map(link => {
        const sectionId = new URL(link.href).hash;
        return sectionId ? document.querySelector(sectionId) : null;
    }).filter(section => section !== null);

    if (window.location.pathname.includes('index.html') && sections.length > 0) {
        window.addEventListener("scroll", () => {
            let currentActiveFound = false;
            const fromTop = window.scrollY + 120;

            sections.forEach((section) => {
                const correspondingLink = document.querySelector(`.nav-links li a[href$="#${section.id}"]`);
                if (!correspondingLink) return;

                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    navLinksForScroll.forEach(l => l.classList.remove("active"));
                    if(correspondingLink) correspondingLink.classList.add("active");
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