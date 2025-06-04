import competitorData from '../mockData/competitor.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getAll = async () => {
  await delay(300)
  return [...competitorData]
}

export const getById = async (id) => {
  await delay(250)
  const item = competitorData.find(competitor => competitor.id === id)
  return item ? { ...item } : null
}

export const getByDomain = async (domain) => {
  await delay(450)
  
  // Simulate competitor discovery based on domain
  const industryCompetitors = [
    'TechFlow Solutions', 'DataDrive Analytics', 'CloudSync Pro', 
    'InnovateLab', 'DigitalEdge Corp', 'SmartBiz Tools',
    'NextGen Platforms', 'ProActive Systems'
  ]
  
  // Generate 3-5 random competitors
  const numCompetitors = Math.floor(Math.random() * 3) + 3
  const selectedCompetitors = industryCompetitors
    .sort(() => 0.5 - Math.random())
    .slice(0, numCompetitors)
  
  const competitors = selectedCompetitors.map((name, index) => ({
    id: Date.now() + index,
    name,
    domain: `${name.toLowerCase().replace(/\s+/g, '')}.com`,
    websiteMetrics: {
      mobileScore: Math.floor(Math.random() * 30) + 70,
      loadSpeed: Math.floor(Math.random() * 25) + 65,
      seoScore: Math.floor(Math.random() * 35) + 60
    },
    socialMetrics: {
      totalFollowers: Math.floor(Math.random() * 100000) + 5000,
      avgEngagement: Math.floor(Math.random() * 6) + 3,
      platforms: Math.floor(Math.random() * 3) + 3
    },
    advantages: [
      'Faster loading speed',
      'Better mobile experience',
      'Higher social engagement',
      'More frequent posting',
      'Better SEO optimization',
      'Cleaner design',
      'More interactive content'
    ].sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1)
  }))
  
  return competitors
}

export const create = async (competitorData) => {
  await delay(350)
  const newCompetitor = {
    id: Date.now(),
    ...competitorData
  }
  competitorData.push(newCompetitor)
  return { ...newCompetitor }
}

export const update = async (id, data) => {
  await delay(300)
  const index = competitorData.findIndex(competitor => competitor.id === id)
  if (index !== -1) {
    competitorData[index] = { ...competitorData[index], ...data }
    return { ...competitorData[index] }
  }
  throw new Error('Competitor not found')
}

export const delete_ = async (id) => {
  await delay(250)
  const index = competitorData.findIndex(competitor => competitor.id === id)
  if (index !== -1) {
    const deleted = competitorData.splice(index, 1)[0]
    return { ...deleted }
  }
  throw new Error('Competitor not found')
}