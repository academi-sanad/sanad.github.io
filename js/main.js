/* global SITE_CONFIG, PROJECTS_DATA */

function openWhatsApp(message) {
    var number = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.whatsappNumber)
        ? SITE_CONFIG.whatsappNumber
        : "967700000000";
    var encodedMessage = encodeURIComponent(message);
    var url = "https://wa.me/" + number + "?text=" + encodedMessage;
    window.open(url, "_blank");
}

var whatsappTriggers = document.querySelectorAll(".js-whatsapp-trigger");
whatsappTriggers.forEach(function (btn) {
    btn.addEventListener("click", function () {
        var msg = btn.getAttribute("data-message") || "السلام عليكم فريق سند";
        openWhatsApp(msg);
    });
});

// =========================================================================
// WOW Slider Controller (index.html)
// =========================================================================
var wowSlides = document.querySelectorAll(".wow-slide");
var wowDots = document.querySelectorAll(".wow-dot");
var wowPrev = document.getElementById("wowPrev");
var wowNext = document.getElementById("wowNext");
var wowProgress = document.getElementById("wowProgress");
var wowIndex = 0;
var wowInterval = null;
var wowProgressVal = 0;

function showWowSlide(index) {
    if (wowSlides.length === 0) {
        return;
    }
    wowIndex = (index + wowSlides.length) % wowSlides.length;
    wowSlides.forEach(function (slide, i) {
        if (i === wowIndex) {
            slide.classList.add("active");
        } else {
            slide.classList.remove("active");
        }
    });
    wowDots.forEach(function (dot, i) {
        if (i === wowIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
    wowProgressVal = 0;
    if (wowProgress) {
        wowProgress.style.width = "0%";
    }
}

if (wowSlides.length > 0) {
    if (wowPrev) {
        wowPrev.addEventListener("click", function () {
            showWowSlide(wowIndex - 1);
        });
    }
    if (wowNext) {
        wowNext.addEventListener("click", function () {
            showWowSlide(wowIndex + 1);
        });
    }
    wowDots.forEach(function (dot, idx) {
        dot.addEventListener("click", function () {
            showWowSlide(idx);
        });
    });

    wowInterval = setInterval(function () {
        wowProgressVal += 4;
        if (wowProgress) {
            wowProgress.style.width = wowProgressVal + "%";
        }
        if (wowProgressVal >= 100) {
            showWowSlide(wowIndex + 1);
        }
    }, 200);
}

// =========================================================================
// Portfolio Cards, Watermark & Modal
// =========================================================================
var currentSlides = [];
var currentSlideIndex = 0;
var modal = document.getElementById("projectModal");

function updateCarousel(fallbackIcon, categoryName) {
    var carouselTrack = document.getElementById("carouselTrack");
    var carouselDots = document.getElementById("carouselDots");
    var prevSlideBtn = document.getElementById("prevSlide");
    var nextSlideBtn = document.getElementById("nextSlide");

    if (!carouselTrack) {
        return;
    }
    carouselTrack.innerHTML = "";
    carouselDots.innerHTML = "";

    if (currentSlides.length === 0) {
        var iconClass = fallbackIcon || "fas fa-folder-open";
        var catText = categoryName || "";
        carouselTrack.innerHTML =
            '<div class="carousel-placeholder">' +
            '<i class="' + iconClass + '"></i>' +
            "<p>نموذج عمل (" + catText + ") - أضف لقطات الشاشة في ملف projects.js</p>" +
            "</div>";
        prevSlideBtn.style.display = "none";
        nextSlideBtn.style.display = "none";
        return;
    }

    var isSubFolder = window.location.pathname.indexOf("/html/") !== -1;
    var pathPrefix = isSubFolder ? "../" : "";

    var img = document.createElement("img");
    img.src = pathPrefix + currentSlides[currentSlideIndex];
    img.alt = "معاينة العمل";
    carouselTrack.appendChild(img);

    if (currentSlides.length > 1) {
        prevSlideBtn.style.display = "block";
        nextSlideBtn.style.display = "block";
        currentSlides.forEach(function (_, idx) {
            var dot = document.createElement("span");
            dot.className = "dot" + (idx === currentSlideIndex ? " active" : "");
            dot.onclick = function () {
                currentSlideIndex = idx;
                updateCarousel();
            };
            carouselDots.appendChild(dot);
        });
    } else {
        prevSlideBtn.style.display = "none";
        nextSlideBtn.style.display = "none";
    }
}

function openProjectModal(project) {
    if (!modal) {
        return;
    }

    document.getElementById("modalCategory").innerText = project.categoryName;
    document.getElementById("modalTitle").innerText = project.title;
    document.getElementById("modalProblem").innerText = project.problem;
    document.getElementById("modalSolution").innerText = project.solution;

    var modalTags = document.getElementById("modalTags");
    modalTags.innerHTML = project.tags.map(function (tag) {
        return '<span class="tag">' + tag + "</span>";
    }).join("");

    var whatsappBtn = document.getElementById("modalWhatsappBtn");
    whatsappBtn.onclick = function () {
        openWhatsApp('السلام عليكم فريق سند، أعجبني نموذج "' + project.title + '" في معرض أعمالكم، وأرغب بطلب عمل مشابه الآن.');
    };

    currentSlides = (project.images && project.images.length > 0) ? project.images : [];
    currentSlideIndex = 0;
    updateCarousel(project.fallbackIcon, project.categoryName);

    modal.classList.add("open");
}

function createProjectCard(project) {
    var card = document.createElement("div");
    card.className = "portfolio-card";

    var isSubFolder = window.location.pathname.indexOf("/html/") !== -1;
    var pathPrefix = isSubFolder ? "../" : "";

    var wmName = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.watermarkName) ? SITE_CONFIG.watermarkName : "SANAD | سَـنَـد";
    var wmPhone = (typeof SITE_CONFIG !== "undefined" && SITE_CONFIG.watermarkPhone) ? SITE_CONFIG.watermarkPhone : "+967 7XX XXX XXX";

    var hasImages = project.images && project.images.length > 0;
    var thumbHTML = hasImages
        ? '<img src="' + pathPrefix + project.images[0] + '" alt="' + project.title + '">'
        : '<i class="' + project.fallbackIcon + ' thumb-placeholder-icon"></i>' +
          '<small class="thumb-cat-label">' + project.categoryName + "</small>";

    var tagsHTML = project.tags.map(function (tag) {
        return '<span class="tag">' + tag + "</span>";
    }).join("");

    card.innerHTML =
        '<div class="portfolio-thumb">' +
            thumbHTML +
            '<div class="watermark-overlay">' + wmName + '<span class="watermark-phone" dir="ltr">' + wmPhone + "</span></div>" +
            '<span class="preview-hint"><i class="fas fa-eye"></i> معاينة التفاصيل</span>' +
        "</div>" +
        '<div class="portfolio-info">' +
            "<div>" +
                '<span class="portfolio-category">' + project.categoryName + "</span>" +
                "<h3>" + project.title + "</h3>" +
                "<p>" + project.shortDesc + "</p>" +
            "</div>" +
            '<div class="tags">' + tagsHTML + "</div>" +
        "</div>";

    card.addEventListener("click", function () {
        openProjectModal(project);
    });
    return card;
}

var portfolioGrid = document.getElementById("portfolioGrid");

function renderProjects(filterCategory) {
    if (!portfolioGrid || typeof PROJECTS_DATA === "undefined") {
        return;
    }
    var category = filterCategory || "all";
    portfolioGrid.innerHTML = "";

    var filteredProjects = category === "all"
        ? PROJECTS_DATA
        : PROJECTS_DATA.filter(function (item) {
            return item.category === category;
        });

    filteredProjects.forEach(function (project) {
        portfolioGrid.appendChild(createProjectCard(project));
    });
}

if (portfolioGrid) {
    renderProjects("all");
    var filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(function (btn) {
        btn.addEventListener("click", function () {
            filterButtons.forEach(function (b) {
                b.classList.remove("active");
            });
            btn.classList.add("active");
            renderProjects(btn.getAttribute("data-filter"));
        });
    });
}

var featuredPortfolioGrid = document.getElementById("featuredPortfolioGrid");
if (featuredPortfolioGrid && typeof PROJECTS_DATA !== "undefined") {
    PROJECTS_DATA.slice(0, 3).forEach(function (project) {
        featuredPortfolioGrid.appendChild(createProjectCard(project));
    });
}

if (modal) {
    document.getElementById("prevSlide").addEventListener("click", function () {
        if (currentSlides.length > 1) {
            currentSlideIndex = (currentSlideIndex - 1 + currentSlides.length) % currentSlides.length;
            updateCarousel();
        }
    });

    document.getElementById("nextSlide").addEventListener("click", function () {
        if (currentSlides.length > 1) {
            currentSlideIndex = (currentSlideIndex + 1) % currentSlides.length;
            updateCarousel();
        }
    });

    document.getElementById("closeModal").addEventListener("click", function () {
        modal.classList.remove("open");
    });

    window.addEventListener("click", function (e) {
        if (e.target === modal) {
            modal.classList.remove("open");
        }
    });
}

document.addEventListener("contextmenu", function (e) {
    if (e.target.tagName === "IMG") {
        e.preventDefault();
    }
});
