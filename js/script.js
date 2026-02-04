document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active-mobile');
        });
    }

    // Toggle Completed Projects in Research Page
    const toggleBtn = document.getElementById('toggle-completed-btn');
    const completedList = document.getElementById('completed-projects-list');

    if (toggleBtn && completedList) {
        toggleBtn.addEventListener('click', () => {
            if (completedList.classList.contains('hidden')) {
                completedList.classList.remove('hidden');
                toggleBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Completed Projects (2 projects)';
            } else {
                completedList.classList.add('hidden');
                toggleBtn.innerHTML = '<i class="fas fa-chevron-down"></i> Show Completed Projects (2 projects)';
            }
        });
    }
});


// Toggle Older Publications
const togglePubsBtn = document.getElementById('toggle-pubs-btn');
const olderPubsList = document.getElementById('older-publications');

if (togglePubsBtn && olderPubsList) {
    togglePubsBtn.addEventListener('click', () => {
        if (olderPubsList.classList.contains('hidden')) {
            olderPubsList.classList.remove('hidden');
            togglePubsBtn.innerHTML = '<i class="fas fa-chevron-up"></i> Hide Older Publications (9 papers)';
        } else {
            olderPubsList.classList.add('hidden');
            togglePubsBtn.innerHTML = '<i class="fas fa fa-chevron-down"></i> Show Older Publications (9 papers)';
        }
    });
}

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
