import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Delete } from 'lucide-react';
import styles from './Calculator.module.css';

export default function Calculator() {
    const [currentValue, setCurrentValue] = useState('0');
    const [previousValue, setPreviousValue] = useState('');
    const [operator, setOperator] = useState(null);
    const [waitingForOperand, setWaitingForOperand] = useState(false);
    const [history, setHistory] = useState([]);

    const inputDigit = (digit) => {
        if (waitingForOperand) {
            setCurrentValue(digit);
            setWaitingForOperand(false);
        } else {
            setCurrentValue(currentValue === '0' ? digit : currentValue + digit);
        }
    };

    const inputDecimal = () => {
        if (waitingForOperand) {
            setCurrentValue('0.');
            setWaitingForOperand(false);
            return;
        }
        if (!currentValue.includes('.')) {
            setCurrentValue(currentValue + '.');
        }
    };

    const clear = () => {
        setCurrentValue('0');
        setPreviousValue('');
        setOperator(null);
        setWaitingForOperand(false);
    };

    const toggleSign = () => {
        setCurrentValue(String(-parseFloat(currentValue)));
    };

    const inputPercent = () => {
        setCurrentValue(String(parseFloat(currentValue) / 100));
    };

    const performOperation = (nextOperator) => {
        const inputValue = parseFloat(currentValue);

        if (previousValue === '') {
            setPreviousValue(currentValue);
        } else if (operator) {
            const prevValue = parseFloat(previousValue);
            let result = prevValue;

            switch (operator) {
                case '+':
                    result = prevValue + inputValue;
                    break;
                case '-':
                    result = prevValue - inputValue;
                    break;
                case '×':
                    result = prevValue * inputValue;
                    break;
                case '÷':
                    result = inputValue !== 0 ? prevValue / inputValue : 'Error';
                    break;
                default:
                    break;
            }

            if (nextOperator === '=') {
                const historyEntry = `${previousValue} ${operator} ${currentValue} = ${result}`;
                setHistory(prev => [historyEntry, ...prev.slice(0, 4)]);
                setPreviousValue('');
            } else {
                setPreviousValue(String(result));
            }
            setCurrentValue(String(result));
        }

        setWaitingForOperand(true);
        setOperator(nextOperator === '=' ? null : nextOperator);
    };

    const backspace = () => {
        if (currentValue.length > 1) {
            setCurrentValue(currentValue.slice(0, -1));
        } else {
            setCurrentValue('0');
        }
    };

    const buttons = [
        { label: 'AC', type: 'function', action: clear },
        { label: '±', type: 'function', action: toggleSign },
        { label: '%', type: 'function', action: inputPercent },
        { label: '÷', type: 'operator', action: () => performOperation('÷') },
        { label: '7', type: 'number', action: () => inputDigit('7') },
        { label: '8', type: 'number', action: () => inputDigit('8') },
        { label: '9', type: 'number', action: () => inputDigit('9') },
        { label: '×', type: 'operator', action: () => performOperation('×') },
        { label: '4', type: 'number', action: () => inputDigit('4') },
        { label: '5', type: 'number', action: () => inputDigit('5') },
        { label: '6', type: 'number', action: () => inputDigit('6') },
        { label: '-', type: 'operator', action: () => performOperation('-') },
        { label: '1', type: 'number', action: () => inputDigit('1') },
        { label: '2', type: 'number', action: () => inputDigit('2') },
        { label: '3', type: 'number', action: () => inputDigit('3') },
        { label: '+', type: 'operator', action: () => performOperation('+') },
        { label: '0', type: 'number', wide: true, action: () => inputDigit('0') },
        { label: '.', type: 'number', action: inputDecimal },
        { label: '=', type: 'equals', action: () => performOperation('=') },
    ];

    const getButtonClass = (btn) => {
        let classes = styles.btn;
        if (btn.type === 'number') classes += ` ${styles.btnNumber}`;
        if (btn.type === 'operator') {
            classes += ` ${styles.btnOperator}`;
            if (operator === btn.label && waitingForOperand) classes += ` ${styles.active}`;
        }
        if (btn.type === 'function') classes += ` ${styles.btnFunction}`;
        if (btn.type === 'equals') classes += ` ${styles.btnEquals}`;
        if (btn.wide) classes += ` ${styles.btnWide}`;
        return classes;
    };

    const displayValue = currentValue.length > 12
        ? parseFloat(currentValue).toExponential(5)
        : currentValue;

    return (
        <div className={styles.calculator}>
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
                    Calculator
                </motion.h1>
                <motion.p
                    className={styles.subtitle}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                >
                    Sleek, modern, and functional
                </motion.p>
            </header>

            <motion.div
                className={styles.calcContainer}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
            >
                {/* Display */}
                <div className={styles.display}>
                    <div className={styles.previousValue}>
                        {previousValue} {operator}
                    </div>
                    <div className={styles.currentValue}>{displayValue}</div>
                </div>

                {/* Buttons */}
                <div className={styles.buttons}>
                    {buttons.map((btn, index) => (
                        <motion.button
                            key={index}
                            className={getButtonClass(btn)}
                            onClick={btn.action}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {btn.label}
                        </motion.button>
                    ))}
                </div>
            </motion.div>

            {/* History */}
            {history.length > 0 && (
                <motion.div
                    className={styles.history}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    <div className={styles.historyTitle}>Recent Calculations</div>
                    <div className={styles.historyList}>
                        {history.map((item, index) => (
                            <motion.div
                                key={index}
                                className={styles.historyItem}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                {item.split('=')[0]} = <span>{item.split('=')[1]}</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            )}
        </div>
    );
}
