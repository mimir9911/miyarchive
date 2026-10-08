/*
  EDIT THIS FILE to change what's on your site.

  Structure:  folders  >  playlists  >  songs
  - id:     short lowercase word used in the URL (no spaces)
  - title:  what shows on the page
  - blurb:  the little description under the title
  - image:  (optional) path or URL to cover art, e.g. "img/cover.jpg".
            Leave it out to get an auto-generated colour cover.
  - body:   (songs only) the full text, written as HTML.
            Use <p>...</p> for each paragraph.
*/
window.SITE = {
  name: "Miya A.",

  // The home page is your profile, like on Spotify.
  profile: {
    photo: "img/miya.jpeg", // drop your photo into the img folder with this name
    tagline: "Community Marketer & Copywriter",
    links: [
      { label: "Email", url: "mailto:mitsalathaya@outlook.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/mitsal/" },
      { label: "GitHub", url: "https://github.com/mimir9911" },
      { label: "Medium", url: "https://medium.com/@ittlbittl" }

    ],
    // The round "Top artists" row. "to" points at a song or playlist on this site
    // (folder/playlist/song); use "url" instead for an outside link.
    workedTitle: "Top contributions this lifetime",
    workedNote: "Only visible to cool people",
    worked: [
      { title: "JetBrains", type: "Company", to: "cv/experience/jetbrains", image: "img/jetbrains.png"},
      { title: "Stryker", type: "Company", to: "cv/experience/stryker", image: "img/stryker.jpeg" },
      { title: "Cancer Support Netherlands", type: "Company", to: "cv/experience/csn", image: "img/csn.png" },
      { title: "Tilburg University", type: "University", to: "cv/education/tiu", image: "img/tiu.jpeg" },
      { title: "University of Groningen", type: "University", to: "cv/education/rug", image: "img/rug.jpeg" },
      { title: "Bandung Institute of Technology", type: "University", to: "cv/education/itb", image: "img/itb.jpeg"}
    ]
  },
  folders: [
    {
      id: "gen-writing",
      title: "General Writing",
      blurb: "Prose, essays, and other things that I write in my free time a.k.a. passion projects.",
      playlists: [
        {
          id: "prose",
          title: "Prose",
          blurb: "Pieces from my Medium, souvenirs from loving very amazing people throughout my life.",
          image: "img/5.jpg",
          songs: [
            {
              id: "first-piece",
              title: "Dear Nadia,",
              blurb: "Miya",
              date: "Oct 2021",
              url: "https://medium.com/@ittlbittl/dear-nadia-d4a71dd10d52"
            },
            {
              id: "second-piece",
              title: "February",
              blurb: "Miya",
              date: "Mar 2022",
              url: "https://medium.com/@ittlbittl/february-5bf5025aa4c5"
            },
            {
              id: "third-piece",
              title: "nevermind, never",
              blurb: "Miya",
              date: "Mar 2022",
              url: "https://medium.com/@ittlbittl/nevermind-never-mine-e4f26f2763e7"
            },
            {
              id: "fourth-piece",
              title: "untitled",
              blurb: "Miya",
              date: "Jul 2022",
              url: "https://medium.com/@ittlbittl/untitled-ca8813c82cb6"
            },
            {
              id: "fifth-piece",
              title: "romantic homicide",
              blurb: "Miya",
              date: "Aug 2022",
              url: "https://medium.com/@ittlbittl/romantic-homicide-a68b429d1d8a"
            },
            {
              id: "sixth-piece",
              title: "grieving what could've been",
              blurb: "Miya",
              date: "Oct 2022",
              url: "https://medium.com/@ittlbittl/milk-teeth-8f245115fdab"
            },
            {
              id: "seventh-piece",
              title: "a flight to remember",
              blurb: "Miya",
              date: "Nov 2022",
              url: "https://medium.com/@ittlbittl/flight-to-remember-cafbd8b5abef"
            },
            {
              id: "eigth-piece",
              title: "june, 2022",
              blurb: "Miya",
              date: "Feb 2023",
              url: "https://medium.com/@ittlbittl/june-2022-332961f8dd04"
            },
            {
              id: "ninth-piece",
              title: "1043BX",
              blurb: "Miya",
              date: "Apr 2023",
              url: "https://medium.com/@ittlbittl/diary-entry-16-naritaweg-amsterdam-8150a060ee1e"
            },
            {
              id: "tenth-piece",
              title: "Night Shift",
              blurb: "Miya",
              date: "May 2023",
              url: "https://medium.com/@ittlbittl/night-shift-c8dd6265e03e"
            },
            {
              id: "eleventh-piece",
              title: "may 7, i long for you",
              blurb: "Miya",
              date: "May 2023",
              url: "https://medium.com/@ittlbittl/may-7-i-long-for-you-29ed97549499"
            },
            {
              id: "twelfth-piece",
              title: "dear diary,",
              blurb: "Miya",
              date: "Jun 2023",
              url: "https://medium.com/@ittlbittl/dear-diary-cc51a3ebfcc"
            },
            {
              id: "thirteenth-piece",
              title: "to a man whose heart i’m holding onto forever",
              blurb: "Miya",
              date: "Aug 2023",
              url: "https://medium.com/@ittlbittl/to-a-man-whose-heart-im-holding-onto-forever-3cb4b77ae22"
            },
            {
              id: "fourteenth-piece",
              title: "blurred in the middle of love",
              blurb: "Miya",
              date: "Nov 2023",
              url: "https://medium.com/@ittlbittl/blurred-in-the-middle-of-love-5c96cb3ea264"
            },
            {
              id: "fifteenth-piece",
              title: "Awkward (November, 2023)",
              blurb: "Miya",
              date: "Nov 2023",
              url: "https://medium.com/@ittlbittl/awkward-november-2023-df895b16a1b9"
            },
            {
              id: "sixteenth-piece",
              title: "Love You Very Much",
              blurb: "Miya",
              date: "Dec 2023",
              url: "https://medium.com/@ittlbittl/love-you-very-much-a3f402e2f1e0"
            },
            {
              id: "seventeeth-piece",
              title: "I am ashamed of loving",
              blurb: "Miya",
              date: "Jan 2024",
              url: "https://medium.com/@ittlbittl/i-am-ashamed-of-loving-6fd57205eaab"
            },
            {
              id: "eighteenth-piece",
              title: "A Brief Encounter",
              blurb: "Miya",
              date: "Jan 2024",
              url: "https://medium.com/@ittlbittl/a-brief-encounter-jakarta-2024-999bea4c558b"
            },
            {
              id: "nineteenth-piece",
              title: "lewd",
              blurb: "Miya",
              date: "Sep 2025",
              url: "https://medium.com/@ittlbittl/lewd-d0ae39428974"
            },
            {
              id: "twentieth-piece",
              title: "juno",
              blurb: "Miya",
              date: "Sep 2025",
              url: "https://medium.com/@ittlbittl/juno-7452a8cc9bc2"
            }
          ]
        },
        {
          id: "essays",
          title: "Essays",
          blurb: "Longer pieces, usually essays for a course or for a friend.",
          image: "img/9.jpg",
          songs: [
            {
              id: "essay-one",
              title: "A Circus of Ignorants",
              blurb: "Miya, SPILL!",
              date: "Jul 2020",
              url: "https://miyarchive.wordpress.com/2020/07/09/a-circus-of-ignorants/"
            },
            {
              id: "essay-two",
              title: "The Capitalization of Pride Month",
              blurb: "Miya",
              date: "Nov 2020",
              url: "https://miyarchive.wordpress.com/2020/11/26/the-capitalization-of-pride-month/"
            },
            {
              id: "essay-three",
              title: "The big pharma scam: Why drugmakers and insurance companies are not in it for the people",
              blurb: "Miya",
              date: "May 2022",
              url: "https://miyarchive.wordpress.com/2022/05/17/the-big-pharma-scam-why-drugmakers-and-insurance-companies-are-not-in-it-for-the-people/"
            },
            {
              id: "essay-four",
              title: "A Breath of Effortless Luxury: Classic Designs and Modern Comfort Converge to Redefine the Art of Contemporary Elegance",
              blurb: "Miya",
              date: "Jan 2024",
              url: "https://miyarchive.wordpress.com/2024/01/25/a-breath-of-effortless-luxury-classic-designs-and-modern-comfort-converge-to-redefine-the-art-of-contemporary-elegance/"
            },
            {
              id: "essay-five",
              title: "The emotional archive of chat histories and nostalgia",
              blurb: "Miya",
              date: "Apr 2026",
              url: "https://docs.google.com/document/d/1R5U2AKgZK73tAtcSmYJ8b7QcgpFYm5FaxvUNO__mbV4/edit?usp=sharing"
            },
            {
              id: "essay-six",
              title: "Your algorithm wants you to think your ex is coming back – and it’s got Instagram witches on payroll",
              blurb: "Miya",
              date: "Jun 2026",
              url: "https://docs.google.com/document/d/1_21MMfw63EHAVDMpqwzHDgdaKN8aJTFAQZ73ds9x4tM/edit?tab=t.yt2cnd9z81qk"
            }
          ]
        }
      ]
    },
    {
      id: "work",
      title: "Work",
      blurb: "Marketing, community, and content projects.",
      playlists: [
        {
          id: "case-studies",
          title: "Case Studies",
          blurb: "Customer success stories written for JetBrains for Startups.",
          image: "img/1.jpg",
          songs: [
            {
              id: "case-study-one",
              title: "How Fitia, the Top Nutrition App in Latin America With Over 10M Users, Powers its Development With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Fitia",
              date: "Apr 2026",
              url: "https://www.jetbrains.com/company/customers/experience/fitia/"
            },
            {
              id: "case-study-two",
              title: "How Omi Health Tech is Building Vietnam's National Health Data Infrastructure With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Omi Health Tech",
              date: "May 2026",
              url: "https://www.jetbrains.com/company/customers/experience/omihealthtech/"
            },
                        {
              id: "case-study-three",
              title: "Ziina Ships Major Features in Days While Processing AED 1.35B in Payments With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Ziina",
              date: "Jul 2026",
              url: "https://www.jetbrains.com/company/customers/experience/ziina/"
            },
            {
              id: "case-study-four",
              title: "How Synnax Built Its Own Programming Language for Rocket Engine Testing With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Synnax",
              date: "Aug 2026",
              url: "https://www.jetbrains.com/company/customers/experience/synnax/"
            },
            {
              id: "case-study-five",
              title: "How Terminal Industries Is Automating Logistics’ Last Manual Frontier With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Terminal Industries",
              date: "Aug 2026",
              url: "https://www.jetbrains.com/company/customers/experience/terminal/"
            },
            {
              id: "case-study-six",
              title: "How Oppex AI Is Racing to Resolve Production Incidents in Under Ten Minutes With the JetBrains Startup Program",
              blurb: "Miya, JetBrains, Oppex AI",
              date: "Sep 2026",
              url: "https://www.jetbrains.com/company/customers/experience/oppex/"
            }
          ]
        },
        {
          id: "student-reporter",
          title: "Student Reporter",
          blurb: "Writing gig I did as a student reporter at Bandung Institute of Technology",
          image: "img/2.jpg",
          songs: [
            {
              id: "student-reporter-one",
              title: "The secret behind your everyday food",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Sep 2020",
              url: "https://www.sbm.itb.ac.id/2020/09/22/the-secret-behind-your-everyday-food/"
            },
            {
              id: "student-reporter-two",
              title: "Pertamina progressing on electrical power, are we ready for electric cars?",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Sep 2020",
              url: "https://www.sbm.itb.ac.id/2020/09/29/pertamina-progressing-on-electrical-power-are-we-ready-for-electric-cars/"
            },
            {
              id: "student-reporter-three",
              title: "The ABCs of e-learning during a pandemic",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Oct 2020",
              url: "https://www.sbm.itb.ac.id/2020/10/22/the-abcs-of-e-learning-during-a-pandemic/"
            },
            {
              id: "student-reporter-four",
              title: "Quo Vadis in Knowledge Management Implementation — Becoming an agile organization",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Oct 2020",
              url: "https://www.sbm.itb.ac.id/2020/10/29/quo-vadis-in-knowledge-management-implementation-becoming-an-agile-organization/"
            },
            {
              id: "student-reporter-five",
              title: "Role of entrepreneurial behavior to support business performance",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Nov 2020",
              url: "https://www.sbm.itb.ac.id/2020/11/12/role-of-entrepreneurial-behavior-to-support-business-performance/"
            },
            {
              id: "student-reporter-six",
              title: "Life-changing moments of Nadiem Makarim. It isn’t what you think!",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Dec 2020",
              url: "https://www.sbm.itb.ac.id/2020/12/15/life-changing-moments-of-nadiem-makarim-it-isnt-what-you-think/"
            },
            {
              id: "student-reporter-seven",
              title: "Celebrating New Year with MSM-DSM Members!",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Jan 2021",
              url: "https://www.sbm.itb.ac.id/2021/01/13/celebrating-new-year-with-msm-dsm-members/"
            },
            {
              id: "student-reporter-eight",
              title: "Stereotype can appear anywhere, this is how to deal with it",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Feb 2021",
              url: "https://www.sbm.itb.ac.id/2021/02/18/stereotype-can-appear-anywhere-this-is-how-to-deal-with-it/"
            },
            {
              id: "student-reporter-nine",
              title: "Find out three pillars of success in former Banyuwangi Regent Abdullah Azwar Anas’ book",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Mar 2021",
              url: "https://www.sbm.itb.ac.id/2021/03/10/find-out-three-pillars-of-success-in-former-banyuwangi-regent-abdullah-azwar-anas/"
            },
            {
              id: "student-reporter-ten",
              title: "Understanding the value and quality of a project is required",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Mar 2021",
              url: "https://www.sbm.itb.ac.id/2021/03/11/understanding-the-value-and-quality-of-a-project-is-required/"
            },
            {
              id: "student-reporter-eleven",
              title: "Leaders face more challenges in this uncertain world",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Mar 2021",
              url: "https://www.sbm.itb.ac.id/2021/03/16/leaders-face-more-challenges-in-this-uncertain-world/"
            },
            {
              id: "student-reporter-twelve",
              title: "Developing attributes and knowledge may prevent post power syndrome",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Mar 2021",
              url: "https://www.sbm.itb.ac.id/2021/03/23/developing-attributes-and-knowledge-may-prevent-post-power-syndrome/"
            },
            {
              id: "student-reporter-thirteen",
              title: "Organizations face more complex problems as time passes by",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Mar 2021",
              url: "https://www.sbm.itb.ac.id/2021/03/30/organizations-face-more-complex-problems-as-time-passes-by/"
            },
            {
              id: "student-reporter-fourteen",
              title: "All you need to know about the capital market",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Apr 2021",
              url: "https://www.sbm.itb.ac.id/2021/04/05/all-you-need-to-know-about-the-capital-market/"
            },
            {
              id: "student-reporter-fifteen",
              title: "Businesses can benefit from powerful branding",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Apr 2021",
              url: "https://www.sbm.itb.ac.id/2021/04/06/businesses-can-benefit-from-powerful-branding/"
            },
            {
              id: "student-reporter-sixteen",
              title: "MVP can assist companies in validating product definition",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Apr 2021",
              url: "https://www.sbm.itb.ac.id/2021/04/09/mvp-can-assist-companies-in-validating-product-definition/"
            },
            {
              id: "student-reporter-seventeen",
              title: "The world of diplomacy and its relation to today’s world",
              blurb: "Mitsal Athaya, Management 2022",
              date: "May 2021",
              url: "https://www.sbm.itb.ac.id/2021/05/05/the-world-of-diplomacy-and-its-relation-to-todays-world/"
            },
            {
              id: "student-reporter-eighteen",
              title: "PT PII makes the state budget in infrastructure more secure",
              blurb: "Mitsal Athaya, Management 2022",
              date: "May 2021",
              url: "https://www.sbm.itb.ac.id/2021/05/06/pt-pii-makes-the-state-budget-in-infrastructure-more-secure/"
            },
            {
              id: "student-reporter-nineteen",
              title: "The importance of good behavior and how to be more ethically responsible",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Jun 2021",
              url: "https://www.sbm.itb.ac.id/2021/06/28/the-importance-of-good-behavior-and-how-to-be-more-ethically-responsible/"
            },
            {
              id: "student-reporter-twenty",
              title: "PALA Nusantara and Eduplex find opportunities to create a brand experience from changes in trends",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Jul 2021",
              url: "https://www.sbm.itb.ac.id/2021/07/02/pala-nusantara-and-eduplex-find-opportunities-to-create-a-brand-experience-from-changes-in-trends/"
            },
            {
              id: "student-reporter-twentyone",
              title: "Business continuity management system during the Covid-19 pandemic",
              blurb: "Mitsal Athaya, Management 2022",
              date: "Jul 2021",
              url: "https://www.sbm.itb.ac.id/2021/07/13/business-continuity-management-system-during-the-covid-19-pandemic/"
            }
          ]
        },
        {
          id: "hersphere",
          title: "Hersphere",
          blurb: "Another writing gig I did during lockdown that turned out to be super fun.",
          image: "img/3.jpg",
          songs: [
            {
              id: "hersphere-one",
              title: "Existential crisis: does it even matter?",
              blurb: "Miya",
              date: "Mar 2021",
              url: "https://www.instagram.com/p/CMejB-EnoSb/?img_index=1"
            },
            {
              id: "hersphere-two",
              title: "To forgive yourself",
              blurb: "Miya",
              date: "Apr 2021",
              url: "https://www.instagram.com/p/CNmvjLmHEAp/?img_index=1"
            },
            {
              id: "hersphere-three",
              title: "Your story is yours",
              blurb: "Miya",
              date: "Apr 2021",
              url: "https://www.instagram.com/p/COSf9XunHYb/?img_index=1"
            },
            {
              id: "hersphere-four",
              title: "To: high school seniors, it’s okay if you didn’t get into your dream school",
              blurb: "Miya",
              date: "Jun 2021",
              url: "https://www.instagram.com/p/CQGEperHvnV/?img_index=1"
            },
            {
              id: "hersphere-five",
              title: "Cheats to maximize your true potential",
              blurb: "Miya",
              date: "Jul 2021",
              url: "https://www.instagram.com/p/CQ_Gcx6sWQt/?img_index=1"
            },
            {
              id: "hersphere-six",
              title: "Talk to yourself like you would to someone you love",
              blurb: "Miya",
              date: "Nov 2021",
              url: "https://www.instagram.com/p/CWGGx0oPqfG/?img_index=1"
            }
          ]
        }
      ]
    },
    {
      id: "cv",
      title: "Formalities",
      blurb: "Where I've been and what I studied.",
      playlists: [
        {
          id: "experience",
          title: "Experience",
          blurb: "Highlight of marketing, content, and community roles I've undertaken.",
          image: "img/4.jpg",
          songs: [
            {
              id: "jetbrains",
              title: "JetBrains",
              blurb: "Marketing & Community Intern",
              date: "Feb 2026 – Sep 2026",
              body: "<p>I launched the first customer case study program for JetBrains for Startups and ran it from start to finish: sourcing customers, interviewing them, writing the stories, and producing the campaigns around them. We published nine case studies, converted 50% of warm customer outreach, and one of them became the company's third most-read case study.</p><p>I wrote hook-led social content for each launch, tailored to the platform. The best-performing post reached 3.4x our average Instagram reach and 4x our average Facebook engagement, and every LinkedIn post earned two to four times the usual engagement. I tracked results in Sprout Social, found that hook-first copy and non-corporate visuals drove most of the performance, and turned that into recommendations for future social content.</p><p>I also wrote and managed the startup program's newsletters and lifecycle emails, which reached a 1.4% click-through rate. On the partnerships side, I built co-marketing relationships with incubators, accelerators, and VC firms, and led the outreach that grew the program's partner network.</p>"
            },
            {
              id: "stryker",
              title: "Stryker",
              blurb: "Events & Marketing Communications Intern",
              date: "Jul 2025 – Mar 2026",
              body: "<p>I helped run internal and external medical education courses for the Spine team, working with the Events Manager on logistics, presentation materials, and faculty updates. Every course went out on schedule with no delays. I stayed in touch with surgeons and faculty well ahead of each session, and attendance held steady throughout. I ordered course kits up to six months in advance and managed deliveries before, during, and after each course, including urgent shipments across Europe. Shipping never disrupted the calendar.</p><p>Courses and networking events averaged an NPS of 90+. I organized them end-to-end, collected feedback, acted on it, and kept cross-functional stakeholders in the loop. I also replaced printed agendas with a QR code on delegate badges, which cut printed waste and gave attendees live access to schedules and locations.</p><p>On the marketing side, I produced videos, presentations, and brochures for major European spine congresses, including DWG, EuroSpine, PTChK, BSS&amp;SBNS, and BASS, all within medical device regulatory requirements. I also started a LinkedIn and internal newsletter content calendar for 2025–2026, the groundwork for an omnichannel content strategy.</p>"
            },
            {
              id: "csn",
              title: "Cancer Support Netherlands",
              blurb: "Social Media & Digital Content Assistant",
              date: "Jul 2025 – Feb 2026",
              body: "<p>I looked after the organization's Instagram and LinkedIn channels, using a mix of organic and paid social to reach more people. Over my time there, accounts reached grew by 75.6% and profile visits grew by 60%.</p>"
            },
            {
              id: "signify",
              title: "Signify (Philips Lighting)",
              blurb: "Global E-commerce Intern",
              date: "Mar 2023 – Aug 2023",
              body: "<p>I wrote the Global Content Playbook, which standardizes how products are marketed on e-commerce platforms like Amazon, Bol.com, and Coolblue across more than 70 countries.</p><p>I also created the Generic Assets Playbook, a library of reusable product assets that work across categories. Teams stopped recreating the same assets over and over, and the brand looked consistent on every marketplace.</p>"
            },
            {
              id: "hersphere",
              title: "Hersphere",
              blurb: "Content Writer",
              date: "Mar 2021 – Jan 2022",
              body: "<p>I wrote at least four pieces a month, in both Bahasa Indonesia and English, on women's empowerment issues around the world for Hersphere's social media audience.</p><p>Three of the account's highest-engagement Instagram posts were mine. One of them lifted engagement on a single post by 450%.</p>"
            },
            {
              id: "studentsxceos",
              title: "StudentsXCEOs Bandung",
              blurb: "Branding & Marketing Executive",
              date: "Nov 2020 – May 2021",
              body: "<p>I ran data-driven marketing initiatives that raised customer engagement on Instagram by 20%.</p><p>I also drove digital marketing for the program's events, and attendance grew from 2,000 to more than 10,000 participants.</p>"
            }
          ]
        },
        {
          id: "education",
          title: "Education",
          blurb: "Degrees and coursework.",
          image: "img/6.jpg",
          songs: [
            {
              id: "tiu",
              title: "MSc Communication and Cognition",
              blurb: "Tilburg University",
              date: "Mar 2027",
              body: "<p>A master's on how people produce, process, and respond to communication, and on how digital technology is changing that.</p><p><strong>Persuasion and non-verbal communication.</strong> Resistance and Persuasion looked at how people are influenced and why they push back. Non-Verbal Communication covered the signals that carry meaning beyond words. For the latter, I wrote a research proposal on F0 range compression in Indonesian politicians' English speech.</p><p><strong>The digital mind.</strong> The Human Mind in the Digital World examined how digital media and technology shape the way we think, relate, and make sense of things. My reflective essay for the course looked at how people use large language models to interpret situationships.</p><p><strong>Language and learning technologies.</strong> Understanding Large Language Models covered how these systems work and what they can and can't do. Emerging Technologies for Learning explored how new technologies change the way people learn.</p><p><strong>Digital science.</strong> Topics in Communication and Digital Science covered current research questions at the intersection of communication and digital technology.</p>"
            },
            {
              id: "rug",
              title: "BSc International Business",
              blurb: "University of Groningen",
              date: "Oct 2023",
              body: "<p>A bachelor's in how companies operate across borders: how they decide where to enter, how they organize, and how they manage people from different cultures.</p><p><strong>International business and strategy.</strong> Introduction to International Business, Foreign Direct Investment, Trade, and Geography, Comparative Country Studies, International Strategic Management, and Innovation Management in Multinationals. These courses covered how multinationals pick markets, choose entry modes, and manage innovation across locations. In Comparative Country Studies, I compared investment conditions in two countries.</p><p><strong>People and culture.</strong> Cross-Cultural Management, Organizational Structure, and Ethics and International Business. They covered how values differ between countries, how organizations are structured, and the ethical duties of corporations working globally.</p><p><strong>Research and analysis.</strong> Research Methodology for IB, Qualitative Research Methods for IB, Statistics II for IB, and the Empirical Research Project for IB. I learned to run applied business research from the management question through to the findings, using both interviews and quantitative methods such as regression, ANOVA, and factor analysis. The Empirical Research Project had us critically read published IB journal articles.</p>"
            },
            {
              id: "itb",
              title: "BSc Business Management",
              blurb: "Bandung Institute of Technology",
              date: "Oct 2023",
              body: "<p>A bachelor's built around human behavior, culture, ethics, and leadership, with entrepreneurship and technology on top.</p><p><strong>Marketing and communication.</strong> Marketing covered market research, segmentation, positioning, the marketing mix, and digital and social media. Business Communication focused on writing and presenting clearly and professionally.</p><p><strong>People and culture.</strong> Study of Human Society, Psychology and Organizational Behavior, Cross Culture and Conflict Management, Leadership and Management Practice, Organizational Development and Learning Organization, and Decision Management and Negotiation. The leadership course was project-based. We proposed an initiative, rallied peers behind it, and ran it with a real organization.</p><p><strong>Business and Asia.</strong> Introduction to Business, Introduction to International Business, International Trade and Finance, Economics, Financial Management, and Technology in Operations Management. Integrated Business Asia 1 and 2 looked at market entry, regulation, and cross-cultural management across Asian markets through case studies and group projects.</p><p><strong>Research.</strong> Business Statistics and Business Research Method taught me to frame a research question, choose between quantitative and qualitative methods, and work with data.</p>"
            }
          ]
        }
      ]
    },
    {
      id: "about",
      title: "About",
      blurb: "The cool person behind the playlists.",
      playlists: [
        {
          id: "bio",
          title: "Bio",
          blurb: "A short introduction.",
          image: "img/7.jpg",
          songs: [
            {
              id: "hello",
              title: "Get to know me :)",
              blurb: "Miya",
              date: "Oct 2026",
              body: "<p>Hey! I'm Miya.</p><p>As you can already guess, I am super passionate about literally anything that involves creation: writing, video editing, documenting, anything at all. Also, because I am such a huge fan of my own writing, I am an advocate of the <i>Let Miya Use Em Dashes Without People Assuming That AI Wrote It</i> movement (I am so serious).</p><p>I also like to make alcoholic beverages in my free time: I think it's another way to make art outside of the corporate marketing stuff. Other than that, I also write in my free time — I am a full-time lover and I love expressing my love through my writing.</p><p>My dream is actually to become a screenwriter eventually. Though, becoming VP of Marketing doesn't sound too bad :P</p><p>One thing that is very underrated about me is that I value community a lot. I believe that as a marketer, it should be your main responsibility to also give back to your community. I express this a lot in my ways of working and how I function at workplace.</p>"
            }
          ]
        },
        {
          id: "contact",
          title: "Contact",
          blurb: "Say hi to me!",
          image: "img/8.jpg",
          songs: [
            {
              id: "get-in-touch",
              title: "Get in touch",
              blurb: "Miya",
              date: "",
              body: "<p>Email: <a href=\"mailto:mitsalathaya@outlook.com\">mitsalathaya@outlook.com</a></p><p>LinkedIn: <a href=\"https://linkedin.com/in/mitsal\">linkedin.com/in/mitsal</a></p>"
            }
          ]
        }
      ]
    }
  ]
};
