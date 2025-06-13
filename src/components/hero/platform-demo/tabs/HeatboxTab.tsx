
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Editor from '@monaco-editor/react';
import { Play, Copy, Download } from 'lucide-react';
import { platforms } from '../../../../config/mockData';
import { useTheme } from '../../../ThemeProvider';

const HeatboxTab = () => {
  const { theme } = useTheme();
  const [selectedLanguage, setSelectedLanguage] = useState('javascript');
  const [code, setCode] = useState(`// Welcome to the Code Editor
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`);
  const [output, setOutput] = useState('');

  const languages = [
    { value: 'javascript', label: 'JavaScript' },
    { value: 'python', label: 'Python' },
    { value: 'java', label: 'Java' },
    { value: 'cpp', label: 'C++' },
    { value: 'typescript', label: 'TypeScript' },
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'json', label: 'JSON' }
  ];

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Set default code based on language
    const defaultCodes: { [key: string]: string } = {
      javascript: `// Welcome to JavaScript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));`,
      python: `# Welcome to Python
def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n - 1) + fibonacci(n - 2)

print(fibonacci(10))`,
      java: `// Welcome to Java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
      cpp: `// Welcome to C++
#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
      typescript: `// Welcome to TypeScript
interface User {
    name: string;
    age: number;
}

const user: User = {
    name: "John Doe",
    age: 30
};

console.log(user);`,
      html: `<!DOCTYPE html>
<html>
<head>
    <title>Hello World</title>
</head>
<body>
    <h1>Hello, World!</h1>
</body>
</html>`,
      css: `/* Welcome to CSS */
body {
    font-family: Arial, sans-serif;
    background-color: #f0f0f0;
    margin: 0;
    padding: 20px;
}

h1 {
    color: #333;
    text-align: center;
}`,
      json: `{
  "name": "Hello World",
  "version": "1.0.0",
  "description": "A simple JSON example",
  "author": "Developer"
}`
    };
    setCode(defaultCodes[language] || '// Start coding...');
  };

  const handleSubmitCode = () => {
    setOutput(`Code submitted successfully!\nLanguage: ${selectedLanguage}\nCode length: ${code.length} characters\nTimestamp: ${new Date().toLocaleString()}`);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  const downloadCode = () => {
    const extensions: { [key: string]: string } = {
      javascript: 'js',
      python: 'py',
      java: 'java',
      cpp: 'cpp',
      typescript: 'ts',
      html: 'html',
      css: 'css',
      json: 'json'
    };
    
    const blob = new Blob([code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `code.${extensions[selectedLanguage]}`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-8">
      {/* Performance Stats */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {platforms.map((item, i) => (
          <motion.div 
            key={i} 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-medium text-gray-700 dark:text-gray-300">{item.platform}</span>
              <span className={`text-${item.color} font-bold text-lg`}>{item.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3">
              <div 
                className={`bg-${item.color} h-3 rounded-full transition-all duration-1000`} 
                style={{width: `${item.percentage}%`}}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Code Editor Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 overflow-hidden"
      >
        <div className="bg-gray-50 dark:bg-gray-700 px-6 py-4 border-b border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Code Editor</h3>
            <div className="flex items-center space-x-4">
              <select
                value={selectedLanguage}
                onChange={(e) => handleLanguageChange(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-convrt-purple bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
              <div className="flex items-center space-x-2">
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  title="Copy code"
                >
                  <Copy className="w-4 h-4" />
                </button>
                <button
                  onClick={downloadCode}
                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  title="Download code"
                >
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="h-96">
          <Editor
            height="100%"
            language={selectedLanguage}
            value={code}
            onChange={(value) => setCode(value || '')}
            theme={theme === 'dark' ? 'vs-dark' : 'light'}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: 'on',
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
              tabSize: 2,
              wordWrap: 'on'
            }}
          />
        </div>
        
        <div className="px-6 py-4 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Language: <span className="font-medium">{languages.find(l => l.value === selectedLanguage)?.label}</span>
            </div>
            <button
              onClick={handleSubmitCode}
              className="flex items-center space-x-2 bg-convrt-purple text-white px-4 py-2 rounded-lg hover:bg-convrt-purple-hover transition-colors"
            >
              <Play className="w-4 h-4" />
              <span>Submit Code</span>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Output Section */}
      {output && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900 dark:bg-black text-green-400 p-6 rounded-xl font-mono text-sm"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-green-300 font-semibold">Output:</h4>
            <div className="flex space-x-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
          </div>
          <pre className="whitespace-pre-wrap">{output}</pre>
        </motion.div>
      )}
    </div>
  );
};

export default HeatboxTab;
