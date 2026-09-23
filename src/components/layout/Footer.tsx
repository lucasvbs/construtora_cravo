import { MapPin, Phone, Clock, Instagram } from 'lucide-react';

export function Footer() {
  const whatsappLink = "https://wa.me/5538998228331?text=Olá,%20gostaria%20de%20conversar%20sobre%20minha%20obra.";
  const mapLink = "https://maps.google.com/?q=Av.+Cônego+Ramiro+Leite,+nº+508,+Centro,+Januária";

  return (
    <footer className="bg-foreground text-white py-16 lg:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          <div className="space-y-6">
            <div className="flex items-center gap-3 bg-white p-2 rounded w-max">
              <img
                src="/media/logo-transparent.png"
                alt="Construtora Cravo Logo"
                className="h-16 w-16 object-contain"
              />
            </div>
            <p className="text-gray-400 max-w-sm">
              Construção residencial, reforma e ampliação em Januária. Acompanhamento etapa por etapa, sem enrolação.
            </p>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <Phone className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-sm text-gray-400">WhatsApp / Telefone</span>
                    <span>(38) 9.9822-8331</span>
                  </div>
                </a>
              </li>
              <li>
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-colors group">
                  <MapPin className="w-5 h-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
                  <div>
                    <span className="block text-sm text-gray-400">Endereço</span>
                    <span>Av. Cônego Ramiro Leite, nº 508<br/>Centro, Januária<br/>(Junto à loja Cravo Tintas)</span>
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl">Horário de Funcionamento</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <div className="flex justify-between gap-4 border-b border-white/10 pb-2 mb-2">
                    <span className="text-gray-400">Seg - Sex</span>
                    <span>08:00 – 18:00</span>
                  </div>
                  <div className="flex justify-between gap-4 border-b border-white/10 pb-2 mb-2">
                    <span className="text-gray-400">Sábado</span>
                    <span>08:00 – 12:00</span>
                  </div>
                  <div className="flex justify-between gap-4 text-gray-500">
                    <span>Domingo</span>
                    <span>Fechado</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-serif text-xl">Legal</h4>
            <p className="text-gray-400 text-sm">
              Construtora Cravo Ltda.<br/>
              Desde 2017 realizando sonhos em Januária e região.
            </p>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Construtora Cravo. Todos os direitos reservados.</p>
          <p>Sua casa construída do jeito certo.</p>
        </div>
      </div>
    </footer>
  );
}
