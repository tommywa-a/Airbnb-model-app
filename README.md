# Airbnb Model Application

An Airbnb clone application that allows users to browse, book, and manage rental properties seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Environment Variables](#environment-variables)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)


## Features

- **Property Listings**: Browse and search for available rental properties.
- **Booking System**: Book properties for desired dates.
- **User Authentication**: Secure login and registration for users.
- **Host Management**: Hosts can add, update, and delete their property listings.
- **Favouriting System**: Users can leave favourite properties they like.
- **Search/Filter System**: Users can search/filter for properties based on their preference.

## Technologies Used

- **Frontend**: [Next.js](https://nextjs.org/) (React framework)
- **Backend**: [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- **Database**: [Prisma](https://www.prisma.io/) ORM with your choice of database
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Image uploads**: [Cloudinary](https://cloudinary.com/)

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).
- **Package Manager**: npm, yarn, or pnpm installed.
- **Database**: PostgreSQL, MySQL, or SQLite.

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/tommywa-a/Airbnb-model-app.git
   cd Airbnb-model-app
   ```

2. **Install Dependencies**:

   Depending on your package manager:

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set Up Environment Variables**:

   Create a `.env` file in the root directory and add your environment variables as required by your application.

4. **Run Database Migrations** (if applicable):

   ```bash
   npx prisma migrate dev
   ```

### Running the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Environment Variables

Create a `.env` file in the root directory and add the following:

```env
DATABASE_URL=your_database_connection_string
NEXTAUTH_SECRET=your_auth_secret
GITHUB_ID=your_github_id
GITHUB_SECRET=your_github_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_next_public_cloudinary_cloud_name
```

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes with clear messages.
4. Submit a pull request.

## License

This project is licensed under the **MIT License**.

## Contact

For any inquiries, reach out via email: **[tomiwa.aderibigbe1@gmail.com](mailto:tomiwa.aderibigbe1@gmail.com)**

---

Happy Coding! 🚀
