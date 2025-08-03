import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Building, TrendingUp, Calendar, MapPin, Download, Phone, Mail, Instagram } from 'lucide-react'
import './App.css'

// Dados dos empreendimentos organizados por status
const empreendimentos = {
  construcao: [
    {
      nome: "Sensia Aurora",
      apartamentos: "56,06m² a 57,67m²",
      valorizacao: "8% a.a.",
      yield: "14% a.a.",
      entrega: "Dezembro 2026",
      valor: "R$ 443.990",
      book: "/src/assets/BookSensia_Aurora.pdf.pdf",
      status: "Em Construção"
    }
  ],
  lancamento: [
    {
      nome: "La Roche",
      apartamentos: "46,93m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/LaRoche.pdf",
      status: "Lançamento"
    },
    {
      nome: "Lake Dali",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/BookLakeDali.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Lancelot",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/Lancelot.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Leon",
      apartamentos: "40,83m² a 44,83m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/LEON.pdf",
      status: "Lançamento"
    },
    {
      nome: "Loretto",
      apartamentos: "40,82m² a 44,57m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/Loretto.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Le Challet",
      apartamentos: "41,90m² a 57,66m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/BookLeChallet.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Le Monde",
      apartamentos: "47,96m² a 50,70m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/BookLeMonde.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Residencial Martini Maringá",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/ResidencialMartini-Maringá.pdf.pdf",
      status: "Lançamento"
    },
    {
      nome: "Sensia Jardim Maringá",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      entrega: "A ser definido",
      valor: "Consulte valores",
      book: "/src/assets/BookSensiaJardim-Maringa.pdf.pdf",
      status: "Lançamento"
    }
  ],
  vendidos: [
    {
      nome: "Lake Portinari",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      book: "/src/assets/LakePortinari.pdf.pdf",
      status: "100% Vendido"
    },
    {
      nome: "Lake Picasso",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      book: "/src/assets/LakePicasso.pdf.pdf",
      status: "100% Vendido"
    },
    {
      nome: "Lake Da Vinci",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      book: "/src/assets/LakeDaVinci.pdf.pdf",
      status: "100% Vendido"
    },
    {
      nome: "Lake Van Gogh",
      apartamentos: "44m² a 52m²",
      valorizacao: "15% a.a.",
      book: "/src/assets/LakeVanGogh.pdf.pdf",
      status: "100% Vendido"
    },
    {
      nome: "Lituania",
      apartamentos: "43,5m² a 46,9m²",
      valorizacao: "15% a.a.",
      book: "/src/assets/Lituania.pdf.pdf",
      status: "100% Vendido"
    }
  ]
}

function EmpreendimentoCard({ empreendimento }) {
  const getStatusColor = (status) => {
    switch (status) {
      case "Em Construção": return "bg-blue-500"
      case "Lançamento": return "bg-green-500"
      case "100% Vendido": return "bg-gray-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl font-bold">{empreendimento.nome}</CardTitle>
          <Badge className={`${getStatusColor(empreendimento.status)} text-white`}>
            {empreendimento.status}
          </Badge>
        </div>
        <CardDescription className="flex items-center gap-2">
          <Building className="w-4 h-4" />
          {empreendimento.apartamentos}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Valorização</p>
              <p className="font-semibold">{empreendimento.valorizacao}</p>
            </div>
          </div>
          {empreendimento.yield && (
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">Yield</p>
                <p className="font-semibold">{empreendimento.yield}</p>
              </div>
            </div>
          )}
        </div>
        
        {empreendimento.entrega && (
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-orange-600" />
            <div>
              <p className="text-sm text-gray-600">Entrega</p>
              <p className="font-semibold">{empreendimento.entrega}</p>
            </div>
          </div>
        )}
        
        {empreendimento.valor && (
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Valor do Investimento</p>
            <p className="text-xl font-bold text-blue-600">{empreendimento.valor}</p>
          </div>
        )}
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex-1"
            onClick={() => window.open('#', '_blank')}
          >
            <Download className="w-4 h-4 mr-2" />
            Book
          </Button>
          <Button size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Contato
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Suelen Rosa Imóveis</h1>
              <p className="text-gray-600">Investimentos Inteligentes em Imóveis</p>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Phone className="w-4 h-4 mr-2" />
                (43) 99999-9999
              </Button>
              <Button variant="outline" size="sm">
                <Mail className="w-4 h-4 mr-2" />
                Contato
              </Button>
              <Button variant="outline" size="sm">
                <Instagram className="w-4 h-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Invista com Inteligência
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Descubra oportunidades únicas de investimento imobiliário com apartamentos de 44m² a 52m², 
            valorização projetada de até 15% a.a. e entregas garantidas.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Building className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Apartamentos Modernos</h3>
              <p className="text-gray-600">De 44m² a 52m² com acabamentos de qualidade</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Valorização Garantida</h3>
              <p className="text-gray-600">Até 15% a.a. de valorização projetada</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Localização Premium</h3>
              <p className="text-gray-600">Empreendimentos em regiões valorizadas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empreendimentos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Nossos Empreendimentos
          </h2>
          
          <Tabs defaultValue="lancamento" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="lancamento">Lançamento</TabsTrigger>
              <TabsTrigger value="construcao">Em Construção</TabsTrigger>
              <TabsTrigger value="vendidos">100% Vendidos</TabsTrigger>
            </TabsList>
            
            <TabsContent value="lancamento">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {empreendimentos.lancamento.map((emp, index) => (
                  <EmpreendimentoCard key={index} empreendimento={emp} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="construcao">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {empreendimentos.construcao.map((emp, index) => (
                  <EmpreendimentoCard key={index} empreendimento={emp} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vendidos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {empreendimentos.vendidos.map((emp, index) => (
                  <EmpreendimentoCard key={index} empreendimento={emp} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Pronto para Investir?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra as melhores oportunidades de investimento imobiliário.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              <Phone className="w-5 h-5 mr-2" />
              Falar com Especialista
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              <Mail className="w-5 h-5 mr-2" />
              Solicitar Proposta
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Suelen Rosa Imóveis</h3>
              <p className="text-gray-400 mb-4">
                Especialista em investimentos imobiliários com foco em rentabilidade e valorização.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 (43) 99999-9999</p>
                <p>📧 contato@suelenrosaimoveis.com.br</p>
                <p>📍 Londrina - PR</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Informações</h4>
              <div className="space-y-2 text-gray-400">
                <p>• Apartamentos de 44m² a 52m²</p>
                <p>• Valorização projetada: 15% a.a.</p>
                <p>• Entregas garantidas</p>
                <p>• Financiamento facilitado</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Suelen Rosa Imóveis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

