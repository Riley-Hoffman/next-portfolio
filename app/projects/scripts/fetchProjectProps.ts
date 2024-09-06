export async function fetchProjectProps() {
    const response = await fetch('http://localhost:8888/.netlify/functions/projects-mysql');
    
    if (!response.ok) {
      console.error('Failed to fetch projects:', response.statusText);
      return {
        notFound: true,
      };
    }
  
    const projects = await response.json();
    console.log('fetchProjectProps', projects)
  
    return {
      props: {
        projects,
      },
    };
  }
  