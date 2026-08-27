import { assetPath } from "../utils/assetPath";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Education", href: "#education" },
];

export const TYPING_WORDS = ["Bijay Kumar Yadav", "Cybersecurity Student", "Network Security Enthusiast", "Ethical Hacker"];

export const SKILL_GROUPS = [
  { title: "Networking", icon: "fa-solid fa-network-wired", tags: ["OSI Model", "TCP/IP Suite", "IPv4 & IPv6", "Subnetting", "Router / Switch Config", "VLAN", "DHCP", "DNS", "Wireless Networking", "Network Troubleshooting"] },
  { title: "Cybersecurity", icon: "fa-solid fa-shield-halved", tags: ["Vulnerability Assessment", "Network Scanning", "Enumeration", "Web App Security", "SIEM Log Management", "IS Audit", "Virtual Lab Setup"] },
  { title: "Programming & OS", icon: "fa-solid fa-code", tags: ["Python", "Java", "HTML", "CSS", "JavaScript", "Windows", "Kali Linux", "Debian"] },
  { title: "Tools & Cloud", icon: "fa-solid fa-toolbox", tags: ["Cisco Packet Tracer", "Wireshark", "Oracle VirtualBox", "Git", "Arduino IDE", "AWS Cloud Fundamentals"] },
  { title: "System Admin & Windows", icon: "fa-solid fa-server", tags: ["Active Directory", "User & Group Management", "User Permissions", "Access Control", "File & Folder Permissions", "Windows Server", "Remote Access", "System Troubleshooting"] },
];

export const PROJECTS = [
  { title: "Gym Management System", icon: "fa-solid fa-dumbbell", color: "#ec4899", tech: "Java · Swing · OOP", description: "Desktop application automating gym operations: member registration, payment tracking, and attendance logging using OOP principles.", link: "https://github.com/bijaykumaryadav5525/Gym-management-system-java" },
  { title: "WeCare Beauty Store Inventory", icon: "fa-solid fa-store", color: "#34d399", tech: "Python · File I/O", description: "Console-based inventory system with buy three get one free logic, invoice generation, and dynamic price markup.", link: "https://github.com/bijaykumaryadav5525/WeCare-Beauty-Store-Inventory-Python-File-I-O-" },
  { title: "E-Commerce Website", icon: "fa-solid fa-cart-shopping", color: "#a78bfa", tech: "HTML · CSS · JavaScript", description: "Full-featured e-commerce platform with product catalog, shopping cart, and secure user authentication simulation.", link: "https://github.com/bijaykumaryadav5525/E-Commerce-Website-Web-Development-" },
  { title: "SQL Injection Detection", icon: "fa-solid fa-database", color: "#fbbf24", tech: "Python · Security Lab", description: "Dedicated local environment to study and detect injection vulnerabilities. Automated scanning tool built for educational purposes.", link: "https://github.com/bijaykumaryadav5525/sql-injection-project-" },
  { title: "Radar Missile Launcher (IoT)", icon: "fa-solid fa-microchip", color: "#d4a373", tech: "Arduino · Embedded C++", description: "Automatic radar-based missile launcher system using an ultrasonic sensor and servo motors with Arduino as the core microcontroller.", link: "https://github.com/bijaykumaryadav5525/arduino-radar-missile-launcher" },
];

export const CASE_STUDIES = [
  { title: "SolarWinds Supply Chain Attack", icon: "fa-solid fa-globe", description: "Analysis of the 2020 Russian state-sponsored attack that compromised SolarWinds' build system, injecting malware into legitimate updates. Explores supply chain security lessons.", tag: "#supplychain #cybersecurity", link: assetPath("case studies/solarwind_case_stydy.html") },
  { title: "Stuxnet - Cyber-Physical Attack", icon: "fa-solid fa-microchip", description: "Stuxnet (2010) was a state-sponsored worm that targeted Iran's nuclear centrifuges, manipulating PLCs to cause physical damage while hiding its activity - a landmark in cyber-warfare.", tag: "#stuxnet #cyberwarfare #ICS", link: assetPath("case studies/Stuxnet_Case_Studies.html") },
  { title: "Risk & Crisis Management", icon: "fa-solid fa-briefcase", description: "Examination of a large-scale phishing campaign against financial institutions, covering incident response, stakeholder communication, and business continuity strategies.", tag: "#phishing #crisismanagement #IR", link: assetPath("case studies/Risk_Crisis (two case studies).html") },
  { title: "Shai Hulud DDoS Attack", icon: "fa-solid fa-server", description: "Analysis of a massive DDoS campaign that leveraged amplification techniques to disrupt cloud services globally, exploring mitigation and resilience strategies.", tag: "#ddos #cloudsecurity #resilience", link: assetPath("case studies/Shai_Hulud_Case_Study.html") },
];

export const EXPERIENCE = [{
  role: "Network & Security Intern",
  company: "Techno Planet Pvt. Ltd.",
  companyLink: "https://tknoplanet.com/",
  linkLabel: "LiNK",
  location: "Sanepa-1, Lalitpur, Nepal",
  period: "2026 - Present",
  points: [
    "Configure and manage network devices including routers, switches, wireless access points and firewalls.",
    "Assist with network deployment, IP addressing, VLAN configuration and troubleshooting of wired and wireless connectivity.",
    "Configure firewall rules, access controls and security policies to maintain secure network infrastructure.",
    "Visit client sites to observe, analyze and understand real-world network architecture, infrastructure and security operations.",
    "Perform on-site configuration, installation and troubleshooting of routers, switches, access points, firewalls and other networking equipment.",
    "Assist in implementing network security measures, device hardening and access control to protect network resources.",
    "Monitor and troubleshoot network connectivity, device configuration and performance-related issues.",
  ],
}];

export const BLOG_POSTS = [
  { date: "CCNA Lab Series - Day 1/30", title: "VLAN Basics (Creation, Assignment & Deletion)", description: "A practical CCNA lab solution covering VLAN creation, assigning switch ports, trunk links, and VLAN deletion using a three-switch topology.", tags: ["CCNA", "VLAN", "Cisco Packet Tracer"], link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_ccna-cisco-networking-activity-7491845467207544833-xIvH?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE", platform: "LinkedIn", platformIcon: "fa-brands fa-linkedin-in", linkLabel: "View on LinkedIn" },
  { date: "Aug 16, 2026", title: "Kioptrix: Level 1 (#1) - Complete Beginner Walkthrough", description: "A beginner-friendly walkthrough of Kioptrix Level 1, breaking down the steps to solve the challenge and understand the core concepts behind it.", tags: ["Walkthrough", "Beginner", "CTF"], link: "https://medium.com/@bjxyz98/kioptrix-level-1-1-complete-beginner-walkthrough-98e66fb3d17b" },
  { date: "Aug 16, 2026", title: "Hacker101 Source Code Enumeration: A little something to get you started", description: "An introduction to source code enumeration techniques using the Hacker101 platform - perfect for anyone starting their bug bounty journey.", tags: ["Source Code", "Enumeration", "Hacker101"], link: "https://medium.com/@bjxyz98/hacker101-source-code-enumeration-a-little-something-to-get-you-started-b2c50fcbedb5" },
  { date: "Aug 13, 2026", title: "I Thought Linux Was Just a Black Screen - 30 Commands That Changed How I See Networks", description: "Why Linux matters for cybersecurity and networking - plus 30 essential commands that transformed my understanding of how networks really work.", tags: ["Linux", "Networking", "Commands"], link: "https://medium.com/@bjxyz98/i-thought-linux-was-just-a-black-screen-until-these-30-commands-changed-how-i-see-networks-e7fbd5ae3964" },
  { date: "Aug 13, 2026", title: "Networking & Security 101: DNS, OSI Model, Subnetting, TCP/UDP, and the CIA Triad Explained", description: "A comprehensive crash course on foundational networking and security concepts - from the OSI model to the CIA triad - written for aspiring security professionals.", tags: ["Networking 101", "OSI Model", "CIA Triad"], link: "https://medium.com/@bjxyz98/networking-security-101-dns-osi-model-subnetting-tcp-udp-and-the-cia-triad-explained-5bb5d83f28f1" },
];

export const CERTIFICATIONS = [
  { name: "AWS Cloud Architecting", org: "AWS Academy", year: "2026", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_aws-awsacademy-cloudarchitecting-activity-7475847791739830273-L1TS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "AWS Cloud Foundations", org: "AWS Academy", year: "2026", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_aws-awsacademy-cloudfoundations-activity-7475846934411243522-zdB4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "IT Security Foundations: Network Security", org: "LinkedIn Learning", year: "2026", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_cybersecurity-networksecurity-itsecurity-activity-7481039316681404417-SMyN?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Firewall Administration Essential Training", org: "LinkedIn Learning", year: "2026", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_cybersecurity-networksecurity-firewall-activity-7481347602316255232-YoHT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "SIEM for Log Management (SIEP)", org: "Islington College", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_islingtonsummerclass-islingtonstories-industryready-activity-7376131804640104448-TpH_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "IS Audit (SIEP)", org: "Islington College", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_islingtonsummerclass-islingtonstories-industryready-activity-7376137688518889472-rgz2?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Networking Basics", org: "Cisco Networking Academy", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_cisco-cisconetworkingacademy-networking-activity-7475850830013898752-gIXG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Introduction to Cybersecurity", org: "Cisco Networking Academy", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_cisco-cisconetworkingacademy-cybersecurity-activity-7475849688550871040-l670?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Kali Linux Complete Master Class", org: "Cyber Mind Space", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_kalilinux-ethicalhacking-cybersecurity-activity-7475852127626518528-lk1F?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Cybersecurity Foundations", org: "LinkedIn Learning", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_cybersecurity-infosec-linkedinlearning-activity-7357691422801629184-09K3?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
  { name: "Java Object-Oriented Programming", org: "LinkedIn Learning", year: "2025", link: "https://www.linkedin.com/posts/bijay-kumar-yadav-6a2b3b369_java-oop-programming-activity-7357689476942323712-CHul?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFt4lRoBPC7m5j1lMIRlAvrV_kp8TZontTE" },
];

// ✅ Added 'image' field for each education entry
export const EDUCATION = [
  { 
    icon: "fa-solid fa-building-columns", 
    title: "BSc (Hons) Computer Networking & IT Security", 
    institute: "Islington College · London Metropolitan University", 
    meta: "Kamal Marg, Kamalpokhari, Kathmandu · 2024 - Present",
    link: "https://islington.edu.np/",
    image: assetPath("images/islington.jpg")
  },
  { 
    icon: "fa-solid fa-school", 
    title: "SLC (School Leaving Certificate)", 
    institute: "Kathmandu Model College (KMC) · NEB", 
    meta: "Bagbazar, Kathmandu · 2023 - 2024",
    link: "https://ktmmodelcollege.edu.np/",
    image: assetPath("images/kmc.jpg")
  },
  { 
    icon: "fa-solid fa-graduation-cap", 
    title: "SEE (Secondary Education Examination)", 
    institute: "Shree Sharda Namuna Academy · NEB", 
    meta: "Lahan-1, Siraha · 2023",
    link: "https://www.facebook.com/coolrajesh36",
    image: assetPath("images/shree shards.avif")
  },
];