import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MessageCircle, Zap, Users, Mic, BarChart3, Trophy, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Conversations",
      description: "Practice speaking with our advanced AI that adapts to your level and provides real-time feedback."
    },
    {
      icon: Mic,
      title: "Pronunciation Analysis",
      description: "Get instant feedback on your pronunciation with our cutting-edge speech recognition technology."
    },
    {
      icon: Users,
      title: "Peer Practice",
      description: "Connect with learners worldwide for authentic conversations and cultural exchange."
    },
    {
      icon: BarChart3,
      title: "Progress Tracking",
      description: "Monitor your improvement with detailed analytics and personalized learning insights."
    },
    {
      icon: Trophy,
      title: "Gamified Learning",
      description: "Earn badges, climb leaderboards, and maintain streaks to stay motivated."
    },
    {
      icon: Zap,
      title: "Micro-Learning",
      description: "Quick daily lessons that fit into your busy schedule and build lasting habits."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer",
      content: "SpeakFluently transformed my confidence in professional meetings. The AI feedback is incredibly accurate!",
      rating: 5
    },
    {
      name: "Miguel Rodriguez",
      role: "University Student",
      content: "I improved my pronunciation by 40% in just 3 months. The gamification keeps me coming back daily.",
      rating: 5
    },
    {
      name: "Yuki Tanaka",
      role: "Business Analyst",
      content: "The peer practice feature helped me connect with amazing people while improving my English naturally.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-0 rounded-none">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SpeakFluently</div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-card-foreground hover:text-primary transition-colors">Features</a>
              <a href="#how-it-works" className="text-card-foreground hover:text-primary transition-colors">How It Works</a>
              <a href="#testimonials" className="text-card-foreground hover:text-primary transition-colors">Testimonials</a>
            </div>
            <Button variant="glass" onClick={() => navigate('/auth')}>
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto text-center">
          <div className="animate-slide-up">
            <Badge className="mb-6 bg-gradient-secondary text-secondary-foreground border-0">
              🚀 AI-Powered English Learning
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Speak Better.<br />
              <span className="gradient-text">Speak Confidently.</span><br />
              SpeakFluently.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Transform your English communication skills with AI-powered practice, real-time feedback, and personalized learning paths designed for professionals and students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="xl" onClick={() => navigate('/auth')} className="animate-glow">
                Start Practicing Free
                <ChevronRight className="w-5 h-5" />
              </Button>
              <Button variant="glass" size="xl">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to master English communication and build unshakeable confidence.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="glass-card p-8 border-card-border hover:scale-105 transition-all duration-300">
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start speaking confidently in just three simple steps.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Take Assessment", description: "Complete our AI-powered assessment to determine your current level and learning goals." },
              { step: "02", title: "Practice Daily", description: "Engage in personalized conversations with our AI and connect with peers worldwide." },
              { step: "03", title: "Track Progress", description: "Monitor your improvement with detailed analytics and celebrate your achievements." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center text-2xl font-bold text-primary-foreground mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-card-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of learners who've transformed their English communication skills.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="glass-card p-8 border-card-border">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <Card className="glass-card p-12 border-card-border max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-card-foreground">
              Ready to Transform Your English?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join over 50,000 learners who are already speaking with confidence. Start your journey today.
            </p>
            <Button variant="hero" size="xl" onClick={() => navigate('/auth')} className="animate-glow">
              Start Your Free Trial
              <ChevronRight className="w-5 h-5" />
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-card-border">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold gradient-text mb-4">SpeakFluently</div>
          <p className="text-muted-foreground">
            © 2024 SpeakFluently. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;