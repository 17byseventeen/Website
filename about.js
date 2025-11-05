// Team member data
// Add your team members here!
const teamData = [
    {
        name: "Grace Totten",
        role: "Founder",
        bio: "Founder of the 17 by 17 Challenge, working to complete all 17 UN Sustainable Development Goals before turning 17.",
        photo: "images/grace-photo.jpg",
        social: {
            instagram: "https://www.instagram.com/17_by17?igsh=MTBseWhzeXhnbGRjZg%3D%3D&utm_source=qr",
            tiktok: "https://www.tiktok.com/@17by17",
            youtube: "https://www.youtube.com/@17by17"
        }
    },
    {
        name: "Willow McGrath",
        role: "New Brunswick Representative for 17 By Seventeen",
        bio: "My name is Willow McGrath and I'm a grade 12 student in Saint John NB. I am extremely passionate about the environment and love working with people. I am a camp counsellor and spend all of my time outside in the summer, while providing experiential learning to campers and more. I also volunteer for a local organization that works to protect the biodiversity in my city. I lead the UNESCO club at my school, which has given my school a green space and helped get feminine hygiene products in every bathroom, along with many other projects last year. This year we'll create more greenspaces, provide outdoor education and highlight other SDGs through projects such as a sexual assault support day and awareness campaigns about AI. I've represented Canadian youth on matters of environmental education, human rights and the SDGs at many conferences including the National Forum for Environmental Learning, AP Nature Ed/Black Diaspra conferences and CCUNESCO conferences. I'm also extremely grateful to have had the opportunity to represent the younger generation at the IUCNs World Conservation Congress this past October.",
        photo: "images/willow-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Anjani Shah",
        role: "Ontario Representative for 17 By Seventeen",
        bio: "Hi! My name is Anjani Shah, and I am a 16 year old student at Assumption College School who's passionate about making a difference in my school, community, and the world. I am a strong believer that real change starts with small actions, and I try my best to live that every day through leadership, volunteering, and service. Some things I am a part of at school are Model UN, Mock Trial, and STEM, where I get to challenge myself and grow as a leader and problem-solver. I am also part of the 180 Team, which focuses on helping our community by taking part in projects that support people through local services such as therapy centres and soup kitchens. I am also a Prefect; where I help organize school events and tutor students who need academic support. Now, a sneak peak of my life outside of school. My culture and religion are a huge part of me in which through my temple's charity (BAPS Charities), I help raise funds for cancer research and breast cancer awareness as well as supporting local food bank initiatives. I also teach young girls at my temple every Saturday about my culture and faith, and through Army Cadets, I have raised money to support Canadian Armed Forces members, Veterans, and their families. Being part of the 17bySeventeen movement motivates me to take action toward the United Nations Sustainable Development Goals (UNSDGs) and remind others that you're never too young to make a difference. Together, we can help build a kinder, more sustainable world, one step at a time.",
        photo: null,
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Mateo Porter Partidam",
        role: "British Columbia Representative for 17 By Seventeen",
        bio: "My name is Mateo Porter Partidam, and I am an 18-year-old Mexican student living in Canada with a deep passion for marine ecosystems and sustainability. As I navigate my final year of high school, I aspire to study marine biology and explore ways to build a greener, more environmentally friendly community in my city – one of my recent projects was creating a compost system in my school. Besides this project, I am very involved in my school and community. From Grad President to Global Lead Speaker for the IUCN 2025 World Conservation Congress, my passion for leaving a positive impact on the planet has taken me places I only ever dreamed of. I want to give future generations the chance to experience the beautiful and mesmerizing world we live in today, and I dream of a future where humans and nature live in harmony.",
        photo: "images/mateo-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Olivia Cheng",
        role: "Ontario Representative for 17 By Seventeen",
        bio: "My name is Olivia Cheng and I'm a grade 11 student in Ontario. I'm passionate about the arts, environmental stewardship, and building connections in my community. I run a youth-led art nonprofit that provides free art lessons to underprivileged students in Ontario because I believe creativity and a welcoming space can inspire people to view the world with possibility. I've represented Canadian and global youth on the topic of nature-based education at the National Framework for Environmental Learning as well as the IUCN World Conservation Congress. From being a part of my school's sustainability council to organizing the annual student-body art show, I am motivated to highlight the power of youth engagement. As the Ontario representative for 17 By Seventeen, I'm excited to use my strengths to grow a network of Canadian youth dedicated to completing the UN SDGs.",
        photo: "images/olivia-photo.jpg",
        social: {
            // Add social media links if available
        }
    },
    {
        name: "Leah Sherwood",
        role: "Editor and Social Media Manager for 17 By Seventeen",
        bio: "Hi! My name is Leah Sherwood and I am a grade 10 student in Saint John, New Brunswick. Some of my passions include the environment, the arts, public speaking, and working with others, both to learn and to work toward a common goal. I am a grade representative on my student council, a member of the UNESCO club at my school, a member of my school's choir and drama clubs, have co-taught a biomaking program, and I am working on launching a project of my own relating to sustainability and environmental education and action. I love helping and making an impact on people in my community, and I often find myself volunteering and taking part in charitable events and action projects in my community. I am honoured to be a part of the 17 By Seventeen challenge, and am so excited to see where it takes us.",
        photo: "images/leah-photo.jpg",
        social: {
            // Add social media links if available
        }
    }
    // Add more team members here following this format:
    // {
    //     name: "Team Member Name",
    //     role: "Team Member Role",
    //     bio: "Brief bio about the team member",
    //     photo: "images/team-member-photo.jpg", // Optional - leave empty or null for placeholder
    //     social: {
    //         instagram: "https://instagram.com/username", // Optional
    //         tiktok: "https://tiktok.com/@username", // Optional
    //         youtube: "https://youtube.com/@username", // Optional
    //         email: "email@example.com" // Optional
    //     }
    // }
];

// Create team grid
function createTeamGrid() {
    const teamGrid = document.getElementById('team-grid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    
    teamData.forEach(member => {
        const teamCard = document.createElement('div');
        teamCard.className = 'team-member';
        
        let photoHTML = '';
        if (member.photo) {
            // Add specific class for Leah's photo to center it properly
            const photoClass = member.name === "Leah Sherwood" ? "team-member-photo leah-photo" : "team-member-photo";
            const inlineStyle = member.name === "Leah Sherwood" ? 'style="object-position: 35% 20% !important;"' : '';
            photoHTML = `<img src="${member.photo}" alt="${member.name}" class="${photoClass}" ${inlineStyle} onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <div class="team-member-placeholder" style="display:none;">
                    <i class="fas fa-user"></i>
                </div>`;
        } else {
            photoHTML = `
                <div class="team-member-placeholder">
                    <i class="fas fa-user"></i>
                </div>
            `;
        }
        
        let socialHTML = '';
        if (member.social && (member.social.instagram || member.social.tiktok || member.social.youtube || member.social.email)) {
            socialHTML = '<div class="team-member-social">';
            if (member.social.instagram) {
                socialHTML += `<a href="${member.social.instagram}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} Instagram"><i class="fab fa-instagram"></i></a>`;
            }
            if (member.social.tiktok) {
                socialHTML += `<a href="${member.social.tiktok}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} TikTok"><i class="fab fa-tiktok"></i></a>`;
            }
            if (member.social.youtube) {
                socialHTML += `<a href="${member.social.youtube}" target="_blank" rel="noopener noreferrer" aria-label="${member.name} YouTube"><i class="fab fa-youtube"></i></a>`;
            }
            if (member.social.email) {
                socialHTML += `<a href="mailto:${member.social.email}" aria-label="${member.name} Email"><i class="fas fa-envelope"></i></a>`;
            }
            socialHTML += '</div>';
        }
        
        teamCard.innerHTML = `
            ${photoHTML}
            <h3 class="team-member-name">${member.name}</h3>
            <p class="team-member-role">${member.role}</p>
            <p class="team-member-bio">${member.bio}</p>
            ${socialHTML}
        `;
        
        teamGrid.appendChild(teamCard);
    });
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

    // Mobile menu functionality
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
        hamburger.addEventListener('click', toggleMobileNav);
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.remove('active');
        });
    });

    // Create team grid
    console.log('Team data loaded:', teamData.length, 'members');
    createTeamGrid();
    console.log('Team grid created');
});


