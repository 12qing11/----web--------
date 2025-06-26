// src/app/exercises/page.js
import ExerciseCard from '@/components/ExerciseCard';
import exercises from '@/data/exercises.json';

export default function ExercisesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            《Web前端开发》课程练习列表
          </h1>
          <p className="text-lg text-slate-600">
            这里展示了所有的课程练习。
          </p>
        </header>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              title={exercise.title}
              description={exercise.description}
              imageUrl={exercise.imageUrl}
              link={exercise.link}
              tags={exercise.tags}
            />
          ))}
        </div>
      </main>
    </div>
  );
}