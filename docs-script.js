document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offset = 80;
                const targetPosition = target.offsetTop - offset;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Update active state in sidebar
                updateActiveLink(this.getAttribute('href'));
            }
        });
    });
    
    // Update active link based on scroll position
    function updateActiveLink(hash) {
        document.querySelectorAll('.docs-nav a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === hash) {
                link.classList.add('active');
            }
        });
    }
    
    // Highlight active section on scroll
    const sections = document.querySelectorAll('.docs-section');
    const navLinks = document.querySelectorAll('.docs-nav a');
    
    function highlightActiveSection() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initial call
    
    // Copy code blocks on click
    document.querySelectorAll('pre code').forEach(block => {
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.style.cursor = 'pointer';
        
        // Add copy button
        const copyBtn = document.createElement('button');
        copyBtn.textContent = 'Copy';
        copyBtn.style.cssText = `
            position: absolute;
            top: 8px;
            right: 8px;
            background: var(--accent);
            color: white;
            border: none;
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 12px;
            font-family: 'Inter', sans-serif;
            cursor: pointer;
            opacity: 0;
            transition: opacity 0.2s;
        `;
        
        pre.appendChild(copyBtn);
        
        // Show button on hover
        pre.addEventListener('mouseenter', () => {
            copyBtn.style.opacity = '1';
        });
        
        pre.addEventListener('mouseleave', () => {
            if (copyBtn.textContent === 'Copy') {
                copyBtn.style.opacity = '0';
            }
        });
        
        // Copy on click
        copyBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const text = block.innerText;
            navigator.clipboard.writeText(text).then(() => {
                copyBtn.textContent = 'Copied!';
                setTimeout(() => {
                    copyBtn.textContent = 'Copy';
                    copyBtn.style.opacity = '0';
                }, 2000);
            });
        });
    });
    
    // Add syntax highlighting classes (for future enhancement)
    document.querySelectorAll('pre code').forEach(block => {
        const text = block.textContent;
        const language = detectLanguage(text);
        if (language) {
            block.classList.add(`language-${language}`);
        }
    });
    
    function detectLanguage(text) {
        if (text.includes('#!/bin/bash') || text.includes('npm ') || text.includes('curl ')) {
            return 'bash';
        }
        if (text.includes('FROM ') || text.includes('RUN ') || text.includes('EXPOSE ')) {
            return 'dockerfile';
        }
        if (text.includes('version:') && text.includes('services:')) {
            return 'yaml';
        }
        if (text.trim().startsWith('{') || text.includes('"id":')) {
            return 'json';
        }
        if (text.includes('const ') || text.includes('function ') || text.includes('=>')) {
            return 'javascript';
        }
        if (text.includes('server {') || text.includes('location ')) {
            return 'nginx';
        }
        return null;
    }
    
    // Mobile sidebar toggle
    const sidebar = document.querySelector('.docs-sidebar');
    const content = document.querySelector('.docs-content');
    
    if (window.innerWidth <= 1024) {
        // Create toggle button for mobile
        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = 'Menu';
        toggleBtn.style.cssText = `
            position: fixed;
            bottom: 24px;
            right: 24px;
            background: var(--accent);
            color: white;
            border: none;
            padding: 12px 24px;
            border-radius: 24px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            z-index: 1000;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        `;
        
        document.body.appendChild(toggleBtn);
        
        toggleBtn.addEventListener('click', () => {
            sidebar.classList.toggle('mobile-visible');
        });
    }
});