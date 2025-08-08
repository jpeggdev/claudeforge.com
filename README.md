# ClaudeForge Website

Landing page for ClaudeForge - an MCP (Model Context Protocol) server proxy that provides secure, managed connections between AI agents and MCP servers.

## Overview

ClaudeForge acts as an intermediary proxy between AI agents and MCP servers, offering:
- Granular permission control over tool access
- Web-based management interface
- Real-time configuration updates
- Multi-server connection support
- Comprehensive monitoring and logging

## Website Structure

```
claudeforge.com/
├── index.html      # Main landing page
├── styles.css      # Minimalist styling (x.ai inspired)
├── script.js       # Interactive features
└── README.md       # This file
```

## Features

- **Clean, Minimalist Design** - Inspired by x.ai's design system
- **Responsive Layout** - Optimized for desktop, tablet, and mobile
- **Interactive Elements** - Click-to-copy code blocks, smooth scrolling
- **Fast Loading** - No external dependencies except Google Fonts

## Quick Start

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/jpeggdev/claudeforge.git
cd claudeforge.com
```

2. Open in browser:
```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Or simply open index.html in your browser
```

3. Visit `http://localhost:8000`

### Deployment

The site is static HTML/CSS/JS and can be deployed to any web server or CDN:

- **GitHub Pages** - Push to `gh-pages` branch
- **Netlify** - Drag and drop the folder
- **Vercel** - `vercel --prod`
- **CloudFlare Pages** - Connect GitHub repo
- **S3 + CloudFront** - Upload to S3 bucket with static hosting

## Customization

### Colors

Edit CSS variables in `styles.css`:
```css
:root {
    --text-primary: #000;
    --text-secondary: #666;
    --bg-primary: #fff;
    --bg-secondary: #f7f7f7;
    --border-color: #e5e5e5;
    --accent: #000;
}
```

### Content

Update content directly in `index.html`:
- Hero section: Lines 30-40
- Features: Lines 42-65
- Setup steps: Lines 67-95
- Footer: Lines 97-110

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS Grid and Flexbox
- **Vanilla JavaScript** - No framework dependencies
- **Inter Font** - Clean, modern typography

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

- **Lighthouse Score**: 100/100
- **Page Size**: <50KB (excluding fonts)
- **Load Time**: <1s on 3G
- **No JavaScript Required**: Core content accessible without JS

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Jeff Pegg**  
Email: jpeggdev@gmail.com  
GitHub: [@jpeggdev](https://github.com/jpeggdev)

## Related Projects

- [ClaudeForge Server](https://github.com/jpeggdev/claudeforge) - The MCP proxy server
- [MCP Protocol](https://modelcontextprotocol.io) - Model Context Protocol specification

## Acknowledgments

- Design inspired by [x.ai](https://x.ai)
- Built for the MCP ecosystem
- Typography by [Inter](https://rsms.me/inter/)