import { useState } from 'react';
import { Check, Upload, FolderOpen } from 'lucide-react';
import { DocumentCard } from './DocumentCard';
import { DocumentViewerModal } from './DocumentViewerModal';
import { AddGoogleDriveModal } from './AddGoogleDriveModal';

interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'doc' | 'sheet' | 'image' | 'other';
  size: string;
  uploadedDate: string;
  uploadedBy: string;
  source: 'google-drive' | 'uploaded';
  url?: string;
}

const documents: Document[] = [
  {
    id: '1',
    name: 'Batch Record - FP-2401-003.pdf',
    type: 'pdf',
    size: '2.4 MB',
    uploadedDate: 'Jan 27, 2026',
    uploadedBy: 'Sarah Chen',
    source: 'uploaded',
  },
  {
    id: '2',
    name: 'Quality Control Report Q1 2026.pdf',
    type: 'pdf',
    size: '1.8 MB',
    uploadedDate: 'Jan 25, 2026',
    uploadedBy: 'Michael Torres',
    source: 'google-drive',
  },
  {
    id: '3',
    name: 'Manufacturing SOP v3.2.docx',
    type: 'doc',
    size: '856 KB',
    uploadedDate: 'Jan 23, 2026',
    uploadedBy: 'Emily Rodriguez',
    source: 'google-drive',
  },
  {
    id: '4',
    name: 'Inventory Tracking Sheet.xlsx',
    type: 'sheet',
    size: '425 KB',
    uploadedDate: 'Jan 22, 2026',
    uploadedBy: 'David Kim',
    source: 'uploaded',
  },
  {
    id: '5',
    name: 'Equipment Calibration Certificate.pdf',
    type: 'pdf',
    size: '1.2 MB',
    uploadedDate: 'Jan 20, 2026',
    uploadedBy: 'Sarah Chen',
    source: 'google-drive',
  },
  {
    id: '6',
    name: 'Production Schedule February.xlsx',
    type: 'sheet',
    size: '312 KB',
    uploadedDate: 'Jan 18, 2026',
    uploadedBy: 'Michael Torres',
    source: 'uploaded',
  },
];

const getDocumentTypeLabel = (type: Document['type']): string => {
  switch (type) {
    case 'pdf':
      return 'PDF';
    case 'doc':
      return 'DOC';
    case 'sheet':
      return 'XLSX';
    case 'image':
      return 'IMAGE';
    default:
      return 'FILE';
  }
};

export default function DocumentManagementSection() {
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState<Document | null>(null);
  const [isAddGoogleDriveModalOpen, setIsAddGoogleDriveModalOpen] = useState(false);
  const handleViewDocument = (document: Document) => {
    setSelectedDocument(document);
    setIsViewerOpen(true);
  };

  const handleDownloadDocument = (document: Document) => {
    console.log('Download', document.name);
    // Add download logic here
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-[#FAFAFA]">
      <div className="p-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-[#0a2f51] mb-3">Document Management</h2>
          <p className="text-gray-600 text-base">
            Connect document sources and manage your production documents, batch records, and SOPs.
          </p>
        </div>

        {/* Document Sources */}
        <div>
          <h3 className="text-2xl font-bold text-[#0a2f51] mb-6">Document Sources</h3>
          
          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-6">
            {/* Google Drive Card */}
            <div className="bg-white relative rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '1px solid #0a2f51' }}>
              {/* Header */}
              <div className="flex items-start justify-between p-5 pb-0">
                {/* <div className="h-[20px] w-[48px] flex-shrink-0 flex items-center"> */}
                  {/* Google Logo - Simple text version */}
                  {/* <svg className="w-full h-full" viewBox="0 0 56 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <text x="28" y="18" fontSize="9" fill="#4285F4" textAnchor="middle" fontWeight="500" fontFamily="Arial, sans-serif" letterSpacing="0.3px">Google</text>
                  </svg>
                </div> */}
                <div className="text-[14px] font-medium text-[#0a2f51] leading-[21px] tracking-[-0.1504px]">Google Drive</div>
                
                <div className="flex items-center gap-2">
                  {/* Info Icon */}
                  <button className="size-4 flex-shrink-0 text-[#0a2f51] hover:text-[#0a2f51]/70 transition-colors">
                    <svg className="size-full" fill="none" viewBox="0 0 12 12">
                      <g clipPath="url(#clip0_doc_info)">
                        <path d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6 8V6M6 4H6.005" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                      </g>
                      <defs>
                        <clipPath id="clip0_doc_info">
                          <rect fill="white" height="12" width="12" />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  
                  {/* Connected Badge */}
                  <div className="text-white px-2 py-1.5 rounded-full flex items-center gap-1.5" style={{ backgroundColor: '#0a2f51' }}>
                    <Check style={{ color: '#ffffff', width: '14px', height: '14px' }} />
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
                    Google Drive
                  </h3>
                </div>

                {/* Features List */}
                <div className="flex flex-col gap-3 mb-6">
                  <div className="flex gap-4 items-start">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                    <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                      Automatic document sync
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                    <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                      Real-time collaboration
                    </p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#0a2f51' }} strokeWidth={3} />
                    <p className="text-[14px] text-[rgba(10,47,81,0.8)] leading-[21px] tracking-[-0.1504px]">
                      Version history tracking
                    </p>
                  </div>
                </div>

                {/* Manage Connection Button */}
                <button
                  className="rounded-lg px-8 py-2.5 transition-colors w-full bg-transparent hover:bg-[#0a2f51]/5 cursor-pointer"
                  style={{ border: '1px solid #0a2f51' }}
                  onClick={() => setIsAddGoogleDriveModalOpen(true)}
                >
                  <p className="font-medium text-[14px] text-center leading-[21px] tracking-[-0.1504px] text-[#0a2f51]">
                    Manage Connection
                  </p>
                </button>
              </div>
            </div>

            {/* Upload Documents Card */}
            <div className="bg-white relative rounded-xl shadow-sm hover:shadow-md transition-shadow" style={{ border: '2px dashed #0a2f51', borderColor: 'rgba(10, 47, 81, 0.2)' }}>
              {/* Card Content */}
              <div className="flex flex-col gap-5 p-8 items-center justify-center text-center min-h-[320px]">
                {/* Upload Icon */}
                <div className="rounded-full p-6 flex items-center justify-center" style={{ backgroundColor: '#f5f2ed' }}>
                  <Upload className="size-14" style={{ color: '#0a2f51' }} />
                </div>

                {/* Title */}
                <div>
                  <h3 className="font-bold text-[16px] text-[#0a2f51] leading-[24px] tracking-[-0.2px] mb-2">
                    Upload Documents
                  </h3>
                  <p className="text-[14px] text-[rgba(10,47,81,0.6)] leading-[21px] tracking-[-0.1504px]">
                    Manually upload batch records, SOPs, and compliance documents
                  </p>
                </div>

                {/* Choose Files Button */}
                <button
                  className="rounded-lg px-8 py-2.5 transition-colors hover:opacity-90"
                  style={{ backgroundColor: '#0a2f51', color: '#ffffff', marginTop: '16px' }}
                >
                  <p className="font-medium text-[14px] text-center leading-[21px] tracking-[-0.1504px]">
                    Choose Files
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Documents */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FolderOpen className="size-6 text-[#0a2f51]" />
              <h3 className="text-2xl font-bold text-[#0a2f51]">Recent Documents</h3>
            </div>
            <div className="flex items-center gap-2">
              <select className="bg-white border border-[#e8e5e0] rounded-lg px-4 py-2 text-[13px] text-[#0a2f51] focus:outline-none focus:border-[#0a2f51] transition-colors">
                <option>All Documents</option>
                <option>Google Drive</option>
                <option>Uploaded</option>
              </select>
              <select className="bg-white border border-[#e8e5e0] rounded-lg px-4 py-2 text-[13px] text-[#0a2f51] focus:outline-none focus:border-[#0a2f51] transition-colors">
                <option>All Types</option>
                <option>PDF</option>
                <option>Word</option>
                <option>Excel</option>
              </select>
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid gap-4" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
            {documents.map((document) => (
              <DocumentCard
                key={document.id}
                name={document.name}
                type={document.type}
                size={document.size}
                uploadedDate={document.uploadedDate}
                uploadedBy={document.uploadedBy}
                source={document.source}
                onView={() => handleViewDocument(document)}
                onDownload={() => handleDownloadDocument(document)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Document Viewer Modal */}
      {selectedDocument && (
        <DocumentViewerModal
          isOpen={isViewerOpen}
          onClose={() => {
            setIsViewerOpen(false);
            setSelectedDocument(null);
          }}
          documentName={selectedDocument.name}
          documentType={getDocumentTypeLabel(selectedDocument.type)}
          documentUrl={selectedDocument.url}
        />
      )}
      {isAddGoogleDriveModalOpen && (
        <AddGoogleDriveModal
          isOpen={isAddGoogleDriveModalOpen}
          onClose={() => setIsAddGoogleDriveModalOpen(false)}
          onConnect={() => {
            // Handle connect logic here
            console.log('Google Drive connected');
          }}
        />
      )}
    </div>
  );
}
