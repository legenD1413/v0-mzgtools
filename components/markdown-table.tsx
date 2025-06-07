interface MarkdownTableProps {
  markdown: string
}

export function MarkdownTable({ markdown }: MarkdownTableProps) {
  // 如果没有内容，返回空
  if (!markdown) return null

  // 检查是否包含表格标记
  const hasTable = markdown.includes("|")

  if (!hasTable) {
    // 如果不包含表格，直接显示文本
    return <div className="whitespace-pre-line">{markdown}</div>
  }

  // 分割文本，找出表格部分和非表格部分
  const lines = markdown.split("\n")
  const tableStartIndex = lines.findIndex((line) => line.trim().startsWith("|"))

  // 如果没有找到表格开始行，直接显示文本
  if (tableStartIndex === -1) {
    return <div className="whitespace-pre-line">{markdown}</div>
  }

  // 提取表格前的文本
  const textBeforeTable = lines.slice(0, tableStartIndex).join("\n")

  // 找到表格的结束行
  let tableEndIndex = lines.length
  for (let i = tableStartIndex + 1; i < lines.length; i++) {
    if (!lines[i].trim().startsWith("|")) {
      tableEndIndex = i
      break
    }
  }

  // 提取表格行
  const tableLines = lines.slice(tableStartIndex, tableEndIndex)

  // 提取表格后的文本
  const textAfterTable = lines.slice(tableEndIndex).join("\n")

  // 解析表格头部
  const headerLine = tableLines[0]
  const headers = headerLine
    .split("|")
    .filter((cell) => cell.trim() !== "")
    .map((cell) => cell.trim())

  // 检查是否有分隔行（通常是第二行，包含 ----- 的行）
  const hasSeparator = tableLines.length > 1 && tableLines[1].includes("-")

  // 解析表格数据行
  const startRowIndex = hasSeparator ? 2 : 1
  const rows = tableLines.slice(startRowIndex).map((line) => {
    return line
      .split("|")
      .filter((cell) => cell.trim() !== "")
      .map((cell) => cell.trim())
  })

  // 处理单元格内的特殊格式
  const formatCellContent = (content: string) => {
    // 处理粗体文本 **text**
    let formattedContent = content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")

    // 处理直径符号 Ø
    formattedContent = formattedContent.replace(/Ø/g, "Ø")

    return formattedContent
  }

  return (
    <div>
      {/* 表格���的文本 */}
      {textBeforeTable && <div className="mb-6 whitespace-pre-line">{textBeforeTable}</div>}

      {/* 表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 shadow-md rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-800 text-white">
              {headers.map((header, index) => (
                <th key={index} className="py-3 px-4 text-left">
                  <div dangerouslySetInnerHTML={{ __html: formatCellContent(header) }} />
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex} className="py-3 px-4 border-b">
                    <div dangerouslySetInnerHTML={{ __html: formatCellContent(cell) }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 表格后的文本 */}
      {textAfterTable && <div className="mt-6 whitespace-pre-line">{textAfterTable}</div>}
    </div>
  )
}
