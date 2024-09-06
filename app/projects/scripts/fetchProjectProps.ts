export async function fetchProjectProps() {
    const res = await fetch('/.netlify/functions/projects-mysql');
    const projects = await res.json();
    return {
        props: {
            projects
        },
    };
}