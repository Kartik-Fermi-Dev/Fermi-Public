import { useState, createContext, useContext, useEffect } from 'react';
import { Check } from 'lucide-react';
import imgEllipse7 from '../assets/c2ffe1838f7427723d0135e67d18edb4663e2cdf.png';
import imgEllipse3 from '../assets/e24867ebea33dc74a20a3649760f7b12808263ff.png';
import imgEllipse4 from '../assets/cebf3486cfaaf2eb3749538fd48e78277e339730.png';
import imgEllipse5 from '../assets/65ed234a766a554601cb91ba6a2657b39478e08a.png';
import imgEllipse2 from '../assets/92058e796cedd74776f3bb7d42e6676f9aaf3e37.png';
import imgEllipse6 from '../assets/d64e2b38a0c710f60ccaedf6360e43585b82e4e7.png';
import sapLogo from '../assets/ce80ce4bc09287b4624082ddf7c6301c26a525a3.png';
import { ManageConnectionModal } from './ManageConnectionModal';
import { AddCustomAPIModal } from './AddCustomAPIModal';
import DocumentManagementSection from './DocumentManagementSection';
import { AddGoogleDriveModal } from './AddGoogleDriveModal';

interface DataConnectorsContextType {
  activeSubTab: 'erp' | 'documents';
  setActiveSubTab: (tab: 'erp' | 'documents') => void;
}

const DataConnectorsContext = createContext<DataConnectorsContextType | undefined>(undefined);

export function DataConnectorsSubNav() {
  const context = useContext(DataConnectorsContext);
  if (!context) return null;

  const { activeSubTab, setActiveSubTab } = context;

  return (
    <>
      <button
        onClick={() => setActiveSubTab('erp')}
        className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all ${
          activeSubTab === 'erp'
            ? 'bg-[#f5f2ed] text-[#0a2f51] font-bold px-6 py-3'
            : 'text-[#0a2f51] hover:text-[#0a2f51]/80 px-5 py-2.5'
        }`}
        style={activeSubTab === 'erp' ? { backgroundColor: '#f5f2ed' } : {}}
      >
        ERP
      </button>
      <button
        onClick={() => setActiveSubTab('documents')}
        className={`px-5 py-2.5 rounded-lg text-base font-medium transition-all ${
          activeSubTab === 'documents'
            ? 'bg-[#f5f2ed] text-[#0a2f51] font-bold px-6 py-3'
            : 'text-[#0a2f51] hover:text-[#0a2f51]/80 px-5 py-2.5'
        }`}
        style={activeSubTab === 'documents' ? { backgroundColor: '#f5f2ed' } : {}}
      >
        Documents
      </button>
    </>
  );
}

export function DataConnectorsContent() {
  const context = useContext(DataConnectorsContext);
  if (!context) return null;

  const { activeSubTab } = context;
  const [isManageModalOpen, setIsManageModalOpen] = useState(false);
  const [selectedConnector, setSelectedConnector] = useState<string>('');
  const [isAddCustomAPIModalOpen, setIsAddCustomAPIModalOpen] = useState(false);

  useEffect(() => {
    console.log('Modal state changed:', { isManageModalOpen, selectedConnector });
  }, [isManageModalOpen, selectedConnector]);

  return (
    <div className="w-full h-full overflow-y-auto bg-[#FAFAFA]">
      {activeSubTab === 'erp' && (
        <div className="p-8 max-w-7xl mx-auto">
          {/* ERP Connections Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#0a2f51] mb-3">ERP Connections</h2>
            <p className="text-gray-600 text-base mb-8">
              Connect your ERP systems to synchronize production, inventory, and quality data.
            </p>
            
            {/* Connection Cards */}
            <div className="grid grid-cols-2 gap-6">
              {/* SAP S/4HANA Card */}
              <div className="bg-white relative rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #0a2f51' }}>
                
                {/* Header */}
                <div className="flex items-start justify-between p-5 pb-0">
                  <div className="h-[28px] w-[56px] flex-shrink-0">
                    <img 
                      src={sapLogo} 
                      alt="SAP" 
                      className="w-full h-full object-contain" 
                    />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {/* Info Icon */}
                    <button className="size-4 flex-shrink-0 text-[#0a2f51] hover:text-[#0a2f51]/70 transition-colors">
                      <svg className="size-full" fill="none" viewBox="0 0 12 12">
                        <g clipPath="url(#clip0_connector_info)">
                          <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M6 8V6M6 4H6.005" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_connector_info">
                            <rect fill="white" height="12" width="12" />
                          </clipPath>
                        </defs>
                      </svg>
                    </button>
                    
                    {/* Connected Badge */}
                    <div className="text-white px-2 py-1.5 rounded-full flex items-center gap-1.5" style={{ backgroundColor: '#0a2f51' }}>
                      <Check className="size-4" />
                      <span className="font-medium text-[11px] leading-none">
                        Connected
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-5 p-5 pt-0">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="font-bold text-[16px] text-[#0a2f51] leading-[24px] tracking-[-0.2px]">
                      SAP S/4HANA
                    </h3>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Real-time inventory & batch data sync
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Automated batch record creation
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Integrated with quality & compliance modules
                      </p>
                    </div>
                  </div>

                  {/* Manage Connection Button */}
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log('Manage Connection clicked');
                      setSelectedConnector('SAP S/4HANA');
                      setIsManageModalOpen(true);
                    }}
                    className="rounded-lg px-8 py-2.5 transition-colors w-full bg-transparent hover:bg-[#0a2f51]/5 cursor-pointer" 
                    style={{ border: '1px solid #0a2f51' }}
                  >
                    <p className="font-medium text-[14px] text-center leading-[21px] tracking-[-0.1504px] text-[#0a2f51]">
                      Manage Connection
                    </p>
                  </button>
                </div>
              </div>

              {/* Custom API Card */}
              <div className="bg-white relative rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #0a2f51' }}>
                
                {/* Header */}
                <div className="flex items-start justify-between p-5 pb-0">
                  <div className="h-[40px] w-[80px] flex-shrink-0">
                    <div className="w-full h-full rounded-lg flex items-center justify-center px-3 py-1" style={{ backgroundColor: '#0a2f51' }}>
                      <span className="text-white font-mono text-lg font-semibold">&lt;/&gt;</span>
                    </div>
                  </div>
                  
                  {/* Info Icon */}
                  <button className="size-4 flex-shrink-0 text-[#0a2f51] hover:text-[#0a2f51]/70 transition-colors">
                    <svg className="size-full" fill="none" viewBox="0 0 12 12">
                      <g clipPath="url(#clip0_connector_info_custom)">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 8V6M6 4H6.005" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_connector_info_custom">
                          <rect fill="white" height="12" width="12" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>

                {/* Card Content */}
                <div className="flex flex-col gap-5 p-5 pt-0">
                  {/* Title */}
                  <div className="mb-3">
                    <h3 className="font-bold text-[16px] text-[#0a2f51] leading-[24px] tracking-[-0.2px]">
                      Custom API
                    </h3>
                  </div>

                  {/* Features List */}
                  <div className="flex flex-col gap-3 mb-6">
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Connect any REST/SOAP API
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Custom data mapping
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                      <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                        Flexible authentication options
                      </p>
                    </div>
                  </div>

                  {/* Add Custom API Button */}
                  <button 
                    onClick={() => setIsAddCustomAPIModalOpen(true)}
                    className="rounded-lg px-8 py-2.5 transition-colors w-full hover:opacity-90" 
                    style={{ backgroundColor: '#0a2f51' }}
                  >
                    <p className="font-medium text-[14px] text-center leading-[21px] tracking-[-0.1504px] text-white">
                      Add Custom API
                    </p>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Available ERP Connectors Section */}
          <div>
            <h2 className="text-3xl font-bold text-[#0a2f51] mb-3">Available ERP Connectors</h2>
            <p className="text-gray-600 text-base mb-6">
              Connect to any major ERP system with our extensive connector library
            </p>
            
            {/* ERP Logos */}
            <div className="flex items-center pb-4" style={{ overflowX: 'auto' }}>
              <div className="flex items-center">
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 1, marginRight: '-48px' }}>
                  <img src={imgEllipse7} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 2, marginRight: '-48px' }}>
                  <img src={imgEllipse3} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 3, marginRight: '-48px' }}>
                  <img src={imgEllipse4} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 4, marginRight: '-48px' }}>
                  <img src={imgEllipse5} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 5, marginRight: '-48px' }}>
                  <img src={imgEllipse2} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 6, marginRight: '-48px' }}>
                  <img src={imgEllipse6} alt="ERP Connector" className="rounded-full object-cover" style={{ width: '120px', height: '120px', display: 'block', border: '0.5px solid #6b7280' }} />
                </div>
                {/* 400+ Connections */}
                <div className="flex-shrink-0 relative" style={{ width: '120px', height: '120px', zIndex: 7 }}>
                  <div className="absolute inset-0 rounded-full bg-white flex flex-col items-center justify-center" style={{ width: '120px', height: '120px', border: '0.5px solid #6b7280' }}>
                    <p className="text-[20px] font-medium text-black leading-tight">400+</p>
                    <p className="text-[16px] font-medium text-black leading-tight">Connections</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {activeSubTab === 'documents' && (
        <DocumentManagementSection />
      )}

      {/* Manage Connection Modal */}
      <ManageConnectionModal
        connectorName={selectedConnector || 'SAP S/4HANA'}
        isOpen={isManageModalOpen}
        onClose={() => {
          setIsManageModalOpen(false);
          setSelectedConnector('');
        }}
      />

      {/* Add Custom API Modal */}
        <AddCustomAPIModal
            isOpen={isAddCustomAPIModalOpen}
            onClose={() => setIsAddCustomAPIModalOpen(false)}
            onConnect={() => {
            // Handle connect logic here
            console.log('Custom API connected');
            }}
        />
    </div>
  );
}

export default function DataConnectorsSection({ children }: { children: React.ReactNode }) {
  const [activeSubTab, setActiveSubTab] = useState<'erp' | 'documents'>('erp');

  return (
    <DataConnectorsContext.Provider value={{ activeSubTab, setActiveSubTab }}>
      {children}
    </DataConnectorsContext.Provider>
  );
}
