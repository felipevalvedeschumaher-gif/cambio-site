// Initialize Lucide Icons
        lucide.createIcons();

        // Current Language State
        let currentLang = 'pt';

        // Complete Dictionary PT-BR and EN-US (Reflecting all 8 requested modifications)
        const translations = {
            pt: {
                top_status: "ATENDIMENTO CORPORATIVO",
                nav_partners: "Bancos & Plataforma",
                nav_solutions: "Soluções B2B",
                nav_advantages: "Diferenciais",
                nav_contact: "Contato",
                btn_perf_exp: "Performance de Exportação",
                header_cta: "Falar no WhatsApp",
                hero_badge: "2 BANCOS DE CÂMBIO + 1 PLATAFORMA GLOBAL • REPRESENTAÇÃO OFICIAL",
                hero_title_1: "Câmbio Corporativo e Tesouraria Global com",
                hero_title_highlight: " Direcionamento Estratégico.",
                hero_subtitle: "Representamos oficialmente o <strong class='text-slate-900 font-semibold'>Ouribank</strong>, o <strong class='text-slate-900 font-semibold'>Moneycorp Banco de Câmbio</strong> e a plataforma americana <strong class='text-slate-900 font-semibold'>Tensec</strong>. Entendemos profundamente a operação da sua empresa antes mesmo da abertura da conta e direcionamos para o parceiro ideal de acordo com a sua necessidade.",
                hero_btn_wa_sub: "Atendimento via WhatsApp",
                hero_btn_tel_sub: "Telefone Fixo",
                metric_countries: "Países Conectados",
                metric_currencies: "Moedas Operacionais",
                metric_settlement: "Liquidação Internacional",
                hub_tag: "ECOSSISTEMA COMPLETO",
                hub_title: "Ecossistema Oficial Representado",
                hub_desc: "Analisamos o perfil e a estrutura da sua operação para conectar sua empresa à instituição financeira ideal:",
                ouri_badge: "Banco de Câmbio",
                mc_badge: "Banco Global",
                tensec_badge: "Plataforma Global",
                hero_ouri_desc: "+40 anos de tradição • Trade Finance, ACC/ACE, Finimp & Hedge",
                hero_mc_desc: "+47 anos no mundo • Câmbio Pronto, Futuro & Mass Payments",
                hero_tensec_desc: "Tesouraria Cross-Border em tempo real • Fedwire, ACH & SWIFT",
                hub_footer: "Diagnóstico consultivo prévio para direcionar sua empresa ao parceiro ideal",
                partners_eyebrow: "REPRESENTAÇÃO INSTITUCIONAL OFICIAL",
                partners_title: "Dois Bancos Especialistas e Uma Plataforma Global ao Seu Lado",
                partners_subtitle: "A <strong class='text-slate-900 font-semibold'>Câmbio Empresas</strong> avalia as particularidades de cada operação para conectar o seu negócio à instituição mais adequada para a sua necessidade nacional e internacional.",
                ouri_body: "Com mais de <strong class='text-slate-900 font-semibold'>40 anos de solidez</strong> no mercado financeiro brasileiro (antigo Banco Ourinvest), o Ouribank é referência absoluta em operações estruturadas de câmbio comercial, linhas de comércio exterior e atendimento corporativo personalizado.",
                ouri_feat_1: "Câmbio Pronto (Importação, Exportação e Remessas Financeiras)",
                ouri_feat_2: "Trade Finance: Finimp, ACC / ACE e Cartas de Crédito",
                ouri_feat_3: "Hedge Cambial, NDF, Trava de Câmbio e Contas Escrow",
                ouri_feat_4: "Assessoria em registros BACEN (SCE-IED / SCE-Crédito)",
                btn_quote_ouri: "Atendimento Ouribank",
                mc_body: "Fundado em Londres em 1979 (<strong class='text-slate-900 font-semibold'>+47 anos de história</strong>) e com banco de câmbio próprio autorizado pelo Banco Central no Brasil, a Moneycorp oferece liquidez global em mais de 120 moedas e presença na Europa, EUA, Ásia e América Latina.",
                mc_feat_1: "Câmbio Pronto e Câmbio Futuro (Travamento de Taxas e NDF)",
                mc_feat_2: "Pagamentos Internacionais em Massa (Mass Payments Globais)",
                mc_feat_3: "Operações Corporativas com Liquidez em +120 Moedas",
                mc_feat_4: "Gestão de Risco Cambial e Consultoria para Tesourarias",
                btn_quote_mc: "Atendimento Moneycorp",
                tensec_body: "Plataforma americana de infraestrutura financeira global para comércio internacional. A <strong class='text-slate-900 font-semibold'>Tensec</strong> elimina intermediários bancários tradicionais com liquidação cross-border em tempo real para mais de <strong class='text-slate-900 font-semibold'>150 países e 70 moedas</strong>.",
                tensec_feat_1: "Acesso direto às redes bancárias dos EUA (Fedwire e ACH) e SWIFT",
                tensec_feat_2: "Contas Globais Multi-Moeda e Tesouraria Corporativa 24/7",
                tensec_feat_3: "Pagamentos e Recebimentos Internacionais sem fricção em D+0",
                tensec_feat_4: "Rastreamento completo de ponta a ponta e transparência de taxas",
                btn_quote_tensec: "Atendimento Tensec",
                sol_eyebrow: "PORTFÓLIO CORPORATIVO COMPLETO",
                sol_title: "Soluções de Câmbio e Comércio Exterior para Empresas",
                sol_cta_link: "Falar com um especialista",
                sol_1_title: "Importação, Exportação & Trade Finance",
                sol_1_desc: "Liquidação ágil de pagamentos a fornecedores internacionais e recebimento de ordens do exterior com taxas competitivas e linhas de financiamento estruturadas.",
                sol_2_title: "Remessas Financeiras & Estruturadas",
                sol_2_desc: "Suporte jurídico-cambial completo para movimentações de capital societário, pagamento de serviços internacionais, tecnologia, fretes e dividendos.",
                sol_3_title: "Hedge e Proteção Cambial",
                sol_3_desc: "Proteja a margem de lucro e o fluxo de caixa da sua empresa contra a volatilidade do dólar e do euro através de instrumentos de travamento de taxa.",
                sol_4_title: "Tesouraria Global & Contas Internacionais",
                sol_4_desc: "Através da plataforma Tensec e Moneycorp, opere contas globais, pague múltiplos fornecedores e receba nos EUA/Europa como uma empresa local.",
                adv_eyebrow: "DIFERENCIAIS COMPETITIVOS",
                adv_title: "Por que operar através da Câmbio Empresas?",
                adv_1_title: "Entendimento Prévio e Direcionamento Ideal",
                adv_1_desc: "Entendemos profundamente a operação da sua empresa antes mesmo da abertura da conta e direcionamos para o melhor parceiro de acordo com a necessidade específica do cliente.",
                adv_2_title: "Atendimento Consultivo Especializado",
                adv_2_desc: "Sem filas de call center ou gerentes generalistas. Converse com especialistas em câmbio corporativo pelo WhatsApp (11) 99254-5976 ou telefone fixo (11) 3566-2664.",
                adv_3_title: "Liquidação Ágil D+0 e D+1",
                adv_3_desc: "Agilidade no processamento de contratos e emissão de comprovantes SWIFT / Fedwire para seus fornecedores no exterior, otimizando o fluxo da sua operação.",
                adv_4_title: "Compliance & Segurança BACEN",
                adv_4_desc: "Todas as operações são cursadas diretamente nas instituições parceiras autorizadas pelo Banco Central do Brasil e órgãos reguladores globais.",
                contact_eyebrow: "CANAIS DE ATENDIMENTO CORPORATIVO",
                contact_title: "Fale com Nossos Especialistas",
                contact_desc: "Conte conosco para analisar a operação da sua empresa, esclarecer dúvidas sobre enquadramento cambial e direcionar o seu negócio para a solução ideal junto ao <strong class='text-slate-900 font-semibold'>Ouribank</strong>, <strong class='text-slate-900 font-semibold'>Moneycorp</strong> ou <strong class='text-slate-900 font-semibold'>Tensec</strong>.",
                contact_wa_label: "WHATSAPP CORPORATIVO / CELULAR",
                contact_wa_sub: "Atendimento consultivo para empresas via WhatsApp",
                contact_tel_label: "TELEFONE FIXO • SÃO PAULO",
                contact_tel_sub: "Atendimento comercial de Segunda a Sexta, 9h às 18h",
                form_title: "Solicitar Atendimento Consultivo",
                form_subtitle: "Preencha os dados básicos da sua operação para entendermos a sua necessidade e indicarmos a melhor solução:",
                form_company: "Razão Social ou Nome da Empresa *",
                form_name: "Seu Nome e Cargo *",
                form_phone: "Telefone / WhatsApp *",
                form_partner: "Parceiro de Interesse",
                form_opt_all: "Ajudar a escolher o parceiro ideal",
                form_op_type: "Tipo de Demanda",
                form_amount: "Moeda e Valor Estimado",
                form_notes: "Observações sobre a Operação (Opcional)",
                form_submit: "Enviar Solicitação via WhatsApp",
                footer_about: "Soluções corporativas em câmbio comercial, financeiro, hedge e tesouraria internacional. Representação institucional Ouribank, Moneycorp Banco de Câmbio e Tensec.",
                footer_partners_title: "Parceiros & Links",
                footer_sol_title: "Operações Corporativas",
                footer_s1: "Câmbio Importação & Exportação",
                footer_s2: "FINIMP, ACC / ACE & Trade Finance",
                footer_s3: "Hedge Cambial, NDF & Câmbio Futuro",
                footer_s4: "Tesouraria Cross-Border & Fedwire/ACH",
                footer_contact_title: "Canais de Atendimento",
                footer_regulatory: "Operações intermediadas e liquidadas através de instituições autorizadas pelo Banco Central do Brasil e reguladores internacionais."
            },
            en: {
                top_status: "CORPORATE ADVISORY",
                nav_partners: "Banks & Platform",
                nav_solutions: "B2B Solutions",
                nav_advantages: "Differentiators",
                nav_contact: "Contact",
                btn_perf_exp: "Export Performance",
                header_cta: "Chat on WhatsApp",
                hero_badge: "2 SPECIALIZED FX BANKS + 1 GLOBAL PLATFORM • OFFICIAL REPRESENTATION",
                hero_title_1: "Corporate Foreign Exchange & Global Treasury with",
                hero_title_highlight: " Strategic Partner Matching.",
                hero_subtitle: "We officially represent <strong class='text-slate-900 font-semibold'>Ouribank</strong>, <strong class='text-slate-900 font-semibold'>Moneycorp FX Bank</strong>, and the US cross-border platform <strong class='text-slate-900 font-semibold'>Tensec</strong>. We deeply understand your company's operation even before account opening and direct you to the ideal partner for your specific needs.",
                hero_btn_wa_sub: "Corporate WhatsApp",
                hero_btn_tel_sub: "Landline Phone",
                metric_countries: "Connected Countries",
                metric_currencies: "Operating Currencies",
                metric_settlement: "Cross-Border Settlement",
                hub_tag: "COMPLETE ECOSYSTEM",
                hub_title: "Official Represented Ecosystem",
                hub_desc: "We analyze your operation's profile and structure to connect your company with the ideal financial institution:",
                ouri_badge: "FX Bank",
                mc_badge: "Global Bank",
                tensec_badge: "Global Platform",
                hero_ouri_desc: "+40 years of tradition • Trade Finance, ACC/ACE, Finimp & Hedge",
                hero_mc_desc: "+47 years globally • Spot FX, Forwards & Global Mass Payments",
                hero_tensec_desc: "Real-time Cross-Border Treasury • Direct Fedwire, ACH & SWIFT",
                hub_footer: "Prior consultative diagnosis to direct your company to the ideal partner",
                partners_eyebrow: "OFFICIAL INSTITUTIONAL REPRESENTATION",
                partners_title: "Two Specialized FX Banks and One Global Platform by Your Side",
                partners_subtitle: "<strong class='text-slate-900 font-semibold'>Câmbio Empresas</strong> evaluates the specifics of each operation to connect your business with the most suitable institution for your domestic and international needs.",
                ouri_body: "With over <strong class='text-slate-900 font-semibold'>40 years of solidity</strong> in the Brazilian financial market (formerly Banco Ourinvest), Ouribank is a premier benchmark in structured commercial FX, trade finance credit lines, and tailored corporate service.",
                ouri_feat_1: "Spot FX (Import, Export, and Corporate Financial Remittances)",
                ouri_feat_2: "Trade Finance: FINIMP, ACC / ACE, and Letters of Credit",
                ouri_feat_3: "FX Hedging, NDFs, Rate Locks, and Corporate Escrow Accounts",
                ouri_feat_4: "Full Central Bank of Brazil (BACEN SCE-IED / Credit) Advisory",
                btn_quote_ouri: "Ouribank Advisory",
                mc_body: "Founded in London in 1979 (<strong class='text-slate-900 font-semibold'>+47 years of history</strong>) with its own Central Bank-authorized FX bank in Brazil, Moneycorp delivers global liquidity in 120+ currencies across Europe, North America, Asia, and Latin America.",
                mc_feat_1: "Spot FX & Forward Contracts (Rate Locking & NDFs)",
                mc_feat_2: "Global International Mass Payments Engine",
                mc_feat_3: "Corporate Operations with Direct Liquidity in 120+ Currencies",
                mc_feat_4: "FX Risk Management & Corporate Treasury Advisory",
                btn_quote_mc: "Moneycorp Advisory",
                tensec_body: "US-based global financial infrastructure platform built for cross-border trade. <strong class='text-slate-900 font-semibold'>Tensec</strong> eliminates traditional correspondent banking friction with real-time settlement across <strong class='text-slate-900 font-semibold'>150+ countries and 70+ currencies</strong>.",
                tensec_feat_1: "Direct access to US banking rails (Fedwire & ACH) and SWIFT",
                tensec_feat_2: "Multi-Currency Global Accounts & 24/7 Corporate Treasury",
                tensec_feat_3: "Frictionless Same-Day (D+0) International Pay-ins & Payouts",
                tensec_feat_4: "End-to-end payment tracking and complete fee transparency",
                btn_quote_tensec: "Tensec Advisory",
                sol_eyebrow: "COMPLETE CORPORATE PORTFOLIO",
                sol_title: "Foreign Exchange & Global Trade Solutions for Companies",
                sol_cta_link: "Speak with a specialist",
                sol_1_title: "Import, Export & Trade Finance",
                sol_1_desc: "Fast settlement for international supplier payments and export receivables with competitive rates and structured trade finance lines.",
                sol_2_title: "Financial & Structured Remittances",
                sol_2_desc: "End-to-end legal and regulatory FX support for equity capital injections, international software/service payments, freight, and dividends.",
                sol_3_title: "FX Hedging & Cash Flow Protection",
                sol_3_desc: "Protect your profit margins and corporate cash flow against USD and EUR volatility using institutional rate-locking instruments.",
                sol_4_title: "Global Treasury & International Accounts",
                sol_4_desc: "Through Tensec and Moneycorp, operate multi-currency global accounts, execute batch payouts, and collect in the US/Europe like a local entity.",
                adv_eyebrow: "COMPETITIVE ADVANTAGES",
                adv_title: "Why Operate Through Câmbio Empresas?",
                adv_1_title: "Prior Understanding & Ideal Partner Matching",
                adv_1_desc: "We deeply understand your company's operation even before account opening and direct you to the best partner according to the client's specific needs.",
                adv_2_title: "Specialized Consultative Service",
                adv_2_desc: "No call center queues or generalist managers. Speak with corporate FX specialists via WhatsApp +55 (11) 99254-5976 or Landline +55 (11) 3566-2664.",
                adv_3_title: "Fast D+0 and D+1 Settlement",
                adv_3_desc: "Agile contract processing and rapid issuance of SWIFT / Fedwire confirmations for your overseas suppliers, optimizing your operational workflow.",
                adv_4_title: "BACEN & Global Compliance",
                adv_4_desc: "All transactions are settled directly through partner institutions authorized by the Central Bank of Brazil and international regulators.",
                contact_eyebrow: "CORPORATE CONTACT CHANNELS",
                contact_title: "Speak with Our Specialists",
                contact_desc: "Count on us to analyze your company's operation, clarify regulatory FX requirements, and direct your business to the ideal solution with <strong class='text-slate-900 font-semibold'>Ouribank</strong>, <strong class='text-slate-900 font-semibold'>Moneycorp</strong>, or <strong class='text-slate-900 font-semibold'>Tensec</strong>.",
                contact_wa_label: "CORPORATE WHATSAPP / MOBILE",
                contact_wa_sub: "Consultative corporate support via WhatsApp",
                contact_tel_label: "LANDLINE • SÃO PAULO",
                contact_tel_sub: "Business hours: Monday to Friday, 9:00 AM to 6:00 PM BRT",
                form_title: "Request Consultative Service",
                form_subtitle: "Fill in the basic details of your operation so we can understand your needs and recommend the best solution:",
                form_company: "Company Legal Name *",
                form_name: "Your Name & Title *",
                form_phone: "Phone / WhatsApp *",
                form_partner: "Partner of Interest",
                form_opt_all: "Help me choose the ideal partner",
                form_op_type: "Operation Type",
                form_amount: "Currency & Estimated Volume",
                form_notes: "Operation Notes (Optional)",
                form_submit: "Send Request via WhatsApp",
                footer_about: "Corporate solutions in commercial FX, financial remittances, hedging, and global treasury. Official representation of Ouribank, Moneycorp FX Bank, and Tensec.",
                footer_partners_title: "Partners & Links",
                footer_sol_title: "Corporate Operations",
                footer_s1: "Import & Export Foreign Exchange",
                footer_s2: "FINIMP, ACC / ACE & Trade Finance",
                footer_s3: "FX Hedging, NDF & Forward Contracts",
                footer_s4: "Cross-Border Treasury & Fedwire/ACH",
                footer_contact_title: "Contact Channels",
                footer_regulatory: "Transactions are intermediated and settled through institutions authorized by the Central Bank of Brazil and international financial regulators."
            }
        };

        // Language Switcher Function
        function setLanguage(lang) {
            currentLang = lang;
            document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';

            const btnPt = document.getElementById('lang-pt');
            const btnEn = document.getElementById('lang-en');
            if (lang === 'pt') {
                btnPt.className = "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition bg-blue-700 text-white shadow-sm";
                btnEn.className = "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition text-slate-600 hover:text-slate-900";
            } else {
                btnEn.className = "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition bg-blue-700 text-white shadow-sm";
                btnPt.className = "px-2.5 py-1 rounded-md text-[11px] font-bold tracking-wide transition text-slate-600 hover:text-slate-900";
            }

            const dict = translations[lang];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (dict[key]) {
                    el.innerHTML = dict[key];
                }
            });
        }

        // Handle Corporate Contact Form Submission -> Direct WhatsApp Dispatch
        function handleQuoteSubmit(e) {
            e.preventDefault();
            const company = document.getElementById('f-company').value.trim();
            const name = document.getElementById('f-name').value.trim();
            const phone = document.getElementById('f-phone').value.trim();
            const partner = document.getElementById('f-partner').value;
            const demand = document.getElementById('f-demand').value;
            const amount = document.getElementById('f-amount').value.trim() || 'A definir';
            const notes = document.getElementById('f-notes').value.trim();

            const message = `*SOLICITAÇÃO DE ATENDIMENTO CORPORATIVO - CAMBIOEMPRESAS.COM.BR*\n\n` +
                            `• *Empresa:* ${company}\n` +
                            `• *Responsável:* ${name}\n` +
                            `• *Contato:* ${phone}\n` +
                            `• *Parceiro de Interesse:* ${partner}\n` +
                            `• *Operação:* ${demand}\n` +
                            `• *Volume Estimado:* ${amount}\n` +
                            (notes ? `• *Obs:* ${notes}\n` : '');

            const waUrl = `https://wa.me/5511992545976?text=${encodeURIComponent(message)}`;
            window.open(waUrl, '_blank');
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
