# EduVoyage - Foreign Study Management System with E-Learning

## Overview
EduVoyage is a comprehensive platform designed to streamline interactions between international colleges and students while offering online education. The system supports real-time updates, course management, exams, and certifications through three key modules: Admin, College, and Student.

## Features

### Admin Module
- Dashboard with comprehensive platform activity overview
- User Management for student and college profiles
- College Management for profile creation and updates

### College Module
- Dashboard with relevant metrics and updates
- Course Management System
- Exam and Certification Management
- Public Forums for Student-College Interactions

### Student Module
- Personalized Dashboard Interface
- Course Enrollment and Management
- College Search with Advanced Filtering

## Technology Stack

### Frontend
- React.js
- Tailwind CSS
- React Router DOM
- Axios for API calls

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for Authentication
- Nodemailer for Email Services

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/amalantoney123/mern-stack-project.git
cd eduvoyage
```

2. Install Backend Dependencies
```bash
cd backend
npm install
```

3. Install Frontend Dependencies
```bash
cd frontend
npm install
```

4. Environment Setup

Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_email_app_password
FRONTEND_URL=http://localhost:3000
```

Create a `.env` file in the frontend directory:
```env
REACT_APP_API_URL=http://localhost:5000/api
```

5. Start the Application

Backend:
```bash
cd backend
npm start
```

Frontend:
```bash
cd frontend
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - User registration
- POST `/api/auth/login` - User login
- POST `/api/auth/forgot-password` - Password reset request
- POST `/api/auth/reset-password` - Password reset

## Security Features
- JWT-based authentication
- Password hashing with bcrypt
- Secure password reset flow
- Role-based access control

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details

## Acknowledgments
- Icons provided by Flaticon
- Illustrations from IconScout
```

The changes have been made to include:
1. A more detailed overview
2. Complete installation instructions
3. Environment setup details
4. API endpoint documentation
5. Security features section
6. Contributing guidelines
7. License and acknowledgments

