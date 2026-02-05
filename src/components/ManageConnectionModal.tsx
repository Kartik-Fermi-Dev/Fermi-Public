import { Check, RefreshCw, Trash2, Settings } from 'lucide-react';

interface ManageConnectionModalProps {
  connectorName: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ManageConnectionModal({
  connectorName,
  isOpen,
  onClose,
}: ManageConnectionModalProps) {
  // Mock connection data - in real app this would come from props/API
  const connectionData = {
    status: 'Active',
    environment: 'Sandbox (Demo)',
    connectedOn: 'January 15, 2026',
    lastSync: 'Just now',
    apiEndpoint: 'https://api.sap.com/s4hana/v1',
    syncFrequency: 'Every 15 minutes',
    recordsSynced: '12,847',
  };

  console.log('ManageConnectionModal render:', { isOpen, connectorName });

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white w-[700px] overflow-hidden flex flex-col shadow-2xl"
        style={{ 
          width: '620px', 
          maxHeight: '95vh', 
          minHeight: '90vh',
          borderRadius: '16px'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 flex items-center justify-between" style={{ backgroundColor: '#0a2f51', paddingTop: '16px', paddingBottom: '16px' }}>
          <div className="flex items-center gap-3">
            <div className="rounded-lg p-2 flex-shrink-0" style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
              <svg className="size-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={{ color: '#ffffff', width: '24px', height: '24px' }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div>
              <h2 className="font-bold text-[20px] leading-[28px]" style={{ color: '#ffffff' }}>
                Manage Connection
              </h2>
              <p className="text-[14px] leading-[20px] mt-0.5" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {connectorName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="transition-colors p-2 flex-shrink-0 hover:opacity-80 rounded-lg hover:bg-white/10"
            style={{ color: '#ffffff', zIndex: 10 }}
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
                stroke="#ffffff" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                style={{ stroke: '#ffffff' }}
              />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8" style={{ maxHeight: 'calc(95vh - 200px)' }}>
          {/* Connection Status */}
          <div className="bg-[#f5f2ed] rounded-lg p-5 border border-[#0a2f51]/10" style={{ backgroundColor: '#f5f2ed'}}>
            <div className="flex items-center gap-3">
              <div className="bg-[#0a2f51] rounded-full p-1.5 flex-shrink-0 w-8 h-8 flex items-center justify-center" style={{ backgroundColor: '#0a2f51'}}>
                <Check className="size-4 text-white" strokeWidth={3} />
              </div>
              <div>
                <h3 className="font-bold text-[16px] text-[#0a2f51] leading-[24px]">
                  Connection Active
                </h3>
                <p className="text-[8px] text-[rgba(10,47,81,0.6)] leading-[18px] mt-0.5" style={{ fontSize: '12px' }}>
                  All systems operational
                </p>
              </div>
            </div>
          </div>

          {/* Connection Details */}
          <div className="mt-6">
            <h4 className="font-semibold text-[14px] text-[#0a2f51] leading-[20px] mb-4 uppercase tracking-[0.5px]">
              Connection Details
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-start py-3 border-b border-[#0a2f51]/5">
                <span className="text-[14px] text-[#77899d] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  Environment
                </span>
                <span className="font-medium text-[14px] text-[#0a2f51] leading-[20px]">
                  {connectionData.environment}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-[#0a2f51]/5">
                <span className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  Connected On
                </span>
                <span className="font-medium text-[14px] text-[#0a2f51] leading-[20px]">
                  {connectionData.connectedOn}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-[#0a2f51]/5">
                <span className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  Last Sync
                </span>
                <span className="font-medium text-[14px] text-[#0a2f51] leading-[20px] flex items-center gap-2">
                  {connectionData.lastSync}
                  <RefreshCw className="" style={{ color: '#77899d', width: '16px', height: '16px' }} />
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-[#0a2f51]/5">
                <span className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  Sync Frequency
                </span>
                <span className="font-medium text-[14px] text-[#0a2f51] leading-[20px]">
                  {connectionData.syncFrequency}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-[#0a2f51]/5">
                <span className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  API Endpoint
                </span>
                <span className="font-medium text-[13px] text-[#0a2f51] leading-[20px] font-mono" style={{ color: '#0a2f51', fontWeight: '400' }}>
                  {connectionData.apiEndpoint}
                </span>
              </div>
              <div className="flex justify-between items-start py-3">
                <span className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[20px]" style={{ color: '#77899d', fontWeight: '400' }}>
                  Records Synced
                </span>
                <span className="font-medium text-[14px] text-[#0a2f51] leading-[20px]" style={{ color: '#0a2f51', fontWeight: '400' }}>
                  {connectionData.recordsSynced}
                </span>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mt-8 mb-8">
            <h4 className="font-semibold text-[14px] text-[#0a2f51] leading-[20px] mb-4 uppercase tracking-[0.5px]">
              Quick Actions
            </h4>
            <div className="space-y-3">
              <button className="w-full hover:opacity-90 transition-colors rounded-lg flex items-center gap-3 border border-gray-300" style={{ backgroundColor: '#f5f2ed', padding: '16px 20px' }}>
                <RefreshCw className="size-5 text-[#0a2f51]" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-[14px] text-[#0a2f51] leading-[20px]">
                    Sync Now
                  </p>
                  <p className="text-[12px] text-[rgba(10,47,81,0.6)] leading-[16px] mt-0.5">
                    Trigger an immediate data synchronization
                  </p>
                </div>
              </button>
              
              <button className="w-full hover:opacity-90 transition-colors rounded-lg flex items-center gap-3 border border-gray-300" style={{ backgroundColor: '#f5f2ed', padding: '16px 20px' }}>
                <Settings className="size-5 text-[#0a2f51]" />
                <div className="flex-1 text-left">
                  <p className="font-medium text-[14px] text-[#0a2f51] leading-[20px]">
                    Reconfigure Connection
                  </p>
                  <p className="text-[12px] text-[rgba(10,47,81,0.6)] leading-[16px] mt-0.5">
                    Update API credentials and settings
                  </p>
                </div>
              </button>
            </div>
          </div>
          <div className="border-t border-[#0a2f51]/10 mt-4 mb-4"></div>
          {/* Danger Zone */}
          <div>
            <h4 className="font-semibold text-[14px] text-[#0a2f51] leading-[20px] mb-3 uppercase tracking-[0.5px]">
              Danger Zone
            </h4>
            <button className="w-full hover:opacity-90 transition-colors rounded-lg flex items-center gap-3" style={{ backgroundColor: '#ffffff', border: '1px solid #f8b4b4', padding: '16px 20px' }}>
              <Trash2 className="size-5" style={{ color: '#dc2626' }} />
              <div className="flex-1 text-left">
                <p className="font-medium text-[14px] leading-[20px]" style={{ color: '#dc2626' }}>
                  Disconnect {connectorName}
                </p>
                <p className="text-[12px] leading-[16px] mt-0.5" style={{ color: '#dc2626' }}>
                  This will stop all data synchronization
                </p>
              </div>
            </button>
          </div>
        </div>
        {/* Footer */}
        <div className="bg-white px-8 py-4 border-t border-[#0a2f51]/10 flex justify-end" style={{ backgroundColor: '#fafafa' }}>
          <button
            onClick={onClose}
            className="transition-colors rounded-lg px-8 py-2.5 font-medium text-[14px] leading-[20px]"
            style={{ backgroundColor: '#0a2f51', color: '#ffffff' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
