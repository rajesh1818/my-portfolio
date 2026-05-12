export default function Portfolio() {
  const skills = {
    languages: ["Python", "C#", "PySpark", "Java", "C"],
    backend: ["Flask", "REST APIs", "Async Processing", ".NET"],
    cloud: ["GCP", "AWS", "Azure", "Docker", "Kubernetes"],
    databases: ["MySQL", "MongoDB", "Couchbase", "SQL Server", "BigQuery"],
    messaging: ["Pub/Sub", "RabbitMQ", "Amazon SQS"],
    tools: ["Git", "Jenkins", "Cloud Build", "Azure Pipelines", "GitHub Copilot"]
  };

  const experiences = [
    {
      company: "RXO Global Services India Private Limited",
      role: "Software Engineer II",
      duration: "Nov 2022 – Present",
      achievements: [
        "Led organization-wide migration from on-prem infrastructure to Google Cloud Platform.",
        "Built scalable Flask REST APIs improving recommendation accuracy from 30% to 60%.",
        "Converted Python batch workloads into distributed PySpark processing using GCP Dataproc.",
        "Led migration of production recommendation engine using GCE, Cloud Run, and GKE.",
        "Working on Agentic AI solutions using ADK framework.",
        "Received Best Operational Project Award for high-impact delivery."
      ]
    },
    {
      company: "CodeArray Technologies",
      role: "Associate Software Engineer",
      duration: "Jun 2021 – Nov 2022",
      achievements: [
        "Developed backend systems and Flask APIs for analytics platform.",
        "Worked across GCP, AWS, and Azure cloud environments.",
        "Built reusable backend utilities and cloud automation services.",
        "Worked on AWS production infrastructure using EC2, S3, SQS, CloudWatch and more."
      ]
    }
  ];

  const projects = [
    {
      title: "Cloud Recommendation Engine Migration",
      description:
        "Migrated enterprise recommendation systems from on-premise infrastructure to scalable GCP architecture using Flask, Cloud Run, GKE, and Dataproc.",
      stack: ["Python", "Flask", "GCP", "Cloud Run", "GKE", "PySpark"]
    },
    {
      title: "Distributed PySpark Batch Processing",
      description:
        "Converted legacy Python batch workloads into scalable distributed PySpark pipelines running on Dataproc Serverless.",
      stack: ["PySpark", "Dataproc", "BigQuery", "Python"]
    },
    {
      title: "Agentic AI Workflow Automation",
      description:
        "Building AI-driven workflow automation solutions using ADK framework to optimize backend operations and decision making.",
      stack: ["Python", "AI", "ADK", "Automation"]
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-zinc-800 px-6 py-24 md:px-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-lg text-zinc-400">Backend & Cloud Engineer</p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Rajesh <span className="text-cyan-400">Jethwa</span>
            </h1>

            <p className="mb-8 text-lg leading-relaxed text-zinc-300">
              Software Engineer with 4+ years of experience building scalable backend systems,
              cloud-native applications, distributed data pipelines, and AI-driven solutions using
              Python, Flask, .NET, PySpark, and Google Cloud Platform.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:rajeshjethwa1111@gmail.com"
                className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition hover:bg-cyan-400"
              >
                Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/rajesh-jethwa-40284b175/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl border border-zinc-700 px-6 py-3 transition hover:border-cyan-400"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold text-cyan-400">Core Expertise</h2>

            <div className="grid grid-cols-2 gap-4 text-sm">
              {[
                "Python",
                "Flask APIs",
                "PySpark",
                "Google Cloud",
                "Cloud Run",
                "GKE",
                "Dataproc",
                "BigQuery",
                "Docker",
                "Kubernetes",
                "Async Processing",
                "Agentic AI"
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 transition hover:border-cyan-400"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-10 text-4xl font-bold">About Me</h2>

          <div className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 text-lg leading-relaxed text-zinc-300">
            <p>
              I specialize in designing scalable backend systems and cloud-native architectures.
              My experience spans Flask API development, distributed processing using PySpark,
              cloud migrations on GCP, containerized deployments with Kubernetes, and modern
              AI-assisted workflow automation.
            </p>

            <br />

            <p>
              I enjoy solving production-scale performance challenges involving distributed systems,
              Pub/Sub messaging, batch processing optimization, cloud scalability, and backend
              automation.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">Technical Skills</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-400"
              >
                <h3 className="mb-5 text-xl font-semibold capitalize text-cyan-400">
                  {category}
                </h3>

                <div className="flex flex-wrap gap-3">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-2 text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">Experience</h2>

          <div className="space-y-8">
            {experiences.map((exp) => (
              <div
                key={exp.company}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:border-cyan-400"
              >
                <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="mt-1 text-cyan-400">{exp.company}</p>
                  </div>

                  <span className="mt-3 text-zinc-400 md:mt-0">{exp.duration}</span>
                </div>

                <ul className="space-y-3 text-zinc-300">
                  {exp.achievements.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-zinc-800 px-6 py-20 md:px-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-4xl font-bold">Projects</h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-cyan-400"
              >
                <h3 className="mb-4 text-2xl font-semibold text-cyan-400">
                  {project.title}
                </h3>

                <p className="mb-6 leading-relaxed text-zinc-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-zinc-700 bg-zinc-800 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-5xl font-bold">
            Let&apos;s Build Something Amazing
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-zinc-300">
            I&apos;m open to backend engineering, cloud-native development,
            distributed systems, and AI-driven platform opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:rajeshjethwa1111@gmail.com"
              className="rounded-2xl bg-cyan-500 px-8 py-4 font-semibold text-black transition hover:bg-cyan-400"
            >
              Email Me
            </a>

            <a
              href="tel:+919892514167"
              className="rounded-2xl border border-zinc-700 px-8 py-4 transition hover:border-cyan-400"
            >
              Call Me (+91 9892514167)
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
