import React from 'react';
import styled from 'styled-components';

const Blog = () => {
  return (
    <Container>
      <Title>Blog</Title>
      <BlogGrid>
        <BlogPost>
          <PostImage src="https://via.placeholder.com/400x250" alt="Blog post" />
          <PostContent>
            <PostDate>March 15, 2024</PostDate>
            <PostTitle>The Future of AI Video Generation</PostTitle>
            <PostExcerpt>Exploring the latest trends in AI-powered video creation...</PostExcerpt>
          </PostContent>
        </BlogPost>
        <BlogPost>
          <PostImage src="https://via.placeholder.com/400x250" alt="Blog post" />
          <PostContent>
            <PostDate>March 10, 2024</PostDate>
            <PostTitle>Tips for Better AI Videos</PostTitle>
            <PostExcerpt>Learn how to create more engaging content...</PostExcerpt>
          </PostContent>
        </BlogPost>
      </BlogGrid>
    </Container>
  );
};


const Container = styled.div`
  min-height: 100vh;
  background: #000000;
  color: #ffffff;
  padding: 80px 24px;

  @media (max-width: 768px) {
    padding: 60px 16px;
  }
`;

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
  margin-bottom: 60px;
  color: #ffffff;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin-bottom: 32px;
  }
`;

const BlogGrid = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  padding: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
    padding: 10px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 5px;
  }
`;

const BlogPost = styled.div`
  background: #111111;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    border-radius: 8px;
    
    &:hover {
      transform: translateY(-5px);
    }
  }
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 160px;
  }
`;

const PostContent = styled.div`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const PostDate = styled.div`
  color: #4461F2;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
    margin-bottom: 8px;
  }
`;

const PostTitle = styled.h2`
  color: #ffffff;
  font-size: 24px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const PostExcerpt = styled.p`
  color: #a0a0a0;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 1.5;
  }
`;

export default Blog;