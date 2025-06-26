'use client';
import { useEffect, useState } from 'react';
import exercises from '@/data/exercises.json';

// 定义一个对象，用于存储每个练习的详细知识点内容
const exerciseKnowledge = {
  'html-basics': `
    **HTML 基础结构练习知识点**:
    - HTML 文档的基本结构，包括 <!DOCTYPE html> 声明、<html>、<head> 和 <body> 标签。
    - 常用的 HTML 标签，如 <h1> - <h6> 标题标签、<p> 段落标签、<a> 链接标签等。
    - 如何设置页面的标题、元数据和字符编码。
  `,
  'css-layout': `
    **CSS 盒模型与布局知识点**:
    - CSS 盒模型的组成,包括内容区(content)、内边距(padding)、边框(border)和外边距(margin)。
    - 使用 Flexbox 进行灵活的一维布局，如 justify-content、align-items 等属性的使用。
    - 使用 Grid 进行强大的二维布局，如 grid-template-columns、grid-template-rows 等属性的使用。
  `,
  'js-dom': `
    **JavaScript DOM 操作知识点**:
    - 如何通过 document 对象获取 DOM 元素，如 getElementById、querySelector 等方法。
    - 如何修改 DOM 元素的内容、属性和样式，如 innerHTML、style 属性等。
    - 如何添加、删除和修改 DOM 元素，如 appendChild、removeChild 等方法。
    - 如何处理 DOM 事件，如 click、keydown 等事件的监听。
  `,
  'react-components': `
    **React 组件化开发知识点**:
    - React 组件的基本概念，包括函数组件和类组件。
    - 组件的状态(state)和属性(props)的使用。
    - 组件的生命周期方法（类组件）或 Hooks(函数组件)的使用。
    - 如何进行组件的嵌套和组合。
  `,
  'nextjs-core': `
    **Next.js 核心概念知识点**:
    - Next.js 的页面路由系统，包括静态路由和动态路由。
    - API 路由的使用，用于创建服务器端 API。
    - 静态生成(SSG)和服务器端渲染(SSR)的原理和使用场景。
    - 如何进行数据获取和预渲染。
  `
};

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
      {/* Node.js 是一个基于 Chrome V8 引擎的 JavaScript 运行环境，它让 JavaScript 可以运行在服务器端，同时增加了JavaScript没有的功能，如文件操作、网络请求等。这里添加具体的学习卡片内容 */}
      <p>这里可以参考更多相关知识：<a href="https://fe.yangzh.cn/nodejs/01-nodejs/" target="_blank" rel="noopener noreferrer">示例链接</a></p>
    </div>
  );
}