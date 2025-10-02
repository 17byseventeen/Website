// Mobile navigation
function toggleMobileNav() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Auto-update featured video from YouTube
async function loadLatestVideo() {
    const channelId = 'UCb3tn1-LrLpIM4UaKn6QHsg';
    const container = document.getElementById('youtube-container');
    const placeholder = document.getElementById('loading-placeholder');
    const caption = document.getElementById('video-caption');
    
    try {
        // Use YouTube's RSS feed to get latest video (no API key needed)
        const response = await fetch(`https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
        const text = await response.text();
        
        // Parse the XML to get the latest video ID
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(text, 'text/xml');
        const entries = xmlDoc.getElementsByTagName('entry');
        
        if (entries.length > 0) {
            const latestEntry = entries[0];
            const videoId = latestEntry.getElementsByTagName('yt:videoId')[0].textContent;
            const title = latestEntry.getElementsByTagName('title')[0].textContent;
            
            // Create iframe with the latest video
            const iframe = document.createElement('iframe');
            iframe.width = '100%';
            iframe.height = '400';
            iframe.src = `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0`;
            iframe.frameBorder = '0';
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
            iframe.allowFullscreen = true;
            iframe.style.borderRadius = '8px';
            
            // Replace placeholder with video
            placeholder.style.display = 'none';
            container.insertBefore(iframe, caption);
            caption.textContent = title;
        } else {
            throw new Error('No videos found');
        }
    } catch (error) {
        console.error('Error loading latest video:', error);
        // Fallback: show a link to the channel
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

    // Load latest YouTube video automatically
    loadLatestVideo();


    // Add click handlers for media items (placeholder for future functionality)
    const mediaItems = document.querySelectorAll('.media-item');
    mediaItems.forEach(item => {
        item.addEventListener('click', function() {
            // Placeholder for future video/image modal functionality
            console.log('Media item clicked:', this.querySelector('p').textContent);
        });
    });
});
