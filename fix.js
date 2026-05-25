const fs = require('fs');
let content = fs.readFileSync('e:/tour-project/src/pages/Home.js', 'utf8');

// The mangled emojis and symbols
content = content.replace(/\?\?\?/g, '🛳️');
content = content.replace(/\?\?/g, '📘'); // Replaces both the second and third emojis incorrectly if we use global, let's be careful.

// Let's just fix it by replacing the whole floating menu and price sections!
content = content.replace(/<div style=\{\{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' \}\}>\s*<span style=\{\{ fontSize: '1\.2rem' \}\}>.*?<\/span> Cruise\s*<\/div>\s*<div style=\{\{ width: '1px', background: '#ddd' \}\}><\/div>\s*<div style=\{\{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' \}\}>\s*<span style=\{\{ fontSize: '1\.2rem', color: '#4285F4' \}\}>.*?<\/span> Popular Trips\s*<\/div>\s*<div style=\{\{ width: '1px', background: '#ddd' \}\}><\/div>\s*<div style=\{\{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' \}\}>\s*<span style=\{\{ fontSize: '1\.2rem' \}\}>.*?<\/span> Holiday Destination\s*<\/div>/g, 
`<div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem' }}>🛳️</span> Cruise
          </div>
          <div style={{ width: '1px', background: '#ddd' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem', color: '#4285F4' }}>📘</span> Popular Trips
          </div>
          <div style={{ width: '1px', background: '#ddd' }}></div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
            <span style={{ fontSize: '1.2rem' }}>🗽</span> Holiday Destination
          </div>`);

// Replace rupee symbol
content = content.replace(/className="travel-price">\?(\d+)/g, 'className="travel-price">₹$1');

// Replace contact emojis
content = content.replace(/<h4>\?\? 7857063730<\/h4>/g, '<h4>📞 7857063730</h4>');
content = content.replace(/<h4>\?\? info@tourplanner.com<\/h4>/g, '<h4>✉️ info@tourplanner.com</h4>');

fs.writeFileSync('e:/tour-project/src/pages/Home.js', content, 'utf8');
