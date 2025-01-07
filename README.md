# NLP Article Evaluator

A simple web tool that analyzes the sentiment of articles or blog posts using Natural Language Processing (NLP). Just enter the URL of an article, and get instant sentiment results powered by the MeaningCloud API.

## Features

- **Easy URL Input:** Enter the link of any article or blog.
- **Sentiment Analysis:** See if the content is positive, negative, neutral, or mixed.
- **User-Friendly Interface:** Clean and simple design.
- **Responsive:** Works on desktop and mobile devices.
- **Offline Access:** Browse results even without an internet connection.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express
- **Tools:** Webpack, Workbox
- **API:** MeaningCloud for sentiment analysis
- **Testing:** Jest

## Installation

### Prerequisites

- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/nlp-article-evaluator.git
   cd nlp-article-evaluator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Install Loaders and Plugins**

   ```bash
   # Babel
   npm install --save-dev @babel/core @babel/preset-env babel-loader

   # CSS and SASS
   npm install --save-dev style-loader node-sass css-loader sass-loader

   # Webpack Plugins
   npm install --save-dev clean-webpack-plugin html-webpack-plugin mini-css-extract-plugin optimize-css-assets-webpack-plugin terser-webpack-plugin
   ```

4. **Set Up Environment Variables**

   Create a `.env` file in the root folder and add your MeaningCloud API key:

   ```env
   MEANINGCLOUD_API_KEY=your_api_key_here
   PORT=8081
   ```

## Usage

### Run in Development Mode

Start the development server with live reloading:

```bash
npm run build-dev
```

Open your browser and go to [http://localhost:8081/](http://localhost:8081/).

### Build for Production

Create a production-ready build:

```bash
npm run build-prod
```

### Start the Server

Launch the backend server:

```bash
npm run start
```

Access the app at [http://localhost:8081/](http://localhost:8081/).

## Scripts

- **`npm run build-dev`**: Start development server with live reload.
- **`npm run build-prod`**: Build the app for production.
- **`npm run start`**: Run the Express server.
- **`npm run test`**: Run tests with Jest.

## Testing

Ensure everything works correctly by running:

```bash
npm run test
```

© 2025 NLP Article Evaluator
