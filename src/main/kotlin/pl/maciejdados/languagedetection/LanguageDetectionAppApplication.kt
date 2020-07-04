package pl.maciejdados.languagedetection

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class LanguageDetectionAppApplication

fun main(args: Array<String>) {
    runApplication<LanguageDetectionAppApplication>(*args)
}
