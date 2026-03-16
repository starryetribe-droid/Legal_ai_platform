const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, 'src/index.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');

// 1. Update the .slide-content to use justify-content: center and gap
cssContent = cssContent.replace(
    /\.slide-content\s*\{[\s\S]*?\}/g, 
    `.slide-content {
  height: 940px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 80px; /* Space for footer */
}`
);

// 2. Increase base typography in index.css
cssContent = cssContent.replace(/--spacing-unit:\s*8px;/g, '--spacing-unit: 12px;');
cssContent = cssContent.replace(/\.hero-title\s*\{[^}]*font-size:\s*40px;[^}]*\}/g, `.hero-title {\n  font-size: 46px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: -0.005em;\n  margin-bottom: 8px;\n}`);
cssContent = cssContent.replace(/\.section-title\s*\{[^}]*font-size:\s*32px;[^}]*\}/g, `.section-title {\n  font-size: 38px;\n  font-weight: 700;\n  line-height: 1.15;\n  letter-spacing: 0em;\n  margin-bottom: 12px;\n}`);
cssContent = cssContent.replace(/\.body-text\s*\{[^}]*font-size:\s*17px;[^}]*\}/g, `.body-text {\n  font-size: 20px;\n  line-height: 1.5;\n  color: var(--apple-secondary-text);\n}`);
cssContent = cssContent.replace(/\.card-title\s*\{[^}]*font-size:\s*19px;[^}]*\}/g, `.card-title {\n  font-size: 22px;\n  font-weight: 600;\n  line-height: 1.3;\n  margin-bottom: 6px;\n}`);

fs.writeFileSync(cssPath, cssContent, 'utf8');
console.log('Updated index.css typography scales');

// 3. Update React Components logic to scale inline styles
const componentsDir = path.join(__dirname, 'src/components');
const files = fs.readdirSync(componentsDir);

files.forEach(file => {
    if (file.endsWith('.tsx') && file !== 'ServiceFlowSlide.tsx') {
        const filePath = path.join(componentsDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        // Scale common inline fonts
        if (content.match(/fontSize:\s*['"](\d+)px['"]/g)) {
            content = content.replace(/fontSize:\s*['"](\d+)px['"]/g, (match, val) => {
                let num = parseInt(val, 10);
                // Keep very small fonts (like badges) relatively small, but stretch the rest
                if (num >= 14 && num < 20) num += 2;
                else if (num >= 20 && num < 40) num += 4;
                else if (num >= 40) num += 6;
                modified = true;
                return `fontSize: '${num}px'`;
            });
        }
        
        // Scale common inline margins and gaps
        if (content.match(/(margin|padding|gap)(Bottom|Top|Right|Left)?:\s*['"](\d+)px['"]/gi)) {
            content = content.replace(/(margin|padding|gap)(Bottom|Top|Right|Left)?:\s*['"](\d+)px['"]/gi, (match, prop, side, val) => {
                let num = parseInt(val, 10);
                if (num >= 8) num += 4;
                if (num >= 24) num += 8;
                modified = true;
                return `${prop}${side || ''}: '${num}px'`;
            });
        }

        if (modified) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated inline scales in ${file}`);
        }
    }
});
