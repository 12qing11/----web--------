import ExerciseDetail from '@/components/ExerciseDetail';

export default function ExercisePage({ params }) {
  return <ExerciseDetail slug={params.slug} />;
}