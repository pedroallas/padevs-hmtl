
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, XCircle, RotateCcw } from "lucide-react";

const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  const questions = [
    {
      question: "Qual elemento deve ser usado para o conteúdo principal de uma página?",
      options: [
        { text: "<div class='main'>", correct: false },
        { text: "<main>", correct: true },
        { text: "<content>", correct: false },
        { text: "<section class='main'>", correct: false }
      ],
      explanation: "O elemento <main> é especificamente designado para o conteúdo principal da página e deve aparecer apenas uma vez por página."
    },
    {
      question: "Qual é a melhor forma de marcar a navegação principal?",
      options: [
        { text: "<div class='navigation'>", correct: false },
        { text: "<ul class='menu'>", correct: false },
        { text: "<nav>", correct: true },
        { text: "<menu>", correct: false }
      ],
      explanation: "O elemento <nav> é semanticamente correto para navegação principal e ajuda tecnologias assistivas a identificar áreas de navegação."
    },
    {
      question: "Para um post de blog independente, qual elemento é mais apropriado?",
      options: [
        { text: "<section>", correct: false },
        { text: "<div>", correct: false },
        { text: "<article>", correct: true },
        { text: "<post>", correct: false }
      ],
      explanation: "O elemento <article> é ideal para conteúdo independente que faz sentido por si só, como posts de blog, notícias ou comentários."
    },
    {
      question: "Qual atributo melhora a acessibilidade em formulários?",
      options: [
        { text: "class", correct: false },
        { text: "id", correct: false },
        { text: "for", correct: true },
        { text: "name", correct: false }
      ],
      explanation: "O atributo 'for' no <label> conecta o rótulo ao campo de entrada, permitindo que leitores de tela associem corretamente o texto ao campo."
    },
    {
      question: "Quantos elementos <h1> uma página deve ter?",
      options: [
        { text: "Quantos forem necessários", correct: false },
        { text: "Apenas um", correct: true },
        { text: "Um por seção", correct: false },
        { text: "Pelo menos dois", correct: false }
      ],
      explanation: "Idealmente, uma página deve ter apenas um <h1> que representa o título principal, seguindo uma hierarquia lógica com h2, h3, etc."
    }
  ];

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    const isCorrect = questions[currentQuestion].options[selectedAnswer]?.correct || false;
    const newUserAnswers = [...userAnswers, { selected: selectedAnswer, correct: isCorrect }];
    setUserAnswers(newUserAnswers);

    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setUserAnswers([]);
  };

  const getScoreColor = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getScoreBadge = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "bg-green-100 text-green-800";
    if (percentage >= 60) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  if (showResult) {
    return (
      <div className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Resultado do Quiz
          </h2>
        </div>

        <Card className="border-0 shadow-xl text-center">
          <CardHeader>
            <div className="space-y-4">
              <div className={`text-6xl font-bold ${getScoreColor()}`}>
                {score}/{questions.length}
              </div>
              <Badge className={`text-lg px-4 py-2 ${getScoreBadge()}`}>
                {((score / questions.length) * 100).toFixed(0)}% de acerto
              </Badge>
              <CardTitle className="text-2xl">
                {score === questions.length && "🎉 Perfeito! Você domina HTML semântico!"}
                {score >= questions.length * 0.8 && score < questions.length && "👏 Excelente! Você está no caminho certo!"}
                {score >= questions.length * 0.6 && score < questions.length * 0.8 && "👍 Bom trabalho! Continue estudando!"}
                {score < questions.length * 0.6 && "📚 Continue praticando! Você pode melhorar!"}
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <Button onClick={resetQuiz} size="lg" className="flex items-center space-x-2">
                <RotateCcw className="w-5 h-5" />
                <span>Tentar Novamente</span>
              </Button>

              {/* Review Answers */}
              <div className="text-left space-y-4">
                <h3 className="text-xl font-semibold text-center">Revisão das Respostas</h3>
                {questions.map((question, index) => (
                  <Card key={index} className="border">
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg flex items-start space-x-2">
                        {userAnswers[index]?.correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                        )}
                        <span>{question.question}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <p className="text-sm">
                          <span className="font-semibold">Sua resposta: </span>
                          <span className={userAnswers[index]?.correct ? "text-green-600" : "text-red-600"}>
                            {question.options[userAnswers[index]?.selected]?.text || "Não respondida"}
                          </span>
                        </p>
                        <p className="text-sm">
                          <span className="font-semibold">Resposta correta: </span>
                          <span className="text-green-600">
                            {question.options.find(option => option.correct)?.text}
                          </span>
                        </p>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold">Explicação: </span>
                          {question.explanation}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Quiz de HTML Semântico
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Teste seus conhecimentos sobre HTML semântico
        </p>
      </div>

      <Card className="border-0 shadow-xl">
        <CardHeader>
          <div className="flex justify-between items-center">
            <Badge variant="outline">
              Questão {currentQuestion + 1} de {questions.length}
            </Badge>
            <div className="w-full max-w-xs mx-4">
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
          <CardTitle className="text-xl">
            {questions[currentQuestion].question}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 text-left rounded-lg border-2 transition-all ${
                  selectedAnswer === index
                    ? "border-purple-500 bg-purple-50"
                    : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full border-2 ${
                    selectedAnswer === index
                      ? "border-purple-500 bg-purple-500"
                      : "border-gray-300"
                  }`}>
                    {selectedAnswer === index && (
                      <div className="w-full h-full rounded-full bg-white scale-50"></div>
                    )}
                  </div>
                  <span className="font-mono text-sm">{option.text}</span>
                </div>
              </button>
            ))}
            
            <div className="pt-4">
              <Button 
                onClick={handleNextQuestion}
                disabled={selectedAnswer === null}
                size="lg"
                className="w-full"
              >
                {currentQuestion === questions.length - 1 ? "Finalizar Quiz" : "Próxima Questão"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizSection;
