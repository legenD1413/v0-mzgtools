import ProductDetailsTemplate from "../productdetails-style1"

export default function ProductDetailsStyle1Page() {
  // Sample product data
  const sampleProduct = {
    id: "sample-1",
    name: "High Feed Face Mill",
    productCode: "MZG-HF50-5T",
    description:
      "High-performance face milling tool designed for efficient flat surface machining with superior surface finish and productivity.",
    mainCategory: "MILLING",
    subCategory: "Face Mills",
    parameters: [
      { name: "Diameter", value: "50mm" },
      { name: "Number of Inserts", value: "5" },
      { name: "Insert Type", value: "XDKT" },
      { name: "Lead Angle", value: "10°" },
      { name: "Cutting Depth", value: "1.0mm" },
      { name: "Runout", value: "0.01mm" },
      { name: "Weight", value: "0.8kg" },
      { name: "Max RPM", value: "12000" },
      { name: "Feed Rate", value: "0.1-0.3mm/tooth" },
      { name: "Cutting Speed", value: "150-250m/min" },
      { name: "Power Requirement", value: "5.5kW" },
    ],
    images: [
      { url: "/images/product-1.jpg", alt: "High Feed Face Mill - Front View", isPrimary: true },
      { url: "/images/product-1-angle.jpg", alt: "High Feed Face Mill - Angle View", isPrimary: false },
      { url: "/images/product-1-detail.jpg", alt: "High Feed Face Mill - Detail View", isPrimary: false },
      { url: "/images/product-1-dimensions.jpg", alt: "High Feed Face Mill - Dimensions", isPrimary: false },
    ],
    technicalDrawings: [
      { url: "/images/product-1-dimensions.jpg", title: "Dimensional Drawing", fileType: "JPG" },
      { url: "/images/product-1-detail.jpg", title: "Insert Mounting Detail", fileType: "JPG" },
    ],
    application:
      "Ideal for high-speed face milling operations in steel, stainless steel, and cast iron materials. Commonly used in automotive, aerospace, and general machining industries for flat surface preparation, facing, and contouring operations.\n\nRecommended for roughing and semi-finishing operations where high material removal rates are required.",
    performanceFeatures:
      "Precision-ground body for excellent runout control\nMultiple insert geometries for different materials\nEngineered chip evacuation channels\nBalanced cutting forces for stable machining\nReduced power consumption compared to conventional face mills\nExcellent surface finish quality",
    material: "Tool body: Alloy Steel with specialized heat treatment\nInserts: Carbide with PVD coating",
    technicalInfo:
      "The MZG-HF50-5T face mill features a unique 10° lead angle design that reduces cutting forces and allows for significantly higher feed rates compared to conventional face mills. The specialized insert geometry creates thin, easily evacuated chips that reduce heat generation and extend tool life.\n\nFor optimal performance, we recommend the following operating parameters:\n- Run-in period: 10-15 minutes at 70% of rated speed and feed\n- Coolant: Water-soluble emulsion or neat cutting oil\n- Insert tightening torque: 4.5 Nm\n- Insert indexing interval: Every 45-60 minutes of cutting time",
    series: "MZG-HF Series",
  }

  // Sample related products
  const relatedProducts = [
    {
      id: "related-1",
      name: "45° Face Mill",
      image: "/images/product-2.jpg",
      code: "MZG-FM45-6T",
      mainFeature: "General purpose face mill with 45° lead angle",
      price: "$210.00",
    },
    {
      id: "related-2",
      name: "90° Square Shoulder Mill",
      image: "/images/product-3.jpg",
      code: "MZG-SQ90-8T",
      mainFeature: "Square shoulder mill for precise 90° walls",
      price: "$275.00",
    },
    {
      id: "related-3",
      name: "Copy Face Mill",
      image: "/images/product-1.jpg",
      code: "MZG-CP40-4T",
      mainFeature: "Copy face mill for contoured surfaces",
      price: "$195.00",
    },
  ]

  return <ProductDetailsTemplate product={sampleProduct} relatedProducts={relatedProducts} />
}
