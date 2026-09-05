# 🚂 DHR Heritage Companion

> **Offline-first guide to the Darjeeling Himalayan Railway — the "Toy Train"**

[![Offline Ready](https://img.shields.io/badge/Offline-Ready-brightgreen)](https://github.com/yourusername/dhr-heritage-companion)
[![PWA](https://img.shields.io/badge/PWA-Compatible-blue)](https://github.com/yourusername/dhr-heritage-companion)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

The DHR Heritage Companion is a lightweight, offline-capable web application that lets you explore the rich history, engineering marvels, and cultural significance of the Darjeeling Himalayan Railway (DHR). With a built-in knowledge base of 8+ heritage points, voice input, dark mode, and a polished UI, it’s the perfect pocket guide for enthusiasts, tourists, and history buffs – even without an internet connection.

---

## ✨ Features

- **Offline-First**: All heritage data is stored locally using a JSON knowledge base. No network required after the first load.
- **Smart Q&A**: Ask natural language questions – the app finds the most relevant heritage entry and generates a detailed, context‑aware answer.
- **Contextual Routing**: Switch between heritage points (e.g., Batasia Loop, Ghum, Z‑Reverse) to update the chat context and home display.
- **Voice Input**: Speak your questions (using the Web Speech API) for a hands‑free experience.
- **Dark / Light Theme**: Toggle between themes with a single click – your preference is saved in localStorage.
- **Interactive Route Map**: Visual list of DHR stops with live context updates and animated selection.
- **Heritage Library**: Browse all heritage entries, search by name or category, and dive into detailed descriptions with interesting facts.
- **Quick Questions**: One‑tap buttons for popular queries on the home screen.
- **Follow‑up Suggestions**: After each answer, the chat suggests related questions to keep the conversation going.
- **Polished UI**: Smooth animations, glass‑morphism effects, responsive design, and custom scrollbars.
- **Progressive Web App (PWA) Ready**: Includes a basic manifest for installation on mobile devices.

---

## 📸 Screenshots

*(Add your own screenshots here – replace the placeholder paths with actual images.)*

| Home Screen | Chat / Ask View |
|-------------|----------------|
| ![Home](screenshots/home.png) | ![Chat](screenshots/chat.png) |

| Route View | Heritage Detail |
|------------|-----------------|
| ![Route](screenshots/route.png) | ![Detail](screenshots/detail.png) |

---

## 🛠️ Technologies Used

- **HTML5** – Semantic structure  
- **CSS3** – Custom properties, animations, glass‑morphism, responsive grid  
- **JavaScript (ES6)** – Vanilla JS, no frameworks – lightweight and fast  
- **Web Speech API** – Voice recognition for input  
- **LocalStorage** – Theme persistence  
- **Service Worker (optional)** – Can be extended for full offline caching  

---

## 🚀 Installation & Usage

### 1. Clone or download the repository

```bash
git clone https://github.com/yourusername/dhr-heritage-companion.git
cd dhr-heritage-companion
```

### 2. Open `index.html` in your browser

Simply double‑click the file, or use a local development server (e.g., VS Code Live Server, Python `http.server`).

```bash
# Python 3
python -m http.server 8000
# then visit http://localhost:8000
```

### 3. Enjoy the experience

- Use the bottom navigation to switch between **Home**, **Route**, **Ask**, and **Heritage**.
- Type or speak your questions about the DHR.
- Click on any route station to set it as your current context.
- Browse the heritage library and explore detailed entries.

---

## 🧠 How It Works

The application is driven by a static knowledge base (an array of objects) that contains entries for each heritage point. Each entry includes:

- `id`, `name`, `category`, `location`
- `shortDescription`, `detailedDescription` (HTML‑ready)
- `interestingFacts` (array)
- `keywords`, `commonQuestions`, `relatedLocations`

When you ask a question, the app:
1. Normalises your query.
2. Scores each heritage entry based on keyword matches, context boosts, and question similarity.
3. Selects the best‑matching entry.
4. Generates a human‑readable answer by combining the entry's description, facts, and (if available) a matching common question.

The chat history, current location, and theme are all managed via a central state object, ensuring a smooth, reactive UI.

---

## 📡 Offline Capability

All heritage content is embedded in the `script.js` file. No external API calls are made. The app works entirely offline after the initial page load. The top‑right badge indicates the online/offline status, and a toast message reminds you when you're using local data.

To make the app fully installable as a PWA, you can add a service worker and a proper manifest (the current manifest is a data URI placeholder). Contributions are welcome!

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/dhr-heritage-companion/issues) if you want to help.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 🙏 Acknowledgements

- The rich heritage of the Darjeeling Himalayan Railway – a UNESCO World Heritage site.
- The open‑source community for providing inspiration and tools.
- All contributors who help keep heritage alive.

---

## 📄 License

This project is licensed under the MIT License – see the [LICENSE](LICENSE) file for details.

---

*Made with ❤️ for the love of heritage trains and offline exploration.*

**Enjoy your journey on the Toy Train!**
