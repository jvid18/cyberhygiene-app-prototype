import { Check, ChevronRight, X } from "lucide-react";
import { useState } from "react";

export interface QuizQuestion {
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

interface InteractiveQuizProps {
	questions: QuizQuestion[];
	onComplete: (score: number) => void;
}

export function InteractiveQuiz({
	questions,
	onComplete,
}: InteractiveQuizProps) {
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
	const [showExplanation, setShowExplanation] = useState(false);
	const [correctAnswers, setCorrectAnswers] = useState(0);
	const [completed, setCompleted] = useState(false);

	const handleAnswerSelect = (index: number) => {
		if (showExplanation) return;

		setSelectedAnswer(index);
		setShowExplanation(true);

		if (index === questions[currentQuestion].correctAnswer) {
			setCorrectAnswers((prev) => prev + 1);
		}
	};

	const handleNext = () => {
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion((prev) => prev + 1);
			setSelectedAnswer(null);
			setShowExplanation(false);
		} else {
			setCompleted(true);
			const score = Math.round((correctAnswers / questions.length) * 100);
			onComplete(score);
		}
	};

	if (completed) {
		const score = Math.round(((correctAnswers + 1) / questions.length) * 100);
		return (
			<div className="bg-card border border-border rounded-xl p-6 text-center">
				<div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-primary to-accent rounded-full mb-4">
					<Check className="w-8 h-8 text-primary-foreground" />
				</div>
				<h3 className="text-2xl font-bold mb-2">¡Quiz completado!</h3>
				<p className="text-muted-foreground mb-4">
					Tu puntuación: {correctAnswers} de {questions.length} respuestas
					correctas
				</p>
				<div className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full font-semibold">
					{score}% de acierto
				</div>
			</div>
		);
	}

	const question = questions[currentQuestion];
	const isCorrect =
		selectedAnswer !== null && selectedAnswer === question.correctAnswer;

	return (
		<div className="bg-card border border-border rounded-xl p-6">
			<div className="mb-4">
				<div className="flex items-center justify-between mb-2">
					<span className="text-sm font-medium text-muted-foreground">
						Pregunta {currentQuestion + 1} de {questions.length}
					</span>
					<div className="flex gap-1">
						{questions.map((_, index) => (
							<div
								// biome-ignore lint/suspicious/noArrayIndexKey: using index as key is safe here since questions array is static
								key={index}
								className={`w-2 h-2 rounded-full ${
									index < currentQuestion
										? "bg-accent"
										: index === currentQuestion
											? "bg-primary"
											: "bg-muted"
								}`}
							/>
						))}
					</div>
				</div>
				<h3 className="text-lg font-semibold">{question.question}</h3>
			</div>

			<div className="space-y-3 mb-4">
				{question.options.map((option, index) => {
					const isSelected = selectedAnswer === index;
					const isCorrectAnswer = index === question.correctAnswer;
					const showCorrect = showExplanation && isCorrectAnswer;
					const showIncorrect = showExplanation && isSelected && !isCorrect;

					return (
						<button
							// biome-ignore lint/suspicious/noArrayIndexKey: using index as key is safe here since questions array is static
							key={index}
							type="button"
							onClick={() => handleAnswerSelect(index)}
							disabled={showExplanation}
							className={`w-full text-left p-4 rounded-lg border transition-all ${
								showCorrect
									? "border-accent bg-accent/10"
									: showIncorrect
										? "border-destructive bg-destructive/10"
										: isSelected
											? "border-primary bg-primary/5"
											: "border-border hover:border-primary/50"
							} ${showExplanation ? "cursor-default" : "cursor-pointer"}`}
						>
							<div className="flex items-center justify-between">
								<span className="flex-1">{option}</span>
								{showCorrect && <Check className="w-5 h-5 text-accent" />}
								{showIncorrect && <X className="w-5 h-5 text-destructive" />}
							</div>
						</button>
					);
				})}
			</div>

			{showExplanation && (
				<div className="bg-muted/50 rounded-lg p-4 mb-4">
					<p className="text-sm">{question.explanation}</p>
				</div>
			)}

			{showExplanation && (
				<button
					type="button"
					onClick={handleNext}
					className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
				>
					{currentQuestion < questions.length - 1
						? "Siguiente pregunta"
						: "Finalizar quiz"}
					<ChevronRight className="w-5 h-5" />
				</button>
			)}
		</div>
	);
}
