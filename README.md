## Project Description:
The project utilizes the Dogs API to display various dog breeds and their images. Implemented as a web application, it allows users to browse all available dog breeds and view detailed images for a selected breed.

## Homepage Functionalities:
On the homepage, cards with names of different dog breeds are displayed. Each card contains a link that leads to a page with images for the chosen breed.

![slika 1](https://github.com/marijamaric99/dog-app/assets/67763924/339a9176-93f7-48cc-b19c-ef25a052eaaf)


## Breed Page:
The page for an individual dog breed showcases a title with the breed's name and a gallery of images for that breed.

![slika 2](https://github.com/marijamaric99/dog-app/assets/67763924/0cad4cd0-1cdb-41e5-92d2-e072cf3349df)


## Header Component:
A separate component (Header) is used for the header, containing the Dogs API logo and a title. This header is visible on every page, providing consistent navigation.

## Links and Transitions:
Page navigation is facilitated using the Link component from Next.js, providing users with a quick and seamless browsing experience.

## Error Page:
The Error page is designed to inform users when an error occurs during the fetching of API data. 

## NotFound Page:
The NotFound page is displayed when a user attempts to access a page or breed data that does not exist.

## Installation

1. Clone the repository: `git clone https://github.com/your-username/dogs-api-project.git`
2. Inside the project directory, install dependencies: `npm install`

## Running

1. Start the project: `npm start`
2. Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Used Technologies

- Next.js
- React
- Tailwind CSS

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
