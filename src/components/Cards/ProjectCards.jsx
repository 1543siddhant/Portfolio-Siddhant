import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 300px;
  background: ${({ theme }) => theme.card};
  border: 1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 180px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 10px;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 10px;
  gap: 8px;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 12px;
  padding: 4px 8px;
  font-size: 12px;
`;

const Details = styled.div`
  margin-top: 10px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.text_primary};
`;

const Date = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.text_secondary};
`;

const Members = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 10px;
`;

const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const GithubButton = styled.a`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary_dark};
  }
`;

const ProjectCards = ({ project, setOpenModal }) => {
  const handleClick = (e) => {
    // Prevent the modal from opening when the GitHub button is clicked
    if (e.target.tagName === 'A') {
      e.stopPropagation();
    } else {
      setOpenModal({ state: true, project: project });
    }
  };

  return (
    <Card onClick={handleClick}>
      <Image src={project.image} />
      <Tags>
        {project.tags?.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>
      <Details>
        <Title>{project.title}</Title>
        <Date>{project.date}</Date>
        <Description>{project.description}</Description>
      </Details>
      <Members>
        {project.member?.map((member, index) => (
          <Avatar key={index} src={member.img} />
        ))}
      </Members>
      <GithubButton
        href={project.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()} // Prevent card click
      >
        View on GitHub
      </GithubButton>
    </Card>
  );
};

export default ProjectCards;
