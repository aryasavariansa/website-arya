// Data aplikasi dengan fitur foto dan Work
const appData = {
    user: {
        name: "Arya Savariansah",
        title: "Spesialis Manufaktur",
        email: "aryasavarinasah@gmail.com",
        phone: "089520336532",
        location: "Kosambi, Indonesia",
        linkedin: "linkedin.com/in/arya-savariansah",
        profileImage: null
    },
    pages: {
        home: {
            title: "Home",
            description: "Selamat datang di portfolio Arya Savariansah",
            badge: "✨ Lulusan SMK Teknik Permesinan ✨",
            mainTitle: "ARYA SAVARIANSAH",
            subtitle: "Spesialis Manufaktur & Produksi",
            descriptionText: "Lulusan SMK Teknik Permesinan dengan pengalaman di bidang manufaktur dan produksi. Terbiasa menangani perencanaan produksi, quality control, manajemen stok & distribusi, hingga mechanical drafting.",
            stats: [
                { number: "15%", label: "Pengurangan Waktu Setup" },
                { number: "60%", label: "Penurunan Reject Material" },
                { number: "20%", label: "Peningkatan Efisiensi" },
                { number: "67%", label: "Pengurangan Lead Time" }
            ]
        },
        about: {
            title: "About Me",
            description: "Tentang latar belakang dan keahlian saya",
            sections: [
                { id: "aboutText1", content: "Lulusan SMK Teknik Permesinan dengan pengalaman di bidang manufaktur dan produksi. Terbiasa menangani perencanaan produksi, quality control, manajemen stok & distribusi, hingga mechanical drafting." },
                { id: "aboutText2", content: "Memiliki kemampuan dalam meningkatkan efisiensi produksi, menurunkan tingkat reject, serta mendukung kelancaran proses manufaktur melalui desain teknis dan perencanaan yang sistematis." }
            ],
            skills: {
                technical: [
                    "AutoCAD", "SolidWorks (2D & 3D Drafting)", "Membaca & Membuat Gambar Teknik",
                    "Bubut, Milling, Molding, Assembly", "Production Planning & Stock Monitoring",
                    "Quality Control & Problem Solving", "Preventive Maintenance & Mold Management",
                    "Microsoft Office (Excel, Word, PowerPoint)", "Basic ERP / Sistem Monitoring Produksi"
                ],
                personal: [
                    "Problem Solving & Berpikir Analitis", "Teamwork & Koordinasi Lintas Departemen",
                    "Manajemen Waktu & Efisiensi Proses", "Detail-Oriented & Teliti dalam pekerjaan",
                    "Disiplin & Tanggung Jawab", "Proaktif dan Cepat Beradaptasi", "Komunikasi Efektif"
                ]
            },
            experiences: [
                { id: "experience1", title: "Mechanical Drafter Manufacturing", date: "Jun 2025 - Sekarang", items: [
                    "Membuat sistem pendataan molding beserta jangka waktu pakai (lifetime usage) untuk mendukung preventive maintenance dan mengurangi downtime produksi",
                    "Menyatukan berbagai variasi pengaturan molding menjadi 1 standar variasi, sehingga mempermudah operator dan menekan risiko kesalahan setting",
                    "Berhasil mempercepat proses kerja operator bubut dengan membuat drawing detail yang lebih jelas, sehingga mengurangi waktu setup hingga 15% lebih cepat"
                ] },
                { id: "experience2", title: "Staff Produksi", date: "Jun 2024 - Jun 2025", items: [
                    "Menganalisis dan menurunkan tingkat overconsumption material melalui evaluasi data penggunaan bahan, identifikasi penyebab pemborosan, dan koordinasi dengan tim terkait untuk perbaikan proses",
                    "Menurunkan non-conformance bahan Div. Produksi dengan cara melakukan monitoring bahan",
                    "Meningkatkan productivity penggunaan bahan WIP dari 2 Ton menjadi 724,5 kg dalam kurun waktu Desember 2024-Maret 2025 dengan cara membuat monitoring Stock WIP dan planning item Produksi",
                    "Menurunkan reject Div. Produksi pada mesin spiral dari 8% menjadi 3% dengan cara melakukan TFT (Task force Team)"
                ] }
            ]
        },
        work: {
            title: "Work",
            description: "Dokumentasi pekerjaan dan proyek",
            items: [
                { id: "work1", title: "Standarisasi Molding Setting", date: "15/03/2025", category: "Mechanical Drafting", description: "Menyatukan berbagai variasi pengaturan molding menjadi 1 standar variasi, sehingga mempermudah operator dan menekan risiko kesalahan setting", image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "work2", title: "Monitoring WIP Inventory", date: "20/02/2025", category: "Production Work", description: "Membuat sistem monitoring stock WIP dan planning item produksi untuk meningkatkan productivity penggunaan bahan dari 2 Ton menjadi 724,5 kg", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "work3", title: "Reduksi Reject Mesin Spiral", date: "10/01/2025", category: "Quality Control", description: "Melakukan TFT (Task Force Team) untuk menurunkan reject dari 8% menjadi 3% pada mesin spiral melalui analisis akar masalah dan perbaikan proses", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "work4", title: "Optimasi Material Management", date: "05/04/2025", category: "Process Improvement", description: "Pelatihan manajemen material untuk mengurangi overconsumption dan meningkatkan efisiensi penggunaan bahan produksi", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "work5", title: "Preventive Maintenance System", date: "25/03/2025", category: "Maintenance", description: "Implementasi sistem preventive maintenance berdasarkan lifetime usage molding untuk mengurangi downtime produksi", image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "work6", title: "Production Planning Meeting", date: "12/04/2025", category: "Production Work", description: "Rutinitas meeting perencanaan produksi untuk koordinasi tim dan evaluasi progress pekerjaan", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ],
            categories: ["Mechanical Drafting", "Production Work", "Quality Control", "Process Improvement", "Maintenance"]
        },
        achievements: {
            title: "Achievements",
            description: "Pencapaian dan sertifikat profesional",
            items: [
                { id: "achievement1", title: "Health, Safety, Environment and Quality (HSEQ)", date: "Sertifikasi Profesional", description: "Sertifikasi profesional dalam bidang kesehatan, keselamatan, lingkungan, dan kualitas untuk industri manufaktur", image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "achievement2", title: "Introduction to Information Security Course", date: "Sertifikasi Keamanan Informasi", description: "Sertifikasi dasar keamanan informasi untuk memahami prinsip-prinsip keamanan data dalam sistem produksi", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "achievement3", title: "Lean Manufacturing Workshop", date: "Workshop 2024", description: "Workshop implementasi lean manufacturing untuk meningkatkan efisiensi dan mengurangi waste dalam proses produksi", image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" },
                { id: "achievement4", title: "Technical Drawing Excellence Award", date: "Penghargaan Internal 2025", description: "Penghargaan untuk detail dan akurasi gambar teknik yang membantu mempercepat proses setup mesin", image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" }
            ]
        },
        projects: {
            title: "Projects",
            description: "Proyek dan portofolio pekerjaan",
            items: [
                { id: "project1", title: "Sistem Pendataan Molding", description: "Membuat sistem pendataan molding beserta jangka waktu pakai (lifetime usage) untuk mendukung preventive maintenance dan mengurangi downtime produksi", stats: [ { value: "100%", label: "Data Manual" }, { value: "↓ 40%", label: "Downtime", type: "improvement" }, { value: "15%", label: "Setup Time ↓" } ] },
                { id: "project2", title: "Optimasi Produksi WIP", description: "Meningkatkan productivity penggunaan bahan WIP dari 2 Ton menjadi 724,5 kg dengan monitoring Stock WIP dan planning item Produksi", stats: [ { value: "2 Ton", label: "Sebelum" }, { value: "↓ 63.8%", label: "Pengurangan", type: "improvement" }, { value: "724.5 kg", label: "Sesudah" } ] },
                { id: "project3", title: "Reduksi Reject Mesin Spiral", description: "Menurunkan reject Div. Produksi pada mesin spiral dari 8% menjadi 3% dengan cara melakukan TFT (Task force Team)", stats: [ { value: "8%", label: "Sebelum" }, { value: "↓ 62.5%", label: "Penurunan", type: "reduction" }, { value: "3%", label: "Sesudah" } ] }
            ]
        },
        dashboard: {
            title: "Dashboard",
            description: "Statistik dan metrik performa",
            periods: [
                { id: "staffPeriod", title: "Staff Production", date: "Jun 2024 - Jun 2025", stats: [ { id: "staffStat1", value: "60%", label: "Penurunan Reject Material" }, { id: "staffStat2", value: "63.8%", label: "Pengurangan WIP Inventory" }, { id: "staffStat3", value: "62.5%", label: "Penurunan Reject Mesin Spiral" }, { id: "staffStat4", value: "90%", label: "Kesesuaian Dokumen (KPH)" } ] },
                { id: "drafterPeriod", title: "Mechanical Drafter", date: "Jun 2025 - Sekarang", stats: [ { id: "drafterStat1", value: "15%", label: "Pengurangan Waktu Setup" }, { id: "drafterStat2", value: "40%", label: "Pengurangan Downtime" }, { id: "drafterStat3", value: "67%", label: "Pengurangan Lead Time" }, { id: "drafterStat4", value: "100%", label: "Standarisasi Molding Setting" } ] }
            ]
        },
        contact: {
            title: "Contact",
            description: "Hubungi saya untuk kolaborasi",
            items: [
                { id: "contactEmail", type: "email", value: "aryasavarinasah@gmail.com", icon: "fas fa-envelope", label: "Email" },
                { id: "contactPhone", type: "phone", value: "089520336532", icon: "fas fa-phone", label: "Telepon" },
                { id: "contactLocation", type: "location", value: "Kosambi, Indonesia", icon: "fas fa-map-marker-alt", label: "Lokasi" },
                { id: "contactLinkedin", type: "linkedin", value: "linkedin.com/in/arya-savariansah", icon: "fab fa-linkedin", label: "LinkedIn" }
            ]
        }
    }
};

// Konfigurasi Admin
const ADMIN_PASSWORD = "arya2025";
let isAdminLoggedIn = false;
let isEditMode = false;
let currentPage = "home";
let currentUploadType = null;
let currentItemId = null;

// Variabel untuk modal upload Work
let currentImageFile = null;
let currentImageUrl = null;

// Variabel efek
let rainEffectActive = false;
let starfallEffectActive = false;
let currentEffectPage = null;

// ==================== HELPER FUNCTIONS ====================
function $(id) { return document.getElementById(id); }

function showNotification(msg, type = 'info') {
    const notif = $('notification');
    notif.textContent = msg;
    if (type === 'success') notif.style.background = 'var(--gradient-gold)';
    else if (type === 'error') notif.style.background = 'linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)';
    else notif.style.background = 'var(--gradient-gold)';
    notif.style.display = 'block';
    setTimeout(() => notif.style.display = 'none', 3000);
}

function showLoading(text = 'Loading...') {
    $('loadingText').textContent = text;
    $('loadingOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function hideLoading() {
    $('loadingOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
    hideProgress();
}

function showProgress() {
    $('uploadProgress').style.display = 'block';
    $('uploadPercentageOld').style.display = 'block';
}

function hideProgress() {
    $('uploadProgress').style.display = 'none';
    $('uploadPercentageOld').style.display = 'none';
    $('progressBar').style.width = '0%';
    $('uploadPercentageOld').textContent = '0%';
}

function updateProgress(p) {
    $('progressBar').style.width = p + '%';
    $('uploadPercentageOld').textContent = Math.round(p) + '%';
}

// ==================== LOAD & SAVE ====================
function loadFromLocalStorage() {
    const saved = localStorage.getItem('portfolioData');
    if (saved) {
        try {
            Object.assign(appData, JSON.parse(saved));
        } catch (e) { console.error("Error loading data:", e); }
    }
}

function saveToLocalStorage() {
    try {
        localStorage.setItem('portfolioData', JSON.stringify(appData));
        showNotification('Data berhasil disimpan!', 'success');
    } catch (e) {
        showNotification('Gagal menyimpan data: ' + e.message, 'error');
    }
}

// ==================== RENDER PROFILE ====================
function renderProfileImage() {
    const profileImg = $('profileImg');
    const profileIcon = $('profileIcon');
    if (appData.user.profileImage) {
        profileImg.style.background = 'none';
        profileImg.innerHTML = `<img src="${appData.user.profileImage}" alt="Profile" style="width:100%;height:100%;object-fit:cover;">`;
        if (profileIcon) profileIcon.style.display = 'none';
    } else {
        profileImg.style.background = 'var(--gradient-gold)';
        profileImg.innerHTML = `<div class="profile-img-placeholder"><i class="fas fa-user-tie" id="profileIcon"></i></div>`;
    }
}

// ==================== NAVIGATION ====================
function setupNavigation() {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.dataset.page;
            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            changePage(page);
            if (window.innerWidth <= 768) {
                $('sidebar').classList.remove('active');
                $('mobileMenuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

function changePage(pageId) {
    if (rainEffectActive) toggleRainEffect();
    if (starfallEffectActive) toggleStarfallEffect();
    hideEffectToggle();

    document.querySelectorAll('.page').forEach(p => {
        if (p.classList.contains('active')) {
            p.style.opacity = '0';
            p.style.transform = 'translateY(30px)';
            setTimeout(() => {
                p.classList.remove('active');
                p.style.opacity = '';
                p.style.transform = '';
            }, 300);
        }
    });

    setTimeout(() => {
        const pageEl = $(pageId + 'Page');
        if (pageEl) {
            pageEl.style.opacity = '0';
            pageEl.style.transform = 'translateY(30px)';
            pageEl.classList.add('active');
            setTimeout(() => {
                pageEl.style.opacity = '1';
                pageEl.style.transform = 'translateY(0)';
            }, 50);
            currentPage = pageId;
            const pd = appData.pages[pageId];
            if (pd) {
                $('currentPageTitle').textContent = pd.title;
                $('currentPageDesc').textContent = pd.description;
            }
            renderPage(pageId);
            document.querySelector('.main-content').scrollTop = 0;
            setupContentHeight();
            updateAdminUI();
            if (pageId === 'home') { createParticles(); setTimeout(centerHeroContent, 100); }
            if (pageId === 'about' || pageId === 'chatroom') {
                setTimeout(() => {
                    showEffectToggle(pageId === 'about' ? 'Rain Effect' : 'Starfall Effect', pageId === 'about' ? 'fas fa-cloud-rain' : 'fas fa-star');
                }, 500);
            } else hideEffectToggle();
        }
    }, 300);
}

function renderPage(pageId) {
    const pd = appData.pages[pageId];
    if (!pd) return;
    switch(pageId) {
        case 'home': renderHomePage(); break;
        case 'about': renderAboutPage(); break;
        case 'work': renderWorkPage(); break;
        case 'achievements': renderAchievementsPage(); break;
        case 'projects': renderProjectsPage(); break;
        case 'dashboard': renderDashboardPage(); break;
        case 'contact': renderContactPage(); break;
    }
}

// ==================== RENDER HOME ====================
function renderHomePage() {
    const d = appData.pages.home;
    setText('homeBadge', d.badge);
    setText('homeTitle', d.mainTitle);
    const sub = $('homeSubtitle');
    if (sub) sub.innerHTML = `<i class="fas fa-star" style="color: var(--primary); margin-right: 10px;"></i> ${d.subtitle} <i class="fas fa-star" style="color: var(--primary); margin-left: 10px;"></i>`;
    setText('homeDescription', d.descriptionText);
    d.stats.forEach((s, i) => {
        setText(`stat${i+1}Number`, s.number);
        setText(`stat${i+1}Label`, s.label);
    });
}

function setText(id, val) { const el = $(id); if (el) el.textContent = val; }

// ==================== RENDER ABOUT ====================
function renderAboutPage() {
    const d = appData.pages.about;
    d.sections.forEach(s => { const el = $(s.id); if (el) el.innerHTML = `<p>${s.content}</p>`; });
    renderSkills();
    renderExperiences();
}

function renderSkills() {
    const d = appData.pages.about.skills;
    const tech = document.querySelector('#technicalSkills .skill-items');
    if (tech) tech.innerHTML = d.technical.map(s => `<div class="skill-item">${s}</div>`).join('');
    const pers = document.querySelector('#personalSkills .skill-items');
    if (pers) pers.innerHTML = d.personal.map(s => `<div class="skill-item">${s}</div>`).join('');
}

function renderExperiences() {
    const d = appData.pages.about.experiences;
    const timeline = document.querySelector('.experience-timeline');
    if (!timeline) return;
    // Hapus yang lama selain 2 default
    const items = timeline.querySelectorAll('.experience-item:not(#experience1):not(#experience2)');
    items.forEach(el => el.remove());
    d.forEach((exp, idx) => {
        let el = $(exp.id);
        if (!el && idx >= 2) {
            el = document.createElement('div');
            el.className = 'experience-item editable';
            el.id = exp.id;
            el.innerHTML = `
                <div class="experience-header"><h3 class="experience-title">${exp.title}</h3><div class="experience-date">${exp.date}</div></div>
                <div class="experience-content"><ul>${exp.items.map(i => `<li>${i}</li>`).join('')}</ul></div>
                <button class="edit-btn" data-edit="${exp.id}">Edit</button>
                <button class="delete-btn" data-delete="${exp.id}" data-type="experience">Hapus</button>
            `;
            const addBtn = timeline.querySelector('[data-add="experience"]');
            if (addBtn) timeline.insertBefore(el, addBtn);
            else timeline.appendChild(el);
        } else if (el) {
            el.querySelector('.experience-title').textContent = exp.title;
            el.querySelector('.experience-date').textContent = exp.date;
            el.querySelector('.experience-content ul').innerHTML = exp.items.map(i => `<li>${i}</li>`).join('');
        }
    });
}

// ==================== RENDER WORK ====================
function renderWorkPage() {
    const items = appData.pages.work.items;
    const container = $('workContainer');
    if (!container) return;
    container.innerHTML = '';
    const sorted = [...items].sort((a,b) => (b.date || '').localeCompare(a.date || ''));
    sorted.forEach(item => container.appendChild(createWorkCard(item)));
    const addBtn = $('addWorkBtn');
    if (addBtn) addBtn.style.display = (isAdminLoggedIn || isEditMode) ? 'inline-block' : 'none';
}

function createWorkCard(item) {
    const card = document.createElement('div');
    card.className = 'work-card editable';
    card.id = item.id;
    const imgHTML = item.image ? 
        `<div class="work-image-container"><img src="${item.image}" alt="${item.title}" class="work-image"><div class="work-upload-overlay"><div><i class="fas fa-camera" style="font-size:2rem;margin-bottom:10px;"></i><br>${isAdminLoggedIn||isEditMode?'Klik untuk ganti foto':'Klik untuk zoom'}</div></div><div class="category-badge">${item.category||'Work'}</div></div>` :
        `<div class="work-image-container"><div class="work-image-placeholder"><i class="fas fa-camera"></i></div><div class="work-upload-overlay"><div><i class="fas fa-camera" style="font-size:2rem;margin-bottom:10px;"></i><br>${isAdminLoggedIn||isEditMode?'Klik untuk upload foto':'No image available'}</div></div><div class="category-badge">${item.category||'Work'}</div></div>`;
    card.innerHTML = `${imgHTML}<h3>${item.title}</h3><div class="date"><i class="far fa-calendar"></i> ${item.date}</div><p>${item.description}</p>${isAdminLoggedIn||isEditMode?`<button class="edit-btn" data-edit="${item.id}">Edit</button><button class="delete-btn" data-delete="${item.id}" data-type="work">Hapus</button>`:''}`;
    card.querySelector('.work-image-container')?.addEventListener('click', function(e) {
        if (e.target.classList.contains('work-image')) {
            const title = card.querySelector('h3').textContent;
            openZoom(e.target.src, title);
            return;
        }
        if (isAdminLoggedIn || isEditMode) openImageUploadModal('work', item.id);
        else {
            const img = this.querySelector('.work-image');
            if (img && img.src) openZoom(img.src, card.querySelector('h3').textContent);
        }
    });
    return card;
}

function editWorkItem(id) {
    if (!isAdminLoggedIn && !isEditMode) { showNotification('Silakan login sebagai admin', 'error'); return; }
    openWorkUploadModal(id);
}

function deleteWorkItem(id) {
    if (!confirm('Hapus pekerjaan ini?')) return;
    showLoading('Menghapus...');
    const idx = appData.pages.work.items.findIndex(i => i.id === id);
    if (idx !== -1) appData.pages.work.items.splice(idx, 1);
    renderWorkPage();
    saveToLocalStorage();
    hideLoading();
    showNotification('Pekerjaan dihapus', 'success');
}

// ==================== RENDER ACHIEVEMENTS ====================
function renderAchievementsPage() {
    const items = appData.pages.achievements.items;
    const container = $('achievementsContainer');
    if (!container) return;
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'achievement-card editable';
        card.id = item.id;
        const imgHTML = item.image ?
            `<div class="achievement-image-container" data-upload="${item.id}"><img src="${item.image}" alt="${item.title}" class="achievement-image"><div class="achievement-upload-overlay"><div><i class="fas fa-camera" style="font-size:2rem;margin-bottom:10px;"></i><br>${isAdminLoggedIn||isEditMode?'Klik untuk ganti foto':'Klik untuk zoom'}</div></div></div>` :
            `<div class="achievement-image-container" data-upload="${item.id}"><div class="achievement-image-placeholder"><i class="fas fa-trophy"></i></div><div class="achievement-upload-overlay"><div><i class="fas fa-camera" style="font-size:2rem;margin-bottom:10px;"></i><br>${isAdminLoggedIn||isEditMode?'Klik untuk upload foto':'No image available'}</div></div></div>`;
        card.innerHTML = `${imgHTML}<h3>${item.title}</h3><div class="date">${item.date}</div><p>${item.description}</p><button class="edit-btn" data-edit="${item.id}">Edit</button><button class="delete-btn" data-delete="${item.id}" data-type="achievement">Hapus</button>`;
        container.appendChild(card);
    });
    document.querySelectorAll('.achievement-image-container').forEach(cont => {
        cont.addEventListener('click', function(e) {
            if (e.target.classList.contains('achievement-image')) {
                const title = this.closest('.achievement-card').querySelector('h3').textContent;
                openZoom(e.target.src, title);
                return;
            }
            if (isAdminLoggedIn || isEditMode) openImageUploadModal('achievement', this.dataset.upload);
            else {
                const img = this.querySelector('.achievement-image');
                if (img && img.src) openZoom(img.src, this.closest('.achievement-card').querySelector('h3').textContent);
            }
        });
    });
}

// ==================== RENDER PROJECTS ====================
function renderProjectsPage() {
    const items = appData.pages.projects.items;
    const container = $('projectsContainer');
    if (!container) return;
    container.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'project-card editable';
        card.id = item.id;
        let statsHTML = '';
        if (item.stats) {
            statsHTML = `<div class="project-stats">${item.stats.map(s => `<div class="stat"><span class="stat-value ${s.type||''}">${s.value}</span><span class="stat-label">${s.label}</span></div>`).join('')}</div>`;
        }
        card.innerHTML = `<h3><i class="fas fa-project-diagram"></i> ${item.title}</h3><p>${item.description}</p>${statsHTML}<button class="edit-btn" data-edit="${item.id}">Edit</button><button class="delete-btn" data-delete="${item.id}" data-type="project">Hapus</button>`;
        container.appendChild(card);
    });
}

// ==================== RENDER DASHBOARD ====================
function renderDashboardPage() {
    const periods = appData.pages.dashboard.periods;
    periods.forEach(p => {
        const el = $(p.id);
        if (!el) return;
        const title = el.querySelector('.period-title');
        if (title) title.textContent = p.title;
        const date = el.querySelector('.period-date');
        if (date) date.innerHTML = `<i class="far fa-calendar"></i> ${p.date}`;
        p.stats.forEach(s => {
            const statEl = $(s.id);
            if (statEl) {
                const val = statEl.querySelector('.period-stat-value');
                const lbl = statEl.querySelector('.period-stat-label');
                if (val) val.textContent = s.value;
                if (lbl) lbl.textContent = s.label;
                if (p.id === 'staffPeriod') val?.classList.add('staff');
                else val?.classList.add('drafter');
            }
        });
    });
}

// ==================== RENDER CONTACT ====================
function renderContactPage() {
    const items = appData.pages.contact.items;
    items.forEach(i => { const el = $(i.id); if (el) el.querySelector('p').textContent = i.value; });
}

// ==================== EDIT MODE DELEGATION ====================
function setupEditModeDelegation() {
    if (window._editModeAttached) return;
    window._editModeAttached = true;

    document.addEventListener('click', e => {
        if (!isEditMode) return;
        const btn = e.target.closest('.edit-btn');
        if (!btn) return;
        e.preventDefault();
        const id = btn.dataset.edit;
        const el = $(id);
        if (!el) return;
        if (el.classList.contains('skill-category')) editSkills(id);
        else if (el.classList.contains('experience-item')) editExperience(id);
        else if (el.classList.contains('achievement-card')) editAchievement(id);
        else if (el.classList.contains('project-card')) editProject(id);
        else if (el.classList.contains('stat-card') || id.startsWith('staffStat') || id.startsWith('drafterStat')) editStat(id);
        else if (el.classList.contains('contact-card')) editContact(id);
        else if (el.classList.contains('period-section')) editPeriod(id);
        else if (el.classList.contains('work-card')) editWorkItem(id);
        else editText(id);
    });

    document.addEventListener('click', e => {
        if (!isEditMode) return;
        const btn = e.target.closest('.delete-btn');
        if (!btn) return;
        e.preventDefault();
        const id = btn.dataset.delete;
        const type = btn.dataset.type;
        if (type === 'experience') deleteExperience(id);
        else if (type === 'achievement') deleteAchievement(id);
        else if (type === 'project') deleteProject(id);
        else if (type === 'work') deleteWorkItem(id);
    });

    document.addEventListener('click', e => {
        if (!isEditMode) return;
        const btn = e.target.closest('.add-btn');
        if (!btn) return;
        e.preventDefault();
        const type = btn.dataset.add;
        if (type === 'technicalSkills' || type === 'personalSkills') addSkill(type);
        else if (type === 'experience') addExperience();
        else if (type === 'achievement') addAchievement();
        else if (type === 'project') addProject();
        else if (type === 'work') openWorkUploadModal();
    });
}

// ==================== FUNGSI EDIT ====================
function editText(id) {
    const el = $(id);
    if (!el) return;
    const newText = prompt('Edit teks:', el.textContent);
    if (newText === null || newText === el.textContent) return;
    el.textContent = newText;
    // Update appData jika perlu
    let updated = false;
    const statMatch = id.match(/stat(\d+)(Number|Label)/);
    if (statMatch) {
        const idx = parseInt(statMatch[1]) - 1;
        if (appData.pages.home.stats[idx]) {
            if (statMatch[2] === 'Number') appData.pages.home.stats[idx].number = newText;
            else appData.pages.home.stats[idx].label = newText;
            updated = true;
        }
    } else if (id === 'homeBadge') { appData.pages.home.badge = newText; updated = true; }
    else if (id === 'homeTitle') { appData.pages.home.mainTitle = newText; updated = true; }
    else if (id === 'homeSubtitle') { appData.pages.home.subtitle = newText; updated = true; }
    else if (id === 'homeDescription') { appData.pages.home.descriptionText = newText; updated = true; }
    else if (id === 'aboutText1') { appData.pages.about.sections[0].content = newText; updated = true; }
    else if (id === 'aboutText2') { appData.pages.about.sections[1].content = newText; updated = true; }
    if (updated) saveToLocalStorage();
}

function editPeriod(id) {
    const p = appData.pages.dashboard.periods.find(per => per.id === id);
    if (!p) return;
    const t = prompt('Judul periode:', p.title); if (t===null) return;
    const d = prompt('Rentang tanggal:', p.date); if (d===null) return;
    p.title = t; p.date = d;
    renderDashboardPage(); saveToLocalStorage();
}

function editSkills(id) {
    const isTech = id === 'technicalSkills';
    const skills = isTech ? appData.pages.about.skills.technical : appData.pages.about.skills.personal;
    const newSkills = prompt('Edit skill (satu per baris):', skills.join('\n'));
    if (newSkills === null) return;
    const arr = newSkills.split('\n').filter(s => s.trim()!=='');
    if (isTech) appData.pages.about.skills.technical = arr;
    else appData.pages.about.skills.personal = arr;
    renderSkills(); saveToLocalStorage();
}

function addSkill(type) {
    const isTech = type === 'technicalSkills';
    const skill = prompt('Skill baru:');
    if (skill && skill.trim()!=='') {
        if (isTech) appData.pages.about.skills.technical.push(skill.trim());
        else appData.pages.about.skills.personal.push(skill.trim());
        renderSkills(); saveToLocalStorage();
    }
}

function editStat(id) {
    const el = $(id);
    if (!el) return;
    let num, lbl;
    if (el.classList.contains('period-stat')) {
        num = el.querySelector('.period-stat-value');
        lbl = el.querySelector('.period-stat-label');
    } else if (el.classList.contains('stat-card')) {
        num = el.querySelector('.stat-number');
        lbl = el.querySelector('.stat-label');
    } else return;
    const newNum = prompt('Edit angka:', num.textContent);
    if (newNum === null) return;
    const newLbl = prompt('Edit label:', lbl.textContent);
    if (newLbl === null) return;
    num.textContent = newNum;
    lbl.textContent = newLbl;
    // Update data
    if (id.startsWith('staffStat') || id.startsWith('drafterStat')) {
        const period = appData.pages.dashboard.periods.find(p => p.stats.some(s => s.id === id));
        if (period) {
            const s = period.stats.find(s => s.id === id);
            if (s) { s.value = newNum; s.label = newLbl; }
        }
    } else if (id.startsWith('stat')) {
        const idx = parseInt(id.replace('stat','').replace('Number','').replace('Label','')) - 1;
        if (id.includes('Number')) appData.pages.home.stats[idx].number = newNum;
        else appData.pages.home.stats[idx].label = newLbl;
    }
    saveToLocalStorage();
}

function editContact(id) {
    const c = appData.pages.contact.items.find(i => i.id === id);
    if (!c) return;
    const newVal = prompt(`Edit ${c.label}:`, c.value);
    if (newVal !== null && newVal !== c.value) {
        c.value = newVal;
        const el = $(id);
        if (el) el.querySelector('p').textContent = newVal;
        saveToLocalStorage();
    }
}

function editExperience(id) {
    const e = appData.pages.about.experiences.find(exp => exp.id === id);
    if (!e) return;
    const t = prompt('Judul:', e.title); if (t===null) return;
    const d = prompt('Periode:', e.date); if (d===null) return;
    const items = e.items.join('\n');
    const newItems = prompt('Poin-poin (satu per baris):', items);
    if (newItems===null) return;
    e.title = t; e.date = d; e.items = newItems.split('\n').filter(s => s.trim()!=='');
    renderExperiences(); saveToLocalStorage();
}

function deleteExperience(id) {
    if (!confirm('Hapus pengalaman?')) return;
    showLoading('Menghapus...');
    setTimeout(() => {
        const idx = appData.pages.about.experiences.findIndex(e => e.id === id);
        if (idx !== -1) appData.pages.about.experiences.splice(idx,1);
        renderExperiences(); saveToLocalStorage(); hideLoading(); showNotification('Pengalaman dihapus','success');
    }, 300);
}

function addExperience() {
    const t = prompt('Judul:'); if (!t) return;
    const d = prompt('Periode:'); if (!d) return;
    const items = prompt('Poin-poin (satu per baris):'); if (!items) return;
    const newId = 'experience' + (appData.pages.about.experiences.length+1);
    appData.pages.about.experiences.push({ id:newId, title:t, date:d, items:items.split('\n').filter(s=>s.trim()!=='') });
    renderExperiences(); saveToLocalStorage(); showNotification('Pengalaman ditambahkan','success');
}

function editAchievement(id) {
    const a = appData.pages.achievements.items.find(i => i.id === id);
    if (!a) return;
    const t = prompt('Judul:', a.title); if (t===null) return;
    const d = prompt('Tanggal:', a.date); if (d===null) return;
    const desc = prompt('Deskripsi:', a.description); if (desc===null) return;
    a.title = t; a.date = d; a.description = desc;
    renderAchievementsPage(); saveToLocalStorage(); showNotification('Pencapaian diperbarui','success');
}

function deleteAchievement(id) {
    if (!confirm('Hapus pencapaian?')) return;
    showLoading('Menghapus...');
    setTimeout(() => {
        const idx = appData.pages.achievements.items.findIndex(i => i.id === id);
        if (idx !== -1) appData.pages.achievements.items.splice(idx,1);
        renderAchievementsPage(); saveToLocalStorage(); hideLoading(); showNotification('Pencapaian dihapus','success');
    }, 300);
}

function addAchievement() {
    const t = prompt('Judul:'); if (!t) return;
    const d = prompt('Tanggal:'); if (!d) return;
    const desc = prompt('Deskripsi:'); if (!desc) return;
    const newId = 'achievement' + (appData.pages.achievements.items.length+1);
    appData.pages.achievements.items.push({ id:newId, title:t, date:d, description:desc, image:null });
    renderAchievementsPage(); saveToLocalStorage(); showNotification('Pencapaian ditambahkan','success');
}

function editProject(id) {
    const p = appData.pages.projects.items.find(i => i.id === id);
    if (!p) return;
    const t = prompt('Judul:', p.title); if (t===null) return;
    const d = prompt('Deskripsi:', p.description); if (d===null) return;
    p.title = t; p.description = d;
    renderProjectsPage(); saveToLocalStorage(); showNotification('Proyek diperbarui','success');
}

function deleteProject(id) {
    if (!confirm('Hapus proyek?')) return;
    showLoading('Menghapus...');
    setTimeout(() => {
        const idx = appData.pages.projects.items.findIndex(i => i.id === id);
        if (idx !== -1) appData.pages.projects.items.splice(idx,1);
        renderProjectsPage(); saveToLocalStorage(); hideLoading(); showNotification('Proyek dihapus','success');
    }, 300);
}

function addProject() {
    const t = prompt('Judul:'); if (!t) return;
    const d = prompt('Deskripsi:'); if (!d) return;
    const s1v = prompt('Stat 1 nilai:'); const s1l = prompt('Stat 1 label:');
    const s2v = prompt('Stat 2 nilai:'); const s2l = prompt('Stat 2 label:'); const s2t = prompt('Tipe stat 2 (improvement/reduction) atau kosong:');
    const s3v = prompt('Stat 3 nilai:'); const s3l = prompt('Stat 3 label:');
    const newId = 'project' + (appData.pages.projects.items.length+1);
    const stats = [
        { value: s1v, label: s1l },
        { value: s2v, label: s2l, type: s2t || '' },
        { value: s3v, label: s3l }
    ];
    appData.pages.projects.items.push({ id:newId, title:t, description:d, stats });
    renderProjectsPage(); saveToLocalStorage(); showNotification('Proyek ditambahkan','success');
}

// ==================== ADMIN PANEL ====================
function setupAdminPanel() {
    $('adminToggle').addEventListener('click', e => {
        e.stopPropagation();
        $('adminPanel').classList.toggle('active');
    });
    document.addEventListener('click', e => {
        if (!e.target.closest('.admin-panel') && !e.target.closest('.admin-toggle'))
            $('adminPanel').classList.remove('active');
    });
    $('adminLogin').addEventListener('click', () => {
        if ($('adminPassword').value === ADMIN_PASSWORD) {
            isAdminLoggedIn = true;
            $('adminControls').style.display = 'block';
            $('adminPassword').value = '';
            showNotification('Login admin berhasil!', 'success');
            updateAdminUI();
            $('adminPanel').classList.remove('active');
            if (window.innerWidth <= 768) {
                $('sidebar').classList.remove('active');
                $('mobileMenuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        } else showNotification('Password salah!', 'error');
    });
    $('adminLogout').addEventListener('click', () => {
        isAdminLoggedIn = false; isEditMode = false;
        $('adminControls').style.display = 'none';
        document.body.classList.remove('admin-mode');
        $('editStatus').style.display = 'none';
        showNotification('Logout berhasil', 'info');
        updateAdminUI();
    });
    $('toggleEditMode').addEventListener('click', () => {
        if (!isAdminLoggedIn) { showNotification('Login dulu', 'error'); return; }
        isEditMode = !isEditMode;
        document.body.classList.toggle('admin-mode', isEditMode);
        $('editStatus').style.display = isEditMode ? 'block' : 'none';
        $('toggleEditMode').textContent = isEditMode ? 'Nonaktifkan Edit Mode' : 'Aktifkan Edit Mode';
        if (!isEditMode) renderPage(currentPage);
    });
    $('saveAllData').addEventListener('click', () => {
        if (!isAdminLoggedIn) { showNotification('Login dulu', 'error'); return; }
        showLoading('Menyimpan data...');
        setTimeout(() => { saveToLocalStorage(); hideLoading(); }, 500);
    });
}

function updateAdminUI() {
    const toggle = $('adminToggle');
    const float = $('floatingAddBtn');
    if (isAdminLoggedIn) {
        toggle.innerHTML = '<i class="fas fa-user-check"></i> Admin Mode';
        toggle.style.background = 'var(--gradient-gold)';
        toggle.style.color = '#000';
        document.body.classList.add('admin-mode');
        float.style.display = (currentPage === 'work') ? 'flex' : 'none';
    } else {
        toggle.innerHTML = '<i class="fas fa-user-lock"></i> Login Admin';
        toggle.style.background = 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)';
        toggle.style.color = 'var(--primary)';
        document.body.classList.remove('admin-mode');
        float.style.display = 'none';
    }
    $('editStatus').style.display = isEditMode ? 'block' : 'none';
}

// ==================== CHAT ====================
function setupChat() {
    $('sendMessage').addEventListener('click', sendMessage);
    $('chatInput').addEventListener('keypress', e => { if (e.key === 'Enter') sendMessage(); });
}
function sendMessage() {
    const input = $('chatInput');
    const msg = input.value.trim();
    if (!msg) return;
    const chat = $('chatMessages');
    const now = new Date();
    const time = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes().toString().padStart(2,'0')}`;
    const div = document.createElement('div');
    div.className = 'message user';
    div.innerHTML = `<div class="message-info"><span class="message-user">You</span><span class="message-time">${time}</span></div><div class="message-content">${msg}</div>`;
    chat.appendChild(div);
    input.value = '';
    chat.scrollTop = chat.scrollHeight;
    setTimeout(() => {
        const replies = ["Thanks!","Interesting!","I appreciate your feedback!","Great point!"];
        const reply = replies[Math.floor(Math.random()*replies.length)];
        const rdiv = document.createElement('div');
        rdiv.className = 'message';
        rdiv.innerHTML = `<div class="message-info"><span class="message-user">Arya Savariansah</span><span class="message-time">${time}</span></div><div class="message-content">${reply}</div>`;
        chat.appendChild(rdiv);
        chat.scrollTop = chat.scrollHeight;
    }, 1000);
}

// ==================== CONTACT FORM ====================
function setupContactForm() {
    $('contactForm').addEventListener('submit', e => {
        e.preventDefault();
        const name = $('name').value;
        const email = $('email').value;
        showLoading('Mengirim pesan...');
        setTimeout(() => {
            alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
            $('contactForm').reset();
            hideLoading();
        }, 1000);
    });
}

// ==================== MOBILE MENU ====================
function setupMobileMenu() {
    const toggle = $('mobileMenuToggle');
    const sidebar = $('sidebar');
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        toggle.innerHTML = sidebar.classList.contains('active') ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
    });
    document.addEventListener('click', e => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active') && !sidebar.contains(e.target) && !toggle.contains(e.target)) {
            sidebar.classList.remove('active');
            toggle.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
}

// ==================== RESPONSIVE ====================
function setupResponsiveBehavior() {
    function handleResize() {
        const w = window.innerWidth;
        const sidebar = $('sidebar');
        const main = $('mainContent');
        const float = $('floatingAddBtn');
        const effect = $('effectToggle');
        if (w > 768) {
            sidebar.classList.remove('active');
            sidebar.style.transform = 'translateX(0)';
            $('mobileMenuToggle').style.display = 'none';
            main.style.position = 'fixed';
            main.style.right = '0';
            main.style.left = 'auto';
            main.style.width = `calc(100% - ${sidebar.offsetWidth || 280}px)`;
            if (float && isAdminLoggedIn && currentPage === 'work') {
                float.style.top = '100px';
                float.style.right = '40px';
                float.style.bottom = 'auto';
            }
            if (effect && (currentPage === 'about' || currentPage === 'chatroom')) {
                effect.style.bottom = '100px';
                effect.style.right = '40px';
                effect.style.top = 'auto';
            }
        } else {
            $('mobileMenuToggle').style.display = 'block';
            main.style.position = 'fixed';
            main.style.left = '0';
            main.style.right = '0';
            main.style.width = '100%';
            if (float && isAdminLoggedIn && currentPage === 'work') {
                float.style.top = 'auto';
                float.style.bottom = '30px';
                float.style.right = '20px';
            }
            if (effect && (currentPage === 'about' || currentPage === 'chatroom')) {
                effect.style.top = 'auto';
                effect.style.bottom = '80px';
                effect.style.right = '20px';
            }
        }
        setTimeout(setupContentHeight, 100);
        setTimeout(centerHeroContent, 100);
    }
    window.addEventListener('resize', handleResize);
    handleResize();
}

// ==================== CONTENT HEIGHT ====================
function setupContentHeight() {
    const header = document.querySelector('.content-header');
    const active = document.querySelector('.page.active');
    const body = $('contentBody');
    if (header && active && body) {
        body.style.minHeight = Math.max(active.offsetHeight, window.innerHeight - header.offsetHeight) + 'px';
    }
}

// ==================== CENTER HERO ====================
function centerHeroContent() {
    const hero = document.querySelector('.home-hero');
    const content = document.querySelector('.hero-content');
    if (hero && content) {
        content.style.marginTop = '0';
        const heroH = hero.offsetHeight;
        const contH = content.offsetHeight;
        if (contH < heroH) content.style.marginTop = `${(heroH - contH)/2}px`;
    }
}

// ==================== PARTICLES ====================
function createParticles() {
    const container = $('particles');
    if (!container) return;
    container.innerHTML = '';
    for (let i=0; i<15; i++) {
        const p = document.createElement('div');
        p.className = 'particle';
        const s = Math.random()*4+2;
        p.style.width = s+'px'; p.style.height = s+'px';
        p.style.left = Math.random()*100+'%';
        p.style.top = Math.random()*100+'%';
        p.style.animationDelay = Math.random()*10+'s';
        p.style.animationDuration = Math.random()*10+10+'s';
        container.appendChild(p);
    }
}

// ==================== ZOOM MODAL ====================
function setupZoomModal() {
    const modal = $('zoomModal');
    $('closeZoom').addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('active'); document.body.style.overflow = 'auto'; } });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) { modal.classList.remove('active'); document.body.style.overflow = 'auto'; } });
}

function openZoom(src, caption = '') {
    if (!src) return;
    showLoading('Memuat gambar...');
    const img = new Image();
    img.onload = () => {
        $('zoomedImage').src = src;
        $('zoomCaption').textContent = caption;
        $('zoomedImage').classList.add('loaded');
        setTimeout(() => {
            $('zoomModal').classList.add('active');
            hideLoading();
            document.body.style.overflow = 'hidden';
        }, 300);
    };
    img.onerror = () => { hideLoading(); showNotification('Gagal memuat gambar', 'error'); };
    img.src = src;
}

// ==================== IMAGE UPLOAD MODAL (FOTO PROFILE, ACHIEVEMENT, WORK) ====================
function setupImageUploadModal() {
    const modal = $('imageUploadModal');
    $('profileUploadBtn').addEventListener('click', e => {
        e.stopPropagation();
        if (isAdminLoggedIn || isEditMode) openImageUploadModal('profile');
        else if (appData.user.profileImage) openZoom(appData.user.profileImage, 'Profile Picture');
    });
    $('imageInput').addEventListener('change', e => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 5*1024*1024) { showNotification('Maksimal 5MB','error'); return; }
            if (!file.type.match('image.*')) { showNotification('Hanya gambar','error'); return; }
            simulateUploadWithProgress(file, $('previewImage'), $('imagePreview'));
        }
    });
    $('saveImageBtn').addEventListener('click', () => {
        const preview = $('previewImage');
        if (!preview.src) return;
        showLoading('Menyimpan...');
        setTimeout(() => {
            if (currentUploadType === 'profile') {
                appData.user.profileImage = preview.src;
                renderProfileImage();
            } else if (currentUploadType === 'achievement' && currentItemId) {
                const a = appData.pages.achievements.items.find(i => i.id === currentItemId);
                if (a) a.image = preview.src;
                renderAchievementsPage();
            } else if (currentUploadType === 'work' && currentItemId) {
                const w = appData.pages.work.items.find(i => i.id === currentItemId);
                if (w) w.image = preview.src;
                renderWorkPage();
            }
            saveToLocalStorage();
            modal.classList.remove('active');
            resetUploadModal();
            hideLoading();
            showNotification('Foto berhasil disimpan','success');
        }, 300);
    });
    $('cancelImageBtn').addEventListener('click', () => { modal.classList.remove('active'); resetUploadModal(); });
    $('removeImageBtn').addEventListener('click', () => {
        showLoading('Menghapus...');
        setTimeout(() => {
            if (currentUploadType === 'profile') { appData.user.profileImage = null; renderProfileImage(); }
            else if (currentUploadType === 'achievement' && currentItemId) {
                const a = appData.pages.achievements.items.find(i => i.id === currentItemId);
                if (a) a.image = null;
                renderAchievementsPage();
            } else if (currentUploadType === 'work' && currentItemId) {
                const w = appData.pages.work.items.find(i => i.id === currentItemId);
                if (w) w.image = null;
                renderWorkPage();
            }
            saveToLocalStorage();
            modal.classList.remove('active');
            resetUploadModal();
            hideLoading();
            showNotification('Foto dihapus','success');
        }, 300);
    });
    modal.addEventListener('click', e => { if (e.target === modal) { modal.classList.remove('active'); resetUploadModal(); } });
}

function simulateUploadWithProgress(file, previewImg, previewDiv) {
    showLoading('Mengupload...');
    const reader = new FileReader();
    reader.onload = e => {
        previewImg.src = e.target.result;
        previewDiv.style.display = 'block';
        $('removeImageBtn').style.display = 'inline-block';
        hideLoading();
        showNotification('Gambar siap', 'success');
    };
    reader.readAsDataURL(file);
}

function resetUploadModal() {
    $('imageInput').value = '';
    $('imagePreview').style.display = 'none';
    $('previewImage').src = '';
    $('removeImageBtn').style.display = 'none';
    currentUploadType = null;
    currentItemId = null;
}

function openImageUploadModal(type, itemId = null) {
    if (!isAdminLoggedIn && !isEditMode) { showNotification('Login admin dulu','error'); return; }
    currentUploadType = type;
    currentItemId = itemId;
    const modal = $('imageUploadModal');
    const title = $('modalTitle');
    const removeBtn = $('removeImageBtn');
    const preview = $('previewImage');
    const previewDiv = $('imagePreview');
    let current = null;
    if (type === 'profile') {
        title.textContent = 'Upload Foto Profile';
        current = appData.user.profileImage;
    } else if (type === 'achievement' && itemId) {
        const a = appData.pages.achievements.items.find(i => i.id === itemId);
        if (a) { title.textContent = `Foto untuk: ${a.title}`; current = a.image; }
    } else if (type === 'work' && itemId) {
        const w = appData.pages.work.items.find(i => i.id === itemId);
        if (w) { title.textContent = `Foto untuk: ${w.title}`; current = w.image; }
    }
    if (current) {
        preview.src = current;
        previewDiv.style.display = 'block';
        removeBtn.style.display = 'inline-block';
    } else {
        previewDiv.style.display = 'none';
        removeBtn.style.display = 'none';
    }
    modal.classList.add('active');
}

// ==================== WORK UPLOAD MODAL ====================
function setupWorkUploadModal() {
    const modal = $('workUploadModal');
    const closeBtn = $('closeUploadModal');
    const cancelBtn = $('cancelUploadBtn');
    const browseBtn = $('browseImageBtn');
    const fileInput = $('imageFileInput');
    const dropArea = $('imageDropArea');
    const preview = $('imagePreviewWork');
    const previewContainer = $('imagePreviewContainer');
    const imageActions = $('imageActions');
    const changeBtn = $('changeImageWorkBtn');
    const removeBtn = $('removeImageWorkBtn');
    const form = $('workUploadForm');
    const saveBtn = $('saveWorkBtn');
    const progContainer = $('uploadProgressContainer');
    const progBar = $('uploadProgressBar');
    const percent = $('uploadPercentage');

    window.openWorkUploadModal = function(editId = null) {
        if (!isAdminLoggedIn && !isEditMode) { showNotification('Login admin dulu','error'); return; }
        resetWorkForm();
        if (editId) {
            const item = appData.pages.work.items.find(i => i.id === editId);
            if (item) {
                $('workTitle').value = item.title;
                $('workDate').value = item.date;
                $('workCategory').value = item.category;
                $('workDescription').value = item.description;
                if (item.image) {
                    currentImageUrl = item.image;
                    preview.src = item.image;
                    previewContainer.style.display = 'block';
                    imageActions.style.display = 'flex';
                }
                saveBtn.innerHTML = '<i class="fas fa-save"></i> Update Work';
                saveBtn.dataset.editId = editId;
                document.querySelector('.upload-modal-title').textContent = 'Edit Work';
                document.querySelector('.upload-modal-subtitle').textContent = 'Edit dokumentasi pekerjaan';
            }
        } else {
            saveBtn.innerHTML = '<i class="fas fa-save"></i> Simpan Work';
            delete saveBtn.dataset.editId;
            document.querySelector('.upload-modal-title').textContent = 'Tambah Work Baru';
            document.querySelector('.upload-modal-subtitle').textContent = 'Tambahkan dokumentasi pekerjaan Anda';
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        setTimeout(() => $('workTitle').focus(), 100);
    };

    function closeModal() { modal.classList.remove('active'); document.body.style.overflow = 'auto'; resetWorkForm(); }
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);
    modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && modal.classList.contains('active')) closeModal(); });

    browseBtn.addEventListener('click', () => fileInput.click());

    fileInput.addEventListener('change', e => { if (e.target.files[0]) handleImageFile(e.target.files[0]); });

    ['dragenter','dragover','dragleave','drop'].forEach(ev => dropArea.addEventListener(ev, e => e.preventDefault()));
    ['dragenter','dragover'].forEach(ev => dropArea.addEventListener(ev, () => dropArea.classList.add('drag-over')));
    ['dragleave','drop'].forEach(ev => dropArea.addEventListener(ev, () => dropArea.classList.remove('drag-over')));
    dropArea.addEventListener('drop', e => {
        const file = e.dataTransfer.files[0];
        if (file && file.type.match('image.*')) handleImageFile(file);
        else showNotification('Hanya gambar','error');
    });

    function handleImageFile(file) {
        if (file.size > 10*1024*1024) { showNotification('Maks 10MB','error'); return; }
        currentImageFile = file;
        const reader = new FileReader();
        reader.onload = e => {
            currentImageUrl = e.target.result;
            preview.src = currentImageUrl;
            previewContainer.style.display = 'block';
            imageActions.style.display = 'flex';
            showNotification('Gambar siap','success');
        };
        reader.readAsDataURL(file);
    }

    changeBtn.addEventListener('click', () => fileInput.click());
    removeBtn.addEventListener('click', () => {
        currentImageFile = null;
        currentImageUrl = null;
        previewContainer.style.display = 'none';
        imageActions.style.display = 'none';
        fileInput.value = '';
        showNotification('Gambar dihapus','info');
    });

    form.addEventListener('submit', e => {
        e.preventDefault();
        if (!isAdminLoggedIn && !isEditMode) { showNotification('Login dulu','error'); return; }
        const title = $('workTitle').value.trim();
        const date = $('workDate').value.trim();
        const cat = $('workCategory').value;
        const desc = $('workDescription').value.trim();
        if (!title || !date || !cat || !desc) { showNotification('Isi semua field','error'); return; }
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(date)) { showNotification('Format tanggal DD/MM/YYYY','error'); return; }
        showLoading('Menyimpan...');
        setTimeout(() => {
            const editId = saveBtn.dataset.editId;
            if (editId) {
                const item = appData.pages.work.items.find(i => i.id === editId);
                if (item) {
                    item.title = title; item.date = date; item.category = cat; item.description = desc;
                    if (currentImageUrl) item.image = currentImageUrl;
                }
            } else {
                const newId = 'work_' + Date.now();
                appData.pages.work.items.unshift({ id:newId, title, date, category:cat, description:desc, image:currentImageUrl });
            }
            renderWorkPage(); saveToLocalStorage(); closeModal(); hideLoading(); showNotification('Work disimpan','success');
        }, 500);
    });

    function resetWorkForm() {
        form.reset();
        previewContainer.style.display = 'none';
        imageActions.style.display = 'none';
        fileInput.value = '';
        currentImageFile = null;
        currentImageUrl = null;
        progContainer.style.display = 'none';
        percent.style.display = 'none';
    }
}

// ==================== EFEK ====================
function setupEffects() {
    $('effectToggle').addEventListener('click', toggleEffects);
    $('aboutPage')?.addEventListener('mouseenter', () => { if (currentPage==='about' && !rainEffectActive) showEffectToggle('Rain Effect','fas fa-cloud-rain'); });
    $('aboutPage')?.addEventListener('mouseleave', () => { if (!rainEffectActive) hideEffectToggle(); });
    $('chatroomPage')?.addEventListener('mouseenter', () => { if (currentPage==='chatroom' && !starfallEffectActive) showEffectToggle('Starfall Effect','fas fa-star'); });
    $('chatroomPage')?.addEventListener('mouseleave', () => { if (!starfallEffectActive) hideEffectToggle(); });
}

function showEffectToggle(text, icon) {
    $('effectText').textContent = text;
    $('effectIcon').className = icon;
    $('effectToggle').style.display = 'flex';
    currentEffectPage = currentPage;
}
function hideEffectToggle() { $('effectToggle').style.display = 'none'; currentEffectPage = null; }
function toggleEffects() {
    if (currentEffectPage === 'about') toggleRainEffect();
    else if (currentEffectPage === 'chatroom') toggleStarfallEffect();
}
function toggleRainEffect() {
    rainEffectActive = !rainEffectActive;
    const cont = $('rainContainer');
    const ov = $('rainOverlay');
    const toggle = $('effectToggle');
    const txt = $('effectText');
    if (rainEffectActive) {
        if (starfallEffectActive) toggleStarfallEffect();
        cont.style.display = 'block';
        ov.style.display = 'block';
        setTimeout(() => ov.style.opacity = '1', 10);
        txt.textContent = 'Matikan Rain Effect';
        createElegantRainDrops();
        $('aboutPage').classList.add('rain-active');
        toggle.style.background = 'linear-gradient(135deg, #00bcd4 0%, #00ffff 100%)';
        toggle.style.color = '#000';
        showNotification('Rain Effect aktif','success');
    } else {
        cont.style.display = 'none';
        ov.style.opacity = '0';
        setTimeout(() => ov.style.display = 'none', 1000);
        txt.textContent = 'Aktifkan Rain Effect';
        toggle.style.background = 'var(--gradient-gold)';
        toggle.style.color = '#000';
        $('aboutPage').classList.remove('rain-active');
        showNotification('Rain Effect mati','info');
        hideEffectToggle();
    }
}
function toggleStarfallEffect() {
    starfallEffectActive = !starfallEffectActive;
    const cont = $('starfallContainer');
    const ov = $('starfallOverlay');
    const toggle = $('effectToggle');
    const txt = $('effectText');
    if (starfallEffectActive) {
        if (rainEffectActive) toggleRainEffect();
        cont.style.display = 'block';
        ov.style.display = 'block';
        setTimeout(() => ov.style.opacity = '1', 10);
        txt.textContent = 'Matikan Starfall Effect';
        createElegantStars();
        $('chatroomPage').classList.add('starfall-active');
        toggle.style.background = 'linear-gradient(135deg, #ff9500 0%, #ffcc00 100%)';
        toggle.style.color = '#000';
        showNotification('Starfall Effect aktif','success');
    } else {
        cont.style.display = 'none';
        ov.style.opacity = '0';
        setTimeout(() => ov.style.display = 'none', 1000);
        txt.textContent = 'Aktifkan Starfall Effect';
        toggle.style.background = 'var(--gradient-gold)';
        toggle.style.color = '#000';
        $('chatroomPage').classList.remove('starfall-active');
        showNotification('Starfall Effect mati','info');
        hideEffectToggle();
    }
}
// Efek rain dan starfall (isi sesuai kode asli, bisa disalin dari kode sebelumnya)
function createElegantRainDrops() { /* ... (salin dari kode asli) */ }
function createElegantStars() { /* ... (salin dari kode asli) */ }

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    loadFromLocalStorage();
    setupNavigation();
    setupAdminPanel();
    setupChat();
    setupContactForm();
    setupMobileMenu();
    setupImageUploadModal();
    setupWorkUploadModal();
    setupZoomModal();
    setupResponsiveBehavior();
    renderPage(currentPage);
    updateAdminUI();
    setupContentHeight();
    renderProfileImage();
    centerHeroContent();
    setupEffects();
    setupEditModeDelegation();
    $('profileImg').addEventListener('click', () => { if (appData.user.profileImage) openZoom(appData.user.profileImage, 'Profile Picture'); });
    $('addWorkBtn').addEventListener('click', () => {
        if (isAdminLoggedIn || isEditMode) openWorkUploadModal();
        else showNotification('Login admin dulu','error');
    });
    $('floatingAddBtn').addEventListener('click', () => {
        if (isAdminLoggedIn || isEditMode) openWorkUploadModal();
        else showNotification('Login admin dulu','error');
    });
    createParticles();
    window.addEventListener('resize', centerHeroContent);
});
