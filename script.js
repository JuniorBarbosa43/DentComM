   // Scroll suave para âncoras
   const smoothScrollLinks = document.querySelectorAll("a[href^='#']");

   smoothScrollLinks.forEach(link => {
     link.addEventListener("click", function(e) {
       e.preventDefault();
       const target = document.querySelector(this.getAttribute("href"));
       if (target) {
         target.scrollIntoView({ behavior: "smooth" });
       }
     });
   });
   
   // Animações no scroll
   const elementsToAnimate = document.querySelectorAll(".card, .benefits h2, .planos h2, .btn-primary, .btn-secondary");
   
   const observer = new IntersectionObserver(entries => {
     entries.forEach(entry => {
       if (entry.isIntersecting) {
         entry.target.classList.add("animate");
       }
     });
   }, { threshold: 0.1 });
   
   elementsToAnimate.forEach(el => {
     el.classList.add("animate-init");
     observer.observe(el);
   });
   
   function mostrarMensagem(e) {
       e.preventDefault();
       document.getElementById("mensagemEnviada").classList.add("active");
       setTimeout(() => {
         e.target.submit();
       }, 1000);
     }
   
     
     //JS PARA MENU MOBILE E LINK ATIVO
   
     const toggle = document.getElementById('navToggle');
     const menu = document.getElementById('navMenu');
     
     if (toggle && menu) {
       toggle.addEventListener('click', () => {
         menu.classList.toggle('open');
       });
     }
     
     // Ativador de link atual ao rolar
     const links = document.querySelectorAll(".nav-links a");
     const sections = Array.from(links).map(link => document.querySelector(link.getAttribute("href")));
     
     window.addEventListener("scroll", () => {
       let fromTop = window.scrollY + 80;
       sections.forEach((section, index) => {
         if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
           links.forEach(link => link.classList.remove("active"));
           links[index].classList.add("active");
         }
       });
     });
     document.addEventListener("DOMContentLoaded", function () {
     const langToggle = document.getElementById("langToggle");
     let isSpanish = false;
   
     const translations = {
       "Sobre": "Sobre",
       "Benefícios": "Beneficios",
       "Planos": "Planes",
       "Depoimentos": "Testimonios",
       "Contato": "Contacto",
       "Marketing para ": "Marketing para ",
       "Dentistas e Professores": "dentistas y Profesores",
       "Especialistas em atrair mais pacientes ou alunos com estratégias de marketing personalizadas.":
         "Especialistas en atraer más pacientes o alumnos con estrategias de marketing personalizadas.",
       "Solicitar Diagnóstico Gratuito": "Solicite un diagnóstico gratuito",
       "Sobre a DentComm": "Acerca de DentComm",
       "A DentComm nasceu para revolucionar o marketing odontológico, conectando dentistas clínicos e acadêmicos aos pacientes ou alunos ideais. Atuamos como uma extensão estratégica do seu negócio, com foco em previsibilidade de resultados e autoridade de marca. Nosso time é formado por especialistas em tráfego, conteúdo, automações e design — tudo para transformar sua presença digital em uma máquina de atração.":
         "DentComm nació para revolucionar el marketing odontológico, conectando dentistas clínicos y académicos con sus pacientes o alumnos ideales. Actuamos como una extensión estratégica de tu negocio, enfocados en resultados predecibles y autoridad de marca. Nuestro equipo está formado por especialistas en tráfico, contenido, automatización y diseño — todo para transformar tu presencia digital en una máquina de atracción.",
       "Por que a DentComm?": "¿Por qué DentComm?",
       "Previsibilidade": "Previsibilidad",
       "Organizamos sua clínica com um retorno financeiro previsível.": "Organizamos tu clínica con un retorno financiero predecible.",
       "Autoridade": "Autoridad",
       "Posicionamos você como referência para atrair os melhores pacientes ou alunos.": "Te posicionamos como referente para atraer a los mejores pacientes o alumnos.",
       "Sistema completo": "Sistema completo",
       "Tráfego, automações, agendamentos e CRM em uma solução única.": "Tráfico, automatización, agendas y CRM en una única solución.",
       "Planos sob medida para cada estágio": "Planes a medida para cada etapa",
       "Lançamento estratégico": "Lanzamiento estratégico",
       "Posicionamento digital": "Posicionamiento digital",
       "Gestão de WhatsApp": "Gestión de WhatsApp",
       "CRM básico e automações": "CRM básico y automatizaciones",
       "CRM completo": "CRM completo",
       "Gestão de tráfego avançada": "Gestión avanzada de tráfico",
       "Landing pages e copy": "Landing pages y redacción persuasiva",
       "Conteúdos e estratégias de autoridade": "Contenido y estrategias de autoridad",
       "Dashboard de métricas": "Panel de métricas",
       "Tráfego pago e SEO local": "Tráfico pago y SEO local",
       "Autoridade e influenciadores": "Autoridad e influencers",
       "Gestão automatizada da jornada do paciente": "Gestión automatizada del recorrido del paciente",
       "Tráfego completo (Google, Instagram, YouTube)": "Tráfico completo (Google, Instagram, YouTube)",
       "CRM + automações integradas": "CRM + automatizaciones integradas",
       "Dashboard personalizado": "Panel personalizado",
       "Reuniões táticas com o time da DentComm": "Reuniones tácticas con el equipo de DentComm",
       "Agende uma Análise Gratuita": "Agenda un Análisis Gratuito",
       "Depoimentos Reais": "Testimonios Reales",
       "A DentComm nos ajudou a construir uma autoridade que nos trouxe 400 novos pacientes em 4 meses.": "DentComm nos ayudó a construir una autoridad que nos trajo 400 nuevos pacientes en 4 meses.",
       "Com o plano acadêmico, vendi 90 mentorias em menos de 30 dias com toda estrutura digital pronta.": "Con el plan académico, vendí 90 mentorías en menos de 30 días con toda la estructura digital lista.",
       "Duplicamos o faturamento da clínica em menos de 5 meses com um funil comercial completo.": "Duplicamos la facturación de la clínica en menos de 5 meses con un embudo comercial completo.",
       "Materiais gratuitos": "Materiales gratuitos",
       "Acesse nossos e-books exclusivos para dentistas:": "Accede a nuestros e-books exclusivos para dentistas:",
       "Como atrair mais pacientes": "Cómo atraer más pacientes",
       "Marketing para Professores": "Marketing para Profesores",
       "Instagram para Dentistas": "Instagram para Dentistas",
       "Vamos conversar?": "¿Hablamos?",
       "Preencha o formulário ou fale com a gente no WhatsApp.": "Completa el formulario o contáctanos por WhatsApp.",
       "Nome": "Nombre",
       "E-mail": "Correo electrónico",
       "Como podemos te ajudar?": "¿Cómo podemos ayudarte?",
       "Enviar mensagem": "Enviar mensaje",
       "Quem somos": "Quiénes somos",
       "Serviços": "Servicios",
       "Blog (em breve)": "Blog (pronto)",
       "Fale no WhatsApp": "Habla por WhatsApp",
       "Siga a DentComm": "Sigue a DentComm",
       "Todos os direitos reservados.": "Todos los derechos reservados.",
       "Feito com 💙 para dentistas que querem se destacar.": "Hecho con 💙 para dentistas que quieren destacarse."
     };
   
     function translatePage() {
       document.querySelectorAll("body *").forEach((el) => {
         if (el.children.length === 0 && el.textContent.trim() !== "") {
           const originalText = el.textContent.trim();
           const translation = translations[originalText];
           if (translation) {
             el.textContent = translation;
           } else {
             for (let key in translations) {
               if (originalText.includes(key)) {
                 el.textContent = originalText.replace(key, translations[key]);
                 break;
               }
             }
           }
         }
       });
     }
   
     function restorePortuguese() {
       location.reload(); // reverte para o HTML original sem recarregar o site manualmente
     }
   
     langToggle.addEventListener("click", function () {
       isSpanish = !isSpanish;
       langToggle.textContent = isSpanish ? "PT" : "ES";
   
       if (isSpanish) {
         translatePage();
       } else {
         restorePortuguese();
       }
     });
   });
   