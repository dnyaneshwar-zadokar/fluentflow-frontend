import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Leaderboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* Header */}
      <header className="glass-card border-0 rounded-none border-b border-card-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => navigate('/dashboard')}
                className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <div className="text-2xl font-bold gradient-text">Leaderboard</div>
                <div className="text-sm text-muted-foreground">Compete with learners worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="glass-card border-card-border p-8">
          <h1 className="text-3xl font-bold text-card-foreground mb-6">Weekly Rankings</h1>
          
          <div className="space-y-4">
            {[
              { rank: 1, name: "Sarah Chen", points: 2340, country: "🇸🇬 Singapore" },
              { rank: 2, name: "Alex Kim", points: 2180, country: "🇺🇸 USA", isYou: true },
              { rank: 3, name: "Miguel Lopez", points: 2050, country: "🇪🇸 Spain" }
            ].map((leader) => (
              <div
                key={leader.rank}
                className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                  leader.isYou 
                    ? 'bg-gradient-primary/20 border border-primary/30' 
                    : 'bg-background-secondary/30'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    leader.rank === 1 ? 'bg-yellow-500 text-white' :
                    leader.rank === 2 ? 'bg-gray-400 text-white' :
                    'bg-orange-500 text-white'
                  }`}>
                    {leader.rank}
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">
                      {leader.name}
                      {leader.isYou && <span className="ml-2 text-xs bg-primary/20 text-primary px-2 py-1 rounded">You</span>}
                    </div>
                    <div className="text-sm text-muted-foreground">{leader.country}</div>
                  </div>
                </div>
                <div className="font-bold text-card-foreground">{leader.points} pts</div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => navigate('/dashboard')}
              className="px-6 py-3 bg-gradient-primary text-primary-foreground rounded-xl font-medium hover:shadow-glow transition-all"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;