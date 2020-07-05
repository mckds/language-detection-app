import axios from 'axios'

const languageDetectionServiceUrl = '/api/v1/language-detection'

export const languageDetection = text => axios.post(languageDetectionServiceUrl, { text })