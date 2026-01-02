import React from "react";

// Icon wrapper type
interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
}

// Base icon component
const Icon: React.FC<IconProps & { children: React.ReactNode }> = ({
  size = 24,
  children,
  className = "",
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    {children}
  </svg>
);

// ============================================
// ACCOMMODATION
// ============================================

export const IconRiad: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Courtyard house with central fountain */}
    <rect x="3" y="6" width="18" height="14" rx="1" />
    <path d="M3 10h18" />
    <path d="M8 6V3" />
    <path d="M16 6V3" />
    <circle cx="12" cy="15" r="2" />
    <path d="M12 13v-3" />
  </Icon>
);

export const IconKasbah: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Fortified castle with towers */}
    <path d="M4 20V10l2-2V6l2-2v4l2-2v4h8v-4l2 2v2l2 2v10" />
    <path d="M4 20h16" />
    <rect x="9" y="14" width="6" height="6" />
    <path d="M12 14v-2" />
  </Icon>
);

export const IconHotel: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Modern hotel building */}
    <rect x="4" y="4" width="16" height="16" rx="1" />
    <path d="M9 4v16" />
    <path d="M15 4v16" />
    <path d="M4 9h16" />
    <path d="M4 15h16" />
  </Icon>
);

export const IconTent: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Desert camp tent */}
    <path d="M12 3L2 20h20L12 3z" />
    <path d="M12 3v17" />
    <path d="M7 20c0-3 2.5-5 5-5s5 2 5 5" />
  </Icon>
);

export const IconBed: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 12h20v6H2z" />
    <path d="M2 18v2" />
    <path d="M22 18v2" />
    <path d="M4 12V8a2 2 0 012-2h12a2 2 0 012 2v4" />
    <circle cx="7" cy="9" r="2" />
  </Icon>
);

export const IconRoom: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 9v12" />
  </Icon>
);

// ============================================
// TRANSPORT
// ============================================

export const IconCamel: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Camel with hump, neck, head, legs */}
    <path d="M4 19v-4c0-1 1-2 2-2h1l1-2c.5-1.5 2-2.5 3-2l1 2h3c1 0 2 1 2 2v2" />
    <path d="M9 9c0-1.5.5-3 2-3" />
    <path d="M17 15v4" />
    <path d="M14 15v4" />
    <path d="M7 15v4" />
    <path d="M4 15v4" />
    <ellipse cx="10" cy="11" rx="2" ry="1.5" />
    <path d="M18 13l2-3v-1" />
    <circle cx="20" cy="8" r="1" />
  </Icon>
);

export const IconCar: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 17h14v-5l-2-4H7l-2 4v5z" />
    <path d="M3 17h2" />
    <path d="M19 17h2" />
    <circle cx="7" cy="17" r="2" />
    <circle cx="17" cy="17" r="2" />
  </Icon>
);

export const Icon4x4: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* SUV/Land Cruiser style */}
    <path d="M4 15h16v4H4z" />
    <path d="M5 15V9a2 2 0 012-2h10a2 2 0 012 2v6" />
    <path d="M7 11h4" />
    <path d="M13 11h4" />
    <circle cx="7" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
  </Icon>
);

export const IconPlane: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 00-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
  </Icon>
);

export const IconWalk: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M14 10l2 8-3-1-2 4" />
    <path d="M10 10l-2 8 3-1 2 4" />
    <path d="M10 10h4l1-3h-6l1 3z" />
  </Icon>
);

// ============================================
// LANDSCAPE & PLACES
// ============================================

export const IconDesert: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Sand dunes */}
    <path d="M2 18c4-4 6-4 10 0s6 4 10 0" />
    <path d="M2 14c4-4 6-4 10 0s6 4 10 0" />
    <circle cx="18" cy="6" r="2" />
  </Icon>
);

export const IconMountains: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M8 20L2 10l6-6 4 5 4-5 6 6-6 10H8z" />
    <path d="M8 20l4-6 4 6" />
  </Icon>
);

export const IconCoast: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Waves and beach */}
    <path d="M2 18c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M17 4l-5 8h8l-3-8z" />
    <path d="M12 12v8" />
  </Icon>
);

export const IconMedina: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Winding streets/archways */}
    <path d="M4 20V8a4 4 0 014-4h8a4 4 0 014 4v12" />
    <path d="M4 20h16" />
    <path d="M9 20v-6a3 3 0 016 0v6" />
    <path d="M12 4v4" />
  </Icon>
);

export const IconPalm: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 22V8" />
    <path d="M12 8c-4 0-7-3-7-3s3-1 7-1 7 1 7 1-3 3-7 3z" />
    <path d="M12 8c-3 2-6 1-6 1s1-3 3-5" />
    <path d="M12 8c3 2 6 1 6 1s-1-3-3-5" />
  </Icon>
);

export const IconOasis: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <ellipse cx="12" cy="18" rx="8" ry="3" />
    <path d="M12 15V6" />
    <path d="M12 6c-3 0-5-2-5-2s2-.5 5-.5 5 .5 5 .5-2 2-5 2z" />
  </Icon>
);

// ============================================
// ACTIVITIES
// ============================================

export const IconHiking: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="4" r="2" />
    <path d="M7 20l3-8 2 2 2-2 3 8" />
    <path d="M12 10v4" />
    <path d="M4 14l4-2" />
    <path d="M20 14l-4-2" />
  </Icon>
);

export const IconSurfing: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <ellipse cx="12" cy="12" rx="2" ry="8" transform="rotate(-20 12 12)" />
    <circle cx="14" cy="6" r="2" />
  </Icon>
);

export const IconCooking: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 6V3" />
    <path d="M8 6V4" />
    <path d="M16 6V4" />
    <path d="M4 10c0-2 1-4 8-4s8 2 8 4v2c0 6-4 10-8 10s-8-4-8-10v-2z" />
    <path d="M4 12h16" />
  </Icon>
);

export const IconSpa: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Hammam/spa */}
    <circle cx="12" cy="12" r="9" />
    <path d="M12 3c-2 4-2 6 0 9s2 5 0 9" />
    <path d="M3 12h18" />
  </Icon>
);

export const IconShopping: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 6h15l-1.5 9h-12z" />
    <circle cx="9" cy="19" r="2" />
    <circle cx="17" cy="19" r="2" />
    <path d="M6 6L4 2H2" />
  </Icon>
);

export const IconCamera: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="2" y="6" width="20" height="14" rx="2" />
    <circle cx="12" cy="13" r="4" />
    <path d="M8 6V4h8v2" />
  </Icon>
);

// ============================================
// AMENITIES
// ============================================

export const IconPool: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M2 16c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <path d="M2 20c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
    <circle cx="8" cy="8" r="3" />
    <path d="M16 6v6" />
    <path d="M13 9h6" />
  </Icon>
);

export const IconWifi: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 12.5a9 9 0 0114 0" />
    <path d="M8.5 16a5 5 0 017 0" />
    <circle cx="12" cy="19" r="1" />
  </Icon>
);

export const IconAC: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="2" y="4" width="20" height="10" rx="2" />
    <path d="M6 17v3" />
    <path d="M10 17v3" />
    <path d="M14 17v3" />
    <path d="M18 17v3" />
    <path d="M6 14v3" />
    <path d="M18 14v3" />
  </Icon>
);

export const IconBreakfast: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Coffee cup and croissant */}
    <path d="M5 12h8a4 4 0 010 8H5a4 4 0 010-8z" />
    <path d="M13 14h2a2 2 0 010 4h-2" />
    <path d="M9 12V8" />
    <path d="M7 12V9" />
    <path d="M11 12V9" />
    <path d="M17 4c3 1 4 4 2 6" />
    <path d="M17 4c0 2-1 4-3 4" />
  </Icon>
);

export const IconMeals: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Plate with utensils */}
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
  </Icon>
);

export const IconShower: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M4 4v16" />
    <path d="M4 8h12a4 4 0 014 4v0" />
    <path d="M12 12v2" />
    <path d="M9 14v2" />
    <path d="M15 14v2" />
    <path d="M12 18v2" />
    <path d="M9 20v1" />
    <path d="M15 20v1" />
  </Icon>
);

export const IconShampoo: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M10 6h4v2h-4z" />
    <path d="M8 8h8v12a2 2 0 01-2 2h-4a2 2 0 01-2-2V8z" />
    <path d="M10 12h4" />
    <path d="M11 4h2v2h-2z" />
  </Icon>
);

export const IconTowel: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 6h18v4H3z" />
    <path d="M5 10v10" />
    <path d="M19 10v10" />
    <path d="M5 20h14" />
    <path d="M8 6V4" />
    <path d="M16 6V4" />
  </Icon>
);

export const IconSlippers: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <ellipse cx="7" cy="16" rx="4" ry="5" />
    <ellipse cx="17" cy="16" rx="4" ry="5" />
    <path d="M5 12c0-2 1-3 2-3s2 1 2 3" />
    <path d="M15 12c0-2 1-3 2-3s2 1 2 3" />
  </Icon>
);

// ============================================
// MOROCCAN SPECIFIC
// ============================================

export const IconTagine: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Traditional tagine pot */}
    <path d="M4 18h16" />
    <path d="M6 18c0-3 2.5-5 6-5s6 2 6 5" />
    <path d="M12 4l4 9H8l4-9z" />
  </Icon>
);

export const IconMintTea: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Traditional Moroccan tea glass */}
    <path d="M7 8h10l-1 12H8L7 8z" />
    <path d="M6 8h12" />
    <path d="M9 8V6a3 3 0 016 0v2" />
    <path d="M10 12c1 1 3 1 4 0" />
  </Icon>
);

export const IconArgan: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Argan tree/fruit */}
    <circle cx="12" cy="8" r="5" />
    <path d="M12 13v8" />
    <path d="M8 21h8" />
    <circle cx="12" cy="8" r="2" />
  </Icon>
);

export const IconZellige: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Moroccan geometric tile pattern */}
    <rect x="3" y="3" width="18" height="18" />
    <path d="M12 3v18" />
    <path d="M3 12h18" />
    <path d="M3 3l18 18" />
    <path d="M21 3L3 21" />
  </Icon>
);

export const IconLantern: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Moroccan lantern */}
    <path d="M10 2h4v2h-4z" />
    <path d="M8 4h8l2 4v10l-2 4H6l-2-4V8l2-4h2z" />
    <circle cx="12" cy="12" r="2" />
    <path d="M12 4v4" />
  </Icon>
);

export const IconDoor: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    {/* Moroccan arched door */}
    <path d="M6 22V8a6 6 0 0112 0v14" />
    <path d="M6 22h12" />
    <circle cx="15" cy="14" r="1" />
    <path d="M12 8v6" />
  </Icon>
);

// ============================================
// INFORMATION & UI
// ============================================

export const IconClock: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v6l4 2" />
  </Icon>
);

export const IconCalendar: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="3" y="4" width="18" height="17" rx="2" />
    <path d="M3 9h18" />
    <path d="M8 2v4" />
    <path d="M16 2v4" />
  </Icon>
);

export const IconPeople: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="9" cy="7" r="3" />
    <circle cx="17" cy="7" r="2" />
    <path d="M3 20c0-4 3-6 6-6s6 2 6 6" />
    <path d="M15 14c2 0 4 1.5 4 4" />
  </Icon>
);

export const IconPrice: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 6v2" />
    <path d="M12 16v2" />
    <path d="M9 10c0-1 1-2 3-2s3 1 3 2-1 2-3 2-3 1-3 2 1 2 3 2 3-1 3-2" />
  </Icon>
);

export const IconStar: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </Icon>
);

export const IconCheck: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M20 6L9 17l-5-5" />
  </Icon>
);

export const IconX: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M18 6L6 18" />
    <path d="M6 6l12 12" />
  </Icon>
);

export const IconArrowRight: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M5 12h14" />
    <path d="M12 5l7 7-7 7" />
  </Icon>
);

export const IconArrowLeft: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M19 12H5" />
    <path d="M12 19l-7-7 7-7" />
  </Icon>
);

export const IconChevronDown: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M6 9l6 6 6-6" />
  </Icon>
);

export const IconMenu: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M3 12h18" />
    <path d="M3 6h18" />
    <path d="M3 18h18" />
  </Icon>
);

export const IconPhone: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
  </Icon>
);

export const IconMail: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </Icon>
);

export const IconWhatsApp: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.4A10 10 0 1012 2z" />
    <path d="M8.5 9.5c.3-.8.6-1 1-1s.7.5 1 1c.2.5.1 1-.2 1.4l-.3.3c.4.8 1 1.4 1.8 1.8l.3-.3c.4-.3.9-.4 1.4-.2.5.3 1 .6 1 1s-.2.7-1 1c-1.2.4-2.5 0-3.7-.8a8.4 8.4 0 01-2.3-2.3c-.8-1.2-1.2-2.5-.8-3.7z" />
  </Icon>
);

export const IconInstagram: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
  </Icon>
);

export const IconLocation: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </Icon>
);

export const IconInfo: React.FC<IconProps> = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 16v-4" />
    <path d="M12 8h.01" />
  </Icon>
);

// ============================================
// EXPORT ALL
// ============================================

const Icons = {
  // Accommodation
  Riad: IconRiad,
  Kasbah: IconKasbah,
  Hotel: IconHotel,
  Tent: IconTent,
  Bed: IconBed,
  Room: IconRoom,
  // Transport
  Camel: IconCamel,
  Car: IconCar,
  "4x4": Icon4x4,
  Plane: IconPlane,
  Walk: IconWalk,
  // Landscape
  Desert: IconDesert,
  Mountains: IconMountains,
  Coast: IconCoast,
  Medina: IconMedina,
  Palm: IconPalm,
  Oasis: IconOasis,
  // Activities
  Hiking: IconHiking,
  Surfing: IconSurfing,
  Cooking: IconCooking,
  Spa: IconSpa,
  Shopping: IconShopping,
  Camera: IconCamera,
  // Amenities
  Pool: IconPool,
  Wifi: IconWifi,
  AC: IconAC,
  Breakfast: IconBreakfast,
  Meals: IconMeals,
  Shower: IconShower,
  Shampoo: IconShampoo,
  Towel: IconTowel,
  Slippers: IconSlippers,
  // Moroccan
  Tagine: IconTagine,
  MintTea: IconMintTea,
  Argan: IconArgan,
  Zellige: IconZellige,
  Lantern: IconLantern,
  Door: IconDoor,
  // UI
  Clock: IconClock,
  Calendar: IconCalendar,
  People: IconPeople,
  Price: IconPrice,
  Star: IconStar,
  Check: IconCheck,
  X: IconX,
  ArrowRight: IconArrowRight,
  ArrowLeft: IconArrowLeft,
  ChevronDown: IconChevronDown,
  Menu: IconMenu,
  Phone: IconPhone,
  Mail: IconMail,
  WhatsApp: IconWhatsApp,
  Instagram: IconInstagram,
  Location: IconLocation,
  Info: IconInfo,
};

export default Icons;
