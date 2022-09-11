import React from 'react';
import PropTypes from 'prop-types';
import {
  IconAppStore,
  IconBookmark,
  IconCodepen,
  IconExternal,
  IconFolder,
  IconFork,
  IconGitHub,
  IconInstagram,
  IconLinkedin,
  IconLoader,
  IconLogo,
  IconPlayStore,
  IconStar,
  IconTwitter,
  IconSM,
  IconGatsby,
  IconTypeScript,
  IconPython,
  IconHtml,
  IconCss,
  IconR,
  IconGraphQL,
  IconPostgreSQL,
  IconGit,
  IconElasticSearch,
  IconReact,
  IconAngular,
  IconTableau,
} from '@components/icons';

const Icon = ({ name }) => {
  switch (name) {
    case 'AppStore':
      return <IconAppStore />;
    case 'Bookmark':
      return <IconBookmark />;
    case 'Codepen':
      return <IconCodepen />;
    case 'External':
      return <IconExternal />;
    case 'Folder':
      return <IconFolder />;
    case 'Fork':
      return <IconFork />;
    case 'GitHub':
      return <IconGitHub />;
    case 'Instagram':
      return <IconInstagram />;
    case 'Linkedin':
      return <IconLinkedin />;
    case 'Loader':
      return <IconLoader />;
    case 'Logo':
      return <IconLogo />;
    case 'PlayStore':
      return <IconPlayStore />;
    case 'Star':
      return <IconStar />;
    case 'Twitter':
      return <IconTwitter />;
    case 'Sanzio':
      return <IconSM />;
    case 'Gatsby':
      return <IconGatsby />;
    case 'TypeScript':
      return <IconTypeScript />;
    case 'Python':
      return <IconPython />;
    case 'HTML':
      return <IconHtml />;
    case 'CSS':
      return <IconCss />;
    case 'R':
      return <IconR />;
    case 'GraphQL':
      return <IconGraphQL />;
    case 'PostgreSQL':
      return <IconPostgreSQL />;
    case 'Git':
      return <IconGit />;
    case 'Elasticsearch':
      return <IconElasticSearch />;
    case 'React':
      return <IconReact />;
    case 'Angular':
      return <IconAngular />;
    case 'Tableau':
      return <IconTableau />;
    default:
      return <IconExternal />;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
