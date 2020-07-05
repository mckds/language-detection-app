import {SEND_TEXT} from "../reducers/reducer";
import {languageDetection} from "../service/languageDetection.service";

export const languageDetectionAction = text => dispatch => {
  return dispatch({
    type: SEND_TEXT,
    payload: languageDetection(text)
  })
}