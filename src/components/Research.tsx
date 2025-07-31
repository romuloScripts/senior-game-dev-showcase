import { FileText, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Research = () => {
  const publications = [
    {
      title: "Master degree thesis - Recommendations for virtual reality environments with a focus on the third age",
      link: "http://www.biblioteca.pucminas.br/teses/Informatica_SilvaRS_1.pdf"
    },
    {
      title: "Virtual reality for older users: a systematic literature review",
      link: "https://www.researchgate.net/publication/331767689_Virtual_reality_for_older_users_a_systematic_literature_review"
    },
    {
      title: "Evaluation of the Experience of the Elderly with Virtual Reality in Digital Games for Smartphone",
      link: "https://www.sbgames.org/sbgames2018/files/papers/ArtesDesignFull/187142.pdf"
    },
    {
      title: "User-Centered Analysis: A study based on the use of a game for the Elderly",
      link: "UserCenteredAnalysis.pdf"
    },
    {
      title: "Ethnography and Phenomenology applied to game research: a systematic literature review",
      link: "https://revistas.unifacs.br/index.php/rsc/article/view/4938"
    },
    {
      title: "Design and evaluation of mobile game for older people: an empirical study",
      link: "http://periodicos.pucminas.br/index.php/abakos/article/view/15812"
    },
    {
      title: "Learning of the use of smartphones by older adults mediated by educational game",
      link: "https://sbgames.org/sbgames2015/anaispdf/cultura-full/147542.pdf"
    },
    {
      title: "Labuta Batuta: a mobile educational game for older adults",
      link: "https://sbgames.org/sbgames2015/anaispdf/artesedesign-full/147464.pdf"
    },
    {
      title: "The World of Wells: Design and Gameplay",
      link: "https://www.sbgames.org/sbgames2014/papers/art_design/short/A&D_Short_O%20Mundo%20de%20Wells.pdf"
    },
    {
      title: "Traveling around the world: a smartphone game project focusing on the elderly",
      link: "https://www.sbgames.org/sbgames2014/papers/art_design/full/A&D_Full_Viajando%20pelo%20mundo.pdf"
    }
  ];

  return (
    <section id="research" className="py-20 bg-gaming-bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gaming-primary to-gaming-accent bg-clip-text text-transparent">
            Research Publications
          </h2>
          <p className="text-xl text-gaming-text-muted max-w-3xl mx-auto mb-4">
            Academic contributions focused on virtual reality, digital games, and accessibility for older adults
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-gradient-card border border-gaming-bg-tertiary rounded-full">
            <FileText className="h-5 w-5 text-gaming-primary mr-2" />
            <span className="text-gaming-text font-semibold">10+ Publications</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <Card key={index} className="bg-gradient-card border-gaming-bg-tertiary hover:border-gaming-primary/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <FileText className="h-6 w-6 text-gaming-primary flex-shrink-0 mt-1" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <CardTitle className="text-gaming-text mb-4 text-lg leading-tight">
                  {publication.title}
                </CardTitle>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gaming-primary/20 to-gaming-accent/20 text-gaming-primary border border-gaming-primary/30 rounded-lg hover:from-gaming-primary hover:to-gaming-accent hover:text-gaming-bg-primary transition-all duration-300 transform group-hover:scale-105"
                >
                  View Publication
                  <ExternalLink className="h-4 w-4 ml-2" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;