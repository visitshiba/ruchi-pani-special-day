import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Heart, Sparkles, Palette, Cpu } from "lucide-react";
import birthdayBg from "@/assets/birthday-bg.jpg";

const BirthdayLanding = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${birthdayBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-warm/70" />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 floating-animation">
        <Palette className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 floating-animation" style={{ animationDelay: "1s" }}>
        <Sparkles className="w-6 h-6 text-secondary opacity-60" />
      </div>
      <div className="absolute bottom-32 left-20 floating-animation" style={{ animationDelay: "2s" }}>
        <Cpu className="w-7 h-7 text-accent opacity-60" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Happy Birthday Header */}
          <div className="fade-in-up stagger-1">
            <h1 className="text-6xl md:text-8xl font-dancing font-bold gradient-text mb-4">
              Happy Birthday
            </h1>
            <h2 className="text-4xl md:text-6xl font-dancing font-semibold text-primary mb-8">
              Ruchi Pani! 🎨
            </h2>
          </div>

          {/* Age Card */}
          <div className="fade-in-up stagger-2 mb-8">
            <Card className="inline-block bg-card/80 backdrop-blur-sm shadow-warm p-6 border-primary/20">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                <span className="text-2xl font-poppins font-medium text-card-foreground">
                  Celebrating 20 wonderful years!
                </span>
                <Heart className="w-6 h-6 text-primary" />
              </div>
            </Card>
          </div>

          {/* Welcome Message */}
          <div className="fade-in-up stagger-3 mb-12">
            <p className="text-xl md:text-2xl font-poppins text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              A special celebration for an amazing friend who brings colors to everyone's life, 
              just like her beautiful paintings.
            </p>
          </div>

          {/* From Message */}
          <div className="fade-in-up stagger-4 mb-8">
            <p className="text-lg font-poppins text-muted-foreground">
              With warm wishes from your friend,
            </p>
            <p className="text-2xl font-dancing font-semibold text-primary">
              Sujit Sahoo
            </p>
          </div>

          {/* Continue Button */}
          <div className="fade-in-up stagger-5">
            <Button 
              onClick={() => navigate('/story')}
              size="lg"
              className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground font-poppins font-medium shadow-glow hover:shadow-warm transition-all duration-300 transform hover:scale-105 px-8 py-4 text-lg"
            >
              Begin the Journey
              <Sparkles className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BirthdayLanding;