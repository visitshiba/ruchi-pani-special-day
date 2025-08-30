import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Palette, Brain, Users, Star, Sparkles } from "lucide-react";

const QuotesPage = () => {
  const navigate = useNavigate();

  const quotes = [
    {
      text: "Every great friendship starts with a small step — for me, that step was meeting you in DBE Lab.",
      icon: Users,
      color: "text-primary"
    },
    {
      text: "Like your paintings, you add colors to the lives around you.",
      icon: Palette,
      color: "text-accent"
    },
    {
      text: "In AI & ML you create models, but in life you create inspiration.",
      icon: Brain,
      color: "text-secondary"
    },
    {
      text: "Turning 20 is not just about age, it's about new dreams, new hopes, and a brighter journey ahead.",
      icon: Star,
      color: "text-primary"
    },
    {
      text: "Friendship is not about how much time we spend, but how deeply we value each other.",
      icon: Sparkles,
      color: "text-accent"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-warm p-4 py-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-dancing font-bold gradient-text mb-4">
            Words of Inspiration
          </h1>
          <p className="text-xl font-poppins text-muted-foreground">
            Messages to celebrate your journey and friendship
          </p>
        </div>

        {/* Quotes Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {quotes.map((quote, index) => {
            const IconComponent = quote.icon;
            return (
              <Card 
                key={index}
                className={`bg-card/90 backdrop-blur-sm shadow-warm border-primary/20 p-6 hover:shadow-glow transition-all duration-300 hover:scale-105 fade-in-up stagger-${index + 1}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${quote.color} bg-secondary/20 p-3 rounded-full flex-shrink-0`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg font-poppins leading-relaxed text-card-foreground">
                      "{quote.text}"
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Special Message Card */}
        <Card className="bg-gradient-secondary/30 backdrop-blur-sm shadow-warm border-secondary/30 p-8 md:p-12 mb-8 fade-in-up stagger-5">
          <div className="text-center">
            <div className="mb-6">
              <Palette className="w-12 h-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-dancing font-bold text-primary mb-4">
                For the Artist & the Engineer
              </h2>
            </div>
            <p className="text-lg font-poppins leading-relaxed text-card-foreground max-w-3xl mx-auto">
              You beautifully balance creativity with logic, art with technology. Your paintings show your 
              artistic soul, while your work in AI & ML demonstrates your brilliant mind. This combination 
              makes you truly extraordinary. Keep painting your dreams and coding your future!
            </p>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center fade-in-up stagger-5">
          <Button 
            variant="outline"
            onClick={() => navigate('/story')}
            className="bg-card/80 backdrop-blur-sm hover:bg-card border-primary/30 hover:border-primary text-card-foreground hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Story
          </Button>
          
          <Button 
            onClick={() => navigate('/final')}
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow hover:shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            Final Message
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuotesPage;