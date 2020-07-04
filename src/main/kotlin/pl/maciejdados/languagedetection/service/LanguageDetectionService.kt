package pl.maciejdados.languagedetection.service

import com.github.pemistahl.lingua.api.LanguageDetector
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Service

@Service
class LanguageDetectionService @Autowired constructor(
        private val languageDetector: LanguageDetector
) {
    fun detectLanguage(text: String) = languageDetector.detectLanguageOf(text).name
}