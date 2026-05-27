import { About, Home, Person, Social, Work } from "@/types";
import { Button, Column, Row, Text } from "@once-ui-system/core";

const resumeOutlineButtonStyle = {
  borderWidth: 2,
  borderStyle: "solid" as const,
  borderColor: "#3b82f6",
  boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.25)",
};

const person: Person = {
  firstName: "Tolu",
  lastName: "Olatunji",
  name: `Tolu Olatunji`,
  role: "Computer Engineering Student",
  avatar: "/images/avatar.png",
  email: "tolu.r.olatunji@gmail.com",
  location: "America/Toronto",
  languages: ["English", "Spanish (conversational)"],
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  // Set essentials: true for links you want to show on the about page
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Tolatunji88",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tolu-olatunji-1a53b4359",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/avatar.png",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `${person.name} — computer engineering at U of T; interests in AI, ML, hardware, finance, and data`,
  headline: <>{person.name}</>,
  featured: {
    display: false,
    title: <></>,
    href: "/portfolio",
  },
  subline: (
    <>
      I&apos;m a computer engineering student at the{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        University of Toronto
      </Text>
      . I&apos;m especially interested in{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        AI and machine learning
      </Text>
      ,{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        hardware
      </Text>
      ,{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        finance
      </Text>
      ,{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        data analytics
      </Text>
      ,{" "}
      <Text as="span" weight="strong" onBackground="neutral-strong">
        music
      </Text>
      , and the places those fields meet.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} based in Toronto`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <Column gap="m">
        <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance" align="left">
          I&apos;m a computer engineering student at the{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            University of Toronto
          </Text>
          , especially interested in{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            AI and machine learning
          </Text>
          ,{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            hardware
          </Text>
          ,{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            finance
          </Text>
          ,{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            data analytics
          </Text>
          ,{" "}
          <Text as="span" weight="strong" onBackground="neutral-strong">
            music
          </Text>
          , and where those areas connect.
        </Text>
        <Row wrap gap="8">
          <Button
            href="/documents/Tolu_Olatunji_Engineering_Resume.pdf"
            label="Engineering resume"
            prefixIcon="document"
            size="s"
            variant="secondary"
            style={resumeOutlineButtonStyle}
          />
          <Button
            href="/documents/tolu-olatunji-general-resume.pdf"
            label="General resume"
            prefixIcon="document"
            size="s"
            variant="secondary"
            style={resumeOutlineButtonStyle}
          />
        </Row>
      </Column>
    ),
  },
  projects: {
    display: true,
    title: "Projects",
    items: [
      {
        name: "Questr (SideQuestly)",
        timeframe: "Oct 2025 – Nov 2025",
        href: "https://github.com/Tolatunji88/SideQuestly",
        description: (
          <>
            NewHacks project (fork of Questr): full-stack wellbeing app with Flask, SQLite, and the Google Gemini API for
            personalized daily quests; sentiment analysis with TextBlob and Chart.js; deployed on Render with Gunicorn.
          </>
        ),
      },
      {
        name: "EV battery cooling — tensor mapping",
        href: "https://github.com/Tolatunji88/Tensor-Image-Mapping-Project-",
        description: (
          <>
            Jupyter pipeline that turns EV battery cooling simulation screenshots (temperature, pressure, velocity, layout)
            into aligned multi-channel tensors—legend OCR with Tesseract, domain masking, image-to-layout registration, and
            interactive overlays—with NumPy/PyTorch exports for downstream ML.
          </>
        ),
      },
    ],
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "University of Toronto",
        timeframe: "January 2026 – Present",
        role: "Undergraduate Research Assistant — Generative AI for Thermal Systems",
        achievements: [
          <>
            Built a Python data pipeline using OpenCV, Tesseract OCR, and SciPy to extract values
            from 45+ CFD simulation images, producing structured multi-modal PyTorch tensors for
            model training.
          </>,
          <>
            Developing a supervised PyTorch model to predict temperature fields from velocity inputs
            as a low-fidelity surrogate toward physics-informed neural networks (PINNs) for faster
            design optimization.
          </>,
          <>
            Applying data augmentation on limited paired CFD datasets to train diffusion and GAN
            models for automated battery cooling layouts under geometric and manufacturing
            constraints.
          </>,
        ],
        images: [],
      },
      {
        company: "Cornell University, BTI Institute",
        timeframe: "May 2024 – January 2025",
        role: "Research Intern",
        documentEmbed: {
          title: "Hutchins Science poster",
          buttonLabel: "View poster",
          src: "/documents/tolu-hutchins-science-poster.pdf",
          height: 720,
        },
        achievements: [
          <>
            Assessed phenotypic expression across 35,000 CNR tomato-line samples in a gene-mutation
            study, contributing data that informed triggers for fruit maturation.
          </>,
          <>
            Processed large biological datasets in Python and Excel to extract, filter, and summarize
            features for downstream modeling pipelines.
          </>,
          <>
            Produced technical reports synthesizing experimental results for collaborative research
            and publications.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "University of Toronto",
        description: (
          <Column gap="12" fillWidth>
            <Text variant="body-default-m">
              <Text as="span" weight="strong">
                Bachelor of Applied Science in Computer Engineering
              </Text>
              {" "}
              — PEY Co-op. Expected graduation{" "}
              <Text as="span" weight="strong">
                April 2030
              </Text>
              .
            </Text>
            <Column gap="4" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Coursework
              </Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                Computer and electrical fundamentals, calculus, dynamics, linear algebra, and introduction to electrical
                and computer engineering.
              </Text>
            </Column>
          </Column>
        ),
      },
      {
        name: "The Lawrenceville School",
        description: (
          <Column gap="16" fillWidth>
            <Text variant="body-default-s" onBackground="neutral-weak">
              Lawrence Township, NJ — August 2022 to May 2025
            </Text>

            <Column gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Academics
              </Text>
              <Text variant="body-default-m">
                <Text as="span" weight="strong">
                  3.85 GPA
                </Text>{" "}
                in rigorous college-prep courses;{" "}
                <Text as="span" weight="strong">
                  High Honors
                </Text>
                ;{" "}
                <Text as="span" weight="strong">
                  SAT 1500
                </Text>
                ;{" "}
                <Text as="span" weight="strong">
                  AP Scholar with Distinction
                </Text>{" "}
                (Calculus, Chemistry, Economics, Statistics).
              </Text>
            </Column>

            <Column gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Leadership &amp; campus roles
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Led the{" "}
                <Text as="span" weight="strong">
                  Peer Tutoring Program
                </Text>{" "}
                (recruitment and training for ~80 tutors serving 200+ students weekly); Religious Life Council;{" "}
                <Text as="span" weight="strong">
                  Varsity Track captain
                </Text>
                ; residential prefect; house treasurer (~$2,000 in house funds); concessions and cash handling.
              </Text>
            </Column>

            <Column gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Community
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Tutored grades 2–9 through{" "}
                <Text as="span" weight="strong">
                  Trenton Children&apos;s Chorus
                </Text>{" "}
                in math, science, history, and English for two years.
              </Text>
            </Column>

            <Column gap="8" fillWidth>
              <Text variant="label-strong-s" onBackground="neutral-strong">
                Honors &amp; awards
              </Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                Princeton University{" "}
                <Text as="span" weight="strong">
                  Hubert Alyea Chemistry Prize
                </Text>
                ; Harvard Club of Boston Book Award; national winner, Crack the Code (Codingville).
              </Text>
            </Column>
          </Column>
        ),
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "Languages & tools",
        description: (
          <>
            Day-to-day programming and embedded workflow across Python, Java, JavaScript, C, and
            SQL; circuit design with Altium; firmware targets including STM32.
          </>
        ),
        tags: [
          { name: "Python" },
          { name: "Java" },
          { name: "JavaScript" },
          { name: "C" },
          { name: "SQL" },
          { name: "HTML5" },
          { name: "CSS" },
          { name: "Git", icon: "github" },
          { name: "VS Code" },
          { name: "Jupyter" },
          { name: "STM32" },
          { name: "Altium" },
        ],
        images: [],
      },
      {
        title: "Libraries & frameworks",
        description: (
          <>
            ML and vision stacks for research pipelines; web stack for hackathon and deployed apps.
          </>
        ),
        tags: [
          { name: "PyTorch" },
          { name: "NumPy" },
          { name: "OpenCV" },
          { name: "SciPy" },
          { name: "Matplotlib" },
          { name: "Flask" },
          { name: "Pytesseract" },
          { name: "Bootstrap 5" },
          { name: "Render" },
        ],
        images: [],
      },
    ],
  },
};

const work: Work = {
  path: "/portfolio",
  label: "Portfolio",
  title: "Coming soon",
  description: `Project showcase for ${person.name} — coming soon`,
};

const hobbies: Work = {
  path: "/hobbies",
  label: "Hobbies",
  title: "Hobbies",
  description: `Hobbies and interests — ${person.name}`,
};

export { person, social, home, about, work, hobbies };
