import { 
  CodeBracketIcon, 
  CpuChipIcon, 
  BoltIcon, 
  CircleStackIcon, 
  ServerIcon 
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import '../styles/animations.css';

const TerminalLine = ({ text, delay = 0, prompt = '>>>' }) => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
        setShowCursor(false);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <div className="flex">
      <span className="text-capicu-accent mr-2">{prompt}</span>
      <span className="text-gray-400">
        {displayText}
        {showCursor && <span className="animate-blink">|</span>}
      </span>
    </div>
  );
};

const MetricsDisplay = ({ metrics }) => {
  return (
    <div>
      <div className="mt-4 text-green-400">
        <span className="text-capicu-accent">AURORA Score:</span> 0.92
      </div>
      <div className="text-gray-400 mt-2">
        <span className="text-capicu-accent">Metrics:</span>
      </div>
      {metrics.map((metric, index) => (
        <div key={index} className="ml-4 text-gray-400">
          <span className="text-capicu-accent">•</span> {metric}
        </div>
      ))}
    </div>
  );
};

export default function CodeDemo() {
  const [currentLine, setCurrentLine] = useState(0);
  const [showOutput, setShowOutput] = useState(false);

  const lines = [
    { text: "import compression_engine as cpe", delay: 400 },
    { text: "from models import mobilenet_v2", delay: 800 },
    { text: "model = mobilenet_v2(pretrained=True)", delay: 1200 },
    { text: "target_hardware = {latency: 50,  # ms,", delay: 1600 },
    { text: '"power_draw": 2.5,  # watts', delay: 1650, indent: true },
    { text: '"ram": 256,  # MB', delay: 1700, indent: true },
    { text: '"storage": 16  # MB}', delay: 1750, indent: true },
    { text: "compressed_model = cpe.compress(", delay: 2200 },
    { text: "model=model,", delay: 2300, indent: true },
    { text: "target=target_hardware,", delay: 2400, indent: true },
    { text: "quantization='int8',", delay: 2500, indent: true },
    { text: "pruning_ratio=0.5", delay: 2600, indent: true },
    { text: ")", delay: 2700, indent: true },
    { text: "aurora_score = cpe.evaluate(compressed_model)", delay: 3200 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentLine < lines.length) {
        setCurrentLine(currentLine + 1);
      } else {
        setShowOutput(true);
      }
    }, lines[currentLine]?.delay || 0);

    return () => clearTimeout(timer);
  }, [currentLine]);

  const metrics = [
    'Latency: 45ms (✓ within target)',
    'Power Draw: 2.3W (✓ within target)',
    'RAM Usage: 220MB (✓ within target)',
    'Storage: 12MB (✓ within target)',
    'Model Accuracy: 98.5% of original'
  ];

  return (
    <div className="mt-16">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Column - Explanation */}
        <div>
          <h2 className="text-3xl font-bold text-capicu-primary mb-6">
            Optimized for Your Hardware
          </h2>
          <p className="text-lg text-capicu-navy-600">
          Whether compressing pre-trained models or training from scratch, Capicú delivers smart, measurable optimization for any hardware target.
          </p>
          <br />
          <div className="space-y-8 mb-8">
            <div className="flex items-start gap-4">
              <CpuChipIcon className="w-8 h-8 text-capicu-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-capicu-primary mb-1">Latency</h3>
                <p className="text-capicu-navy-600">Real-time inference optimization for immediate responses</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <BoltIcon className="w-8 h-8 text-capicu-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-capicu-primary mb-1">Power Draw</h3>
                <p className="text-capicu-navy-600">Energy-efficient deployment for battery-powered devices</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <CircleStackIcon className="w-8 h-8 text-capicu-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-capicu-primary mb-1">RAM Usage</h3>
                <p className="text-capicu-navy-600">Memory footprint reduction for resource-constrained devices</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <ServerIcon className="w-8 h-8 text-capicu-accent mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-capicu-primary mb-1">Storage</h3>
                <p className="text-capicu-navy-600">Model size compression for limited storage environments</p>
              </div>
            </div>
          </div>
          <p className="text-lg text-capicu-navy-600">
          At the core is AURORA, our proprietary scoring system that evaluates trade-offs between accuracy, speed, and efficiency — tailored to your performance goals.
          </p>
        </div>

        {/* Right Column - Animated Code Demo */}
        <div className="bg-capicu-charcoal rounded-lg p-6 font-mono text-sm">
          <div className="text-gray-400">
            <span className="text-capicu-accent">$</span> pip install capicu-compression
          </div>
          {lines.slice(0, currentLine + 1).map((line, index) => (
            <div key={index} className={line.indent ? "ml-4" : ""}>
              <TerminalLine 
                text={line.text} 
                prompt={line.indent ? "   " : ">>>"}
              />
            </div>
          ))}
          {showOutput && <MetricsDisplay metrics={metrics} />}
        </div>
      </div>
    </div>
  );
} 