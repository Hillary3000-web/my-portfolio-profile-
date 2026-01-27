import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Plus, Check, Trash2, ClipboardList } from 'lucide-react';
import styles from './TaskManager.module.css';

const STORAGE_KEY = 'portfolio-tasks';

export default function TaskManager() {
    const [tasks, setTasks] = useState(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        return stored ? JSON.parse(stored) : [
            { id: 1, text: 'Review portfolio design', completed: true, date: '2026-01-25' },
            { id: 2, text: 'Update project screenshots', completed: false, date: '2026-01-26' },
            { id: 3, text: 'Apply to tech companies', completed: false, date: '2026-01-27' },
            { id: 4, text: 'Practice coding interviews', completed: false, date: '2026-01-27' },
        ];
    });
    const [newTask, setNewTask] = useState('');
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;

        const task = {
            id: Date.now(),
            text: newTask.trim(),
            completed: false,
            date: new Date().toISOString().split('T')[0]
        };
        setTasks(prev => [task, ...prev]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(prev => prev.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id));
    };

    const filteredTasks = tasks.filter(task => {
        if (filter === 'active') return !task.completed;
        if (filter === 'completed') return task.completed;
        return true;
    });

    const completedCount = tasks.filter(t => t.completed).length;
    const totalCount = tasks.length;

    return (
        <div className={styles.taskManager}>
            <header className={styles.header}>
                <Link to="/" className={styles.backButton}>
                    <ArrowLeft size={18} />
                    Back to Portfolio
                </Link>
                <motion.h1
                    className={styles.title}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Task Manager
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Stay organized and boost your productivity
                </motion.p>
            </header>

            <div className={styles.container}>
                {/* Add Task Form */}
                <motion.form
                    className={styles.addTaskForm}
                    onSubmit={addTask}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <input
                        type="text"
                        className={styles.taskInput}
                        placeholder="What needs to be done?"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <motion.button
                        type="submit"
                        className={styles.addButton}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Plus size={20} />
                        Add
                    </motion.button>
                </motion.form>

                {/* Filter Tabs */}
                <motion.div
                    className={styles.filterTabs}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    {['all', 'active', 'completed'].map((f) => (
                        <button
                            key={f}
                            className={`${styles.filterTab} ${filter === f ? styles.active : ''}`}
                            onClick={() => setFilter(f)}
                        >
                            {f.charAt(0).toUpperCase() + f.slice(1)}
                        </button>
                    ))}
                </motion.div>

                {/* Task List */}
                <motion.div
                    className={styles.taskList}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredTasks.length === 0 ? (
                            <motion.div
                                className={styles.emptyState}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                            >
                                <ClipboardList size={48} className={styles.emptyIcon} />
                                <h3 className={styles.emptyTitle}>No tasks yet</h3>
                                <p className={styles.emptyText}>Add your first task to get started!</p>
                            </motion.div>
                        ) : (
                            filteredTasks.map((task) => (
                                <motion.div
                                    key={task.id}
                                    className={`${styles.taskItem} ${task.completed ? styles.completed : ''}`}
                                    layout
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 20, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <motion.div
                                        className={`${styles.checkbox} ${task.completed ? styles.checked : ''}`}
                                        onClick={() => toggleTask(task.id)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        {task.completed && <Check size={16} />}
                                    </motion.div>
                                    <div className={styles.taskContent}>
                                        <span className={styles.taskText}>{task.text}</span>
                                        <div className={styles.taskDate}>{task.date}</div>
                                    </div>
                                    <motion.button
                                        className={styles.deleteButton}
                                        onClick={() => deleteTask(task.id)}
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <Trash2 size={16} />
                                    </motion.button>
                                </motion.div>
                            ))
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Stats Bar */}
                {tasks.length > 0 && (
                    <motion.div
                        className={styles.statsBar}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{totalCount}</div>
                            <div className={styles.statLabel}>Total Tasks</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{completedCount}</div>
                            <div className={styles.statLabel}>Completed</div>
                        </div>
                        <div className={styles.stat}>
                            <div className={styles.statValue}>{totalCount - completedCount}</div>
                            <div className={styles.statLabel}>Remaining</div>
                        </div>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
