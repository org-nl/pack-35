// Toggle qaBlock items
document.addEventListener('DOMContentLoaded', function() {
	// Add click event listeners to all qaBlock questions
	const qaBlockQuestions = document.querySelectorAll('.qaBlock-question');
	qaBlockQuestions.forEach(question => {
	  question.addEventListener('click', function() {
		// Toggle active class on the parent item
		const qaBlockItem = this.parentElement;
		if (qaBlockItem.classList.contains('active')) {
		  qaBlockItem.classList.remove('active');
		} else {
		  // Optional: Close other open qaBlock items
		  document.querySelectorAll('.qaBlock-item').forEach(item => {
			item.classList.remove('active');
		  });
		  qaBlockItem.classList.add('active');
		}
	  });
	});
  
	// Smooth scrolling for anchor links
	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	  anchor.addEventListener('click', function(e) {
		e.preventDefault();
		const targetId = this.getAttribute('href');
		if (targetId === '#') return;
  
		const targetElement = document.querySelector(targetId);
		if (targetElement) {
		  window.scrollTo({
			top: targetElement.offsetTop, // Offset for fixed header
			behavior: 'smooth'
		  });
		}
	  });
	});

	// Open contentNav links
	const contentNavTitle = document.querySelector('.contentNav-title');

	contentNavTitle.addEventListener('click', function() {
		const contentNav = this.closest('.contentNav'); // Finds the parent element with class .contentNav
		if (contentNav.classList.contains('active')) {
		  contentNav.classList.remove('active');
		} else {
		  contentNav.classList.add('active');
		}
	});
  });
  