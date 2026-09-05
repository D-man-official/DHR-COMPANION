// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  KNOWLEDGE BASE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const KNOWLEDGE_BASE = [{
    id: 'batasia-loop',
    name: 'Batasia Loop',
    category: 'engineering',
    location: 'Batasia Loop',
    shortDescription: 'A spiral loop that helps the DHR negotiate steep Himalayan terrain.',
    detailedDescription: `<p>The Batasia Loop is an engineering marvel built to help the Darjeeling Himalayan Railway negotiate the steep Himalayan terrain. Completed in 1919, this spiral loop allows the train to gain elevation while maintaining a manageable gradient.</p>
    <p>At an altitude of about 2,250 m (7,380 ft), the loop provides a panoramic view of the surrounding mountains, including the majestic Kanchenjunga. The loop is a testament to the ingenuity of the railway's builders, who used a spiral design to overcome the challenging topography.</p>
    <p>The loop is named after the Batasia village nearby. It is one of the most photographed spots on the DHR route and a favourite among tourists.</p>`,
    interestingFacts: [
        'The loop is approximately 1,500 meters long and rises about 30 meters in elevation.',
        'It offers a 360-degree view of the Darjeeling hills and the snow-capped Himalayas.',
        'The loop was constructed using traditional methods and materials, with little mechanization.',
        'A war memorial dedicated to Gorkha soldiers is located near the loop.'
    ],
    keywords: ['loop', 'gradient', 'train', 'batasia', 'spiral', 'engineering', 'mountain'],
    commonQuestions: [
        'Why does the train loop here?',
        'Why was Batasia Loop built?',
        'What is the purpose of the Batasia Loop?',
        'How does the Batasia Loop work?'
    ],
    relatedLocations: ['ghum', 'darjeeling']
}, {
    id: 'ghum',
    name: 'Ghum',
    category: 'station',
    location: 'Ghum',
    shortDescription: 'The highest railway station in India and a key stop on the DHR.',
    detailedDescription: `<p>Ghum (also spelled Ghoom) is the highest railway station in India, situated at an elevation of 2,258 m (7,407 ft). It is a vital stop on the Darjeeling Himalayan Railway, located about 6 km from Darjeeling.</p>
    <p>The station is famous for its picturesque location and the nearby Ghum Monastery, one of the oldest Tibetan Buddhist monasteries in the region. The railway station building retains its colonial-era charm and is a popular destination for heritage enthusiasts.</p>
    <p>Ghum was originally established as a watering and resting stop for the steam locomotives that struggled with the steep gradients. Today, it serves as a major tourist attraction and a gateway to the surrounding Himalayan landscapes.</p>`,
    interestingFacts: [
        'Ghum is the highest railway station in India and one of the highest in the world.',
        'The Ghum Monastery, also known as Yiga Choeling, was built in 1850 and houses a 15-foot statue of the Maitreya Buddha.',
        'The station features a small museum showcasing the history of the DHR.',
        'The stretch between Ghum and Darjeeling offers stunning views of the Kanchenjunga.'
    ],
    keywords: ['ghum', 'station', 'highest', 'monastery', 'toy train', 'darjeeling'],
    commonQuestions: [
        'Tell me about Ghum.',
        'What is the highest railway station in India?',
        'What is Ghum famous for?',
        'Why is Ghum important to the DHR?'
    ],
    relatedLocations: ['batasia-loop', 'darjeeling']
}, {
    id: 'z-reverse',
    name: 'Z-Reverse',
    category: 'engineering',
    location: 'Z-Reverse',
    shortDescription: 'A zigzag reversal that allows the train to climb steep gradients.',
    detailedDescription: `<p>The Z-reverse (or zigzag) is a clever engineering solution used on the Darjeeling Himalayan Railway to navigate the steep Himalayan slopes. Instead of a spiral loop, the Z-reverse employs a switchback pattern where the train reverses direction to gain elevation.</p>
    <p>At a Z-reverse point, the train approaches a dead-end siding, then reverses onto a different track that continues uphill. This method was used in sections where the terrain was too steep for a loop or where space was limited.</p>
    <p>The DHR has several Z-reverses along its route, each a testament to the resourcefulness of the railway's engineers. These reversals are fascinating to watch and are a key part of the DHR's heritage.</p>`,
    interestingFacts: [
        'Z-reverses are also known as "switchbacks" or "zigzags".',
        'The DHR uses both loops and Z-reverses to manage the steep gradient.',
        'At a Z-reverse, the train often stops briefly before reversing direction.',
        'The Z-reverse near Chunabhatti is one of the most famous on the route.'
    ],
    keywords: ['z-reverse', 'zigzag', 'switchback', 'gradient', 'engineering', 'reversal'],
    commonQuestions: [
        'What is a Z-reverse?',
        'How does a Z-reverse work?',
        'Why does the DHR use Z-reverses?',
        'What is the difference between a loop and a Z-reverse?'
    ],
    relatedLocations: ['batasia-loop', 'kurseong']
}, {
    id: 'b-class-locomotive',
    name: 'B-Class Steam Locomotives',
    category: 'locomotives',
    location: 'DHR Route',
    shortDescription: 'The iconic steam locomotives that have powered the DHR since 1881.',
    detailedDescription: `<p>The B-class steam locomotives are the iconic engines that have powered the Darjeeling Himalayan Railway since its inception. Designed specifically for the narrow gauge and steep gradients of the Himalayan terrain, these locomotives are a marvel of 19th-century engineering.</p>
    <p>Built by Sharp Stewart and other British manufacturers, the B-class locomotives are 0-4-0 tank engines with a distinctive design. They have been in service for over a century and are still used on heritage runs of the DHR today.</p>
    <p>These locomotives are known for their distinctive whistles, cloud-like steam plumes, and the rhythmic chug that has become synonymous with the "Toy Train" experience. They are a living piece of railway history.</p>`,
    interestingFacts: [
        'The B-class locomotives were built between 1889 and 1915.',
        'They have a wheel arrangement of 0-4-0 ST (side tank).',
        'The locomotives were designed to handle gradients as steep as 1 in 19.',
        'Several B-class locomotives are still operational and are used for heritage rides.',
        'The most famous B-class locomotive is the "DHR 778", which has appeared in numerous films.'
    ],
    keywords: ['b-class', 'locomotive', 'steam', 'engine', 'toy train', 'narrow gauge'],
    commonQuestions: [
        'Tell me about the B-class steam locomotives.',
        'What powers the DHR Toy Train?',
        'When were the B-class locomotives built?',
        'Are the B-class locomotives still used?'
    ],
    relatedLocations: ['darjeeling', 'ghum']
}, {
    id: 'dhr-opening-1881',
    name: '1881 Opening of DHR',
    category: 'history',
    location: 'DHR Route',
    shortDescription: 'The Darjeeling Himalayan Railway opened in 1881, connecting Siliguri to Darjeeling.',
    detailedDescription: `<p>The Darjeeling Himalayan Railway was opened in 1881, connecting the town of Siliguri in the plains to the hill station of Darjeeling. The railway was built to facilitate the transport of tea, timber, and other goods from the hills to the plains, as well as to provide a means of travel for British colonial officials and tourists.</p>
    <p>The construction of the railway was a monumental engineering challenge. The route ascends from about 100 m (330 ft) at Siliguri to over 2,200 m (7,200 ft) at Darjeeling, covering a distance of about 88 km (55 miles).</p>
    <p>The railway was built using a combination of loops, Z-reverses, and steep gradients, all of which were cutting-edge engineering at the time. The DHR was a triumph of British colonial engineering and remains a symbol of the region's rich history.</p>`,
    interestingFacts: [
        'The DHR was built between 1879 and 1881.',
        'The railway was initially built to transport tea and timber from the hills.',
        'The first train ran on the DHR on August 23, 1881.',
        'The railway was built using the "british narrow gauge" of 2 ft (610 mm).',
        'The DHR was one of the first mountain railways in Asia.'
    ],
    keywords: ['1881', 'opening', 'history', 'construction', 'siliguri', 'darjeeling'],
    commonQuestions: [
        'When was the DHR opened?',
        'When was the Darjeeling Himalayan Railway built?',
        'What is the history of the DHR?',
        'When did the first train run on the DHR?'
    ],
    relatedLocations: ['siliguri', 'darjeeling']
}, {
    id: 'unesco-1999',
    name: 'UNESCO World Heritage (1999)',
    category: 'heritage',
    location: 'DHR Route',
    shortDescription: 'The DHR was inscribed as a UNESCO World Heritage site in 1999.',
    detailedDescription: `<p>In 1999, the Darjeeling Himalayan Railway was inscribed as a UNESCO World Heritage site, recognizing its outstanding universal value as an example of a mountain railway that has had a significant impact on the social and economic development of the region.</p>
    <p>The DHR was the first mountain railway in India to receive this prestigious designation. It was recognized under UNESCO's criteria for its engineering innovation, its cultural significance, and its role in the development of the tea industry in the region.</p>
    <p>Today, the DHR is one of India's most treasured heritage sites, attracting tourists from around the world who come to experience the "Toy Train" journey through the Himalayan foothills.</p>`,
    interestingFacts: [
        'The DHR was inscribed as a UNESCO World Heritage site in 1999.',
        'It was the first mountain railway in India to receive UNESCO status.',
        'The DHR is part of a global network of mountain railways recognized by UNESCO.',
        'The railway is also known as the "Toy Train" because of its small gauge and quaint appearance.'
    ],
    keywords: ['unesco', 'world heritage', '1999', 'toy train', 'cultural heritage'],
    commonQuestions: [
        'Why is DHR UNESCO heritage?',
        'When was the DHR declared a UNESCO site?',
        'What does UNESCO World Heritage mean for the DHR?',
        'Is the DHR a UNESCO site?'
    ],
    relatedLocations: ['darjeeling', 'ghum']
}, {
    id: 'dhr-route',
    name: 'DHR Route Overview',
    category: 'route',
    location: 'DHR Route',
    shortDescription: 'The 88 km route from Siliguri to Darjeeling through the Himalayan foothills.',
    detailedDescription: `<p>The Darjeeling Himalayan Railway covers approximately 88 km (55 miles) from New Jalpaiguri (Siliguri) to Darjeeling. The route winds through the Himalayan foothills, passing through tea estates, forests, and picturesque villages.</p>
    <p>Key stops along the route include Sukna, Rongtong, Tindharia, Kurseong, Ghum, Batasia Loop, and finally Darjeeling. The journey takes about 7-8 hours and offers breathtaking views of the surrounding mountains and valleys.</p>
    <p>The route is a masterclass in railway engineering, with gradients of up to 1 in 19 (5.2%) and a combination of loops and Z-reverses to manage the steep terrain. The DHR route is a bucket-list experience for railway enthusiasts and travellers alike.</p>`,
    interestingFacts: [
        'The route covers 88 km and ascends from 100 m to 2,200 m in elevation.',
        'The journey takes about 7-8 hours to complete.',
        'The DHR route passes through 9 major stations.',
        'The stretch from Ghum to Darjeeling is the most scenic part of the journey.'
    ],
    keywords: ['route', 'siliguri', 'darjeeling', 'station', 'journey', 'toy train'],
    commonQuestions: [
        'What is the DHR route?',
        'How long is the DHR journey?',
        'What are the stops on the DHR?',
        'How does the DHR navigate the mountains?'
    ],
    relatedLocations: ['siliguri', 'sukna', 'rongtong', 'tindharia', 'kurseong', 'ghum', 'batasia-loop', 'darjeeling']
}, {
    id: 'darjeeling',
    name: 'Darjeeling',
    category: 'station',
    location: 'Darjeeling',
    shortDescription: 'The charming hill station and terminus of the DHR.',
    detailedDescription: `<p>Darjeeling is a picturesque hill station in the Indian state of West Bengal, and the terminus of the Darjeeling Himalayan Railway. At an elevation of about 2,050 m (6,700 ft), Darjeeling is known for its tea gardens, stunning views of the Himalayas, and its colonial-era charm.</p>
    <p>The town was developed by the British as a summer retreat and is famous for its tea, the Darjeeling Himalayan Railway, and its rich cultural heritage. The DHR terminus at Darjeeling is a heritage building that retains much of its original character.</p>
    <p>Darjeeling is also a gateway to the Mount Everest and Kanchenjunga regions, and attracts tourists from around the world.</p>`,
    interestingFacts: [
        'Darjeeling is known as the "Queen of the Hills".',
        'The town is famous for its tea, which is exported around the world.',
        'The DHR terminus in Darjeeling is a heritage building.',
        'Darjeeling offers panoramic views of the Kanchenjunga, the third-highest mountain in the world.'
    ],
    keywords: ['darjeeling', 'station', 'hill station', 'tea', 'terminus', 'toy train'],
    commonQuestions: [
        'Tell me about Darjeeling.',
        'What is Darjeeling famous for?',
        'Where does the DHR end?',
        'What is the DHR terminus?'
    ],
    relatedLocations: ['ghum', 'batasia-loop']
}];

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  APPLICATION STATE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const state = {
    currentLocation: 'batasia-loop',
    chatHistory: [],
    isListening: false,
    isProcessing: false,
    demoMode: true,
    currentView: 'home',
    selectedHeritageId: null,
    darkMode: false,
    heritageFilter: '',
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  DOM REFS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const views = {
    home: $('#view-home'),
    route: $('#view-route'),
    ask: $('#view-ask'),
    heritage: $('#view-heritage'),
};
const navBtns = $$('#bottomNav button');
const homeQuestion = $('#homeQuestion');
const homeSubmit = $('#homeSubmit');
const chatQuestion = $('#chatQuestion');
const chatSubmit = $('#chatSubmit');
const chatMessages = $('#chatMessages');
const chatContextLabel = $('#chatContextLabel');
const chatStatus = $('#chatStatus');
const clearChatBtn = $('#clearChat');
const followUpGrid = $('#followUpGrid');
const routeList = $('#routeList');
const routeContextName = $('#routeContextName');
const routeContextHint = $('#routeContextHint');
const routeAskBtn = $('#routeAskBtn');
const heritageContainer = $('#heritageContainer');
const homeContext = $('#homeContext');
const homeLocationLabel = $('#homeLocationLabel');
const voiceBtn = $('#voiceBtn');
const chatVoiceBtn = $('#chatVoiceBtn');
const toast = $('#toast');
const statusDot = $('#statusDot');
const statusLabel = $('#statusLabel');
const demoBadge = $('#demoBadge');
const themeToggle = $('#themeToggle');
const factCount = $('#factCount');
const routeCount = $('#routeCount');

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HELPERS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function getLocation(id) {
    return KNOWLEDGE_BASE.find(h => h.id === id) || KNOWLEDGE_BASE[0];
}

function getLocationByName(name) {
    return KNOWLEDGE_BASE.find(h => h.name.toLowerCase() === name.toLowerCase()) || KNOWLEDGE_BASE[0];
}

function getCurrentLocation() {
    return getLocation(state.currentLocation);
}

function normalize(text) {
    return text.toLowerCase().replace(/[^a-z0-9 ]/g, '').trim();
}

function findRelevantHeritage(query) {
    const words = normalize(query).split(/\s+/).filter(w => w.length > 2);
    if (!words.length) return getCurrentLocation();

    let best = null;
    let bestScore = 0;

    for (const entry of KNOWLEDGE_BASE) {
        let score = 0;
        const text = normalize(entry.name + ' ' + entry.shortDescription + ' ' + entry.keywords.join(' ') + ' ' +
            entry.commonQuestions.join(' '));
        for (const word of words) {
            if (text.includes(word)) score += 1;
            if (entry.keywords.some(k => normalize(k).includes(word))) score += 2;
            if (entry.commonQuestions.some(q => normalize(q).includes(word))) score += 2;
            if (normalize(entry.name).includes(word)) score += 3;
        }
        if (entry.id === state.currentLocation) score += 2;
        if (entry.relatedLocations.includes(state.currentLocation)) score += 1;
        if (score > bestScore) {
            bestScore = score;
            best = entry;
        }
    }
    return best || getCurrentLocation();
}

function generateAnswer(question, heritageEntry) {
    const h = heritageEntry || getCurrentLocation();
    const name = h.name;
    const cat = h.category.charAt(0).toUpperCase() + h.category.slice(1);

    const qNorm = normalize(question);
    let answer = '';

    for (const q of h.commonQuestions) {
        if (normalize(q) === qNorm || qNorm.includes(normalize(q).slice(0, 10))) {
            answer = `📍 ${name} — ${cat}\n\n${h.detailedDescription.replace(/<p>|<\/p>/g, '').trim()}`;
            if (h.interestingFacts.length) {
                answer += '\n\n✨ Interesting facts:\n• ' + h.interestingFacts.join('\n• ');
            }
            return answer;
        }
    }

    answer =
        `📍 ${name} — ${cat}\n\n${h.shortDescription}\n\n${h.detailedDescription.replace(/<p>|<\/p>/g, '').trim()}`;
    if (h.interestingFacts.length) {
        answer += '\n\n✨ Did you know?\n• ' + h.interestingFacts.slice(0, 2).join('\n• ');
    }
    return answer;
}

function getFollowUps(heritageEntry) {
    const h = heritageEntry || getCurrentLocation();
    const qs = h.commonQuestions.slice(0, 4);
    const extras = [
        `Tell me more about ${h.name}.`,
        `What's the history of ${h.name}?`,
        `Why is ${h.name} important to the DHR?`
    ];
    const all = [...qs, ...extras];
    const seen = new Set();
    return all.filter(q => { const k = normalize(q); if (seen.has(k)) return false;
        seen.add(k); return true; }).slice(0, 4);
}

function getRouteStations() {
    const order = ['siliguri', 'sukna', 'rongtong', 'tindharia', 'kurseong', 'ghum', 'batasia-loop', 'darjeeling'];
    const map = {};
    for (const h of KNOWLEDGE_BASE) { map[h.id] = h; }
    return order.map(id => map[id]).filter(Boolean);
}

function getHeritageForList() {
    const order = ['batasia-loop', 'ghum', 'z-reverse', 'b-class-locomotive', 'dhr-opening-1881', 'unesco-1999',
        'dhr-route', 'darjeeling'
    ];
    const map = {};
    for (const h of KNOWLEDGE_BASE) { map[h.id] = h; }
    return order.map(id => map[id]).filter(Boolean);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  TOAST
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let toastTimeout;

function showToast(msg) {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  THEME
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function toggleTheme() {
    state.darkMode = !state.darkMode;
    document.documentElement.setAttribute('data-theme', state.darkMode ? 'dark' : 'light');
    themeToggle.textContent = state.darkMode ? '☀️' : '🌙';
    localStorage.setItem('dhr-theme', state.darkMode ? 'dark' : 'light');
}

function loadTheme() {
    const saved = localStorage.getItem('dhr-theme');
    if (saved === 'dark') {
        state.darkMode = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }
}

themeToggle.addEventListener('click', toggleTheme);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  NAVIGATION
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function navigateTo(view) {
    state.currentView = view;
    for (const [key, el] of Object.entries(views)) {
        el.classList.toggle('active', key === view);
    }
    for (const btn of navBtns) {
        btn.classList.toggle('active', btn.dataset.view === view);
    }
    if (view === 'ask') renderChat();
    if (view === 'route') renderRoute();
    if (view === 'heritage') renderHeritageList();
    if (view === 'home') updateHomeContext();
    window.location.hash = view;
}

navBtns.forEach(btn => {
    btn.addEventListener('click', () => navigateTo(btn.dataset.view));
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HOME
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function updateHomeContext() {
    const loc = getCurrentLocation();
    homeContext.innerHTML = `<span class="emoji">📍</span> ${loc.name}`;
    homeLocationLabel.textContent = loc.name;
    factCount.textContent = KNOWLEDGE_BASE.length;
}

function handleHomeAsk() {
    const q = homeQuestion.value.trim();
    if (!q) return;
    processQuestion(q, 'home');
    homeQuestion.value = '';
}

homeSubmit.addEventListener('click', handleHomeAsk);
homeQuestion.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleHomeAsk(); });

document.querySelectorAll('#quickGrid button').forEach(btn => {
    btn.addEventListener('click', () => {
        const q = btn.dataset.q;
        homeQuestion.value = q;
        handleHomeAsk();
    });
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  CHAT / ASK
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderChat() {
    const loc = getCurrentLocation();
    chatContextLabel.textContent = `📍 ${loc.name}`;

    if (state.chatHistory.length === 0) {
        chatMessages.innerHTML = `
          <div class="chat-message assistant">
            <div class="context-tag">📍 ${loc.name}</div>
            <p>Hello! I'm your offline heritage guide. Ask me anything about the Darjeeling Himalayan Railway, and I'll use the knowledge stored on this device to answer.</p>
            <p style="margin-top:6px;font-size:0.85rem;color:var(--text-muted);">💡 Try: "Why does the train loop here?" or "Tell me about Ghum."</p>
          </div>
        `;
    } else {
        let html = '';
        for (const msg of state.chatHistory) {
            const ctx = msg.context ? `<div class="context-tag">📍 ${msg.context}</div>` : '';
            html += `<div class="chat-message ${msg.role}">${ctx}<div>${msg.content}</div></div>`;
        }
        chatMessages.innerHTML = html;
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    const fups = getFollowUps(getCurrentLocation());
    followUpGrid.innerHTML = fups.map(q =>
        `<button data-fup="${q}">${q}</button>`
    ).join('');
    followUpGrid.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
            const q = btn.dataset.fup;
            chatQuestion.value = q;
            handleChatAsk();
        });
    });

    chatStatus.textContent = 'Using offline knowledge';
}

function addChatMessage(role, content, context) {
    state.chatHistory.push({ role, content, context: context || state.currentLocation });
    renderChat();
}

function handleChatAsk() {
    const q = chatQuestion.value.trim();
    if (!q || state.isProcessing) return;
    chatQuestion.value = '';
    processQuestion(q, 'chat');
}

chatSubmit.addEventListener('click', handleChatAsk);
chatQuestion.addEventListener('keydown', (e) => { if (e.key === 'Enter') handleChatAsk(); });

clearChatBtn.addEventListener('click', () => {
    state.chatHistory = [];
    renderChat();
    showToast('🧹 Conversation cleared');
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  QUESTION PROCESSING
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function processQuestion(question, source) {
    if (state.isProcessing) return;
    state.isProcessing = true;

    const loc = getCurrentLocation();

    if (source === 'chat') {
        addChatMessage('user', question);
    } else {
        state.chatHistory.push({ role: 'user', content: question, context: loc.name });
        navigateTo('ask');
        renderChat();
    }

    const typingMsg = {
        role: 'assistant',
        content: `<div class="typing-indicator"><span></span><span></span><span></span></div>`,
        context: loc.name,
        isTyping: true
    };
    state.chatHistory.push(typingMsg);
    renderChat();

    setTimeout(() => {
        state.chatHistory = state.chatHistory.filter(m => !m.isTyping);

        const relevant = findRelevantHeritage(question);
        const answer = generateAnswer(question, relevant);
        const contextName = relevant ? relevant.name : loc.name;

        state.chatHistory.push({
            role: 'assistant',
            content: answer.replace(/\n/g, '<br />'),
            context: contextName
        });

        if (relevant && relevant.id !== state.currentLocation) {
            state.currentLocation = relevant.id;
            updateAllContexts();
        }

        renderChat();
        state.isProcessing = false;
        showToast('📍 Using offline heritage knowledge');
    }, 600 + Math.random() * 400);
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  ROUTE
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderRoute() {
    const stations = getRouteStations();
    routeCount.textContent = stations.length + ' stops';

    routeList.innerHTML = stations.map(s => `
        <div class="route-item ${s.id === state.currentLocation ? 'active' : ''}" data-id="${s.id}">
          <span class="dot"></span>
          <div class="info">
            <div class="name">${s.name}</div>
            <div class="sub">${s.category} · ${s.shortDescription.slice(0, 40)}${s.shortDescription.length > 40 ? '…' : ''}</div>
          </div>
          <span class="badge">${s.category}</span>
        </div>
      `).join('');

    routeList.querySelectorAll('.route-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.id;
            state.currentLocation = id;
            renderRoute();
            updateRouteContext();
            updateAllContexts();
            showToast(`📍 Switched to ${getLocation(id).name}`);
        });
    });

    updateRouteContext();
}

function updateRouteContext() {
    const loc = getCurrentLocation();
    routeContextName.textContent = loc.name;
    routeContextHint.textContent = `Ask me anything about ${loc.name}.`;
    routeAskBtn.textContent = `💬 Ask about ${loc.name}`;
}

routeAskBtn.addEventListener('click', () => {
    const loc = getCurrentLocation();
    navigateTo('ask');
    chatQuestion.value = `Tell me about ${loc.name}.`;
    setTimeout(handleChatAsk, 300);
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  HERITAGE LIST & DETAIL
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function renderHeritageList(filter = '') {
    const items = getHeritageForList();
    const filtered = filter ?
        items.filter(h => h.name.toLowerCase().includes(filter.toLowerCase()) ||
            h.category.toLowerCase().includes(filter.toLowerCase()) ||
            h.shortDescription.toLowerCase().includes(filter.toLowerCase())) :
        items;

    let html = `
        <div style="display:flex;align-items:center;justify-content:space-between;padding:4px 0 8px;flex-wrap:wrap;gap:8px;">
          <h2 style="font-size:1.2rem;">🏛️ Heritage Points</h2>
          <span class="text-sm text-muted">${filtered.length} of ${items.length}</span>
        </div>
        <div class="heritage-search">
          <input type="text" id="heritageSearch" placeholder="Search heritage points…" autocomplete="off" value="${filter}" />
        </div>
        <div class="heritage-grid">
      `;

    if (filtered.length === 0) {
        html += `<div style="grid-column:1/-1;text-align:center;padding:32px 0;color:var(--text-muted);">
          <span style="font-size:2rem;display:block;margin-bottom:8px;">🔍</span>
          No heritage points found for "${filter}"
        </div>`;
    } else {
        for (const h of filtered) {
            html += `
              <div class="h-item" data-id="${h.id}">
                <div class="h-cat">${h.category}</div>
                <div class="h-name">${h.name}</div>
                <div class="h-desc">${h.shortDescription}</div>
              </div>
            `;
        }
    }
    html += '</div>';
    heritageContainer.innerHTML = html;

    const searchInput = document.getElementById('heritageSearch');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            state.heritageFilter = e.target.value;
            renderHeritageList(state.heritageFilter);
        });
    }

    heritageContainer.querySelectorAll('.h-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = el.dataset.id;
            showHeritageDetail(id);
        });
    });
}

function showHeritageDetail(id) {
    const h = getLocation(id);
    if (!h) return;
    state.selectedHeritageId = id;

    const facts = h.interestingFacts.map(f => `<li>${f}</li>`).join('');

    heritageContainer.innerHTML = `
        <button class="back-link" id="heritageBack">← Back to list</button>
        <div class="detail-card">
          <span class="category-badge">${h.category}</span>
          <h2>${h.name}</h2>
          <div class="subtitle">${h.shortDescription}</div>
          <div class="body-text">${h.detailedDescription}</div>
          ${h.interestingFacts.length ? `<ul class="fact-list">${facts}</ul>` : ''}
          <button class="btn-ask" id="heritageAskBtn">💬 Ask about ${h.name}</button>
        </div>
      `;

    document.getElementById('heritageBack').addEventListener('click', () => {
        renderHeritageList(state.heritageFilter);
    });

    document.getElementById('heritageAskBtn').addEventListener('click', () => {
        state.currentLocation = h.id;
        updateAllContexts();
        navigateTo('ask');
        chatQuestion.value = `Tell me about ${h.name}.`;
        setTimeout(handleChatAsk, 300);
    });
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  VOICE INPUT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
let recognition = null;

function setupVoice() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
        voiceBtn.style.opacity = '0.4';
        chatVoiceBtn.style.opacity = '0.4';
        voiceBtn.title = 'Voice not supported';
        chatVoiceBtn.title = 'Voice not supported';
        return;
    }

    recognition = new SpeechRecognition();
    recognition.lang = 'en-IN';
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        const activeInput = document.activeElement;
        if (activeInput && (activeInput.id === 'homeQuestion' || activeInput.id === 'chatQuestion')) {
            activeInput.value = transcript;
            if (activeInput.id === 'homeQuestion') {
                setTimeout(handleHomeAsk, 200);
            }
        } else {
            homeQuestion.value = transcript;
            setTimeout(handleHomeAsk, 200);
        }
        stopListening();
    };

    recognition.onerror = () => { stopListening(); };
    recognition.onend = () => { stopListening(); };
}

function toggleVoice(btn) {
    if (!recognition) {
        showToast('🎤 Voice input not supported in this browser');
        return;
    }
    if (state.isListening) {
        stopListening();
        return;
    }
    try {
        recognition.start();
        state.isListening = true;
        btn.classList.add('listening');
        btn.textContent = '⏹️';
        showToast('🎤 Listening… speak your question');
    } catch (e) {
        showToast('🎤 Please try again');
    }
}

function stopListening() {
    if (recognition) {
        try { recognition.stop(); } catch (e) {}
    }
    state.isListening = false;
    voiceBtn.classList.remove('listening');
    chatVoiceBtn.classList.remove('listening');
    voiceBtn.textContent = '🎤';
    chatVoiceBtn.textContent = '🎤';
}

voiceBtn.addEventListener('click', () => toggleVoice(voiceBtn));
chatVoiceBtn.addEventListener('click', () => toggleVoice(chatVoiceBtn));

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  UPDATE ALL CONTEXTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function updateAllContexts() {
    updateHomeContext();
    if (state.currentView === 'route') renderRoute();
    if (state.currentView === 'ask') renderChat();
    updateRouteContext();
    const loc = getCurrentLocation();
    demoBadge.innerHTML = `<span class="icon">📍</span> ${loc.name}`;
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  OFFLINE STATUS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function updateOfflineStatus() {
    const online = navigator.onLine;
    statusDot.className = 'dot' + (online ? '' : ' offline');
    statusLabel.textContent = online ? 'Online' : 'Offline · local data';
    if (!online) {
        showToast('📡 Offline mode — using local heritage knowledge');
    }
}

window.addEventListener('online', updateOfflineStatus);
window.addEventListener('offline', updateOfflineStatus);

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  KEYBOARD SHORTCUTS
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        homeQuestion.focus();
    }
    if (e.key === 'Escape') {
        if (state.isListening) stopListening();
    }
});

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//  INIT
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function init() {
    loadTheme();
    setupVoice();
    updateOfflineStatus();

    const hash = window.location.hash.slice(1);
    const validViews = ['home', 'route', 'ask', 'heritage'];
    const startView = validViews.includes(hash) ? hash : 'home';

    state.currentLocation = 'batasia-loop';
    navigateTo(startView);
    updateAllContexts();
    renderRoute();
    renderHeritageList();
    renderChat();

    console.log('🚂 DHR Heritage Companion initialized');
    console.log(`📚 ${KNOWLEDGE_BASE.length} heritage entries loaded offline`);
}

window.addEventListener('hashchange', () => {
    const hash = window.location.hash.slice(1);
    if (hash && views[hash]) navigateTo(hash);
});

document.addEventListener('DOMContentLoaded', init);

window.__DHR = { state, KNOWLEDGE_BASE, getLocation, generateAnswer, findRelevantHeritage };
