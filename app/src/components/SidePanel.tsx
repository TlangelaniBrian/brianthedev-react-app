import React from 'react';

interface SidePanelProps {
    isOpen: boolean;
    toggle: () => void;
}

const SidePanel: React.FC<SidePanelProps> = ({ isOpen, toggle }) => {
    return (
<div className={`bg-gray-800 text-white p-4 ${isOpen ? 'w-64' : 'w-16'} transition-width duration-300`} style={{ height: 'calc(100vh - 100px)', marginTop: '50px' }}>
    <button onClick={toggle} className="mb-4 primary">
        {isOpen ? 'Minimize' : 'Maximize'}
    </button>
    {isOpen && <div>Side Panel Content</div>}
</div>
    );
};

export default SidePanel;