import React from 'react';
import { Home, ShieldCheck, Camera, Bell, Lock, User, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans antialiased text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-sm py-4 px-6 md:px-12 sticky top-0 z-50">
        <nav className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
…        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Vivint Clone. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default App;
