# Fintl Backend - API Service

This is the Node.js / Express backend for the Fintl financial management application.

## 🚀 Deployment to Render

To deploy this service to Render:

1. **Connect Repository**: Link your GitHub repository to a new **Web Service** on Render.
2. **Auto-Configuration**: Render will automatically detect the `render.yaml` file and configure the build/start commands.
3. **Set Environment Variables**: In the Render Dashboard, go to **Environment** and add the following:
   - `MONGO_URI`: Your MongoDB Atlas connection string (e.g., `mongodb+srv://...`).
   - `JWT_SECRET`: A secure random string for signing tokens.
   - `PORT`: `5005` (Matches the frontend configuration).
4. **Deploy**: Render will build the project using `npm run build` and start it with `npm start`.

## 🛠 Local Development

1. Install dependencies: `npm install`
2. Run in dev mode: `npm run dev`
3. Build for production: `npm run build`
4. Run production build: `npm start`

## 🔒 Security Features
- **Helmet**: Secure HTTP headers.
- **Rate Limiting**: Protection against brute-force attacks.
- **Zod**: Strict input validation for all API endpoints.
- **Bcrypt**: Industrial-strength password hashing.
