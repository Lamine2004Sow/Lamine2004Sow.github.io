<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mouhamadou Lamine SOW - Data Scientist</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }

        .cv-card {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            animation: slideUp 0.8s ease-out;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(50px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .header {
            background: linear-gradient(135deg, #2c3e50, #34495e);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .header::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
            animation: rotate 20s linear infinite;
        }

        @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .profile-img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            background: linear-gradient(45deg, #f39c12, #e74c3c);
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 48px;
            font-weight: bold;
            position: relative;
            z-index: 2;
            animation: pulse 2s ease-in-out infinite alternate;
        }

        @keyframes pulse {
            from { transform: scale(1); }
            to { transform: scale(1.05); }
        }

        .name {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
            position: relative;
            z-index: 2;
        }

        .title {
            font-size: 1.3rem;
            opacity: 0.9;
            margin-bottom: 20px;
            position: relative;
            z-index: 2;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 30px;
            flex-wrap: wrap;
            position: relative;
            z-index: 2;
        }

        .contact-item {
            display: flex;
            align-items: center;
            gap: 8px;
            transition: transform 0.3s ease;
        }

        .contact-item:hover {
            transform: translateY(-3px);
        }

        .main-content {
            display: grid;
            grid-template-columns: 1fr 2fr;
            gap: 0;
        }

        .sidebar {
            background: linear-gradient(180deg, #34495e, #2c3e50);
            color: white;
            padding: 40px 30px;
        }

        .content {
            padding: 40px;
        }

        .section {
            margin-bottom: 40px;
            opacity: 0;
            animation: fadeInUp 0.6s ease-out forwards;
        }

        .section:nth-child(1) { animation-delay: 0.2s; }
        .section:nth-child(2) { animation-delay: 0.4s; }
        .section:nth-child(3) { animation-delay: 0.6s; }
        .section:nth-child(4) { animation-delay: 0.8s; }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .section-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 20px;
            color: #2c3e50;
            position: relative;
            padding-bottom: 10px;
        }

        .sidebar .section-title {
            color: white;
        }

        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background: linear-gradient(45deg, #f39c12, #e74c3c);
            border-radius: 2px;
        }

        .skill-category {
            margin-bottom: 25px;
        }

        .skill-category h4 {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            font-size: 1.1rem;
        }

        .skill-list {
            list-style: none;
            padding-left: 20px;
        }

        .skill-list li {
            margin-bottom: 5px;
            position: relative;
            padding-left: 15px;
        }

        .skill-list li::before {
            content: '▸';
            position: absolute;
            left: 0;
            color: #f39c12;
        }

        .experience-item, .project-item, .education-item {
            margin-bottom: 30px;
            padding: 20px;
            background: rgba(52, 73, 94, 0.05);
            border-radius: 10px;
            border-left: 4px solid #3498db;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .experience-item:hover, .project-item:hover, .education-item:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .item-header {
            display: flex;
            justify-content: between;
            align-items: flex-start;
            margin-bottom: 10px;
            flex-wrap: wrap;
        }

        .item-title {
            font-weight: 700;
            font-size: 1.1rem;
            color: #2c3e50;
        }

        .item-company {
            color: #3498db;
            font-weight: 600;
        }

        .item-date {
            color: #7f8c8d;
            font-size: 0.9rem;
            margin-left: auto;
        }

        .item-location {
            color: #95a5a6;
            font-size: 0.9rem;
        }

        .item-description {
            margin-top: 10px;
        }

        .item-description ul {
            list-style: none;
            padding-left: 0;
        }

        .item-description li {
            margin-bottom: 5px;
            padding-left: 20px;
            position: relative;
        }

        .item-description li::before {
            content: '•';
            position: absolute;
            left: 0;
            color: #3498db;
            font-weight: bold;
        }

        .languages {
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }

        .language {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 15px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            transition: transform 0.3s ease;
        }

        .language:hover {
            transform: scale(1.05);
        }

        .language-name {
            font-weight: 600;
            margin-bottom: 5px;
        }

        .language-level {
            font-size: 0.9rem;
            opacity: 0.8;
        }

        .profile-text {
            font-size: 1.1rem;
            line-height: 1.8;
            text-align: justify;
        }

        @media (max-width: 768px) {
            .main-content {
                grid-template-columns: 1fr;
            }
            
            .contact-info {
                flex-direction: column;
                gap: 15px;
            }
            
            .name {
                font-size: 2rem;
            }
            
            .container {
                padding: 10px;
            }
        }

        .floating-shapes {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        }

        .shape {
            position: absolute;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 50%;
            animation: float 6s ease-in-out infinite;
        }

        .shape:nth-child(1) {
            width: 80px;
            height: 80px;
            top: 10%;
            left: 10%;
            animation-delay: 0s;
        }

        .shape:nth-child(2) {
            width: 60px;
            height: 60px;
            top: 70%;
            left: 80%;
            animation-delay: 2s;
        }

        .shape:nth-child(3) {
            width: 100px;
            height: 100px;
            top: 40%;
            left: 5%;
            animation-delay: 4s;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    </style>
</head>
<body>
    <div class="floating-shapes">
        <div class="shape"></div>
        <div class="shape"></div>
        <div class="shape"></div>
    </div>

    <div class="container">
        <div class="cv-card">
            <header class="header">
                <div class="profile-img">MLS</div>
                <h1 class="name">Mouhamadou Lamine SOW</h1>
                <p class="title">Alternance Data Scientist / Data Engineer</p>
                <div class="contact-info">
                    <div class="contact-item">
                        <span>📧</span>
                        <span type="email">lamine.2004pro.sow@gmail.com</span>
                    </div>
                    <div class="contact-item">
                        <span>📍</span>
                        <span>Saint-Denis, 93200</span>
                    </div>
                    <div class="contact-item">
                        <span>🎂</span>
                        <span>01/01/2004</span>
                    </div>
                </div>
            </header>

            <div class="main-content">
                <aside class="sidebar">
                    <section class="section">
                        <h2 class="section-title">🐍 Programmation & Data Science</h2>
                        <ul class="skill-list">
                            <li><strong>Python :</strong> pandas, NumPy</li>
                            <li><strong>Statistiques :</strong> Tests statistiques, Chi², ACP</li>
                            <li><strong>Machine Learning :</strong> Algorithmes supervisés/non-supervisés</li>
                            <li><strong>Langages :</strong> Java, C</li>
                        </ul>
                    </section>

                    <section class="section">
                        <h2 class="section-title">📊 Analyse & Visualisation</h2>
                        <ul class="skill-list">
                            <li><strong>Visualisation :</strong> matplotlib, seaborn</li>
                            <li><strong>Outils :</strong> Excel avancé, MATLAB</li>
                            <li><strong>Exploration :</strong> Analyse exploratoire</li>
                        </ul>
                    </section>

                    <section class="section">
                        <h2 class="section-title">🗄 Gestion de Données</h2>
                        <ul class="skill-list">
                            <li><strong>Relationnel :</strong> PostgreSQL, MySQL</li>
                            <li><strong>NoSQL :</strong> MongoDB</li>
                            <li><strong>ETL/ELT :</strong> Pipelines de données</li>
                            <li><strong>Formats :</strong> JSON, CSV, XML</li>
                        </ul>
                    </section>

                    <section class="section">
                        <h2 class="section-title">🛠 Infrastructure</h2>
                        <ul class="skill-list">
                            <li><strong>Systèmes :</strong> Linux (Ubuntu, CentOS)</li>
                            <li><strong>Versioning :</strong> Git</li>
                            <li><strong>Réseau :</strong> Wireshark</li>
                        </ul>
                    </section>

                    <section class="section">
                        <h2 class="section-title">💻 Développement Web</h2>
                        <ul class="skill-list">
                            <li><strong>Backend :</strong> Node.js, PHP</li>
                            <li><strong>Frontend :</strong> HTML/CSS, Angular, TypeScript</li>
                            <li><strong>Architecture :</strong> Pipelines end-to-end</li>
                        </ul>
                    </section>

                    <section class="section">
                        <h2 class="section-title">🌐 Langues</h2>
                        <div class="languages">
                            <div class="language">
                                <div class="language-name">Français</div>
                                <div class="language-level">Natif</div>
                            </div>
                            <div class="language">
                                <div class="language-name">Anglais</div>
                                <div class="language-level">B1 (650 TOEIC)</div>
                            </div>
                        </div>
                    </section>
                </aside>

                <main class="content">
                    <section class="section">
                        <h2 class="section-title">Profil</h2>
                        <p class="profile-text">
                            Étudiant en 2ème année de cycle ingénieur en informatique à Sup Galilée (Bac+4).
                            Recherche une alternance de 24 mois en Data Science/Data Engineering pour mettre en pratique 
                            mes compétences en analyse statistique, machine learning et ingénierie des données dans un 
                            environnement innovant.
                        </p>
                    </section>

                    <section class="section">
                        <h2 class="section-title">Projets</h2>
                        
                        <div class="project-item">
                            <div class="item-header">
                                <div>
                                    <div class="item-title">Analyse des données Parcoursup - Académie de Créteil</div>
                                    <div class="item-company">Python, Pandas</div>
                                </div>
                                <div class="item-date">2025</div>
                            </div>
                            <div class="item-description">
                                <ul>
                                    <li>Nettoyage et traitement d'un dataset de 111 formations × 119 variables</li>
                                    <li>Feature engineering : extraction et restructuration de 6 variables clés</li>
                                    <li>Mise en place de pipelines de validation (seuils à 60%) et agrégation par filière</li>
                                    <li>Analyse comparative des profils d'admission selon les mentions au baccalauréat</li>
                                    <li>Identification de 56 filières analysables après filtrage</li>
                                </ul>
                            </div>
                        </div>

                        <div class="project-item">
                            <div class="item-header">
                                <div>
                                    <div class="item-title">Application de gestion d'hôtel multi-rôle</div>
                                    <div class="item-company">MySQL, Python</div>
                                </div>
                                <div class="item-date">2025</div>
                            </div>
                            <div class="item-description">
                                <ul>
                                    <li>Conception et structuration de la base de données relationnelle avec MySQL</li>
                                    <li>Écriture de requêtes SQL complexes pour extraire les données selon les profils</li>
                                    <li>Mise en place de relations normalisées, clés étrangères, index et optimisation</li>
                                    <li>Développement de scripts Python pour les opérations CRUD avec gestion d'erreurs</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="section">
                        <h2 class="section-title">Expérience Professionnelle</h2>
                        
                        <div class="experience-item">
                            <div class="item-header">
                                <div>
                                    <div class="item-title">Stagiaire Développeur Full-Stack</div>
                                    <div class="item-company">Sonatel (Orange Senegal)</div>
                                    <div class="item-location">Dakar, Senegal</div>
                                </div>
                                <div class="item-date">juillet 2024 – septembre 2024</div>
                            </div>
                            <div class="item-description">
                                <ul>
                                    <li>Initiation et prise en main des technologies Angular, LoopBack et MongoDB</li>
                                    <li>Contribution à la conception et au développement d'une application web full-stack</li>
                                    <li>Réalisation d'un rapport de recherche sur les méthodes d'automatisation du déploiement (CI/CD, conteneurisation)</li>
                                    <li>Présentation orale à l'équipe technique</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section class="section">
                        <h2 class="section-title">Formation Académique</h2>
                        
                        <div class="education-item">
                            <div class="item-header">
                                <div>
                                    <div class="item-title">Cycle d'Ingénieur Informatique</div>
                                    <div class="item-company">Sup Galilée / Université Sorbonne Paris Nord</div>
                                    <div class="item-location">Villetaneuse</div>
                                </div>
                                <div class="item-date">septembre 2024 – juin 2027</div>
                            </div>
                            <div class="item-description">
                                <ul>
                                    <li>Conception et développement logiciel : maîtrise complète du cycle de développement</li>
                                    <li>Architecture réseau et bases de données : conception, gestion et optimisation</li>
                                    <li>Management de projets et analyse de données : pilotage d'équipes et aide à la décision</li>
                                </ul>
                            </div>
                        </div>

                        <div class="education-item">
                            <div class="item-header">
                                <div>
                                    <div class="item-title">Classe Préparatoire MPSI</div>
                                    <div class="item-company">École Supérieure Multinationale des Télécommunications (ESMT)</div>
                                    <div class="item-location">Dakar, Senegal</div>
                                </div>
                                <div class="item-date">septembre 2022 – mai 2024</div>
                            </div>
                            <div class="item-description">
                                <ul>
                                    <li>Maîtrise des fondamentaux scientifiques : mathématiques avancées, physique générale</li>
                                    <li>Capacités analytiques et rigueur : résolution de problèmes complexes</li>
                                    <li>Compétences en programmation : algorithmique, Python, modélisation numérique</li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>

    <script>
        // Animation au scroll
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observer tous les éléments avec animation
        document.querySelectorAll('.section, .experience-item, .project-item, .education-item').forEach(el => {
            observer.observe(el);
        });

        // Effet de typing sur le titre
        const title = document.querySelector('.title');
        const titleText = title.textContent;
        title.textContent = '';
        
        setTimeout(() => {
            let i = 0;
            const typeWriter = () => {
                if (i < titleText.length) {
                    title.textContent += titleText.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                }
            };
            typeWriter();
        }, 1000);

        // Parallax léger sur les formes flottantes
        window.addEventListener('mousemove', (e) => {
            const shapes = document.querySelectorAll('.shape');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            shapes.forEach((shape, index) => {
                const speed = (index + 1) * 0.5;
                const xPos = x * speed * 10;
                const yPos = y * speed * 10;
                shape.style.transform += ` translate(${xPos}px, ${yPos}px)`;
            });
        });

        // Effet hover sur les compétences
        document.querySelectorAll('.skill-list li').forEach(skill => {
            skill.addEventListener('mouseenter', function() {
                this.style.transform = 'translateX(10px)';
                this.style.transition = 'transform 0.3s ease';
            });
            
            skill.addEventListener('mouseleave', function() {
                this.style.transform = 'translateX(0)';
            });
        });
    </script>
</body>
</html>
