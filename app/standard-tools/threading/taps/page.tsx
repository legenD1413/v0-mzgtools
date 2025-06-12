import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download, ChevronRight, Info, PenToolIcon as Tool, Settings, Layers, Zap, Shield, Target } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"

export default function TapsPage() {
  // Product data based on the provided content
  const products = [
    {
      id: "tap-008",
      name: "Spiral Groove Tap (JIS-SP, Metric)",
      image: "/images/L27-1.png",
      description: "Features upward chip removal, suitable for blind hole processing",
      threadStandards: "JIS, Metric",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L27",
    },
    {
      id: "tap-010",
      name: "Spiral Groove Tap - Short Cutting Edge (JIS-SP, Metric)",
      image: "/images/L28-1.png",
      description: "Short cutting edge design with upward chip removal for blind hole processing",
      threadStandards: "JIS, Metric",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L28",
    },
    {
      id: "tap-011",
      name: "JIS-SP American Spiral Groove Tap (UNC/UNF)",
      image: "/images/L29-1.png",
      description: "American standard spiral groove tap with upward chip removal for blind hole processing",
      threadStandards: "UNC/UNF",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L29",
    },
    {
      id: "tap-012",
      name: "JIS-SP British Spiral Groove Tap (W)",
      image: "/images/L30-1.png",
      description: "British standard spiral groove tap with upward chip removal for blind hole processing",
      threadStandards: "W (Whitworth)",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L30",
    },
    {
      id: "tap-013",
      name: "Straight Groove Tip Tap (JIS-PO, Metric)",
      image: "/images/L31-1.png",
      description: "Straight groove design with downward chip removal for through hole processing",
      threadStandards: "JIS, Metric",
      application: "Features downward chip removal, suitable for through hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L31",
    },
    {
      id: "tap-014",
      name: "JIS-PO British Straight Groove Tip Tap (W)",
      image: "/images/L33-1.png",
      description: "British standard straight groove tap with downward chip removal for through hole processing",
      threadStandards: "W (Whitworth)",
      application: "Features downward chip removal, suitable for through hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L33",
    },
    {
      id: "tap-015",
      name: "JIS-PO American Straight Groove Tip Tap (UNC/UNF)",
      image: "/images/L34-1.png",
      description: "American standard straight groove tap with downward chip removal for through hole processing",
      threadStandards: "UNC/UNF",
      application: "Features downward chip removal, suitable for through hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L34",
    },
    {
      id: "tap-016",
      name: "JIS-NRT Extrusion Tap (Metric)",
      image: "/images/L35-1.png",
      description: "Specialized extrusion tap design for thin wall parts processing",
      threadStandards: "JIS, Metric",
      application: "Suitable for the processing of thin wall parts, common for steel, stainless steel, and cast iron",
      pageNumber: "L35",
    },
    {
      id: "tap-017",
      name: "JIS-NRT American Extrusion Tap (UNC/UNF)",
      image: "/images/L36-1.png",
      description: "American standard extrusion tap for thin wall parts processing",
      threadStandards: "UNC/UNF",
      application: "Suitable for the processing of thin wall parts, common for steel, stainless steel, and cast iron",
      pageNumber: "L36",
    },
    {
      id: "tap-018",
      name: "GB-SPS Spiral Groove Tap",
      image: "/images/L37-1.png",
      description: "Chinese national standard spiral groove tap with upward chip removal",
      threadStandards: "GB (Chinese Standard)",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L37",
    },
    {
      id: "tap-019",
      name: "GB-POZ Straight Groove Tip Tap",
      image: "/images/L38-1.png",
      description: "Chinese national standard straight groove tap with downward chip removal",
      threadStandards: "GB (Chinese Standard)",
      application: "Features downward chip removal, suitable for through hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L38",
    },
    {
      id: "tap-020",
      name: "DIN-SP Spiral Groove Tap",
      image: "/images/L39-1.png",
      description: "German standard spiral groove tap with upward chip removal",
      threadStandards: "DIN (German Standard)",
      application: "Features upward chip removal, suitable for blind hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L39",
    },
    {
      id: "tap-021",
      name: "DIN-PO Straight Groove Tip Tap",
      image: "/images/L40-1.png",
      description: "German standard straight groove tap with downward chip removal",
      threadStandards: "DIN (German Standard)",
      application: "Features downward chip removal, suitable for through hole processing, common for steel, stainless steel, and cast iron",
      pageNumber: "L40",
    },
    {
      id: "tap-022",
      name: "Standard Cylinder Pipe Thread Taps (Rp, G)",
      image: "/images/L41-1.png",
      description: "Cylinder pipe thread taps for both sealed and non-sealed applications",
      threadStandards: "Rp, G (ISO)",
      application: "Rp tap is for processing female threads with thread-seal (conforms to GB/T7306.1-2000 eqv ISO7-1:1994). G tap is for processing female threads of pipe fittings without thread-seal (conforms to GB/T7307-2001 eqv ISO228-1:1994)",
      pageNumber: "L41",
    },
    {
      id: "tap-023",
      name: "55° Taper Pipe Thread Taps (RC)",
      image: "/images/L41-2.png",
      description: "55° taper pipe thread taps for imperial threaded pipe sealing",
      threadStandards: "RC (ISO 7-1:1994)",
      application: "Suitable for processing internal threads of conical pipes sealed with imperial threads. Can be used to process malleable steel and stainless steel pipe fittings. Processed threads comply with GB7306.2-2000 eqv ISO7-1:1994 standard. Made of high-quality high-speed steel W6Mo4Cr4V2 for high precision and durability",
      pageNumber: "L41",
    },
    {
      id: "tap-024",
      name: "55° Taper Pipe Thread Tap with Spiral Flute (PT)",
      image: "/images/L41-3.png",
      description: "55° taper pipe thread tap with spiral flute design and TiN coating",
      threadStandards: "PT (ISO 7-1:1994)",
      application: "Suitable for processing internal threads of tapered pipe threads of stainless steel pipe fittings sealed with inch threads. Tap surface is TIN-treated, and processed threads comply with ISO7-1:1994 standard. Made of high-quality high-speed steel W6Mo4Cr4V2 for high precision and durability",
      pageNumber: "L41",
    },
    {
      id: "tap-025",
      name: "60° Taper Pipe Thread Taps (NPT)",
      image: "/images/L42-1.png",
      description: "60° taper pipe thread taps for thread-sealed applications",
      threadStandards: "NPT (ASME B1.20.1)",
      application: "Designed for processing female threads with thread-seal. Thread standard conforms to ASME Bl. 20.1-1983. Used to produce malleable fittings and stainless steel products",
      pageNumber: "L42",
    },
    {
      id: "tap-026",
      name: "60° Taper Pipe Thread Tap with Spiral Flute (NPT)",
      image: "/images/L42-2.png",
      description: "60° NPT taper pipe thread tap with spiral flute and TiN treatment",
      threadStandards: "NPT (ISO 7-1:1994)",
      application: "Suitable for processing internal threads of tapered pipe threads of stainless steel pipe fittings sealed with inch threads. Tap surface is TIN-treated, and processed threads comply with ISO7-1:1994 standard. Made of high-quality high-speed steel W6Mo4Cr4V2 for high precision and durability",
      pageNumber: "L42",
    },
    {
      id: "tap-027",
      name: "ANPT Taper Pipe Thread Taps",
      image: "/images/L42-3.png",
      description: "Aeronautical National Form taper pipe thread taps",
      threadStandards: "ANPT (MIL-P-7105B)",
      application: "Designed for taper pipe threads with thread-seal, Aeronautical National Form. Thread standard conforms to MIL-P-7105B",
      pageNumber: "L42",
    },
    {
      id: "tap-028",
      name: "NPTF Taper Pipe Thread Taps (HSS Dry Seal)",
      image: "/images/L43-1.png",
      description: "Dry seal pipe thread taps requiring no sealants",
      threadStandards: "NPTF (ANSI B1.20.3)",
      application: "Suitable for dry seal pipe thread processing. Thread standard conforms to ANSI Bl.20.3-1976. Assembly of NPTF thread does not require sealants",
      pageNumber: "L43",
    },
    {
      id: "tap-029",
      name: "60° Taper Pipe Thread Taps HSS Bright-Low Hook for Cast Iron",
      image: "/images/L43-2.png",
      description: "Specialized HSS taper pipe thread taps for cast iron applications",
      threadStandards: "NPT (ASME B1.20.1)",
      application: "Widely applied in malleable iron products. Due to reliable performance, also used for cast copper and other copper products. Thread standard conforms to GB/T12716-2002 eqv ASME Bl.20.1-1983",
      pageNumber: "L43",
    },
    {
      id: "tap-030",
      name: "NGT Taper Thread Tap for Gas Cylinder",
      image: "/images/L43-3.png",
      description: "Specialized taper thread tap for gas cylinder applications",
      threadStandards: "NGT (ANSI 5.7.1)",
      application: "Processed threads conform to ANSI5.7.1 NGT gas cylinder taper thread standard",
      pageNumber: "L43",
    },
    {
      id: "tap-031",
      name: "Taper Thread Tap for Gas Cylinder (PZ)",
      image: "/images/L44-1.png",
      description: "Gas cylinder taper thread tap with 3:25 taper ratio",
      threadStandards: "PZ (GB/T8335-2011)",
      application: "Designed for processing female thread for cylinder mouth with a 3:25 taper (for oxygen, acetylene, LPG, CO2 steel cylinders). Thread standard conforms to GB/T8335-2011",
      pageNumber: "L44",
    },
    {
      id: "tap-032",
      name: "Building Sleeves Joint Tap (JZTT)",
      image: "/images/L44-2.png",
      description: "Custom special order tap for building joint sleeves",
      threadStandards: "Custom Design",
      application: "A special order product, suitable for processing internal threads of building joint sleeves. Pitch and thread angle can be designed according to user requirements. Spiral flute and taps with inclination angle can be specified",
      pageNumber: "L44",
    },
    {
      id: "tap-033",
      name: "Radiator Tap (LH)",
      image: "/images/L44-3.png",
      description: "Left and right-hand thread tap for radiator applications",
      threadStandards: "LH (Left Hand)",
      application: "Suitable for processing left and right-hand internal threads on large column radiator taps",
      pageNumber: "L44",
    },
    {
      id: "tap-034",
      name: "NPSC, NPSL Pipe Steel Taps",
      image: "/images/L45-1.png",
      description: "American standard pipe steel taps for cylindrical internal threads",
      threadStandards: "NPSC/NPSL (H28)",
      application: "Processed threads conform to American Standard H28 for steel pipe cylindrical internal threads",
      pageNumber: "L45",
    },
    {
      id: "tap-035",
      name: "Rp Pipe Steel Taps",
      image: "/images/L45-2.png",
      description: "Chinese standard pipe steel taps for cylindrical internal threads",
      threadStandards: "Rp (GB/T7306.1)",
      application: "Processed threads conform to GB/T7306.1-2000 standard for steel pipe cylindrical internal threads",
      pageNumber: "L45",
    },
    {
      id: "tap-036",
      name: "Extruding Tap for Sucker Rod Joint (YG)",
      image: "/images/L45-3.png",
      description: "Specialized extruding tap for oil industry sucker rod joints",
      threadStandards: "YG (SY/T5029, SY/T5550)",
      application: "Suitable for extrusion forming of internal threads of sucker rod joints (through-hole and blind-hole types). Processed threads conform to SY/T5029-2003, SY/T5550-2006 standards",
      pageNumber: "L45",
    },
    {
      id: "tap-037",
      name: "Extruding Tap for Barrel Cap (TC)",
      image: "/images/L46-1.png",
      description: "Extruding tap designed for barrel cap thread forming",
      threadStandards: "TC (Custom)",
      application: "Designed for extrusion forming of internal threads of barrel caps",
      pageNumber: "L46",
    },
    {
      id: "tap-038",
      name: "Metric Extruding Tap for Filter (LQQ-M)",
      image: "/images/L46-2.png",
      description: "Metric extruding tap for filter thread forming",
      threadStandards: "Metric (GB/T192-197)",
      application: "Suitable for extrusion forming of internal threads of filters. Processed threads conform to GB/T192-2003, 193-2003, 196-2003, 197-2003 thread standards",
      pageNumber: "L46",
    },
    {
      id: "tap-039",
      name: "Unified Extruding Tap for Filter (LQQ-UN)",
      image: "/images/L46-3.png",
      description: "Unified thread extruding tap for filter applications",
      threadStandards: "Unified (ANSI B1.1)",
      application: "Suitable for extrusion forming of internal threads of filters. Processed threads conform to American Unified Thread Standard ANSI-B1.1",
      pageNumber: "L46",
    },
    {
      id: "tap-040",
      name: "Trapezoidal Thread Taps (TR...)",
      image: "/images/L47-1.png",
      description: "Trapezoidal thread taps for valve and nozzle applications",
      threadStandards: "TR (GB5796-2005)",
      application: "Suitable for processing left and right-hand trapezoidal internal threads on cold water nozzles, low-pressure valves, etc. Processed threads conform to GB5796-2005 standard",
      pageNumber: "L47",
    },
    {
      id: "tap-041",
      name: "Anti-loose Locknut Tap (NS)",
      image: "/images/L47-2.png",
      description: "Specialized tap for anti-loose locknut threads",
      threadStandards: "NS (Spiralock)",
      application: "Suitable for processing America Spiralock's anti-loose locknut threads",
      pageNumber: "L47",
    },
    {
      id: "tap-042",
      name: "Spiral Flute Metric Tap for Martensite Steel (MST)",
      image: "/images/L47-3.png",
      description: "Specialized spiral flute tap for martensite steel in automotive industry",
      threadStandards: "Metric (Automotive)",
      application: "Suitable for processing martensite materials in the automotive industry",
      pageNumber: "L47",
    },
    {
      id: "tap-043",
      name: "Special Metric Tap (FM)",
      image: "/images/L47-4.png",
      description: "Special metric tap for valve and industrial applications",
      threadStandards: "Metric (GB192-197)",
      application: "Suitable for processing internal threads on low-pressure valves and other industry products. Processed threads conform to 192, 193, 196, 197 (old secondary) precision standards",
      pageNumber: "L47",
    },
    {
      id: "tap-044",
      name: "55°Taper Pipe Thread Cutting U-value Flat Top Full Tooth Working Thread Plug Gauge",
      image: "/images/L48-1.png",
      description: "Comprehensive taper thread measurement gauge with U-value flat top design",
      threadStandards: "55° Taper (JB/T10031-1999)",
      application: "Suitable for comprehensive measurement of taper female and cylinder female threads with thread-seal. Design conforms to JB/T10031-1999 standard",
      pageNumber: "L48",
    },
    {
      id: "tap-045",
      name: "NPT Work Plug Gauge (Limit Type)",
      image: "/images/L48-2.png",
      description: "Limit type plug gauge for NPT taper female thread inspection",
      threadStandards: "NPT (ANSI B47.1)",
      application: "Designed for checking the taper female thread. Conforms to FED-STD-H28: ANSI B47.1",
      pageNumber: "L48",
    },
    {
      id: "tap-046",
      name: "NPT Work Ring Gauge",
      image: "/images/L49-1.png",
      description: "NPT work ring gauge for external thread inspection",
      threadStandards: "NPT (ANSI B47.1)",
      application: "Designed according to American Standard H28. Thread standard conforms to ANSI B47.1",
      pageNumber: "L49",
    },
    {
      id: "tap-047",
      name: "Taper Smooth Ring for Gas Cylinder",
      image: "/images/L49-2.png",
      description: "Smooth ring gauge for gas cylinder taper diameter inspection",
      threadStandards: "Gas Cylinder (GB/T8336-2011)",
      application: "Designed for checking the taper of the minor diameter of female thread for steel cylinder (oxygen, acetylene, LPG, CO2). Standard conforms to GB/T8336-2011",
      pageNumber: "L49",
    },
    {
      id: "tap-048",
      name: "R, NPT Die Chaser Body",
      image: "/images/L49-3.png",
      description: "Die chaser body for R and NPT taper pipe thread processing",
      threadStandards: "R, NPT (ISO 7-1, ASME B1.20.1)",
      application: "Used with R, NPT taper pipe thread die chaser inserts. Suitable for processing taper external threads (R, NPT) with thread-seal. Conforms to GB/T7306.2-2000 eqv ISO7-1:1994, ASME B1.20.1-1983, and GB/T12716-2002 standards",
      pageNumber: "L49",
    },
    {
      id: "tap-049",
      name: "R, NPT Die Chaser Body (Hilt Type)",
      image: "/images/L50-1.png",
      description: "Hilt type die chaser body for R and NPT taper pipe threads",
      threadStandards: "R, NPT (ISO 7-1, ASME B1.20.1)",
      application: "Used with R, NPT taper pipe thread die chaser inserts (hilt type). Suitable for processing taper external threads (R, NPT) with thread-seal. Conforms to GB/T7306.2-2000 eqv ISO7-1:1994, ASME B1.20.1-1983, and GB/T12716-2002 standards",
      pageNumber: "L50",
    },
    {
      id: "tap-050",
      name: "Die Chaser for Exporting",
      image: "/images/L50-2.png",
      description: "Export-specification die chaser with Japanese SAKAI standard dimensions",
      threadStandards: "PT, NPT (ISO 7-1, ASME B1.20.1)",
      application: "PT series and NPT series products are suitable for processing external threads with thread-seal. Used with die chaser bodies for export. Conforms to GB/T7306.2-2000 eqv ISO7-1:1994, ASME B1.20.1-1983, and GB/T12716-2002 standards. Structure dimensions conform to Japanese SAKAI standard",
      pageNumber: "L50",
    },
    {
      id: "tap-051",
      name: "R, NPT Die Chaser (Hilt Type)",
      image: "/images/L50-3.png",
      description: "Hilt type die chaser for R and NPT taper pipe thread cutting",
      threadStandards: "R, NPT (ISO 7-1, ASME B1.20.1)",
      application: "Used with R, NPT taper pipe thread die chaser bodies (hilt type). Suitable for processing external threads with thread-seal. Conforms to GB/T7306.2-2000 eqv ISO7-1:1994, ASME B1.20.1-1983, and GB/T12716-2002 standards",
      pageNumber: "L50",
    },
    {
      id: "tap-052",
      name: "R, NPT Die Chaser",
      image: "/images/L50-4.png",
      description: "Standard die chaser for R and NPT taper pipe thread processing",
      threadStandards: "R, NPT (ISO 7-1, ASME B1.20.1)",
      application: "Used with R, NPT taper pipe thread die chaser bodies. Suitable for processing external threads with thread-seal. Conforms to GB/T7306.2-2000 eqv ISO7-1:1994 and ASME B1.20.1-1983 standards",
      pageNumber: "L50",
    },
    {
      id: "tap-053",
      name: "Threaded Tap Drill Hole Diameter Reference (Drill Bits) (Metric)",
      image: "/images/L51-1.png",
      description: "Metric thread tap drill hole diameter reference chart and drill bits",
      threadStandards: "Metric",
      application: "Provides reference data for tap drill hole diameter for Metric System threads before tapping. D1 value represents the allowed upper/lower limits of the internal diameter after internal thread processing",
      pageNumber: "L51",
    },
    {
      id: "tap-054",
      name: "Extrusion Tap Drill Hole Diameter (Metric)",
      image: "/images/L52-1.png",
      description: "Metric extrusion tap drill hole diameter reference for thin-walled parts",
      threadStandards: "Metric",
      application: "Provides tap drill hole diameter for extrusion taps, suitable for threading thin-walled parts, common in steel, stainless steel, and cast iron materials",
      pageNumber: "L52",
    },
    {
      id: "tap-055",
      name: "Extrusion Tap Drill Hole Diameter (American Threads UNC/UNF)",
      image: "/images/L52-2.png",
      description: "American thread extrusion tap drill hole diameter reference for thin-walled parts",
      threadStandards: "UNC/UNF",
      application: "Provides tap drill hole diameter for extrusion taps, suitable for threading thin-walled parts, common in steel, stainless steel, and cast iron materials",
      pageNumber: "L52",
    },
    {
      id: "tap-056",
      name: "Threaded Tap Drill Hole Diameter Reference (Drill Bits) (American Threads UNC/UNF)",
      image: "/images/L53-1.png",
      description: "American thread tap drill hole diameter reference chart and drill bits",
      threadStandards: "UNC/UNF",
      application: "Provides drill hole diameter reference data for American (UNC/UNF) threads. D1 value represents the allowed upper/lower limits of the internal diameter after internal thread processing",
      pageNumber: "L53",
    },
    {
      id: "tap-057",
      name: "Threaded Tap Drill Hole Diameter Reference (Drill Bits) (British Whitworth Threads W)",
      image: "/images/L53-2.png",
      description: "British Whitworth thread tap drill hole diameter reference chart and drill bits",
      threadStandards: "W (Whitworth)",
      application: "Provides drill hole diameter reference data for British Whitworth (W) threads. D1 value represents the allowed upper/lower limits of the internal diameter after internal thread processing",
      pageNumber: "L53",
    },
    {
      id: "tap-058",
      name: "Threaded Tap Drill Hole Diameter Reference (Drill Bits) (British Parallel Pipe Threads PS (Rp))",
      image: "/images/L54-1.png",
      description: "British parallel pipe thread tap drill hole diameter reference chart and drill bits",
      threadStandards: "PS (Rp) - British Parallel Pipe",
      application: "Provides drill hole diameter reference data for British Parallel Pipe Threads. D1 value represents the allowed upper/lower limits of the internal diameter after internal thread processing",
      pageNumber: "L54",
    },
    {
      id: "tap-059",
      name: "Threaded Tap Drill Hole Diameter Reference (Drill Bits) (British Taper Pipe Threads PT (Rc))",
      image: "/images/L54-2.png",
      description: "British taper pipe thread tap drill hole diameter reference chart and drill bits",
      threadStandards: "PT (Rc) - British Taper Pipe",
      application: "Provides drill hole diameter reference data for British Taper Pipe Threads. D1 value represents the allowed upper/lower limits of the internal diameter after internal thread processing",
      pageNumber: "L54",
    },
  ]

  // Performance features
  const performanceFeatures = [
    {
      icon: "Shield",
      title: "Superior Chip Evacuation",
      description:
        "Spiral flute design provides excellent chip evacuation, pulling chips up and out of blind holes, preventing chip packing and ensuring high thread quality.",
    },
    {
      icon: "Zap",
      title: "Precision Thread Quality",
      description:
        "Advanced manufacturing processes and quality control ensure consistent, high-precision threads that meet all major international standards.",
    },
    {
      icon: "Target",
      title: "Multi-Material Performance",
      description:
        "Engineered for optimal performance across diverse materials from general steels to challenging titanium alloys and heat-resistant superalloys.",
    },
  ]

  // Helper function to render icons
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="h-8 w-8 text-red-600" />
      case "Zap":
        return <Zap className="h-8 w-8 text-red-600" />
      case "Target":
        return <Target className="h-8 w-8 text-red-600" />
      default:
        return <Tool className="h-8 w-8 text-red-600" />
    }
  }

  // Industries served
  const industries = [
    "Automotive Manufacturing",
    "Aerospace Industry",
    "Medical Device Manufacturing",
    "Heavy Machinery",
    "Plumbing and HVAC",
    "Petrochemical Industry",
    "Fastener Manufacturing",
    "General Machine Shops",
  ]

  // Threading operations
  const threadingOperations = [
    "Internal Threading in Blind Holes",
    "Pipe Thread Creation",
    "External Thread Production",
    "Quality Control Inspection",
    "Thread Starting Operations",
    "Dryseal Thread Creation",
    "High-Volume Threading",
    "Precision Thread Verification",
  ]

  // Materials that can be threaded
  const threadableMaterials = [
    "General Steels",
    "Stainless Steels",
    "Cast Iron",
    "Titanium Alloys",
    "Aluminum and Copper Alloys",
    "Heat-Resistant Superalloys",
    "Tool Steels",
    "Non-Ferrous Metals",
  ]

  // Technical specifications
  const technicalSpecs = [
    {
      title: "Thread Standards Support",
      description:
        "Comprehensive coverage of Metric (M), Unified (UNC/UNF), British Standard (BSW), and specialized pipe thread standards (NPT, BSPT, BSPP, NPTF).",
      color: "border-red-600",
    },
    {
      title: "Advanced Materials & Coatings",
      description:
        "High-Speed Steel (HSS), Cobalt-enhanced HSS-E, and solid carbide substrates with TiN, TiCN, TiAlN coatings for enhanced performance.",
      color: "border-blue-600",
    },
    {
      title: "Precision Manufacturing",
      description:
        "Manufactured to extremely tight tolerances with optimized geometries for superior chip evacuation, thread quality, and tool life.",
      color: "border-green-600",
    },
  ]

  // Specifications
  const specifications = [
    { label: "Type", value: "Threading Tools and Inspection Gauges" },
    { label: "Material", value: "HSS, HSS-E, Carbide, Tool Steel" },
    { label: "Coating Options", value: "TiN, TiCN, TiAlN, Uncoated" },
    { label: "Helix Angle", value: "15°-52° (Spiral Taps)" },
    { label: "Thread Standards", value: "Metric, Unified, BSW, Pipe Threads" },
    { label: "Chamfer Types", value: "Taper, Plug, Bottoming" },
    { label: "Size Range", value: "M1-M64, #0-80 to 4\"" },
    { label: "Tolerance Classes", value: "6H, 6G, Class X/XX" },
  ]

  return (
    <>
      <Header />
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-white text-gray-900">
          <div className="relative container mx-auto px-4 py-20 md:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-4xl">
                <div className="inline-block bg-red-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
                  Threading Expert Guide
          </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Taps and Adjustable Circular Die
                </h1>
                <p className="text-lg md:text-xl mb-8 text-gray-600 leading-relaxed">
                  A detailed overview of critical industrial tools used for creating and verifying threads. Covering performance, technical parameters, applications, and primary functions of each tool, grounded in professional engineering principles.
              </p>
              <div className="flex flex-wrap gap-4">
                  <Button
                    size="lg"
                    className="bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request Quote
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent text-gray-900 hover:bg-gray-100 border-gray-300 hover:text-gray-900 transition-all duration-300"
                  >
                  Download Catalog <Download className="ml-2 h-4 w-4" />
                </Button>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="w-[563px] h-[400px] flex items-center justify-center">
                  <Image
                    src="/images/taps.png"
                    alt="Professional Taps and Threading Tools Collection"
                    width={563}
                    height={400}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        </div>

        {/* Performance Features */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {performanceFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              >
                <div className="mb-4 bg-white inline-flex p-3 rounded-lg shadow-sm">{renderIcon(feature.icon)}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12">
          {/* Product Performance Section */}
          <div className="mb-16">
            <div className="flex items-center mb-6">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Product Performance</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <div className="prose prose-sm max-w-none">
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Professional threading tools represent the pinnacle of precision manufacturing technology, designed to create and verify threads across diverse industrial applications. The Spiral Groove Tap stands as a prime example of engineering excellence, featuring helical flutes that spiral around the tool's axis to provide exceptional chip evacuation capabilities. This innovative design pulls chips up and out of blind holes, preventing the chip packing that can lead to tap breakage and compromised thread quality.
                </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Advanced material science drives the performance of modern taps and threading tools. High-Speed Steel (HSS) provides the foundation for general-purpose applications, while cobalt-enhanced HSS-E extends performance into more challenging materials like stainless steel and heat-resistant alloys. Solid carbide constructions offer maximum performance and tool life in high-production environments, particularly when enhanced with advanced coatings such as Titanium Nitride (TiN), Titanium Carbonitride (TiCN), or Titanium Aluminum Nitride (TiAlN).
                  </p>
                  <p className="mb-4 text-base leading-normal text-gray-700">
                    Precision manufacturing and quality control ensure that these tools consistently produce threads meeting international standards including Metric (M), Unified (UNC/UNF), British Standard (BSW), and specialized pipe thread standards. From the gradual engagement of taper thread taps that reduce starting torque to the metal-to-metal sealing capabilities of dryseal pipe threads, each tool is engineered for specific applications where reliability and precision are paramount.
                </p>
                </div>
              </div>
              <div>
                <div className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-bold mb-4 flex items-center">
                    <Info className="h-5 w-5 text-red-600 mr-2" />
                    Key Performance Indicators
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Materials:</strong> HSS, HSS-E, Carbide, Tool Steel
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Coatings:</strong> TiN, TiCN, TiAlN, Uncoated
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Helix Angle:</strong> 15°-52° (Variable)
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Standards:</strong> Metric, Unified, BSW, Pipe Threads
                      </span>
                    </li>
                    <li className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-red-600 mr-2 shrink-0 mt-0.5" />
                      <span>
                        <strong>Tolerance:</strong> Class X/XX for Gauges
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Our Products</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                  className="group bg-white border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:border-red-200"
              >
                  <div className="relative w-full bg-white" style={{ height: "200px" }}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                      className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                                    <div className="p-5 border-t">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold line-clamp-2 flex-1 mr-2">{product.name}</h3>
                      <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">{product.pageNumber}</span>
                    </div>
                    <div className="space-y-2 text-sm">
                      {product.threadStandards && (
                        <div className="flex justify-between">
                          <span className="font-medium text-gray-700">Standards:</span>
                          <span className="text-gray-900">{product.threadStandards}</span>
                    </div>
                      )}
                      {product.application && (
                        <div className="pt-2 border-t border-gray-100">
                          <p className="text-xs text-gray-600">{product.application}</p>
                    </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Parameters */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Technical Parameters</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Technical Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Technical Specifications</h3>
                <div className="p-4 space-y-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className={`border-l-4 ${spec.color} pl-4 py-2`}>
                      <h4 className="font-bold text-base mb-1">{spec.title}</h4>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
              </div>
            ))}
          </div>
              </div>

              {/* Specifications */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                <h3 className="text-lg font-bold p-4 border-b border-gray-100">Specifications</h3>
                <div className="divide-y divide-gray-100">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center p-4">
                      <span className="font-medium text-sm text-gray-700">{spec.label}:</span>
                      <span className="text-sm text-right text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Application Scenarios */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Application Scenarios</h2>
                  </div>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Industries Served */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Settings className="h-5 w-5 text-red-600 mr-2" />
                  Industries Served
                </h3>
                                <div className="grid grid-cols-1 gap-1">
                  {industries.map((industry, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{industry}</span>
                  </div>
                  ))}
                </div>
                  </div>

              {/* Threading Operations */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Tool className="h-5 w-5 text-red-600 mr-2" />
                  Threading Operations
                </h3>
                                <div className="grid grid-cols-1 gap-1">
                  {threadingOperations.map((operation, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{operation}</span>
                  </div>
                  ))}
                </div>
                  </div>

              {/* Material Compatibility */}
              <div className="bg-gray-50 rounded-xl p-4 shadow-sm border border-gray-100 h-full">
                <h3 className="text-lg font-bold mb-3 flex items-center">
                  <Info className="h-5 w-5 text-red-600 mr-2" />
                  Material Compatibility
                    </h3>
                <div className="grid grid-cols-1 gap-1">
                  {threadableMaterials.map((material, index) => (
                    <div key={index} className="flex items-center py-1.5 border-b border-gray-200 last:border-b-0">
                      <div className="w-2 h-2 bg-red-600 rounded-full mr-3 shrink-0"></div>
                      <span className="text-sm">{material}</span>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Functions */}
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Primary Functions</h2>
                  </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Spiral Chip Evacuation",
                  description: "Helical flutes guide chips upward and away from the cutting zone, preventing chip packing and ensuring superior thread quality in blind holes.",
                  icon: <Target className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Pressure-Tight Sealing",
                  description: "Specialized pipe threads create reliable seals through thread deformation, ensuring leak-proof connections in fluid and gas systems.",
                  icon: <Shield className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Precision Quality Control",
                  description: "Go/No-Go gauge sets provide quick, accurate verification of external taper dimensions, ensuring interchangeability and proper fit.",
                  icon: <Settings className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "High-Volume Production",
                  description: "Self-opening die chaser systems enable rapid external thread production with automatic retraction for maximum efficiency.",
                  icon: <Zap className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Thread Starting Alignment",
                  description: "Extended taper chamfers distribute cutting action over multiple teeth, reducing torque and ensuring proper thread alignment.",
                  icon: <Tool className="h-6 w-6 text-red-600" />,
                },
                {
                  title: "Dryseal Technology",
                  description: "Metal-to-metal sealing through precise thread form control eliminates the need for chemical sealants in high-pressure applications.",
                  icon: <Layers className="h-6 w-6 text-red-600" />,
                },
              ].map((func, index) => (
                <div
                  key={index}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <div className="bg-red-50 p-2 rounded-lg mr-4">{func.icon}</div>
                    <h3 className="text-lg font-bold">{func.title}</h3>
                  </div>
                  <p className="text-gray-600">{func.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related Categories */}
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-1 bg-red-600 mr-4"></div>
              <h2 className="text-3xl font-bold">Related Categories</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  title: "Thread Mills",
                  image: "/images/thread-mills.jpg",
                  description: "CNC thread milling tools for internal and external threads",
                  url: "/standard-tools/threading/thread-mills",
                },
                {
                  title: "Drills",
                  image: "/images/drills.jpg", 
                  description: "Precision drilling tools for hole preparation",
                  url: "/standard-tools/hole-making/drills",
                },
                {
                  title: "Thread Turning Tools",
                  image: "/images/thread-turning.jpg",
                  description: "Lathe tools for external thread creation",
                  url: "/standard-tools/threading/thread-turning",
                },
                {
                  title: "Reamers",
                  image: "/images/reamers.jpg",
                  description: "Precision hole finishing for tight tolerances",
                  url: "/standard-tools/hole-making/reamers",
                },
              ].map((category, index) => (
                <ProductCard key={index} image={category.image} title={category.title} category="Threading Tools" />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Expert Threading Solutions?</h2>
              <p className="text-lg text-gray-300 mb-8">
                Our technical team can help you select the optimal threading tools for your specific applications, materials, and production requirements. From spiral flute taps to precision gauges, we provide comprehensive threading solutions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 transition-all duration-300">
                  Contact Technical Support
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-white hover:bg-white/10 border-white hover:text-white transition-all duration-300"
                >
                  Request Custom Solution
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}