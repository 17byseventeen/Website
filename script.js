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
    1: { status: 'completed', content: 'Completed No Poverty through organizing clothing drives at my school and another high school in my area, collecting and distributing clothing to help those in need and reduce poverty in my community.' },
    2: { status: 'completed', content: 'Completed Zero Hunger by collaborating with Street Team Saint John to make a meal for the homeless, addressing food insecurity and hunger in our community.' },
    3: { status: 'completed', content: 'Completed Good Health and Well-being by donating food to First Steps, supporting families and contributing to nutrition and well-being in the community.' },
    4: { status: 'completed', content: 'Completed quality education through teaching youth about bio-making through hands-on Brilliant Labs bio-making afterschool program, educating kids about sustainable alternatives and environmental science.' },
    5: { status: 'completed', content: 'Completed Gender Equality by hosting a Women\'s Day webinar on March 11th with guest speakers Jennifer McGill (entrepreneur, consultant, and co-chair of We Worthy Women) and Tiffany Fields (Burke-Gafney Observatory Technician at Saint Mary\'s University). They spoke about following your passion, breaking barriers, and women\'s empowerment, inspiring students and the next generation.' },
    6: { status: 'completed', content: 'Completed Clean Water and Sanitation by conducting a school-wide survey on water consumption and encouraging the reduction of water usage across my school community.' },
    7: { status: 'completed', content: 'Completed Affordable and Clean Energy through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.' },
    8: { status: 'completed', content: 'Completed Decent Work and Economic Growth through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.' },
    9: { status: 'completed', content: 'Completed Industry, Innovation and Infrastructure through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.' },
    10: { status: 'completed', content: 'Completed Reduced Inequalities through the Cardboard for Kitty 2026 event, where we donated to First Steps, helping moms and babies in our community.' },
    11: { status: 'completed', content: 'Completed Sustainable Cities and Communities through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.' },
    12: { status: 'completed', content: 'Completed Responsible Consumption and Production through the 2026 Cardboard for Kitty fundraiser, where teams had to use cardboard and recyclable materials to build their cat home.' },
    13: { status: 'completed', content: 'Completed climate action through teaching youth about bio-making through hands-on Brilliant Labs bio-making afterschool program and experimenting with different bio-making recipes to create more sustainable and earth-friendly options opposed to plastic bags or single-use plastic things.' },
    14: { status: 'completed', content: 'Completed Life Below Water by inviting guest speaker Melissa Moody to talk about Indigenous fisheries.' },
    15: { status: 'completed', content: 'Completed life on land protection through organizing a beach clean-up at Dominion Park Beach in Saint John, NB for World Clean-up Day with friend Willow McGrath. The Centre of Global Education also recognized our action!' },
    16: { status: 'completed', content: 'Completed Peace, Justice and Strong Institutions by running a student vote and presenting the student vote initiative to all civics classrooms at my school, strengthening democratic participation and civic engagement.' },
    17: { status: 'completed', content: 'Completed Partnership for the Goals by partnering with multiple youth leaders across Canada to work together on achieving all 17 Sustainable Development Goals, building a collaborative network of passionate young people dedicated to making a difference.' }
};

// Countdown timer
function updateCountdown() {
    const targetDate = new Date('2026-06-24T00:00:00').getTime();
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    if (timeLeft > 0) {
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = days.toString().padStart(3, '0');
        document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
        document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
        document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
}

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

    // Initialize countdown
    updateCountdown();
    setInterval(updateCountdown, 1000);

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
