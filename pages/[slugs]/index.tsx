import ProjectTaskTemplate from '@/components/Templates/ProjectTask';
import { GetStaticProps } from 'next';

interface ProjectTaskProps {
  pageTemplate: 'task' | 'project';

}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slugs: 'tasks' } },
      { params: { slugs: 'projects' } },
    ],
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async({ params }) => {
  try {
    const slug = params?.slugs as string
    const isTasksSlug = slug.includes('tasks');

    if (isTasksSlug) {
      return {
        props: {
          pageTemplate: 'task',
        },
      };
    } else {
      return {
        props: {
          pageTemplate: 'project',
        },
      };
    }
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);

    return {
      notFound: true,
    };
  }
}

export default function ProjectTask({ pageTemplate }: ProjectTaskProps) {
  return pageTemplate === 'task'? <ProjectTaskTemplate text='TASKS' filters={[
    { title: 'Project', values: ['setProjects'] },
    { title: 'Due Date', values: 'colocar cant de dias' },
    { title: 'Status', values: ['Completed', 'In Progress', 'Pending'] },
    { title: 'Search with key words', values: 'escriba aquí ...' },
  ]} elements={[
    {
      title: 'test',
      value: 'titlevalue',
    },
    {
      title: 'test2',
      value: 'titlevalue',
    },
    {
      title: 'test3',
      value: 10,
    },
  ]}></ProjectTaskTemplate> : <ProjectTaskTemplate text='PROJECTS' filters={[
    { title: 'Task', values: ['setTasks'] },
    { title: 'Due Date', values: 'colocar cant de dias' },
    { title: 'Status', values: ['Completed', 'In Progress', 'Pending'] },
    { title: 'Search with key words', values: 'escriba aquí ...' },
  ]} elements={[
    {
      title: 'test',
      value: 'titlevalue',
    },
    {
      title: 'test2',
      value: 'titlevalue',
    },
    {
      title: 'test3',
      value: 10,
    },
  ]}></ProjectTaskTemplate>
}
