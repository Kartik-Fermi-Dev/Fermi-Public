import { FileText, Download, Eye, FileSpreadsheet, File } from 'lucide-react';

interface DocumentCardProps {
  name: string;
  type: 'pdf' | 'doc' | 'sheet' | 'image' | 'other';
  size: string;
  uploadedDate: string;
  uploadedBy: string;
  source: 'google-drive' | 'uploaded';
  onView: () => void;
  onDownload: () => void;
}

export function DocumentCard({
  name,
  type,
  size,
  uploadedDate,
  uploadedBy,
  source,
  onView,
  onDownload,
}: DocumentCardProps) {
  const getIcon = () => {
    switch (type) {
      case 'pdf':
        return <FileText className="size-5" strokeWidth={2} />;
      case 'doc':
        return <FileText className="size-5" strokeWidth={2} />;
      case 'sheet':
        return <FileSpreadsheet className="size-5" strokeWidth={2} />;
      default:
        return <File className="size-5" strokeWidth={2} />;
    }
  };

  const getGradient = () => {
    switch (type) {
      case 'pdf':
        return { from: '#fef2f2', to: '#fee2e2' }; // shades of #ef3a41
      case 'doc':
        return { from: '#eff6ff', to: '#dbeafe' }; // shades of #165dfc
      case 'sheet':
        return { from: '#ecfdf5', to: '#d1fae5' }; // shades of #009866
      default:
        return { from: '#f8fafc', to: '#f1f5f9' };
    }
  };

  const getIconColor = () => {
    switch (type) {
      case 'pdf':
        return '#ef3a41';
      case 'doc':
        return '#165dfc';
      case 'sheet':
        return '#009866';
      default:
        return '#0a2f51';
    }
  };

  const getTypeLabel = () => {
    switch (type) {
      case 'pdf':
        return 'PDF';
      case 'doc':
        return 'DOC';
      case 'sheet':
        return 'XLSX';
      default:
        return 'FILE';
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#0a2f51]/5 overflow-hidden"
      onMouseEnter={(e) => {
        const border = e.currentTarget.querySelector('[data-hover-border]') as HTMLElement;
        if (border) border.style.opacity = '1';
      }}
      onMouseLeave={(e) => {
        const border = e.currentTarget.querySelector('[data-hover-border]') as HTMLElement;
        if (border) border.style.opacity = '0';
      }}
    >
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0a2f51]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="p-5">
        {/* Icon and Type Badge */}
        <div className="flex items-start justify-between mb-4">
          <div 
            className="w-14 h-14 rounded-xl flex items-center justify-center shadow-sm"
            style={{ 
              background: `linear-gradient(to bottom right, ${getGradient().from}, ${getGradient().to})`
            }}
          >
            <div style={{ color: getIconColor() }}>
              {getIcon()}
            </div>
          </div>
          <span className="rounded-md text-[#0a2f51] font-medium tracking-wide" style={{ backgroundColor: '#f5f2ed', fontSize: '10px', padding: '4px 8px' }}>
            {getTypeLabel()}
          </span>
        </div>

        {/* Document Name */}
        <h3 className="font-semibold text-[14px] text-[#0a2f51] leading-[20px] mb-2 truncate group-hover:text-[#0a2f51] transition-colors">
          {name}
        </h3>

        {/* Metadata Grid */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center gap-2 text-[11px]">
            <span className="text-[rgba(10,47,81,0.6)]">
              {size}
            </span>
            <div className="w-1 h-1 rounded-full bg-[rgba(10,47,81,0.2)]" />
            <span className="text-[rgba(10,47,81,0.6)]">
              {uploadedDate}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-[rgba(10,47,81,0.5)]">
              by {uploadedBy}
            </span>
            {source === 'google-drive' && (
              <>
                <div className="w-1 h-1 rounded-full bg-[rgba(10,47,81,0.2)]" />
                <div className="flex items-center gap-1">
                  <svg className="size-3" viewBox="0 0 24 24" fill="none">
                    <path d="M12.5 2L2.5 18h5l5-10 5 10h5L12.5 2z" fill="#4285F4"/>
                    <path d="M7.5 18l-2.5 4h10l2.5-4h-10z" fill="#34A853"/>
                    <path d="M12.5 12l5 10 5-4-5-10-5 4z" fill="#FBBC04"/>
                  </svg>
                  {/* <span className="text-[10px] text-[rgba(10,47,81,0.5)]">
                    Drive
                  </span> */}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            onClick={onView}
            className="flex-1 group/btn relative overflow-hidden rounded-lg flex items-center justify-center gap-1.5 transition-all duration-200 shadow-sm hover:shadow-md font-medium"
            style={{ backgroundColor: '#0a2f51', color: '#ffffff', padding: '8px 12px', fontSize: '12px',cursor: 'pointer' }}
          >
            <Eye strokeWidth={2.0} style={{ color: '#ffffff', width: '14px', height: '14px' }} />
            <span style={{ color: '#ffffff' }}>View</span>
          </button>
          <button
            onClick={onDownload}
            className="py-2.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md group/download hover:bg-[#e8e5e0]"
            style={{ backgroundColor: '#f5f2ed', paddingLeft: '14px', paddingRight: '14px' }}
          >
            <Download className="size-3.5 group-hover/download:translate-y-0.5 transition-transform duration-200" strokeWidth={2.5} style={{ color: '#0a2f51', width: '16px', height: '16px' }} />
          </button>
        </div>
      </div>

      {/* Hover indicator - bottom border gradient */}
      <div 
        data-hover-border
        className="absolute bottom-0 left-0 right-0 transition-opacity duration-300"
        style={{
          height: '3px',
          background: 'linear-gradient(to right, transparent, #0a2f51, transparent)',
          opacity: 0,
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
