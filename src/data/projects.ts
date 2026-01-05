
export interface Project {
  id: string
  title: string
  stack: string[]
  demoUrl?: string
  repoUrl?: string
  description?: string
  image?: string
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Shorty',
    stack: ['React', 'Vite', 'TypeScript', 'TailwindCSS'],
    image: '/projects/ShortyURL.png',
    repoUrl: 'https://github.com/brahian117/urlshortenerweb',
    demoUrl: 'https://shtu.vercel.app/',
    description:
      'Modern URL shortening web app built with React and TypeScript. Provides a clean UI, fast client-side performance, and seamless integration with a custom REST API for URL creation and redirection.'
  },
  {
    id: '2',
    title: 'URLShortenerAPI',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'EF', 'Azure'],
    image: '/projects/ShortyAPI.png',
    repoUrl: 'https://github.com/brahian117/urlshortenerapi',
    demoUrl: 'https://shtu.vercel.app/',
    description:
      'RESTful API developed with ASP.NET and Entity Framework to manage URL shortening and redirections. Implements persistent storage, scalable architecture, and cloud deployment on Azure.'
  },
  {
    id: '3',
    title: 'PatronusBazar',
    image: '/projects/Patronus.png',
    stack: ['Angular', 'C#', 'TypeScript', 'MySQL', 'CSS'],
    repoUrl: 'https://github.com/Brahian117/PatronusBazar',
    description:
      'Full-stack e-commerce platform inspired by the Harry Potter universe. Built with Angular on the frontend and a C# backend, featuring product management, dynamic views, and database integration with MySQL.'
  }
];

