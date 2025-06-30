const faqs = [
  // General Questions
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What is a Right Angle Flat End Mill?",
    answer: "A Right Angle Flat End Mill is a cutting tool designed with 90-degree corner geometry for precision machining of flat surfaces, grooves, and stepped surfaces. These end mills feature sharp corners that create clean, square edges in workpieces.",
    category: "General",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat", 
    question: "What materials can be machined with these end mills?",
    answer: "Our Right Angle Flat End Mills are available in different hardness ranges (HRC45-65) and can machine various materials including general steel, hardened steel, stainless steel, cast iron, copper, aluminum, and other non-ferrous metals depending on the specific coating and configuration.",
    category: "General",
    sort_order: 2
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What's the difference between coated and uncoated versions?",
    answer: "Coated versions (nano-coated for HRC60°+ materials) provide superior wear resistance and longer tool life when machining harder materials. Uncoated versions are optimized for softer materials like aluminum, copper, and non-ferrous metals where coating might interfere with surface finish.",
    category: "General",
    sort_order: 3
  },

  // Technical Specifications
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What flute configurations are available?",
    answer: "We offer 2-flute, 3-flute, and 4-flute configurations:\n- 2-flute: Better chip evacuation, ideal for softer materials and deeper cuts\n- 3-flute: Balanced performance for non-ferrous metals\n- 4-flute: Higher surface finish quality, better for harder materials and finishing operations",
    category: "Technical",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What hardness ranges are available?",
    answer: "Our Right Angle Flat End Mills are available in multiple hardness ranges:\n- HRC45°: General steel machining\n- HRC50°: Medium hardness steel\n- HRC55°: Harder steel applications\n- HRC60°: High hardness steel and stainless steel (nano-coated)\n- HRC65°: Extremely hard steel, quenched steel, and mold prehardened steel (nano-coated)",
    category: "Technical", 
    sort_order: 2
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What are the recommended cutting parameters?",
    answer: "Cutting parameters vary by material and tool configuration. Generally:\n- Use lower speeds for harder materials\n- Increase feed rates with more flutes\n- Maintain proper coolant flow\n- Adjust depth of cut based on material hardness\nContact our technical team for specific parameter recommendations for your application.",
    category: "Technical",
    sort_order: 3
  },

  // Applications
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "What are the main applications for Right Angle Flat End Mills?",
    answer: "Primary applications include:\n- Plane milling for flat surface creation\n- Groove machining with precise square corners\n- Stepped surface machining\n- Shoulder milling operations\n- Square corner profiling\n- Slot cutting with sharp corners",
    category: "Applications",
    sort_order: 1
  },
  {
    page_url: "/standard-tools/milling/right-angle-flat",
    question: "Can these end mills be used for finishing operations?",
    answer: "Yes, especially the 4-flute configurations which provide excellent surface finish quality. The nano-coated versions are particularly suitable for finishing operations on harder materials, providing both precision and surface quality.",
    category: "Applications",
    sort_order: 2
  }
];

async function addFAQs() {
  try {
    for (const faq of faqs) {
      const response = await fetch('http://localhost:3000/api/admin-mzg/faqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(faq)
      });

      if (response.ok) {
        const result = await response.json();
        console.log(`✅ Added FAQ: ${faq.question}`);
      } else {
        const error = await response.json();
        console.error(`❌ Failed to add FAQ: ${faq.question}`, error);
      }
    }
    console.log('🎉 All FAQs added successfully!');
  } catch (error) {
    console.error('❌ Error adding FAQs:', error);
  }
}

// Run the script
addFAQs(); 