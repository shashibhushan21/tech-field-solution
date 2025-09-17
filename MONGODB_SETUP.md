# Tech Field Solution - MongoDB Setup

## MongoDB Database Integration

Your project has been successfully migrated from PostgreSQL/Prisma to MongoDB with Mongoose.

### Setup Instructions

1. **Install MongoDB locally** or use **MongoDB Atlas** (cloud)

2. **Update environment variables**:
   ```bash
   cp .env.example .env.local
   ```
   
   Update the MongoDB connection string:
   ```
   # Local MongoDB
   MONGODB_URI="mongodb://localhost:27017/techfieldsolution"
   
   # MongoDB Atlas
   MONGODB_URI="mongodb+srv://username:password@cluster.mongodb.net/techfieldsolution"
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

### Database Models

The following MongoDB models are available:

- **User**: User accounts and profiles
- **Project**: Client projects and requests
- **Inquiry**: Contact form submissions
- **Newsletter**: Email subscriptions
- **Testimonial**: Client testimonials
- **BlogPost**: Blog content management
- **Analytics**: Usage tracking

### API Endpoints

All API endpoints have been updated to use MongoDB:

- `POST /api/contact` - Contact form submissions
- `POST /api/projects` - Project requests
- `GET /api/projects` - Fetch user projects
- `POST /api/newsletter` - Newsletter subscription
- `DELETE /api/newsletter` - Newsletter unsubscription

### Key Changes

- Replaced Prisma with Mongoose ODM
- Updated all API routes to use MongoDB
- Created MongoDB connection utility with caching
- Removed Prisma-specific scripts and dependencies
- Added MongoDB-specific environment variables

### Development

```bash
npm run dev
```

The application will connect to MongoDB automatically when API endpoints are accessed.