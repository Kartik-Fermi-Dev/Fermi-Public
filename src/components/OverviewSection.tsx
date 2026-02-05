import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';

export default function OverviewSection() {
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['North America', 'Europe', 'Asia Pacific']);

  return (
    <div className="w-full h-full overflow-y-auto bg-[#FAFAFA] py-12 px-8">
      <div className="max-w-6xl mx-auto" style={{ maxWidth: '85rem' }}>
        {/* Overview Card */}
        <div className="bg-white rounded-[20px] shadow-lg p-8">
          <h2 className="text-3xl text-center font-bold text-[#0a2f51] mb-8">Overview</h2>
          
          {/* Business Setup Section */}
          <div>
            <h3 className="text-xl font-semibold text-[#0a2f51] mb-3">Business Setup</h3>
            <p className="text-gray-600 mb-6">Tell us about your company</p>
            
            <div className="space-y-6">
              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name
                </label>
                <Input 
                  defaultValue="Fermi Pharmaceuticals" 
                  className="w-full"
                  disabled
                />
              </div>
              
              {/* Industry and Company Size Row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Industry
                  </label>
                  <Select defaultValue="pharmaceuticals" disabled>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pharmaceuticals">Pharmaceuticals</SelectItem>
                      <SelectItem value="biotech">Biotech</SelectItem>
                      <SelectItem value="medical-devices">Medical Devices</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Size
                  </label>
                  <Select defaultValue="1000+" disabled>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-10">1-10 employees</SelectItem>
                      <SelectItem value="11-50">11-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-500">201-500 employees</SelectItem>
                      <SelectItem value="501-1000">501-1000 employees</SelectItem>
                      <SelectItem value="1000+">1000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              {/* Website */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Website
                </label>
                <Input 
                  defaultValue="Orgname.com" 
                  className="w-full"
                  disabled
                />
              </div>
              
              {/* Operating Regions */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Operating Regions
                </label>
                <div className="flex flex-wrap gap-3">
                  {['North America', 'Europe', 'Asia Pacific', 'Latin America', 'Middle East', 'Africa', 'Australia'].map((region) => {
                    const isSelected = selectedRegions.includes(region);
                    return (
                      <button
                        key={region}
                        disabled
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          isSelected
                            ? 'text-white'
                            : 'bg-white text-gray-700 border border-gray-300'
                        }`}
                        style={isSelected ? { backgroundColor: '#0a2f51' } : {}}
                      >
                        {region}
                      </button>
                    );
                  })}
                </div>
              </div>
              
              {/* Brief Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Brief Description
                </label>
                <Textarea 
                  defaultValue="Fermi Pharmaceuticals is a leading pharmaceutical company specializing in the development, manufacturing, and distribution of innovative pharmaceutical products. With a strong commitment to research and development, we focus on creating breakthrough treatments for various medical conditions. Our state-of-the-art manufacturing facilities ensure the highest quality standards, and we maintain strict compliance with all regulatory requirements. We serve healthcare providers and patients worldwide, delivering life-saving medications that improve health outcomes and quality of life."
                  className="w-full min-h-[150px]"
                  rows={6}
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
