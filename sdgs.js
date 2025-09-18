// SDG Data for educational page
const sdgData = [
    { id: 1, title: "No Poverty", color: "#E5243B", description: "End poverty in all its forms everywhere" },
    { id: 2, title: "Zero Hunger", color: "#DDA63A", description: "End hunger, achieve food security and improved nutrition and promote sustainable agriculture" },
    { id: 3, title: "Good Health and Well-being", color: "#4C9F38", description: "Ensure healthy lives and promote well-being for all at all ages" },
    { id: 4, title: "Quality Education", color: "#C5192D", description: "Ensure inclusive and equitable quality education and promote lifelong learning opportunities for all" },
    { id: 5, title: "Gender Equality", color: "#FF3A21", description: "Achieve gender equality and empower all women and girls" },
    { id: 6, title: "Clean Water and Sanitation", color: "#26BDE2", description: "Ensure availability and sustainable management of water and sanitation for all" },
    { id: 7, title: "Affordable and Clean Energy", color: "#FCC30B", description: "Ensure access to affordable, reliable, sustainable and modern energy for all" },
    { id: 8, title: "Decent Work and Economic Growth", color: "#A21942", description: "Promote sustained, inclusive and sustainable economic growth, full and productive employment and decent work for all" },
    { id: 9, title: "Industry, Innovation and Infrastructure", color: "#FD6925", description: "Build resilient infrastructure, promote inclusive and sustainable industrialization and foster innovation" },
    { id: 10, title: "Reduced Inequalities", color: "#DD1367", description: "Reduce inequality within and among countries" },
    { id: 11, title: "Sustainable Cities and Communities", color: "#FD9D24", description: "Make cities and human settlements inclusive, safe, resilient and sustainable" },
    { id: 12, title: "Responsible Consumption and Production", color: "#BF8B2E", description: "Ensure sustainable consumption and production patterns" },
    { id: 13, title: "Climate Action", color: "#3F7E44", description: "Take urgent action to combat climate change and its impacts" },
    { id: 14, title: "Life Below Water", color: "#0A97D9", description: "Conserve and sustainably use the oceans, seas and marine resources for sustainable development" },
    { id: 15, title: "Life on Land", color: "#56C02B", description: "Protect, restore and promote sustainable use of terrestrial ecosystems, sustainably manage forests, combat desertification, and halt and reverse land degradation and halt biodiversity loss" },
    { id: 16, title: "Peace, Justice and Strong Institutions", color: "#00689D", description: "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels" },
    { id: 17, title: "Partnerships for the Goals", color: "#19486A", description: "Strengthen the means of implementation and revitalize the global partnership for sustainable development" }
];

// Create educational SDG grid
function createEducationalSDGGrid() {
    const grid = document.getElementById('sdgs-educational-grid');
    if (!grid) return;
    
    grid.innerHTML = '';

    sdgData.forEach(sdg => {
        const card = document.createElement('div');
        card.className = 'sdg-educational-card';
        card.style.background = sdg.color;
        
        card.innerHTML = `
            <div class="sdg-card-content">
                <div class="sdg-card-header">
                    <div class="sdg-number">${sdg.id}</div>
                    <h3>${sdg.title}</h3>
                </div>
                <div class="sdg-card-info">
                    <p>${sdg.description}</p>
                </div>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Create educational SDG grid
    createEducationalSDGGrid();

    // Mobile navigation
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
});
