import { useState } from 'react';

interface AddCustomAPIModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConnect: () => void;
}

export function AddCustomAPIModal({
  isOpen,
  onClose,
  onConnect,
}: AddCustomAPIModalProps) {
  const [apiEndpoint, setApiEndpoint] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white overflow-hidden flex flex-col shadow-2xl"
        style={{ 
          width: '520px', 
          maxHeight: '90vh',
          borderRadius: '16px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 flex items-center justify-between" style={{ backgroundColor: '#ffffff', paddingTop: '16px', paddingBottom: '16px' }}>
          <div>
            <h2 className="font-bold text-[20px] leading-[28px]" style={{ color: '#0a2f51' }}>
              Add Custom API
            </h2>
            <p className="text-[14px] leading-[20px] mt-0.5" style={{ color: '#6f8297' }}>
              Configure your custom API connection.
            </p>
          </div>
          <button
            onClick={onClose}
            className="transition-colors p-2 flex-shrink-0 hover:opacity-80 rounded-lg hover:bg-white/10"
            style={{ color: '#0a2f51', zIndex: 10, cursor: 'pointer' }}
          >
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              style={{ display: 'block' }}
            >
              <path 
                d="M18 6L6 18M6 6l12 12" 
                stroke="#0a2f51" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ stroke: '#0a2f51' }}
              />
            </svg>
          </button>
        </div>
        <div className="border-t border-[#0a2f51]/10"></div>
        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8" style={{ maxHeight: 'calc(90vh - 200px)' }}>
          {/* Sandbox Info Box */}
          <div className="rounded-lg border mb-6" style={{ backgroundColor: '#f5f2ed', borderColor: '#e5e7eb', padding: '10px' }}>
            <div className="flex items-start gap-3">
              <div className="text-[8px] px-2 py-1 font-medium" style={{ color: '#ffffff', fontSize: '10px', backgroundColor: '#0a2f51', borderRadius: '4px' }}>SANDBOX</div>
              <div className="flex-1">
                <p className="font-bold text-[14px] text-[#0a2f51] leading-[20px] mb-1">
                  Demo Environment
                </p>
                <p className="text-[8px] leading-[18px]" style={{ fontSize: '12px', color: '#6f8297' }}>
                  You're in a sandbox environment. No real data will be modified. All connections are simulated for demonstration purposes.
                </p>
              </div>
            </div>
          </div>

          {/* API Endpoint Input */}
          <div>
            <label className="block text-[14px] font-semibold text-[#0a2f51] leading-[20px] mb-2">
              API Endpoint URL
            </label>
            <input
              type="text"
              value={apiEndpoint}
              onChange={(e) => setApiEndpoint(e.target.value)}
              placeholder="https://api.example.com/v1"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0a2f51] text-[14px]"
              style={{ borderColor: '#d1d5db' }}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="bg-white px-8 py-4 border-t border-[#0a2f51]/10 flex justify-between gap-3" style={{ backgroundColor: '#fafafa' }}>
          <button
            onClick={onClose}
            className="transition-colors rounded-lg px-6 py-2.5 font-medium text-[14px] leading-[20px]"
            style={{ color: '#0a2f51', backgroundColor: 'transparent' }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (apiEndpoint.trim()) {
                onConnect();
                onClose();
              }
            }}
            className="transition-colors rounded-lg px-6 py-2.5 font-medium text-[14px] leading-[20px]"
            style={{ backgroundColor: '#0a2f51', color: '#ffffff', cursor: 'pointer' }}
            disabled={!apiEndpoint.trim()}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
}
