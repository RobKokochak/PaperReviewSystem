import { useState, useRef, useEffect } from "react";

export default function UserDropdown() {
  const [userDropdownIsOpen, setUserDropdownIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null); // create reference to outermost div

  useEffect(() => { // gets called whenever userDropdownIsOpen changes
    if (!userDropdownIsOpen) return;

    const handleWindowClick = (event: Event) => {
      const clickEvent = event.target as Node;
      const dropdown = dropdownRef.current;
      if (dropdown && !dropdown.contains(clickEvent)) {
        setUserDropdownIsOpen(false);
      }
    }

    window.addEventListener('click', handleWindowClick);
    
    return () => window.removeEventListener('click', handleWindowClick);
  }, [userDropdownIsOpen]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md px-4 py-2 text-sm font-medium text-white hover:text-gray-300"
        onClick={(e) => {
          e.stopPropagation();
          setUserDropdownIsOpen(!userDropdownIsOpen);
        }}
      >
        Jane Doe
        <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </button>

      {userDropdownIsOpen && (
        <div className="origin-top-right absolute right-0 w-40 rounded-md shadow-lg bg-modal-color ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <a href="#" className="block px-4 py-2 text-sm text-right text-white hover:text-gray-300" role="menuitem">Logout</a>
          </div>
        </div>
      )}
    </div>
  )
}

