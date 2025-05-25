import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Layout, FileText, Lightbulb, CheckCircle } from "lucide-react";
import HtmlStructure from "@/components/HtmlStructure";
import SemanticExamples from "@/components/SemanticExamples";
import InteractiveDemo from "@/components/InteractiveDemo";
import QuizSection from "@/components/QuizSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Visão Geral", icon: Layout },
    { id: "structure", title: "Estrutura", icon: FileText },
    { id: "examples", title: "Exemplos", icon: Code },
    { id: "demo", title: "Demo Interativo", icon: Lightbulb },
    { id: "quiz", title: "Quiz", icon: CheckCircle }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center gap-4">
                <img src="/logo.svg" alt="Logo" width={150} height={150} />
                <p className="text-sm text-gray-600">A melhor escola de programação do Brasil</p>
              </div>
            </div>
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Curso Gratuito
            </Badge>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white/60 backdrop-blur-sm border-b">
        <div className="container mx-auto px-6 py-3">
          <div className="flex space-x-1 overflow-x-auto">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? "default" : "ghost"}
                  onClick={() => setCurrentSection(section.id)}
                  className="flex items-center space-x-2 whitespace-nowrap"
                >
                  <Icon className="w-4 h-4" />
                  <span>{section.title}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {currentSection === "overview" && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-6">
              <div className="space-y-3">
                <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Domine HTML Semântico
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Aprenda a criar páginas web mais acessíveis, organizadas e otimizadas para mecanismos de busca
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Badge className="bg-blue-100 text-blue-800">Acessibilidade</Badge>
                <Badge className="bg-purple-100 text-purple-800">SEO</Badge>
                <Badge className="bg-green-100 text-green-800">Melhores Práticas</Badge>
                <Badge className="bg-orange-100 text-orange-800">HTML5</Badge>
              </div>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Layout className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-blue-900">Estrutura Clara</CardTitle>
                  <CardDescription>
                    Organize seu conteúdo de forma lógica e hierárquica
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-purple-900">Acessibilidade</CardTitle>
                  <CardDescription>
                    Torne seu site utilizável por todos os usuários
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-green-100">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-green-900">SEO Otimizado</CardTitle>
                  <CardDescription>
                    Melhore o ranking do seu site nos buscadores
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>

            {/* What You'll Learn */}
            <Card className="border-0 shadow-xl bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-center">O que você vai aprender</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-blue-900">Elementos Semânticos</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>&lt;article&gt;, &lt;section&gt;, &lt;aside&gt;</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>&lt;footer&gt;, &lt;figure&gt;, &lt;figcaption&gt;</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-lg text-purple-900">Boas Práticas</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Hierarquia de títulos (h1-h6)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Atributos ARIA</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Marcação semântica de formulários</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentSection === "structure" && <HtmlStructure />}
        {currentSection === "examples" && <SemanticExamples />}
        {currentSection === "demo" && <InteractiveDemo />}
        {currentSection === "quiz" && <QuizSection />}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 mt-8">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg flex items-center justify-center">
                <Code className="w-4 h-4" />
              </div>
              <span className="text-lg font-semibold">HTML Semântico</span>
            </div>
            <p className="text-gray-400 text-sm">
              Criando experiências web mais acessíveis e otimizadas
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-400">
              <span>© 2025 Pedro Allas dos Santos Borges</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
