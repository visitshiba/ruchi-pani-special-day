import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Camera, Heart, Home } from "lucide-react";

const FinalPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-warm p-4 py-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12 fade-in-up">
          <h1 className="text-5xl md:text-6xl font-dancing font-bold gradient-text mb-4">
            A Heartfelt Note
          </h1>
          <p className="text-xl font-poppins text-muted-foreground">
            Sometimes the most beautiful things are felt, not seen
          </p>
        </div>

        {/* Main Message Card */}
        <Card className="bg-card/90 backdrop-blur-sm shadow-warm border-primary/20 p-8 md:p-12 mb-8 fade-in-up stagger-2">
          <div className="text-center">
            <div className="mb-8">
              <Camera className="w-16 h-16 text-primary mx-auto mb-6 opacity-60" />
            </div>
            
            <div className="space-y-6 text-lg leading-relaxed font-poppins text-card-foreground">
              <p className="first-letter:text-5xl first-letter:font-dancing first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                I have no photos of you. If I asked you for photos, it might not feel good, 
                so I couldn't add your photo to these pages — but your memories live here 
                more beautifully than any picture.
              </p>
              
              <div className="bg-secondary/20 rounded-lg p-6 border-l-4 border-primary my-8">
                <p className="font-medium text-primary text-xl">
                  "The best portraits are painted not with colors, but with memories and emotions."
                </p>
              </div>
              
              <p>
                Photos capture a moment, but memories capture the essence. Every conversation, 
                every shared laugh, every moment of understanding between us has created a 
                gallery more vibrant than any photograph could ever be.
              </p>
              
              <p>
                Your kindness, your talent, your authenticity — these are the images that 
                remain in my heart. They're more precious than any photo because they 
                represent who you truly are.
              </p>
            </div>
          </div>
        </Card>

        {/* Birthday Wish Card */}
        <Card className="bg-gradient-secondary/30 backdrop-blur-sm shadow-warm border-secondary/30 p-8 md:p-12 mb-8 fade-in-up stagger-3">
          <div className="text-center">
            <div className="flex justify-center items-center gap-2 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-dancing font-bold text-primary">
                Happy 20th Birthday, Ruchi!
              </h2>
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <p className="text-xl font-poppins leading-relaxed text-card-foreground">
              May this new year of your life bring you endless opportunities to create, 
              to inspire, and to shine as brightly as you always do. Here's to many more 
              years of friendship, laughter, and shared memories!
            </p>
            <div className="mt-6">
              <p className="text-lg font-dancing text-primary">
                With warm wishes and respect,
              </p>
              <p className="text-2xl font-dancing font-semibold text-primary">
                Sujit Sahoo
              </p>
            </div>
          </div>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center fade-in-up stagger-4">
          <Button 
            variant="outline"
            onClick={() => navigate('/quotes')}
            className="bg-card/80 backdrop-blur-sm hover:bg-card border-primary/30 hover:border-primary text-card-foreground hover:text-primary transition-all duration-300"
          >
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Quotes
          </Button>
          
          <Button 
            onClick={() => navigate('/')}
            className="bg-gradient-primary hover:bg-gradient-primary/90 text-primary-foreground shadow-glow hover:shadow-warm transition-all duration-300 transform hover:scale-105"
          >
            <Home className="mr-2 w-4 h-4" />
            Back to Beginning
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FinalPage;