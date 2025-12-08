import { FC, PropsWithChildren } from "react";
import { HeroProps } from "@/schema/types";
import clsxm from "@/lib/clsxm";
import { NextImage } from "@/ui/NextImage";
import {
  CloudinaryImage,
  CloudinaryImage as CloudinaryImageComponent,
} from "@/ui/CloudinaryImage";
import { Container } from "@/ui/Container";
import { HeroSlider } from "../hero-slider/Slider";

const isImageHero = (props: HeroProps) => {
  console.log("isImageHero", !!props.image && !props.cloudinaryImage);
  return !!props.image && !props.cloudinaryImage;
};

const isSliderHero = (props: HeroProps) => {
  console.log(
    "isSliderHero",
    !!props.sliderCollection && !!props.sliderCollection?.items.length
  );
  return !!props.sliderCollection && !!props.sliderCollection?.items.length;
};

const isCloudinaryImageHero = (props: HeroProps) => {
  console.log("isCloudinaryImageHero", props);
  return props.cloudinaryImage !== undefined;
};

const LandingPageHeroContainer: FC<
  PropsWithChildren<Pick<HeroProps, "title">>
> = ({ children, title }) => {
  return (
    <Container
      className={clsxm(
        "relative rounded lg:grid lg:grid-cols-12 px-0 lg:pb-16 lg:mb-16",
        "md:aspect-[2/1]"
      )}
    >
      <div className="overflow-hidden rounded lg:relative lg:h-[512px] xl:h-[640px] 2xl:h-[768px] lg:col-start-1 lg:col-end-13 shadow-xl lg:shadow-slate-500">
        {children}
      </div>
      <div className="rounded bg-primary shadow-xl shadow-slate-500 opacity-90 -mt-12 mx-8 mb-16 lg:absolute lg:left-auto lg:right-[-2rem] lg:bottom-0 lg:pr-2 lg:m-0 lg:w-[50rem]">
        <h1
          className={clsxm(
            "p-8 lg:p-8 xl:p-12 2xl:p-16",
            "overflow-hidden text-white text-center text-xl lg:text-left lg:text-3xl font-title leading-relaxed lg:leading-tight"
          )}
        >
          {title}
        </h1>
      </div>
    </Container>
  );
};

const ImageHero: FC<Pick<HeroProps, "image">> = ({ image }) => {
  return (
    <NextImage
      src={image.url}
      width={image.width}
      height={image.height}
      alt={image.description}
      priority={true}
      className={clsxm(
        "aspect-square md:aspect-[2/1] object-cover object-center"
      )}
      sizes="(min-width: 90em) 90rem, 100vw"
    />
  );
};

export const LandingPageHero: FC<HeroProps> = (props) => {
  const { title, cloudinaryImage, sliderCollection } = props;
  if (isImageHero(props)) {
    return (
      <LandingPageHeroContainer title={title}>
        <ImageHero {...props} />
      </LandingPageHeroContainer>
    );
  }
  if (isSliderHero(props)) {
    return (
      <LandingPageHeroContainer title={title}>
        {sliderCollection && <HeroSlider items={sliderCollection.items} />}
      </LandingPageHeroContainer>
    );
  }
  if (isCloudinaryImageHero(props)) {
    const cldImage = cloudinaryImage?.[0];
    if (!cldImage) {
      return null;
    }
    return (
      <LandingPageHeroContainer title={title}>
        <CloudinaryImage
          url={cldImage.url}
          publicId={cldImage.public_id}
          width={cldImage.width}
          height={cldImage.height}
          alt=""
          priority={true}
          className={clsxm(
            "aspect-square md:aspect-[2/1] object-cover object-center"
          )}
        />
      </LandingPageHeroContainer>
    );
  }
  return null;
};
