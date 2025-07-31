# Quantasip GIS - React Application

A modern React-based web application for Quantasip GIS services, featuring interactive maps, user tracking, and comprehensive business solutions.

## 🚀 Features

- **Interactive Maps**: Built with Leaflet and React-Leaflet
- **User Analytics**: Page visit tracking with coin rewards system
- **Responsive Design**: Modern UI with CSS Modules
- **SEO Optimized**: Dynamic page titles and meta tags
- **Cookie Management**: GDPR-compliant cookie consent
- **PDF Support**: Document viewing capabilities

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd quantasip-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Runs the app in development mode |
| `npm run build` | Builds the app for production |
| `npm test` | Launches the test runner |
| `npm run lint` | Runs ESLint to check code quality |
| `npm run lint:fix` | Automatically fixes ESLint issues |
| `npm run format` | Formats code with Prettier |
| `npm run format:check` | Checks code formatting |

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation and branding
│   ├── Footer.js       # Site footer
│   ├── FAQChatWidget.js # Interactive chat widget
│   └── ...
├── pages/              # Page components
│   ├── Home.js         # Landing page
│   ├── Services.js     # Services overview
│   ├── About.js        # Company information
│   └── ...
├── App.js              # Main application component
└── index.js            # Application entry point
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:
```env
REACT_APP_API_URL=https://qb.quantasip.com/api
REACT_APP_ANALYTICS_ENABLED=true
```

### API Integration
The application integrates with the Quantasip API for:
- User visit tracking
- Coin balance management
- Analytics data

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Generate coverage report
npm test -- --coverage
```

## 🚀 Deployment

### Production Build
```bash
npm run build
```

### Deployment Options
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **Traditional hosting**: Upload build files to your web server

## 📊 Performance

- **Bundle Analysis**: Use `npm run build` and analyze the generated files
- **Lighthouse**: Run Lighthouse audits for performance optimization
- **Web Vitals**: Built-in Core Web Vitals tracking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Code Style

This project uses:
- **ESLint** for code linting
- **Prettier** for code formatting
- **Husky** for pre-commit hooks

## 🐛 Troubleshooting

### Common Issues

1. **Port 3000 already in use**
   ```bash
   # Kill the process using port 3000
   npx kill-port 3000
   ```

2. **Build fails**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **ESLint errors**
   ```bash
   # Auto-fix linting issues
   npm run lint:fix
   ```

## 📄 License

This project is proprietary software owned by Quantasip.

## 📞 Support

For support and questions:
- Email: support@quantasip.com
- Documentation: [Internal Wiki]
- Issues: [GitHub Issues]

---

**Built with ❤️ by the Quantasip Development Team**
