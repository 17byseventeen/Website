// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// YouTube API function to fetch latest video
async function loadLatestYouTubeVideo() {
    const channelId = 'UCb3tn1-LrLpIM4UaKn6QHsg';
    const apiKey = 'YOUR_API_KEY'; // You'll need to get this from Google Cloud Console
    
    try {
        // For now, we'll use a simple approach that works without API key
        // This will show your channel's latest video
        const container = document.getElementById('featured-video-container');
        const placeholder = document.getElementById('youtube-video-placeholder');
        const caption = document.getElementById('video-caption');
        
        // Create YouTube embed for latest video
        const iframe = document.createElement('iframe');
        iframe.width = '100%';
        iframe.height = '400';
        iframe.src = `https://www.youtube.com/embed?listType=user_uploads&list=${channelId}`;
        iframe.frameBorder = '0';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.borderRadius = '8px';
        
        // Replace placeholder with video
        placeholder.style.display = 'none';
        container.insertBefore(iframe, caption);
        caption.textContent = 'Latest Video from 17 by 17 Channel';
        
    } catch (error) {
        console.error('Error loading YouTube video:', error);
        const placeholder = document.getElementById('youtube-video-placeholder');
        placeholder.innerHTML = `
            <i class="fas fa-video" style="font-size: 2rem; color: #666; margin-bottom: 1rem;"></i>
            <p style="margin: 0; color: #666;">Latest Video</p>
            <p style="margin: 0.5rem 0 0 0; font-size: 0.8rem; color: #999;">Click to view on YouTube</p>
        `;
        placeholder.style.cursor = 'pointer';
        placeholder.onclick = () => window.open(`https://www.youtube.com/channel/${channelId}`, '_blank');
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
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

    // Load latest YouTube video
    loadLatestYouTubeVideo();

    // Add click handlers for media items (placeholder for future functionality)
    const mediaItems = document.querySelectorAll('.media-item');
    mediaItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for future video/image modal functionality
            console.log('Media item clicked:', this.querySelector('p').textContent);
        });
    });
});
