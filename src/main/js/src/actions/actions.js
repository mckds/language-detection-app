import {SEND_TEXT} from "../reducers/reducer";
import {languageDetection} from "../service/languageDetection.service";

export const languageDetectionAction = text => {
  return {
    type: SEND_TEXT,
    payload: {
      promise: languageDetection(text)
    }
  }
}