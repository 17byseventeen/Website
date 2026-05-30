// Progress data for journey page
const journeyData = {
    1: { 
        status: 'completed', 
        title: 'No Poverty',
        content: 'Completed No Poverty through organizing clothing drives at my school and another high school in my area, collecting and distributing clothing to help those in need and reduce poverty in my community.',
        impact: 'Collected and distributed clothing to help those in need, directly addressing poverty through community support and resource distribution.',
        date: 'November 2025'
    },
    2: { 
        status: 'completed', 
        title: 'Zero Hunger',
        content: 'Completed Zero Hunger by collaborating with Street Team Saint John to make a meal for the homeless, addressing food insecurity and hunger in our community.',
        impact: 'Provided nutritious meals to homeless individuals in Saint John, directly addressing hunger and food insecurity while building community connections and support.',
        date: 'December 2025'
    },
    3: { 
        status: 'completed', 
        title: 'Good Health and Well-being',
        content: 'Completed Good Health and Well-being by donating food to First Steps, supporting families and contributing to nutrition and well-being in the community.',
        impact: 'Helped provide food to people supported by First Steps, contributing to health and well-being through community care and access to nutritious food.',
        date: 'May 2026'
    },
    4: { 
        status: 'completed', 
        title: 'Quality Education',
        content: 'Completed Quality Education by starting an educational podcast about the UN SDGs to bring awareness to student projects across Canada.',
        impact: 'Shared learning about the UN SDGs through podcast episodes and highlighted student-led projects nationwide, helping more young people discover how peers are taking action on sustainable development.',
        date: 'January 2026 – June 2026'
    },
    5: { 
        status: 'completed', 
        title: 'Gender Equality',
        content: 'Completed Gender Equality by hosting a Women\'s Day webinar on March 11th with guest speakers Jennifer McGill (entrepreneur, consultant, and co-chair of We Worthy Women) and Tiffany Fields (Burke-Gafney Observatory Technician at Saint Mary\'s University). They spoke about following your passion, breaking barriers, and women\'s empowerment, inspiring students and the next generation.',
        impact: 'Created a platform for education and inspiration on women\'s contributions in STEM and leadership. Guest speakers shared their experiences on following your passion and breaking barriers, empowering young women and girls and advancing gender equality.',
        date: 'March 11, 2026'
    },
    6: { 
        status: 'completed', 
        title: 'Clean Water and Sanitation',
        content: 'Completed Clean Water and Sanitation by conducting a school-wide survey on water consumption and encouraging the reduction of water usage across my school community.',
        impact: 'Raised awareness of everyday water use at school and motivated students and staff to adopt habits that reduce consumption and support sustainable water stewardship.',
        date: 'May 2026'
    },
    7: { 
        status: 'completed', 
        title: 'Affordable and Clean Energy',
        content: 'Completed Affordable and Clean Energy through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.',
        impact: 'Educated students about sustainable energy solutions and green job opportunities through expert panel discussions, promoting awareness of clean energy alternatives and career paths in sustainability.',
        date: 'January 2026'
    },
    8: { 
        status: 'completed', 
        title: 'Decent Work and Economic Growth',
        content: 'Completed Decent Work and Economic Growth through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.',
        impact: 'Informed students about green job opportunities and sustainable economic growth through expert panel discussions, highlighting career paths that contribute to both economic development and environmental sustainability.',
        date: 'January 2026'
    },
    9: { 
        status: 'completed', 
        title: 'Industry, Innovation and Infrastructure',
        content: 'Completed Industry, Innovation and Infrastructure through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.',
        impact: 'Inspired students about innovation in sustainable infrastructure and clean energy technologies through expert panel discussions, promoting understanding of how innovation drives sustainable development.',
        date: 'January 2026'
    },
    10: { 
        status: 'completed', 
        title: 'Reduced Inequalities',
        content: 'Completed Reduced Inequalities through the Cardboard for Kitty 2026 event, where we donated to First Steps, helping moms and babies in our community.',
        impact: 'Supported mothers and babies through First Steps Saint John, helping reduce inequalities by directing fundraising toward families who need community care and resources.',
        date: 'May 2026'
    },
    11: { 
        status: 'completed', 
        title: 'Sustainable Cities and Communities',
        content: 'Completed Sustainable Cities and Communities through hosting a panel of experts in energy and sustainability who came to Saint Malachy\'s High School to talk about sustainable energy and green jobs, and answered questions based on the UN SDGs.',
        impact: 'Educated students about sustainable community development and how clean energy and green jobs contribute to building more sustainable cities and communities through expert panel discussions.',
        date: 'January 2026'
    },
    12: { 
        status: 'completed', 
        title: 'Responsible Consumption and Production',
        content: 'Completed Responsible Consumption and Production through the 2026 Cardboard for Kitty fundraiser, where teams had to use cardboard and recyclable materials to build their cat home.',
        impact: 'Promoted responsible consumption by challenging teams to create cat homes from cardboard and recyclable materials only, demonstrating creative reuse instead of new waste.',
        date: 'May 2026'
    },
    13: { 
        status: 'completed', 
        title: 'Climate Action',
        content: 'Completed Climate Action through the Cardboard for Kitty event, where teams incorporated recyclable materials into their cat homes; by attending many climate conferences; and by promoting sustainability through the UNESCO club at our school.',
        impact: 'Took action on climate through creative reuse at Cardboard for Kitty, deepened understanding by attending climate conferences, and advanced sustainability at school through UNESCO club leadership and initiatives.',
        date: 'January 2026 – May 2026'
    },
    14: { 
        status: 'completed', 
        title: 'Life Below Water',
        content: 'Completed Life Below Water by inviting guest speaker Melissa Moody to talk about Indigenous fisheries.',
        impact: 'Educated students and the community about Indigenous fisheries and marine stewardship, deepening understanding of how traditional knowledge and sustainable practices protect life below water.',
        date: 'May 2026'
    },
    15: { 
        status: 'completed', 
        title: 'Life on Land',
        content: 'Completed life on land protection through organizing a beach clean-up at Dominion Park Beach in Saint John, NB for World Clean-up Day with friend Willow McGrath. The Centre of Global Education also recognized our action!',
        impact: 'Helped protect local ecosystems and marine life by removing harmful waste from the beach, contributing to cleaner oceans and healthier land environments.',
        date: 'September 2025'
    },
    16: { 
        status: 'completed', 
        title: 'Peace, Justice and Strong Institutions',
        content: 'Completed Peace, Justice and Strong Institutions by running a student vote and presenting the student vote initiative to all civics classrooms at my school, strengthening democratic participation and civic engagement.',
        impact: 'Encouraged democratic participation through a student vote and spread awareness of civic processes across the school, building stronger institutional engagement among students.',
        date: 'May 2026'
    },
    17: { 
        status: 'completed', 
        title: 'Partnerships for the Goals',
        content: 'Completed Partnership for the Goals by partnering with multiple youth leaders across Canada to work together on achieving all 17 Sustainable Development Goals, building a collaborative network of passionate young people dedicated to making a difference.',
        impact: 'Built strong partnerships with youth leaders across Canada, creating a collaborative network that amplifies the impact of sustainable development initiatives and demonstrates the power of working together.',
        date: 'September 2025'
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

