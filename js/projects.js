var SITE_CONFIG = {
    whatsappNumber: "967712123535",
    watermarkName: "SANAD | سَـنَـد",
    watermarkPhone: "+967 712 123 535"
};

var PROJECTS_DATA = [
    {
        id: 1,
        title: "تطوير منصة تعليمية تفاعلية (TechVibe)",
        category: "tech",
        categoryName: "مشاريع برمجية وتقنية",
        shortDesc: "تصميم وتطوير واجهة منصة تعليمية متجاوبة باستخدام تقنيات الويب الحديثة Glassmorphism.",
        problem: "حاجة الطالب لمشروع تخرج لموقع دورات تقنية بتصميم عصري متجاوب يعمل بسلاسة على الجوال والحاسوب.",
        solution: "بناء الموقع بالكامل باستخدام HTML5, CSS3, JavaScript مع لوحة عرض للدورات ونموذج تسجيل تفاعلي وكود منظم ومشروح.",
        tags: ["HTML5", "CSS3", "JavaScript", "UI/UX"],
        fallbackIcon: "fas fa-laptop-code",
        images: ["images/imgtechpng.png","images/imgTech2.png","images/imgTech3.png",
            "images/imgTech4.png","images/imgTech5.png","images/imgTech6.png"]
    },
    {
        id: 2,
        title: "نظام إدارة فندق بواجهة رسومية (Python GUI)",
        category: "tech",
        categoryName: "مشاريع برمجية وتقنية",
        shortDesc: "تطبيق سطح مكتب متكامل لإدارة الحجوزات والغرف مبني بلغة بايثون والبرمجة كائنية التوجه (OOP).",
        problem: "مطلوب مشروع برمجي لمادة البرمجة كائنية التوجه يطبق مفاهيم الوراثة والتغليف مع واجهة مستخدم رسومية.",
        solution: "تطوير نظام متكامل باستخدام Python و Tkinter لإدارة تسجيل الدخول، حجز الغرف، وحساب الفواتير تلقائياً.",
        tags: ["Python", "OOP", "Tkinter", "Desktop App"],
        fallbackIcon: "fab fa-python",
        images: ["images/p1.png","images/p2.png","images/p3.png","images/p4.png"]
    },
    {
        id: 3,
        title: "تصميم قاعدة بيانات علائقية لنظام مطاعم (Oracle SQL)",
        category: "tech",
        categoryName: "مشاريع برمجية وتقنية",
        shortDesc: "تحليل وبناء مخطط ERD كامل وتنفيذ الجداول والاستعلامات المتقدمة بلغة Oracle SQL.",
        problem: "إعداد مشروع قواعد بيانات متكامل يشمل التحليل، التطبيع (Normalization)، وكتابة أوامر SQL خالية من الأخطاء.",
        solution: "رسم مخطط ERD احترافي، وبناء الجداول مع القيود (Constraints) والربط بينها وتجهيز تقرير توثيقي شامل.",
        tags: ["Oracle SQL", "Database", "ERD", "Normalization"],
        fallbackIcon: "fas fa-database",
        images: ["images/DB1.png","images/DB2.jpg"]
    },
      {
        id: 4,
        title: "تطوّر الأجهزة التعليمية: من التقليدية إلى الذكية",
        category: "ppt",
        categoryName: "عروض بوربوينت",
        shortDesc: "عرض تقديمي تفاعلي يستعرض التحول التاريخي والتقني في وسائل وأدوات التعليم من السبورات التقليدية إلى الفصول الذكية.",
        problem: "مادة نظرية حول تاريخ تطور الوسائل التعليمية تحتاج إلى عرض بصري مشوق يلخص المراحل الزمنية ويقارن بين التعليم التقليدي والذكي بوضوح.",
        solution: "تصميم شرائح إنفوجرافيك احترافية بخط زمني بصري وأيقونات حديثة وحركات انتقال سلسة (Morph) تبرز الفروقات والتقنيات الحديثة.",
        tags: ["PowerPoint", "Infographic", "تكنولوجيا التعليم", "Morph"],
        fallbackIcon: "fas fa-desktop",
        images: [
            "images/L4.png",
            "images/L3.png",
            "images/V2.jpg","images/L1.png"
        ]
    },

    
    {
        id: 5,
        title: "بحث علمي محكم في إدارة الأعمال الاستراتيجية",
        category: "research",
        categoryName: "بحوث وتقارير",
        shortDesc: "بحث جامعي من 20 صفحة موثق بأحدث المراجع العلمية وفق نظام التوثيق الأمريكي APA 7th.",
        problem: "ضرورة إعداد بحث أكاديمي بمصادر حديثة (2022-2026) مع نسبة اقتباس شبه معدومة وتنسيق دقيق.",
        solution: "البحث في قواعد البيانات العلمية، صياغة البحث بأسلوب أكاديمي رصين، وفحصه لضمان الأصالة الكاملة.",
        tags: ["APA 7th", "بحث علمي", "صياغة أكاديمية"],
        fallbackIcon: "fas fa-file-alt",
        images: ["images/V1.jpg","images/V2.jpg","images/V3.jpg"]
    },
    {
        id: 6,
        title: "محاكاة شبكة مؤسسية متكاملة (Cisco Packet Tracer)",
        category: "tech",
        categoryName: "مشاريع برمجية وتقنية",
        shortDesc: "تصميم شبكة لعدة فروع مع إعدادات التوجيه الثابت والديناميكي وتقسيم الشبكات (VLANs).",
        problem: "تنفيذ مشروع عملي لمادة شبكات الحاسوب يتطلب ربط عدة راوترات وسويتشات واختبار الاتصال بنجاح.",
        solution: "بناء الطوبولوجيا الكاملة على Packet Tracer، برمجة الأجهزة عبر CLI، وإرفاق ملف شرح للأوامر المستخدمة.",
        tags: ["Cisco Packet Tracer", "Networking", "CLI", "VLAN"],
        fallbackIcon: "fas fa-network-wired",
        images: ["images/K4.jpg","images/K3.jpg","images/K1.jpg","images/K2.jpg"]
    }
];
