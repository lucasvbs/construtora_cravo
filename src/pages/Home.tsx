import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Pause, Maximize2, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const whatsappLink = "https://wa.me/5538998228331?text=Olá,%20gostaria%20de%20pedir%20um%20orçamento%20sem%20compromisso.";

export default function Home() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const projectImages = Array.from({ length: 11 }, (_, i) => `/media/projeto-${(i + 1).toString().padStart(2, '0')}.jpg`);

  return (
    <div className="bg-background min-h-[100dvh] overflow-x-hidden">
      
      {/* HERO SECTION */}
      <section className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <video 
            ref={videoRef}
            src="/media/residencia-lf.mp4" 
            className="w-full h-full object-cover scale-105"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
          />
        </div>

        {/* Video Controls */}
        <div className="absolute bottom-8 right-8 z-20 flex items-center gap-4">
          <button 
            onClick={toggleVideo}
            className="w-12 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label={isVideoPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
          >
            {isVideoPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
          </button>
          
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="px-4 h-12 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center gap-2 text-white hover:bg-white/20 transition-colors text-sm font-medium uppercase tracking-wider"
              >
                <Maximize2 className="w-4 h-4" />
                <span className="hidden md:inline">Assistir Completo</span>
              </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl p-0 bg-black border-none overflow-hidden rounded-none md:rounded-xl">
              <video 
                src="/media/residencia-lf.mp4" 
                className="w-full aspect-video"
                controls 
                autoPlay 
              />
            </DialogContent>
          </Dialog>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 container mx-auto px-4 md:px-8 text-center flex flex-col items-center mt-16">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif text-white font-bold max-w-5xl leading-[1.1]"
          >
            Sua casa construída <br className="hidden md:block"/>
            <span className="text-primary italic">do jeito certo</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 md:mt-8 text-lg md:text-xl text-gray-200 max-w-2xl font-light leading-relaxed"
          >
            Construção residencial, reforma e ampliação em Januária, com uma equipe que te acompanha etapa por etapa — sem enrolação, sem sumiço, sem surpresa no orçamento.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 md:mt-12"
          >
            <Button asChild size="lg" className="h-16 px-8 text-base shadow-2xl shadow-primary/20 hover:scale-105 transition-transform duration-300">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Pedir orçamento no WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <p className="mt-4 text-xs text-white/50 uppercase tracking-widest font-semibold">Sem compromisso</p>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="sobre" className="py-24 md:py-32 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Desde 2017</h2>
              <h3 className="text-4xl md:text-5xl font-serif font-bold text-foreground leading-tight mb-6">
                Soluções inovadoras para sua construção.
              </h3>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Fundada para realizar sonhos através da construção residencial em Januária, a Construtora Cravo torna a experiência da casa própria acessível e segura.
                </p>
                <p>
                  Acreditamos que uma obra bem-sucedida se faz com comunicação clara, empatia com a realidade do cliente, criatividade para resolver desafios e rigor técnico inegociável.
                </p>
              </div>
              
              <div className="mt-10 flex items-center gap-4 bg-gray-50 p-6 rounded-lg border border-gray-100">
                <div className="flex text-[#fbbc04]">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-foreground">5.0</span> de avaliação no Google <br/>
                  <span className="text-muted-foreground">(Baseado em 4 avaliações reais)</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-[4/3] lg:aspect-square overflow-hidden"
            >
              <img src="/media/projeto-01.jpg" alt="Obra em andamento" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PAIN & SERVICES SECTION */}
      <section id="servicos" className="py-24 md:py-32 bg-foreground text-white">
        <div className="container mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold mb-6"
            >
              Construir não precisa ser um pesadelo.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-400"
            >
              Sabemos do medo de atrasos, orçamentos estourados e perda de controle. Nossa resposta é o acompanhamento próximo e transparente, desde a primeira conversa até o acabamento final.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Construção Residencial",
                desc: "Execução completa da sua casa, com equipe experiente e gestão rigorosa de qualidade."
              },
              {
                title: "Projetos Residenciais",
                desc: "Da ideia ao papel. Criamos projetos personalizados que cabem na sua realidade."
              },
              {
                title: "Gestão de Obras",
                desc: "Gerenciamento completo: controle de custos, prazos e fornecedores para sua paz de espírito."
              }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/5 border border-white/10 p-8 md:p-10 hover:bg-white/10 transition-colors group"
              >
                <div className="w-12 h-12 bg-primary/20 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Falar sobre meu projeto
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section id="processo" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Como trabalhamos</h2>
            <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
              Quatro passos para o jeito certo.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border border-dashed border-b" />

            {[
              { num: "01", title: "A Conversa", desc: "Entendemos suas necessidades, seus desejos e seu momento financeiro sem compromisso." },
              { num: "02", title: "Visita Técnica", desc: "Avaliamos o local, a viabilidade e os desafios estruturais antes de qualquer promessa." },
              { num: "03", title: "Orçamento", desc: "Apresentamos uma proposta personalizada, transparente e sem surpresas ocultas." },
              { num: "04", title: "Execução", desc: "Supervisão constante, comunicação ativa e gestão completa até a entrega." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="relative pt-8 lg:pt-0"
              >
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary flex items-center justify-center font-serif text-2xl font-bold mb-6 mx-auto lg:mx-0 relative z-10">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold mb-3 text-center lg:text-left">{step.title}</h4>
                <p className="text-muted-foreground text-center lg:text-left leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section id="projetos" className="py-24 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-4">Nossa Realidade</h2>
              <h3 className="text-3xl md:text-5xl font-serif font-bold text-foreground">
                Obras de verdade.
              </h3>
            </div>
            <p className="text-muted-foreground max-w-md">
              Acompanhe a qualidade e o rigor técnico do nosso dia a dia nos canteiros de obra.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
            {projectImages.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
                className="relative group overflow-hidden bg-gray-100 cursor-pointer break-inside-avoid"
                onClick={() => setSelectedImage(src)}
              >
                <img 
                  src={src} 
                  alt={`Projeto Construtora Cravo ${i+1}`} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Lightbox */}
        <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
          <DialogContent className="max-w-6xl p-0 bg-transparent border-none shadow-none">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Projeto Ampliado" 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </DialogContent>
        </Dialog>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 md:py-32 bg-gray-50 border-t border-border">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-muted-foreground text-lg">
              Tudo o que você precisa saber antes de começar.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Vocês fazem apenas construção do zero?</AccordionTrigger>
              <AccordionContent>
                Não. A Construtora Cravo atende construção residencial nova, reformas completas e ampliações. Adaptamos nossa gestão ao tamanho e necessidade da sua obra.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Preciso já ter um projeto pronto para falar com vocês?</AccordionTrigger>
              <AccordionContent>
                Não precisa. Nós oferecemos o serviço de criação de projetos residenciais. Podemos assumir desde a concepção inicial até a entrega das chaves.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Como funciona o primeiro contato?</AccordionTrigger>
              <AccordionContent>
                Tudo começa pelo WhatsApp. Nossa primeira conversa serve para entender sua demanda. Ela é sem compromisso nenhum.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>O orçamento é cobrado?</AccordionTrigger>
              <AccordionContent>
                Não cobramos pelo orçamento, porém ele só é emitido após uma visita técnica e avaliação real da sua necessidade, garantindo que não haverá surpresas no meio do caminho.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 md:py-32 bg-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <MessageCircle className="w-16 h-16 mx-auto mb-8 text-white/80" />
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 max-w-3xl mx-auto leading-tight">
            Construir do jeito certo começa com uma conversa.
          </h2>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100 h-16 px-10 text-lg shadow-xl">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Pedir orçamento pelo WhatsApp
            </a>
          </Button>
        </div>
      </section>

    </div>
  );
}
