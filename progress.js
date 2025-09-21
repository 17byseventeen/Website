// Progress data for journey page
const journeyData = {
    1: { 
        status: 'in-progress', 
        title: 'No Poverty',
        content: 'Planning fundraising and clothing drives to help those in need and reduce poverty in my community.',
        impact: 'Working to address poverty through direct community support and resource distribution.',
        date: 'September 2024'
    },
    2: { 
        status: 'in-progress', 
        title: 'Zero Hunger',
        content: 'Working on initiatives to address hunger and food security in my local area.',
        impact: 'Developing programs to ensure everyone has access to nutritious food.',
        date: 'October 2024'
    },
    3: { 
        status: 'in-progress', 
        title: 'Good Health and Well-being',
        content: 'Promoting good health and well-being through awareness campaigns and wellness initiatives in my community.',
        impact: 'Raising awareness about mental wellness and physical health in schools and community centers.',
        date: 'November 2024'
    },
    4: { 
        status: 'completed', 
        title: 'Quality Education',
        content: 'Completed quality education through teaching youth about bio-making through hands-on Brilliant Labs bio-making afterschool program, educating kids about sustainable alternatives and environmental science.',
        impact: 'Helped students improve their academic performance and access to learning resources.',
        date: 'September 2024'
    },
    11: { 
        status: 'pending', 
        title: 'Sustainable Cities and Communities',
        content: 'Upcoming sustainable community development projects and urban planning initiatives.',
        impact: 'Planning initiatives to foster sustainable urban development and community resilience.',
        date: 'February 2025'
    },
    12: { 
        status: 'completed', 
        title: 'Responsible Consumption and Production',
        content: 'Completed the "Cardboard for Kitty" fundraiser with Brilliant Labs and RedHead Strays, promoting responsible consumption and sustainable practices.',
        impact: 'Raised awareness about sustainable alternatives and supported animal welfare through creative fundraising.',
        date: 'March 2024'
    },
    13: { 
        status: 'completed', 
        title: 'Climate Action',
        content: 'Completed climate action through teaching youth about bio-making through hands-on Brilliant Labs bio-making afterschool program and experimenting with different bio-making recipes to create more sustainable and earth-friendly options opposed to plastic bags or single-use plastic things.',
        impact: 'Educated young people about sustainable alternatives and reduced plastic waste through innovative bio-making solutions.',
        date: 'April 2024'
    },
    15: { 
        status: 'completed', 
        title: 'Life on Land',
        content: 'Completed life on land protection through organizing a beach clean-up at Dominion Park Beach in Saint John, NB for World Clean-up Day with friend Willow McGrath. The Centre of Global Education also recognized our action!',
        impact: 'Helped protect local ecosystems and marine life by removing harmful waste from the beach, contributing to cleaner oceans and healthier land environments.',
        date: 'September 2024'
    },
    17: { 
        status: 'completed', 
        title: 'Partnerships for the Goals',
        content: 'Completed partnership building with organizations like Brilliant Labs and RedHead Strays for collaborative sustainable development projects.',
        impact: 'Built strong partnerships that amplify the impact of sustainable development initiatives.',
        date: 'June 2024'
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

