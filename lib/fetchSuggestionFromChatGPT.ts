export const fetchSuggestion = async () => {
    const response = await fetch(`${process.env.VERCEL_URL || 'http://localhost:3000'}/api/getChatGPTSuggestion`, { cache: 'no-store' })
    const data = await response.json()

    return data
}