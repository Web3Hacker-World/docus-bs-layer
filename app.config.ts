import { langText } from './lang/index'

export default defineAppConfig({
  docus: {
    title: 'Web3Hacker.World',
    titleTemplate: (titleChunk) => {
      return titleChunk ? `${titleChunk} - Web3Hacker.World` : 'Web3Hacker.World';
    },
    description: langText.description,
    image: '/Web3Hacker.World.jpg', // TODO
    socials: {
      twitter: 'Web3HackerWorld',
      github: 'Web3HackerWorld'
    },
    aside: {
      level: 1,
      exclude: []
    },
    header: {
      logo: true,
      "fluid": false
    },
    footer: {
      credits: {
        icon: '',
        text: '©2023 Web3Hacker.World',
        href: 'https://Web3Hacker.World',
      },
      "fluid": false
    }
  }
})
