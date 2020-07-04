package pl.maciejdados.languagedetection.rest

import com.github.pemistahl.lingua.api.Language
import com.github.pemistahl.lingua.api.LanguageDetector
import com.ninjasquad.springmockk.MockkBean
import io.mockk.every
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.http.MediaType
import org.springframework.test.context.junit.jupiter.SpringExtension
import org.springframework.test.web.servlet.MockMvc
import org.springframework.test.web.servlet.post


@ExtendWith(SpringExtension::class)
@SpringBootTest
@AutoConfigureMockMvc
class LanguageDetectionResourceTest {
    @MockkBean
    private lateinit var languageDetector: LanguageDetector

    @Autowired lateinit var mockMvc: MockMvc

    @Test
    fun `should detect language`() {
        val testText = "test text"
        val testLanguage = Language.ENGLISH
        val expectedLanguage = "ENGLISH"

        every { languageDetector.detectLanguageOf(testText) } returns testLanguage

        mockMvc.post("/api/v1/language-detection") {
            contentType = MediaType.APPLICATION_JSON
            content = """{"text": "$testText"}"""
        }.andExpect {
            status { isOk }
            content { contentType(MediaType.APPLICATION_JSON) }
            content { json("""{"language": "$expectedLanguage"}""") }
        }
    }
}