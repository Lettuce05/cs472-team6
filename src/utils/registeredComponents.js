import ServiceWrapper from "../components/ServiceWrapper/ServiceWrapper";
import ServiceWrapperPreview from "../components/ServiceWrapper/ServiceWrapperPreview.png";
import ServiceWrapperOptions from "../components/ServiceWrapper/ServiceWrapperOptions";
import {BannerComponent} from '../components/Banner/BannerComponent';
import EducationWorkExperience from "../components/EducationAndWork/EducationAndWork";
import EducationWorkExperienceOptions from "../components/EducationAndWork/EducationAndWorkOptions";
import EducationWorkExperiencePreview from "../components/EducationAndWork/EducationAndWorkDark.png";
import Skills from "../components/Skills/Skills";
import SkillsOptions from "../components/Skills/SkillsOptions";
import SkillsPreview from "../components/Skills/SkillsDark.png";
import Component from "../models/Component";
import { Gradients } from "./utils";
import {CtaSectionComponent} from "../components/CtaSection/CtaSectionComponent";
import { StatsWrapperComponent } from "../components/StatsWrapper/StatsWrapperComponent";

export const registeredComponents = new Map([
    ['Service Wrapper', new Component('Service Wrapper', ServiceWrapper, ServiceWrapperOptions, ServiceWrapperPreview, {Title: 'Web Design', Text: "Nam quis nulla. Integer malesuada. In in enim a arcu imperdiet malesuada. Sed vel lectus. Donec odio urna, tempus molestie, porttitor ut, iaculis quis, sem. Phasellus rhoncus. Aenean id metus id velit ullamcorper pulvinar. Vestibulum fermentum tortor id m", ButtonText: "Contact Me", ButtonLink: "https://www.google.com/", gradient: Gradients.default, ImageLink: "https://i.imgur.com/0vBgKva.jpeg", Invert: "Image Left"})],
    ['Banner', BannerComponent],
    ['CtaSection', CtaSectionComponent],
    ['Stats Section', StatsWrapperComponent],
    [
        'Education and Work',
        new Component(
          'Education and Work',
          EducationWorkExperience,
          EducationWorkExperienceOptions,
          EducationWorkExperiencePreview,
          {
            school1: 'School 1; Degree; Date',
            school2: 'School 2; Degree; Date',
            school3: 'School 3; Degree; Date',
            job1: 'Company 1; Title; Date',
            job2: 'Company 2; Title; Date',
            job3: 'Company 3; Title; Date',
            gradient: Gradients.default
          }
        )
    ],
    [
      'Skills',
      new Component(
        'Skills',
        Skills,
        SkillsOptions,
        SkillsPreview,
        {
          title: 'What I Do.',
          skillsList: [
            {name: "Figma", files:  "", image: "/src/components/Skills/SampleLogos/figma.png"},
            {name: "Photoshop", files:  "", image: "/src/components/Skills/SampleLogos/photoshop.png"},
            {name: "HTML", files:  "", image: "/src/components/Skills/SampleLogos/html.png"},
            {name: "Webflow", files:  "", image: "/src/components/Skills/SampleLogos/webflow.png"},
            {name: "SEQ", files:  "", image: "/src/components/Skills/SampleLogos/seo.png"}
          ]
        }
      )
    ]
]);