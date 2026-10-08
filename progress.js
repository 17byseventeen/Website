// Progress data for journey page
const journeyData = {
    1: { 
        status: 'Pending', 
        title: 'No Poverty',
        content: '',
        impact: '',
        date: ''
    },
    2: { 
        status: 'pending', 
        title: 'Zero Hunger',
        content: '',
        impact: '',
        date: ''
    },
    3: { 
        status: 'Pending', 
        title: 'Good Health and Well-being',
        content: '',
        impact: '',
        date: ''
    },
    4: { 
        status: 'completed', 
        title: 'Quality Education',
        content: 'Completed Quality Education by hosting the 17 by Seventeen educational podcast about the UN SDGs to bring awareness to student projects across Canada.',
        impact: 'Shared learning about the UN SDGs through podcast episodes and highlighted student-led projects nationwide, helping more young people discover how peers are taking action on sustainable development.',
        date: 'September 2026'
    },
    5: { 
        status: 'pending', 
        title: 'Gender Equality',
        content: '',
        impact: '',
        date: ''
    },
    6: { 
        status: 'pending', 
        title: 'Clean Water and Sanitation',
        content: '',
        impact: '',
        date: ''
    },
    7: { 
        status: 'pending', 
        title: 'Affordable and Clean Energy',
        content: '',
        impact: '',
        date: ''
    },
    8: { 
        status: 'pending', 
        title: 'Decent Work and Economic Growth',
        content: '',
        impact: '',
        date: ''
    },
    9: { 
        status: 'pending', 
        title: 'Industry, Innovation and Infrastructure',
        content: '',
        impact: '',
        date: ''
    },
    10: { 
        status: 'pending', 
        title: 'Reduced Inequalities',
        content: '',
        impact: '',
        date: ''
    },
    11: { 
        status: 'pending', 
        title: 'Sustainable Cities and Communities',
        content: '',
        impact: '',
        date: ''
    },
    12: { 
        status: 'completed', 
        title: 'Responsible Consumption and Production',
        content: 'Completed Responsible Consumption and Production by organizing a clothing drive at my school and promoting sustainable practices',
        impact: 'Promoted responsible consumption by bringing awareness to the harms of consumer culture and ecouraging my peers to donate clothes they do not wear anymore.',
        date: 'September 2026 - October 2026'
    },
    13: { 
        status: 'pending', 
        title: 'Climate Action',
        content: '',
        impact: '',
        date: ''
    },
    14: { 
        status: 'completed', 
        title: 'Life Below Water',
        content: 'Completed Life Below Water by organizing a beach clean-up in collaboration with my AP Seminar class.',
        impact: 'Encouraged students to pick up single-use plastic from our local beach and sidewalks, and explained the importance of keeping our city clean.',
        date: 'September 2026'
    },
    15: { 
        status: 'pending', 
        title: 'Life on Land',
        content: '',
        impact: '',
        date: ''
    },
    16: { 
        status: 'pending', 
        title: 'Peace, Justice and Strong Institutions',
        content: '',
        impact: '',
        date: ''
    },
    17: { 
        status: 'completed', 
        title: 'Partnerships for the Goals',
        content: 'Completed Partnership for the Goals by partnering with multiple youth leaders across Canada to work together on achieving all 17 Sustainable Development Goals, building a collaborative network of passionate young people dedicated to making a difference.',
        impact: 'Built strong partnerships with youth leaders across Canada, creating a collaborative network that amplifies the impact of sustainable development initiatives and demonstrates the power of working together.',
        date: 'September 2026'
    }
};

// Create progress timeline
function createProgressTimeline() {
    const timeline = document.getElementById('progress-timeline');
    if (!timeline) return;
    
    timeline.innerHTML = '';

    // Sort completed goals by date
    const completedGoals = Object.entries(journeyData)
        .filter(([id, data]) => data.status === 'completed')
        .sort((a, b) => new Date(a[1].date) - new Date(b[1].date));

    completedGoals.forEach(([id, data], index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item completed';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <i class="fas fa-check-circle"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-date">${data.date}</div>
                <h3>SDG ${id}: ${data.title}</h3>
                <p>${data.content}</p>
                <div class="timeline-impact">
                    <strong>Impact:</strong> ${data.impact}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });

    // Add in-progress goals
    const inProgressGoals = Object.entries(journeyData)
        .filter(([id, data]) => data.status === 'in-progress');

    inProgressGoals.forEach(([id, data]) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item in-progress';
        
        timelineItem.innerHTML = `
            <div class="timeline-marker">
                <i class="fas fa-clock"></i>
            </div>
            <div class="timeline-content">
                <div class="timeline-date">In Progress</div>
                <h3>SDG ${id}: ${data.title}</h3>
                <p>${data.content}</p>
                <div class="timeline-impact">
                    <strong>Expected Impact:</strong> ${data.impact}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Create upcoming goals section
function createUpcomingGoals() {
    const upcomingGrid = document.getElementById('upcoming-goals');
    if (!upcomingGrid) return;
    
    upcomingGrid.innerHTML = '';

    const allSDGs = [
        { id: 1, title: "No Poverty", color: "#E5243B" },
        { id: 2, title: "Zero Hunger", color: "#DDA63A" },
        { id: 3, title: "Good Health and Well-being", color: "#4C9F38" },
        { id: 4, title: "Quality Education", color: "#C5192D" },
        { id: 5, title: "Gender Equality", color: "#FF3A21" },
        { id: 6, title: "Clean Water and Sanitation", color: "#26BDE2" },
        { id: 7, title: "Affordable and Clean Energy", color: "#FCC30B" },
        { id: 8, title: "Decent Work and Economic Growth", color: "#A21942" },
        { id: 9, title: "Industry, Innovation and Infrastructure", color: "#FD6925" },
        { id: 10, title: "Reduced Inequalities", color: "#DD1367" },
        { id: 11, title: "Sustainable Cities and Communities", color: "#FD9D24" },
        { id: 12, title: "Responsible Consumption and Production", color: "#BF8B2E" },
        { id: 13, title: "Climate Action", color: "#3F7E44" },
        { id: 14, title: "Life Below Water", color: "#0A97D9" },
        { id: 15, title: "Life on Land", color: "#56C02B" },
        { id: 16, title: "Peace, Justice and Strong Institutions", color: "#00689D" },
        { id: 17, title: "Partnerships for the Goals", color: "#19486A" }
    ];

    const pendingGoals = allSDGs.filter(sdg => !journeyData[sdg.id] || journeyData[sdg.id].status === 'pending');

    pendingGoals.forEach(sdg => {
        const card = document.createElement('div');
        card.className = 'upcoming-card';
        
        card.innerHTML = `
            <div class="upcoming-content">
                <img src="images/sdgs/sdg-${sdg.id}.png" alt="SDG ${sdg.id}: ${sdg.title}" class="upcoming-image">
            </div>
        `;
        
        upcomingGrid.appendChild(card);
    });
}

// Update progress statistics
function updateProgressStats() {
    const completed = Object.values(journeyData).filter(data => data.status === 'completed').length;
    const inProgress = Object.values(journeyData).filter(data => data.status === 'in-progress').length;
    const remaining = 17 - completed - inProgress;

    const completedElement = document.getElementById('completed-count');
    const inProgressElement = document.getElementById('in-progress-count');
    const remainingElement = document.getElementById('remaining-count');

    if (completedElement) completedElement.textContent = completed;
    if (inProgressElement) inProgressElement.textContent = inProgress;
    if (remainingElement) remainingElement.textContent = remaining;
}

// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Update copyright year
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Create progress timeline
    createProgressTimeline();
    
    // Create upcoming goals
    createUpcomingGoals();
    
    // Update progress statistics
    updateProgressStats();

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

