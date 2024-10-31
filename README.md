# 🎉 Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open-source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- 📖 [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- 💬 [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- 🔌 [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)

## ⚙️ Setup and Running

To set up and run the Sanity CMS, follow these steps:

### 📋 Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or later)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

### 🚀 Running the Development Server

To start the development server, run:

```bash
npm start
# or
yarn start
```

This will start the Sanity Studio at `http://localhost:3333`.

### 🌐 Deploying

To deploy your Sanity Studio, you can use the Sanity CLI:

```bash
npx sanity deploy
```

Follow the prompts to deploy your studio to [Sanity.io](https://www.sanity.io/).

### 🔧 Configuration

You can configure your Sanity Studio by editing the `sanity.json` file in the root of your project. Refer to the [Sanity documentation](https://www.sanity.io/docs) for more details.

### 🛠️ Environment Variables

Sanity Studio uses environment variables to manage configuration settings. You can set these variables by creating a `.env` file in the root of your project. Here is an example of what the `.env` file might look like:

```env
SANITY_STUDIO_PROJECT_ID=your-project-id
SANITY_STUDIO_DATASET=your-dataset
```

To use these variables in your project, ensure you have the `dotenv` package installed:

```bash
npm install dotenv
# or
yarn add dotenv
```

Then, import and configure `dotenv` at the beginning of your main configuration file (e.g., `sanity.config.js`):

```javascript
require('dotenv').config()
```

Refer to the [Sanity documentation](https://www.sanity.io/docs) for more details on configuring environment variables.
