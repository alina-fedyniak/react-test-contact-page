import { DiscordIcon, InstagramIcon, TwitterIcon } from '@/assets/svg';
import React from 'react';

const SOCIAL_LINKS = {
  DISCORD: 'https://discord.com/',
  TWITTER: 'https://twitter.com',
  INSTAGRAM: 'https://www.instagram.com',
};

export const socialsLinks: Array<{ logo: JSX.Element; link: string }> = [
  {
    logo: <TwitterIcon />,
    link: SOCIAL_LINKS.TWITTER,
  },
  {
    logo: <InstagramIcon />,
    link: SOCIAL_LINKS.INSTAGRAM,
  },
  {
    logo: <DiscordIcon />,
    link: SOCIAL_LINKS.DISCORD,
  },
];
