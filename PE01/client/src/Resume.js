import "./Resume.css";

function Resume() {
    return (
        <div className="resume">
            {/* ----------------------------------------------------------------- */}

            <h1>Lath Nassar</h1>
            <p>
                46 Light Guard Dr, Medford MA, 02155 |
                (857) 991-6208 |
                nassarlath@cityuniversity.edu
            </p>
            
            {/* ----------------------------------------------------------------- */}

            <h2>Education</h2>

            <h3>Bachelor of Science in Applied Computer Science</h3>
            <p>CityUniversity of Seattle | September 2026</p>
            <p>GPA: 3.84/4.0</p>

            {/* ----------------------------------------------------------------- */}

            <h2>Skills</h2>

            <p>Programming Languages: Java, Python, JavaScript, C++</p>
            <p>Frameworks: React, Spring Boot, Django, Node.js</p>

            {/* ----------------------------------------------------------------- */}

            <h2>Work Experience</h2>

            <h3>Web Developer Intern</h3>
            <p>Coding Dojo | Remote | Jan 2023 – May 2023</p>

            <ul>
                <li>Built 3–4 full-stack applications in C#, JavaScript, and Python, delivering features on time within team‑based sprints.</li>
                <li>Developed .NET Core backend services and React frontend components, reducing integration bugs and improving feature consistency.</li>
                <li>Debugged JavaScript algorithms and Flask APIs to resolve issues across shared applications.</li>
                <li>Implemented authentication workflows with ASP.NET validation and Bcrypt, strengthening secure user access for deployed apps.</li>
                <li>Translated user requirements into technical specifications supported by MySQL and MongoDB data models.</li>
            </ul>

            {/* ----------------------------------------------------------------- */}

            <h2>Projects</h2>

            <h3>Loan Approval Prediction & Risk Pattern Discovery</h3>
            <p>
                Developed and evaluated multiple machine learning models for loan approval prediction,
                selecting a Random Forest classifier based on cross-validation and ROC-AUC performance.
                Improved prediction accuracy and model interpretability through data preprocessing, feature engineering,
                threshold optimization, and pattern discovery techniques.
            </p>
            <h3>Packaging Type Recognition in Warehouse</h3>
            <p>
                Designed a TensorFlow-based CNN to classify warehouse packaging types (barrels, crates, and pallets),
                achieving 90% validation accuracy on a dataset of approximately 1,000 images.
                Enhanced model robustness through data augmentation, preprocessing, and
                early stopping while validating performance across varying backgrounds and class distributions.
            </p>

            {/* ----------------------------------------------------------------- */}

        </div>
    )
}

export default Resume;