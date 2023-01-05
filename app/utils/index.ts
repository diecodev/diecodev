interface IExperience {
  id: string
  position: string
  company: string
  date: string
  requirements: string[]
}

export const experienceArray: IExperience[] = [
  {
    id: '0',
    position: 'Mobile Developer',
    company: 'Unico Logística',
    date: 'January 2022 - Present. [Buenos Aires, Argentina]',
    requirements: [
      'Design all the screens that appear in the application, applying knowledge of UX and UI.',
      'Develop API for client-server communication. implement password encrypt, database management (MongoDB) and error handler (HTTP status code).',
      'Create a mobile app using React Native to automate the processes that are carried out internally in the company.',
    ]
  },
  {
    id: '1',
    position: 'Front-end Developer',
    company: 'estuarg.com',
    date: 'June 2021 - December 2021. [Buenos Aires, Argentina]',
    requirements: [
      'Design the web page using Figma and create all the necessary files and assets to share with customers.',
      'Create the web page using Next.js and TypeScript.',
      'Deploy git project in Vercel platform, configure domain and DNS.',
    ]
  }
] 