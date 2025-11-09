export function CircuitBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Dot Grid Pattern */}
      <svg className="w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="dotGrid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="#ea2320" opacity="0.3" />
          </pattern>
          
          <radialGradient id="glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ea2320" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ea2320" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotGrid)" />
      </svg>

      {/* Network Lines and Nodes */}
      <svg className="w-full h-full absolute inset-0 opacity-15" xmlns="http://www.w3.org/2000/svg">
        {/* Connection lines creating a network pattern */}
        <line x1="10%" y1="20%" x2="30%" y2="15%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="30%" y1="15%" x2="45%" y2="25%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="45%" y1="25%" x2="60%" y2="20%" stroke="#ea2320" strokeWidth="1.5" opacity="0.8" />
        <line x1="60%" y1="20%" x2="80%" y2="30%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        
        <line x1="15%" y1="45%" x2="35%" y2="50%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="35%" y1="50%" x2="50%" y2="45%" stroke="#ea2320" strokeWidth="1.5" opacity="0.8" />
        <line x1="50%" y1="45%" x2="70%" y2="55%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="70%" y1="55%" x2="85%" y2="50%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        
        <line x1="20%" y1="70%" x2="40%" y2="75%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="40%" y1="75%" x2="55%" y2="70%" stroke="#ea2320" strokeWidth="1" opacity="0.6" />
        <line x1="55%" y1="70%" x2="75%" y2="80%" stroke="#ea2320" strokeWidth="1.5" opacity="0.8" />
        
        {/* Vertical connections */}
        <line x1="30%" y1="15%" x2="35%" y2="50%" stroke="#ea2320" strokeWidth="0.8" opacity="0.5" />
        <line x1="60%" y1="20%" x2="70%" y2="55%" stroke="#ea2320" strokeWidth="0.8" opacity="0.5" />
        <line x1="45%" y1="25%" x2="40%" y2="75%" stroke="#ea2320" strokeWidth="0.8" opacity="0.5" />
        
        {/* Network nodes with glow */}
        <circle cx="10%" cy="20%" r="3" fill="url(#glow)" />
        <circle cx="30%" cy="15%" r="4" fill="url(#glow)" />
        <circle cx="45%" cy="25%" r="3" fill="url(#glow)" />
        <circle cx="60%" cy="20%" r="5" fill="url(#glow)" />
        <circle cx="80%" cy="30%" r="3" fill="url(#glow)" />
        
        <circle cx="15%" cy="45%" r="3" fill="url(#glow)" />
        <circle cx="35%" cy="50%" r="5" fill="url(#glow)" />
        <circle cx="50%" cy="45%" r="4" fill="url(#glow)" />
        <circle cx="70%" cy="55%" r="3" fill="url(#glow)" />
        <circle cx="85%" cy="50%" r="3" fill="url(#glow)" />
        
        <circle cx="20%" cy="70%" r="3" fill="url(#glow)" />
        <circle cx="40%" cy="75%" r="4" fill="url(#glow)" />
        <circle cx="55%" cy="70%" r="3" fill="url(#glow)" />
        <circle cx="75%" cy="80%" r="5" fill="url(#glow)" />
        
        {/* Solid core nodes */}
        <circle cx="10%" cy="20%" r="2" fill="#ea2320" />
        <circle cx="30%" cy="15%" r="2.5" fill="#ea2320" />
        <circle cx="45%" cy="25%" r="2" fill="#ea2320" />
        <circle cx="60%" cy="20%" r="3" fill="#ea2320" />
        <circle cx="80%" cy="30%" r="2" fill="#ea2320" />
        
        <circle cx="15%" cy="45%" r="2" fill="#ea2320" />
        <circle cx="35%" cy="50%" r="3" fill="#ea2320" />
        <circle cx="50%" cy="45%" r="2.5" fill="#ea2320" />
        <circle cx="70%" cy="55%" r="2" fill="#ea2320" />
        <circle cx="85%" cy="50%" r="2" fill="#ea2320" />
        
        <circle cx="20%" cy="70%" r="2" fill="#ea2320" />
        <circle cx="40%" cy="75%" r="2.5" fill="#ea2320" />
        <circle cx="55%" cy="70%" r="2" fill="#ea2320" />
        <circle cx="75%" cy="80%" r="3" fill="#ea2320" />
      </svg>

      {/* Geometric accent shapes */}
      <svg className="w-full h-full absolute inset-0 opacity-8" xmlns="http://www.w3.org/2000/svg">
        <polygon points="85,5 95,25 75,25" fill="none" stroke="#ea2320" strokeWidth="1" transform="translate(5%, 10%)" />
        <polygon points="85,5 95,25 75,25" fill="none" stroke="#ea2320" strokeWidth="1" transform="translate(80%, 60%)" />
        <rect x="90%" y="85%" width="20" height="20" fill="none" stroke="#ea2320" strokeWidth="1" transform="rotate(45 90 85)" />
        <circle cx="5%" cy="90%" r="15" fill="none" stroke="#ea2320" strokeWidth="1" />
      </svg>
    </div>
  );
}
