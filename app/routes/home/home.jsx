import gamestackTexture2Large from '~/assets/Insight A PodCast/list.jpg';
import gamestackTexture2Placeholder from '~/assets/Insight A PodCast/list.jpg';
import gamestackTexture2 from '~/assets/Insight A PodCast/list.jpg';
import gamestackTextureLarge from '~/assets/Insight A PodCast/login.jpg';
import gamestackTexturePlaceholder from '~/assets/Insight A PodCast/login.jpg';
import gamestackTexture from '~/assets/Insight A PodCast/login.jpg';
import gamestackTextures2Large from '~/assets/Influencer Meet Beta/list1.jpg';
import gamestackTextures2Placeholder from '~/assets/Influencer Meet Beta/list1.jpg';
import gamestackTextures2 from '~/assets/Influencer Meet Beta/list1.jpg';
import gamestackTexturesLarge from '~/assets/Influencer Meet Beta/login1.jpg';
import gamestackTexturesPlaceholder from '~/assets/Influencer Meet Beta/login1.jpg';
import gamestackTextures from '~/assets/Influencer Meet Beta/login1.jpg';
import sliceTextureLarge from '~/assets/Rojgari In Khadi/Rojgari.jpg';
import sliceTexturePlaceholder from '~/assets/Rojgari In Khadi/Rojgari.jpg';
import sliceTexture from '~/assets/Rojgari In Khadi/Rojgari.jpg';
import sprTextureLarge from '~/assets/TWB Creates/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/TWB Creates/spr-lesson-builder-dark-large.jpg';
import sprTexture from '~/assets/TWB Creates/spr-lesson-builder-dark-large.jpg';
import SunWay1 from '~/assets/sunway/SunWay1.jpg';
import sunway2 from '~/assets/sunway/SunWay2.jpg';
import softwarica from '~/assets/Softwarica/Softwarica.jpg';

import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Need to Write',
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const projectSix = useRef();
  const ProjectSeven = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree,projectFour,projectFive,projectSix, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Twb Creates"
        description="Welcome to TWB Creatives, where creativity converges with technology to redefine the digital landscape. As industry leaders in graphic design, marketing, and web development, we embark on a mission to transform ideas into impactful digital experiences. Our journey is marked by a passion for innovation, collaborative spirit, and unwavering commitment to excellence."
        buttonText="View Website"
        buttonLink="https://twbcreates.com/"
        model={{
          type: 'laptop',
          alt: 'Smart Sparrow lesson builder',
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Insight A Podcast"
        description="'Insight A Poscast' is a passionate initiation to capture the stories, cover the professional view point, and in turn drive the aspiring future marketers towards their objective. We are the initiators of providing the right value content in the context of a marketing podcast focused on Nepal. With the immense growth of digital marketing and podcast visual content in the digital domain, Insight is an effort to fill the gap between both. We want to demonstrate what is correct and what is not in marketing. We want to educate and make individuals aware of where to begin and how to avoid relying on false information. The insight podcast series helps talented executives challenge and stay informed about the current difficulties in the digital marketing industry through the stories of people who have already succeeded."
        buttonText="Watch PodCast"
        buttonLink="https://www.youtube.com/@insightapodcast"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder,
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Rojgari In Khadi"
        description="Rojgari in Khadi is dedicated to addressing employment challenges and promoting transparency in job consultations, particularly in rural areas. The initiative focuses on bridging the gap between job seekers and genuine opportunities by providing a reliable platform for information sharing. The project included social media management, branding, website development, and a dedicated dashboard to manage queries effectively."
        buttonText="View Website"
        buttonLink="https://rojgari-in-khadi.vercel.app/"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
       <ProjectSummary
        id="project-4"
        alternate
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="Influencer Meet Beta "
        description="
        •	Panel discussion on context of Digital Marketing Influencers.            
        o	Food influencers, Beauty influencers with moderators by Digital Marketing
        •	Gala-dinner
        •	2-3 daylong event  2 days – suggested by Pravin sir
        •	Private events
        •	Lack of Education Influencers
        •	Digital Marketing Association Formation  Day 1 fully Agencies 
        • Membership formation 
        •	Minuting / Constitution
        •	Only Agencies 
        •	Structure
        •	General Membership Charges 
        •	Day 2  meet Influencers & agency 
        •	Day 3   Meet Influencers w/Private Party (After Party) 
•	Awards
"
        buttonText="View Channel"
        buttonLink="https://www.instagram.com/influencer_meet_beta?igsh=dHhycXRqaGg1cGhn"
        model={{
          type: 'phone',
          alt: 'App login screen',
          textures: [
            {
              srcSet: `${gamestackTextures} 375w, ${gamestackTexturesLarge} 750w`,
              placeholder: gamestackTexturesPlaceholder,
            },
            {
              srcSet: `${gamestackTextures2} 375w, ${gamestackTextures2Large} 750w`,
              placeholder: gamestackTextures2Placeholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="Wisdom Point(Free Library)"
        description="‘The Wisdom Point’- “म पढेर बन्छु ।“is an public library for the bookworms of Nepal. This is initiative of IT & Editorial Club of Softwarica in order to nurture reading culture in Nepalese youth. 
Vision
As the name suggests, different branches of the library will be opened at distance of 30-50 kilometers each around the Kathmandu Valley. It ensures easy access to the information by the people of all the location through decentralization. 
The first branch has been opened at the New Baneshwor and other eight will be following in the coming four years. We will open two branches each year. For other branches we have chosen Pulchowk, Thamel, Thimi, Boudha, Kirtipur, Tangal and Maharajgunj. After these eight branches we will open 1 branch in Kathmandu Valley and two other in other districts of Nepal. "
        buttonText="View project"
        buttonLink="https://www.instagram.com/influencer_meet_beta?igsh=dHhycXRqaGg1cGhn"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-6"
        sectionRef={projectSix}
        visible={visibleSections.includes(projectSix.current)}
        index={6}
        title="UpSkilling For Stater(SunWay Collage Kathmandu)"
        description="Upskilling is a transformative Value-Added Program specifically designed for Sunway students, aimed at enhancing their skills and preparing them for future challenges in academics, careers, and beyond. Recognizing the importance of continual growth in a rapidly evolving world, this program equips students with practical knowledge and competencies that complement their formal education."
       
        model={{
          type: 'phone',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${SunWay1} 375w, ${SunWay1} 750w`,
              placeholder: SunWay1,
            },
            {
              srcSet: `${sunway2} 375w, ${sunway2} 750w`,
              placeholder: sunway2,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-7"
        sectionRef={ProjectSeven}
        visible={visibleSections.includes(projectSix.current)}
        index={7}
        title="Value Added Education(Softwarica College)"
        description="Upskilling is a transformative Value-Added Program specifically designed for Sunway students, aimed at enhancing their skills and preparing them for future challenges in academics, careers, and beyond. Recognizing the importance of continual growth in a rapidly evolving world, this program equips students with practical knowledge and competencies that complement their formal education."
       
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: `${softwarica} 800w, ${softwarica} 1920w`,
              placeholder: softwarica,
            },
          ],
        }}
      />

      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
