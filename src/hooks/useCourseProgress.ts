import { useEffect, useState } from "react";

interface CourseProgress {
	completedModules: number[];
	currentModule: number;
	quizScores: Record<number, number>;
	startedAt?: string;
	completedAt?: string;
}

const STORAGE_PREFIX = "course_progress_";

export function useCourseProgress(courseId: string) {
	const [progress, setProgress] = useState<CourseProgress>(() => {
		if (typeof window === "undefined") {
			return {
				completedModules: [],
				currentModule: 0,
				quizScores: {},
			};
		}

		const stored = localStorage.getItem(`${STORAGE_PREFIX}${courseId}`);
		if (stored) {
			return JSON.parse(stored);
		}

		return {
			completedModules: [],
			currentModule: 0,
			quizScores: {},
			startedAt: new Date().toISOString(),
		};
	});

	useEffect(() => {
		if (typeof window !== "undefined") {
			localStorage.setItem(
				`${STORAGE_PREFIX}${courseId}`,
				JSON.stringify(progress),
			);
		}
	}, [courseId, progress]);

	const completeModule = (moduleIndex: number, quizScore?: number) => {
		setProgress((prev) => {
			const newCompletedModules = prev.completedModules.includes(moduleIndex)
				? prev.completedModules
				: [...prev.completedModules, moduleIndex].sort((a, b) => a - b);

			const newQuizScores = quizScore
				? { ...prev.quizScores, [moduleIndex]: quizScore }
				: prev.quizScores;

			return {
				...prev,
				completedModules: newCompletedModules,
				quizScores: newQuizScores,
			};
		});
	};

	const setCurrentModule = (moduleIndex: number) => {
		setProgress((prev) => ({
			...prev,
			currentModule: moduleIndex,
		}));
	};

	const completeCourse = (totalModules: number) => {
		if (progress.completedModules.length === totalModules) {
			setProgress((prev) => ({
				...prev,
				completedAt: new Date().toISOString(),
			}));
		}
	};

	const resetProgress = () => {
		const newProgress: CourseProgress = {
			completedModules: [],
			currentModule: 0,
			quizScores: {},
			startedAt: new Date().toISOString(),
		};
		setProgress(newProgress);
	};

	const getProgressPercentage = (totalModules: number) => {
		return Math.round((progress.completedModules.length / totalModules) * 100);
	};

	const isModuleCompleted = (moduleIndex: number) => {
		return progress.completedModules.includes(moduleIndex);
	};

	const isCourseCompleted = (totalModules: number) => {
		return (
			progress.completedModules.length === totalModules &&
			!!progress.completedAt
		);
	};

	return {
		progress,
		completeModule,
		setCurrentModule,
		completeCourse,
		resetProgress,
		getProgressPercentage,
		isModuleCompleted,
		isCourseCompleted,
	};
}
