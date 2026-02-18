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
                {
                    id: "aboutText1",
                    content: "Lulusan SMK Teknik Permesinan dengan pengalaman di bidang manufaktur dan produksi. Terbiasa menangani perencanaan produksi, quality control, manajemen stok & distribusi, hingga mechanical drafting."
                },
                {
                    id: "aboutText2",
                    content: "Memiliki kemampuan dalam meningkatkan efisiensi produksi, menurunkan tingkat reject, serta mendukung kelancaran proses manufaktur melalui desain teknis dan perencanaan yang sistematis."
                }
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
                {
                    id: "experience1",
                    title: "Mechanical Drafter Manufacturing",
                    date: "Jun 2025 - Sekarang",
                    items: [
                        "Membuat sistem pendataan molding beserta jangka waktu pakai (lifetime usage) untuk mendukung preventive maintenance dan mengurangi downtime produksi",
                        "Menyatukan berbagai variasi pengaturan molding menjadi 1 standar variasi, sehingga mempermudah operator dan menekan risiko kesalahan setting",
                        "Berhasil mempercepat proses kerja operator bubut dengan membuat drawing detail yang lebih jelas, sehingga mengurangi waktu setup hingga 15% lebih cepat"
                    ]
                },
                {
                    id: "experience2",
                    title: "Staff Produksi",
                    date: "Jun 2024 - Jun 2025",
                    items: [
                        "Menganalisis dan menurunkan tingkat overconsumption material melalui evaluasi data penggunaan bahan, identifikasi penyebab pemborosan, dan koordinasi dengan tim terkait untuk perbaikan proses",
                        "Menurunkan non-conformance bahan Div. Produksi dengan cara melakukan monitoring bahan",
                        "Meningkatkan productivity penggunaan bahan WIP dari 2 Ton menjadi 724,5 kg dalam kurun waktu Desember 2024-Maret 2025 dengan cara membuat monitoring Stock WIP dan planning item Produksi",
                        "Menurunkan reject Div. Produksi pada mesin spiral dari 8% menjadi 3% dengan cara melakukan TFT (Task force Team)"
                    ]
                }
            ]
        },
        work: {
            title: "Work",
            description: "Dokumentasi pekerjaan dan proyek",
            items: [
                {
                    id: "work1",
                    title: "Standarisasi Molding Setting",
                    date: "15/03/2025",
                    category: "Mechanical Drafting",
                    description: "Menyatukan berbagai variasi pengaturan molding menjadi 1 standar variasi, sehingga mempermudah operator dan menekan risiko kesalahan setting",
                    image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "work2",
                    title: "Monitoring WIP Inventory",
                    date: "20/02/2025",
                    category: "Production Work",
                    description: "Membuat sistem monitoring stock WIP dan planning item produksi untuk meningkatkan productivity penggunaan bahan dari 2 Ton menjadi 724,5 kg",
                    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "work3",
                    title: "Reduksi Reject Mesin Spiral",
                    date: "10/01/2025",
                    category: "Quality Control",
                    description: "Melakukan TFT (Task Force Team) untuk menurunkan reject dari 8% menjadi 3% pada mesin spiral melalui analisis akar masalah dan perbaikan proses",
                    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "work4",
                    title: "Optimasi Material Management",
                    date: "05/04/2025",
                    category: "Process Improvement",
                    description: "Pelatihan manajemen material untuk mengurangi overconsumption dan meningkatkan efisiensi penggunaan bahan produksi",
                    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "work5",
                    title: "Preventive Maintenance System",
                    date: "25/03/2025",
                    category: "Maintenance",
                    description: "Implementasi sistem preventive maintenance berdasarkan lifetime usage molding untuk mengurangi downtime produksi",
                    image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "work6",
                    title: "Production Planning Meeting",
                    date: "12/04/2025",
                    category: "Production Work",
                    description: "Rutinitas meeting perencanaan produksi untuk koordinasi tim dan evaluasi progress pekerjaan",
                    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ],
            categories: ["Mechanical Drafting", "Production Work", "Quality Control", "Process Improvement", "Maintenance"]
        },
        achievements: {
            title: "Achievements",
            description: "Pencapaian dan sertifikat profesional",
            items: [
                {
                    id: "achievement1",
                    title: "Health, Safety, Environment and Quality (HSEQ)",
                    date: "Sertifikasi Profesional",
                    description: "Sertifikasi profesional dalam bidang kesehatan, keselamatan, lingkungan, dan kualitas untuk industri manufaktur",
                    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "achievement2",
                    title: "Introduction to Information Security Course",
                    date: "Sertifikasi Keamanan Informasi",
                    description: "Sertifikasi dasar keamanan informasi untuk memahami prinsip-prinsip keamanan data dalam sistem produksi",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "achievement3",
                    title: "Lean Manufacturing Workshop",
                    date: "Workshop 2024",
                    description: "Workshop implementasi lean manufacturing untuk meningkatkan efisiensi dan mengurangi waste dalam proses produksi",
                    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                },
                {
                    id: "achievement4",
                    title: "Technical Drawing Excellence Award",
                    date: "Penghargaan Internal 2025",
                    description: "Penghargaan untuk detail dan akurasi gambar teknik yang membantu mempercepat proses setup mesin",
                    image: "https://images.unsplash.com/photo-1579226905180-636c76d14d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                }
            ]
        },
        projects: {
            title: "Projects",
            description: "Proyek dan portofolio pekerjaan",
            items: [
                {
                    id: "project1",
                    title: "Sistem Pendataan Molding",
                    description: "Membuat sistem pendataan molding beserta jangka waktu pakai (lifetime usage) untuk mendukung preventive maintenance dan mengurangi downtime produksi",
                    stats: [
                        { value: "100%", label: "Data Manual" },
                        { value: "↓ 40%", label: "Downtime", type: "improvement" },
                        { value: "15%", label: "Setup Time ↓" }
                    ]
                },
                {
                    id: "project2",
                    title: "Optimasi Produksi WIP",
                    description: "Meningkatkan productivity penggunaan bahan WIP dari 2 Ton menjadi 724,5 kg dengan monitoring Stock WIP dan planning item Produksi",
                    stats: [
                        { value: "2 Ton", label: "Sebelum" },
                        { value: "↓ 63.8%", label: "Pengurangan", type: "improvement" },
                        { value: "724.5 kg", label: "Sesudah" }
                    ]
                },
                {
                    id: "project3",
                    title: "Reduksi Reject Mesin Spiral",
                    description: "Menurunkan reject Div. Produksi pada mesin spiral dari 8% menjadi 3% dengan cara melakukan TFT (Task force Team)",
                    stats: [
                        { value: "8%", label: "Sebelum" },
                        { value: "↓ 62.5%", label: "Penurunan", type: "reduction" },
                        { value: "3%", label: "Sesudah" }
                    ]
                }
            ]
        },
        dashboard: {
            title: "Dashboard",
            description: "Statistik dan metrik performa",
            periods: [
                {
                    id: "staffPeriod",
                    title: "Staff Production",
                    date: "Jun 2024 - Jun 2025",
                    stats: [
                        { id: "staffStat1", value: "60%", label: "Penurunan Reject Material" },
                        { id: "staffStat2", value: "63.8%", label: "Pengurangan WIP Inventory" },
                        { id: "staffStat3", value: "62.5%", label: "Penurunan Reject Mesin Spiral" },
                        { id: "staffStat4", value: "90%", label: "Kesesuaian Dokumen (KPH)" }
                    ]
                },
                {
                    id: "drafterPeriod",
                    title: "Mechanical Drafter",
                    date: "Jun 2025 - Sekarang",
                    stats: [
                        { id: "drafterStat1", value: "15%", label: "Pengurangan Waktu Setup" },
                        { id: "drafterStat2", value: "40%", label: "Pengurangan Downtime" },
                        { id: "drafterStat3", value: "67%", label: "Pengurangan Lead Time" },
                        { id: "drafterStat4", value: "100%", label: "Standarisasi Molding Setting" }
                    ]
                }
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
let currentUploadType = null; // "profile", "achievement", atau "work"
let currentItemId = null;

// Variables untuk modal upload Work
let currentImageFile = null;
let currentImageUrl = null;

// Variables untuk efek
let rainEffectActive = false;
let starfallEffectActive = false;
let currentEffectPage = null;

// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
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
    centerHeroContent(); // Panggil fungsi untuk center konten
    
    // Setup efek
    setupEffects();
    
    // Tambahkan event listener untuk gambar profile (zoom)
    document.getElementById('profileImg').addEventListener('click', function() {
        if (appData.user.profileImage) {
            openZoom(appData.user.profileImage, 'Profile Picture');
        }
    });
    
    // Setup event listener untuk tombol add Work
    document.getElementById('addWorkBtn').addEventListener('click', function() {
        if (isAdminLoggedIn || isEditMode) {
            openWorkUploadModal();
        } else {
            showNotification('Silakan login sebagai admin untuk menambah work', 'error');
        }
    });
    
    // Setup event listener untuk floating add button
    const floatingAddBtn = document.getElementById('floatingAddBtn');
    if (floatingAddBtn) {
        floatingAddBtn.addEventListener('click', function() {
            if (isAdminLoggedIn || isEditMode) {
                openWorkUploadModal();
            } else {
                showNotification('Silakan login sebagai admin untuk menambah Work', 'error');
            }
        });
    }
    
    // Buat efek partikel
    createParticles();
    
    // Setup resize untuk center content
    window.addEventListener('resize', centerHeroContent);
});

// Fungsi untuk membuat konten hero tepat di tengah
function centerHeroContent() {
    const homeHero = document.querySelector('.home-hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (homeHero && heroContent) {
        // Reset margin sebelumnya
        heroContent.style.marginTop = '0';
        
        // Hitung tinggi yang tersedia
        const heroHeight = homeHero.offsetHeight;
        const contentHeight = heroContent.offsetHeight;
        
        // Jika konten lebih kecil dari container, center kan secara vertikal
        if (contentHeight < heroHeight) {
            const topMargin = Math.max(0, (heroHeight - contentHeight) / 2);
            heroContent.style.marginTop = `${topMargin}px`;
        }
    }
}

// Setup content height adjustment
function setupContentHeight() {
    function adjustContentHeight() {
        const mainContent = document.querySelector('.main-content');
        const contentBody = document.querySelector('.content-body');
        const activePage = document.querySelector('.page.active');
        const contentHeader = document.querySelector('.content-header');
        
        if (mainContent && contentBody && activePage && contentHeader) {
            const headerHeight = contentHeader.offsetHeight;
            const windowHeight = window.innerHeight;
            const pageHeight = activePage.offsetHeight;
            
            // Set minimum height untuk content body
            contentBody.style.minHeight = Math.max(pageHeight, windowHeight - headerHeight) + 'px';
        }
    }
    
    setTimeout(adjustContentHeight, 300);
    window.addEventListener('resize', adjustContentHeight);
    
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            setTimeout(adjustContentHeight, 500);
        });
    });
    
    // Initial adjustment
    adjustContentHeight();
}

// Setup responsive behavior
function setupResponsiveBehavior() {
    function handleResize() {
        const sidebar = document.getElementById('sidebar');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mainContent = document.getElementById('mainContent');
        const floatingAddBtn = document.getElementById('floatingAddBtn');
        const effectToggle = document.getElementById('effectToggle');
        
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
            sidebar.style.transform = 'translateX(0)';
            if (mobileMenuToggle) {
                mobileMenuToggle.style.display = 'none';
            }
            if (mainContent) {
                mainContent.style.position = 'fixed';
                mainContent.style.right = '0';
                mainContent.style.left = 'auto';
                mainContent.style.width = 'calc(100% - ' + (sidebar.offsetWidth || 280) + 'px)';
            }
            // Position floating button
            if (floatingAddBtn && isAdminLoggedIn && currentPage === 'work') {
                floatingAddBtn.style.top = '100px';
                floatingAddBtn.style.right = '40px';
                floatingAddBtn.style.bottom = 'auto';
            }
            // Position effect button
            if (effectToggle && (currentPage === 'about' || currentPage === 'chatroom')) {
                effectToggle.style.bottom = '100px';
                effectToggle.style.right = '40px';
                effectToggle.style.top = 'auto';
            }
        } else {
            if (mobileMenuToggle) {
                mobileMenuToggle.style.display = 'block';
            }
            if (mainContent) {
                mainContent.style.position = 'fixed';
                mainContent.style.left = '0';
                mainContent.style.right = '0';
                mainContent.style.width = '100%';
            }
            // Position floating button untuk mobile
            if (floatingAddBtn && isAdminLoggedIn && currentPage === 'work') {
                floatingAddBtn.style.top = 'auto';
                floatingAddBtn.style.bottom = '30px';
                floatingAddBtn.style.right = '20px';
            }
            // Position effect button untuk mobile
            if (effectToggle && (currentPage === 'about' || currentPage === 'chatroom')) {
                effectToggle.style.top = 'auto';
                effectToggle.style.bottom = '80px';
                effectToggle.style.right = '20px';
            }
        }
        
        // Recalculate content height
        setTimeout(setupContentHeight, 100);
        // Center hero content
        setTimeout(centerHeroContent, 100);
    }
    
    window.addEventListener('resize', handleResize);
    handleResize();
}

// Setup mobile menu toggle
function setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const sidebar = document.getElementById('sidebar');
    
    if (mobileMenuToggle && sidebar) {
        mobileMenuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
            
            if (sidebar.classList.contains('active')) {
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                if (!sidebar.contains(e.target) && 
                    !mobileMenuToggle.contains(e.target) &&
                    sidebar.classList.contains('active')) {
                    sidebar.classList.remove('active');
                    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
                }
            }
        });
    }
}

// Setup efek
function setupEffects() {
    const effectToggle = document.getElementById('effectToggle');
    
    if (effectToggle) {
        effectToggle.addEventListener('click', function() {
            toggleEffects();
        });
    }
    
    // Setup untuk halaman About
    const aboutPage = document.getElementById('aboutPage');
    if (aboutPage) {
        aboutPage.addEventListener('mouseenter', function() {
            if (currentPage === 'about' && !rainEffectActive) {
                showEffectToggle('Rain Effect', 'fas fa-cloud-rain');
            }
        });
        
        aboutPage.addEventListener('mouseleave', function() {
            if (!rainEffectActive) {
                hideEffectToggle();
            }
        });
    }
    
    // Setup untuk halaman Chat Room
    const chatroomPage = document.getElementById('chatroomPage');
    if (chatroomPage) {
        chatroomPage.addEventListener('mouseenter', function() {
            if (currentPage === 'chatroom' && !starfallEffectActive) {
                showEffectToggle('Starfall Effect', 'fas fa-star');
            }
        });
        
        chatroomPage.addEventListener('mouseleave', function() {
            if (!starfallEffectActive) {
                hideEffectToggle();
            }
        });
    }
}

// Fungsi untuk menampilkan tombol efek
function showEffectToggle(text, iconClass) {
    const effectToggle = document.getElementById('effectToggle');
    const effectText = document.getElementById('effectText');
    const effectIcon = document.getElementById('effectIcon');
    
    if (effectToggle && effectText && effectIcon) {
        effectText.textContent = text;
        effectIcon.className = iconClass;
        effectToggle.style.display = 'flex';
        currentEffectPage = currentPage;
    }
}

// Fungsi untuk menyembunyikan tombol efek
function hideEffectToggle() {
    const effectToggle = document.getElementById('effectToggle');
    if (effectToggle) {
        effectToggle.style.display = 'none';
        currentEffectPage = null;
    }
}

// Fungsi untuk toggle efek
function toggleEffects() {
    if (currentEffectPage === 'about') {
        toggleRainEffect();
    } else if (currentEffectPage === 'chatroom') {
        toggleStarfallEffect();
    }
}

// Fungsi untuk toggle efek rain
function toggleRainEffect() {
    rainEffectActive = !rainEffectActive;
    const rainContainer = document.getElementById('rainContainer');
    const rainOverlay = document.getElementById('rainOverlay');
    const starfallOverlay = document.getElementById('starfallOverlay');
    const effectToggle = document.getElementById('effectToggle');
    const effectText = document.getElementById('effectText');
    
    if (rainEffectActive) {
        // Matikan efek starfall jika aktif
        if (starfallEffectActive) {
            toggleStarfallEffect();
        }
        
        // Aktifkan efek rain
        rainContainer.style.display = 'block';
        rainOverlay.style.display = 'block';
        setTimeout(() => {
            rainOverlay.style.opacity = '1';
        }, 10);
        
        effectText.textContent = 'Matikan Rain Effect';
        
        // Buat efek rain yang lebih elegan
        createElegantRainDrops();
        
        // Tambahkan class khusus untuk about page
        document.getElementById('aboutPage').classList.add('rain-active');
        
        // Ubah warna teks dan ikon untuk feedback visual
        effectToggle.style.background = 'linear-gradient(135deg, #00bcd4 0%, #00ffff 100%)';
        effectToggle.style.color = '#000';
        
        showNotification('Rain Effect diaktifkan! Suasana hujan yang menenangkan.', 'success');
    } else {
        // Matikan efek rain
        rainContainer.style.display = 'none';
        rainOverlay.style.opacity = '0';
        setTimeout(() => {
            rainOverlay.style.display = 'none';
        }, 1000);
        effectText.textContent = 'Aktifkan Rain Effect';
        
        // Reset tombol effect
        effectToggle.style.background = 'var(--gradient-gold)';
        effectToggle.style.color = '#000';
        
        // Hapus class khusus untuk about page
        document.getElementById('aboutPage').classList.remove('rain-active');
        
        showNotification('Rain Effect dimatikan.', 'info');
        hideEffectToggle();
    }
}

// Fungsi untuk membuat rain drops yang lebih elegan
function createElegantRainDrops() {
    const rainContainer = document.getElementById('rainContainer');
    if (!rainContainer || !rainEffectActive) return;
    
    // Clear existing rain drops
    rainContainer.innerHTML = '';
    
    // Tambahkan background glow
    const backgroundGlow = document.createElement('div');
    backgroundGlow.style.position = 'absolute';
    backgroundGlow.style.top = '0';
    backgroundGlow.style.left = '0';
    backgroundGlow.style.width = '100%';
    backgroundGlow.style.height = '100%';
    backgroundGlow.style.background = 'radial-gradient(circle at center, rgba(0, 100, 200, 0.05) 0%, transparent 70%)';
    backgroundGlow.style.filter = 'blur(20px)';
    rainContainer.appendChild(backgroundGlow);
    
    // Buat 80 rain drops dengan variasi
    for (let i = 0; i < 80; i++) {
        setTimeout(() => {
            if (!rainEffectActive) return;
            
            createSingleRainDrop(i);
            
        }, i * 30);
    }
    
    // Buat rain drops secara kontinu
    if (rainEffectActive) {
        setTimeout(createElegantRainDrops, 5000);
    }
}

// Fungsi untuk membuat single rain drop elegan
function createSingleRainDrop(index) {
    const rainContainer = document.getElementById('rainContainer');
    
    const rainDrop = document.createElement('div');
    rainDrop.className = 'rain-drop';
    
    // Random position
    const left = 10 + Math.random() * 80;
    rainDrop.style.left = `${left}%`;
    
    // Random animation delay
    const delay = Math.random() * 3;
    rainDrop.style.animationDelay = `${delay}s`;
    
    // Random animation duration
    const duration = 1.5 + Math.random() * 1;
    rainDrop.style.animationDuration = `${duration}s`;
    
    // Random opacity
    const opacity = 0.5 + Math.random() * 0.5;
    rainDrop.style.opacity = opacity;
    
    // Random color variation
    const colors = [
        'rgba(0, 255, 255, 0.8)',
        'rgba(0, 200, 255, 0.7)',
        'rgba(0, 150, 255, 0.6)',
        'rgba(100, 200, 255, 0.7)'
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    rainDrop.style.background = `linear-gradient(to bottom, 
        transparent 0%, 
        ${randomColor} 30%,
        rgba(0, 255, 255, 0.5) 70%,
        transparent 100%)`;
    
    rainContainer.appendChild(rainDrop);
    
    // Buat efek ripple saat rain drop "jatuh"
    setTimeout(() => {
        if (rainEffectActive) {
            createElegantRipple(left, 90 + Math.random() * 10);
            
            // Tambahkan efek cahaya kecil
            createRainLight(left, 90 + Math.random() * 10, randomColor);
        }
    }, duration * 1000 - 500);
}

// Fungsi untuk membuat efek ripple yang elegan
function createElegantRipple(left, top) {
    if (!rainEffectActive) return;
    
    const rainContainer = document.getElementById('rainContainer');
    const ripple = document.createElement('div');
    ripple.className = 'rain-ripple';
    
    ripple.style.left = `${left}%`;
    ripple.style.top = `${top}%`;
    
    // Random size
    const size = 4 + Math.random() * 8;
    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    
    // Random color variation
    const colors = ['rgba(0, 255, 255, 0.4)', 'rgba(0, 200, 255, 0.3)', 'rgba(100, 220, 255, 0.35)'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    ripple.style.borderColor = randomColor;
    
    // Random animation duration
    const duration = 0.8 + Math.random() * 0.7;
    ripple.style.animationDuration = `${duration}s`;
    
    rainContainer.appendChild(ripple);
    
    // Hapus ripple setelah animasi selesai
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, duration * 1000);
}

// Fungsi untuk membuat efek cahaya rain
function createRainLight(left, top, color) {
    if (!rainEffectActive) return;
    
    const rainContainer = document.getElementById('rainContainer');
    const light = document.createElement('div');
    light.className = 'rain-light';
    
    light.style.left = `${left}%`;
    light.style.top = `${top}%`;
    
    // Extract base color
    light.style.background = `radial-gradient(circle, 
        ${color.replace('0.8', '0.3').replace('0.7', '0.25').replace('0.6', '0.2')} 0%, 
        rgba(0, 255, 255, 0.1) 40%,
        transparent 70%)`;
    
    rainContainer.appendChild(light);
    
    // Hapus light setelah animasi selesai
    setTimeout(() => {
        if (light.parentNode) {
            light.parentNode.removeChild(light);
        }
    }, 500);
}

// Fungsi untuk toggle efek starfall yang lebih elegan
function toggleStarfallEffect() {
    starfallEffectActive = !starfallEffectActive;
    const starfallContainer = document.getElementById('starfallContainer');
    const starfallOverlay = document.getElementById('starfallOverlay');
    const rainOverlay = document.getElementById('rainOverlay');
    const effectToggle = document.getElementById('effectToggle');
    const effectText = document.getElementById('effectText');
    
    if (starfallEffectActive) {
        // Matikan efek rain jika aktif
        if (rainEffectActive) {
            toggleRainEffect();
        }
        
        // Aktifkan efek starfall
        starfallContainer.style.display = 'block';
        starfallOverlay.style.display = 'block';
        setTimeout(() => {
            starfallOverlay.style.opacity = '1';
        }, 10);
        
        effectText.textContent = 'Matikan Starfall Effect';
        
        // Buat efek starfall yang lebih elegan
        createElegantStars();
        
        // Tambahkan class khusus untuk chatroom
        document.getElementById('chatroomPage').classList.add('starfall-active');
        
        // Ubah warna tombol
        effectToggle.style.background = 'linear-gradient(135deg, #ff9500 0%, #ffcc00 100%)';
        effectToggle.style.color = '#000';
        
        showNotification('Starfall Effect diaktifkan! Galaksi bintang yang memukau.', 'success');
    } else {
        // Matikan efek starfall
        starfallContainer.style.display = 'none';
        starfallOverlay.style.opacity = '0';
        setTimeout(() => {
            starfallOverlay.style.display = 'none';
        }, 1000);
        effectText.textContent = 'Aktifkan Starfall Effect';
        
        // Reset tombol effect
        effectToggle.style.background = 'var(--gradient-gold)';
        effectToggle.style.color = '#000';
        
        // Hapus class khusus untuk chatroom
        document.getElementById('chatroomPage').classList.remove('starfall-active');
        
        showNotification('Starfall Effect dimatikan.', 'info');
        hideEffectToggle();
    }
}

// Fungsi untuk membuat stars yang lebih elegan
function createElegantStars() {
    const starfallContainer = document.getElementById('starfallContainer');
    if (!starfallContainer || !starfallEffectActive) return;
    
    // Clear existing stars
    starfallContainer.innerHTML = '';
    
    // Tambahkan background nebula
    const nebula = document.createElement('div');
    nebula.style.position = 'absolute';
    nebula.style.top = '0';
    nebula.style.left = '0';
    nebula.style.width = '100%';
    nebula.style.height = '100%';
    nebula.style.background = `
        radial-gradient(circle at 30% 20%, rgba(255, 215, 0, 0.03) 0%, transparent 50%),
        radial-gradient(circle at 70% 80%, rgba(255, 100, 0, 0.02) 0%, transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(200, 150, 0, 0.01) 0%, transparent 50%)
    `;
    nebula.style.filter = 'blur(15px)';
    starfallContainer.appendChild(nebula);
    
    // Buat 40 stars dengan variasi
    for (let i = 0; i < 40; i++) {
        setTimeout(() => {
            if (!starfallEffectActive) return;
            
            createSingleStar(i);
            
        }, i * 100);
    }
    
    // Buat stars secara kontinu
    if (starfallEffectActive) {
        setTimeout(createElegantStars, 6000);
    }
}

// Fungsi untuk membuat single star elegan
function createSingleStar(index) {
    const starfallContainer = document.getElementById('starfallContainer');
    
    const star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    const left = Math.random() * 100;
    star.style.left = `${left}%`;
    
    // Random size
    const size = 2 + Math.random() * 6;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Random animation delay
    const delay = Math.random() * 5;
    star.style.animationDelay = `${delay}s`;
    
    // Random animation duration
    const duration = 3 + Math.random() * 4;
    star.style.animationDuration = `${duration}s`;
    
    // Random gradient color
    const gradients = [
        'radial-gradient(circle, rgba(255, 215, 0, 0.9) 0%, rgba(255, 200, 0, 0.7) 100%)',
        'radial-gradient(circle, rgba(255, 100, 0, 0.8) 0%, rgba(255, 150, 0, 0.6) 100%)',
        'radial-gradient(circle, rgba(255, 255, 200, 0.9) 0%, rgba(255, 255, 150, 0.7) 100%)',
        'radial-gradient(circle, rgba(200, 255, 255, 0.8) 0%, rgba(150, 255, 255, 0.6) 100%)'
    ];
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    star.style.background = randomGradient;
    
    // Random opacity
    const opacity = 0.6 + Math.random() * 0.4;
    star.style.opacity = opacity;
    
    // Random rotation
    const rotate = Math.random() * 360;
    star.style.setProperty('--star-rotation', `${rotate}deg`);
    
    starfallContainer.appendChild(star);
    
    // Buat efek trail
    createStarTrail(left, 0, randomGradient);
    
    // Buat efek burst saat star "jatuh"
    setTimeout(() => {
        if (starfallEffectActive) {
            const top = 90 + Math.random() * 10;
            createElegantStarBurst(left, top, randomGradient);
            
            // Hapus star setelah burst
            setTimeout(() => {
                if (star.parentNode) {
                    star.parentNode.removeChild(star);
                }
            }, 500);
        }
    }, duration * 1000 - 1000);
}

// Fungsi untuk membuat efek trail bintang
function createStarTrail(left, top, gradient) {
    if (!starfallEffectActive) return;
    
    const starfallContainer = document.getElementById('starfallContainer');
    const trail = document.createElement('div');
    trail.className = 'star-trail';
    
    trail.style.left = `${left}%`;
    trail.style.top = `${top}%`;
    
    // Random angle
    const angle = -30 + Math.random() * 60;
    trail.style.setProperty('--trail-angle', `${angle}deg`);
    
    // Random length
    const length = 50 + Math.random() * 100;
    trail.style.width = `${length}px`;
    
    // Color based on gradient
    let trailColor = 'rgba(255, 215, 0, 0.1)';
    if (gradient.includes('255, 100, 0')) trailColor = 'rgba(255, 100, 0, 0.08)';
    if (gradient.includes('255, 255, 200')) trailColor = 'rgba(255, 255, 200, 0.1)';
    if (gradient.includes('200, 255, 255')) trailColor = 'rgba(200, 255, 255, 0.08)';
    
    trail.style.background = `linear-gradient(90deg, 
        transparent 0%, 
        ${trailColor} 30%,
        rgba(255, 215, 0, 0.05) 70%,
        transparent 100%)`;
    
    starfallContainer.appendChild(trail);
    
    // Hapus trail setelah animasi selesai
    setTimeout(() => {
        if (trail.parentNode) {
            trail.parentNode.removeChild(trail);
        }
    }, 1000);
}

// Fungsi untuk membuat efek burst yang elegan
function createElegantStarBurst(left, top, gradient) {
    if (!starfallEffectActive) return;
    
    const starfallContainer = document.getElementById('starfallContainer');
    
    // Buat burst utama
    const burst = document.createElement('div');
    burst.className = 'star-burst';
    
    burst.style.left = `${left}%`;
    burst.style.top = `${top}%`;
    
    // Extract color dari gradient
    let burstColor = '#ffd700';
    if (gradient.includes('255, 100, 0')) burstColor = '#ff6400';
    else if (gradient.includes('255, 255, 200')) burstColor = '#ffffc8';
    else if (gradient.includes('200, 255, 255')) burstColor = '#c8ffff';
    
    burst.style.color = burstColor;
    burst.style.background = `radial-gradient(circle, ${burstColor} 0%, transparent 70%)`;
    
    // Random size
    const size = 10 + Math.random() * 20;
    burst.style.width = `${size}px`;
    burst.style.height = `${size}px`;
    
    starfallContainer.appendChild(burst);
    
    // Buat partikel kecil
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.className = 'star-particle';
            
            particle.style.left = `${left}%`;
            particle.style.top = `${top}%`;
            
            // Random angle untuk partikel
            const angle = (i * 30) + Math.random() * 15;
            const rad = angle * (Math.PI / 180);
            const x = Math.cos(rad);
            const y = Math.sin(rad);
            
            particle.style.setProperty('--particle-x', x);
            particle.style.setProperty('--particle-y', y);
            
            particle.style.background = burstColor;
            particle.style.boxShadow = `0 0 5px ${burstColor}`;
            
            starfallContainer.appendChild(particle);
            
            // Hapus partikel setelah animasi
            setTimeout(() => {
                if (particle.parentNode) {
                    particle.parentNode.removeChild(particle);
                }
            }, 1000);
        }, i * 30);
    }
    
    // Hapus burst setelah animasi selesai
    setTimeout(() => {
        if (burst.parentNode) {
            burst.parentNode.removeChild(burst);
        }
    }, 1200);
}

// Setup modal zoom
function setupZoomModal() {
    const zoomModal = document.getElementById('zoomModal');
    const closeZoom = document.getElementById('closeZoom');
    
    // Event listener untuk close zoom
    closeZoom.addEventListener('click', function() {
        zoomModal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
    // Close saat klik di luar gambar
    zoomModal.addEventListener('click', function(e) {
        if (e.target === zoomModal) {
            zoomModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
    
    // Close dengan ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
            zoomModal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }
    });
}

// Fungsi universal untuk membuka zoom
function openZoom(imageSrc, caption = '') {
    if (!imageSrc) return;
    
    const zoomModal = document.getElementById('zoomModal');
    const zoomedImage = document.getElementById('zoomedImage');
    const zoomCaption = document.getElementById('zoomCaption');
    
    showLoading('Memuat gambar...');
    
    // Preload gambar
    const img = new Image();
    img.onload = function() {
        zoomedImage.src = imageSrc;
        zoomCaption.textContent = caption;
        zoomedImage.classList.add('loaded');
        
        setTimeout(() => {
            zoomModal.classList.add('active');
            hideLoading();
            document.body.style.overflow = 'hidden';
        }, 300);
    };
    img.onerror = function() {
        hideLoading();
        showNotification('Gagal memuat gambar', 'error');
    };
    img.src = imageSrc;
}

// Setup Work Upload Modal
function setupWorkUploadModal() {
    const modal = document.getElementById('workUploadModal');
    const closeBtn = document.getElementById('closeUploadModal');
    const cancelBtn = document.getElementById('cancelUploadBtn');
    const browseBtn = document.getElementById('browseImageBtn');
    const fileInput = document.getElementById('imageFileInput');
    const dropArea = document.getElementById('imageDropArea');
    const imagePreview = document.getElementById('imagePreview');
    const previewContainer = document.getElementById('imagePreviewContainer');
    const imageActions = document.getElementById('imageActions');
    const changeImageBtn = document.getElementById('changeImageBtn');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const form = document.getElementById('workUploadForm');
    const saveBtn = document.getElementById('saveWorkBtn');
    const progressContainer = document.getElementById('uploadProgressContainer');
    const progressBar = document.getElementById('uploadProgressBar');
    const percentage = document.getElementById('uploadPercentage');

    // Open modal
    window.openWorkUploadModal = function(editItemId = null) {
        if (!isAdminLoggedIn && !isEditMode) {
            showNotification('Silakan login sebagai admin untuk menambah work', 'error');
            return;
        }
        
        resetUploadForm();
        
        // Jika edit mode, isi form dengan data yang ada
        if (editItemId) {
            const item = appData.pages.work.items.find(i => i.id === editItemId);
            if (item) {
                document.getElementById('workTitle').value = item.title;
                document.getElementById('workDate').value = item.date;
                document.getElementById('workCategory').value = item.category;
                document.getElementById('workDescription').value = item.description;
                
                if (item.image) {
                    currentImageUrl = item.image;
                    imagePreview.src = item.image;
                    previewContainer.style.display = 'block';
                    imageActions.style.display = 'flex';
                }
                
                // Ubah teks tombol
                saveBtn.innerHTML = '<i class="fas fa-save"></i> Update Work';
                saveBtn.dataset.editId = editItemId;
                
                // Update modal title
                document.querySelector('.upload-modal-title').textContent = 'Edit Work';
                document.querySelector('.upload-modal-subtitle').textContent = 'Edit dokumentasi pekerjaan';
            }
        } else {
            // Reset untuk mode add
            saveBtn.innerHTML = '<i class="fas fa-save"></i> Simpan Work';
            delete saveBtn.dataset.editId;
            
            // Reset modal title
            document.querySelector('.upload-modal-title').textContent = 'Tambah Work Baru';
            document.querySelector('.upload-modal-subtitle').textContent = 'Tambahkan dokumentasi pekerjaan Anda';
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Fokus ke input pertama
        setTimeout(() => {
            document.getElementById('workTitle').focus();
        }, 100);
    };

    // Close modal
    function closeUploadModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        resetUploadForm();
    }

    // Close button event
    closeBtn.addEventListener('click', closeUploadModal);
    cancelBtn.addEventListener('click', closeUploadModal);

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeUploadModal();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeUploadModal();
        }
    });

    // Browse button event
    browseBtn.addEventListener('click', function() {
        fileInput.click();
    });

    // File input change event
    fileInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            handleImageFile(file);
        }
    });

    // Drag and drop events
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, preventDefaults, false);
    });

    function preventDefaults(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    ['dragenter', 'dragover'].forEach(eventName => {
        dropArea.addEventListener(eventName, highlight, false);
    });

    ['dragleave', 'drop'].forEach(eventName => {
        dropArea.addEventListener(eventName, unhighlight, false);
    });

    function highlight() {
        dropArea.classList.add('drag-over');
    }

    function unhighlight() {
        dropArea.classList.remove('drag-over');
    }

    // Drop event
    dropArea.addEventListener('drop', function(e) {
        const dt = e.dataTransfer;
        const files = dt.files;
        
        if (files.length > 0) {
            const file = files[0];
            if (file.type.match('image.*')) {
                handleImageFile(file);
            } else {
                showNotification('Hanya file gambar yang diperbolehkan', 'error');
            }
        }
    });

    // Handle image file - OPTIMIZED
    function handleImageFile(file) {
        // Validasi file
        if (file.size > 10 * 1024 * 1024) {
            showNotification('Ukuran file terlalu besar. Maksimal 10MB.', 'error');
            return;
        }

        if (!file.type.match('image.*')) {
            showNotification('Hanya file gambar yang diperbolehkan.', 'error');
            return;
        }

        currentImageFile = file;
        
        // Tampilkan progress bar sebentar untuk feedback visual
        showProgress();
        updateProgress(30);
        
        const reader = new FileReader();
        
        reader.onload = function(e) {
            // Langsung ke 100% setelah file dibaca
            updateProgress(100);
            
            currentImageUrl = e.target.result;
            imagePreview.src = currentImageUrl;
            previewContainer.style.display = 'block';
            imageActions.style.display = 'flex';
            
            // Sembunyikan progress bar setelah 300ms
            setTimeout(() => {
                hideProgress();
            }, 300);
            
            showNotification('Gambar berhasil diupload!', 'success');
        };
        
        reader.onerror = function() {
            hideProgress();
            showNotification('Gagal membaca file gambar', 'error');
        };
        
        reader.readAsDataURL(file);
    }

    // Change image button
    changeImageBtn.addEventListener('click', function() {
        fileInput.click();
    });

    // Remove image button
    removeImageBtn.addEventListener('click', function() {
        currentImageFile = null;
        currentImageUrl = null;
        previewContainer.style.display = 'none';
        imageActions.style.display = 'none';
        fileInput.value = '';
        showNotification('Gambar berhasil dihapus', 'info');
    });

    // Form submit - OPTIMIZED untuk loading cepat
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!isAdminLoggedIn && !isEditMode) {
            showNotification('Silakan login sebagai admin untuk menambah work', 'error');
            return;
        }
        
        const title = document.getElementById('workTitle').value.trim();
        const date = document.getElementById('workDate').value.trim();
        const category = document.getElementById('workCategory').value;
        const description = document.getElementById('workDescription').value.trim();
        
        if (!title || !date || !category || !description) {
            showNotification('Harap isi semua field yang wajib diisi', 'error');
            return;
        }
        
        // Validasi format tanggal
        const dateRegex = /^\d{2}\/\d{2}\/\d{4}$/;
        if (!dateRegex.test(date)) {
            showNotification('Format tanggal harus DD/MM/YYYY', 'error');
            return;
        }
        
        // Tampilkan loading singkat
        showLoading('Menyimpan Work...');
        
        // Simpan TANPA DELAY BERLEBIHAN - langsung proses
        setTimeout(() => {
            const editId = saveBtn.dataset.editId;
            
            if (editId) {
                // Edit mode
                const item = appData.pages.work.items.find(i => i.id === editId);
                if (item) {
                    item.title = title;
                    item.date = date;
                    item.category = category;
                    item.description = description;
                    if (currentImageUrl) item.image = currentImageUrl;
                    
                    renderWorkPage();
                    saveToLocalStorage();
                    closeUploadModal();
                    hideLoading();
                    
                    showNotification('Work berhasil diperbarui!', 'success');
                }
            } else {
                // Add mode - gunakan timestamp untuk ID yang unik
                const newId = 'work_' + Date.now();
                const newItem = {
                    id: newId,
                    title: title,
                    date: date,
                    category: category,
                    description: description,
                    image: currentImageUrl
                };
                
                appData.pages.work.items.unshift(newItem); // Tambah di awal array
                
                renderWorkPage();
                saveToLocalStorage();
                closeUploadModal();
                hideLoading();
                
                // Scroll ke halaman work untuk melihat item baru
                const workPage = document.getElementById('workPage');
                if (workPage) {
                    workPage.scrollIntoView({ behavior: 'smooth' });
                }
                
                showNotification('Work berhasil ditambahkan!', 'success');
            }
        }, 500); // Delay minimal hanya 500ms (bukan 1000ms)
    });

    // Show progress bar
    function showProgress() {
        progressContainer.style.display = 'block';
        percentage.style.display = 'block';
        updateProgress(0);
    }

    // Hide progress bar
    function hideProgress() {
        progressContainer.style.display = 'none';
        percentage.style.display = 'none';
        updateProgress(0);
    }

    // Update progress
    function updateProgress(value) {
        progressBar.style.width = value + '%';
        percentage.textContent = Math.round(value) + '%';
    }
}

// Reset upload form
function resetUploadForm() {
    const form = document.getElementById('workUploadForm');
    const imagePreview = document.getElementById('imagePreview');
    const previewContainer = document.getElementById('imagePreviewContainer');
    const imageActions = document.getElementById('imageActions');
    const fileInput = document.getElementById('imageFileInput');
    const progressContainer = document.getElementById('uploadProgressContainer');
    const percentage = document.getElementById('uploadPercentage');
    
    if (form) form.reset();
    if (imagePreview) imagePreview.src = '';
    if (previewContainer) previewContainer.style.display = 'none';
    if (imageActions) imageActions.style.display = 'none';
    if (fileInput) fileInput.value = '';
    if (progressContainer) progressContainer.style.display = 'none';
    if (percentage) percentage.style.display = 'none';
    
    currentImageFile = null;
    currentImageUrl = null;
}

// Setup image upload modal
function setupImageUploadModal() {
    const profileUploadBtn = document.getElementById('profileUploadBtn');
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const saveImageBtn = document.getElementById('saveImageBtn');
    const cancelImageBtn = document.getElementById('cancelImageBtn');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const modal = document.getElementById('imageUploadModal');
    
    // Event listener untuk upload foto profile
    if (profileUploadBtn) {
        profileUploadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            if (isAdminLoggedIn || isEditMode) {
                openImageUploadModal('profile');
            } else {
                // Jika bukan admin, zoom gambar profile jika ada
                if (appData.user.profileImage) {
                    openZoom(appData.user.profileImage, 'Profile Picture');
                }
            }
        });
    }
    
    // Event listener untuk file input change
    imageInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            // Validasi file
            if (file.size > 5 * 1024 * 1024) {
                showNotification('Ukuran file terlalu besar. Maksimal 5MB.', 'error');
                return;
            }
            
            if (!file.type.match('image.*')) {
                showNotification('Hanya file gambar yang diperbolehkan.', 'error');
                return;
            }
            
            // Simulasi upload dengan progress
            simulateUploadWithProgress(file, previewImage, imagePreview);
        }
    });
    
    // Event listener untuk save button
    saveImageBtn.addEventListener('click', function() {
        if (previewImage.src) {
            showLoading('Menyimpan gambar...');
            showProgress();
            
            // Simulasi proses save dengan progress
            let progress = 0;
            const interval = setInterval(() => {
                progress += 10;
                updateProgress(progress);
                
                if (progress >= 100) {
                    clearInterval(interval);
                    
                    // Save data
                    if (currentUploadType === 'profile') {
                        appData.user.profileImage = previewImage.src;
                        renderProfileImage();
                        showNotification('Foto profile berhasil diupload!', 'success');
                    } else if (currentUploadType === 'achievement' && currentItemId) {
                        const achievement = appData.pages.achievements.items.find(a => a.id === currentItemId);
                        if (achievement) {
                            achievement.image = previewImage.src;
                            renderAchievementsPage();
                            showNotification('Foto achievement berhasil diupload!', 'success');
                        }
                    } else if (currentUploadType === 'work' && currentItemId) {
                        const work = appData.pages.work.items.find(d => d.id === currentItemId);
                        if (work) {
                            work.image = previewImage.src;
                            renderWorkPage();
                            showNotification('Foto Work berhasil diupload!', 'success');
                        }
                    }
                    
                    setTimeout(() => {
                        modal.classList.remove('active');
                        resetUploadModal();
                        hideLoading();
                    }, 300);
                }
            }, 100);
        }
    });
    
    // Event listener untuk cancel button
    cancelImageBtn.addEventListener('click', function() {
        modal.classList.remove('active');
        resetUploadModal();
    });
    
    // Event listener untuk remove button
    removeImageBtn.addEventListener('click', function() {
        showLoading('Menghapus gambar...');
        
        setTimeout(() => {
            if (currentUploadType === 'profile') {
                appData.user.profileImage = null;
                renderProfileImage();
                showNotification('Foto profile berhasil dihapus!', 'success');
            } else if (currentUploadType === 'achievement' && currentItemId) {
                const achievement = appData.pages.achievements.items.find(a => a.id === currentItemId);
                if (achievement) {
                    achievement.image = null;
                    renderAchievementsPage();
                    showNotification('Foto achievement berhasil dihapus!', 'success');
                }
            } else if (currentUploadType === 'work' && currentItemId) {
                const work = appData.pages.work.items.find(d => d.id === currentItemId);
                if (work) {
                    work.image = null;
                    renderWorkPage();
                    showNotification('Foto Work berhasil dihapus!', 'success');
                }
            }
            
            modal.classList.remove('active');
            resetUploadModal();
            hideLoading();
        }, 500);
    });
    
    // Event listener untuk klik di luar modal
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('active');
            resetUploadModal();
        }
    });
}

// Fungsi untuk simulasi upload dengan progress bar
function simulateUploadWithProgress(file, previewImage, imagePreview) {
    showLoading('Mengupload gambar...');
    showProgress();
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += 20;
        updateProgress(progress);
        
        if (progress >= 100) {
            clearInterval(interval);
            
            // Baca file sebagai Data URL
            const reader = new FileReader();
            reader.onload = function(event) {
                previewImage.src = event.target.result;
                imagePreview.style.display = 'block';
                removeImageBtn.style.display = 'inline-block';
                hideLoading();
                showNotification('Gambar berhasil diupload!', 'success');
            };
            reader.readAsDataURL(file);
        }
    }, 100);
}

// Reset upload modal
function resetUploadModal() {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const removeImageBtn = document.getElementById('removeImageBtn');
    
    imageInput.value = '';
    imagePreview.style.display = 'none';
    previewImage.src = '';
    removeImageBtn.style.display = 'none';
    currentUploadType = null;
    currentItemId = null;
}

// Open image upload modal
function openImageUploadModal(type, itemId = null) {
    // PERIKSA APAKAH USER ADALAH ADMIN
    if (!isAdminLoggedIn && !isEditMode) {
        showNotification('Silakan login sebagai admin untuk mengupload foto', 'error');
        return;
    }
    
    currentUploadType = type;
    currentItemId = itemId;
    
    const modal = document.getElementById('imageUploadModal');
    const modalTitle = document.getElementById('modalTitle');
    const removeImageBtn = document.getElementById('removeImageBtn');
    const previewImage = document.getElementById('previewImage');
    const imagePreview = document.getElementById('imagePreview');
    
    let currentImage = null;
    let itemTitle = '';
    
    if (type === 'profile') {
        modalTitle.textContent = 'Upload Foto Profile';
        currentImage = appData.user.profileImage;
        itemTitle = 'Profile Picture';
    } else if (type === 'achievement' && itemId) {
        const achievement = appData.pages.achievements.items.find(a => a.id === itemId);
        if (achievement) {
            modalTitle.textContent = `Upload Foto untuk: ${achievement.title}`;
            currentImage = achievement.image;
            itemTitle = achievement.title;
        }
    } else if (type === 'work' && itemId) {
        const work = appData.pages.work.items.find(d => d.id === itemId);
        if (work) {
            modalTitle.textContent = `Upload Foto untuk: ${work.title}`;
            currentImage = work.image;
            itemTitle = work.title;
        }
    }
    
    if (currentImage) {
        previewImage.src = currentImage;
        imagePreview.style.display = 'block';
        removeImageBtn.style.display = 'inline-block';
    } else {
        imagePreview.style.display = 'none';
        removeImageBtn.style.display = 'none';
    }
    
    modal.classList.add('active');
}

// Tambahkan fungsi particles untuk home page
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    particlesContainer.innerHTML = '';
    
    for (let i = 0; i < 15; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random size and position
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 10}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Render profile image
function renderProfileImage() {
    const profileImg = document.getElementById('profileImg');
    const profileIcon = document.getElementById('profileIcon');
    
    if (appData.user.profileImage) {
        profileImg.style.background = 'none';
        profileImg.innerHTML = `<img src="${appData.user.profileImage}" alt="Profile" style="width: 100%; height: 100%; object-fit: cover;">`;
        profileIcon.style.display = 'none';
    } else {
        profileImg.style.background = 'var(--gradient-gold)';
        profileImg.innerHTML = `<div class="profile-img-placeholder"><i class="fas fa-user-tie" id="profileIcon"></i></div>`;
    }
}

// Load data dari localStorage
function loadFromLocalStorage() {
    const savedData = localStorage.getItem('portfolioData');
    if (savedData) {
        try {
            const data = JSON.parse(savedData);
            Object.assign(appData, data);
        } catch (e) {
            console.error("Error loading data from localStorage:", e);
        }
    }
}

// Save data ke localStorage
function saveToLocalStorage() {
    localStorage.setItem('portfolioData', JSON.stringify(appData));
    showNotification('Data berhasil disimpan!', 'success');
}

// Setup navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const pageId = this.getAttribute('data-page');
            
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
            
            changePage(pageId);
            
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('mobileMenuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
    });
}

// Change page
function changePage(pageId) {
    // Matikan semua efek saat berpindah halaman
    if (rainEffectActive) {
        toggleRainEffect();
    }
    if (starfallEffectActive) {
        toggleStarfallEffect();
    }
    hideEffectToggle();
    
    document.querySelectorAll('.page').forEach(page => {
        if (page.classList.contains('active')) {
            page.style.opacity = '0';
            page.style.transform = 'translateY(30px)';
            setTimeout(() => {
                page.classList.remove('active');
                page.style.opacity = '';
                page.style.transform = '';
            }, 300);
        }
    });
    
    setTimeout(() => {
        const pageElement = document.getElementById(pageId + 'Page');
        if (pageElement) {
            pageElement.style.opacity = '0';
            pageElement.style.transform = 'translateY(30px)';
            pageElement.classList.add('active');
            
            setTimeout(() => {
                pageElement.style.opacity = '1';
                pageElement.style.transform = 'translateY(0)';
            }, 50);
            
            currentPage = pageId;
            
            const pageData = appData.pages[pageId];
            if (pageData) {
                document.getElementById('currentPageTitle').textContent = pageData.title;
                document.getElementById('currentPageDesc').textContent = pageData.description;
            }
            
            renderPage(pageId);
            document.querySelector('.main-content').scrollTop = 0;
            setupContentHeight();
            
            // Update floating button visibility
            updateAdminUI();
            
            // Buat partikel baru untuk home page
            if (pageId === 'home') {
                createParticles();
                setTimeout(centerHeroContent, 100); // Center konten setelah halaman home dimuat
            }
            
            // Setup efek untuk halaman tertentu
            if (pageId === 'about' || pageId === 'chatroom') {
                setTimeout(() => {
                    showEffectToggle(
                        pageId === 'about' ? 'Rain Effect' : 'Starfall Effect',
                        pageId === 'about' ? 'fas fa-cloud-rain' : 'fas fa-star'
                    );
                }, 500);
            }
        }
    }, 300);
}

// Render page content
function renderPage(pageId) {
    const pageData = appData.pages[pageId];
    if (!pageData) return;
    
    switch(pageId) {
        case 'home':
            renderHomePage();
            break;
        case 'about':
            renderAboutPage();
            break;
        case 'work':
            renderWorkPage();
            break;
        case 'achievements':
            renderAchievementsPage();
            break;
        case 'projects':
            renderProjectsPage();
            break;
        case 'dashboard':
            renderDashboardPage();
            break;
        case 'contact':
            renderContactPage();
            break;
    }
}

// Render home page
function renderHomePage() {
    const pageData = appData.pages.home;
    
    document.getElementById('homeBadge').textContent = pageData.badge;
    document.getElementById('homeTitle').textContent = pageData.mainTitle;
    document.getElementById('homeSubtitle').textContent = pageData.subtitle;
    document.getElementById('homeDescription').textContent = pageData.descriptionText;
    
    pageData.stats.forEach((stat, index) => {
        const statNum = document.getElementById(`stat${index + 1}Number`);
        const statLabel = document.getElementById(`stat${index + 1}Label`);
        
        if (statNum) statNum.textContent = stat.number;
        if (statLabel) statLabel.textContent = stat.label;
    });
}

// Render about page
function renderAboutPage() {
    const pageData = appData.pages.about;
    
    pageData.sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            element.innerHTML = `<p>${section.content}</p>`;
        }
    });
    
    renderSkills();
    renderExperiences();
}

// Render skills
function renderSkills() {
    const pageData = appData.pages.about;
    
    const techSkillsContainer = document.querySelector('#technicalSkills .skill-items');
    if (techSkillsContainer) {
        techSkillsContainer.innerHTML = pageData.skills.technical.map(skill => 
            `<div class="skill-item">${skill}</div>`
        ).join('');
    }
    
    const personalSkillsContainer = document.querySelector('#personalSkills .skill-items');
    if (personalSkillsContainer) {
        personalSkillsContainer.innerHTML = pageData.skills.personal.map(skill => 
            `<div class="skill-item">${skill}</div>`
        ).join('');
    }
}

// Render experiences
function renderExperiences() {
    const pageData = appData.pages.about;
    const timeline = document.querySelector('.experience-timeline');
    
    if (!timeline) return;
    
    const existingExperiences = timeline.querySelectorAll('.experience-item');
    for (let i = 2; i < existingExperiences.length; i++) {
        existingExperiences[i].remove();
    }
    
    pageData.experiences.forEach((exp, index) => {
        let expElement = document.getElementById(exp.id);
        
        if (!expElement && index >= 2) {
            expElement = document.createElement('div');
            expElement.className = 'experience-item editable';
            expElement.id = exp.id;
            expElement.innerHTML = `
                <div class="experience-header">
                    <h3 class="experience-title">${exp.title}</h3>
                    <div class="experience-date">${exp.date}</div>
                </div>
                <div class="experience-content">
                    <ul>
                        ${exp.items.map(item => `<li>${item}</li>`).join('')}
                    </ul>
                </div>
                <button class="edit-btn" data-edit="${exp.id}">Edit</button>
                <button class="delete-btn" data-delete="${exp.id}" data-type="experience">Hapus</button>
            `;
            
            const addButton = timeline.querySelector('[data-add="experience"]');
            if (addButton) {
                timeline.insertBefore(expElement, addButton);
            } else {
                timeline.appendChild(expElement);
            }
            
            // Setup event listeners untuk edit dan delete
            setupExperienceEventListeners(expElement, exp.id);
        } else if (expElement) {
            expElement.querySelector('.experience-title').textContent = exp.title;
            expElement.querySelector('.experience-date').textContent = exp.date;
            expElement.querySelector('.experience-content ul').innerHTML = 
                exp.items.map(item => `<li>${item}</li>`).join('');
        }
    });
}

// Setup event listeners untuk experience
function setupExperienceEventListeners(element, experienceId) {
    const editBtn = element.querySelector('.edit-btn');
    const deleteBtn = element.querySelector('.delete-btn');
    
    if (editBtn) {
        editBtn.addEventListener('click', function() {
            editExperience(experienceId);
        });
    }
    
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function() {
            deleteExperience(experienceId);
        });
    }
}

// Render Work page - OPTIMIZED
function renderWorkPage() {
    const pageData = appData.pages.work;
    const container = document.getElementById('workContainer');
    
    if (!container) return;
    
    // Clear container dengan cara yang lebih efisien
    container.innerHTML = '';
    
    // Sort items by date (newest first) - lebih efisien
    const sortedItems = [...pageData.items].sort((a, b) => {
        // Convert DD/MM/YYYY ke timestamp untuk sorting
        const convertToTimestamp = (dateStr) => {
            const [day, month, year] = dateStr.split('/').map(Number);
            return new Date(year, month - 1, day).getTime();
        };
        
        const timeA = convertToTimestamp(a.date) || 0;
        const timeB = convertToTimestamp(b.date) || 0;
        return timeB - timeA;
    });
    
    // Render items dengan batch untuk performa lebih baik
    sortedItems.forEach((item, index) => {
        const workElement = createWorkCard(item);
        container.appendChild(workElement);
        
        // Setup event listeners untuk card ini saja
        setupWorkCardEventListeners(workElement, item.id);
    });
    
    // Show/hide tombol add berdasarkan admin mode
    const addBtn = document.getElementById('addWorkBtn');
    if (addBtn) {
        addBtn.style.display = (isAdminLoggedIn || isEditMode) ? 'inline-block' : 'none';
    }
}

// Fungsi untuk membuat card Work
function createWorkCard(item) {
    const workElement = document.createElement('div');
    workElement.className = 'work-card editable';
    workElement.id = item.id;
    workElement.dataset.id = item.id;
    
    let imageHTML = '';
    if (item.image && item.image.trim() !== '') {
        imageHTML = `
            <div class="work-image-container">
                <img src="${item.image}" alt="${item.title}" class="work-image">
                <div class="work-upload-overlay">
                    <div>
                        <i class="fas fa-camera" style="font-size: 2rem; margin-bottom: 10px;"></i><br>
                        ${isAdminLoggedIn || isEditMode ? 'Klik untuk ganti foto' : 'Klik untuk zoom'}
                    </div>
                </div>
                <div class="category-badge">${item.category || 'Work'}</div>
            </div>
        `;
    } else {
        imageHTML = `
            <div class="work-image-container">
                <div class="work-image-placeholder">
                    <i class="fas fa-camera"></i>
                </div>
                <div class="work-upload-overlay">
                    <div>
                        <i class="fas fa-camera" style="font-size: 2rem; margin-bottom: 10px;"></i><br>
                        ${isAdminLoggedIn || isEditMode ? 'Klik untuk upload foto' : 'No image available'}
                    </div>
                </div>
                <div class="category-badge">${item.category || 'Work'}</div>
            </div>
        `;
    }
    
    workElement.innerHTML = `
        ${imageHTML}
        <h3>${item.title}</h3>
        <div class="date">
            <i class="far fa-calendar"></i> ${item.date}
        </div>
        <p>${item.description}</p>
        ${isAdminLoggedIn || isEditMode ? `
            <button class="edit-btn" data-edit="${item.id}">Edit</button>
            <button class="delete-btn" data-delete="${item.id}" data-type="work">Hapus</button>
        ` : ''}
    `;
    
    return workElement;
}

// Fungsi untuk setup event listeners per card (lebih efisien)
function setupWorkCardEventListeners(element, itemId) {
    // Edit button
    const editBtn = element.querySelector('.edit-btn');
    if (editBtn) {
        editBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            editWorkItem(itemId);
        });
    }
    
    // Delete button
    const deleteBtn = element.querySelector('.delete-btn');
    if (deleteBtn) {
        deleteBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            deleteWorkItem(itemId);
        });
    }
    
    // Image container untuk upload/zoom
    const imageContainer = element.querySelector('.work-image-container');
    if (imageContainer) {
        imageContainer.addEventListener('click', function(e) {
            // Jika klik pada gambar, zoom
            if (e.target.classList.contains('work-image')) {
                const title = element.querySelector('h3').textContent;
                openZoom(e.target.src, title);
                return;
            }
            
            if (isAdminLoggedIn || isEditMode) {
                editWorkImage(itemId);
            } else {
                // Jika bukan admin, coba zoom jika ada gambar
                const img = this.querySelector('.work-image');
                if (img && img.src) {
                    const title = element.querySelector('h3').textContent;
                    openZoom(img.src, title);
                }
            }
        });
    }
}

// Edit Work image - PERBAIKAN: Fungsi ini didefinisikan dengan benar
function editWorkImage(itemId) {
    if (!isAdminLoggedIn && !isEditMode) {
        showNotification('Silakan login sebagai admin untuk mengedit foto', 'error');
        return;
    }
    
    openImageUploadModal('work', itemId);
}

// Edit Work item - PERBAIKAN: Fungsi ini didefinisikan dengan benar
function editWorkItem(itemId) {
    if (!isAdminLoggedIn && !isEditMode) {
        showNotification('Silakan login sebagai admin untuk mengedit pekerjaan', 'error');
        return;
    }
    
    openWorkUploadModal(itemId);
}

// Hapus Work item - OPTIMIZED
function deleteWorkItem(itemId) {
    if (!confirm('Apakah Anda yakin ingin menghapus pekerjaan ini?')) {
        return;
    }
    
    showLoading('Menghapus...');
    
    // Langsung hapus tanpa delay berlebihan
    const index = appData.pages.work.items.findIndex(item => item.id === itemId);
    if (index !== -1) {
        appData.pages.work.items.splice(index, 1);
        renderWorkPage();
        saveToLocalStorage();
        hideLoading();
        showNotification('Pekerjaan berhasil dihapus!', 'success');
    } else {
        hideLoading();
    }
}

// Render achievements page
function renderAchievementsPage() {
    const pageData = appData.pages.achievements;
    const container = document.getElementById('achievementsContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    pageData.items.forEach((item) => {
        const achievementElement = document.createElement('div');
        achievementElement.className = 'achievement-card editable';
        achievementElement.id = item.id;
        
        let imageHTML = '';
        if (item.image) {
            imageHTML = `
                <div class="achievement-image-container" data-upload="${item.id}">
                    <img src="${item.image}" alt="${item.title}" class="achievement-image" 
                         onclick="openZoom('${item.image}', '${item.title}')">
                    <div class="achievement-upload-overlay">
                        <div>
                            <i class="fas fa-camera" style="font-size: 2rem; margin-bottom: 10px;"></i><br>
                            ${isAdminLoggedIn || isEditMode ? 'Klik untuk ganti foto' : 'Klik untuk zoom'}
                        </div>
                    </div>
                </div>
            `;
        } else {
            imageHTML = `
                <div class="achievement-image-container" data-upload="${item.id}">
                    <div class="achievement-image-placeholder">
                        <i class="fas fa-trophy"></i>
                    </div>
                    <div class="achievement-upload-overlay">
                        <div>
                            <i class="fas fa-camera" style="font-size: 2rem; margin-bottom: 10px;"></i><br>
                            ${isAdminLoggedIn || isEditMode ? 'Klik untuk upload foto' : 'No image available'}
                        </div>
                    </div>
                </div>
            `;
        }
        
        achievementElement.innerHTML = `
            ${imageHTML}
            <h3>${item.title}</h3>
            <div class="date">${item.date}</div>
            <p>${item.description}</p>
            <button class="edit-btn" data-edit="${item.id}">Edit</button>
            <button class="delete-btn" data-delete="${item.id}" data-type="achievement">Hapus</button>
        `;
        
        container.appendChild(achievementElement);
    });
    
    // Setup event listeners untuk upload foto achievements
    document.querySelectorAll('.achievement-image-container').forEach(container => {
        container.addEventListener('click', function(e) {
            // Jika klik langsung pada gambar, biarkan fungsi zoom yang menangani
            if (e.target.classList.contains('achievement-image')) {
                return;
            }
            
            if (isAdminLoggedIn || isEditMode) {
                const achievementId = this.getAttribute('data-upload');
                openImageUploadModal('achievement', achievementId);
            } else {
                // Jika bukan admin, coba zoom jika ada gambar
                const img = this.querySelector('.achievement-image');
                if (img && img.src) {
                    const title = this.closest('.achievement-card').querySelector('h3').textContent;
                    openZoom(img.src, title);
                }
            }
        });
    });
    
    // Setup event listener untuk tombol delete
    document.querySelectorAll('.delete-btn[data-type="achievement"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-delete');
            deleteAchievement(elementId);
        });
    });
    
    // Setup event listener untuk tombol edit
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-edit');
            editAchievement(elementId);
        });
    });
}

// Edit achievement
function editAchievement(achievementId) {
    const achievement = appData.pages.achievements.items.find(item => item.id === achievementId);
    if (!achievement) return;
    
    const newTitle = prompt('Edit judul pencapaian:', achievement.title);
    if (newTitle === null) return;
    
    const newDate = prompt('Edit tanggal:', achievement.date);
    if (newDate === null) return;
    
    const newDescription = prompt('Edit deskripsi:', achievement.description);
    if (newDescription === null) return;
    
    achievement.title = newTitle;
    achievement.date = newDate;
    achievement.description = newDescription;
    
    renderAchievementsPage();
    saveToLocalStorage();
    showNotification('Pencapaian berhasil diperbarui!', 'success');
}

// Fungsi untuk menghapus achievement
function deleteAchievement(achievementId) {
    if (!confirm('Apakah Anda yakin ingin menghapus pencapaian ini?')) {
        return;
    }
    
    showLoading('Menghapus pencapaian...');
    
    // Simulasi delay untuk efek loading
    setTimeout(() => {
        const index = appData.pages.achievements.items.findIndex(item => item.id === achievementId);
        if (index !== -1) {
            appData.pages.achievements.items.splice(index, 1);
            renderAchievementsPage();
            saveToLocalStorage();
            showNotification('Pencapaian berhasil dihapus!', 'success');
        }
        hideLoading();
    }, 500);
}

// Add achievement
function addAchievement() {
    const newTitle = prompt('Masukkan judul pencapaian baru:');
    if (!newTitle) return;
    
    const newDate = prompt('Masukkan tanggal:');
    if (!newDate) return;
    
    const newDescription = prompt('Masukkan deskripsi:');
    if (!newDescription) return;
    
    const newId = 'achievement' + (appData.pages.achievements.items.length + 1);
    const newAchievement = {
        id: newId,
        title: newTitle,
        date: newDate,
        description: newDescription,
        image: null
    };
    
    appData.pages.achievements.items.push(newAchievement);
    renderAchievementsPage();
    saveToLocalStorage();
    showNotification('Pencapaian berhasil ditambahkan!', 'success');
}

// Render projects page
function renderProjectsPage() {
    const pageData = appData.pages.projects;
    const container = document.getElementById('projectsContainer');
    
    if (!container) return;
    
    container.innerHTML = '';
    
    pageData.items.forEach((item) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project-card editable';
        projectElement.id = item.id;
        
        let statsHTML = '';
        if (item.stats) {
            statsHTML = `
                <div class="project-stats">
                    ${item.stats.map(stat => `
                        <div class="stat">
                            <span class="stat-value ${stat.type || ''}">${stat.value}</span>
                            <span class="stat-label">${stat.label}</span>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        
        projectElement.innerHTML = `
            <h3><i class="fas fa-project-diagram"></i> ${item.title}</h3>
            <p>${item.description}</p>
            ${statsHTML}
            <button class="edit-btn" data-edit="${item.id}">Edit</button>
            <button class="delete-btn" data-delete="${item.id}" data-type="project">Hapus</button>
        `;
        
        container.appendChild(projectElement);
    });
    
    // Setup event listener untuk tombol delete
    document.querySelectorAll('.delete-btn[data-type="project"]').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-delete');
            deleteProject(elementId);
        });
    });
    
    // Setup event listener untuk tombol edit
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-edit');
            editProject(elementId);
        });
    });
}

// Edit project
function editProject(projectId) {
    const project = appData.pages.projects.items.find(item => item.id === projectId);
    if (!project) return;
    
    const newTitle = prompt('Edit judul proyek:', project.title);
    if (newTitle === null) return;
    
    const newDescription = prompt('Edit deskripsi:', project.description);
    if (newDescription === null) return;
    
    project.title = newTitle;
    project.description = newDescription;
    
    renderProjectsPage();
    saveToLocalStorage();
    showNotification('Proyek berhasil diperbarui!', 'success');
}

// Fungsi untuk menghapus project
function deleteProject(projectId) {
    if (!confirm('Apakah Anda yakin ingin menghapus proyek ini?')) {
        return;
    }
    
    showLoading('Menghapus proyek...');
    
    setTimeout(() => {
        const index = appData.pages.projects.items.findIndex(item => item.id === projectId);
        if (index !== -1) {
            appData.pages.projects.items.splice(index, 1);
            renderProjectsPage();
            saveToLocalStorage();
            showNotification('Proyek berhasil dihapus!', 'success');
        }
        hideLoading();
    }, 500);
}

// Add project
function addProject() {
    const newTitle = prompt('Masukkan judul proyek baru:');
    if (!newTitle) return;
    
    const newDescription = prompt('Masukkan deskripsi:');
    if (!newDescription) return;
    
    const newId = 'project' + (appData.pages.projects.items.length + 1);
    
    // Tanya statistik baru
    const stat1Value = prompt('Masukkan nilai statistik 1 (misal: 2 Ton):', '0%');
    const stat1Label = prompt('Masukkan label statistik 1:', 'Sebelum');
    
    const stat2Value = prompt('Masukkan nilai statistik 2 (misal: ↓ 0%):', '↓ 0%');
    const stat2Label = prompt('Masukkan label statistik 2:', 'Perubahan');
    
    const stat3Value = prompt('Masukkan nilai statistik 3 (misal: 0%):', '0%');
    const stat3Label = prompt('Masukkan label statistik 3:', 'Sesudah');
    
    const newProject = {
        id: newId,
        title: newTitle,
        description: newDescription,
        stats: [
            { value: stat1Value, label: stat1Label },
            { value: stat2Value, label: stat2Label, type: "improvement" },
            { value: stat3Value, label: stat3Label }
        ]
    };
    
    appData.pages.projects.items.push(newProject);
    renderProjectsPage();
    saveToLocalStorage();
    showNotification('Proyek berhasil ditambahkan!', 'success');
}

// Render dashboard page
function renderDashboardPage() {
    const pageData = appData.pages.dashboard;
    
    // Render periods
    pageData.periods.forEach(period => {
        const periodElement = document.getElementById(period.id);
        if (periodElement) {
            periodElement.querySelector('.period-title').textContent = period.title;
            periodElement.querySelector('.period-date').innerHTML = `<i class="far fa-calendar"></i> ${period.date}`;
            
            // Render stats
            period.stats.forEach(stat => {
                const statElement = document.getElementById(stat.id);
                if (statElement) {
                    const valueElement = statElement.querySelector('.period-stat-value');
                    const labelElement = statElement.querySelector('.period-stat-label');
                    
                    if (valueElement) valueElement.textContent = stat.value;
                    if (labelElement) labelElement.textContent = stat.label;
                    
                    // Add appropriate class based on period
                    if (period.id === 'staffPeriod') {
                        valueElement.classList.add('staff');
                        valueElement.classList.remove('drafter');
                    } else if (period.id === 'drafterPeriod') {
                        valueElement.classList.add('drafter');
                        valueElement.classList.remove('staff');
                    }
                }
            });
        }
    });
}

// Fungsi untuk menghapus experience
function deleteExperience(experienceId) {
    if (!confirm('Apakah Anda yakin ingin menghapus pengalaman ini?')) {
        return;
    }
    
    showLoading('Menghapus pengalaman...');
    
    setTimeout(() => {
        const index = appData.pages.about.experiences.findIndex(exp => exp.id === experienceId);
        if (index !== -1) {
            appData.pages.about.experiences.splice(index, 1);
            renderExperiences();
            saveToLocalStorage();
            showNotification('Pengalaman berhasil dihapus!', 'success');
        }
        hideLoading();
    }, 500);
}

// Edit experience
function editExperience(experienceId) {
    const experience = appData.pages.about.experiences.find(exp => exp.id === experienceId);
    if (!experience) return;
    
    const newTitle = prompt('Edit judul pengalaman:', experience.title);
    if (newTitle === null) return;
    
    const newDate = prompt('Edit periode:', experience.date);
    if (newDate === null) return;
    
    const currentItems = experience.items.join('\n');
    const newItemsText = prompt('Edit poin-poin (satu per baris):', currentItems);
    if (newItemsText === null) return;
    
    experience.title = newTitle;
    experience.date = newDate;
    experience.items = newItemsText.split('\n').filter(item => item.trim() !== '');
    
    renderExperiences();
    saveToLocalStorage();
    showNotification('Pengalaman berhasil diperbarui!', 'success');
}

// Add experience
function addExperience() {
    const newTitle = prompt('Masukkan judul pengalaman baru:');
    if (!newTitle) return;
    
    const newDate = prompt('Masukkan periode:');
    if (!newDate) return;
    
    const itemsText = prompt('Masukkan poin-poin (satu per baris):');
    if (!itemsText) return;
    
    const newId = 'experience' + (appData.pages.about.experiences.length + 1);
    const newExperience = {
        id: newId,
        title: newTitle,
        date: newDate,
        items: itemsText.split('\n').filter(item => item.trim() !== '')
    };
    
    appData.pages.about.experiences.push(newExperience);
    renderExperiences();
    saveToLocalStorage();
    showNotification('Pengalaman berhasil ditambahkan!', 'success');
}

// Render contact page
function renderContactPage() {
    const pageData = appData.pages.contact;
    
    pageData.items.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) {
            element.querySelector('p').textContent = item.value;
        }
    });
}

// Setup admin panel
function setupAdminPanel() {
    const adminToggle = document.getElementById('adminToggle');
    const adminPanel = document.getElementById('adminPanel');
    const adminLogin = document.getElementById('adminLogin');
    const adminLogout = document.getElementById('adminLogout');
    const toggleEditMode = document.getElementById('toggleEditMode');
    const saveAllData = document.getElementById('saveAllData');
    
    adminToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        adminPanel.classList.toggle('active');
    });
    
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.admin-panel') && !e.target.closest('.admin-toggle')) {
            adminPanel.classList.remove('active');
        }
    });
    
    adminLogin.addEventListener('click', function() {
        const password = document.getElementById('adminPassword').value;
        
        if (password === ADMIN_PASSWORD) {
            isAdminLoggedIn = true;
            document.getElementById('adminControls').style.display = 'block';
            document.getElementById('adminPassword').value = '';
            showNotification('Login admin berhasil!', 'success');
            updateAdminUI();
            adminPanel.classList.remove('active');
            
            if (window.innerWidth <= 768) {
                document.getElementById('sidebar').classList.remove('active');
                document.getElementById('mobileMenuToggle').innerHTML = '<i class="fas fa-bars"></i>';
            }
        } else {
            showNotification('Password salah!', 'error');
        }
    });
    
    adminLogout.addEventListener('click', function() {
        isAdminLoggedIn = false;
        isEditMode = false;
        document.getElementById('adminControls').style.display = 'none';
        document.body.classList.remove('admin-mode');
        document.getElementById('editStatus').style.display = 'none';
        showNotification('Logout berhasil', 'info');
        updateAdminUI();
    });
    
    toggleEditMode.addEventListener('click', function() {
        if (!isAdminLoggedIn) {
            showNotification('Silakan login sebagai admin terlebih dahulu', 'error');
            return;
        }
        
        isEditMode = !isEditMode;
        document.body.classList.toggle('admin-mode', isEditMode);
        document.getElementById('editStatus').style.display = isEditMode ? 'block' : 'none';
        toggleEditMode.textContent = isEditMode ? 'Nonaktifkan Edit Mode' : 'Aktifkan Edit Mode';
        
        if (isEditMode) {
            setupEditMode();
        } else {
            // Re-render halaman untuk menghilangkan mode edit
            renderPage(currentPage);
        }
    });
    
    saveAllData.addEventListener('click', function() {
        if (!isAdminLoggedIn) {
            showNotification('Silakan login sebagai admin terlebih dahulu', 'error');
            return;
        }
        
        showLoading('Menyimpan data...');
        
        setTimeout(() => {
            saveToLocalStorage();
            hideLoading();
        }, 500);
    });
}

// Setup edit mode
function setupEditMode() {
    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-edit');
            const element = document.getElementById(elementId);
            
            if (element) {
                if (element.classList.contains('skill-category')) {
                    editSkills(elementId);
                } else if (element.classList.contains('experience-item')) {
                    editExperience(elementId);
                } else if (element.classList.contains('achievement-card')) {
                    editAchievement(elementId);
                } else if (element.classList.contains('project-card')) {
                    editProject(elementId);
                } else if (element.classList.contains('dashboard-card') || 
                           element.classList.contains('stat-card') || 
                           element.id.startsWith('dashboardStat') || 
                           element.id.startsWith('stat') ||
                           element.id.startsWith('staffStat') ||
                           element.id.startsWith('drafterStat')) {
                    editStat(elementId);
                } else if (element.classList.contains('contact-card')) {
                    editContact(elementId);
                } else if (element.classList.contains('period-section')) {
                    editPeriod(elementId);
                } else if (element.classList.contains('work-card')) {
                    editWorkItem(elementId);
                } else {
                    editText(elementId);
                }
            }
        });
    });
    
    document.querySelectorAll('.add-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const type = this.getAttribute('data-add');
            
            switch(type) {
                case 'technicalSkills':
                case 'personalSkills':
                    addSkill(type);
                    break;
                case 'experience':
                    addExperience();
                    break;
                case 'achievement':
                    addAchievement();
                    break;
                case 'project':
                    addProject();
                    break;
                case 'work':
                    openWorkUploadModal();
                    break;
            }
        });
    });
    
    // Setup event listeners untuk tombol delete yang sudah ada
    document.querySelectorAll('.delete-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const elementId = this.getAttribute('data-delete');
            const type = this.getAttribute('data-type');
            
            if (type === 'experience') {
                deleteExperience(elementId);
            } else if (type === 'achievement') {
                deleteAchievement(elementId);
            } else if (type === 'project') {
                deleteProject(elementId);
            } else if (type === 'work') {
                deleteWorkItem(elementId);
            }
        });
    });
}

// Edit text element
function editText(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const currentText = element.textContent;
    const newText = prompt('Edit teks:', currentText);
    
    if (newText !== null && newText !== currentText) {
        element.textContent = newText;
        
        if (elementId.startsWith('stat')) {
            const statIndex = parseInt(elementId.replace('stat', '').replace('Number', '').replace('Label', '')) - 1;
            if (elementId.includes('Number')) {
                appData.pages.home.stats[statIndex].number = newText;
            } else {
                appData.pages.home.stats[statIndex].label = newText;
            }
        } else if (elementId === 'homeBadge') {
            appData.pages.home.badge = newText;
        } else if (elementId === 'homeTitle') {
            appData.pages.home.mainTitle = newText;
        } else if (elementId === 'homeSubtitle') {
            appData.pages.home.subtitle = newText;
        } else if (elementId === 'homeDescription') {
            appData.pages.home.descriptionText = newText;
        } else if (elementId === 'aboutText1') {
            appData.pages.about.sections[0].content = newText;
        } else if (elementId === 'aboutText2') {
            appData.pages.about.sections[1].content = newText;
        }
        
        saveToLocalStorage();
        showNotification('Teks berhasil diperbarui!', 'success');
    }
}

// Edit period (dashboard)
function editPeriod(periodId) {
    const period = appData.pages.dashboard.periods.find(p => p.id === periodId);
    if (!period) return;
    
    const newTitle = prompt('Edit judul periode:', period.title);
    if (newTitle === null) return;
    
    const newDate = prompt('Edit rentang tanggal:', period.date);
    if (newDate === null) return;
    
    period.title = newTitle;
    period.date = newDate;
    
    renderDashboardPage();
    saveToLocalStorage();
    showNotification('Periode berhasil diperbarui!', 'success');
}

// Edit skills
function editSkills(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;
    
    const isTechnical = elementId === 'technicalSkills';
    const currentSkills = isTechnical ? 
        appData.pages.about.skills.technical : 
        appData.pages.about.skills.personal;
    
    const skillsText = currentSkills.join('\n');
    const newSkillsText = prompt('Edit skill (satu per baris):', skillsText);
    
    if (newSkillsText !== null && newSkillsText !== skillsText) {
        const newSkills = newSkillsText.split('\n').filter(skill => skill.trim() !== '');
        
        if (isTechnical) {
            appData.pages.about.skills.technical = newSkills;
        } else {
            appData.pages.about.skills.personal = newSkills;
        }
        
        renderSkills();
        saveToLocalStorage();
        showNotification('Skill berhasil diperbarui!', 'success');
    }
}

// Add skill
function addSkill(type) {
    const isTechnical = type === 'technicalSkills';
    const newSkill = prompt('Masukkan skill baru:');
    
    if (newSkill && newSkill.trim() !== '') {
        if (isTechnical) {
            appData.pages.about.skills.technical.push(newSkill.trim());
        } else {
            appData.pages.about.skills.personal.push(newSkill.trim());
        }
        
        renderSkills();
        saveToLocalStorage();
        showNotification('Skill berhasil ditambahkan!', 'success');
    }
}

// Edit stat
function editStat(statId) {
    const element = document.getElementById(statId);
    if (!element) return;
    
    let numberElement, labelElement;
    
    if (element.classList.contains('dashboard-card') || 
        element.classList.contains('stat-card') ||
        element.classList.contains('period-stat')) {
        
        if (element.classList.contains('period-stat')) {
            numberElement = element.querySelector('.period-stat-value');
            labelElement = element.querySelector('.period-stat-label');
        } else if (element.classList.contains('dashboard-card')) {
            numberElement = element.querySelector('.dashboard-number');
            labelElement = element.querySelector('.dashboard-label');
        } else if (element.classList.contains('stat-card')) {
            numberElement = element.querySelector('.stat-number');
            labelElement = element.querySelector('.stat-label');
        }
    }
    
    if (!numberElement || !labelElement) return;
    
    const currentNumber = numberElement.textContent;
    const currentLabel = labelElement.textContent;
    
    const newNumber = prompt('Edit angka:', currentNumber);
    if (newNumber === null) return;
    
    const newLabel = prompt('Edit label:', currentLabel);
    if (newLabel === null) return;
    
    numberElement.textContent = newNumber;
    labelElement.textContent = newLabel;
    
    // Update data based on element type
    if (statId.startsWith('dashboardStat')) {
        const stat = appData.pages.dashboard.stats.find(s => s.id === statId);
        if (stat) {
            stat.number = newNumber;
            stat.label = newLabel;
        }
    } else if (statId.startsWith('stat')) {
        const statIndex = parseInt(statId.replace('stat', '').replace('Number', '').replace('Label', '')) - 1;
        if (statId.includes('Number')) {
            appData.pages.home.stats[statIndex].number = newNumber;
        } else {
            appData.pages.home.stats[statIndex].label = newLabel;
        }
    } else if (statId.startsWith('staffStat') || statId.startsWith('drafterStat')) {
        // Find the period that contains this stat
        const period = appData.pages.dashboard.periods.find(p => 
            p.stats.some(s => s.id === statId)
        );
        if (period) {
            const stat = period.stats.find(s => s.id === statId);
            if (stat) {
                stat.value = newNumber;
                stat.label = newLabel;
            }
        }
    }
    
    saveToLocalStorage();
    showNotification('Statistik berhasil diperbarui!', 'success');
}

// Edit contact
function editContact(contactId) {
    const contact = appData.pages.contact.items.find(item => item.id === contactId);
    if (!contact) return;
    
    const currentValue = contact.value;
    const newValue = prompt(`Edit ${contact.label}:`, currentValue);
    
    if (newValue !== null && newValue !== currentValue) {
        contact.value = newValue;
        
        const contactElement = document.getElementById(contactId);
        if (contactElement) {
            contactElement.querySelector('p').textContent = newValue;
        }
        
        saveToLocalStorage();
        showNotification('Kontak berhasil diperbarui!', 'success');
    }
}

// Setup chat
function setupChat() {
    const sendButton = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    
    if (sendButton && chatInput) {
        sendButton.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
}

// Send message
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const message = chatInput.value.trim();
    
    if (message) {
        const chatMessages = document.getElementById('chatMessages');
        const now = new Date();
        const timeString = `${now.getDate()}/${now.getMonth()+1}/${now.getFullYear()}, ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message user';
        messageDiv.innerHTML = `
            <div class="message-info">
                <span class="message-user">You</span>
                <span class="message-time">${timeString}</span>
            </div>
            <div class="message-content">${message}</div>
        `;
        
        chatMessages.appendChild(messageDiv);
        chatInput.value = '';
        
        chatMessages.scrollTop = chatMessages.scrollHeight;
        
        setTimeout(() => {
            const replies = [
                "Thanks for your message!",
                "That's interesting, tell me more!",
                "I appreciate your feedback!",
                "Great point! Let's discuss this further."
            ];
            
            const randomReply = replies[Math.floor(Math.random() * replies.length)];
            
            const replyDiv = document.createElement('div');
            replyDiv.className = 'message';
            replyDiv.innerHTML = `
                <div class="message-info">
                    <span class="message-user">Arya Savariansah</span>
                    <span class="message-time">${timeString}</span>
                </div>
                <div class="message-content">${randomReply}</div>
            `;
            
            chatMessages.appendChild(replyDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 1000);
    }
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            showLoading('Mengirim pesan...');
            
            setTimeout(() => {
                alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you at ${email} soon.`);
                contactForm.reset();
                hideLoading();
            }, 1000);
        });
    }
}

// Update admin UI
function updateAdminUI() {
    const adminToggle = document.getElementById('adminToggle');
    const floatingAddBtn = document.getElementById('floatingAddBtn');
    
    if (isAdminLoggedIn) {
        adminToggle.innerHTML = '<i class="fas fa-user-check"></i> Admin Mode';
        adminToggle.style.background = 'var(--gradient-gold)';
        adminToggle.style.color = '#000';
        document.body.classList.add('admin-mode');
        
        // Tampilkan floating button hanya di halaman Work
        if (currentPage === 'work') {
            floatingAddBtn.style.display = 'flex';
        } else {
            floatingAddBtn.style.display = 'none';
        }
    } else {
        adminToggle.innerHTML = '<i class="fas fa-user-lock"></i> Login Admin';
        adminToggle.style.background = 'linear-gradient(135deg, #1e1e1e 0%, #2a2a2a 100%)';
        adminToggle.style.color = 'var(--primary)';
        document.body.classList.remove('admin-mode');
        floatingAddBtn.style.display = 'none';
    }
    
    // Update edit status
    document.getElementById('editStatus').style.display = isEditMode ? 'block' : 'none';
}

// Fungsi untuk menampilkan loading
function showLoading(text = 'Loading...') {
    const loadingOverlay = document.getElementById('loadingOverlay');
    const loadingText = document.getElementById('loadingText');
    
    loadingText.textContent = text;
    loadingOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Fungsi untuk menyembunyikan loading
function hideLoading() {
    const loadingOverlay = document.getElementById('loadingOverlay');
    loadingOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Reset progress bar
    hideProgress();
}

// Fungsi untuk menampilkan progress bar
function showProgress() {
    document.getElementById('uploadProgress').style.display = 'block';
    document.getElementById('uploadPercentageOld').style.display = 'block';
}

// Fungsi untuk menyembunyikan progress bar
function hideProgress() {
    document.getElementById('uploadProgress').style.display = 'none';
    document.getElementById('uploadPercentageOld').style.display = 'none';
    document.getElementById('progressBar').style.width = '0%';
    document.getElementById('uploadPercentageOld').textContent = '0%';
}

// Fungsi untuk update progress bar
function updateProgress(percentage) {
    document.getElementById('progressBar').style.width = percentage + '%';
    document.getElementById('uploadPercentageOld').textContent = Math.round(percentage) + '%';
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    
    if (type === 'success') {
        notification.style.background = 'var(--gradient-gold)';
        notification.style.color = '#000';
    } else if (type === 'error') {
        notification.style.background = 'linear-gradient(135deg, #ff4757 0%, #ff6b81 100%)';
        notification.style.color = '#fff';
    } else if (type === 'warning') {
        notification.style.background = 'linear-gradient(135deg, #ffa502 0%, #ffb142 100%)';
        notification.style.color = '#000';
    } else {
        notification.style.background = 'var(--gradient-gold)';
        notification.style.color = '#000';
    }
    
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}