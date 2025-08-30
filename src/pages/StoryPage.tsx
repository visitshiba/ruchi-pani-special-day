import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, Coffee, Heart } from "lucide-react";

const StoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm p-4 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-dancing font-bold gradient-text mb-4">
            Our Story
          </h1>
          <p className="text-xl font-poppins text-muted-foreground">
            From DBE Lab to a beautiful friendship
          </p>
        </div>

        {/* Main Story Card */}
        <Card className="bg-card/90 backdrop-blur-sm shadow-warm border-primary/20 p-8 md:p-12 mb-8 fade-in-up stagger-2">
          <div className="space-y-6 text-lg leading-relaxed font-poppins text-card-foreground">
            <p className="first-letter:text-5xl first-letter:font-dancing first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
              In DBE Lab, I first met you — a simple moment that became a special memory. 
              On 3rd September 2005, the world gifted a kind-hearted and talented person like you. 
              I always tried to become your good and close friend.
            </p>
            
            <div className="flex items-center gap-2 my-6">
              <Coffee className="w-5 h-5 text-accent" />
              <div className="flex-1 h-px bg-border"></div>
              <Coffee className="w-5 h-5 text-accent" />
            </div>
            
            <p>
              That's why I invited you for coffee, but you became busy. Later, I also asked you 
              for mela and a movie, but you refused because of work. Sometimes I felt you ignored me, 
              but you honestly said that you can't be comfortable with boys so soon.
            </p>
            
            <div className="bg-secondary/20 rounded-lg p-6 border-l-4 border-primary">
              <p className="font-medium text-primary">
                That honesty is what makes you unique and special.
              </p>
            </div>
            
            <p>
              Your authenticity, your dedication to your work, and your genuine nature are qualities 
              that make you truly remarkable. Every interaction, every moment has been a privilege.
            </p>
          </div>
        </Card>

        {/* Floating Hearts */}
        <div className="absolute top-32 right-10 floating-animation opacity-30">
          <Heart className="w-6 h-6 text-primary" />
        </div>
        <div className="absolute bottom-40 left-16 floating-animation opacity-30" style={{ animationDelay: "1.5s" }}>
          <Heart className="w-4 h-4 text-secondary" />
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center fade-in-up stagger-3">
          <Button 
            variant="outline"
            onClick={() => navigate('/')}
            className="bg-card/80 backdrop-blur-sm hover:bg-card border-primary/30 hover:border-primary text-card-foreground hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Home
          </Button>
          
          <Button 
            onClick={() => navigate('/quotes')}
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow hover:shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            Inspiring Words
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StoryPage;