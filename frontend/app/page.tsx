export default function Page() {
    return (
    <>
        <main className="mdc-top-app-bar--fixed-adjust">
        <div className="content-container">
            {/* Hero Section: Introduction and profile */}
            <section className="hero-section" id="hero">
                <div className="mdc-card hero-card">
                    <div className="mdc-card__primary-action">
                        <div className="hero-content">
                            {/* Profile image placeholder (can be replaced with a real image) */}
                            <div className="profile-image">
                                <div className="avatar-placeholder">
                                    <i className="material-icons">person</i>
                                </div>
                            </div>
                            {/* Name, subtitle, and description */}
                            <div className="hero-text">
                                <h1 className="mdc-typography--headline4">Karen Garcia</h1>
                                <h2 className="mdc-typography--headline6 subtitle">Full Stack Developer</h2>
                                <p className="mdc-typography--body1">
                                    Passionate about creating innovative web applications with modern technologies like jQuery, JavaScript, and Material Design.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section: Lists main skills in cards */}
            <section className="skills-section" id="skills">
                <h2 className="mdc-typography--headline5 section-title">Skills</h2>
                <div className="skills-grid">
                    {/* Each skill is shown in a Material card */}
                    <div className="mdc-card skill-card">
                        <div className="mdc-card__primary-action">
                            <div className="skill-content">
                                <i className="material-icons skill-icon">code</i>
                                <h3 className="mdc-typography--headline6">Frontend</h3>
                                <p className="mdc-typography--body2">HTML, CSS, JavaScript, jQuery, React, Material Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="mdc-card skill-card">
                        <div className="mdc-card__primary-action">
                            <div className="skill-content">
                                <i className="material-icons skill-icon">storage</i>
                                <h3 className="mdc-typography--headline6">Backend</h3>
                                <p className="mdc-typography--body2">Node.js, Python, Express, REST APIs, Database Design</p>
                            </div>
                        </div>
                    </div>
                    <div className="mdc-card skill-card">
                        <div className="mdc-card__primary-action">
                            <div className="skill-content">
                                <i className="material-icons skill-icon">build</i>
                                <h3 className="mdc-typography--headline6">Tools</h3>
                                <p className="mdc-typography--body2">Git, Docker, VS Code, Webpack, npm, Linux</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section: Showcases portfolio projects */}
            <section className="projects-section" id="projects">
                <h2 className="mdc-typography--headline5 section-title">Projects</h2>
                <div className="projects-grid">
                    {/* Each project is a Material card with icon, description, and tech chips */}
                    <div className="mdc-card project-card">
                        <div className="mdc-card__media project-media">
                            <div className="project-placeholder">
                                <i className="material-icons">web</i>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="mdc-typography--headline6">E-Commerce Platform</h3>
                            <p className="mdc-typography--body2">
                                Full-stack web application built with jQuery and Material Design, featuring user authentication and payment processing.
                            </p>
                            <div className="project-tech">
                                <span className="tech-chip">jQuery</span>
                                <span className="tech-chip">Node.js</span>
                                <span className="tech-chip">Material Design</span>
                            </div>
                        </div>
                        <div className="mdc-card__actions">
                            {/* Button to view project (handled by JS) */}
                            <button className="mdc-button mdc-card__action" data-project="ecommerce">
                                <span className="mdc-button__label">View Project</span>
                            </button>
                        </div>
                    </div>
                    {/* More projects follow the same structure */}
                    <div className="mdc-card project-card">
                        <div className="mdc-card__media project-media">
                            <div className="project-placeholder">
                                <i className="material-icons">dashboard</i>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="mdc-typography--headline6">Data Dashboard</h3>
                            <p className="mdc-typography--body2">
                                Interactive dashboard for data visualization using jQuery and Chart.js with real-time updates and responsive design.
                            </p>
                            <div className="project-tech">
                                <span className="tech-chip">jQuery</span>
                                <span className="tech-chip">Chart.js</span>
                                <span className="tech-chip">REST API</span>
                            </div>
                        </div>
                        <div className="mdc-card__actions">
                            <button className="mdc-button mdc-card__action" data-project="dashboard">
                                <span className="mdc-button__label">View Project</span>
                            </button>
                        </div>
                    </div>
                    <div className="mdc-card project-card">
                        <div className="mdc-card__media project-media">
                            <div className="project-placeholder">
                                <i className="material-icons">phone_android</i>
                            </div>
                        </div>
                        <div className="project-content">
                            <h3 className="mdc-typography--headline6">Task Manager App</h3>
                            <p className="mdc-typography--body2">
                                Progressive Web App for task management with offline capabilities, built using jQuery and Material Design Components.
                            </p>
                            <div className="project-tech">
                                <span className="tech-chip">PWA</span>
                                <span className="tech-chip">jQuery</span>
                                <span className="tech-chip">LocalStorage</span>
                            </div>
                        </div>
                        <div className="mdc-card__actions">
                            <button className="mdc-button mdc-card__action" data-project="taskmanager">
                                <span className="mdc-button__label">View Project</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>

        {/* Floating Action Button (FAB) for scrolling to top */}
        <button className="mdc-fab demo-fab" id="scroll-top">
            <div className="mdc-fab__ripple"></div>
            <span className="material-icons mdc-fab__icon">keyboard_arrow_up</span>
        </button>
    </main>
    </>
    );
}