import { X, Download, ExternalLink, FileText } from 'lucide-react';

interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  documentName: string;
  documentType: string;
  documentUrl?: string;
}

export function DocumentViewerModal({
  isOpen,
  onClose,
  documentName,
  documentType,
  documentUrl,
}: DocumentViewerModalProps) {
  if (!isOpen) return null;

  // Extract format from documentType, ensuring it's lowercase
  const format = documentType ? documentType.toLowerCase() : 'file';

  const handleDownload = () => {
    if (documentUrl) {
      const link = document.createElement('a');
      link.href = documentUrl;
      link.download = documentName;
      link.click();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="bg-white rounded-[16px] flex flex-col shadow-2xl overflow-hidden" 
        style={{ 
          borderRadius: '16px', 
          width: '70vw',
          height: '80vh',
          maxWidth: '1800px', 
          maxHeight: '1000px' 
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-10 py-7 flex items-center justify-between flex-shrink-0" style={{ backgroundColor: '#0a2f51', paddingTop: '20px', paddingBottom: '20px' }}>
          <div className="flex-1 min-w-0 pr-4">
            <h2 className="font-semibold text-[18px] leading-[26px] break-words" style={{ color: '#ffffff' }}>
              {documentName || 'Untitled Document'}
            </h2>
            <p className="text-[13px] leading-[18px] mt-0.5" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>
              {format || 'file'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownload}
              className="transition-colors p-2 rounded-[8px] hover:bg-white/10"
              title="Download"
              style={{ color: '#ffffff' }}
            >
              <Download className="size-5" style={{ color: '#ffffff' }} />
            </button>
            <button 
              className="transition-colors p-2 rounded-[8px] hover:bg-white/10"
              title="Open in new tab"
              style={{ color: '#ffffff' }}
            >
              <ExternalLink className="size-5" style={{ color: '#ffffff' }} />
            </button>
            <button
              onClick={onClose}
              className="transition-colors p-2 rounded-[8px] hover:bg-white/10"
              title="Close"
              style={{ color: '#ffffff' }}
            >
              <X className="size-5" style={{ color: '#ffffff' }} />
            </button>
          </div>
        </div>

        {/* Document Viewer Area */}
        <div className="flex-1 overflow-auto bg-[#f5f5f5] flex items-center justify-center p-8">
          {documentUrl ? (
            <iframe
              src={documentUrl}
              className="w-full h-full bg-white rounded-[8px] shadow-lg"
              title={documentName}
            />
          ) : (
            <div className="bg-white rounded-[12px] p-12 flex flex-col items-center justify-center gap-4 max-w-md w-full">
              <div className="rounded-full p-6 flex items-center justify-center" style={{ backgroundColor: '#f5f2ed' }}>
                <FileText className="size-16" style={{ color: '#0a2f51' }} strokeWidth={1.5} />
              </div>
              <div className="text-center">
                <h3 className="font-semibold text-[16px] leading-[24px] mb-2" style={{ color: '#000000' }}>
                  Document Preview
                </h3>
                <p className="text-[14px] leading-[20px]" style={{ color: '#000000' }}>
                  This is a demo environment. In production, the full document would be displayed here.
                </p>
              </div>
              <button 
                onClick={handleDownload}
                className="rounded-[20px] px-6 py-3 flex items-center gap-2 transition-colors font-medium text-[14px] mt-4"
                style={{ 
                  backgroundColor: '#0a2f51', 
                  color: '#ffffff',
                  borderRadius: '20px'
                }}
              >
                <Download className="size-4" style={{ color: '#ffffff' }} />
                <span style={{ color: '#ffffff' }}>Download Document</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
