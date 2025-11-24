import { useEffect, useState } from 'react';

interface Node {
  id: number;
  x: number;
  y: number;
  layer: number;
}

interface Connection {
  from: Node;
  to: Node;
}

export default function NeuralNetwork() {
  const [activeNodes, setActiveNodes] = useState<number[]>([]);

  // Create neural network structure
  const layers = [4, 6, 6, 4]; // nodes per layer
  const nodes: Node[] = [];
  const connections: Connection[] = [];

  let nodeId = 0;
  layers.forEach((count, layerIndex) => {
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: nodeId++,
        x: (layerIndex * 100) / (layers.length - 1),
        y: ((i + 1) * 100) / (count + 1),
        layer: layerIndex
      });
    }
  });

  // Create connections between layers
  nodes.forEach((node) => {
    if (node.layer < layers.length - 1) {
      const nextLayerNodes = nodes.filter(n => n.layer === node.layer + 1);
      nextLayerNodes.forEach((nextNode) => {
        if (Math.random() > 0.3) { // 70% connection probability
          connections.push({ from: node, to: nextNode });
        }
      });
    }
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const randomNodes = Array.from({ length: Math.floor(Math.random() * 5) + 3 }, () =>
        Math.floor(Math.random() * nodes.length)
      );
      setActiveNodes(randomNodes);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[500px] bg-[#FAFAFA] rounded-2xl overflow-hidden">
      {/* SVG Neural Network */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        {/* Connections */}
        <g className="connections">
          {connections.map((conn, i) => (
            <line
              key={i}
              x1={conn.from.x}
              y1={conn.from.y}
              x2={conn.to.x}
              y2={conn.to.y}
              stroke={activeNodes.includes(conn.from.id) && activeNodes.includes(conn.to.id) ? '#A78BFA' : '#E9D5FF'}
              strokeWidth="0.15"
              opacity={activeNodes.includes(conn.from.id) && activeNodes.includes(conn.to.id) ? 0.8 : 0.3}
              style={{ transition: 'opacity 0.3s ease' }}
            />
          ))}
        </g>

        {/* Nodes */}
        <g className="nodes">
          {nodes.map((node) => (
            <g key={node.id}>
              {/* Outer glow when active */}
              {activeNodes.includes(node.id) && (
                <circle
                  cx={node.x}
                  cy={node.y}
                  r="2"
                  fill="none"
                  stroke="#A78BFA"
                  strokeWidth="0.3"
                  opacity="0.5"
                  className="animate-ping"
                />
              )}
              
              {/* Main node */}
              <circle
                cx={node.x}
                cy={node.y}
                r={activeNodes.includes(node.id) ? "1.3" : "1"}
                fill={activeNodes.includes(node.id) ? '#A78BFA' : '#E9D5FF'}
                style={{ transition: 'all 0.3s ease' }}
              />

              {/* Inner core */}
              <circle
                cx={node.x}
                cy={node.y}
                r="0.4"
                fill="white"
                opacity={activeNodes.includes(node.id) ? 0.8 : 0.5}
                style={{ transition: 'opacity 0.3s ease' }}
              />
            </g>
          ))}
        </g>

        {/* Data flow particles */}
        {connections.slice(0, 5).map((conn, i) => (
          <circle
            key={`particle-${i}`}
            r="0.4"
            fill="#A78BFA"
            opacity="0"
            style={{
              animation: `dataFlow${i} 2s linear infinite`,
              animationDelay: `${i * 0.4}s`
            }}
          >
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
              path={`M ${conn.from.x},${conn.from.y} L ${conn.to.x},${conn.to.y}`}
            />
            <animate
              attributeName="opacity"
              values="0;1;0"
              dur="2s"
              repeatCount="indefinite"
              begin={`${i * 0.4}s`}
            />
          </circle>
        ))}
      </svg>

      {/* Info overlay */}
      <div className="absolute bottom-6 left-6 right-6">
        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 border border-gray-200 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse"
                style={{ animationDuration: '2s' }}
              />
              <span className="text-sm text-[#1A1A1A]">Processing operational data</span>
            </div>
            <div className="flex items-center gap-4 text-xs text-[#6B6D71]">
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#A78BFA]"></div>
                <span>{nodes.length} nodes</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-1.5 h-1.5 rounded-full bg-[#E9D5FF]"></div>
                <span>{connections.length} connections</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner indicators */}
      <div className="absolute top-4 right-4 flex gap-2">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-[#A78BFA] animate-pulse"
            style={{
              animationDuration: '2s',
              animationDelay: `${i * 0.3}s`
            }}
          />
        ))}
      </div>
    </div>
  );
}