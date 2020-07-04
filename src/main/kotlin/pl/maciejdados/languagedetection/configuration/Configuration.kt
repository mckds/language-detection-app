package pl.maciejdados.languagedetection.configuration

import com.github.pemistahl.lingua.api.LanguageDetectorBuilder
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration

@Configuration
class Configuration {
    @Bean
    fun languageDetector() = LanguageDetectorBuilder.fromAllLanguages().build()
}