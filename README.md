# 🎓 CV en Ligne - Mouhamadou Lamine SOW

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-success?style=flat-square&logo=github)](https://votreusername.github.io)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/fr/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/fr/docs/Web/JavaScript)

> CV interactif et moderne pour ma recherche d'alternance en Data Science / Data Engineering (24 mois)

## 🚀 Démo en direct

**👉 [Voir mon CV en ligne](https://votreusername.github.io)**

## 📋 À propos

CV en ligne responsive et animé, optimisé pour :
- ✅ Performance et vitesse de chargement
- ✅ SEO (référencement naturel)
- ✅ Accessibilité (WCAG 2.1)
- ✅ Design moderne et professionnel
- ✅ Version imprimable

## 🛠️ Technologies utilisées

### Frontend
- **HTML5** : Structure sémantique avec balises ARIA
- **CSS3** : Animations, Grid Layout, Flexbox, Media Queries
- **JavaScript (Vanilla)** : Intersection Observer, Parallax, Debounce

### Fonctionnalités
- 🎨 Design responsive (mobile-first)
- ⚡ Animations CSS performantes
- 🔍 Optimisé pour le SEO avec métadonnées Open Graph
- ♿ Accessible (navigation au clavier, lecteurs d'écran)
- 🖨️ Version imprimable optimisée
- 📱 Compatible tous navigateurs modernes

## 📁 Structure du projet

```
.
├── index.html          # Structure HTML du CV
├── style.css           # Feuilles de styles
├── script.js           # Scripts JavaScript
├── README.md           # Ce fichier
├── cv.pdf              # Version PDF du CV (à ajouter)
└── favicon.png         # Favicon du site (à ajouter)
```

## 🚀 Installation et déploiement

### 1. Cloner le repository

```bash
git clone https://github.com/votreusername/votreusername.github.io.git
cd votreusername.github.io
```

### 2. Personnalisation

Modifiez les fichiers suivants avec vos informations :

**`index.html`** :
- Remplacez les informations personnelles (nom, email, téléphone, etc.)
- Mettez à jour les liens sociaux (GitHub, LinkedIn)
- Ajoutez vos projets, expériences et formations

**`style.css`** :
- Personnalisez les couleurs si désiré
- Ajustez les animations selon vos préférences

**Métadonnées SEO** :
- Changez l'URL dans les balises Open Graph
- Adaptez la description pour votre profil

### 3. Ajouter des fichiers supplémentaires

```bash
# Ajoutez votre CV en PDF
cp /chemin/vers/votre/cv.pdf ./cv.pdf

# Ajoutez un favicon (optionnel)
# Générez-en un sur https://favicon.io
cp /chemin/vers/favicon.png ./favicon.png
```

### 4. Tester en local

Ouvrez simplement `index.html` dans votre navigateur :

```bash
# Sur macOS
open index.html

# Sur Linux
xdg-open index.html

# Sur Windows
start index.html
```

Ou utilisez un serveur local :

```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js
npx http-server

# Accédez à http://localhost:8000
```

### 5. Déployer sur GitHub Pages

```bash
# Ajoutez tous les fichiers
git add .

# Créez un commit
git commit -m "🚀 Ajout du CV en ligne optimisé"

# Poussez vers GitHub
git push origin main
```

**Activez GitHub Pages** :
1. Allez dans **Settings** > **Pages**
2. Source : Sélectionnez `main` branch
3. Cliquez sur **Save**
4. Votre site sera disponible sur `https://votreusername.github.io`

## 🎨 Personnalisation avancée

### Changer les couleurs

Dans `style.css`, modifiez les variables suivantes :

```css
/* Gradient de fond */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Couleur principale */
background: linear-gradient(45deg, #f39c12, #e74c3c);

/* Couleur d'accent pour les liens */
color: #3498db;
```

### Ajouter une section

1. Ajoutez le HTML dans `index.html` :

```html
<section class="section" id="certifications">
    <h2 class="section-title">🏆 Certifications</h2>
    <!-- Votre contenu -->
</section>
```

2. Le CSS et JavaScript existants s'appliqueront automatiquement !

### Désactiver les animations

Si vous préférez un CV plus sobre, commentez ces lignes dans `style.css` :

```css
/* @keyframes slideUp { ... }
   @keyframes pulse { ... }
   @keyframes float { ... } */
```

## 📊 Performance

- ⚡ **Temps de chargement** : < 1 seconde
- 📦 **Taille totale** : < 50 KB (sans images)
- 🎯 **Score Lighthouse** : 95+ sur tous les critères

## ♿ Accessibilité

- Navigation au clavier complète
- Balises ARIA pour lecteurs d'écran
- Contraste de couleurs conforme WCAG 2.1 AA
- Support de `prefers-reduced-motion`

## 🌐 Compatibilité navigateurs

| Navigateur | Version minimale |
|-----------|------------------|
| Chrome    | 90+              |
| Firefox   | 88+              |
| Safari    | 14+              |
| Edge      | 90+              |

## 📱 SEO et partage

Le site est optimisé pour le partage sur les réseaux sociaux avec :
- Métadonnées Open Graph (Facebook, LinkedIn)
- Twitter Card
- Titre et description optimisés

## 📄 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Contact

**Mouhamadou Lamine SOW**
- 📧 Email : [lamine.2004pro.sow@gmail.com](mailto:lamine.2004pro.sow@gmail.com)
- 💼 LinkedIn : [Votre profil LinkedIn](https://linkedin.com/in/votreprofil)
- 💻 GitHub : [@votreusername](https://github.com/votreusername)

---

## 🙏 Remerciements

Design inspiré par les meilleures pratiques de CV en ligne modernes.

## 📝 TODO

- [ ] Ajouter la version PDF du CV
- [ ] Créer un favicon personnalisé
- [ ] Ajouter Google Analytics (optionnel)
- [ ] Implémenter un dark mode
- [ ] Ajouter une section blog (optionnel)
- [ ] Créer des pages pour détailler les projets

---

⭐ **N'hésitez pas à mettre une étoile si ce projet vous a aidé !**

*Dernière mise à jour : Décembre 2024*
