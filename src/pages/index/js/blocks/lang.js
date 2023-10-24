export function lang() {
    const langButtons = document.querySelectorAll("[data-btn]");
    const activeLangButtons = document.querySelector(".header__lang-btn");
    const currentPatName = window.location.pathname;

    let currentLang = localStorage.getItem("language") || "eng";
    let currentText = {};

    const texts = {
        // Header
        "header_link-1": {
            eng: "main",
            rus: "главная",
            fra: "principal",
            deu: "hauptsächlich",
        },
        "header_link-2": {
            eng: "about",
            rus: "о нас",
            fra: "à propos",
            deu: "über uns",
        },
        "header_link-3": {
            eng: "game features",
            rus: "особенности игры",
            fra: "caractéristiques de jeu",
            deu: "spielfunktionen",
        },
        "header_link-4": {
            eng: "system requirements",
            rus: "системные требования",
            fra: "configuration requise",
            deu: "system anforderungen",
        },
        "header_link-5": {
            eng: "quotes",
            rus: "цитаты",
            fra: "devis",
            deu: "zitate",
        },
        
        // Promo
        "promo_title": {
            eng: "Survive at all costs",
            rus: "Выжить любой ценой",
            fra: "Survivre à tout prix",
            deu: "Überleben um jeden kosten",
        },
        "promo_subtitle": {
            eng: "Experience new social battle royale game",
            rus: "Испытайте новую социальную игру королевская битва",
            fra: "Découvrez le nouveau jeu de bataille royale sociale",
            deu: "Erlebe das neue soziale Battle-Royale-Spiel",
        },
        "promo_link": {
            eng: "Buy now on Steam | $14.99",
            rus: "Купить сейчас в Steam-e",
            fra: "Acheter maintenant sur Steam",
            deu: "Jetzt bei Steam kaufen",
        },
        "promo_arrow-down": {
            eng: "The story",
            rus: "История",
            fra: "Histoire",
            deu: "Geschichte",
        },

        // Description
        "description_title": {
            eng: "What is SOS?",
            rus: "Что такое SOS?",
            fra: "Qu'est-ce que SOS?",
            deu: "Was ist SOS?",
        },
        "description_subtitle": {
            eng: "Social battle royale game",
            rus: "Социальная игра королевская битва",
            fra: "Jeu social bataille royale",
            deu: "Battle Royale Gesellschaftsspiel",
        },
        // "description__text-1": {
        //     eng: "",
        //     rus: "",
        //     fra: "",
        //     deu: "",
        // },
        // "description__text-2": {
        //     eng: "",
        //     rus: "",
        //     fra: "",
        //     deu: "",
        // },

        // Features
        "features_title": {
            eng: "What’s so special?",
            rus: "Что такого особенного?",
            fra: "Qu'y a-t-il de si spécial?",
            deu: "Was ist so besonders?",
        },
        "features_subtitle": {
            eng: "Features",
            rus: "Детали",
            fra: "Détails",
            deu: "Einzelheiten",
        },
        "features_box-title-1": {
            eng: "Survive at all costs",
            rus: "Выжить любой ценой",
            fra: "Survivre à tout prix",
            deu: "Überleben um jeden kosten",
        },
        "features_box-title-2": {
            eng: "Create allies and enemies",
            rus: "Создавайте союзников и врагов",
            fra: "Construisez des alliés et des ennemis",
            deu: "Baue verbündete und feinde auf",
        },
        "features_box-title-3": {
            eng: "Impress the audience",
            rus: "Впечатлите аудиторию",
            fra: "Impressionner le public",
            deu: "Publikum beeindrucken",
        },
        "features_box-description-1": {
            eng: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
            rus: "У вас есть 30 минут, чтобы найти реликвию, подать сигнал на эвакуацию и захватить одно из трех мест на спасательном вертолете.",
            fra: "Vous avez 30 minutes pour trouver la relique, signaler une évacuation et sécuriser l'un des trois emplacements dans l'hélicoptère de sauvetage.",
            deu: "Sie haben 30 Minuten Zeit, um das Relikt zu finden, eine Evakuierung zu signalisieren und einen von drei Orten im Rettungshubschrauber zu sichern.",
        },
        "features_box-description-2": {
            eng: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
            rus: "У вас есть 30 минут, чтобы найти реликвию, подать сигнал на эвакуацию и захватить одно из трех мест на спасательном вертолете.",
            fra: "Vous avez 30 minutes pour trouver la relique, signaler une évacuation et sécuriser l'un des trois emplacements dans l'hélicoptère de sauvetage.",
            deu: "Sie haben 30 Minuten Zeit, um das Relikt zu finden, eine Evakuierung zu signalisieren und einen von drei Orten im Rettungshubschrauber zu sichern.",
        },
        "features_box-description-3": {
            eng: "You have 30 minutes to find a relic, signal for extraction, and grab one of three spots on the rescue chopper.",
            rus: "У вас есть 30 минут, чтобы найти реликвию, подать сигнал на эвакуацию и захватить одно из трех мест на спасательном вертолете.",
            fra: "Vous avez 30 minutes pour trouver la relique, signaler une évacuation et sécuriser l'un des trois emplacements dans l'hélicoptère de sauvetage.",
            deu: "Sie haben 30 Minuten Zeit, um das Relikt zu finden, eine Evakuierung zu signalisieren und einen von drei Orten im Rettungshubschrauber zu sichern.",
        },

        //Requirements
        "requirements_title": {
            eng: "Can My Computer Run this game?",
            rus: "Может ли мой компьютер запустить эту игру?",
            fra: "Mon ordinateur peut-il exécuter ce jeu ?",
            deu: "Kann mein Computer dieses Spiel ausführen?",
        },
        "requirements_subtitle": {
            eng: "System requirements",
            rus: "Системные требования",
            fra: "Configuration requise",
            deu: "System Anforderungen",
        },
        "requirements_table-title-1": {
            eng: "OS:",
            rus: "OC:",
            fra: "SO:",
            deu: "OS:",
        },
        "requirements_table-title-2": {
            eng: "Processor:",
            rus: "Процессор:",
            fra: "CPU:",
            deu: "Zentralprozessor:",
        },
        "requirements_table-title-3": {
            eng: "Memory:",
            rus: "Память:",
            fra: "Mémoire:",
            deu: "Speicher:",
        },
        "requirements_table-title-4": {
            eng: "Storage:",
            rus: "Хранилище:",
            fra: "Stockage:",
            deu: "Lagerung:",
        },
        "requirements_table-title-5": {
            eng: "Graphics:",
            rus: "Графика:",
            fra: "Arts graphiques:",
            deu: "GRAFIK:",
        },
        "requirements_table-descr-1": {
            eng: "Windows 7 64-bit only (No OSX support at this time)",
            rus: "Только Windows 7 64-битная (В настоящее время нет поддержки OSX)",
            fra: "Windows 7 64 bits uniquement (actuellement pas de support OSX)",
            deu: "Nur Windows 7 64-Bit (derzeit keine OSX-Unterstützung)",
        },
        "requirements_table-descr-2": {
            eng: "Intel Core 2 Duo @ 2.4 GHZ or AMD Athlon X2 @ 2.8 GHZ",
            rus: "Intel Core 2 Duo @ 2,4 ГГц или AMD Athlon X2 @ 2,8 ГГц",
            fra: "Intel Core 2 Duo à 2,4 GHz ou AMD Athlon X2 à 2,8 GHz",
            deu: "Intel Core 2 Duo @ 2,4 GHz oder AMD Athlon X2 @ 2,8 GHz",
        },
        "requirements_table-descr-3": {
            eng: "8 GB RAM",
            rus: "8 ГБ оперативной памяти",
            fra: "8 Go de RAM",
            deu: "8 GB Arbeitsspeicher",
        },
        "requirements_table-descr-4": {
            eng: "8 GB available space",
            rus: "8 ГБ свободного места",
            fra: "8 Go d'espace libre",
            deu: "8 GB freier Speicherplatz",
        },
        "requirements_table-descr-5": {
            eng: "NVIDIA GeForce GTX 660 2GB or AMD Radeon HD 7850 2GB DirectX11 (Shader Model 5)",
            rus: "NVIDIA GeForce GTX 660 2 ГБ или AMD Radeon HD 7850 2 ГБ DirectX11 (шейдерная модель 5)",
            fra: "NVIDIA GeForce GTX 660 2 Go ou AMD Radeon HD 7850 2 Go DirectX11 (Shader Model 5)",
            deu: "NVIDIA GeForce GTX 660 2 GB oder AMD Radeon HD 7850 2 GB DirectX11 (Shader Model 5)",
        },

        // Opinion
        "opinion_title": {
            eng: "What people think?",
            rus: "Что думают люди?",
            fra: "Qu'est-ce que les gens pensent?",
            deu: "Was denken die Leute?",
        },
        "opinion_subtitle": {
            eng: "Press quotes",
            rus: "Цитаты из прессы",
            fra: "Citations de presse",
            deu: "Pressezitate",
        },
        "opinion_descr": {
            eng: "Our goal is to create a product and service that you’re satisfied with and use it every day. This is why we’re constantly working on our services to make it better every day and really listen to what our users has to say",
            rus: "Наша цель — создать продукт и услугу, которыми вы будете довольны, и использовать их каждый день. Вот почему мы постоянно работаем над нашими сервисами, чтобы сделать их лучше каждый день, и внимательно прислушиваемся к тому, что говорят наши пользователи.",
            fra: "Notre objectif est de créer un produit et un service dont vous êtes satisfait et que vous utilisez quotidiennement. C'est pourquoi nous travaillons constamment sur nos services pour les améliorer chaque jour et écouter réellement ce que nos utilisateurs ont à dire.",
            deu: "Unser Ziel ist es, ein Produkt und eine Dienstleistung zu schaffen, mit denen Sie zufrieden sind und die Sie jeden Tag nutzen. Aus diesem Grund arbeiten wir ständig an unseren Dienstleistungen, um sie jeden Tag besser zu machen und hören wirklich zu, was unsere Benutzer zu sagen haben",
        },
        "opinion_link": {
            eng: "Read more testimonials",
            rus: "Прочитать больше отзывов",
            fra: "Lire plus d'avis",
            deu: "Weitere Rezensionen lesen",
        },
        "press-box_name-1": {
            eng: "Evan Lahti",
            rus: "Эван Лахти",
            fra: "Evan Lahti",
            deu: "Evan Lahti",
        },
        "press-box_name-2": {
            eng: "Jada Griffin ",
            rus: "Джада Гриффин",
            fra: "Jada Griffon",
            deu: "Jada Griffin",
        },
        "press-box_name-3": {
            eng: "Aaron Williams ",
            rus: "Аарон Уильямс",
            fra: "Aaron Williams",
            deu: "Aaron Williams",
        },
        "press-box_position-1": {
            eng: "PC Gamer",
            rus: "ПК-геймер",
            fra: "Joueur sur PC",
            deu: "PC-Gamer",
        },
        "press-box_position-2": {
            eng: "Ner Director",
            rus: "Нер Директор",
            fra: "Directeur Ner",
            deu: "Ner Direktor",
        },
        "press-box_position-3": {
            eng: "Uproxx",
            rus: "Упрокс",
            fra: "Uprox",
            deu: "Uprox",
        },
        "press-box_quote-1": {
            eng: "One of my gaming highlights of the year.",
            rus: "Одно из моих игровых достижений года.",
            fra: "Une de mes réalisations de jeu de l année.",
            deu: "Einer meiner Gaming-Erfolge des Jahres.",
        },
        "press-box_quote-2": {
            eng: "The next big thing in the world of streaming and survival games.",
            rus: "Новая большая вещь в мире стриминга и игр на выживание.",
            fra: "La prochaine grande chose dans le monde des jeux de streaming et de survie.",
            deu: "Das nächste große Ding in der Welt der Streaming- und Überlebensspiele.",
        },
        "press-box_quote-3": {
            eng: "Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.",
            rus: "Снуп Догг, играющий дико интересную «SOS», просто смешно.",
            fra: "Snoop Dogg jouant le très intéressant 'SOS' est tout simplement ridicule.",
            deu: "Snoop Dogg, der das wahnsinnig interessante „SOS“ spielt, ist einfach lächerlich.",
        },
        "press-box_time-1": {
            eng: "October 18, 2018",
            rus: "18 октября 2018 г.",
            fra: "18 octobre 2018.",
            deu: "18. Oktober 2018",
        },
        "press-box_time-2": {
            eng: "December 21, 2018",
            rus: "21 декабря 2018 г.",
            fra: "21 décembre 2018.",
            deu: "21. Dezember 2018",
        },
        "press-box_time-3": {
            eng: "December 24, 2018",
            rus: "24 декабря 2018 г.",
            fra: "24 décembre 2018.",
            deu: "24. Dezember 2018",
        },

        // Newsletter
        "newsletter_title": {
            eng: "Want to stay in touch?",
            rus: "Хотите оставаться на связи?",
            fra: "Vous voulez rester connecté ?",
            deu: "Möchten Sie in Verbindung bleiben?",
        },
        "newsletter_subtitle": {
            eng: "Newsletter subscribe",
            rus: "Подписщитесь на рассылку",
            fra: "Abonnez-vous à la newsletter",
            deu: "Abonnieren sie den newsletter",
        },
        "newsletter_descr": {
            eng: "In order to start receiving our news, all you have to do is enter your email address. Everything else will be taken care of by us. We will send you emails containing information about game. We don’t spam.",
            rus: "Для того, чтобы начать получать наши новости, все, что вам нужно сделать, это ввести свой адрес электронной почты. Обо всем остальном позаботимся мы. Мы будем отправлять вам электронные письма, содержащие информацию об игре. Мы не спамим.",
            fra: "Pour commencer à recevoir nos actualités, il vous suffit de saisir votre adresse e-mail. Nous nous occuperons de tout le reste. Nous vous enverrons des e-mails contenant des informations sur le jeu. Nous ne spammons pas.",
            deu: "Um unsere Neuigkeiten zu erhalten, müssen Sie lediglich Ihre E-Mail-Adresse eingeben. Wir kümmern uns um alles andere. Wir senden Ihnen E-Mails mit Informationen zum Spiel. Wir spammen nicht.",
        },
        "newsletter_form-title": {
            eng: "Your email address",
            rus: "Ваш электронный адрес",
            fra: "Votre adresse e-mail",
            deu: "Ihre E-Mail-Adresse",
        },
        "newsletter_form-button": {
            eng: "Subscribe now",
            rus: "Подписаться",
            fra: "Abonnez-vous maintenant",
            deu: "Abonniere jetzt",
        },
        "footer_copyright": {
            eng: "© 2018 Outpost Games, Inc. All Rights Reserved",
            rus: "© Outpost Games, Inc., 2018. Все права защищены.",
            fra: "© 2018 Outpost Games, Inc. Tous droits réservés.",
            deu: "© 2018 Outpost Games, Inc. Alle Rechte vorbehalten.",
        },
        "footer_privacy-policy": {
            eng: "Privacy Policy",
            rus: "ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ",
            fra: "Politique de confidentialité",
            deu: "Datenschutzrichtlinie",
        },
        "footer_terms": {
            eng: "| Terms of Services |",
            rus: "| Условия предоставления услуг |",
            fra: "| Conditions d'utilisation |",
            deu: "| Nutzungsbedingungen |",
        },
        "footer_norms": {
            eng: "Code of Conduct",
            rus: "Кодекс поведения",
            fra: "Code de conduite",
            deu: "Verhaltenskodex",
        },
    };

    const anotherTexts = {
        "class": {
            eng: "",
            rus: "",
            fra: "",
            deu: "",
        },
    };

    checkPagePatName();
    changeLang()

    langButtons.forEach(btn => {
        btn.addEventListener("click", (e) => {
            currentLang = e.target.dataset.btn;
            activeLangButtons.textContent = currentLang;

            localStorage.setItem("language", currentLang)
            langButtons.forEach(btn => {
                btn.classList.remove("header__lang-select_hidden");   
            });
            btn.classList.add("header__lang-select_hidden");
            changeLang()
        });
    });

    function checkPagePatName() {
        switch (currentPatName) {
            case "/index.html":
                currentText = texts;
                break;
            case "/another.html":
                currentText = anotherTexts;
                break;
            default:
                currentText = texts;
                break;
        }
    }

    function changeLang() {
        activeLangButtons.textContent = currentLang;

        langButtons.forEach(btn => {
            if (btn.dataset.btn == currentLang) {
                btn.classList.add("header__lang-select_hidden");   
            }
        });

        for (const key in currentText) {
            const elem = document.querySelector(`[data-lang = ${key}]`)
            if (elem) {
                elem.textContent = currentText[key][currentLang];
            }
        }
    }
}