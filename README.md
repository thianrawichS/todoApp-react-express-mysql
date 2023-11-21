# todoApp-react-express-mysql

## Prerequisites

- Docker installed
- Docker Compose installed
- .env file with the specified content

## Getting Started
1. Clone repository:
   ```bash
   git clone https://github.com/thianrawichS/todoApp-react-express-mysql.git
   cd your_project_name

2. Create .env:
   - create `.env` file (same directory with docker-compose.yml)
   - variable:
     - DB_HOST = (your db name)
     - DB_HOST = 'db'
     - DB_USER = (your db username)
     - DB_DATABASE = 'db_todo'
     - DB_PASSWORD = (your db password)
     - DB_ROOT_PASSWORD = (your db root password)
     - VITE_APP_SERVER_PORT =  (your server port)

3. Run the App:
   - Open Docker
   ```bash
   docker-compose up

4. Access the App:
   - Open browser: http://localhost:5173 (as specified in the `docker-compose.yml`)
