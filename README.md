# Blog App

This project is built with Next.js, TypeScript, Tailwind CSS, and Prisma. It includes features for listing blog posts, viewing individual blog details, and switching between light and dark themes. The backend integrates with a PostgreSQL database hosted on NeonDB using Prisma ORM.

## Features

### Backend

1. **Database**

   - Managed with Prisma connected to a PostgreSQL database hosted on NeonDB.
   - Schema includes models for `BlogPost` with fields for `id`, `title`, `content`, and `createdAt`.

2. **API Routes**

   - `/api/posts/`: Fetch all blog posts.
   - `/api/posts/[id]`: Fetch a single blog post by `id`.

### Frontend

1. **Reusable Components**

   - Components for the Navbar, Footer, BlogList, SingleBlog, and BlogContent.
   - Consistent design and structure.

2. **Light & Dark Mode**

   - Implemented with `next-themes`.
   - Colors and assets adapt based on the theme.

3. **Dynamic Data Rendering**

   - Blog content is dynamically fetched and rendered from the API.

### Other Features

1. **SEO Optimized**
   - Meta tags and structured data for better search engine indexing.
2. **Custom Fonts**
   - Integrated with Google Fonts for aesthetic typography.
3. **Modern Icons**
   - Utilizes Heroicons and React Icons for UI enhancement.

## Tech Stack

### Frontend

- **Next.js**: Framework for server-side rendering and static site generation.
- **TypeScript**: For type-safe coding.
- **Tailwind CSS**: For rapid styling.
- **next-themes**: For light/dark mode theming.

### Backend

- **Prisma**: ORM for database management.
- **PostgreSQL**: Database hosted on NeonDB.

### Tools

- **React Icons**: Icon library for UI components.
- **NeonDB**: Cloud-hosted database provider.
- **Vercel**: Deployment platform.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/blog-project.git
   ```

2. Navigate to the project directory:

   ```bash
   cd blog-project
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables in a `.env` file:

   ```env
   DATABASE_URL="your_postgresql_database_url"
   NEXT_PUBLIC_API_BASE_URL="http://localhost:3000"
   ```

5. Generate Prisma client:

   ```bash
   npx prisma generate
   ```

6. Run database migrations:

   ```bash
   npx prisma migrate dev
   ```

7. Start the development server:

   ```bash
   npm run dev
   ```

## API Endpoints

1. \*\*GET \*\***`/api/posts/`**

   - Fetch all blog posts.
   - Response:
     ```json
     [
       {
         "id": 1,
         "title": "Blog Title",
         "content": "Blog content here",
         "createdAt": "2022-08-20T00:00:00.000Z"
       },
       ...
     ]
     ```

2. \*\*GET \*\***`/api/posts/[id]`**

   - Fetch a single blog post by ID.
   - Response:
     ```json
     {
       "id": 1,
       "title": "Blog Title",
       "content": "Blog content here",
       "createdAt": "2022-08-20T00:00:00.000Z"
     }
     ```

## Screenshots

<p align="center">
  <img src="![alt text](image.png)" alt="Homepage" width="45%" />
  <img src="![alt text](image-1.png)" alt="Blog List" width="45%" />
</p>

<p align="center">
  <img src="![alt text](image-3.png)" alt="Single Blog" width="45%" />
  <img src="![alt text](image-2.png)" alt="Dark Mode" width="45%" />
</p>
<p align="center">
  <img src="![alt text](image-4.png)" alt="Single Blog" width="45%" />
  <img src="![alt text](image-5.png)" alt="Dark Mode" width="45%" />
</p>
<p align="center">
  <img src="![alt text](image-7.png)" alt="Single Blog" width="45%" />
  <img src="![alt text](image-6.png)" alt="Dark Mode" width="45%" />
</p>
<p align="center">
  <img src="![alt text](image-8.png)" alt="Single Blog" width="45%" />
  <img src="![alt text](image-9.png)" alt="Dark Mode" width="45%" />
</p>
