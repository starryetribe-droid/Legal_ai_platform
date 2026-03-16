const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

if (!cssContent.includes('.slide-content {')) {
    cssContent += `
/* Add fixed content height as requested */
.slide-content {
  height: 940px;
  width: 100%;
  display: flex;
  flex-direction: column;
}
`;
}

// Modify slide-footer to be absolute positioned
if (!cssContent.includes('position: absolute;')) {
    cssContent = cssContent.replace('.slide-footer {', '.slide-footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;');
}
fs.writeFileSync(cssPath, cssContent, 'utf8');


const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'ServiceFlowSlide.tsx') {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Wrap everything between slide-container and slide-footer with slide-content
        if (content.includes('className="slide-container"') && content.includes('className="slide-footer')) {
            let modified = false;
            content = content.replace(/<div className="slide-container">([\s\S]*?)<div (className=["']slide-footer[^>]+)>/, (match, inner, footerClass) => {
                modified = true;
                return `<div className="slide-container">\n                <div className="slide-content">\n${inner}                </div>\n                <div ${footerClass}>`;
            });
            
            if (modified) {
                fs.writeFileSync(filePath, content, 'utf8');
                console.log(`Updated ${file} to have .slide-content wrapper`);
            }
        }
    }
});
