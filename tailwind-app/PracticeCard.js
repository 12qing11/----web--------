// src/components/PracticeCard.js (初始版本，可能带内联样式)
export default function PracticeCard({ title, description, date, completed }) {
    return (
      <div className="practice-card" style={{ border: `2px solid ${completed ? 'green' : '#eee'}`, padding: '16px', margin: '10px 0', borderRadius: '8px' }}>
        <h2>{title}</h2>
        <p>{description}</p>
        <p>日期: {date}</p>
        <p>状态: {completed ? '已完成' : '未完成'}</p>
      </div>
    );
  }