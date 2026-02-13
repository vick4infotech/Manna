export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    title: 'Executive Assistant to the Executive Director',
    company: 'Stella Maris School & Subsidiaries',
    location: 'Abuja',
    dates: 'July 2025 – Present',
    bullets: [
      'Manage executive calendar, meetings, reminders, and priority scheduling.',
      'Prepare meeting agendas, minutes, executive briefs, and follow-up trackers.',
      'Coordinate cross-functional teams across multiple subsidiaries.',
      'Track executive action items and ensure timely completion.',
      'Support executive decision-making with structured documentation and reports.'
    ]
  },
  {
    title: 'Administrative / Executive Support Assistant',
    company: 'Staredge Public Health Consultancy',
    location: 'Abuja',
    dates: 'Nov 2024 – Jun 2025',
    bullets: [
      'Supported executive scheduling, correspondence, and stakeholder engagement.',
      'Assisted with recruitment coordination and staff documentation.',
      'Followed up on project deliverables and reporting deadlines.'
    ]
  }
];

export const highlights = [
  {
    year: '2025–Now',
    title: 'Executive Support at Scale',
    detail: 'Coordinating leadership workflows across multiple subsidiaries with clear trackers and follow-through.'
  },
  {
    year: '2024–2025',
    title: 'Project Delivery Support',
    detail: 'Supported deliverables, documentation, and stakeholder communication for consulting engagements.'
  },
  {
    year: 'Core Strength',
    title: 'Action Tracking & Reporting',
    detail: 'Turning meetings into clear action items, owners, and timelines — consistently.'
  }
] as const;
