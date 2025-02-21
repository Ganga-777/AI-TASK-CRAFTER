# AI Task Crafter

A modern task management application built with React, TypeScript, and modern web technologies. Experience seamless task organization with a beautiful UI and intelligent task suggestions.

🌐 **Live Demo**: [AI Task Crafter](https://ai-task-crafter.vercel.app/)

![Task Manager Preview](public/og-image.png)

## ✨ Features

- **Modern UI/UX**: Beautiful interface with smooth animations and transitions
- **AI-Powered Suggestions**: Get intelligent task suggestions using Google's Gemini API
- **Real-time Updates**: Dynamic task management with instant feedback
- **Theme Customization**: Multiple theme options including Cosmic Night, Aurora Borealis, and Sunset Fusion
- **Priority Management**: Color-coded priority levels with visual indicators
- **Tag System**: Organize tasks with customizable tags
- **Due Date Tracking**: Set and monitor task deadlines
- **Responsive Design**: Works seamlessly across all devices

## 🛠️ Technology Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Components**: 
  - shadcn/ui for base components
  - Tailwind CSS for styling
  - Framer Motion for animations
- **State Management**: React Context API
- **Form Handling**: React Hook Form
- **Data Persistence**: Local Storage with real-time sync
- **AI Integration**: Google Gemini API
- **Notifications**: Sonner for toast notifications

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (comes with Node.js)
- Google API Key (for AI suggestions)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ai-task-crafter.git
cd ai-task-crafter
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Google API key:
```env
VITE_GOOGLE_API_KEY=your_api_key_here
```

4. Start the development server:
```bash
npm run dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📱 Core Features

### Task Management
- Create, edit, and delete tasks
- Set priority levels (Low, Medium, High)
- Add due dates and tags
- Mark tasks as complete/incomplete
- Archive completed tasks

### AI Integration
- Get smart task suggestions
- Priority recommendations
- Task organization tips
- Time management advice

### User Interface
- Responsive design
- Dark/Light mode
- Custom theme options
- Animated transitions
- Toast notifications
- Loading states

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript checks

## 📁 Project Structure

```
src/
├── components/     # Reusable UI components
├── contexts/      # React Context providers
├── hooks/         # Custom React hooks
├── pages/         # Application pages/routes
├── styles/        # Global styles and theme
└── utils/         # Utility functions
```

## 🎨 UI Components

- **TaskList**: Display and manage tasks
- **CreateTask**: Task creation form
- **TaskCard**: Individual task display
- **AISuggestions**: AI-powered task suggestions
- **LoginForm**: User authentication
- **Dashboard**: Main task overview

## 🔐 Authentication

The application uses a simple authentication system with the following features:
- User login/logout
- Session persistence
- Protected routes
- Form validation

## 🌐 Deployment

The application is deployed on Vercel. For your own deployment:

1. Fork this repository
2. Create a new project on [Vercel](https://vercel.com)
3. Connect your repository
4. Add environment variables:
   - `VITE_GOOGLE_API_KEY`
5. Deploy!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful base components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Google Gemini](https://ai.google.dev/) for AI capabilities
- [Vercel](https://vercel.com) for hosting

## 📫 Contact

For support or questions, please open an issue in the GitHub repository.

---

Built with ❤️ using React, TypeScript, and modern web technologies. 
