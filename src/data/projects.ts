import  ShortyImage  from '../assets/projects/shorty.png';
import  ShortyApiImage  from '../assets/projects/ShortyAPI.png';
import  PatronusImage  from '../assets/projects/Patronus.png';

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
    stack: ['React', 'TypeScript', 'TailwindCSS','Vite'],
    image: ShortyImage,
    repoUrl: 'https://github.com/brahian117/urlshortenerweb',
    demoUrl: 'https://shtu.vercel.app/',
    description: 'Web application to shorten URLs efficiently, connected to URLShortenerAPI.'
  },
  {
    id: '2',
    title: 'URLShortenerAPI',
    stack: ['C#', 'ASP.NET', 'SQL Server', 'EF','Azure'],
    image: ShortyApiImage,
    repoUrl: 'https://github.com/brahian117/urlshortenerapi',
    demoUrl: 'https://shtu.vercel.app/',
    description: 'API used by Shorty to shorten URLs or get redirects.'
  },
  {
    id: '3',
    title: 'PatronusBazar',
    image: PatronusImage,
    stack: ['Angular', 'C#', 'TypeScript','MySQL', 'CSS'],
    repoUrl: 'https://github.com/Brahian117/PatronusBazar',
    description: 'Harry Potter e-commerce platform built with Angular and C# backend.'

  }
]
