// ✅ SecurityConfig.java
package com.example.demo.config;

import com.example.demo.security.JwtAuthFilter;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {
    private final JwtAuthFilter jwtAuthFilter;
    private final UserDetailsService userDetailsService;

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers(   "/", "/index.html", "/login.js", "/style.css", "/s.jpg", "/a.jpg", "/raghoo.mp4",
                                "/dashboard.html", "/dashboard.js", "/dashboard.css",
                                "/api/auth/**", "/Login",
                                "/students.html", "/students.js", "/students.css",
                                "/grades.html", "/grades.js", "/grades.css",
                                "/settings.html", "/settings.js", "/settings.css",
                                "/s2.jpg", "/wp2342129.jpg","moath.JPG","raghoo1.mp4","raghoo2.mp4","raghoo4.mp4"
                        ).permitAll()
                        .anyRequest().authenticated()
                )
                .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

    // قائمة الطلاب - لأغراض العرض أو الاختبار فقط
    public static final String[] STUDENT_NAMES = {
            "رزان أحمد شحادة حسن",
            "داليا أحمد عبدالكريم عمر",
            "عيد أيمن محمد سماره",
            "عادل جعفر احمد عوض الله",
            "محمد جواد فضل ريان",
            "محمد جواد محمود خواجا",
            "محمود حمزه محمود عبد القادر",
            "ديما حيدر كمال حمادة",
            "بيان راكز ابراهيم اعرار",
            "محمود رشيد سعد علان",
            "عمرو سائد عصام بركات",
            "تقى سامر صبحي دار بدر",
            "عز الدين سعيد محمد اجرب",
            "سديل سعيد محمد معروف",
            "رجاء سلطان حميدان سليم",
            "بيلسان سهيل طلال خليل",
            "وعد عبد الغني خميس سعد",
            "ادهم عماد كامل غنمة",
            "مصعب عماد ياسين ابو شربك",
            "محمد عمر محمد عبد القادر",
            "أيهم عنتر يوسف دريدي",
            "محمد فؤاد حسن علي",
            "علي فراس احمد ابوعلي",
            "عبد الكريم فراس عبد الكريم عطياني",
            "عمار لؤي محمد مفيد الفاخوري",
            "عمر محمد احمد الخطيب",
            "مالك محمد جميل نجار",
            "دانا محمد حسن برغوثي",
            "يزن محمد رافع غنام",
            "معاذ محمد صبري سايس",
            "قصي محمد عبد الله رمحي",
            "ميسرة محمد عبد سالم",
            "ليان محمد عمر حشاش",
            "امير معاذ علي ابوسليقة",
            "احمد نبيل يوسف حبابة",
            "احمد هيثم موسى دراج",
            "خالد وائل ابراهيم العزه"
    };
}
