'use client';
import { useEffect, useState } from 'react';
import exercises from '@/data/exercises.json';

export default function ExerciseDetail({ slug }) {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const found = exercises.find(e => e.link === `/exercises/${slug}`);
    setExercise(found);
  }, [slug]);

  if (!exercise) return <div>加载中...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{exercise.title}</h1>
      {/* 这里添加具体的学习卡片内容 */}
    </div>
  );
}