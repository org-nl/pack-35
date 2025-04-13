// Toggle FAQ items
document.addEventListener('DOMContentLoaded', function() {
	// Set the first FAQ item as active by default
	const firstFaqItem = document.querySelector('.faq-item');
	if (firstFaqItem) {
	  firstFaqItem.classList.add('active');
	}
  
	// Add click event listeners to all FAQ questions
	const faqQuestions = document.querySelectorAll('.faq-question');
	faqQuestions.forEach(question => {
	  question.addEventListener('click', function() {
		// Toggle active class on the parent item
		const faqItem = this.parentElement;
		if (faqItem.classList.contains('active')) {
		  faqItem.classList.remove('active');
		} else {
		  // Optional: Close other open FAQ items
		  document.querySelectorAll('.faq-item').forEach(item => {
			item.classList.remove('active');
		  });
		  faqItem.classList.add('active');
		}
	  });
	});
  
	// Mobile navigation toggle (if we added a hamburger menu)
	const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
	const navMenu = document.querySelector('.nav');
  
	if (mobileMenuToggle && navMenu) {
	  mobileMenuToggle.addEventListener('click', function() {
		navMenu.classList.toggle('active');
		mobileMenuToggle.classList.toggle('active');
	  });
	}
  
	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		if (targetId === '#') return;
  
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
		  window.scrollTo({
			top: targetElement.offsetTop - 80, // Offset for fixed header
			behavior: 'smooth'
		  });
		}
	  });
	});
  
	// Sticky header on scroll
	let lastScrollPosition = 0;
	const header = document.querySelector('.header');
  
	if (header) {
	  window.addEventListener('scroll', function() {
		const currentScrollPosition = window.pageYOffset;
  
		if (currentScrollPosition > 200) {
		  header.classList.add('sticky');
		} else {
		  header.classList.remove('sticky');
		}
  
		lastScrollPosition = currentScrollPosition;
	  });
	}
  
	// Initialize buttons with download functionality
	const downloadButtons = document.querySelectorAll('.cta-button[data-download]');
	downloadButtons.forEach(button => {
	  button.addEventListener('click', function(e) {
		e.preventDefault();
		const platform = this.getAttribute('data-download');
		console.log(`Downloading for ${platform}...`);
		// In a real implementation, this would trigger the download
		// or redirect to an appropriate page
  
		// For demo purposes, we'll just show an alert
		alert(`Download initiated for ${platform}. Thank you for choosing Betmomo!`);
	  });
	});
  });
  