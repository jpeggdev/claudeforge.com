document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 60; // Account for fixed navbar
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Copy code blocks on click
    document.querySelectorAll('pre code').forEach(block => {
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.style.cursor = 'pointer';
        
        pre.addEventListener('click', function() {
            const text = block.innerText;
            navigator.clipboard.writeText(text).then(() => {
                // Create minimal tooltip
                const tooltip = document.createElement('div');
                tooltip.textContent = 'Copied';
                tooltip.style.cssText = `
                    position: absolute;
                    top: 8px;
                    right: 8px;
                    background: #000;
                    color: white;
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 12px;
                    font-family: 'Inter', sans-serif;
                `;
                this.appendChild(tooltip);
                
                setTimeout(() => {
                    tooltip.remove();
                }, 1500);
            });
        });
    });
});