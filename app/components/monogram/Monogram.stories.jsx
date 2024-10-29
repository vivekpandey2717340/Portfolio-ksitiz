import React from 'react';
import { Monogram } from '~/components/monogram';
import { StoryContainer } from '../../../.storybook/story-container';
import logoPath from '~/app/assets/logo.png'; // Adjust the path as necessary

export default {
  title: 'Monogram',
};

export const Default = () => (
  <StoryContainer>
    <Monogram highlight />
  </StoryContainer>
);

export const WithLogo = () => (
  <StoryContainer>
    <Monogram highlight logo={logoPath} />
  </StoryContainer>
);
