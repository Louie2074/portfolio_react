import Card from '../Card';
export default function Experience() {
  const jobs = [
    {
      company: 'Expedia Group',
      startDate: 'May 2023',
      endDate: 'July 2023',
      position: 'Software Engineering Intern',
      description:
        'Performed as a full stack engineer, tasked with developing a fast realtime data analytics dashboard',
      skills: ['React', 'JavaScript', 'TypeScript', 'PHP'],
    },
    {
      company: 'Thomson Reuters',
      startDate: 'May 2022',
      endDate: 'August 2022',
      position: 'Software Engineering Intern',
      description:
        'Performed as a full stack engineer, tasked with developing a law library',
      skills: ['React', 'JavaScript', 'TypeScript', 'JQuery'],
    },
    {
      company: 'University of Wisconsin - Madison',
      startDate: 'May 2022',
      endDate: 'August 2022',
      position: 'Computer Science Tutor',
      description:
        'Performed as a full stack engineer, tasked with developing a law library',
      skills: ['React', 'JavaScript', 'TypeScript', 'JQuery'],
    },
  ];
  return (
    <div className="body-content Experience">
      {jobs.map((val, index) => (
        <Card key = {index} {...val} />
      ))}
    </div>
  );
}
