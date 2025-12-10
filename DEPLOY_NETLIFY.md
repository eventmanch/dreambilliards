# Deploying Dream Billiards Cafe to Netlify

This guide will help you deploy the Dream Billiards Cafe project to Netlify.

## Prerequisites
- A [Netlify account](https://app.netlify.com/signup)
- GitHub repository with your code (already set up)
- Node.js and npm installed locally

## Deployment Steps

### Option 1: Deploy with Netlify UI (Recommended)

1. **Connect your GitHub repository to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Select "GitHub" and authorize Netlify
   - Choose the `dreambilliards` repository
   - Click "Import"

2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist/public`
   - Netlify will automatically detect `netlify.toml` configuration

3. **Add environment variables (if needed):**
   - Go to Site settings → Build & deploy → Environment
   - Add any required environment variables for your database connection, API keys, etc.

4. **Deploy:**
   - Netlify will automatically build and deploy your site
   - Your site will be available at: `https://<your-site-name>.netlify.app`

### Option 2: Deploy using Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify:**
   ```bash
   netlify login
   ```

3. **Deploy your site:**
   ```bash
   netlify deploy --prod
   ```

4. **For initial setup:**
   ```bash
   netlify init
   ```

## Important Notes

### Backend/Server Considerations
Since this project includes an Express backend, note that:
- Standard Netlify hosting is for static sites and serverless functions
- The current `npm run build` script outputs a static frontend build
- For full backend functionality, consider:
  - Using Netlify Functions for API endpoints
  - Deploying the backend separately to a service like Heroku, Railway, or Render
  - Using a database that's compatible with serverless functions

### Database Configuration
If your app uses a PostgreSQL database:
1. Set up a database service (e.g., neon.tech, Railway, AWS RDS)
2. Add the database connection string to Netlify environment variables
3. Update your backend code to connect to the external database

### Performance Optimization
- Static files are served from a CDN automatically
- Your build output in `dist/public` is cached and served globally
- Consider adding caching headers in `netlify.toml` for better performance

## Troubleshooting

- **Build fails**: Check the build logs in Netlify dashboard → Deploys
- **Functions not working**: Ensure API redirects are properly configured in `netlify.toml`
- **Environment variables missing**: Add them in Site settings → Build & deploy → Environment
- **CORS issues**: May need to configure headers in `netlify.toml`

## Additional Resources
- [Netlify Documentation](https://docs.netlify.com)
- [Netlify Functions Guide](https://docs.netlify.com/functions/overview/)
- [Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
