export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'public',
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and AI-powered development',
  },
  {
    icon: 'smartphone',
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences',
  },
  {
    icon: 'storage',
    title: 'Backend Development',
    description: 'Scalable backend solutions with robust APIs and database architecture',
  },
  {
    icon: 'search',
    title: 'SEO Services',
    description: 'Optimize your digital presence and increase visibility in search results',
  },
  {
    icon: 'memory',
    title: 'Infrastructure Modernization',
    description: 'Upgrade and optimize your existing infrastructure for better performance',
  },
  {
    icon: 'people',
    title: 'Consultation Services',
    description: 'Expert guidance to help you navigate your technology decisions',
  },
];
