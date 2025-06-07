import fs from "fs"
import path from "path"

export default function CheckFilePage() {
  // Define the paths we want to check
  const paths = [
    "/standard-tools/right-angle-flat/2F45C/page.tsx",
    "/standard-tools/right-angle-flat/2F45C",
    "/standard-tools/right-angle-flat",
  ]

  const results = paths.map((filePath) => {
    const fullPath = path.join(process.cwd(), "app", filePath)
    const exists = fs.existsSync(fullPath)
    const isDirectory = exists ? fs.statSync(fullPath).isDirectory() : false
    const isFile = exists ? fs.statSync(fullPath).isFile() : false

    return {
      path: filePath,
      fullPath,
      exists,
      isDirectory,
      isFile,
      content: exists && isFile ? fs.readFileSync(fullPath, "utf8").substring(0, 200) + "..." : null,
    }
  })

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">File System Check</h1>

      {results.map((result, index) => (
        <div key={index} className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Path: {result.path}</h2>
          <p className="mb-1">
            <strong>Full path:</strong> {result.fullPath}
          </p>
          <p className="mb-1">
            <strong>Exists:</strong> {result.exists ? "✅ Yes" : "❌ No"}
          </p>
          {result.exists && (
            <>
              <p className="mb-1">
                <strong>Is Directory:</strong> {result.isDirectory ? "✅ Yes" : "❌ No"}
              </p>
              <p className="mb-1">
                <strong>Is File:</strong> {result.isFile ? "✅ Yes" : "❌ No"}
              </p>
              {result.isFile && (
                <div className="mt-2">
                  <p className="font-semibold">File Content Preview:</p>
                  <pre className="bg-gray-100 p-2 rounded mt-1 overflow-x-auto text-sm">{result.content}</pre>
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}
