import websiteAnalysisData from '../mockData/websiteAnalysis.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getAll = async () => {
  await delay(300)
  return [...websiteAnalysisData]
}

export const getById = async (id) => {
  await delay(250)
  const item = websiteAnalysisData.find(analysis => analysis.id === id)
  return item ? { ...item } : null
}

export const getAnalysisByUrl = async (url) => {
  await delay(400)
  // Simulate analysis based on URL
  const cleanUrl = url.replace(/^https?:\/\//, '').replace(/\/$/, '')
  
  // Find existing analysis or create a simulated one
  let analysis = websiteAnalysisData.find(item => item.url.includes(cleanUrl))
  
  if (!analysis) {
    // Generate simulated scores
    analysis = {
      id: Date.now(),
      url: cleanUrl,
      mobileScore: Math.floor(Math.random() * 30) + 70, // 70-100
      loadSpeed: Math.floor(Math.random() * 25) + 65, // 65-90
      seoScore: Math.floor(Math.random() * 35) + 60, // 60-95
      uxSuggestions: [
        "Improve button contrast",
        "Add mobile navigation",
        "Optimize image sizes",
        "Enhance form validation"
      ].slice(0, Math.floor(Math.random() * 4) + 1)
    }
  }
  
  return { ...analysis }
}

export const create = async (analysisData) => {
  await delay(350)
  const newAnalysis = {
    id: Date.now(),
    ...analysisData
  }
  websiteAnalysisData.push(newAnalysis)
  return { ...newAnalysis }
}

export const update = async (id, data) => {
  await delay(300)
  const index = websiteAnalysisData.findIndex(analysis => analysis.id === id)
  if (index !== -1) {
    websiteAnalysisData[index] = { ...websiteAnalysisData[index], ...data }
    return { ...websiteAnalysisData[index] }
  }
  throw new Error('Analysis not found')
}

export const delete_ = async (id) => {
  await delay(250)
  const index = websiteAnalysisData.findIndex(analysis => analysis.id === id)
  if (index !== -1) {
    const deleted = websiteAnalysisData.splice(index, 1)[0]
    return { ...deleted }
  }
  throw new Error('Analysis not found')
}