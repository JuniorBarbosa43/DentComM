document.addEventListener("DOMContentLoaded", function () {
  const htmlRoot = document.getElementById("htmlRoot");
  const langToggle = document.getElementById("langToggle"); // Assumindo que o botão tem o ID "langToggle"
  const currentYearSpan = document.getElementById("currentYear");

  let currentLanguage = localStorage.getItem("language") || "pt"; // Padrão para Português

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
        "nav_contato_btn": "Contato",
        "lang_toggle_aria_label": "Mudar Idioma",
        "hero_title": "Soluções de Marketing Digital para <span>Clínicas Odontológicas e Dentistas</span>",
        "hero_subtitle": "Conectamos sua clínica a mais pacientes através de estratégias personalizadas e hiperespecializadas no setor odontológico.",
        "hero_cta": "Solicitar Diagnóstico Gratuito",
        "sobre_title": "Sobre a DentComm: Sua Parceira Estratégica em Odontologia",
        "sobre_p1": "A DentComm nasceu com a missão de <strong data-translate=\"sobre_p1_strong\">potencializar clínicas e dentistas em toda a América Latina</strong>, atraindo os pacientes ideais através de marketing digital inteligente e hiperespecializado no setor odontológico. Não somos apenas uma agência; atuamos como uma <strong data-translate=\"sobre_p2_strong\">extensão estratégica da sua clínica</strong>.",
        "sobre_p1_strong": "potencializar clínicas e dentistas em toda a América Latina",
        "sobre_p2_strong": "extensão estratégica da sua clínica",
        "sobre_p2": "Nosso foco é em <strong data-translate=\"sobre_p3_strong\">previsibilidade de resultados, construção de autoridade de marca para sua clínica e ROI mensurável</strong>. Contamos com um time de especialistas em tráfego pago, SEO, conteúdo estratégico, automações e design UX/UI – tudo para transformar sua presença digital em uma poderosa máquina de aquisição e fidelização de pacientes.",
        "sobre_p3_strong": "previsibilidade de resultados, construção de autoridade de marca para sua clínica e ROI mensurável",
        "beneficios_title": "Por que Escolher a DentComm para sua Clínica?",
        "beneficios_card1_title": "Hiperespecialização Odontológica",
        "beneficios_card1_desc": "Entendemos as nuances da jornada do paciente no universo odontológico. Falamos a língua da sua clínica.",
        "beneficios_card2_title": "Previsibilidade e ROI",
        "beneficios_card2_desc": "Estruture sua clínica com um retorno financeiro previsível e foco em resultados tangíveis para seus tratamentos.",
        "beneficios_card3_title": "Construção de Autoridade Clínica",
        "beneficios_card3_desc": "Posicionamos sua clínica como referência para atrair os melhores pacientes e se destacar na sua região.",
        "beneficios_card4_title": "Ecossistema Completo para Clínicas",
        "beneficios_card4_desc": "Tráfego, conteúdo, automações, CRM e design em uma solução integrada e personalizada para sua clínica.",
        "beneficios_card5_title": "Suporte Dedicado e Parceria Real",
"beneficios_card5_desc": "Vamos além de uma simples prestação de serviço. Oferecemos suporte próximo e atuamos como verdadeiros parceiros no crescimento da sua clínica.",
"beneficios_card6_title": "Inovação e Tecnologias de Ponta",
"beneficios_card6_desc": "Estamos sempre atualizados com as últimas tendências, ferramentas e tecnologias de marketing digital para garantir as estratégias mais eficazes para sua clínica.",
        "planos_title": "Planos Sob Medida para Cada Estágio da Sua Clínica",
        "planos_subtitle": "Seja para clínicas estabelecidas ou consultórios em crescimento, temos a estratégia ideal para atrair mais pacientes.",
        "planos_tag_popular": "Mais Popular",
        "planos_ignition_title": "Plano IGNITION",
        "planos_ignition_ideal": "Ideal para: Clínicas iniciando no digital, buscando base sólida e primeiros pacientes.",
        "planos_ignition_feat1": "Diagnóstico e Lançamento Estratégico Focado em Pacientes",
        "planos_ignition_feat2": "Posicionamento Digital Essencial da Clínica",
        "planos_ignition_feat3": "Gestão Inicial de Tráfego para Pacientes (Google Ads OU Social Ads)",
        "planos_ignition_feat4": "Configuração de CRM Básico e Automações Iniciais",
        "planos_momentum_title": "Plano MOMENTUM",
        "planos_momentum_ideal": "Ideal para: Clínicas que buscam crescimento acelerado de pacientes e otimização de processos.",
        "planos_momentum_feat1": "CRM Completo e Automações Avançadas para Pacientes",
        "planos_momentum_tooltip1": "Ferramenta robusta para organizar e automatizar o contato com leads e pacientes.",
        "planos_momentum_feat2": "Gestão de Tráfego Multicanal para Captação",
        "planos_momentum_feat3": "Criação de Landing Pages de Tratamentos e Copy Persuasiva",
        "planos_momentum_feat4": "Estratégias de Conteúdo para Autoridade da Clínica",
        "planos_authority_title": "Plano AUTHORITY",
        "planos_authority_ideal": "Ideal para: Clínicas que desejam estabelecer liderança, dominar o mercado regional e construir uma marca forte.",
        "planos_authority_feat1": "Dashboard de Métricas de Performance em Tempo Real",
        "planos_authority_feat2": "Tráfego Pago Estratégico e SEO Avançado (Local e Nicho Odontológico)",
        "planos_authority_tooltip2": "Otimização completa para dominar buscas relevantes para sua clínica e tratamentos.",
        "planos_authority_feat3": "Marketing de Influência e Parcerias Estratégicas",
        "planos_authority_feat4": "Gestão Automatizada da Jornada Completa do Paciente",
        "planos_apex_title": "Plano APEX 360°",
        "planos_apex_ideal": "Ideal para: Clínicas que visam máxima performance, expansão e parceria estratégica contínua para liderança de mercado.",
        "planos_apex_feat1": "Estratégia de Marketing 360° para Clínicas (Pan-LatAm opcional)",
        "planos_apex_feat2": "Tráfego Completo e Otimização Contínua (Google, Meta, YouTube, LinkedIn)",
        "planos_apex_feat3": "CRM Avançado, BI e Automações Sob Medida para Clínicas",
        "planos_apex_feat4": "Consultoria Tática e Reuniões Estratégicas com Time DentComm",
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
        "footer_sobre_blog": "Blog (em breve)",
        "footer_contato_title": "Contato",
        "footer_contato_whatsapp": "Fale Conosco no WhatsApp",
        "footer_siga_title": "Siga a DentComm",
        "footer_copyright": "©  DentComm. Todos os direitos reservados.",
        "footer_madewithlove": "Feito com 💙 para dentistas e clínicas que querem se destacar.",

        // --- PLANO IGNITION LP (PT) ---
        "ignition_page_title": "Plano Ignition - Comece com o Pé Direito no Digital | DentComm",
        "ignition_meta_description": "O Plano Ignition da DentComm é perfeito para clínicas odontológicas que estão começando no marketing digital. Construa uma base sólida e atraia seus primeiros pacientes online.",
        "ignition_hero_title": "Plano Ignition: <span>Sua Clínica Online</span> do Zero aos Primeiros Pacientes",
        "ignition_hero_subtitle": "Construa uma presença digital sólida, estabeleça sua marca online e comece a atrair os pacientes certos com o plano de entrada perfeito da DentComm.",
        "ignition_hero_cta": "Quero Começar Minha Jornada Digital",
        "ignition_porque_title": "Dando o Primeiro Passo no Digital? <br class=\"desktop-only\">O Ignition Acende Sua Presença Online.",
        "ignition_porque_subtitle": "Se sua clínica é nova, está reformulando sua estratégia ou simplesmente precisa de uma base digital forte para começar a captar pacientes, o Plano Ignition é o seu ponto de partida.",
        "ignition_desafio_title": "Os Desafios Comuns de Quem Está Começando:",
        "ignition_desafio_1": "Não saber por onde começar o marketing digital da clínica.",
        "ignition_desafio_2": "Orçamento limitado para grandes investimentos iniciais em marketing.",
        "ignition_desafio_3": "Pouca ou nenhuma visibilidade online para potenciais pacientes.",
        "ignition_desafio_4": "Dificuldade em competir com clínicas já estabelecidas digitalmente.",
        "alt_ignition_ilustracao": "Ilustração de uma clínica iniciando sua jornada digital com sucesso e primeiros resultados",
        "ignition_features_main_title": "Fundamentos Essenciais para Sua Clínica Decolar no Digital:",
        "ignition_feat1_title": "Diagnóstico e Lançamento Estratégico",
        "ignition_feat1_desc": "Analisamos sua clínica e mercado para definir a melhor estratégia inicial, focando em atrair os primeiros pacientes e construir uma base sólida.",
        "ignition_feat1_beneficio": "<strong>Benefício:</strong> Comece com clareza e direção, evitando desperdício de recursos.",
        "ignition_feat2_title": "Posicionamento Digital Essencial",
        "ignition_feat2_desc": "Criamos e otimizamos seus perfis essenciais online (Google Meu Negócio, redes sociais iniciais) para que sua clínica seja encontrada facilmente por pacientes locais.",
        "ignition_feat2_beneficio": "<strong>Benefício:</strong> Garanta que sua clínica apareça para quem busca seus serviços.",
        "ignition_feat3_title": "Gestão Inicial de Tráfego Pago",
        "ignition_feat3_desc": "Iniciamos campanhas de tráfego pago (Google Ads OU Social Ads, conforme estratégia) para gerar seus primeiros leads e agendamentos de forma rápida e controlada.",
        "ignition_feat3_beneficio": "<strong>Benefício:</strong> Atraia os primeiros pacientes ativamente e veja resultados iniciais.",
        "ignition_feat4_title": "Configuração de CRM Básico e Automações Iniciais",
        "ignition_feat4_desc": "Implementamos um sistema de CRM simplificado para organizar seus contatos e primeiras automações para facilitar o acompanhamento dos leads gerados.",
        "ignition_feat4_beneficio": "<strong>Benefício:</strong> Organize seus leads desde o início e não perca oportunidades.",
        "ignition_feat5_title": "Criação de Conteúdo Inicial para Redes Sociais",
"ignition_feat5_desc": "Desenvolvemos um pacote de posts iniciais para suas redes sociais, com design e copy alinhados à sua marca, para você começar a engajar seu público e construir sua comunidade online.",
"ignition_feat5_beneficio": "<strong>Benefício:</strong> Inicie sua comunicação online com material profissional e relevante.",
"ignition_feat6_title": "Treinamento Básico para Gestão da Presença Online",
"ignition_feat6_desc": "Oferecemos um treinamento introdutório para você ou sua equipe sobre como realizar postagens básicas, interagir com seguidores e entender as métricas iniciais das suas redes e Google Meu Negócio.",
"ignition_feat6_beneficio": "<strong>Benefício:</strong> Capacite-se para dar continuidade e entender sua presença digital inicial.",
        "ignition_processo_title": "Seu Lançamento Digital em Boas Mãos:",
        "ignition_step1_title": "Briefing Detalhado",
        "ignition_step1_desc": "Conversamos para entender sua clínica, público-alvo e metas iniciais.",
        "ignition_step2_title": "Configuração da Base",
        "ignition_step2_desc": "Preparamos seus perfis, CRM básico e a primeira campanha de tráfego.",
        "ignition_step3_title": "Lançamento e Acompanhamento",
        "ignition_step3_desc": "Colocamos sua clínica no ar e monitoramos os primeiros resultados de perto.",
        "ignition_cta_processo": "Iniciar Minha Presença Online",
        "ignition_faq_title": "Dúvidas Comuns sobre o Plano Ignition",
        "ignition_faq1_q": "Minha clínica é muito pequena, o Ignition serve para mim?",
        "ignition_faq1_a": "Sim! O Plano Ignition é especialmente desenhado para consultórios e clínicas de todos os tamanhos que estão começando sua jornada no marketing digital ou que precisam de uma reestruturação inicial com foco em resultados rápidos e construção de base.",
        "ignition_faq2_q": "Já tenho um perfil no Instagram, preciso do Ignition?",
        "ignition_faq2_a": "Ter um perfil é o primeiro passo, mas o Ignition vai além. Nós otimizamos seus perfis essenciais (incluindo Google Meu Negócio, crucial para buscas locais), implementamos uma estratégia inicial de tráfego pago para atrair pacientes ativamente e configuramos um CRM básico para você não perder nenhum contato. É sobre transformar sua presença em resultados.",
        "ignition_faq3_q": "Qual a diferença entre escolher Google Ads ou Social Ads no início?",
        "ignition_faq3_a": "A escolha depende da análise inicial e dos seus objetivos. Google Ads foca em capturar a demanda existente (pessoas que já buscam por dentistas). Social Ads (Facebook/Instagram) é ótimo para construir marca, alcançar públicos específicos e gerar interesse. No Ignition, focamos em uma delas para maximizar o impacto inicial com seu orçamento.",
        "ignition_final_cta_title": "Pronto para Dar o Start na Sua Visibilidade Online?",
        "ignition_final_cta_subtitle": "Com o Plano Ignition, sua clínica odontológica terá a base sólida para crescer e atrair pacientes no mundo digital. Vamos começar?",
        "ignition_final_cta_btn": "Quero o Plano Ignition!",
        "ignition_ver_outros_planos": "Ver todos os planos",

        // --- PLANO MOMENTUM LP (PT) ---
        "momentum_page_title": "Plano Momentum - Acelere Sua Clínica | DentComm",
        "momentum_meta_description": "Descubra como o Plano Momentum da DentComm pode otimizar processos, atrair pacientes qualificados e construir uma autoridade digital sólida para sua clínica odontológica.",
        "momentum_hero_title": "Plano Momentum: <span>Acelere o Crescimento</span> da Sua Clínica Odontológica",
        "momentum_hero_subtitle": "Otimize processos, capte um fluxo constante de pacientes qualificados e construa uma autoridade digital sólida. Ideal para clínicas prontas para o próximo nível.",
        "momentum_hero_cta": "Quero Impulsionar Minha Clínica Agora",
        "momentum_porque_title": "Sua Clínica Pronta para Decolar? <br class=\"desktop-only\">O Momentum é o Impulso que Faltava.",
        "momentum_porque_subtitle": "Se você busca mais do que apenas marcar presença online e quer resultados tangíveis e previsíveis, o Plano Momentum foi desenhado para você.",
        "momentum_desafio_title": "Os Desafios Comuns que Superamos Juntos:",
        "momentum_desafio_1": "Dificuldade em atrair o perfil certo de paciente consistentemente.",
        "momentum_desafio_2": "Processos manuais de captação e acompanhamento que consomem tempo.",
        "momentum_desafio_3": "Investimento em marketing sem um retorno claro e mensurável (ROI).",
        "momentum_desafio_4": "Concorrência acirrada e dificuldade em se destacar no mercado local.",
        "alt_momentum_grafico": "Gráfico de crescimento com o Plano Momentum",
        "momentum_features_main_title": "O Que Torna o Plano Momentum Tão Poderoso?",
            "momentum_feat1_title": "CRM Completo e Automações Avançadas", 
        "momentum_feat1_desc": "Implementamos e gerenciamos uma ferramenta robusta para organizar todos os seus contatos, automatizar o acompanhamento de leads e pacientes, desde o primeiro contato até o pós-tratamento. Crie funis de comunicação personalizados e nunca mais perca uma oportunidade de agendamento.",
        "momentum_feat1_beneficio": "<strong>Benefício:</strong> Maximize conversões e fidelização com processos inteligentes.",
            "momentum_feat2_title": "Gestão de Tráfego Multicanal Efetiva", 
        "momentum_feat2_desc": "Alcançamos seus pacientes ideais onde eles estão. Gerenciamos campanhas otimizadas no Google Ads, Meta Ads (Facebook e Instagram) e outras plataformas relevantes, focando em atrair leads qualificados para os tratamentos que sua clínica deseja priorizar. Análise constante para maximizar seu ROI.",
        "momentum_feat2_beneficio": "<strong>Benefício:</strong> Fluxo constante de novos pacientes interessados.",
           "momentum_feat3_title": "Landing Pages de Tratamentos e Copy Persuasiva", 
        "momentum_feat3_desc": "Desenvolvemos páginas de destino específicas para seus principais tratamentos, com design focado em conversão e textos (copywriting) que comunicam valor, quebram objeções e incentivam o agendamento. Cada página é uma máquina de captar interessados.",
        "momentum_feat3_beneficio": "<strong>Benefício:</strong> Aumente drasticamente as taxas de conversão.",
            "momentum_feat4_title": "Estratégias de Conteúdo para Autoridade",
        "momentum_feat4_desc": "Produzimos conteúdo relevante e estratégico (posts para blog, redes sociais, e-mail marketing) que posiciona sua clínica como referência na sua área de atuação. Eduque seus pacientes, construa confiança e melhore seu ranqueamento orgânico (SEO).",
        "momentum_feat4_beneficio": "<strong>Benefício:</strong> Torne-se a primeira escolha dos pacientes.",
        "momentum_feat5_title": "Relatórios Detalhados e Acompanhamento Estratégico",
"momentum_feat5_desc": "Fornecemos relatórios de performance claros e objetivos, com as métricas que realmente importam. Realizamos reuniões periódicas para analisar resultados e alinhar os próximos passos da estratégia.",
"momentum_feat5_beneficio": "<strong>Benefício:</strong> Transparência total e decisões baseadas em dados para otimização contínua.",
"momentum_feat6_title": "Otimização da Experiência do Paciente Online (UX/UI)",
"momentum_feat6_desc": "Analisamos e otimizamos a usabilidade e o design das suas páginas e pontos de contato digitais, garantindo uma jornada fluida e agradável para o paciente, desde o primeiro clique até o agendamento.",
"momentum_feat6_beneficio": "<strong>Benefício:</strong> Reduza atritos, aumente o engajamento e melhore as taxas de conversão em todo o funil.",
        "momentum_processo_title": "Pronto para o Crescimento Acelerado? <br class=\"desktop-only\">Veja Como é Simples Começar:",
        "momentum_step1_title": "Análise Estratégica",
        "momentum_step1_desc": "Entendemos seus objetivos e desafios para um plano de ação Momentum personalizado.",
        "momentum_step2_title": "Implementação Completa",
        "momentum_step2_desc": "Nossa equipe configura ferramentas, campanhas e automações para sua clínica decolar.",
        "momentum_step3_title": "Otimização e Relatórios",
        "momentum_step3_desc": "Monitoramos, ajustamos e otimizamos, fornecendo relatórios claros sobre desempenho e ROI.",
        "momentum_cta_processo": "Agendar uma Consultoria Estratégica",
        "momentum_faq_title": "Perguntas Frequentes sobre o Plano Momentum",
        "momentum_faq1_q": "O Plano Momentum é indicado para qual tipo de clínica?",
        "momentum_faq1_a": "É ideal para clínicas odontológicas já estabelecidas que buscam acelerar significativamente a captação de pacientes, otimizar seus processos de marketing e vendas, e construir uma forte presença online como autoridade em sua região ou especialidade.",
        "momentum_faq2_q": "Em quanto tempo começo a ver os resultados?",
        "momentum_faq2_a": "Embora cada clínica seja única, com o Plano Momentum, muitos de nossos clientes começam a ver um aumento no volume de leads qualificados e agendamentos nas primeiras semanas após a implementação das estratégias de tráfego e CRM. Resultados mais expressivos de autoridade e ROI consolidam-se ao longo dos primeiros 3 a 6 meses.",
        "momentum_faq3_q": "Preciso ter uma equipe de marketing interna?",
        "momentum_faq3_a": "Não necessariamente. O Plano Momentum é um serviço completo onde nossa equipe de especialistas cuida de toda a estratégia e execução. Sua participação será focada em aprovações estratégicas e no atendimento aos pacientes que chegam.",
        "momentum_faq4_q": "Qual o investimento para o Plano Momentum?",
        "momentum_faq4_a": "O investimento no Plano Momentum é personalizado de acordo com as necessidades específicas e o tamanho da sua clínica, bem como o orçamento de mídia para as campanhas de tráfego. Agende uma consultoria gratuita para receber uma proposta detalhada e sem compromisso.",
        "momentum_final_cta_title": "Dê o Próximo Passo Rumo ao Sucesso da Sua Clínica!",
        "momentum_final_cta_subtitle": "O Plano Momentum é a parceria estratégica que sua clínica precisa para alcançar novos patamares. Vamos conversar sobre seus objetivos?",
        "momentum_final_cta_btn": "Falar com um Especialista DentComm",
        "momentum_ver_outros_planos": "Ver todos os planos",

        // --- PLANO AUTHORITY LP (PT) ---
        "authority_page_title": "Plano Authority - Domine Seu Mercado e Seja Referência | DentComm",
        "authority_meta_description": "Com o Plano Authority da DentComm, sua clínica odontológica se posiciona como líder de mercado, constrói uma marca forte e atrai os pacientes mais qualificados através de estratégias avançadas.",
        "authority_hero_title": "Plano Authority: <span>Construa um Legado</span> de Liderança Odontológica",
        "authority_hero_subtitle": "Posicione sua clínica como a principal referência em sua região e especialidade. Atraia os pacientes mais qualificados e construa uma marca odontológica inabalável com estratégias de marketing de elite.",
        "authority_hero_cta": "Quero Ser Líder de Mercado",
        "authority_porque_title": "Sua Clínica Pronta para o Topo? <br class=\"desktop-only\">O Authority Consolida Sua Liderança.",
        "authority_porque_subtitle": "Para clínicas que já possuem uma base sólida e agora buscam dominar o mercado, influenciar positivamente a comunidade e ser a primeira escolha indiscutível dos pacientes.",
        "authority_desafio_title": "Os Desafios de Clínicas que Buscam a Excelência:",
        "authority_desafio_1": "Como se destacar consistentemente como a melhor opção em um mercado competitivo?",
        "authority_desafio_2": "De que forma construir uma marca tão forte que atraia pacientes e talentos naturalmente?",
        "authority_desafio_3": "Como expandir a influência da clínica para além dos agendamentos, tornando-se uma voz respeitada?",
        "authority_desafio_4": "Manter um fluxo de pacientes de alto valor e fidelizá-los a longo prazo.",
        "alt_authority_ilustracao": "Ilustração de uma clínica odontológica imponente e reconhecida como líder de mercado",
        "authority_features_main_title": "Estratégias de Elite para Consolidar Sua Autoridade:",
            "authority_feat1_title": "Dashboard de Métricas de Performance em Tempo Real", 
        "authority_feat1_desc": "Acesso a um painel de controle completo com as principais métricas de marketing e performance da sua clínica, atualizado em tempo real, para tomadas de decisão estratégicas e baseadas em dados.",
        "authority_feat1_beneficio": "<strong>Benefício:</strong> Visão clara do seu crescimento e ROI, permitindo otimizações precisas.",
            "authority_feat2_title": "Tráfego Pago Estratégico e SEO Avançado", 
        "authority_feat2_desc": "Estratégias sofisticadas de tráfego pago e otimização para motores de busca (SEO) focadas em dominar as buscas locais para seus tratamentos chave e posicionar sua clínica como a principal referência no seu nicho.",
        "authority_feat2_beneficio": "<strong>Benefício:</strong> Domine os resultados de busca e atraia pacientes altamente qualificados.",
           "authority_feat3_title": "Marketing de Influência e Parcerias Estratégicas", 
        "authority_feat3_desc": "Identificamos e gerenciamos parcerias com influenciadores e empresas relevantes para ampliar o alcance da sua marca, gerar prova social e abrir novos canais de aquisição.",
        "authority_feat3_beneficio": "<strong>Benefício:</strong> Aumente a credibilidade e o alcance através de vozes confiáveis.",
            "authority_feat4_title": "Gestão Automatizada da Jornada Completa do Paciente", 
        "authority_feat4_desc": "Mapeamos e automatizamos cada ponto de contato da jornada do seu paciente, garantindo uma experiência excepcional e maximizando a fidelização e indicações.",
        "authority_feat5_title": "Conteúdo Premium e Liderança de Pensamento",
"authority_feat5_desc": "Desenvolvimento de materiais ricos e aprofundados (e-books, whitepapers, webinars, artigos de autoridade) que solidificam sua clínica como uma líder de pensamento e referência técnica no setor odontológico.",
"authority_feat5_beneficio": "<strong>Benefício:</strong> Estabeleça sua clínica como a fonte definitiva de conhecimento e confiança na área.",
"authority_feat6_title": "Gestão de Reputação Online e Relações Públicas Digitais",
"authority_feat6_desc": "Monitoramento ativo e gestão estratégica da sua reputação online, além de ações de relações públicas digitais para aumentar a visibilidade positiva da sua marca na mídia e em canais de autoridade.",
"authority_feat6_beneficio": "<strong>Benefício:</strong> Construa e proteja uma imagem de marca impecável e influente.",
        "authority_feat4_beneficio": "<strong>Benefício:</strong> Crie uma experiência memorável e transforme pacientes em promotores.",
        "authority_processo_title": "Elevando Sua Clínica ao Patamar de Liderança:",
        "authority_step1_title": "Imersão e Alinhamento de Visão",
        "authority_step1_desc": "Mergulhamos na sua marca, diferenciais e visão de futuro para traçar uma estratégia de liderança robusta.",
        "authority_step2_title": "Desenvolvimento de Ativos de Autoridade",
        "authority_step2_desc": "Criamos e otimizamos todos os elementos necessários para solidificar sua posição, de conteúdo premium a campanhas de alto impacto.",
        "authority_step3_title": "Domínio de Mercado e Refinamento Contínuo",
        "authority_step3_desc": "Implementamos as estratégias, monitoramos de perto e refinamos continuamente para garantir sua posição de destaque no mercado.",
        "authority_cta_processo": "Consolidar Minha Liderança Agora",
        "authority_faq_title": "Perguntas sobre o Plano Authority",
        "authority_faq1_q": "Minha clínica já tem bons resultados. Por que eu precisaria do Plano Authority?",
        "authority_faq1_a": "O Plano Authority é para clínicas que não se contentam com \"bons resultados\", mas buscam a excelência e o reconhecimento como líderes. Eleva sua marca, atrai os casos mais complexos e os pacientes de maior valor, tornando sua clínica uma referência inquestionável.",
        "authority_faq2_q": "O que significa \"SEO Avançado\" neste plano?",
        "authority_faq2_a": "Envolve SEO técnico aprofundado, criação de conteúdo de pilar otimizado, link building de autoridade, otimizações para rich snippets e voice search, e monitoramento constante para dominar buscas locais e por tratamentos específicos de alta complexidade.",
        "authority_faq3_q": "Como funciona o Marketing de Influência para clínicas odontológicas?",
        "authority_faq3_a": "Identificamos influenciadores alinhados com sua clínica. Desenvolvemos parcerias para que compartilhem suas experiências positivas, gerando prova social autêntica e expandindo seu alcance de forma orgânica e confiável.",
        "authority_final_cta_title": "Transforme Sua Clínica na Referência que o Mercado Admira.",
        "authority_final_cta_subtitle": "Com o Plano Authority, não se trata apenas de marketing, mas de construir um legado de excelência e confiança. Está pronto para liderar?",
        "authority_final_cta_btn": "Quero o Plano Authority!",
        "authority_ver_outros_planos": "Ver todos os planos",

        // --- PLANO APEX LP (PT) ---
        "apex_page_title": "Plano APEX 360° - Performance Máxima para Sua Clínica | DentComm",
        "apex_meta_description": "Alcance o ápice da performance com o Plano APEX 360° da DentComm. Soluções completas de marketing, BI, automação e consultoria estratégica para clínicas odontológicas que buscam liderança e expansão de mercado.",
        "apex_tag_exclusive": "EXCLUSIVO 360°",
        "apex_hero_title": "Plano APEX 360°: <span>Performance e Parceria</span> Sem Limites para Sua Clínica",
        "apex_hero_subtitle": "A solução definitiva para clínicas odontológicas que buscam não apenas liderar, mas redefinir os padrões de excelência do mercado. Estratégia completa, tecnologia de ponta e consultoria dedicada para máxima performance e expansão.",
        "apex_hero_cta": "Quero a Solução APEX para Minha Clínica",
        "apex_porque_title": "Quando o Objetivo é o Ápice, <br class=\"desktop-only\">o Plano APEX 360° é o Caminho.",
        "apex_porque_subtitle": "Para clínicas visionárias que não se contentam com o comum e buscam uma parceria estratégica integral para otimização total, inovação contínua e domínio de mercado sustentável.",
        "apex_desafio_title": "Desafios de Clínicas que Almejam o Extraordinário:",
        "apex_desafio_1": "Como integrar todas as frentes de marketing, vendas e gestão para uma sinergia perfeita?",
        "apex_desafio_2": "De que forma utilizar dados e Business Intelligence para decisões estratégicas preditivas?",
        "apex_desafio_3": "Como garantir inovação constante e adaptação rápida às mudanças do mercado e tecnologia?",
        "apex_desafio_4": "Estabelecer uma parceria de longo prazo que funcione como uma extensão da alta gestão da clínica.",
        "alt_apex_ilustracao": "Ilustração de uma clínica no topo, simbolizando performance máxima e visão 360 graus",
        "apex_features_main_title": "A Experiência APEX 360°: Tudo que Sua Clínica Precisa, e Mais.",
            "apex_feat1_title": "Estratégia de Marketing 360° Completa", 
        "apex_feat1_desc": "Planejamento e execução de todas as verticais do marketing digital e offline (opcional Pan-LatAm), alinhadas para máxima sinergia e resultados exponenciais. Da aquisição à ultra-fidelização.",
        "apex_feat1_beneficio": "<strong>Benefício:</strong> Cobertura total e integrada para um crescimento sem precedentes.",
            "apex_feat2_title": "Tráfego Total e Otimização Contínua Multiplataforma", 
        "apex_feat2_desc": "Gestão avançada e otimização incessante de campanhas em todas as plataformas relevantes (Google, Meta, YouTube, LinkedIn, Programática, etc.), com foco em performance e ROI de elite.",
        "apex_feat2_beneficio": "<strong>Benefício:</strong> Máxima visibilidade qualificada e captação otimizada em todos os canais.",
            "apex_feat3_title": "CRM Avançado, BI e Automações Sob Medida", 
        "apex_feat3_desc": "Implementação de CRM de ponta, painéis de Business Intelligence (BI) personalizados e desenvolvimento de automações complexas totalmente adaptadas aos processos e metas da sua clínica.",
        "apex_feat3_beneficio": "<strong>Benefício:</strong> Decisões baseadas em dados profundos e eficiência operacional máxima.",
            "apex_feat4_title": "Consultoria Tática e Reuniões Estratégicas Dedicadas", 
        "apex_feat4_desc": "Acesso direto ao nosso time de liderança para consultoria tática contínua, reuniões estratégicas periódicas e co-criação de soluções para os desafios e oportunidades da sua clínica.",
       "apex_feat4_beneficio": "<strong>Benefício:</strong> Uma verdadeira extensão da sua equipe de gestão, focada no seu sucesso.",
      "apex_feat5_title": "Desenvolvimento e Otimização de Ativos Digitais de Alta Performance",
"apex_feat5_desc": "Criação ou otimização completa do website da sua clínica, desenvolvimento de aplicativos móveis (se aplicável) e outras plataformas digitais, garantindo design de ponta, UX impecável e performance técnica superior para máxima conversão.",
"apex_feat5_beneficio": "<strong>Benefício:</strong> Presença digital com ativos robustos, modernos e otimizados para resultados de elite.",
"apex_feat6_title": "Treinamento Avançado e Capacitação da Equipe Interna",
"apex_feat6_desc": "Programas de treinamento personalizados e avançados para sua equipe interna (marketing, recepção, atendimento) sobre as melhores práticas, uso de ferramentas e alinhamento com as estratégias digitais implementadas, elevando o nível de toda a operação.",
"apex_feat6_beneficio": "<strong>Benefício:</strong> Equipe interna mais qualificada, processos alinhados e maior autonomia estratégica a longo prazo.",
       "apex_processo_title": "Parceria Estratégica para Performance Inigualável:",
        "apex_step1_title": "Diagnóstico 360° e Definição de KPIs de Elite",
        "apex_step1_desc": "Análise profunda de todas as áreas da clínica para definir metas ambiciosas e indicadores chave de performance (KPIs) de alto nível.",
        "apex_step2_title": "Co-criação da Estratégia APEX e Roadmap",
        "apex_step2_desc": "Desenvolvemos em conjunto um plano estratégico detalhado e um cronograma claro para todas as frentes de ação.",
        "apex_step3_title": "Execução Contínua, Inovação e Suporte Premium",
        "apex_step3_desc": "Implementação ágil, busca constante por inovação, otimizações proativas e um canal de suporte dedicado e prioritário.",
        "apex_cta_processo": "Explorar a Parceria APEX 360°",
        "apex_faq_title": "Perguntas sobre o Exclusivo Plano APEX 360°",
        "apex_faq1_q": "O Plano APEX 360° é muito mais caro que os outros?",
        "apex_faq1_a": "O APEX 360° representa um investimento significativo, alinhado à sua abrangência e ao nível de personalização e dedicação que oferecemos. É desenhado para clínicas que buscam um retorno exponencial e veem o marketing e a estratégia como pilares centrais do seu crescimento e domínio de mercado. O valor é customizado após um diagnóstico profundo.",
        "apex_faq2_q": "O que significa \"consultoria tática e reuniões estratégicas dedicadas\"?",
        "apex_faq2_a": "Significa que você terá um canal direto e prioritário com nossos consultores sêniores e diretores para discutir não apenas o marketing, mas desafios e oportunidades estratégicas do seu negócio. As reuniões são mais frequentes, aprofundadas e focadas em co-criar soluções que impulsionem todos os aspectos da sua clínica.",
        "apex_faq3_q": "Minha clínica pode precisar de expansão para outros países (Pan-LatAm). O APEX cobre isso?",
        "apex_faq3_a": "Sim, a opção de estratégia e execução Pan-LatAm é um dos grandes diferenciais do Plano APEX 360°. Se sua visão inclui expansão internacional, temos a expertise e os recursos para adaptar e implementar suas campanhas e presença digital em diferentes mercados da América Latina, considerando as nuances culturais e de consumo de cada região.",
        "apex_final_cta_title": "Alcance o Ápice da Performance Odontológica.",
        "apex_final_cta_subtitle": "O Plano APEX 360° é mais que um serviço, é uma parceria para transformar sua clínica em uma potência de mercado. Está pronto para essa jornada exclusiva?",
        "apex_final_cta_btn": "Solicitar Consultoria APEX 360°",
        "apex_ver_outros_planos": "Ver todos os planos",
    "blog_page_title": "Blog DentComm - Dicas e Estratégias de Marketing Odontológico",
    "blog_meta_description": "Acompanhe o blog da DentComm para dicas, insights e estratégias avançadas de marketing digital para dentistas e clínicas odontológicas.",
    "nav_blog": "Blog", // Para a navbar
    "blog_hero_title": "Blog DentComm",
    "blog_hero_subtitle": "Insights, dicas e as últimas tendências em marketing digital para impulsionar sua clínica odontológica.",
    "blog_articles_title": "Nossos Artigos", // Pode ser visualmente oculto
    "cat_marketing_digital": "Marketing Digital",
    "cat_gestao_clinica": "Gestão de Clínicas",
    "cat_seo_odontologico": "SEO Odontológico",
    "cat_redes_sociais": "Redes Sociais",
    "date_format_artigo1": "15 de Julho, 2024",
    "date_format_artigo2": "10 de Julho, 2024",
    "date_format_artigo3": "05 de Julho, 2024",
    "date_format_artigo4": "01 de Julho, 2024",
    "artigo1_title": "Como Atrair Mais Pacientes para sua Clínica Odontológica em 2024",
    "alt_artigo1_thumb": "Mulher sorrindo mostrando dentes brancos e saudáveis",
    "artigo1_excerpt": "Descubra estratégias comprovadas para aumentar o fluxo de pacientes na sua clínica, desde SEO local até campanhas eficazes nas redes sociais e otimização da experiência do paciente online...",
    "artigo2_title": "5 Dicas Essenciais de Gestão para Clínicas Odontológicas Modernas",
    "alt_artigo2_thumb": "Dentista explicando tratamento para paciente em um consultório moderno",
    "artigo2_excerpt": "Otimize a gestão da sua clínica com dicas práticas sobre finanças, equipe, atendimento ao paciente e uso de tecnologia para aumentar a eficiência e lucratividade do seu negócio odontológico...",
    "artigo3_title": "SEO para Dentistas: Como Aparecer no Topo do Google",
    "alt_artigo3_thumb": "Tela de computador mostrando resultados de busca para dentistas",
    "artigo3_excerpt": "Entenda os fundamentos do SEO (Search Engine Optimization) específico para o setor odontológico e aprenda técnicas para melhorar o ranking da sua clínica nos resultados de busca do Google...",
    "artigo4_title": "Instagram para Clínicas Odontológicas: Guia Completo para Engajar Pacientes",
    "alt_artigo4_thumb": "Celular mostrando perfil de Instagram de uma clínica odontológica",
    "artigo4_excerpt": "Aprenda a usar o Instagram de forma estratégica para sua clínica: desde a criação de conteúdo atraente até o uso de stories, reels e anúncios para alcançar e engajar mais pacientes...",
    "artigo1_title_short": "Como Atrair Mais Pacientes em 2024",
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
    "sidebar_title_accessible": "Barra Lateral do Blog", // Para acessibilidade
    "footer_sobre_blog_link": "Blog", // Link do blog no footer

    // Chaves para artigo-exemplo-1.html (PT)
    "artigo1_seo_title": "Como Atrair Mais Pacientes para sua Clínica Odontológica em 2024 | Blog DentComm",
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
    "artigo1_p_conclusao": "Implementando estas estratégias de forma consistente, sua clínica odontológica estará bem posicionada para atrair mais pacientes qualificados e alcançar um crescimento sustentável em 2024 e além. Lembre-se que o marketing digital é uma jornada contínua de aprendizado e otimização. A DentComm está aqui para ser sua parceira nessa jornada!",
    "blog_tags_title": "Tags:",
    "tag_marketing_odontologico": "Marketing Odontológico",
    "tag_seo_local": "SEO Local",
    "tag_atrair_pacientes": "Atrair Pacientes",
    "blog_share_text": "Compartilhe:",
    "blog_related_title": "Você Também Pode Gostar"
    // ... (fim das chaves PT)
},
    es: {
        // --- GERAL & INDEX.HTML (ESPANHOL) ---
        "page_title": "DentComm - Marketing para Dentistas y Clínicas Odontológicas",
        "meta_description_index": "Potencia tu clínica dental con las soluciones de marketing digital de DentComm. Atrae más pacientes, construye autoridad y alcanza resultados increíbles.",
        "skip_to_content": "Saltar al contenido principal",
        "nav_sobre": "Sobre Nosotros",
        "nav_beneficios": "Beneficios",
        "nav_planos": "Nuestros Planes",
        "nav_depoimentos": "Testimonios",
        "nav_contato_btn": "Contacto",
        "lang_toggle_aria_label": "Cambiar Idioma",
        "hero_title": "Soluciones de Marketing Digital para <span>Clínicas Odontológicas y Dentistas</span>",
        "hero_subtitle": "Conectamos tu clínica con más pacientes a través de estrategias personalizadas e hiperespecializadas en el sector odontológico.",
        "hero_cta": "Solicitar Diagnóstico Gratuito",
        "sobre_title": "Sobre DentComm: Tu Socio Estratégico en Odontología",
        "sobre_p1": "DentComm nació con la misión de <strong data-translate=\"sobre_p1_strong\">potenciar clínicas y dentistas en toda América Latina</strong>, atrayendo a los pacientes ideales mediante marketing digital inteligente e hiperespecializado en el sector odontológico. No somos solo una agencia; actuamos como una <strong data-translate=\"sobre_p2_strong\">extensión estratégica de tu clínica</strong>.",
        "sobre_p1_strong": "potenciar clínicas y dentistas en toda América Latina",
        "sobre_p2_strong": "extensión estratégica de tu clínica",
        "sobre_p2": "Nuestro enfoque está en la <strong data-translate=\"sobre_p3_strong\">previsibilidad de resultados, construcción de autoridad de marca para tu clínica y ROI medible</strong>. Contamos con un equipo de especialistas en tráfico de pago, SEO, contenido estratégico, automatizaciones y diseño UX/UI – todo para transformar tu presencia digital en una poderosa máquina de adquisición y fidelización de pacientes.",
        "sobre_p3_strong": "previsibilidad de resultados, construcción de autoridad de marca para tu clínica y ROI medible",
        "beneficios_title": "¿Por Qué Elegir DentComm para tu Clínica?",
        "beneficios_card1_title": "Hiperespecialización Odontológica",
        "beneficios_card1_desc": "Entendemos los matices del recorrido del paciente en el universo odontológico. Hablamos el idioma de tu clínica.",
        "beneficios_card2_title": "Previsibilidad y ROI",
        "beneficios_card2_desc": "Estructura tu clínica con un retorno financiero predecible y enfoque en resultados tangibles para tus tratamientos.",
        "beneficios_card3_title": "Construcción de Autoridad Clínica",
        "beneficios_card3_desc": "Posicionamos tu clínica como referente para atraer a los mejores pacientes y destacar en tu región.",
        "beneficios_card4_title": "Ecosistema Completo para Clínicas",
        "beneficios_card4_desc": "Tráfico, contenido, automatizaciones, CRM y diseño en una solución integrada y personalizada para tu clínica.",
        "beneficios_card5_title": "Soporte Dedicado y Alianza Real",
"beneficios_card5_desc": "Vamos más allá de una simple prestación de servicios. Ofrecemos un soporte cercano y actuamos como verdaderos aliados en el crecimiento de tu clínica.",
"beneficios_card6_title": "Innovación y Tecnologías de Vanguardia",
"beneficios_card6_desc": "Estamos siempre actualizados con las últimas tendencias, herramientas y tecnologías de marketing digital para garantizar las estrategias más eficaces para tu clínica.",
        "planos_title": "Planes a Medida para Cada Etapa de Tu Clínica",
        "planos_subtitle": "Ya sea para clínicas establecidas o consultorios en crecimiento, tenemos la estrategia ideal para atraer más pacientes.",
        "planos_tag_popular": "Más Popular",
        "planos_ignition_title": "Plan IGNITION",
        "planos_ignition_ideal": "Ideal para: Clínicas que inician en el digital, buscando una base sólida y primeros pacientes.",
        "planos_ignition_feat1": "Diagnóstico y Lanzamiento Estratégico Enfocado en Pacientes",
        "planos_ignition_feat2": "Posicionamiento Digital Esencial de la Clínica",
        "planos_ignition_feat3": "Gestión Inicial de Tráfico para Pacientes (Google Ads O Social Ads)",
        "planos_ignition_feat4": "Configuración de CRM Básico y Automatizaciones Iniciales",
        "planos_momentum_title": "Plan MOMENTUM",
        "planos_momentum_ideal": "Ideal para: Clínicas que buscan crecimiento acelerado de pacientes y optimización de procesos.",
        "planos_momentum_feat1": "CRM Completo y Automatizaciones Avanzadas para Pacientes",
        "planos_momentum_tooltip1": "Herramienta robusta para organizar y automatizar el contacto con leads y pacientes.",
        "planos_momentum_feat2": "Gestión de Tráfico Multicanal para Captación",
        "planos_momentum_feat3": "Creación de Landing Pages de Tratamientos y Copy Persuasivo",
        "planos_momentum_feat4": "Estrategias de Contenido para Autoridad de la Clínica",
        "planos_authority_title": "Plan AUTHORITY",
        "planos_authority_ideal": "Ideal para: Clínicas que desean establecer liderazgo, dominar el mercado regional y construir una marca fuerte.",
        "planos_authority_feat1": "Panel de Métricas de Rendimiento en Tiempo Real",
        "planos_authority_feat2": "Tráfico de Pago Estratégico y SEO Avanzado (Local y Nicho Odontológico)",
        "planos_authority_tooltip2": "Optimización completa para dominar búsquedas relevantes para tu clínica y tratamientos.",
        "planos_authority_feat3": "Marketing de Influencia y Alianzas Estratégicas",
        "planos_authority_feat4": "Gestión Automatizada del Recorrido Completo del Paciente",
        "planos_apex_title": "Plan APEX 360°",
        "planos_apex_ideal": "Ideal para: Clínicas que buscan máximo rendimiento, expansión y colaboración estratégica continua para liderazgo de mercado.",
        "planos_apex_feat1": "Estrategia de Marketing 360° para Clínicas (Pan-LatAm opcional)",
        "planos_apex_feat2": "Tráfico Completo y Optimización Continua (Google, Meta, YouTube, LinkedIn)",
        "planos_apex_feat3": "CRM Avanzado, BI y Automatizaciones a Medida para Clínicas",
        "planos_apex_feat4": "Consultoría Táctica y Reuniones Estratégicas con el Equipo DentComm",
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
        "materiais_subtitle": "Accede a nuestros e-books y guías exclusivos para dentistas y clínicas odontológicas:",
        "alt_ebook1": "Portada del e-book Cómo atraer más pacientes para tu clínica",
        "ebook1_title": "Guía: Cómo Atraer Más Pacientes Calificados para Tu Clínica",
        "alt_ebook2": "Portada del e-book Guía de Gestión y Marketing para Clínicas",
        "ebook2_title": "Guía Esencial de Gestión y Marketing para Clínicas Odontológicas",
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
        "footer_sobre_blog": "Blog (próximamente)",
        "footer_contato_title": "Contacto",
        "footer_contato_whatsapp": "Habla con Nosotros por WhatsApp",
        "footer_siga_title": "Sigue a DentComm",
        "footer_copyright": "©  DentComm. Todos los derechos reservados.",
        "footer_madewithlove": "Hecho con 💙 para dentistas y clínicas que quieren destacar.",

        // --- PLANO IGNITION LP (ES) ---
        "ignition_page_title": "Plan Ignition - Comienza con el Pie Derecho en Digital | DentComm",
        "ignition_meta_description": "El Plan Ignition de DentComm es perfecto para clínicas dentales que comienzan en el marketing digital. Construye una base sólida y atrae a tus primeros pacientes online.",
        "ignition_hero_title": "Plan Ignition: <span>Tu Clínica Online</span> de Cero a los Primeros Pacientes",
        "ignition_hero_subtitle": "Construye una presencia digital sólida, establece tu marca online y comienza a atraer a los pacientes correctos con el plan de entrada perfecto de DentComm.",
        "ignition_hero_cta": "Quiero Empezar Mi Viaje Digital",
        "ignition_porque_title": "¿Dando el Primer Paso en Digital? <br class=\"desktop-only\">Ignition Enciende Tu Presencia Online.",
        "ignition_porque_subtitle": "Si tu clínica es nueva, está reformulando su estrategia o simplemente necesita una base digital fuerte para comenzar a captar pacientes, el Plan Ignition es tu punto de partida.",
        "ignition_desafio_title": "Los Desafíos Comunes de Quien Está Empezando:",
        "ignition_desafio_1": "No saber por dónde empezar el marketing digital de la clínica.",
        "ignition_desafio_2": "Presupuesto limitado para grandes inversiones iniciales en marketing.",
        "ignition_desafio_3": "Poca o ninguna visibilidad online para potenciales pacientes.",
        "ignition_desafio_4": "Dificultad para competir con clínicas ya establecidas digitalmente.",
        "alt_ignition_ilustracao": "Ilustración de una clínica iniciando su viaje digital con éxito y primeros resultados",
        "ignition_features_main_title": "Fundamentos Esenciales para que Tu Clínica Despegue en Digital:",
        "ignition_feat1_title": "Diagnóstico y Lanzamiento Estratégico",
        "ignition_feat1_desc": "Analizamos tu clínica y mercado para definir la mejor estrategia inicial, enfocándonos en atraer los primeros pacientes y construir una base sólida.",
        "ignition_feat1_beneficio": "<strong>Beneficio:</strong> Comienza con claridad y dirección, evitando desperdicio de recursos.",
        "ignition_feat2_title": "Posicionamiento Digital Esencial",
        "ignition_feat2_desc": "Creamos y optimizamos tus perfiles esenciales online (Google Mi Negocio, redes sociales iniciales) para que tu clínica sea encontrada fácilmente por pacientes locales.",
        "ignition_feat2_beneficio": "<strong>Beneficio:</strong> Asegura que tu clínica aparezca para quien busca tus servicios.",
        "ignition_feat3_title": "Gestión Inicial de Tráfico de Pago",
        "ignition_feat3_desc": "Iniciamos campañas de tráfico de pago (Google Ads O Social Ads, según estrategia) para generar tus primeros leads y citas de forma rápida y controlada.",
        "ignition_feat3_beneficio": "<strong>Beneficio:</strong> Atrae a los primeros pacientes activamente y ve resultados iniciales.",
        "ignition_feat4_title": "Configuración de CRM Básico y Automatizaciones Iniciales",
        "ignition_feat4_desc": "Implementamos un sistema de CRM simplificado para organizar tus contactos y primeras automatizaciones para facilitar el seguimiento de los leads generados.",
        "ignition_feat4_beneficio": "<strong>Beneficio:</strong> Organiza tus leads desde el inicio y no pierdas oportunidades.",
        "ignition_feat5_title": "Creación de Contenido Inicial para Redes Sociales",
"ignition_feat5_desc": "Desarrollamos un paquete de publicaciones iniciales para tus redes sociales, con diseño y copy alineados a tu marca, para que comiences a interactuar con tu audiencia y construir tu comunidad en línea.",
"ignition_feat5_beneficio": "<strong>Beneficio:</strong> Inicia tu comunicación online con material profesional y relevante.",
"ignition_feat6_title": "Capacitación Básica para Gestión de la Presencia Online",
"ignition_feat6_desc": "Ofrecemos una capacitación introductoria para ti o tu equipo sobre cómo realizar publicaciones básicas, interactuar con seguidores y entender las métricas iniciales de tus redes y Google Mi Negocio.",
"ignition_feat6_beneficio": "<strong>Beneficio:</strong> Capacíate para dar continuidad y entender tu presencia digital inicial.",
        "ignition_processo_title": "Tu Lanzamiento Digital en Buenas Manos:",
        "ignition_step1_title": "Briefing Detallado",
        "ignition_step1_desc": "Conversamos para entender tu clínica, público objetivo y metas iniciales.",
        "ignition_step2_title": "Configuración de la Base",
        "ignition_step2_desc": "Preparamos tus perfiles, CRM básico y la primera campaña de tráfico.",
        "ignition_step3_title": "Lanzamiento y Seguimiento",
        "ignition_step3_desc": "Ponemos tu clínica en línea y monitoreamos los primeros resultados de cerca.",
        "ignition_cta_processo": "Iniciar Mi Presencia Online",
        "ignition_faq_title": "Dudas Comunes sobre el Plan Ignition",
        "ignition_faq1_q": "Mi clínica es muy pequeña, ¿el Plan Ignition me sirve?",
        "ignition_faq1_a": "¡Sí! El Plan Ignition está especialmente diseñado para consultorios y clínicas de todos los tamaños que están comenzando su viaje en el marketing digital o que necesitan una reestructuración inicial con enfoque en resultados rápidos y construcción de base.",
        "ignition_faq2_q": "Ya tengo un perfil en Instagram, ¿necesito el Plan Ignition?",
        "ignition_faq2_a": "Tener un perfil es el primer paso, pero Ignition va más allá. Optimizamos tus perfiles esenciales (incluyendo Google Mi Negocio, crucial para búsquedas locales), implementamos una estrategia inicial de tráfico de pago para atraer pacientes activamente y configuramos un CRM básico para que no pierdas ningún contacto. Se trata de transformar tu presencia en resultados.",
        "ignition_faq3_q": "¿Cuál es la diferencia entre elegir Google Ads o Social Ads al inicio?",
        "ignition_faq3_a": "La elección depende del análisis inicial y de tus objetivos. Google Ads se enfoca en capturar la demanda existente (personas que ya buscan dentistas). Social Ads (Facebook/Instagram) es excelente para construir marca, alcanzar públicos específicos y generar interés. En Ignition, nos enfocamos en uno de ellos para maximizar el impacto inicial con tu presupuesto.",
        "ignition_final_cta_title": "¿Listo para Dar el Impulso Inicial a Tu Visibilidad Online?",
        "ignition_final_cta_subtitle": "Con el Plan Ignition, tu clínica dental tendrá la base sólida para crecer y atraer pacientes en el mundo digital. ¿Comenzamos?",
        "ignition_final_cta_btn": "¡Quiero el Plan Ignition!",
        "ignition_ver_outros_planos": "Ver todos los planes",

        // --- PLANO MOMENTUM LP (ES) ---
        "momentum_page_title": "Plan Momentum - Acelera Tu Clínica | DentComm",
        "momentum_meta_description": "Descubre cómo el Plan Momentum de DentComm puede optimizar procesos, atraer pacientes calificados y construir una autoridad digital sólida para tu clínica dental.",
        "momentum_hero_title": "Plan Momentum: <span>Acelera el Crecimiento</span> de Tu Clínica Dental",
        "momentum_hero_subtitle": "Optimiza procesos, capta un flujo constante de pacientes calificados y construye una autoridad digital sólida. Ideal para clínicas listas para el próximo nivel.",
        "momentum_hero_cta": "Quiero Impulsar Mi Clínica Ahora",
        "momentum_porque_title": "¿Tu Clínica Lista para Despegar? <br class=\"desktop-only\">Momentum es el Impulso que Faltaba.",
        "momentum_porque_subtitle": "Si buscas más que solo marcar presencia online y quieres resultados tangibles y predecibles, el Plan Momentum fue diseñado para ti.",
        "momentum_desafio_title": "Los Desafíos Comunes que Superamos Juntos:",
        "momentum_desafio_1": "Dificultad para atraer consistentemente el perfil correcto de paciente.",
        "momentum_desafio_2": "Procesos manuales de captación y seguimiento que consumen tiempo.",
        "momentum_desafio_3": "Inversión en marketing sin un retorno claro y medible (ROI).",
        "momentum_desafio_4": "Competencia reñida y dificultad para destacar en el mercado local.",
        "alt_momentum_grafico": "Gráfico de crecimiento con el Plan Momentum",
        "momentum_features_main_title": "¿Qué Hace Tan Poderoso al Plan Momentum?",
            "momentum_feat1_title": "CRM Completo y Automatizaciones Avanzadas",
        "momentum_feat1_desc": "Implementamos y gestionamos una herramienta robusta para organizar todos tus contactos, automatizar el seguimiento de leads y pacientes, desde el primer contacto hasta el postratamiento. Crea embudos de comunicación personalizados y nunca más pierdas una oportunidad de cita.",
        "momentum_feat1_beneficio": "<strong>Beneficio:</strong> Maximiza conversiones y fidelización con procesos inteligentes.",
            "momentum_feat2_title": "Gestión de Tráfico Multicanal Efectiva",
        "momentum_feat2_desc": "Alcanzamos a tus pacientes ideales donde están. Gestionamos campañas optimizadas en Google Ads, Meta Ads (Facebook e Instagram) y otras plataformas relevantes, enfocándonos en atraer leads calificados para los tratamientos que tu clínica desea priorizar. Análisis constante para maximizar tu ROI.",
           "momentum_feat3_title": "Landing Pages de Tratamientos y Copy Persuasivo",
        "momentum_feat2_beneficio": "<strong>Beneficio:</strong> Flujo constante de nuevos pacientes interesados.",
        "momentum_feat3_desc": "Desarrollamos páginas de destino específicas para tus principales tratamientos, con diseño enfocado en conversión y textos (copywriting) que comunican valor, rompen objeciones e incentivan la cita. Cada página es una máquina de captar interesados.",
        "momentum_feat3_beneficio": "<strong>Beneficio:</strong> Aumenta drásticamente las tasas de conversión.",
            "momentum_feat4_title": "Estrategias de Contenido para Autoridad",
        "momentum_feat4_desc": "Producimos contenido relevante y estratégico (publicaciones de blog, redes sociales, e-mail marketing) que posiciona tu clínica como referente en tu área de actuación. Educa a tus pacientes, construye confianza y mejora tu posicionamiento orgánico (SEO).",
        "momentum_feat4_beneficio": "<strong>Beneficio:</strong> Conviértete en la primera opción de los pacientes.",
        "momentum_feat5_title": "Informes Detallados y Seguimiento Estratégico",
"momentum_feat5_desc": "Proporcionamos informes de rendimiento claros y objetivos, con las métricas que realmente importan. Realizamos reuniones periódicas para analizar resultados y alinear los próximos pasos de la estrategia.",
"momentum_feat5_beneficio": "<strong>Beneficio:</strong> Transparencia total y decisiones basadas en datos para una optimización continua.",
"momentum_feat6_title": "Optimización de la Experiencia del Paciente en Línea (UX/UI)",
"momentum_feat6_desc": "Analizamos y optimizamos la usabilidad y el diseño de tus páginas y puntos de contacto digitales, garantizando un recorrido fluido y agradable para el paciente, desde el primer clic hasta la cita.",
"momentum_feat6_beneficio": "<strong>Beneficio:</strong> Reduce fricciones, aumenta el compromiso y mejora las tasas de conversión en todo el embudo.",
        "momentum_processo_title": "¿Listo para el Crecimiento Acelerado? <br class=\"desktop-only\">Mira Qué Sencillo es Empezar:",
        "momentum_step1_title": "Análisis Estratégico",
        "momentum_step1_desc": "Entendemos tus objetivos y desafíos para un plan de acción Momentum personalizado.",
        "momentum_step2_title": "Implementación Completa",
        "momentum_step2_desc": "Nuestro equipo configura herramientas, campañas y automatizaciones para que tu clínica despegue.",
        "momentum_step3_title": "Optimización e Informes",
        "momentum_step3_desc": "Monitoreamos, ajustamos y optimizamos, proporcionando informes claros sobre rendimiento y ROI.",
        "momentum_cta_processo": "Agendar una Consultoría Estratégica",
        "momentum_faq_title": "Preguntas Frecuentes sobre el Plan Momentum",
        "momentum_faq1_q": "¿Para qué tipo de clínica está indicado el Plan Momentum?",
        "momentum_faq1_a": "Es ideal para clínicas dentales ya establecidas que buscan acelerar significativamente la captación de pacientes, optimizar sus procesos de marketing y ventas, y construir una fuerte presencia online como autoridad en su región o especialidad.",
        "momentum_faq2_q": "¿En cuánto tiempo empiezo a ver resultados?",
        "momentum_faq2_a": "Aunque cada clínica es única, con el Plan Momentum, muchos de nuestros clientes comienzan a ver un aumento en el volumen de leads calificados y citas en las primeras semanas tras la implementación de las estrategias de tráfico y CRM. Resultados más expresivos de autoridad y ROI se consolidan a lo largo de los primeros 3 a 6 meses.",
        "momentum_faq3_q": "¿Necesito tener un equipo de marketing interno?",
        "momentum_faq3_a": "No necesariamente. El Plan Momentum es un servicio completo donde nuestro equipo de especialistas se encarga de toda la estrategia y ejecución. Tu participación se centrará en aprobaciones estratégicas y en la atención a los pacientes que lleguen.",
        "momentum_faq4_q": "¿Cuál es la inversión para el Plan Momentum?",
        "momentum_faq4_a": "La inversión en el Plan Momentum se personaliza según las necesidades específicas y el tamaño de tu clínica, así como el presupuesto de medios para las campañas de tráfico. Agenda una consultoría gratuita para recibir una propuesta detallada y sin compromiso.",
        "momentum_final_cta_title": "¡Da el Siguiente Paso Hacia el Éxito de Tu Clínica!",
        "momentum_final_cta_subtitle": "El Plan Momentum es la alianza estratégica que tu clínica necesita para alcanzar nuevos niveles. ¿Hablamos sobre tus objetivos?",
        "momentum_final_cta_btn": "Hablar con un Especialista DentComm",
        "momentum_ver_outros_planos": "Ver todos los planes",

        // --- PLANO AUTHORITY LP (ES) ---
        "authority_page_title": "Plan Authority - Domina Tu Mercado y Sé Referencia | DentComm",
        "authority_meta_description": "Con el Plan Authority de DentComm, tu clínica dental se posiciona como líder del mercado, construye una marca fuerte y atrae a los pacientes más calificados a través de estrategias avanzadas.",
        "authority_hero_title": "Plan Authority: <span>Construye un Legado</span> de Liderazgo Dental",
        "authority_hero_subtitle": "Posiciona tu clínica como la principal referencia en tu región y especialidad. Atrae a los pacientes más calificados y construye una marca dental inquebrantable con estrategias de marketing de élite.",
        "authority_hero_cta": "Quiero Ser Líder del Mercado",
        "authority_porque_title": "¿Tu Clínica Lista para la Cima? <br class=\"desktop-only\">Authority Consolida Tu Liderazgo.",
        "authority_porque_subtitle": "Para clínicas que ya poseen una base sólida y ahora buscan dominar el mercado, influir positivamente en la comunidad y ser la primera opción indiscutible de los pacientes.",
        "authority_desafio_title": "Los Desafíos de Clínicas que Buscan la Excelencia:",
        "authority_desafio_1": "¿Cómo destacar consistentemente como la mejor opción en un mercado competitivo?",
        "authority_desafio_2": "¿De qué forma construir una marca tan fuerte que atraiga pacientes y talentos naturalmente?",
        "authority_desafio_3": "¿Cómo expandir la influencia de la clínica más allá de las citas, convirtiéndose en una voz respetada?",
        "authority_desafio_4": "Mantener un flujo de pacientes de alto valor y fidelizarlos a largo plazo.",
        "alt_authority_ilustracao": "Ilustración de una clínica dental imponente y reconocida como líder del mercado",
        "authority_features_main_title": "Estrategias de Élite para Consolidar Tu Autoridad:",
            "authority_feat1_title": "Panel de Métricas de Rendimiento en Tiempo Real",
        "authority_feat1_desc": "Acceso a un panel de control completo con las principales métricas de marketing y rendimiento de tu clínica, actualizado en tiempo real, para tomas de decisiones estratégicas y basadas en datos.",
        "authority_feat1_beneficio": "<strong>Beneficio:</strong> Visión clara de tu crecimiento y ROI, permitiendo optimizaciones precisas.",
            "authority_feat2_title": "Tráfico de Pago Estratégico y SEO Avanzado",
        "authority_feat2_desc": "Estrategias sofisticadas de tráfico de pago y optimización para motores de búsqueda (SEO) enfocadas en dominar las búsquedas locales para tus tratamientos clave y posicionar tu clínica como la principal referencia en tu nicho.",
        "authority_feat2_beneficio": "<strong>Beneficio:</strong> Domina los resultados de búsqueda y atrae pacientes altamente calificados.",
            "authority_feat3_title": "Marketing de Influencia y Alianzas Estratégicas",
        "authority_feat3_desc": "Identificamos y gestionamos alianzas con influencers y empresas relevantes para ampliar el alcance de tu marca, generar prueba social y abrir nuevos canales de adquisición.",
        "authority_feat3_beneficio": "<strong>Beneficio:</strong> Aumenta la credibilidad y el alcance a través de voces confiables.",
            "authority_feat4_title": "Gestión Automatizada del Recorrido Completo del Paciente",
        "authority_feat4_desc": "Mapeamos y automatizamos cada punto de contacto del recorrido de tu paciente, garantizando una experiencia excepcional y maximizando la fidelización e indicaciones.",
        "authority_feat4_beneficio": "<strong>Beneficio:</strong> Crea una experiencia memorable y transforma pacientes en promotores.",
        "authority_feat5_title": "Contenido Premium y Liderazgo de Pensamiento",
"authority_feat5_desc": "Desarrollo de materiales ricos y profundos (e-books, whitepapers, webinars, artículos de autoridad) que solidifican tu clínica como líder de pensamiento y referente técnico en el sector odontológico.",
"authority_feat5_beneficio": "<strong>Beneficio:</strong> Establece tu clínica como la fuente definitiva de conocimiento y confianza en el área.",
"authority_feat6_title": "Gestión de Reputación Online y Relaciones Públicas Digitales",
"authority_feat6_desc": "Monitoreo activo y gestión estratégica de tu reputación online, además de acciones de relaciones públicas digitales para aumentar la visibilidad positiva de tu marca en los medios y canales de autoridad.",
"authority_feat6_beneficio": "<strong>Beneficio:</strong> Construye y protege una imagen de marca impecable e influyente.",
        "authority_processo_title": "Elevando Tu Clínica al Nivel de Liderazgo:",
        "authority_step1_title": "Inmersión y Alineación de Visión",
        "authority_step1_desc": "Nos sumergimos en tu marca, diferenciales y visión de futuro para trazar una estrategia de liderazgo robusta.",
        "authority_step2_title": "Desarrollo de Activos de Autoridad",
        "authority_step2_desc": "Creamos y optimizamos todos los elementos necesarios para solidificar tu posición, desde contenido premium hasta campañas de alto impacto.",
        "authority_step3_title": "Dominio del Mercado y Refinamiento Continuo",
        "authority_step3_desc": "Implementamos las estrategias, monitoreamos de cerca y refinamos continuamente para garantizar tu posición destacada en el mercado.",
        "authority_cta_processo": "Consolidar Mi Liderazgo Ahora",
        "authority_faq_title": "Preguntas sobre el Plan Authority",
        "authority_faq1_q": "Mi clínica ya tiene buenos resultados. ¿Por qué necesitaría el Plan Authority?",
        "authority_faq1_a": "El Plan Authority es para clínicas que no se conforman con \"buenos resultados\", sino que buscan la excelencia y el reconocimiento como líderes. Eleva tu marca, atrae los casos más complejos y los pacientes de mayor valor, convirtiendo tu clínica en una referencia incuestionable.",
        "authority_faq2_q": "¿Qué significa \"SEO Avanzado\" en este plan?",
        "authority_faq2_a": "Significa ir más allá de lo básico. Implica estrategias de SEO técnico profundas, creación de contenido pilar altamente optimizado, link building de autoridad, optimizaciones para rich snippets y búsqueda por voz, y un monitoreo constante para dominar no solo las búsquedas locales, sino también las búsquedas por tratamientos específicos y de alta complejidad que ofrece tu clínica.",
        "authority_faq3_q": "¿Cómo funciona el Marketing de Influencia para clínicas dentales?",
        "authority_faq3_a": "Identificamos micro y macro influencers locales o de nicho (salud, bienestar, estética) que se alinean con los valores de tu clínica. Desarrollamos alianzas para que compartan sus experiencias positivas, tratamientos y los diferenciales de tu clínica con sus audiencias, generando prueba social auténtica y expandiendo tu alcance de forma orgánica y confiable.",
        "authority_final_cta_title": "Transforma Tu Clínica en la Referencia que el Mercado Admira.",
        "authority_final_cta_subtitle": "Con el Plan Authority, no se trata solo de marketing, sino de construir un legado de excelencia y confianza. ¿Estás listo para liderar?",
        "authority_final_cta_btn": "¡Quiero el Plan Authority!",
        "authority_ver_outros_planos": "Ver todos los planes",

        // --- PLANO APEX LP (ES) ---
        "apex_page_title": "Plan APEX 360° - Máximo Rendimiento para Tu Clínica | DentComm",
        "apex_meta_description": "Alcanza el ápice del rendimiento con el Plan APEX 360° de DentComm. Soluciones completas de marketing, BI, automatización y consultoría estratégica para clínicas dentales que buscan liderazgo y expansión de mercado.",
        "apex_tag_exclusive": "EXCLUSIVO 360°",
        "apex_hero_title": "Plan APEX 360°: <span>Rendimiento y Alianza</span> Sin Límites para Tu Clínica",
        "apex_hero_subtitle": "La solución definitiva para clínicas dentales que buscan no solo liderar, sino redefinir los estándares de excelencia del mercado. Estrategia completa, tecnología de punta y consultoría dedicada para máximo rendimiento y expansión.",
        "apex_hero_cta": "Quiero la Solución APEX para Mi Clínica",
        "apex_porque_title": "Cuando el Objetivo es el Ápice, <br class=\"desktop-only\">el Plan APEX 360° es el Camino.",
        "apex_porque_subtitle": "Para clínicas visionarias que no se conforman con lo común y buscan una alianza estratégica integral para optimización total, innovación continua y dominio de mercado sostenible.",
        "apex_desafio_title": "Desafíos de Clínicas que Anhelan lo Extraordinario:",
        "apex_desafio_1": "¿Cómo integrar todos los frentes de marketing, ventas y gestión para una sinergia perfecta?",
        "apex_desafio_2": "¿De qué forma utilizar datos e Inteligencia de Negocios para decisiones estratégicas predictivas?",
        "apex_desafio_3": "¿Cómo garantizar innovación constante y adaptación rápida a los cambios del mercado y tecnología?",
        "apex_desafio_4": "Establecer una alianza a largo plazo que funcione como una extensión de la alta dirección de la clínica.",
        "alt_apex_ilustracao": "Ilustración de una clínica en la cima, simbolizando máximo rendimiento y visión 360 grados",
        "apex_features_main_title": "La Experiencia APEX 360°: Todo lo que Tu Clínica Necesita, y Más.",
            "apex_feat1_title": "Estrategia de Marketing 360° Completa",
        "apex_feat1_desc": "Planificación y ejecución de todas las verticales del marketing digital y offline (opcional Pan-LatAm), alineadas para máxima sinergia y resultados exponenciales. Desde la adquisición hasta la ultra-fidelización.",
        "apex_feat1_beneficio": "<strong>Beneficio:</strong> Cobertura total e integrada para un crecimiento sin precedentes.",
            "apex_feat2_title": "Tráfico Total y Optimización Continua Multiplataforma",
        "apex_feat2_desc": "Gestión avanzada y optimización incesante de campañas en todas las plataformas relevantes (Google, Meta, YouTube, LinkedIn, Programática, etc.), con enfoque en rendimiento y ROI de élite.",
        "apex_feat2_beneficio": "<strong>Beneficio:</strong> Máxima visibilidad calificada y captación optimizada en todos los canales.",
            "apex_feat3_title": "CRM Avanzado, BI y Automatizaciones a Medida",
        "apex_feat3_desc": "Implementación de CRM de vanguardia, paneles de Inteligencia de Negocios (BI) personalizados y desarrollo de automatizaciones complejas totalmente adaptadas a los procesos y metas de tu clínica.",
        "apex_feat3_beneficio": "<strong>Beneficio:</strong> Decisiones basadas en datos profundos y eficiencia operativa máxima.",
            "apex_feat4_title": "Consultoría Táctica y Reuniones Estratégicas Dedicadas",
        "apex_feat4_desc": "Acceso directo a nuestro equipo de liderazgo para consultoría táctica continua, reuniones estratégicas periódicas y co-creación de soluciones para los desafíos y oportunidades de tu clínica.",
        "apex_feat4_beneficio": "<strong>Beneficio:</strong> Una verdadera extensión de tu equipo de gestión, enfocada en tu éxito.",
       "apex_feat5_title": "Desarrollo y Optimización de Activos Digitales de Alto Rendimiento",
"apex_feat5_desc": "Creación u optimización completa del sitio web de tu clínica, desarrollo de aplicaciones móviles (si aplica) y otras plataformas digitales, garantizando un diseño de vanguardia, UX impecable y un rendimiento técnico superior para una máxima conversión.",
"apex_feat5_beneficio": "<strong>Beneficio:</strong> Presencia digital con activos robustos, modernos y optimizados para resultados de élite.",
"apex_feat6_title": "Capacitación Avanzada y Empoderamiento del Equipo Interno",
"apex_feat6_desc": "Programas de capacitación personalizados y avanzados para tu equipo interno (marketing, recepción, atención al cliente) sobre las mejores prácticas, uso de herramientas y alineación con las estrategias digitales implementadas, elevando el nivel de toda la operación.",
"apex_feat6_beneficio": "<strong>Beneficio:</strong> Equipo interno más calificado, procesos alineados y mayor autonomía estratégica a largo plazo.",
        "apex_processo_title": "Alianza Estratégica para un Rendimiento Inigualable:",
        "apex_step1_title": "Diagnóstico 360° y Definición de KPIs de Élite",
        "apex_step1_desc": "Análisis profundo de todas las áreas de la clínica para definir metas ambiciosas e indicadores clave de rendimiento (KPIs) de alto nivel.",
        "apex_step2_title": "Co-creación de la Estrategia APEX y Hoja de Ruta",
        "apex_step2_desc": "Desarrollamos en conjunto un plan estratégico detallado y un cronograma claro para todos los frentes de acción.",
        "apex_step3_title": "Ejecución Continua, Innovación y Soporte Premium",
        "apex_step3_desc": "Implementación ágil, búsqueda constante de innovación, optimizaciones proactivas y un canal de soporte dedicado y prioritario.",
        "apex_cta_processo": "Explorar la Alianza APEX 360°",
        "apex_faq_title": "Preguntas sobre el Exclusivo Plan APEX 360°",
        "apex_faq1_q": "¿El Plan APEX 360° es mucho más caro que los otros?",
        "apex_faq1_a": "APEX 360° representa una inversión significativa, alineada con su alcance y el nivel de personalización y dedicación que ofrecemos. Está diseñado para clínicas que buscan un retorno exponencial y ven el marketing y la estrategia como pilares centrales de su crecimiento y dominio del mercado. El valor se personaliza después de un diagnóstico profundo.",
        "apex_faq2_q": "¿Qué significa \"consultoría táctica y reuniones estratégicas dedicadas\"?",
        "apex_faq2_a": "Significa que tendrás un canal directo y prioritario con nuestros consultores senior y directores para discutir no solo el marketing, sino también los desafíos y oportunidades estratégicas de tu negocio. Las reuniones son más frecuentes, profundas y enfocadas en co-crear soluciones que impulsen todos los aspectos de tu clínica.",
        "apex_faq3_q": "Mi clínica podría necesitar expandirse a otros países (Pan-LatAm). ¿El Plan APEX cubre eso?",
        "apex_faq3_a": "Sí, la opción de estrategia y ejecución Pan-LatAm es uno de los grandes diferenciales del Plan APEX 360°. Si tu visión incluye la expansión internacional, tenemos la experiencia y los recursos para adaptar e implementar tus campañas y presencia digital en diferentes mercados de América Latina, considerando los matices culturales y de consumo de cada región.",
        "apex_final_cta_title": "Alcanza el Ápice del Rendimiento Dental.",
        "apex_final_cta_subtitle": "El Plan APEX 360° es más que un servicio, es una alianza para transformar tu clínica en una potencia del mercado. ¿Estás listo para este viaje exclusivo?",
        "apex_final_cta_btn": "Solicitar Consultoría APEX 360°",
        "apex_ver_outros_planos": "Ver todos los planes",

          // CHAVES PARA O BLOG - ESPANHOL (ES)
        "blog_page_title": "Blog DentComm - Consejos y Estrategias de Marketing Dental",
    "blog_meta_description": "Sigue el blog de DentComm para obtener consejos, ideas y estrategias avanzadas de marketing digital para dentistas y clínicas dentales.",
    "nav_blog": "Blog",
    "blog_hero_title": "Blog DentComm",
    "blog_hero_subtitle": "Ideas, consejos y las últimas tendencias en marketing digital para impulsar tu clínica dental.",
    "blog_articles_title": "Nuestros Artículos",
    "cat_marketing_digital": "Marketing Digital",
    "cat_gestao_clinica": "Gestión de Clínicas",
    "cat_seo_odontologico": "SEO Dental",
    "cat_redes_sociais": "Redes Sociales",
    "date_format_artigo1": "15 de Julio, 2024",
    "date_format_artigo2": "10 de Julio, 2024",
    "date_format_artigo3": "05 de Julio, 2024",
    "date_format_artigo4": "01 de Julio, 2024",
    "artigo1_title": "Cómo Atraer Más Pacientes a tu Clínica Dental en 2024",
    "alt_artigo1_thumb": "Mujer sonriendo mostrando dientes blancos y saludables",
    "artigo1_excerpt": "Descubre estrategias comprobadas para aumentar el flujo de pacientes en tu clínica, desde SEO local hasta campañas eficaces en redes sociales y optimización de la experiencia del paciente en línea...",
    "artigo2_title": "5 Consejos Esenciales de Gestión para Clínicas Dentales Modernas",
    "alt_artigo2_thumb": "Dentista explicando tratamiento a paciente en un consultorio moderno",
    "artigo2_excerpt": "Optimiza la gestión de tu clínica con consejos prácticos sobre finanzas, equipo, atención al paciente y uso de tecnología para aumentar la eficiencia y rentabilidad de tu negocio dental...",
    "artigo3_title": "SEO para Dentistas: Cómo Aparecer en lo Más Alto de Google",
    "alt_artigo3_thumb": "Pantalla de computadora mostrando resultados de búsqueda para dentistas",
    "artigo3_excerpt": "Entiende los fundamentos del SEO (Optimización para Motores de Búsqueda) específico para el sector dental y aprende técnicas para mejorar el ranking de tu clínica en los resultados de búsqueda de Google...",
    "artigo4_title": "Instagram para Clínicas Dentales: Guía Completa para Involucrar Pacientes",
    "alt_artigo4_thumb": "Teléfono móvil mostrando perfil de Instagram de una clínica dental",
    "artigo4_excerpt": "Aprende a usar Instagram de forma estratégica para tu clínica: desde la creación de contenido atractivo hasta el uso de historias, reels y anuncios para alcanzar e involucrar a más pacientes...",
    "artigo1_title_short": "Cómo Atraer Más Pacientes en 2024",
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

    // Chaves para artigo-exemplo-1.html (ES)
    "artigo1_seo_title": "Cómo Atraer Más Pacientes a tu Clínica Dental en 2024 | Blog DentComm",
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
    "artigo1_p_conclusao": "Implementando estas estrategias de forma consistente, tu clínica dental estará bien posicionada para atraer más pacientes calificados y alcanzar un crecimiento sostenible en 2024 y más allá. Recuerda que el marketing digital es un viaje continuo de aprendizaje y optimización. ¡DentComm está aquí para ser tu socio en este viaje!",
    "blog_tags_title": "Etiquetas:",
    "tag_marketing_odontologico": "Marketing Dental",
    "tag_seo_local": "SEO Local",
    "tag_atrair_pacientes": "Atraer Pacientes",
    "blog_share_text": "Comparte:",
    "blog_related_title": "También Te Puede Gustar"
    // ... (fim das chaves ES)
}
  };

  // --- LÓGICA DO SCRIPT (APPLYTRANSLATIONS, SMOOTHSCROLL, OBSERVER, ETC.) ---
  // Esta parte é idêntica à versão anterior, com a correção da bandeira já incluída.
  // Certifique-se de que esta lógica esteja presente após o objeto 'translations'.
  function applyTranslations(lang) {
    if (!translations[lang]) {
      console.warn(`Language "${lang}" not found in translations. Defaulting to "pt".`);
      lang = "pt"; 
      if (!translations[lang]) {
          console.error("Default language 'pt' also not found. Aborting translation.");
          return; 
      }
    }

    htmlRoot.setAttribute("lang", lang === "pt" ? "pt-BR" : "es");

    let pageTitleKey = "page_title"; 
    if (document.body.classList.contains('page-plano-ignition')) pageTitleKey = "ignition_page_title";
    else if (document.body.classList.contains('page-plano-momentum')) pageTitleKey = "momentum_page_title";
    else if (document.body.classList.contains('page-plano-authority')) pageTitleKey = "authority_page_title";
    else if (document.body.classList.contains('page-plano-apex')) pageTitleKey = "apex_page_title";
    
    if (translations[lang][pageTitleKey]) {
      document.title = translations[lang][pageTitleKey];
    }

    let metaDescKey = "meta_description_index"; 
    if (document.body.classList.contains('page-plano-ignition')) metaDescKey = "ignition_meta_description";
    else if (document.body.classList.contains('page-plano-momentum')) metaDescKey = "momentum_meta_description";
    else if (document.body.classList.contains('page-plano-authority')) metaDescKey = "authority_meta_description";
    else if (document.body.classList.contains('page-plano-apex')) metaDescKey = "apex_meta_description";

    const metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (metaDescriptionTag && translations[lang][metaDescKey]) {
        metaDescriptionTag.setAttribute('content', translations[lang][metaDescKey]);
    }

    // Atualizar bandeira e texto do botão de idioma PRIMEIRO
    if (langToggle) {
        const currentLangFlagSpan = langToggle.querySelector(".current-lang-flag");
        const langTextSpan = langToggle.querySelector(".lang-text");
        if (currentLangFlagSpan && flags[lang]) {
            currentLangFlagSpan.innerHTML = flags[lang];
        }
        if (langTextSpan) {
            langTextSpan.textContent = lang.toUpperCase();
        }
    }
    
    document.querySelectorAll("[data-translate]").forEach(el => {
      const key = el.dataset.translate;
      if (el.classList.contains('lang-text') || el.classList.contains('current-lang-flag')) {
          return;
      }

      if (translations[lang][key]) {
        if (el.innerHTML.includes("<strong") || el.innerHTML.includes("<span") || el.innerHTML.includes("<br")) {
          el.innerHTML = translations[lang][key];
        } else {
          const icon = el.querySelector('i');
          if (icon && (el.tagName === 'A' || el.tagName === 'BUTTON')) {
            let textNodeFound = false;
            for (let i = 0; i < el.childNodes.length; i++) {
                if (el.childNodes[i].nodeType === Node.TEXT_NODE && el.childNodes[i].textContent.trim() !== "") {
                    el.childNodes[i].nodeValue = translations[lang][key] + " ";
                    textNodeFound = true;
                    break;
                }
            }
            if (!textNodeFound) {
                el.insertBefore(document.createTextNode(translations[lang][key] + " "), icon);
            }
          } else {
            el.textContent = translations[lang][key];
          }
        }
      }
    });

    document.querySelectorAll("[data-translate-placeholder]").forEach(el => {
      const key = el.dataset.translatePlaceholder;
      if (translations[lang][key]) {
        el.placeholder = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-translate-alt]").forEach(el => {
      const key = el.dataset.translateAlt;
      if (translations[lang][key]) {
        el.alt = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-translate-aria-label]").forEach(el => {
        const key = el.dataset.translateAriaLabel;
        if (el.id === 'langToggle' && key === 'lang_toggle_aria_label' && translations[lang][key]) {
             el.setAttribute("aria-label", translations[lang][key]);
        } else if (el.id !== 'langToggle' && translations[lang][key]) {
            el.setAttribute("aria-label", translations[lang][key]);
        }
    });
    
    if (currentYearSpan && translations[lang]["footer_copyright"]) {
        const year = new Date().getFullYear();
        const copyrightTextElement = currentYearSpan.closest('p');
        if (copyrightTextElement) { 
            let copyrightString = translations[lang]["footer_copyright"];
            copyrightTextElement.innerHTML = copyrightString.replace("{CURRENT_YEAR}", `<span id="currentYear">${year}</span>`);
        }
    }
    localStorage.setItem("language", lang);
  }

  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "pt" ? "es" : "pt";
      applyTranslations(currentLanguage);
    });
  }

  const smoothScrollLinks = document.querySelectorAll("a[href^='#'], a[href^='index.html#']");
  smoothScrollLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href");
      const isIndexLink = href.startsWith("index.html#");
      const targetId = isIndexLink ? href.substring(href.indexOf("#")) : href;
      
      if (isIndexLink && !window.location.href.endsWith('index.html') && !window.location.href.endsWith('/')) {
          if (targetId.length > 1) { 
              localStorage.setItem('scrollToAnchor', targetId);
          }
          // Não previne o default, permite a navegação para index.html
          return; 
      }
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault(); 
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
        const additionalOffset = 20; 
        let offset = navbarHeight + additionalOffset;
        
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    });
  });

  const scrollToAnchor = localStorage.getItem('scrollToAnchor');
  if (scrollToAnchor && (window.location.pathname.endsWith('index.html') || window.location.pathname.endsWith('/') || window.location.pathname === '')) { // Verifica se está na index ou raiz
      const targetElement = document.querySelector(scrollToAnchor);
      if (targetElement) {
          setTimeout(() => { 
              const navbarEl = document.querySelector('.navbar');
              const navbarHeight = navbarEl ? navbarEl.offsetHeight : 80;
              const additionalOffset = 20;
              let offset = navbarHeight + additionalOffset;
              const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
              const offsetPosition = elementPosition - offset;
              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          }, 100);
      }
      localStorage.removeItem('scrollToAnchor'); 
  }

  const elementsToAnimate = document.querySelectorAll(
    ".hero-content h1, .hero-content .hero-subtitle, .hero-content .hero-cta, " +
    ".plano-lp-hero-content h1, .plano-lp-hero-content .plano-lp-hero-subtitle, .plano-lp-hero-content .plano-lp-hero-cta, .plano-lp-tag-destaque, .plano-lp-tag-exclusive, " +
    ".section-header, .sobre-content p, " +
    ".benefit-card, .plano-card, .depoimento-card, .ebook-item, " +
    ".desafios-col, .solucao-img-col, .feature-card-momentum, .processo-step-item, .faq-item, " +
    ".formulario-contato-col, .contact-form-fields input, .contact-form-fields textarea, .contact-form-fields button, " +
    ".footer-column, .footer-bottom-bar"
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
        if (isOpen) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      }
    });
  }

  if (window.location.pathname.endsWith('/') || window.location.pathname.endsWith('index.html') ||  window.location.pathname === '') {
    const navLinksForScroll = document.querySelectorAll(".nav-links li a[href^='#']");
    const sections = Array.from(navLinksForScroll).map(link => {
        const sectionId = link.getAttribute("href");
        return sectionId && sectionId.length > 1 ? document.querySelector(sectionId) : null;
    }).filter(section => section !== null);

    if (sections.length > 0) {
        window.addEventListener("scroll", () => {
            const navbarEl = document.querySelector('.navbar');
            const navbarHeight = navbarEl ? navbarEl.offsetHeight : 80;
            let fromTop = window.scrollY + navbarHeight + 60; 

            let currentActiveFound = false;
            sections.forEach((section) => {
                const correspondingLink = document.querySelector(`.nav-links li a[href="#${section.id}"]`);
                if (!correspondingLink) return;

                if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                    navLinksForScroll.forEach(link => link.classList.remove("active"));
                    correspondingLink.classList.add("active");
                    currentActiveFound = true;
                }
            });
            const lastSection = sections[sections.length - 1];
            if (lastSection && (window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) { 
                 if (!currentActiveFound) { 
                    navLinksForScroll.forEach(link => link.classList.remove("active"));
                    const lastLink = document.querySelector(`.nav-links li a[href="#${lastSection.id}"]`);
                    if (lastLink) lastLink.classList.add("active");
                 }
            } else if (!currentActiveFound && sections.length > 0 && window.scrollY < sections[0].offsetTop - navbarHeight - 60) {
                navLinksForScroll.forEach(link => link.classList.remove("active"));
            }
        });
    }
  }

  const contactForm = document.getElementById('contactForm');
  const formSuccessMessage = document.getElementById('formSuccessMessage');
  if (contactForm && formSuccessMessage) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      console.log("Formulário enviado (simulação)");
      
      formSuccessMessage.classList.add('active');
      contactForm.reset();
      
      setTimeout(() => {
        formSuccessMessage.classList.remove('active');
      }, 5000);
    });
  }

  applyTranslations(currentLanguage);

  const faqItems = document.querySelectorAll('.faq-accordion .faq-item');
  faqItems.forEach(item => {
    const summary = item.querySelector('summary');
    if (summary) {
      summary.addEventListener('click', (e) => {
        // Comportamento nativo do <details>
      });
    }
  });

});