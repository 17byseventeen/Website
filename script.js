// SDG Data with official colors and UN descriptions
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

// Progress data for each SDG
const progressData = {
    1: { status: 'incompleted', content: 'Currently brainstorming ideas on how to take action for this UNSDG!' },
    2: { status: 'incomplete', content: 'In the process of finding an idea!' },
    3: { status: 'incompleted', content: 'Figuring out ways to execute our idea.' },
    4: { status: 'completed', content: 'Completed Quality Education by hosting an educational podcast about the UN SDGs to bring awareness to student projects across Canada.' },
    5: { status: 'incompleted', content: 'Planning projects around gender equality' },
    6: { status: 'incompleted', content: 'Still thinking...' },
    7: { status: 'incompleted', content: 'ideas are on there way! ' },
    8: { status: 'incompleted', content: 'To be determined' },
    9: { status: 'incompleted', content: 'Still processing' },
    10: { status: 'incompleted', content: 'Coming soon...' },
    11: { status: 'incompleted', content: 'On its way!' },
    12: { status: 'completed', content: 'Completed Responsible Consumption and Production through a clothing drive at my school, emphasizing the importance of being responsible in how many clothes we consume, and helping students give there un-used clothes to a good cause.' },
    13: { status: 'incompleted', content: 'More climate initiatives are coming your way!' },
    14: { status: 'completed', content: 'Completed Life Below Water by organizing a beach clean-up with the AP Seminar class at my school.' },
    15: { status: 'incompleted', content: 'Continuing to think.' },
    16: { status: 'incompleted', content: 'Considering possible actions.' },
    17: { status: 'completed', content: 'Completed Partnership for the Goals by partnering with multiple youth leaders across Canada to work together on achieving all 17 Sustainable Development Goals, building a collaborative network of passionate young people dedicated to making a difference.' }
};

// Create SDG grid
function createSDGWheel() {
    const wheel = document.getElementById('sdg-grid');
    wheel.innerHTML = '';

    sdgData.forEach(sdg => {
        const segment = document.createElement('div');
        segment.className = 'sdg-square';
        segment.style.background = sdg.color;
        
        // Create inner content
        const segmentContent = document.createElement('div');
        segmentContent.className = 'square-content';
        segmentContent.innerHTML = `
            <img src="images/sdgs/sdg-${sdg.id}.png" alt="SDG ${sdg.id}: ${sdg.title}" class="sdg-image">
        `;
        
        segment.appendChild(segmentContent);
        segment.dataset.sdgId = sdg.id;
        segment.dataset.sdgTitle = sdg.title;
        segment.dataset.sdgColor = sdg.color;
        segment.dataset.sdgDescription = sdg.description;

        // Add status class based on progress
        const progress = progressData[sdg.id];
        if (progress) {
            // Remove any existing status classes first
            segment.classList.remove('completed', 'in-progress', 'pending');
            // Add the current status class
            segment.classList.add(progress.status);
            // For pending goals, override the background color to grey
            if (progress.status === 'pending') {
                segment.style.background = 'var(--sdg-grey)';
            } else {
                // For completed and in-progress goals, ensure original SDG color is used
                segment.style.background = sdg.color;
            }
            // Debug log for SDG 1
            if (sdg.id === 1) {
                console.log('SDG 1 status:', progress.status, 'Class added:', segment.classList.toString());
            }
        } else {
            segment.classList.remove('completed', 'in-progress');
            segment.classList.add('pending');
            segment.style.background = 'var(--sdg-grey)';
        }

        segment.addEventListener('click', () => openSDGModal(sdg.id));
        wheel.appendChild(segment);
    });

    updateProgressStats();
}

// Update progress statistics
function updateProgressStats() {
    const completed = Object.values(progressData).filter(p => p.status === 'completed').length;
    const inProgress = Object.values(progressData).filter(p => p.status === 'in-progress').length;
    const remaining = Object.values(progressData).filter(p => p.status === 'pending').length;

    document.getElementById('completed-count').textContent = completed;
    document.getElementById('in-progress-count').textContent = inProgress;
    document.getElementById('remaining-count').textContent = remaining;
}

// Open SDG modal
function openSDGModal(sdgId) {
    const sdg = sdgData.find(s => s.id === sdgId);
    const progress = progressData[sdgId];
    
    if (!sdg || !progress) return;

    document.getElementById('modal-title').textContent = `SDG ${sdg.id}: ${sdg.title}`;
    document.getElementById('modal-description').textContent = sdg.description;
    document.getElementById('modal-status').textContent = progress.status.charAt(0).toUpperCase() + progress.status.slice(1);
    document.getElementById('modal-details').textContent = progress.content;

    // Update status styling
    const statusElement = document.getElementById('modal-status');
    statusElement.className = `progress-status ${progress.status}`;

    document.getElementById('sdgModal').style.display = 'block';
}

// Close modal
function closeModal() {
    document.getElementById('sdgModal').style.display = 'none';
}

// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Create SDG grid
    createSDGWheel();

    // Modal event listeners
    document.querySelector('.close').addEventListener('click', closeModal);
    document.getElementById('sdgModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeModal();
        }
    });

    // Mobile navigation
    document.querySelector('.hamburger').addEventListener('click', toggleMobileNav);

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            document.querySelector('.nav-menu').classList.remove('active');
        });
    });
});
