// Central place to edit contact details and links.
export const site = {
  name: 'Rupanjan Bhattacharyya',
  role: 'Electrical Engineering · Nano-Device & Compute-in-Memory Research',
  institution: 'IIEST Shibpur',
  email: 'brupanjan27@gmail.com',
  emailAlt: '2023eeb106.rupanjan@students.iiests.ac.in',
  phone: '+91-9474145879',
  location: 'Howrah, West Bengal, India',
  // Normalized to one trailing slash so the CV link stays correct under both
  // user-site and project-site deploys (respects `base` in astro.config.mjs).
  cv: `${import.meta.env.BASE_URL.replace(/\/?$/, '/')}cv.pdf`,
  github: 'https://github.com/RupanjanBhattacharyya',
  linkedin: 'https://www.linkedin.com/in/rupanjan-bhattacharyya/',
};
