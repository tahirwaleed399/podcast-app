
# Podcast App

This is a **full-stack application** for browsing and searching podcasts, featuring a **Next.js frontend** and a **Node.js backend**.

> **Note:** For the convenience of testers and developers, environment files (`.env`) have been added directly to the repository. This is not a security oversight but is done intentionally to simplify the setup process for testing the application. Please be mindful of this when deploying to production, and make sure to handle sensitive information securely.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

## Running the Application with Docker

1. **Clone the repository:**
    ```bash
    git clone https://github.com/tahirwaleed399/podcast-app.git
    cd podcast-app
    ```

2. **Build and start the Docker containers:**
    ```bash
    docker-compose up --build
    ```

3. **Access the application:**
    - Frontend: [http://localhost:3000](http://localhost:3000)
    - Backend API: [http://localhost:5000](http://localhost:5000)

4. **To stop the application**, press `Ctrl+C` in the terminal where `docker-compose` is running, or run:
    ```bash
    docker-compose down
    ```

## Development

For development without Docker:

1. **Install dependencies:**
    ```bash
    npm install
    ```

2. **Start the development servers:**
    ```bash
    npm run dev
    ```

This will start both the frontend and backend in development mode.

## Building for Production

To build the application for production:

1. **Run the build command:**
    ```bash
    npm run build
    ```

2. **To start the production build:**
    ```bash
    npm start
    ```

## Project Structure


packages/ ├── frontend # Next.js frontend application └── backend # Node.js backend application
## Environment Variables

### Frontend
- `NEXT_PUBLIC_API_URL`: URL of the backend API (set in `docker-compose.yml`).

### Backend
- `NODE_ENV`: Set to `'production'` for production builds.

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
