// MikeMikeDelta Common Scripts

document.addEventListener('DOMContentLoaded', () => {
    // 1. Global Floating Navbar Scroll Logic
    const nav = document.querySelector('.topbar');
    if (nav) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 40) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // 2. Contact Form Submission Logic (Handles multiple forms)
    const contactForms = document.querySelectorAll('#contact-form');
    
    contactForms.forEach(form => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            
            // Look for or create status message element
            let statusMsg = form.querySelector('#form-status');
            if (!statusMsg) {
                statusMsg = document.createElement('p');
                statusMsg.id = 'form-status';
                statusMsg.style.marginTop = '15px';
                statusMsg.style.fontSize = '0.9rem';
                form.appendChild(statusMsg);
            }
            
            statusMsg.textContent = "Envoi en cours...";
            statusMsg.style.color = "var(--muted)";
            submitBtn.disabled = true;
            submitBtn.textContent = "Patientez...";

            const formData = new FormData(form);
            const payload = Object.fromEntries(formData.entries());

            try {
                const res = await fetch('https://mikemikedelta.alwaysdata.net/api/contact', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(payload),
                });

                if (!res.ok) {
                    const errorData = await res.text();
                    throw new Error(errorData || "Server error");
                }

                statusMsg.textContent = "Merci ! Votre message a bien été reçu. Une réponse arrive bientôt.";
                statusMsg.style.color = "#25d366"; // Success green
                form.reset();
            } catch (err) {
                console.error("Submission error:", err);
                statusMsg.textContent = "Oups, une erreur est survenue. Veuillez nous contacter directement via WhatsApp ou email.";
                statusMsg.style.color = "#e36a3d"; // Accent/Error color
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
            }
        });
    });
});
