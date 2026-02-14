import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { questions } from '../data/questions';
import { calculateAssessment, type AssessmentResult, type AnswerMap } from '../utils/riskCalculator';

interface AssessmentState {
    // Current state
    currentQuestion: number;
    answers: AnswerMap;
    goalType: string;
    isCompleted: boolean;
    results: AssessmentResult | null;

    // Actions
    setAnswer: (questionId: number, score: number) => void;
    nextQuestion: () => void;
    prevQuestion: () => void;
    goToQuestion: (questionId: number) => void;
    setGoalType: (goal: string) => void;
    calculateResults: () => { success: boolean; error?: string };
    setResults: (results: AssessmentResult) => void;
    resetAssessment: () => void;
    getProgress: () => { percentage: number; answeredCount: number; totalCount: number };
}

const useAssessmentStore = create<AssessmentState>()(
    persist(
        (set, get) => ({
            currentQuestion: 1,
            answers: {},
            goalType: 'retirement',
            isCompleted: false,
            results: null,

            setAnswer: (questionId: number, score: number) => {
                set((state) => ({
                    answers: { ...state.answers, [questionId]: score },
                }));
            },

            nextQuestion: () => {
                set((state) => {
                    const nextQ = Math.min(state.currentQuestion + 1, questions.length);
                    return { currentQuestion: nextQ };
                });
            },

            prevQuestion: () => {
                set((state) => {
                    const prevQ = Math.max(state.currentQuestion - 1, 1);
                    return { currentQuestion: prevQ };
                });
            },

            goToQuestion: (questionId: number) => {
                if (questionId >= 1 && questionId <= questions.length) {
                    set({ currentQuestion: questionId });
                }
            },

            setGoalType: (goal: string) => {
                set({ goalType: goal });
            },

            calculateResults: () => {
                const { answers, goalType } = get();
                const answeredCount = Object.keys(answers).length;

                // Check if all questions are answered
                if (answeredCount < questions.length) {
                    return {
                        success: false,
                        error: `Please answer all questions. ${answeredCount}/${questions.length} completed.`,
                    };
                }

                try {
                    const results = calculateAssessment(answers, goalType);
                    set({ results, isCompleted: true });
                    return { success: true };
                } catch (error) {
                    return {
                        success: false,
                        error: 'Error calculating results. Please try again.',
                    };
                }
            },

            setResults: (results: AssessmentResult) => {
                set({ results, isCompleted: true });
            },

            resetAssessment: () => {
                set({
                    currentQuestion: 1,
                    answers: {},
                    goalType: 'retirement',
                    isCompleted: false,
                    results: null,
                });
            },

            getProgress: () => {
                const { answers } = get();
                const answeredCount = Object.keys(answers).length;
                const totalCount = questions.length;
                const percentage = Math.round((answeredCount / totalCount) * 100);

                return { percentage, answeredCount, totalCount };
            },
        }),
        {
            name: 'risk-assessment-storage',
            partialize: (state) => ({
                answers: state.answers,
                goalType: state.goalType,
                currentQuestion: state.currentQuestion,
                isCompleted: state.isCompleted,
                results: state.results,
            }),
        }
    )
);

export default useAssessmentStore;
