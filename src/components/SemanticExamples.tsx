
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, XCircle } from "lucide-react";

const SemanticExamples = () => {
  const examples = [
    {
      title: "Artigo de Blog",
      good: `<article>
  <header>
    <h1>Como usar HTML Semântico</h1>
    <time datetime="2024-01-15">15 de Janeiro, 2024</time>
    <address>Por João Silva</address>
  </header>
  
  <section>
    <h2>Introdução</h2>
    <p>HTML semântico melhora...</p>
  </section>
  
  <section>
    <h2>Elementos Principais</h2>
    <p>Os elementos semânticos...</p>
  </section>
  
  <footer>
    <p>Tags: 
      <a href="#html">#html</a>, 
      <a href="#semantico">#semantico</a>
    </p>
  </footer>
</article>`,
      bad: `<div class="article">
  <div class="header">
    <div class="title">Como usar HTML Semântico</div>
    <div class="date">15 de Janeiro, 2024</div>
    <div class="author">Por João Silva</div>
  </div>
  
  <div class="content">
    <div class="section">
      <div class="subtitle">Introdução</div>
      <div>HTML semântico melhora...</div>
    </div>
  </div>
</div>`
    },
    {
      title: "Navegação",
      good: `<nav aria-label="Navegação principal">
  <ul>
    <li><a href="/" aria-current="page">Início</a></li>
    <li><a href="/sobre">Sobre</a></li>
    <li><a href="/servicos">Serviços</a></li>
    <li><a href="/contato">Contato</a></li>
  </ul>
</nav>

<nav aria-label="Breadcrumb">
  <ol>
    <li><a href="/">Início</a></li>
    <li><a href="/blog">Blog</a></li>
    <li aria-current="page">Artigo Atual</li>
  </ol>
</nav>`,
      bad: `<div class="menu">
  <div class="menu-item">
    <a href="/">Início</a>
  </div>
  <div class="menu-item">
    <a href="/sobre">Sobre</a>
  </div>
  <div class="menu-item">
    <a href="/servicos">Serviços</a>
  </div>
</div>`
    },
    {
      title: "Formulário",
      good: `<form>
  <fieldset>
    <legend>Informações Pessoais</legend>
    
    <label for="nome">Nome completo:</label>
    <input type="text" id="nome" name="nome" required>
    
    <label for="email">E-mail:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="mensagem">Mensagem:</label>
    <textarea id="mensagem" name="mensagem" 
              aria-describedby="mensagem-help"></textarea>
    <small id="mensagem-help">
      Descreva sua solicitação em detalhes
    </small>
  </fieldset>
  
  <button type="submit">Enviar</button>
</form>`,
      bad: `<div class="form">
  <div class="field">
    <div class="label">Nome:</div>
    <input type="text">
  </div>
  <div class="field">
    <div class="label">E-mail:</div>
    <input type="text">
  </div>
  <div class="button">Enviar</div>
</div>`
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          Exemplos Práticos
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Compare o código semântico com o não-semântico e veja a diferença
        </p>
      </div>

      {/* Examples */}
      <div className="space-y-8">
        {examples.map((example, index) => (
          <Card key={index} className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl">{example.title}</CardTitle>
              <CardDescription>
                Comparação entre HTML semântico e não-semântico
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="good" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="good" className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Semântico ✅</span>
                  </TabsTrigger>
                  <TabsTrigger value="bad" className="flex items-center space-x-2">
                    <XCircle className="w-4 h-4 text-red-600" />
                    <span>Não-semântico ❌</span>
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="good" className="mt-4">
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge className="bg-green-100 text-green-800">Recomendado</Badge>
                      <span className="text-sm text-green-700">Acessível e otimizado para SEO</span>
                    </div>
                    <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
                      <code>{example.good}</code>
                    </pre>
                  </div>
                </TabsContent>
                
                <TabsContent value="bad" className="mt-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2 mb-3">
                      <Badge variant="destructive">Evitar</Badge>
                      <span className="text-sm text-red-700">Dificulta acessibilidade e SEO</span>
                    </div>
                    <pre className="bg-gray-900 text-red-400 p-4 rounded overflow-x-auto text-sm">
                      <code>{example.bad}</code>
                    </pre>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Benefits */}
      <Card className="border-0 shadow-xl bg-gradient-to-r from-blue-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-center">Por que usar HTML Semântico?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-blue-900 flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Benefícios</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Melhora a acessibilidade para leitores de tela</li>
                <li>• Otimiza para mecanismos de busca (SEO)</li>
                <li>• Facilita a manutenção do código</li>
                <li>• Melhora a performance</li>
                <li>• Torna o código mais legível</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold text-lg text-red-900 flex items-center space-x-2">
                <XCircle className="w-5 h-5 text-red-600" />
                <span>Problemas do HTML não-semântico</span>
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Dificulta navegação por teclado</li>
                <li>• Prejudica leitores de tela</li>
                <li>• Pior indexação pelos buscadores</li>
                <li>• Código menos estruturado</li>
                <li>• Manutenção mais complexa</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SemanticExamples;
