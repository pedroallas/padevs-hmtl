
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Eye, Code } from "lucide-react";

const InteractiveDemo = () => {
  const [selectedElement, setSelectedElement] = useState("header");
  
  const elements = {
    header: {
      name: "Header",
      code: `<header>
  <h1>Meu Site</h1>
  <nav>
    <a href="/">Início</a>
    <a href="/sobre">Sobre</a>
  </nav>
</header>`,
      description: "Cabeçalho principal com título e navegação",
      color: "bg-blue-500"
    },
    main: {
      name: "Main",
      code: `<main>
  <article>
    <h2>Artigo Principal</h2>
    <p>Conteúdo do artigo...</p>
  </article>
</main>`,
      description: "Área principal do conteúdo",
      color: "bg-purple-500"
    },
    article: {
      name: "Article",
      code: `<article>
  <header>
    <h2>Título do Artigo</h2>
    <time>2024-01-15</time>
  </header>
  <p>Conteúdo independente...</p>
</article>`,
      description: "Conteúdo independente e reutilizável",
      color: "bg-green-500"
    },
    aside: {
      name: "Aside",
      code: `<aside>
  <h3>Artigos Relacionados</h3>
  <ul>
    <li><a href="#">Artigo 1</a></li>
    <li><a href="#">Artigo 2</a></li>
  </ul>
</aside>`,
      description: "Conteúdo complementar ou lateral",
      color: "bg-orange-500"
    },
    footer: {
      name: "Footer",
      code: `<footer>
  <p>&copy; 2024 Meu Site</p>
  <nav>
    <a href="/privacidade">Privacidade</a>
    <a href="/termos">Termos</a>
  </nav>
</footer>`,
      description: "Rodapé com informações secundárias",
      color: "bg-gray-500"
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Demo Interativo
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Clique nos elementos para ver como cada tag semântica funciona
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Visual Layout */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Eye className="w-5 h-5" />
              <span>Layout Visual</span>
            </CardTitle>
            <CardDescription>
              Clique nos elementos para explorar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
              {/* Header */}
              <div 
                className={`p-4 rounded cursor-pointer transition-all ${
                  selectedElement === "header" 
                    ? "bg-blue-500 text-white ring-4 ring-blue-200" 
                    : "bg-blue-100 hover:bg-blue-200"
                }`}
                onClick={() => setSelectedElement("header")}
              >
                <div className="font-semibold">🏠 Header</div>
                <div className="text-sm opacity-75">Cabeçalho principal</div>
              </div>

              {/* Main Content Area */}
              <div className="flex gap-3">
                {/* Main */}
                <div 
                  className={`flex-1 p-4 rounded cursor-pointer transition-all ${
                    selectedElement === "main" 
                      ? "bg-purple-500 text-white ring-4 ring-purple-200" 
                      : "bg-purple-100 hover:bg-purple-200"
                  }`}
                  onClick={() => setSelectedElement("main")}
                >
                  <div className="font-semibold">📄 Main</div>
                  <div className="text-sm opacity-75 mb-3">Conteúdo principal</div>
                  
                  {/* Article inside Main */}
                  <div 
                    className={`p-3 rounded cursor-pointer transition-all ${
                      selectedElement === "article" 
                        ? "bg-green-500 text-white ring-2 ring-green-200" 
                        : "bg-green-100 hover:bg-green-200"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedElement("article");
                    }}
                  >
                    <div className="font-semibold text-sm">📝 Article</div>
                    <div className="text-xs opacity-75">Artigo independente</div>
                  </div>
                </div>

                {/* Aside */}
                <div 
                  className={`w-1/3 p-4 rounded cursor-pointer transition-all ${
                    selectedElement === "aside" 
                      ? "bg-orange-500 text-white ring-4 ring-orange-200" 
                      : "bg-orange-100 hover:bg-orange-200"
                  }`}
                  onClick={() => setSelectedElement("aside")}
                >
                  <div className="font-semibold">📌 Aside</div>
                  <div className="text-sm opacity-75">Conteúdo lateral</div>
                </div>
              </div>

              {/* Footer */}
              <div 
                className={`p-4 rounded cursor-pointer transition-all ${
                  selectedElement === "footer" 
                    ? "bg-gray-500 text-white ring-4 ring-gray-200" 
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedElement("footer")}
              >
                <div className="font-semibold">🔗 Footer</div>
                <div className="text-sm opacity-75">Rodapé da página</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Code Display */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Code className="w-5 h-5" />
              <span>Código do Elemento</span>
            </CardTitle>
            <CardDescription>
              {elements[selectedElement]?.name} - {elements[selectedElement]?.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Badge className={`${elements[selectedElement]?.color} text-white`}>
                  &lt;{selectedElement}&gt;
                </Badge>
                <span className="text-sm text-gray-600">
                  {elements[selectedElement]?.description}
                </span>
              </div>
              
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{elements[selectedElement]?.code}</code>
                </pre>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Element Buttons */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Explorar Elementos</CardTitle>
          <CardDescription>
            Clique para alternar entre diferentes elementos semânticos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3">
            {Object.entries(elements).map(([key, element]) => (
              <Button
                key={key}
                variant={selectedElement === key ? "default" : "outline"}
                onClick={() => setSelectedElement(key)}
                className="flex items-center space-x-2"
              >
                <span>&lt;{key}&gt;</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Tips */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-yellow-50 to-orange-50">
        <CardHeader>
          <CardTitle className="text-xl">💡 Dicas Importantes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Hierarquia:</h4>
              <p>Use apenas um &lt;main&gt; por página e organize o conteúdo hierarquicamente.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Acessibilidade:</h4>
              <p>Elementos semânticos ajudam leitores de tela a navegar pelo conteúdo.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">SEO:</h4>
              <p>Mecanismos de busca entendem melhor o conteúdo estruturado semanticamente.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Manutenção:</h4>
              <p>Código semântico é mais fácil de ler e manter ao longo do tempo.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InteractiveDemo;
