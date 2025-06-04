import socialMediaData from '../mockData/socialMediaPresence.json'

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

export const getAll = async () => {
  await delay(300)
  return [...socialMediaData]
}

export const getById = async (id) => {
  await delay(250)
  const item = socialMediaData.find(social => social.id === id)
  return item ? { ...item } : null
}

export const getByDomain = async (domain) => {
  await delay(350)
  const cleanDomain = domain.replace(/^https?:\/\//, '').replace(/\/$/, '')
  
  // Simulate social media detection
  const platforms = ['LinkedIn', 'Instagram', 'Facebook', 'Twitter', 'TikTok']
  const detectedPlatforms = []
  
  // Randomly detect 2-4 platforms
  const numPlatforms = Math.floor(Math.random() * 3) + 2
  const selectedPlatforms = platforms.sort(() => 0.5 - Math.random()).slice(0, numPlatforms)
  
  selectedPlatforms.forEach(platform => {
    detectedPlatforms.push({
      id: Date.now() + Math.random(),
      platform,
      profileUrl: `https://${platform.toLowerCase()}.com/${cleanDomain.split('.')[0]}`,
      followers: Math.floor(Math.random() * 50000) + 1000,
      engagementRate: Math.floor(Math.random() * 8) + 2, // 2-10%
      recentPosts: Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        content: `Sample post content ${i + 1}`,
        likes: Math.floor(Math.random() * 500) + 50,
        shares: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50) + 5
      }))
    })
  })
  
  return detectedPlatforms
}

export const create = async (socialData) => {
  await delay(350)
  const newSocial = {
    id: Date.now(),
    ...socialData
  }
  socialMediaData.push(newSocial)
  return { ...newSocial }
}

export const update = async (id, data) => {
  await delay(300)
  const index = socialMediaData.findIndex(social => social.id === id)
  if (index !== -1) {
    socialMediaData[index] = { ...socialMediaData[index], ...data }
    return { ...socialMediaData[index] }
  }
  throw new Error('Social media profile not found')
}

export const delete_ = async (id) => {
  await delay(250)
  const index = socialMediaData.findIndex(social => social.id === id)
  if (index !== -1) {
    const deleted = socialMediaData.splice(index, 1)[0]
    return { ...deleted }
  }
  throw new Error('Social media profile not found')
}