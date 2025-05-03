import {
  CubeTransparentIcon,
  CpuChipIcon,
  Cog6ToothIcon,
  ServerIcon,
  BoltIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    title: "Compression SDK",
    description: "Optimize and compress AI models for efficient deployment on resource-constrained devices.",
    icon: CubeTransparentIcon,
  },
  {
    title: "Modular AI Agents",
    description: "Pre-built agents for common tasks like hemoglobin detection and air quality monitoring.",
    icon: CpuChipIcon,
  },
  {
    title: "Fusion Engine",
    description: "Real-time system-level inference combining multiple sensor inputs for comprehensive analysis.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Edge Deployment",
    description: "Deploy AI models efficiently on any hardware, even in low-resource environments.",
    icon: ServerIcon,
  },
  {
    title: "Low Power",
    description: "Bio-inspired approach for energy-efficient AI deployment on battery-powered devices.",
    icon: BoltIcon,
  },
  {
    title: "Explainable AI",
    description: "Transparent decision-making process with our decentralized sensing systems.",
    icon: LightBulbIcon,
  },
];

export default function Features() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-16 gap-10">
      {features.map((item) => {
        const IconComponent = item.icon;
        return (
          <div key={item.title} className="flex gap-4 items-start">
            <div className="mt-1 bg-capicu-beige rounded-full p-2 w-8 h-8 shrink-0">
              <IconComponent className="w-full h-full text-capicu-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-capicu-navy-600 mt-2 leading-relaxed">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
} 