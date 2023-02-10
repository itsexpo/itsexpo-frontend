import NextImage from '@/components/NextImage';
import { ExtractProps } from '@/types/helper';

type NextImageProps = ExtractProps<typeof NextImage>;

interface IHeroIllustration {
  pattern: NextImageProps;
  bgLeft: NextImageProps;
  bgRight: NextImageProps;
  figureLeft: NextImageProps;
  figureRight: NextImageProps;
  birdLeft: NextImageProps;
  birdRight: NextImageProps;
  cloudLeft: NextImageProps;
  cloudRight: NextImageProps;
  cloudsLeft: NextImageProps;
  cloudsRight: NextImageProps;
  particlesLeft: NextImageProps;
  particlesRight: NextImageProps;
}

interface ITimelineIllustration {
  bgDesktop: NextImageProps;
  bgMobile: NextImageProps;
  bgLeft: NextImageProps;
  bgRight: NextImageProps;
  bottom0: NextImageProps;
  bottom1: NextImageProps;
  bottom2: NextImageProps;
  bottom3: NextImageProps;
  bottom4: NextImageProps;
  bottom5: NextImageProps;
}

const landingHeroIllustration: IHeroIllustration = {
  pattern: {
    src: '/landing/hero-pattern.png',
    alt: 'pattern illustration',
    width: '1440',
    height: '88',
  },
  bgLeft: {
    src: '/landing/hero-bg-left.png',
    alt: 'landing hero left background',
    width: '720',
    height: '690',
  },
  bgRight: {
    src: '/landing/hero-bg-right.png',
    alt: 'landing hero right background',
    width: '720',
    height: '675',
  },
  figureLeft: {
    src: '/landing/hero-figure-left.png',
    alt: 'landing hero left figure',
    width: '720',
    height: '457',
  },
  figureRight: {
    src: '/landing/hero-figure-right.png',
    alt: 'landing hero right figure',
    width: '720',
    height: '462',
  },
  birdLeft: {
    src: '/landing/hero-bird-left.png',
    alt: 'landing hero left figure',
    width: '720',
    height: '607',
  },
  birdRight: {
    src: '/landing/hero-bird-right.png',
    alt: 'landing hero right figure',
    width: '720',
    height: '604',
  },
  cloudLeft: {
    src: '/landing/hero-cloud-left.png',
    alt: 'landing hero left figure',
    width: '195',
    height: '135',
  },
  cloudRight: {
    src: '/landing/hero-cloud-right.png',
    alt: 'landing hero right figure',
    width: '195',
    height: '141',
  },
  cloudsLeft: {
    src: '/landing/hero-clouds-left.png',
    alt: 'landing hero left figure',
    width: '720',
    height: '618',
  },
  cloudsRight: {
    src: '/landing/hero-clouds-right.png',
    alt: 'landing hero right figure',
    width: '720',
    height: '618',
  },
  particlesLeft: {
    src: '/landing/hero-particles-left.png',
    alt: 'landing hero particles',
    width: '720',
    height: '170',
  },
  particlesRight: {
    src: '/landing/hero-particles-right.png',
    alt: 'landing hero particles',
    width: '720',
    height: '617',
  },
};

const landingTimelineIllustration: ITimelineIllustration = {
  bgDesktop: {
    src: '/landing/timeline-bg-desktop.png',
    alt: 'timeline desktop background',
    width: '665',
    height: '2000',
  },
  bgMobile: {
    src: '/landing/timeline-bg-mobile.png',
    alt: 'timeline mobile background',
    width: '390',
    height: '1116',
  },
  bgLeft: {
    src: '/landing/timeline-bg-left.png',
    alt: 'timeline left background',
    width: '363',
    height: '1294',
  },
  bgRight: {
    src: '/landing/timeline-bg-right.png',
    alt: 'timeline right background',
    width: '535',
    height: '754',
  },
  bottom0: {
    src: '/landing/timeline-illustration-0.png',
    alt: 'timeline bottom illustration',
    width: '2880',
    height: '1522',
  },
  bottom1: {
    src: '/landing/timeline-illustration-1.png',
    alt: 'timeline bottom illustration',
    width: '2880',
    height: '1522',
  },
  bottom2: {
    src: '/landing/timeline-illustration-2.png',
    alt: 'timeline bottom illustration',
    width: '2879',
    height: '718',
  },
  bottom3: {
    src: '/landing/timeline-illustration-3.png',
    alt: 'timeline bottom illustration',
    width: '2880',
    height: '554',
  },
  bottom4: {
    src: '/landing/timeline-illustration-4.png',
    alt: 'timeline bottom illustration',
    width: '2880',
    height: '1219',
  },
  bottom5: {
    src: '/landing/timeline-illustration-5.png',
    alt: 'timeline bottom illustration',
    width: '2880',
    height: '497',
  },
};

export { landingHeroIllustration, landingTimelineIllustration };
