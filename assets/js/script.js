// --- Global Functions (needed for onclick attributes in HTML) ---

/**
 * Displays the course description popup on the welcome page.
 * This function is called via an onclick attribute in welcome page.html.
 */
const courseDescriptions = {
    'Web Development': 'Build modern websites using HTML, CSS, JavaScript, responsive layouts, and basic deployment workflows.',
    'Software Engineering': 'Principles of software development, SDLC, version control, testing, and agile practices to ship reliable software.',
    'Data Science': 'Data wrangling, visualization, statistics, and machine learning to generate insights and build predictive models.',
    'Cybersecurity': 'Foundations of security, threat modeling, vulnerabilities, hardening, and incident response across systems and networks.',
    'Network Administration': 'Design, configure, and troubleshoot networks, routing, switching, and services with monitoring and documentation.',
    'Fullstack Development': 'Front-end frameworks plus back-end APIs, databases, auth, and deployment for complete web applications.',
    'AWS Certification': 'Core AWS services (EC2, S3, RDS, Lambda, VPC), security and architecture best practices, and exam readiness.',
    'Finance': 'Financial statements, budgeting, valuation, and risk to support data-driven decisions in organizations.',
    'Marketing': 'Branding, segmentation, campaigns, and analytics across digital channels to grow audience and revenue.',
    'Entrepreneurship': 'Idea validation, business models, fundraising, and go-to-market to launch and scale new ventures.',
    'Management': 'Planning, leading, organizing, and controlling with practical tools for high-performing teams and projects.',
    'International Business': 'Global markets, cross-border strategy, trade, and operations to compete internationally.',
    'Graphic Design': 'Visual communication, typography, layout, and brand assets using professional design tools.',
    'UI/UX Design': 'User research, information architecture, wireframes, and high-fidelity prototypes using design systems.',
    'Interior Design': 'Space planning, materials, lighting, and visualization to create functional and aesthetic interiors.',
    'Fashion Design': 'Collection development, trend research, materials, and production workflows in the fashion industry.',
    'Industrial Design': 'Human-centered product design, ergonomics, CMF, and DFM/DFA for manufacturable products.',

    'Automotive Design Course': 'Automotive CAD/CAE fundamentals, surfacing, packaging, GD&T, and manufacturing considerations with project deliverables.',
    'Industrial Design Engineer Course': 'End-to-end product design process, ergonomics, materials, prototyping, DFM/DFA, and design validation.',
    'R&D Design and Analysis Course': 'Concept-to-prototype workflows with structural analysis, optimization, and report-based decision making.',
    'CAD CAM Course': 'Parametric modeling, assemblies, drafting, toolpath strategies, CNC post-processing, and shop documentation.',
    'Product Design Course': 'Design thinking, user research, ideation, rapid prototyping, and product-market fit fundamentals.',
    'Wiring Harness Design Course': 'Schematics, connector selection, routing, standards, and manufacturing documentation for harnesses.',
    'PG program in CAE': 'Meshing, solver setup, structural/thermal/modal/dynamic analyses, and post-processing for robust CAE workflows.',
    'Hybrid Vehicle Design & Analysis': 'HEV architecture, sizing, battery and powertrain, energy management, and simulation-driven trade-offs.',

    'Embedded Course': 'C/C++ for microcontrollers, peripherals (GPIO, UART, I2C, SPI), RTOS basics, and board bring-up.',
    'PLC / SCADA / HMI Automation': 'PLC programming, ladder logic, sensors/actuators, SCADA monitoring, HMI design, and industrial safety.',
    'VLSI Course': 'Digital design, HDL (Verilog/VHDL), synthesis, timing, and verification flows for chip development.',
    'ECAD Course': 'Schematic capture, PCB layout, DFM, EMC/EMI awareness, and Gerber generation for fabrication.',
    'Robotics Course': 'Kinematics, control, sensing, motion planning, and system integration with practical projects.',
    'EV Design Course': 'Traction motors, inverters, BMS basics, charging, and system integration for electric vehicles.',
    'Simulation Analysis Course': 'Multiphysics simulation setup, boundary conditions, convergence, and result interpretation.',
    'Industrial Automation Course': 'Drives, sensors, PLC networks, safety systems, and production line integration.',
    'Industrial IOT Engineer Course': 'Sensors-to-cloud, MQTT/HTTP, edge gateways, dashboards, and security for IIoT deployments.',
    'BMS Engineer Course': 'Cell models, balancing, SOC/SOH algorithms, safety, and diagnostics for battery management.',
    'PCB Design Engineer Course': 'High-speed layout, stackups, impedance control, DRC/DFM, and manufacturing handoff.',

    'Artificial Intelligence Course': 'Machine learning and deep learning foundations, model training, evaluation, and deployment patterns.',
    'Generative AI': 'LLMs, prompting, fine-tuning, embeddings, and responsible AI for content and workflow automation.',
    'Ethical Hacking': 'Security fundamentals, recon, exploitation, and reporting within legal and ethical frameworks.',
    'Full Stack Developer Course': 'Front end + back end, REST APIs, databases, auth, and CI/CD for production-grade apps.',
    'AWS Course': 'Compute, storage, networking, serverless, IAM, and cost optimization on AWS.',
    'Web Developing Course': 'Responsive layouts, accessibility, modern tooling, and deployment for the web.',
    'Java Course': 'Core Java, OOP, collections, concurrency basics, and introduction to Spring and REST APIs.',
    'Python Course': 'Python fundamentals, data handling, scripting, and intro to web and data frameworks.',
    'Digital Marketing Course': 'SEO, SEM, social media, email, and analytics to design and measure campaigns.',
    'Machine Learning Course': 'Supervised/unsupervised learning, feature engineering, and model evaluation techniques.',
    'Blockchain Technology Course': 'Blockchain concepts, smart contracts, and decentralized apps with security considerations.',
    'Software Testing Course': 'Test design, manual/automated testing, frameworks, and continuous quality practices.',
    'Android App Course': 'Android fundamentals with Kotlin/Java, UI, data storage, and publishing best practices.',
    '.NET Developer Course': 'C#, ASP.NET Core, Entity Framework, REST APIs, and deployment on Windows/Linux.',
    'UI/UX Engineer Course': 'User research, wireframes, prototyping, and design systems for consistent product UX.',
    'AR/VR Engineer Course': '3D environments, interactions, and performance for AR/VR experiences using modern engines.',
    'DevOps Course': 'Git, CI/CD, Docker, Kubernetes, IaC, and monitoring to ship software reliably.',
    'Robotic Process Automation Course': 'RPA tools and patterns to automate repetitive tasks and integrate business systems.',

    'BIM Course': 'Revit-based BIM workflows, collaboration, coordination, and documentation for projects.',
    'Structural Design Course': 'Analysis and design of structural elements with codes, loads, and detailing.',
    '3ds Max Course': 'Modeling, materials, lighting, and rendering for photorealistic visualizations.',
    'Revit Architect Course': 'Parametric families, building modeling, schedules, and construction documentation.',
    'Interior Design Course': 'Materials, space planning, lighting, and visualization workflows for residential and commercial interiors.',
    'Architectural Design Course': 'Concept development, massing, site, and presentation skills for architecture.',
    'Building Design Course': 'Integrated building design with coordination across architectural, structural, and MEP.',

    'MEP Design Course': 'HVAC, electrical, and plumbing design fundamentals with load calculations and sizing.',
    'Revit MEP Course': 'MEP modeling, coordination, clash detection, schedules, and quantity takeoff in Revit.',
    'SAP HVAC Course': 'HVAC system design principles, selection, and performance analysis for built environments.',
    'SAP FICO Course': 'Financial Accounting and Controlling configuration, processes, and reporting in SAP.',
    'SAP SD Course': 'Sales and Distribution processes, pricing, delivery, and billing configuration in SAP.',
    'SAP ABAP Course': 'ABAP programming, data dictionary, reports, enhancements, and integrations.',
    'SAP MM Course': 'Materials Management processes, procurement, inventory, and master data in SAP.',

    'CAE Course': 'Pre-processing, solver setup, and post-processing for structural/thermal/modal analyses.'
};

function showCourseDescription(course) {
    const popup = document.getElementById("popup");
    const description = document.getElementById("courseDescription");

    if (popup && description) {
        const key = course;
        const content = courseDescriptions[key] || "Click on a specific course to see its description.";
        description.textContent = content;
        popup.style.display = "flex";
    }
}

/**
 * Shows a success alert for the contact form.
 * This function is called via an onclick attribute in Contact.html.
 */
function showSuccessModal() {
    alert("Form submitted successfully!");
}


// --- Page-Specific Logic (runs after the DOM is loaded) ---

document.addEventListener("DOMContentLoaded", function() {

    // --- Navbar Active Link Highlighter ---
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navLinks.forEach(link => {
        if (link.getAttribute('href').includes(currentPage)) {
            link.classList.add('active');
        }
    });

    // --- Logic for the Welcome Page Popup ---
    const popup = document.getElementById("popup");
    if (popup) {
        const closePopupButton = document.getElementById("closePopup");
        if (closePopupButton) {
            closePopupButton.addEventListener("click", () => {
                popup.style.display = "none";
            });
        }
        window.addEventListener("click", (event) => {
            if (event.target == popup) {
                popup.style.display = "none";
            }
        });
    }

    // --- Logic for the Admission Form Validation ---
    const admissionForm = document.querySelector('.admission-form');
    if (admissionForm) {
        
        const displayErrorMessage = (field, message) => {
            let parent = field.closest('.form-group') || field.parentElement;
            clearErrorMessage(field);
            const errorElement = document.createElement('div');
            errorElement.className = 'error-message';
            errorElement.textContent = message;
            parent.appendChild(errorElement);
        };

        const clearErrorMessage = (field) => {
            let parent = field.closest('.form-group') || field.parentElement;
            const errorElement = parent.querySelector('.error-message');
            if (errorElement) errorElement.remove();
        };

        admissionForm.addEventListener('input', (event) => {
            const target = event.target;
            if (['input', 'select', 'textarea'].includes(target.tagName.toLowerCase())) {
                clearErrorMessage(target);
            }
        });

        admissionForm.addEventListener("submit", (event) => {
            event.preventDefault();
            let formValid = true;
            const requiredFields = admissionForm.querySelectorAll('[required]');
            
            requiredFields.forEach(field => {
                if (field.type === 'radio') {
                    const groupName = field.name;
                    if (!admissionForm.querySelector(`input[name="${groupName}"]:checked`)) {
                        formValid = false;
                        displayErrorMessage(admissionForm.querySelector(`input[name="${groupName}"]`), 'Please select an option');
                    } else {
                        clearErrorMessage(admissionForm.querySelector(`input[name="${groupName}"]`));
                    }
                } else if (!field.value.trim()) {
                    formValid = false;
                    displayErrorMessage(field, 'This field is required');
                }
            });

            if (formValid) {
                alert('Form is valid and ready to be submitted!');
                // admissionForm.submit(); // Uncomment to allow form submission
            } else {
                alert('Please fill out all required fields.');
            }
        });

        const resetBtn = document.getElementById("resetBtn");
        if (resetBtn) {
            resetBtn.addEventListener("click", () => {
                admissionForm.querySelectorAll('.error-message').forEach(e => e.remove());
            });
        }
    }
});