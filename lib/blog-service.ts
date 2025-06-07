// 模拟博客文章数据
const blogPosts = [
  {
    id: 1,
    title: "Taps, Dies, and Gauges: Essential Tools in Manufacturing",
    slug: "taps-dies-and-gauges-essential-tools",
    excerpt:
      "Explore the critical role of taps, dies, and gauges in manufacturing and how these precision tools ensure quality in threaded components.",
    content: `
      <p>Welcome to the world of taps, dies, and gauges—three critical tools in the creation and quality assurance of screw threads. Whether you're new to manufacturing or just looking to refine your understanding, this guide will break down what these tools are, how they work, and their applications in various industries.</p>
      
      <h2>What Are Taps?</h2>
      
      <p>Taps are cutting tools designed to create internal screw threads inside holes. These tools are indispensable in manufacturing, engineering, and repair work. Here's what you need to know:</p>
      
      <ul>
        <li><strong>Materials:</strong> Taps are made from durable materials like high-speed steel, carbide, and cobalt to handle tough applications.</li>
        <li><strong>Types:</strong> Common types include taper taps (for starting threads), plug taps (for general-purpose threading), and bottoming taps (for threading to the bottom of blind holes).</li>
        <li><strong>Applications:</strong> Used in everything from automotive parts to aerospace components where threaded holes are needed.</li>
      </ul>
      
      <h2>Understanding Dies</h2>
      
      <p>While taps create internal threads, dies are used to cut external threads on rods or bolts. They're equally important in the manufacturing process:</p>
      
      <ul>
        <li><strong>Design:</strong> Dies typically come in circular form with cutting edges on the inside diameter.</li>
        <li><strong>Varieties:</strong> Split dies can be adjusted slightly for precise thread sizing, while solid dies maintain fixed dimensions.</li>
        <li><strong>Usage:</strong> Dies are held in specialized tools called die stocks or die holders during operation.</li>
      </ul>
      
      <h2>The Role of Thread Gauges</h2>
      
      <p>Thread gauges are precision measuring instruments used to verify the accuracy of threads created by taps and dies:</p>
      
      <ul>
        <li><strong>Go/No-Go Gauges:</strong> These dual-sided tools quickly determine if threads meet specifications.</li>
        <li><strong>Ring Gauges:</strong> Used to check external threads on bolts or rods.</li>
        <li><strong>Plug Gauges:</strong> Used to verify internal threads in holes.</li>
      </ul>
      
      <p>Quality control is essential in manufacturing, and thread gauges ensure that threaded components will fit together properly during assembly.</p>
      
      <h2>Industry Applications</h2>
      
      <p>These threading tools find applications across numerous industries:</p>
      
      <ul>
        <li><strong>Automotive:</strong> Engine blocks, transmission cases, and countless other components require precise threading.</li>
        <li><strong>Aerospace:</strong> Where safety-critical fasteners demand perfect thread formation and verification.</li>
        <li><strong>Medical Devices:</strong> Surgical instruments and implantable devices often require specialized threading solutions.</li>
        <li><strong>General Manufacturing:</strong> From furniture to electronics, threaded fasteners are ubiquitous.</li>
      </ul>
      
      <h2>Best Practices for Threading Operations</h2>
      
      <p>To achieve optimal results when using taps, dies, and gauges:</p>
      
      <ul>
        <li>Use cutting fluid appropriate for the material being threaded</li>
        <li>Start with properly sized holes for tapping operations</li>
        <li>Maintain proper alignment during threading</li>
        <li>Clean chips regularly to prevent tool damage</li>
        <li>Verify threads with gauges before final assembly</li>
      </ul>
      
      <h2>Conclusion</h2>
      
      <p>Taps, dies, and gauges may seem like simple tools, but they're fundamental to modern manufacturing. Understanding their proper use and maintenance ensures quality threaded connections in countless products we rely on daily.</p>
      
      <p>At MZG Tools, we offer a comprehensive range of high-quality threading tools designed for precision and durability. Contact our team to learn more about our threading solutions for your specific application.</p>
    `,
    category: "Manufacturing 101",
    date: "2023-09-15",
    author: "Zhang Wei",
    image: "/images/blog/taps-dies-gauges.png",
    tags: ["manufacturing", "threading", "tools", "quality control"],
  },
  {
    id: 2,
    title: "Advanced CNC Milling Techniques for Aerospace Components",
    slug: "advanced-cnc-milling-aerospace",
    excerpt: "Discover cutting-edge CNC milling strategies that are revolutionizing aerospace component manufacturing.",
    content: `<p>This is a placeholder for the full article content about CNC milling techniques for aerospace components.</p>`,
    category: "Advanced Manufacturing",
    date: "2023-10-22",
    author: "Li Mei",
    image: "/images/blog/milling-aerospace.png",
    tags: ["aerospace", "CNC", "milling", "advanced techniques"],
  },
]

export async function getBlogPosts() {
  // In a real application, this would fetch from an API or database
  return blogPosts
}

export async function getBlogPost(slug: string) {
  // In a real application, this would fetch a specific post from an API or database
  return blogPosts.find((post) => post.slug === slug)
}
