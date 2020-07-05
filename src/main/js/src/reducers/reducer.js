export const SEND_TEXT = 'SEND_TEXT'
export const SEND_TEXT_PENDING = 'SEND_TEXT_PENDING'
export const SEND_TEXT_FULFILLED = 'SEND_TEXT_FULFILLED'
export const SEND_TEXT_REJECTED = 'SEND_TEXT_REJECTED'

const initialState = {
  languageResponse: null,
  isLoadingLanguageResponse: false,
  isErrorLoadingLanguageResponse: false,
}

const reducer = (
    state = { ...initialState },
    action
) => {
  switch (action.type) {
    case SEND_TEXT:
      return {
        ...state,
        ...initialState
      }
    case SEND_TEXT_PENDING:
      return {
        ...state,
        isLoadingLanguageResponse: true,
        isErrorLoadingLanguageResponse: false
      }
    case SEND_TEXT_FULFILLED:
      return {
        ...state,
        isLoadingLanguageResponse: false,
        isErrorLoadingLanguageResponse: false,
        languageResponse: action.payload.data
      }
    case SEND_TEXT_REJECTED:
      return {
        ...state,
        isLoadingLanguageResponse: false,
        isErrorLoadingLanguageResponse: true,
        languageResponse: true
      }
    default:
      return state
  }
}

export default reducer
