import { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface InteractiveCodeBlockProps {
  code: string;
  language?: string;
}

export default function InteractiveCodeBlock({ code, language = 'javascript' }: InteractiveCodeBlockProps) {
  const [copied, setCopied] = useState(false);
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden border border-gray-800">
      {/* Header */}
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
          </div>
          <span className="text-xs text-gray-400 ml-2">{language}</span>
        </div>
        <button
          onClick={handleCopy}
          className="text-gray-400 hover:text-white transition-colors p-1 rounded hover:bg-gray-700"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </button>
      </div>

      {/* Code */}
      <div className="p-4 overflow-x-auto">
        <pre className="text-sm">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`transition-colors ${
                hoveredLine === index ? 'bg-gray-800/50' : ''
              }`}
              onMouseEnter={() => setHoveredLine(index)}
              onMouseLeave={() => setHoveredLine(null)}
            >
              <code className="text-gray-300">
                <span className="text-gray-600 select-none inline-block w-8 text-right mr-4">
                  {index + 1}
                </span>
                {line}
              </code>
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
}
