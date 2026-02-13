import jiraImg from '../assets/jira-board.jpeg';
import confluenceImg from '../assets/confluence-ebr.jpeg';
import teamsImg from '../assets/teams-calendar.jpeg';
import excelImg from '../assets/excel-dashboard.jpeg';
import notionImg from '../assets/notion-projects.jpeg';

export type ProjectCategory =
  | 'Executive Support'
  | 'Projects'
  | 'Operations'
  | 'Reporting'
  | 'Planning';

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  short: string;
  role: string;
  responsibilities: string[];
  tools: string[];
  outcomes: string[];
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: 'jira-sprints',
    title: 'Sprint Board & Delivery Tracking',
    category: 'Projects',
    short:
      'Managed visibility of tasks across statuses, removing blockers and ensuring clear ownership.',
    role: 'Project coordination & tracking support',
    responsibilities: [
      'Maintained active sprint board with updated status and owners.',
      'Followed up on blocked items, approvals, and QA returns to keep work moving.',
      'Provided quick summaries to leadership on progress and bottlenecks.'
    ],
    tools: ['Jira', 'Confluence', 'Teams/Zoom'],
    outcomes: [
      'Improved daily visibility of priorities and risks.',
      'Faster follow-up on approvals, QA, and blockers.',
      'Clearer accountability across cross-functional work.'
    ],
    images: [{ src: jiraImg, alt: 'Jira sprint board screenshot' }]
  },
  {
    id: 'ebr-index',
    title: 'Executive Business Review Master Index',
    category: 'Reporting',
    short:
      'Organized EBR reporting into a structured Confluence index with owners, status, and update cycles.',
    role: 'Executive reporting & documentation',
    responsibilities: [
      'Built and maintained a master index for senior management reporting.',
      'Set update cadence and captured last-updated status for each report.',
      'Ensured confidentiality practices for leadership-only materials.'
    ],
    tools: ['Confluence', 'Google Workspace', 'Microsoft Word/Excel'],
    outcomes: [
      'Centralized leadership reporting access.',
      'Reduced time spent finding latest versions.',
      'Improved compliance with reporting deadlines.'
    ],
    images: [{ src: confluenceImg, alt: 'Confluence EBR template screenshot' }]
  },
  {
    id: 'calendar-ops',
    title: 'Executive Calendar & Meeting System',
    category: 'Executive Support',
    short:
      'Coordinated meetings, recurring scrums, and executive sessions with clean scheduling and reminders.',
    role: 'Executive calendar & coordination',
    responsibilities: [
      'Scheduled meetings across multiple time blocks and ensured invites were accurate.',
      'Prepared reminders, agendas, and pre-read materials for sessions.',
      'Kept meeting cadence consistent and aligned to priorities.'
    ],
    tools: ['Microsoft Teams', 'Google Calendar', 'Zoom'],
    outcomes: [
      'Reduced scheduling conflicts and missed meetings.',
      'Better preparedness through agendas and pre-reads.',
      'Improved coordination for recurring sessions.'
    ],
    images: [{ src: teamsImg, alt: 'Teams calendar view screenshot' }]
  },
  {
    id: 'excel-dashboard',
    title: 'Excel Reporting Dashboard (Pivot + Charts)',
    category: 'Reporting',
    short:
      'Built a quick reporting view with pivot summaries, filters, and charts for decision-making.',
    role: 'Data organization & reporting',
    responsibilities: [
      'Cleaned and structured data for quick analysis.',
      'Created pivot summaries and chart views for leadership updates.',
      'Used slicers/filters to explore results by region/category.'
    ],
    tools: ['Microsoft Excel', 'Google Sheets'],
    outcomes: [
      'Faster reporting during reviews.',
      'Clearer insights through charts and pivot summaries.',
      'Easier segmentation with slicers and filters.'
    ],
    images: [{ src: excelImg, alt: 'Excel dashboard screenshot' }]
  },
  {
    id: 'notion-tracker',
    title: 'Notion Project Tracker for Leadership Updates',
    category: 'Planning',
    short:
      'Created a structured tracker with objectives, milestones, owners, and status updates for executive decisions.',
    role: 'Project documentation & visibility',
    responsibilities: [
      'Documented projects with objectives, milestones, start/due dates, and owners.',
      'Maintained status updates to support timely executive decisions.',
      'Kept information accessible and neatly organized.'
    ],
    tools: ['Notion', 'Google Workspace'],
    outcomes: [
      'Improved project clarity for leadership.',
      'Easier progress reporting and follow-ups.',
      'More structured decision-making support.'
    ],
    images: [{ src: notionImg, alt: 'Notion projects table screenshot' }]
  }
];

export const projectCategories: (ProjectCategory | 'All')[] = [
  'All',
  'Executive Support',
  'Projects',
  'Operations',
  'Reporting',
  'Planning'
];
