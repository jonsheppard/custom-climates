# Custom Climates Website

This repository contains the source code for the Custom Climates corporate website. The site is built with [Astro](https://astro.build/) and styled with [Tailwind CSS](https://tailwindcss.com/). It is deployed and hosted on [Netlify](https://www.netlify.com/).

## 🚀 Tech Stack

*   **Framework:** [Astro](https://astro.build/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Hosting & Forms:** [Netlify](https://www.netlify.com/)
*   **Content Management:** [Decap CMS](https://decapcms.org/) (formerly Netlify CMS)
*   **Large File Handling:** [Git LFS](https://git-lfs.github.com/)

## 🛠️ Getting Started

Follow these steps to get the project running locally.

### Prerequisites

*   [Node.js](https://nodejs.org/) (version specified in `.nvmrc` if available)
*   [pnpm](https://pnpm.io/installation) (or your preferred package manager)
*   [Git LFS](https://git-lfs.com/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/jonsheppard/custom-climates.git
    cd custom-climates
    ```

2.  **Install Git LFS:**
    Make sure Git LFS is installed and initialized.
    ```sh
    brew install git-lfs
    git lfs install
    ```

3.  **Install dependencies:**
    ```sh
    npm install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
npm run dev
```

The site will be available at `http://localhost:4321`.

## 📝 Content Management

Content for this website is managed through Decap CMS. To access the content management interface, navigate to `/admin` on the live site (e.g., `https://your-site-name.netlify.app/admin`).

You will be prompted to log in with your Netlify credentials. From there, you can edit pages, equipment listings, and other content.

## 🚀 Deployment

This site is configured for continuous deployment through Netlify. Any push to the `main` branch will automatically trigger a new build and deploy the changes to the production site.

Netlify also handles form submissions from the contact page. Submissions can be viewed in the Netlify dashboard under the "Forms" section for this site.
