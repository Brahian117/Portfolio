export interface Project {
  id: string
  title: string
  stack: string[]
  demoUrl?: string
  repoUrl?: string
  description?: string
  
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Shorty',
    stack: ['React', 'TypeScript', 'TailwindCSS','Vite'],
    repoUrl: 'https://github.com/brahian117/urlshortenerweb',
    demoUrl: 'https://shtu.vercel.app/',
    description: 'Web application to shorten URLs efficiently, connected to URLShortenerAPI.'
  },
  {
    id: '2',
    title: 'URLShortenerAPI',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'EF','Azure'],
    repoUrl: 'https://github.com/brahian117/urlshortenerapi',
    description: 'API used by Shorty to shorten URLs or get redirects.'
  },
  {
    id: '3',
    title: 'PatronusBazar',
    stack: ['Angular', 'C#', 'TypeScript','MySQL', 'CSS'],
    repoUrl: 'https://github.com/Brahian117/PatronusBazar',
    description: 'Harry Potter e-commerce platform built with Angular and C# backend.'

  }
]
