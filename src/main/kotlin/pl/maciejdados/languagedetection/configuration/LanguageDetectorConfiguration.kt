package pl.maciejdados.languagedetection.configuration

import com.github.pemistahl.lingua.api.Language
import com.github.pemistahl.lingua.api.LanguageDetectorBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class LanguageDetectorConfiguration {
    @Bean
    fun languageDetector() = LanguageDetectorBuilder.fromLanguages(
            Language.ENGLISH,
            Language.SPANISH,
            Language.FRENCH,
            Language.RUSSIAN,
            Language.PORTUGUESE,
            Language.GERMAN,
            Language.ITALIAN,
            Language.POLISH,
            Language.UKRAINIAN,
            Language.ROMANIAN,
            Language.DUTCH,
            Language.SWEDISH,
            Language.GREEK,
            Language.CZECH,
            Language.FINNISH
    ).build()
}