import os
from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.units import inch
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, HRFlowable, PageBreak, KeepTogether
)
from reportlab.pdfgen import canvas

class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_number(num_pages)
            super().showPage()
        super().save()

    def draw_page_number(self, page_count):
        self.saveState()
        self.setFont("Helvetica", 8)
        self.setFillColor(colors.HexColor("#64748b")) # slate-500
        page_text = f"Hasin Ishruq — Curriculum Vitae | Page {self._pageNumber} of {page_count}"
        self.drawRightString(letter[0] - 36, 24, page_text)
        self.drawString(36, 24, "github.com/ishruq1317 • nabil12e4@gmail.com")
        self.restoreState()

def build_pdf(output_path):
    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        leftMargin=36,
        rightMargin=36,
        topMargin=36,
        bottomMargin=42
    )

    styles = getSampleStyleSheet()

    # Custom styles
    primary_color = colors.HexColor("#0f172a") # Slate 900
    accent_color = colors.HexColor("#4f46e5")  # Indigo 600
    sub_color = colors.HexColor("#334155")     # Slate 700
    body_color = colors.HexColor("#1e293b")    # Slate 800
    muted_color = colors.HexColor("#64748b")   # Slate 500

    name_style = ParagraphStyle(
        'CVName',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=20,
        leading=22,
        textColor=primary_color,
        spaceAfter=2
    )

    subtitle_style = ParagraphStyle(
        'CVSubtitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=10,
        leading=13,
        textColor=accent_color,
        spaceAfter=4
    )

    contact_style = ParagraphStyle(
        'CVContact',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=sub_color,
        spaceAfter=8
    )

    section_header_style = ParagraphStyle(
        'CVSectionHeader',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=11,
        leading=14,
        textColor=primary_color,
        spaceBefore=8,
        spaceAfter=3,
        keepWithNext=True
    )

    item_title_style = ParagraphStyle(
        'CVItemTitle',
        parent=styles['Normal'],
        fontName='Helvetica-Bold',
        fontSize=9.5,
        leading=12.5,
        textColor=primary_color,
        keepWithNext=True
    )

    item_sub_style = ParagraphStyle(
        'CVItemSub',
        parent=styles['Normal'],
        fontName='Helvetica-Oblique',
        fontSize=8.5,
        leading=11.5,
        textColor=accent_color,
        keepWithNext=True
    )

    body_style = ParagraphStyle(
        'CVBody',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=body_color,
        spaceAfter=3
    )

    bullet_style = ParagraphStyle(
        'CVBullet',
        parent=styles['Normal'],
        fontName='Helvetica',
        fontSize=8.5,
        leading=11.5,
        textColor=body_color,
        leftIndent=12,
        firstLineIndent=-12,
        spaceAfter=2
    )

    story = []

    # Header
    story.append(Paragraph("HASIN ISHRUQ", name_style))
    story.append(Paragraph("Final-Year CSE Undergraduate &bull; Full-Stack Software Engineer &bull; Applied AI Researcher", subtitle_style))
    
    contact_text = (
        "<b>Mailing Address:</b> A/1, Nayabari, Radio Colony, P.O: BPATC, Savar, Dhaka-1343 &nbsp;|&nbsp; "
        "<b>Cell:</b> +880 1405080369<br/>"
        "<b>Email:</b> nabil12e4@gmail.com &nbsp;/&nbsp; ishruq23105101317@diu.edu.bd &nbsp;|&nbsp; "
        "<b>GitHub:</b> github.com/ishruq1317"
    )
    story.append(Paragraph(contact_text, contact_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=accent_color, spaceBefore=1, spaceAfter=6))

    # CAREER OBJECTIVE
    story.append(Paragraph("CAREER OBJECTIVE", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=4))
    obj_text = (
        "Final-year Computer Science and Engineering undergraduate dedicated to software engineering and applied artificial "
        "intelligence. Experienced in developing modern full-stack web architectures and conducting deep learning research in medical "
        "image analysis. Driven by analytical thinking, sound decision-making, and an active commitment to continuous learning, "
        "seeking to contribute technical proficiency and problem-solving abilities to forward-looking engineering teams."
    )
    story.append(Paragraph(obj_text, body_style))
    story.append(Spacer(1, 4))

    # EDUCATION AND TRAINING
    story.append(Paragraph("EDUCATION AND TRAINING", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=4))
    
    edu_diu = (
        "&bull; <b>B.Sc. in Computer Science and Engineering (C.S.E)</b> — <i>Daffodil International University (DIU)</i>, Savar, Dhaka<br/>"
        "&nbsp;&nbsp; Status: <b>Final-year student</b> [Expected Graduation 2026] &nbsp;|&nbsp; Recipient of Dean's List Award (2026)"
    )
    story.append(Paragraph(edu_diu, bullet_style))

    edu_hsc = (
        "&bull; <b>Higher Secondary Certificate (H.S.C)</b> — <i>Savar Model College</i> [2021]<br/>"
        "&nbsp;&nbsp; Result: <b>GPA 5.00 out of 5.00</b> &nbsp;|&nbsp; Group: Science"
    )
    story.append(Paragraph(edu_hsc, bullet_style))

    edu_ssc = (
        "&bull; <b>Secondary School Certificate (S.S.C)</b> — <i>Radio Colony Model School</i> [2019]<br/>"
        "&nbsp;&nbsp; Result: <b>GPA 5.00 out of 5.00</b> &nbsp;|&nbsp; Group: Science"
    )
    story.append(Paragraph(edu_ssc, bullet_style))
    story.append(Spacer(1, 4))

    # TECHNICAL SKILLS
    story.append(Paragraph("TECHNICAL SKILLS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=4))

    skills_data = [
        [
            Paragraph("<b>Web Development:</b>", body_style),
            Paragraph("Next.js (14/15), React, Node.js, NestJS, TypeScript, JavaScript (ES6+), Tailwind CSS, HTML5, CSS3, RESTful APIs", body_style)
        ],
        [
            Paragraph("<b>Machine Learning & AI:</b>", body_style),
            Paragraph("Python, PyTorch, Deep Learning (CNNs), Knowledge Distillation, Uncertainty Quantification, Grad-CAM, Medical Image Processing", body_style)
        ],
        [
            Paragraph("<b>Databases & Tools:</b>", body_style),
            Paragraph("PostgreSQL, Prisma ORM, Spring Boot, Git, GitHub, Docker, Recursive SQL CTEs, VS Code, Swagger/OpenAPI, Vercel", body_style)
        ]
    ]
    t = Table(skills_data, colWidths=[120, 420])
    t.setStyle(TableStyle([
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
        ('TOPPADDING', (0,0), (-1,-1), 1),
        ('BOTTOMPADDING', (0,0), (-1,-1), 2),
        ('LEFTPADDING', (0,0), (-1,-1), 0),
        ('RIGHTPADDING', (0,0), (-1,-1), 0),
    ]))
    story.append(t)
    story.append(Spacer(1, 4))

    # PUBLICATIONS & RESEARCH
    story.append(Paragraph("PUBLICATIONS & RESEARCH", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=4))

    pub1 = (
        "1. <b>Explainable Multi-Scale Knowledge Distillation with Uncertainty-Aware Inference for Efficient Brain Tumor MRI Classification</b><br/>"
        "&nbsp;&nbsp; <b>Status:</b> Accepted and presented (September 2026). Proceedings forthcoming.<br/>"
        "&nbsp;&nbsp; <b>Details:</b> Formulated a multi-scale knowledge distillation architecture coupled with uncertainty-aware inference "
        "to enable lightweight, high-accuracy brain tumor classification on MRI scans with transparent clinical interpretability."
    )
    story.append(Paragraph(pub1, body_style))
    story.append(Spacer(1, 3))

    pub2 = (
        "2. <b>Transfer Learning-Based Deep Convolutional Neural Network for Early Liver Disease Detection Using Ultrasound Images with Grad-CAM Interpretation</b><br/>"
        "&nbsp;&nbsp; <b>Status:</b> Working Paper / Ongoing Research (Under preparation).<br/>"
        "&nbsp;&nbsp; <b>Details:</b> Investigating deep transfer learning models for non-invasive early liver pathology detection from "
        "ultrasound images, integrating Gradient-weighted Class Activation Mapping (Grad-CAM) to generate visual heatmaps for diagnostic transparency."
    )
    story.append(Paragraph(pub2, body_style))

    # Explicit page break for clean 2-page division
    story.append(PageBreak())

    # PAGE 2: PROJECTS, AWARDS, LANGUAGES
    story.append(Paragraph("SELECTED SOFTWARE ENGINEERING PROJECTS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=5))

    projects = [
        {
            "name": "ÉLANÉ Atelier – Luxury Salon Platform & Operations SaaS",
            "repo": "github.com/ishruq1317/elane-salon-malta",
            "stack": "Next.js 14, TypeScript, Tailwind CSS, Responsive UI",
            "desc": "Commercial-grade operations SaaS platform & multi-channel booking engine built for ÉLANÉ Atelier (Sliema, Malta). Architected real-time service scheduling, state management, and optimized responsive UI across mobile and desktop."
        },
        {
            "name": "ThreadTrace – Garment Supply-Chain Traceability & Digital Passports",
            "repo": "github.com/ishruq1317/ThreadTrace",
            "stack": "Java 21, Spring Boot 4.1.2, PostgreSQL CTEs, Docker, Swagger UI",
            "desc": "Garment supply-chain traceability & Digital Product Passports (EU ESPR) modular monolith. Implemented recursive PostgreSQL CTE lineage graphs, mass-balance verification, and QR code passports for CSE 444."
        },
        {
            "name": "CloudMetrics SaaS – Distributed Cloud Monitoring Platform",
            "repo": "github.com/ishruq1317/cloud-metrics-frontend (Backend: cloud-metrics-backend)",
            "stack": "Next.js, NestJS, Prisma ORM, PostgreSQL, TypeScript, Tailwind CSS",
            "desc": "End-to-end cloud infrastructure monitoring platform combining an interactive Next.js dashboard with a high-throughput NestJS, Prisma ORM, and PostgreSQL API with secure JWT authentication."
        },
        {
            "name": "N-Flix – Interactive Video Streaming Application",
            "repo": "github.com/ishruq1317/N-Flix",
            "stack": "React, Vite, JavaScript, Tailwind CSS, REST APIs",
            "desc": "Feature-rich Netflix-inspired web application featuring interactive user profiles, PIN security protection, animated backdrop banners, catalog search, and custom playback."
        },
        {
            "name": "HydraFlow – Adaptive Hydration UI/UX Platform",
            "repo": "github.com/ishruq1317/HydraFlow-UIUX-Project",
            "stack": "TypeScript, Modern Web UI Components, Responsive CSS",
            "desc": "Interactive user interface application implementing adaptive hydration tracking models with interactive visual feedback, smooth micro-interactions, and accessible responsive design."
        },
        {
            "name": "ATELIER Kaffeerösterei – European Specialty Coffee Roastery Platform",
            "repo": "github.com/ishruq1317/Coffee_Roaster",
            "stack": "React, TypeScript, Tailwind CSS",
            "desc": "European specialty coffee roastery & micro-lot concept store platform with interactive product browsing, roasting profile visualizer, and responsive design."
        }
    ]

    for p in projects:
        p_story = []
        p_header = f"&bull; <b>{p['name']}</b> &nbsp;[<font color='#4f46e5'>{p['repo']}</font>]"
        p_story.append(Paragraph(p_header, item_title_style))
        p_tech = f"&nbsp;&nbsp; <i>Tech Stack:</i> {p['stack']}"
        p_story.append(Paragraph(p_tech, item_sub_style))
        p_desc = f"&nbsp;&nbsp; {p['desc']}"
        p_story.append(Paragraph(p_desc, body_style))
        p_story.append(Spacer(1, 3))
        story.append(KeepTogether(p_story))

    story.append(Spacer(1, 4))

    # HONOURS AND AWARDS
    story.append(Paragraph("HONOURS AND AWARDS", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=5))

    awards = [
        (
            "Dean's List Award (2026)",
            "Daffodil International University (DIU)",
            "Conferred for maintaining exceptional academic standing and exemplary performance in Computer Science & Engineering."
        ),
        (
            "Finalist (Top 50), Unlock the Algorithm (UTA) Contest",
            "Spring 2024 &bull; DIU ACM Wing",
            "Competed and qualified among top student programmers in algorithmic problem solving, data structures, and competitive coding."
        ),
        (
            "Finalist (Top 50), Take-Off Programming Contest",
            "Spring 2023 &bull; DIU Computer Programming Club",
            "Secured competitive placement university-wide in competitive programming and real-time algorithmic implementation challenges."
        )
    ]

    for title, org, desc in awards:
        a_story = []
        a_header = f"&bull; <b>{title}</b> — <i>{org}</i>"
        a_story.append(Paragraph(a_header, item_title_style))
        a_desc = f"&nbsp;&nbsp; {desc}"
        a_story.append(Paragraph(a_desc, body_style))
        a_story.append(Spacer(1, 2))
        story.append(KeepTogether(a_story))

    story.append(Spacer(1, 4))

    # LANGUAGES
    story.append(Paragraph("LANGUAGES", section_header_style))
    story.append(HRFlowable(width="100%", thickness=0.5, color=colors.HexColor("#cbd5e1"), spaceBefore=0, spaceAfter=4))
    lang_text = (
        "&bull; <b>Bengali:</b> Native proficiency in speaking, reading, and writing.<br/>"
        "&bull; <b>English:</b> Fluent professional proficiency in speaking, reading, and writing."
    )
    story.append(Paragraph(lang_text, body_style))

    doc.build(story, canvasmaker=NumberedCanvas)
    print(f"CV PDF successfully generated at {output_path}")

if __name__ == '__main__':
    target = r"C:\Users\USER\.gemini\antigravity\scratch\portfolio\public\Hasin_Ishruq_CV.pdf"
    build_pdf(target)
