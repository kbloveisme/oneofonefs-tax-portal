document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const headerOffset = header ? header.offsetHeight + 8 : 72;

    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            event.preventDefault();
            const y = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        });
    });

    const pricingElement = document.querySelector('.price');
    const billingButtons = document.querySelectorAll('.toggle-btn');
    billingButtons.forEach((button) => {
        button.addEventListener('click', () => {
            billingButtons.forEach((b) => b.classList.remove('active'));
            button.classList.add('active');
            if (!pricingElement) return;
            const billing = button.dataset.billing;
            pricingElement.textContent = billing === 'yearly'
                ? pricingElement.dataset.yearly || '$99.99/year'
                : pricingElement.dataset.monthly || '$9.99/month';
        });
    });

    document.querySelectorAll('.faq-question').forEach((question) => {
        question.addEventListener('click', () => {
            const item = question.closest('.faq-item');
            if (!item) return;
            const expanded = item.classList.toggle('open');
            question.setAttribute('aria-expanded', String(expanded));
        });
    });
});
