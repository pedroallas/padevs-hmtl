
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HtmlStructure = () => {
  const htmlStructure = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Estrutura Semântica</title>
</head>
<body>
  <header>
    <nav>
      <!-- Navegação principal -->
    </nav>
  </header>
  
  <main>
    <article>
      <header>
        <h1>Título do Artigo</h1>
      </header>
      <section>
        <h2>Seção do Conteúdo</h2>
        <p>Conteúdo...</p>
      </section>
    </article>
    
    <aside>
      <!-- Conteúdo lateral -->
    </aside>
  </main>
  
  <footer>
    <!-- Rodapé da página -->
  </footer>
</body>
</html>`;

  const elements = [
    {
      tag: "header",
      description: "Cabeçalho da página ou seção",
      usage: "Contém logotipo, navegação principal, título",
      color: "bg-blue-100 text-blue-800"
    },
    {
      tag: "nav",
      description: "Navegação principal",
      usage: "Menus, links de navegação, breadcrumbs",
      color: "bg-green-100 text-green-800"
    },
    {
      tag: "main",
      description: "Conteúdo principal da página",
      usage: "Área principal, deve ser única por página",
      color: "bg-purple-100 text-purple-800"
    },
    {
      tag: "article",
      description: "Conteúdo independente",
      usage: "Posts de blog, notícias, comentários",
      color: "bg-orange-100 text-orange-800"
    },
    {
      tag: "section",
      description: "Seção temática do conteúdo",
      usage: "Agrupamento lógico de conteúdo relacionado",
      color: "bg-pink-100 text-pink-800"
    },
    {
      tag: "aside",
      description: "Conteúdo lateral",
      usage: "Sidebars, informações complementares",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      tag: "footer",
      description: "Rodapé da página ou seção",
      usage: "Informações de contato, copyright, links",
      color: "bg-gray-100 text-gray-800"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Estrutura HTML Semântica
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Entenda como organizar seu HTML de forma semântica e significativa
        </p>
      </div>

      {/* Visual Structure */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Anatomia de uma Página Semântica</CardTitle>
          <CardDescription>
            Visualização da estrutura HTML5 semântica
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4 font-mono text-sm">
              <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded">
                <span className="text-blue-700 font-semibold">&lt;header&gt;</span>
                <div className="ml-4 mt-2 border-l-4 border-green-500 pl-4 py-1 bg-green-50 rounded">
                  <span className="text-green-700 font-semibold">&lt;nav&gt;</span>
                  <span className="text-gray-600 ml-2">Navegação principal</span>
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4 py-2 bg-purple-50 rounded">
                <span className="text-purple-700 font-semibold">&lt;main&gt;</span>
                <div className="ml-4 mt-2 space-y-2">
                  <div className="border-l-4 border-orange-500 pl-4 py-1 bg-orange-50 rounded">
                    <span className="text-orange-700 font-semibold">&lt;article&gt;</span>
                    <div className="ml-4 mt-1 border-l-4 border-pink-500 pl-4 py-1 bg-pink-50 rounded">
                      <span className="text-pink-700 font-semibold">&lt;section&gt;</span>
                      <span className="text-gray-600 ml-2">Conteúdo principal</span>
                    </div>
                  </div>
                  <div className="border-l-4 border-indigo-500 pl-4 py-1 bg-indigo-50 rounded">
                    <span className="text-indigo-700 font-semibold">&lt;aside&gt;</span>
                    <span className="text-gray-600 ml-2">Conteúdo lateral</span>
                  </div>
                </div>
              </div>
              
              <div className="border-l-4 border-gray-500 pl-4 py-2 bg-gray-50 rounded">
                <span className="text-gray-700 font-semibold">&lt;footer&gt;</span>
                <span className="text-gray-600 ml-2">Rodapé da página</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Elements Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {elements.map((element) => (
          <Card key={element.tag} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <code className="text-lg font-bold text-gray-800">
                  &lt;{element.tag}&gt;
                </code>
                <Badge className={element.color}>
                  HTML5
                </Badge>
              </div>
              <CardTitle className="text-lg">{element.description}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{element.usage}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Code Example */}
      <Card className="border-0 shadow-xl">
        <CardHeader>
          <CardTitle>Exemplo de Código</CardTitle>
          <CardDescription>
            Estrutura HTML semântica completa
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-gray-900 text-green-400 p-6 rounded-lg overflow-x-auto">
            <pre className="text-sm">
              <code>{htmlStructure}</code>
            </pre>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HtmlStructure;
