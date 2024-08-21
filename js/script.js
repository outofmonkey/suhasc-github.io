// window.onload = function() {
// 	var contactform = document.getElementById('contact-form');
// 	contactform.setAttribute('action', '//formspree.io/' + 'name' + '@' + 'gmail' + '.' + 'com');
// }
// Download PDF file when button is clicked and a new tab is opened
document.addEventListener('DOMContentLoaded', function() {
	const downloadBtn = document.getElementById('downloadBtn');
	const now = new Date();
	const day = now.getDate().toString().padStart(2, '0'); // Get day with leading zero
	const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Get month with leading zero
	const year = now.getFullYear(); // Get full year
	const fileName = `SUHAS.C-${day}-${month}-FY${year}.pdf`;
	const fileUrl = './resume.pdf'; // Adjust to the correct file path
	downloadBtn.addEventListener('click', function(event) {
		event.preventDefault(); // Prevent default link behavior
		fetch(fileUrl).then(response => {
			if(!response.ok) throw new Error('Network response was not ok');
			return response.blob();
		}).then(blob => {
			const url = window.URL.createObjectURL(blob);
			const a = document.createElement('a');
			a.href = url;
			a.download = fileName; // Set the dynamic filename
			document.body.appendChild(a);
			a.click();
			a.remove();
			window.URL.revokeObjectURL(url);
		}).catch(error => {
			console.error('Failed to download the file:', error);
			alert('Failed to download the file.');
		});
	});
});
//  JavaScript to disable copying of everything except the email address
//  document.addEventListener('contextmenu', function(e) {
//     if (!e.target.closest('.email')) {
//       e.preventDefault();
//     }
//   });
// Auto typing effect using Typed.js
document.addEventListener('DOMContentLoaded', function() {
	var options = {
		strings: ["Cloud Operations Engineer", "Linux Administrator", "Cloud Administrator", "DevOps Engineer", "Cloud Infrastructure Administrator"],
		typeSpeed: 100, // Speed in milliseconds
		backSpeed: 60, // Speed in milliseconds
		backDelay: 1500, // Delay before starting to delete
		startDelay: 500, // Delay before starting typing
		loop: true, // Loop the typing effect
		loopCount: Infinity, // Number of loops, -1 for infinite
		showCursor: true, // Show cursor
		cursorChar: '|', // Cursor character
		autoInsertCss: true, // Automatically insert CSS
		cursorBlink: true // Enable cursor blinking
	};
	var typed = new Typed('#typing-role', options);
});

