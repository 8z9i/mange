package com.example.demo.UserController;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/students")
public class StudentsController {
    private List<Map<String, String>> students = new ArrayList<>();
    private int idCounter = 1;

    public StudentsController() {
        // Initialize with sample data ONCE
        String[] names = {
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
        for (String name : names) {
            Map<String, String> student = new HashMap<>();
            student.put("id", String.valueOf(idCounter));
            student.put("name", name);
            student.put("email", "student" + idCounter + "@example.com");
            students.add(student);
            idCounter++;
        }
    }

    @GetMapping
    public List<Map<String, String>> getStudents() {
        return students;
    }

    @PostMapping
    public Map<String, String> addStudent(@RequestBody Map<String, String> student) {
        student.put("id", String.valueOf(idCounter++));
        students.add(student);
        return student;
    }

    @DeleteMapping("/{id}")
    public void deleteStudent(@PathVariable String id) {
        students.removeIf(s -> s.get("id").equals(id));
    }

    @PutMapping("/{id}")
    public Map<String, String> updateStudent(@PathVariable String id, @RequestBody Map<String, String> updatedStudent) {
        for (Map<String, String> student : students) {
            if (student.get("id").equals(id)) {
                student.put("name", updatedStudent.get("name"));
                student.put("email", updatedStudent.get("email"));
                return student;
            }
        }
        throw new NoSuchElementException("Student not found");
    }
}
