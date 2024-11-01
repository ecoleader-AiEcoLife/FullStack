'use client';
import useTodoStore from '@/store/todoStore';
import { useState, FormEvent } from 'react';

export default function AddTodoForm() {
  const [text, setText] = useState<string>('');
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='w-full max-w-md mx-auto mb-2'>
      <div className='flex items-center border-2 rounded-md border-blue-500 p-1 mt-2'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder='검색하고 싶은 재활용품을 담아보세요.'
          className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
        />
        <button
          type='submit'
          className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
        >
          담기
        </button>
      </div>
    </form>
  );
}
