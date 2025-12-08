import { FC } from "react";
import { HeroProps, HeroType } from "@/schema/types";
import { LandingPageHero } from "./components/landing-page-hero/LandingPageHero";
import { TopicPageHero } from "./components/topic-page-hero/TopicPageHero";

export const Hero: FC<{ type: HeroType } & HeroProps> = (props) => {
  if (props.type === "Landing") {
    return <LandingPageHero {...props} />;
  }

  if (props.type === "Topic") {
    return <TopicPageHero {...props} />;
  }
};
