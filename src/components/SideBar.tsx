import { MdAssessment, MdChevronLeft, MdChevronRight } from "react-icons/md";

interface SideBarProps {
  isOpen: boolean;
  onToggle: () => void;
}

export const SideBar = ({ isOpen, onToggle }: SideBarProps) => {
  return (
    <div
      className={`bg-white border-r border-gray-200 text-gray-900 transition-all duration-300 ease-in-out flex flex-col relative ${
        isOpen ? "w-64" : "w-16"
      }`}
    >   
      <button
        onClick={onToggle}
        className="absolute -right-3 top-8 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow z-10"
        aria-label="Toggle sidebar"
      >
        {isOpen ? (
          <MdChevronLeft className="w-4 h-4 text-gray-600" />
        ) : (
          <MdChevronRight className="w-4 h-4 text-gray-600" />
        )}
      </button>

      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 flex items-center justify-center shrink-0">
            <div 
              className="rounded-full border-2"
              style={{ 
                width: '32px', 
                height: '32px',
                borderColor: '#84BD60',
                borderWidth: '6px'
              }}
            />
          </div>
          {isOpen && (
            <span className="font-black text-xl whitespace-nowrap" >
              DataFlow
            </span>
          )}
        </div>
      </div>

     <nav className="flex-1 p-2">
        <div className="space-y-1">
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-100 hover:bg-green-200 transition-colors"
            style={{ backgroundColor: 'rgba(75, 119, 47, 0.1)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(75, 119, 47, 0.2)'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(75, 119, 47, 0.1)'}
          >
            <div className="flex items-center justify-center" style={{ borderColor: '#4B772F' }}>
              <MdAssessment className="w-4 h-4 shrink-0" style={{ color: '#4B772F' }} />
            </div>
            {isOpen && (
              <span className="text-sm font-medium whitespace-nowrap" style={{ color: '#4B772F' }}>
                Analytics
              </span>
            )}
          </a>
        </div>
      </nav>
    </div>
  );
};
