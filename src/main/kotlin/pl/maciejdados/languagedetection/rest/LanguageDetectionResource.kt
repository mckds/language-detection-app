package pl.maciejdados.languagedetection.rest

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestBody
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import pl.maciejdados.languagedetection.service.LanguageDetectionService


data class LanguageDetectionRequest(val text: String)
data class LanguageDetectionResponse(val language: String)

@RestController
@RequestMapping("/api/v1/language-detection")
class LanguageDetectionResource @Autowired constructor(
        private val languageDetectionService: LanguageDetectionService
) {

    @PostMapping
    fun detectLanguage(@RequestBody request: LanguageDetectionRequest)
            = LanguageDetectionResponse(languageDetectionService.detectLanguage(request.text))
}