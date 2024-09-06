export async function fetchProjectProps() {
    const res = await fetch('/.netlify/functions/projects');
    const projects = await res.json();
    return {
        props: {
            projects
        },
    };
}