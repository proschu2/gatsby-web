import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { Icon } from '@components/icons';

const StyledSkillsSection = styled.section`
  max-width: 1000px;
    @media (max-width: 768px) {
      display: block;
    }
  }
`;

const Skill = styled.li`
  display: flex;
  align-items: center;
  border: 1px solid var(--light-slate);
  border-radius: 0.75rem;
  color: #fff;
  font-size: var(--fz-sm);
  margin: 0.5rem;
  overflow: hidden;
`;

const SkillIcon = styled.div`
  width: 3.5rem;
  padding: 1rem;
  height: 3.5rem;
  overflow: hidden;
`;

const SkillName = styled.p`
  padding-left: 1rem;
  padding-right: 1rem;
  line-height: 1.25rem;
  margin: 0;
  padding-top: 5px;
`;

const SkillsContainer = styled.ul`
  margin-left: auto;
  margin-right: auto;
  max-width: 48rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  display: flex;
`;

const Skills = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'Python',
    'R',
    'TypeScript',
    'GraphQL',
    'React',
    'Gatsby',
    'Angular',
    'HTML',
    'CSS',
    'PostgreSQL',
    'Git',
    'Elasticsearch',
  ];

  return (
    <StyledSkillsSection id="skills" ref={revealContainer}>
      <h2 className="numbered-heading">Skills</h2>
      <SkillsContainer>
        {skills &&
          skills.map((s, k) => (
            <Skill key={k}>
              <SkillIcon>
                <Icon name={s} />
              </SkillIcon>
              <SkillName>{s}</SkillName>
            </Skill>
          ))}
      </SkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
