// ===== FEATURED CAROUSEL AUTO-SCROLL =====
document.addEventListener('DOMContentLoaded', function() {
    const featuredCarousel = document.getElementById('featuredCarousel');
    const featuredSlides = document.querySelectorAll('.featured-slide');
    const featuredIndicators = document.querySelectorAll('.featured-indicator');

    if (featuredCarousel && featuredSlides.length > 0) {
        let currentFeaturedSlide = 0;
        let featuredInterval;

        function showFeaturedSlide(n) {
            // Hide all slides
            featuredSlides.forEach(slide => {
                slide.classList.remove('opacity-100');
                slide.classList.add('opacity-0');
            });

            // Show current slide
            if (featuredSlides[n]) {
                featuredSlides[n].classList.remove('opacity-0');
                featuredSlides[n].classList.add('opacity-100');
            }

            // Update indicators
            featuredIndicators.forEach((indicator, index) => {
                indicator.classList.remove('active', 'bg-blue-400');
                indicator.classList.add('bg-white/40');
                if (index === n) {
                    indicator.classList.add('active', 'bg-blue-400');
                    indicator.classList.remove('bg-white/40');
                }
            });

            currentFeaturedSlide = n;
        }

        function nextFeaturedSlide() {
            showFeaturedSlide((currentFeaturedSlide + 1) % featuredSlides.length);
        }

        function resetFeaturedInterval() {
            clearInterval(featuredInterval);
            featuredInterval = setInterval(nextFeaturedSlide, 4000); // Change every 4 seconds
        }

        // Indicator click functionality
        featuredIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showFeaturedSlide(index);
                resetFeaturedInterval();
            });
        });

        // Pause on hover
        if (featuredCarousel) {
            featuredCarousel.addEventListener('mouseenter', () => clearInterval(featuredInterval));
            featuredCarousel.addEventListener('mouseleave', () => {
                featuredInterval = setInterval(nextFeaturedSlide, 4000);
            });
        }

        // Initialize
        showFeaturedSlide(0);
        featuredInterval = setInterval(nextFeaturedSlide, 4000);
    }
});

// ===== HERO SLIDER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const heroSlider = document.getElementById('heroSlider');
    const nextSlideBtn = document.getElementById('nextSlide');
    const prevSlideBtn = document.getElementById('prevSlide');
    const sliderIndicators = document.querySelectorAll('.slider-indicator');
    const slideCounter = document.getElementById('slideCounter');

    if (heroSlider) {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.hero-slide');
        const totalSlides = slides.length;
        let sliderInterval;

        function showSlide(n) {
            // Remove opacity from all slides
            slides.forEach(slide => slide.classList.remove('opacity-100'));
            slides.forEach(slide => slide.classList.add('opacity-0'));

            // Add opacity to current slide
            if (slides[n]) {
                slides[n].classList.remove('opacity-0');
                slides[n].classList.add('opacity-100');
            }

            // Update indicators
            sliderIndicators.forEach((indicator, index) => {
                indicator.classList.remove('active', 'opacity-100');
                indicator.classList.add('opacity-50');
                if (index === n) {
                    indicator.classList.add('active', 'opacity-100');
                    indicator.classList.remove('opacity-50');
                }
            });

            // Update counter
            if (slideCounter) {
                slideCounter.textContent = `Slide ${n + 1} of ${totalSlides}`;
            }

            currentSlide = n;
        }

        function nextSlide() {
            showSlide((currentSlide + 1) % totalSlides);
            resetSliderInterval();
        }

        function prevSlide() {
            showSlide((currentSlide - 1 + totalSlides) % totalSlides);
            resetSliderInterval();
        }

        function autoSlide() {
            nextSlide();
        }

        function resetSliderInterval() {
            clearInterval(sliderInterval);
            sliderInterval = setInterval(autoSlide, 5000); // Change slide every 5 seconds
        }

        // Event listeners for controls
        if (nextSlideBtn) {
            nextSlideBtn.addEventListener('click', nextSlide);
        }
        if (prevSlideBtn) {
            prevSlideBtn.addEventListener('click', prevSlide);
        }

        // Indicator buttons
        sliderIndicators.forEach((indicator, index) => {
            indicator.addEventListener('click', () => {
                showSlide(index);
                resetSliderInterval();
            });
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight') nextSlide();
            if (e.key === 'ArrowLeft') prevSlide();
        });

        // Auto-slide interval
        sliderInterval = setInterval(autoSlide, 5000);

        // Pause on mouse hover
        if (heroSlider) {
            heroSlider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
            heroSlider.addEventListener('mouseleave', () => {
                sliderInterval = setInterval(autoSlide, 5000);
            });
        }

        // Initialize first slide
        showSlide(0);
    }
});


// ===== MOBILE MENU FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    // Toggle mobile menu
    if (mobileMenuBtn) {
        mobileMenuBtn.setAttribute('aria-expanded', 'false');

        mobileMenuBtn.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
            mobileMenuBtn.setAttribute('aria-expanded', String(!mobileMenu.classList.contains('hidden')));
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnButton = mobileMenuBtn.contains(event.target);
            
            if (!isClickInsideMenu && !isClickOnButton) {
                mobileMenu.classList.add('hidden');
                mobileMenuBtn.setAttribute('aria-expanded', 'false');
            }
        });
    }
});

// ===== SMOOTH SCROLL FOR ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for lightbox or other special links
        if (href === '#' || href.startsWith('#lightbox')) {
            return;
        }

        e.preventDefault();
        
        const element = document.querySelector(href);
        if (element) {
            const headerOffset = 80; // Account for fixed nav
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== SCROLL REVEAL ANIMATION =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const scrollRevealObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class to elements with data-scroll attribute
            const elements = entry.target.querySelectorAll('[data-scroll]');
            elements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, index * 100);
            });

            scrollRevealObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe sections
document.querySelectorAll('section').forEach(section => {
    scrollRevealObserver.observe(section);
});

// ===== ACTIVE NAV LINK HIGHLIGHTING =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('text-blue-600');
        const href = link.getAttribute('href');
        if (href === '#' + current) {
            link.classList.add('text-blue-600');
        }
    });
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== NAVBAR SHADOW ON SCROLL =====
const navbar = document.querySelector('nav');
if (navbar) {
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-lg');
        } else {
            navbar.classList.remove('shadow-lg');
        }
    });
}

// ===== COUNTER ANIMATION FOR STATS =====
function animateCounters() {
    const counters = document.querySelectorAll('.counter[data-count]');
    const animated = new Set();
    
    const counterOptions = {
        threshold: 0.45,
        rootMargin: '0px'
    };

    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            const isRepeat = entry.target.getAttribute('data-repeat') === 'true';

            if (entry.isIntersecting) {
                if (!animated.has(entry.target) || isRepeat) {
                    animated.add(entry.target);
                    animateCounter(entry.target);
                }
            } else if (isRepeat) {
                // Reset repeated counters so they animate again when re-entering view.
                animated.delete(entry.target);
                entry.target.textContent = '0';
            }
        });
    }, counterOptions);

    counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(element) {
    const finalValue = parseInt(element.getAttribute('data-count'));
    const startValue = 0;
    const duration = 2000; // 2000ms = 2 seconds
    const easeOutQuad = (t) => t * (2 - t); // easing function for smooth feel
    const startTime = Date.now();

    const updateCounter = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easeOutQuad(progress);
        const currentValue = Math.floor(startValue + (finalValue - startValue) * easedProgress);
        
        element.textContent = currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = finalValue;
        }
    };

    updateCounter();
}

// Call counter animation on page load
document.addEventListener('DOMContentLoaded', animateCounters);

// ===== FORM VALIDATION =====
function initializeFormValidation() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        // Skip forms with dedicated custom handlers.
        if (form.id === 'quotationForm' || form.hasAttribute('data-custom-handler')) {
            return;
        }

        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Validate form fields
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.classList.add('border-red-500');
                    isValid = false;
                } else {
                    input.classList.remove('border-red-500');
                }
            });

            if (isValid) {
                // Form submission success
                console.log('Form submitted successfully');
                form.reset();
                
                // Show success message if confirmation is needed
                if (form.hasAttribute('data-success-message')) {
                    alert(form.getAttribute('data-success-message'));
                }
            }
        });

        // Remove error styling on focus
        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.classList.remove('border-red-500');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeFormValidation);

// ===== QUOTATION FORM HANDLER =====
function initQuotationForm() {
    const quotationForm = document.getElementById('quotationForm');
    if (!quotationForm) return;

    quotationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate all required fields
        const requiredInputs = quotationForm.querySelectorAll('[required]');
        let isValid = true;
        
        requiredInputs.forEach(input => {
            if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
                input.classList.add('border-red-500', 'bg-red-50');
                isValid = false;
            } else {
                input.classList.remove('border-red-500', 'bg-red-50');
            }
        });

        if (isValid) {
            // Collect form data
            const formData = new FormData(quotationForm);
            const data = {
                fullName: formData.get('fullName'),
                company: formData.get('company'),
                email: formData.get('email'),
                phone: formData.get('phone'),
                location: formData.get('location'),
                category: formData.get('category'),
                description: formData.get('description'),
                budget: formData.get('budget'),
                startDate: formData.get('startDate'),
                timeline: formData.get('timeline'),
                source: formData.get('source'),
                timestamp: new Date().toISOString()
            };
            
            // Log form data (in production, send to backend)
            console.log('Quotation Request:', data);
            
            // Show success message
            const successMsg = document.getElementById('successMessage');
            successMsg.classList.remove('hidden');
            quotationForm.style.opacity = '0.5';
            quotationForm.style.pointerEvents = 'none';
            
            // Scroll to success message
            successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Reset form after 3 seconds
            setTimeout(() => {
                quotationForm.reset();
                quotationForm.style.opacity = '1';
                quotationForm.style.pointerEvents = 'auto';
                successMsg.classList.add('hidden');
            }, 3000);
        } else {
            alert('Please fill in all required fields correctly.');
        }
    });

    // Remove error styling on focus
    const formInputs = quotationForm.querySelectorAll('input, textarea, select');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.remove('border-red-500', 'bg-red-50');
        });
    });
}

document.addEventListener('DOMContentLoaded', initQuotationForm);

// ===== LAZY LOAD IMAGES =====
function lazyLoadImages() {
    const images = document.querySelectorAll('img[loading="lazy"]');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset && img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('loading');
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        }, {rootMargin: '200px 0px'});

        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback: load all images immediately
        images.forEach(img => {
            if (img.dataset && img.dataset.src) img.src = img.dataset.src;
        });
    }
}

document.addEventListener('DOMContentLoaded', lazyLoadImages);

// ===== BACK TO TOP BUTTON =====
function initBackToTop() {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.className = 'fixed bottom-8 right-8 bg-blue-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-blue-700 transition opacity-0 invisible duration-300';
    backToTopBtn.id = 'backToTop';
    document.body.appendChild(backToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.remove('opacity-0', 'invisible');
        } else {
            backToTopBtn.classList.add('opacity-0', 'invisible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

document.addEventListener('DOMContentLoaded', initBackToTop);

// ===== PARALLAX EFFECT (OPTIONAL) =====
function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;

    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const scrollPosition = window.scrollY;
            const elementOffset = element.offsetTop;
            const parallaxValue = (scrollPosition - elementOffset) * 0.5;
            
            element.style.transform = `translateY(${parallaxValue}px)`;
        });
    });
}

document.addEventListener('DOMContentLoaded', initParallax);

// ===== DARK MODE TOGGLE (OPTIONAL) =====
function initDarkMode() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    if (!darkModeToggle) return;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
    }

    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
        const isDark = document.documentElement.classList.contains('dark');
        localStorage.setItem('darkMode', isDark);
    });
}

document.addEventListener('DOMContentLoaded', initDarkMode);

// ===== HORIZONTAL LOGO SLIDERS =====
function initLogoSlider(config) {
    const wrapper = document.getElementById(config.wrapperId);
    const track = document.getElementById(config.trackId);
    const prevBtn = document.getElementById(config.prevBtnId);
    const nextBtn = document.getElementById(config.nextBtnId);

    if (!wrapper || !track || !prevBtn || !nextBtn) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollStep = config.scrollStep || 220;
    const autoStep = config.autoStep || 170;
    const intervalMs = config.intervalMs || 1400;
    let autoInterval = null;

    function maxScrollLeft() {
        return Math.max(wrapper.scrollWidth - wrapper.clientWidth, 0);
    }

    function scrollByStep(direction) {
        const nextLeft = wrapper.scrollLeft + direction * scrollStep;
        const maxLeft = maxScrollLeft();

        if (nextLeft >= maxLeft - 4) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        if (nextLeft <= 0) {
            wrapper.scrollTo({ left: maxLeft, behavior: 'smooth' });
            return;
        }

        wrapper.scrollBy({ left: direction * scrollStep, behavior: 'smooth' });
    }

    function autoAdvance() {
        const maxLeft = maxScrollLeft();
        if (maxLeft <= 0) return;

        if (wrapper.scrollLeft >= maxLeft - 4) {
            wrapper.scrollTo({ left: 0, behavior: 'smooth' });
            return;
        }

        wrapper.scrollBy({ left: autoStep, behavior: 'smooth' });
    }

    function stopAuto() {
        if (autoInterval) {
            clearInterval(autoInterval);
            autoInterval = null;
        }
    }

    function startAuto() {
        if (reducedMotion || autoInterval) return;
        autoInterval = setInterval(autoAdvance, intervalMs);
    }

    function resetAuto() {
        stopAuto();
        startAuto();
    }

    prevBtn.addEventListener('click', () => {
        scrollByStep(-1);
        resetAuto();
    });

    nextBtn.addEventListener('click', () => {
        scrollByStep(1);
        resetAuto();
    });

    wrapper.addEventListener('mouseenter', stopAuto);
    wrapper.addEventListener('mouseleave', startAuto);
    wrapper.addEventListener('touchstart', stopAuto, { passive: true });
    wrapper.addEventListener('touchend', () => {
        setTimeout(startAuto, intervalMs);
    }, { passive: true });

    startAuto();
}

document.addEventListener('DOMContentLoaded', function() {
    initLogoSlider({
        wrapperId: 'clientsLogosWrapper',
        trackId: 'clientsLogosTrack',
        prevBtnId: 'clientsPrevBtn',
        nextBtnId: 'clientsNextBtn',
        scrollStep: 260,
        autoStep: 200,
        intervalMs: 1200
    });

    initLogoSlider({
        wrapperId: 'certificationsLogosWrapper',
        trackId: 'certificationsLogosTrack',
        prevBtnId: 'certificationsPrevBtn',
        nextBtnId: 'certificationsNextBtn',
        scrollStep: 220,
        autoStep: 170,
        intervalMs: 1300
    });
});

// ===== WHY CHOOSE INTERACTIVE CARDS =====
function initWhyChooseCards() {
    const strip = document.getElementById('whyChooseStrip');
    if (!strip) return;

    const cards = Array.from(strip.querySelectorAll('.why-card'));
    if (!cards.length) return;

    function activateCard(activeCard) {
        cards.forEach(card => {
            const trigger = card.querySelector('.why-card-trigger');
            const isActive = card === activeCard;
            card.classList.toggle('is-active', isActive);

            if (trigger) {
                trigger.setAttribute('aria-expanded', String(isActive));
            }
        });
    }

    cards.forEach(card => {
        const trigger = card.querySelector('.why-card-trigger');
        if (!trigger) return;

        trigger.addEventListener('click', () => activateCard(card));
        card.addEventListener('mouseenter', () => activateCard(card));
        card.addEventListener('focusin', () => activateCard(card));
    });

    const initialCard = strip.querySelector('.why-card.is-active') || cards[0];
    activateCard(initialCard);
}

document.addEventListener('DOMContentLoaded', initWhyChooseCards);

// ===== KEYBOARD SHORTCUTS =====
function initKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Press '/' to focus search (if search exists)
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            const searchInput = document.getElementById('searchInput');
            if (searchInput) {
                searchInput.focus();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initKeyboardShortcuts);

// ===== PRINT FUNCTIONALITY =====
function initPrintButton() {
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', () => {
            window.print();
        });
    }
}

document.addEventListener('DOMContentLoaded', initPrintButton);

// ===== SHARE BUTTONS =====
function initShareButtons() {
    const shareButtons = document.querySelectorAll('[data-share]');
    
    shareButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const platform = btn.getAttribute('data-share');
            const url = window.location.href;
            const title = document.title;
            const text = document.querySelector('meta[name="description"]')?.getAttribute('content') || 'Check this out!';

            const shareUrls = {
                twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
                linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
                facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
            };

            if (shareUrls[platform]) {
                window.open(shareUrls[platform], '_blank', 'width=600,height=400');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initShareButtons);

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// ===== ERROR HANDLING =====
window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

// ===== PERFORMANCE MONITORING =====
if ('PerformanceObserver' in window) {
    const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
            if (entry.entryType === 'largest-contentful-paint') {
                console.log('LCP:', entry.renderTime || entry.loadTime);
            }
        }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint'] });
}

// ===== INITIALIZATION =====
console.log('Marshk website loaded successfully');
