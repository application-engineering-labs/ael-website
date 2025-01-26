export const headerData = {
  links: [
    {
      text: 'Our Services',
      href: '#services',
      dataTestId: 'nav__link-services',
    },
    {
      text: 'Who We Are',
      href: '#about',
      dataTestId: 'nav__link-about',
    },
    {
      text: 'Contact Us',
      href: '#contact',
      dataTestId: 'nav__link-contact',
    },
  ]
};

export const footerData = {
  links: [
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#about' },
        { text: 'Services', href: '#services' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/application-engineering-labs' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/application-engineering-labs' },
  ],
  footNote: '&copy; 2025. All rights reserved.',
};
