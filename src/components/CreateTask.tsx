import React, { useState } from 'react';
import { Priority, useTask } from '@/contexts/TaskContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, X, Calendar, Tag } from 'lucide-react';
import { toast } from 'sonner';

export function CreateTask() {
  const { addTask } = useTask();
  const [isExpanded, setIsExpanded] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const [dueDate, setDueDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [newTag, setNewTag] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Please enter a task title');
      return;
    }

    addTask({
      title: title.trim(),
      description: description.trim(),
      priority,
      completed: false,
      dueDate: dueDate ? new Date(dueDate) : undefined,
      tags,
    });

    toast.success('Task created successfully');
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
    setTags([]);
    setNewTag('');
    setIsExpanded(false);
  };

  return (
    <motion.div
      initial={false}
      animate={{ height: isExpanded ? 'auto' : '48px' }}
      className="rounded-lg border bg-card/50 backdrop-blur-sm shadow-lg overflow-hidden"
    >
      <AnimatePresence mode="wait">
        {!isExpanded ? (
          <motion.button
            key="create-button"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsExpanded(true)}
            className="flex w-full items-center gap-2 p-3 text-muted-foreground hover:text-foreground transition-colors group"
          >
            <div className="flex items-center gap-2 px-2">
              <motion.div
                animate={{ rotate: isExpanded ? 45 : 0 }}
                className="p-1 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors"
              >
                <Plus className="h-4 w-4 text-primary" />
              </motion.div>
              <span className="font-medium">Create new task</span>
            </div>
          </motion.button>
        ) : (
          <motion.div
            key="create-form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="p-4"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full rounded-md border bg-background/50 px-4 py-2 focus:ring-2 focus:ring-primary/20"
                autoFocus
              />

              <textarea
                placeholder="Task description (optional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full rounded-md border bg-background/50 px-4 py-2 min-h-[100px] resize-none focus:ring-2 focus:ring-primary/20"
              />

              <div className="flex flex-col md:flex-row md:items-center md:gap-4">
                <div className="flex-1 space-y-2">
                  <label className="block text-sm font-medium">Priority</label>
                  <div className="flex gap-2">
                    {(['low', 'medium', 'high'] as Priority[]).map((p) => (
                      <button
                        key={p}
                        type="button"
                        onClick={() => setPriority(p)}
                        className={`flex-1 px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                          priority === p
                            ? p === 'high'
                              ? 'bg-red-500 text-white'
                              : p === 'medium'
                              ? 'bg-yellow-500 text-white'
                              : 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                      >
                        {p.charAt(0).toUpperCase() + p.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <label className="block text-sm font-medium">Due Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
                    <input
                      type="date"
                      value={dueDate}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="w-full rounded-md border bg-background/50 pl-10 pr-4 py-1.5 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-gray-900"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 focus:ring-2 focus:ring-primary/20"
                >
                  Create Task
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
