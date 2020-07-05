import React, {useState} from 'react'
import Header from "../components/Header";
import TextArea from "../components/TextArea";
import DetectLanguageButton from "../components/DetectLanguageButton";
import {useDispatch, useSelector} from "react-redux";
import {languageDetectionAction} from "../actions/actions";
import * as selectors from "../reducers/selectors";
import DetectionResult from "../components/DetectionResult";
import {LanguageDetectionWrapper} from "../components/LanguageDetectionWrapper";

const LanguageDetection = () => {
  const dispatch = useDispatch()
  const [text, setText] = useState(null)

  const handleTextInput = event => {
    setText(event.target.value)
  }

  const handleButtonClicked = () => {
    dispatch(languageDetectionAction(text))
  }

  const languageResponse = useSelector(state => selectors.languageResponse(state))
  const isLoadingLanguageResponse = useSelector(state => selectors.isLoadingLanguageResponse(state))
  const isErrorLoadingLanguageResponse = useSelector(state => selectors.isErrorLoadingLanguageResponse(state))

  const isButtonDisabled = !text && !isLoadingLanguageResponse

  return (
      <LanguageDetectionWrapper>
        <Header text={"Language detection"} />
        <TextArea onChange={handleTextInput} placeholder={"Type here text in any language"} />
        <br />
        <DetectLanguageButton onClick={handleButtonClicked} isDisabled={isButtonDisabled}>Detect language</DetectLanguageButton>
        { isLoadingLanguageResponse
            ? <p>Loading...</p>
            : null
        }
        {
          isErrorLoadingLanguageResponse
              ? <p>Error occurred during language detection</p>
              : null
        }
        {
          languageResponse && !isErrorLoadingLanguageResponse
            ? <DetectionResult result={languageResponse} />
            : null
        }
      </LanguageDetectionWrapper>
  )
}

export default LanguageDetection