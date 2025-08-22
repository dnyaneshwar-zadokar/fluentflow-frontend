import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Trophy, 
  Medal,
  Award,
  Crown,
  Flame,
  Target,
  TrendingUp,
  Calendar,
  Globe,
  Users
} from "lucide-react";

const Leaderboard = () => {
  const navigate = useNavigate();

  const weeklyLeaders = [
    { 
      rank: 1, 
      name: "Sarah Chen", 
      avatar: "/placeholder.svg", 
      points: 2340, 
      streak: 15, 
      country: "🇸🇬 Singapore",
      level: "Advanced",
      change: "+2"
    },
    { 
      rank: 2, 
      name: "Alex Kim", 
      avatar: "/placeholder.svg", 
      points: 2180, 
      streak: 12, 
      country: "🇺🇸 USA",
      level: "Intermediate",
      change: "0",
      isYou: true
    },
    { 
      rank: 3, 
      name: "Miguel Lopez", 
      avatar: "/placeholder.svg", 
      points: 2050, 
      streak: 8, 
      country: "🇪🇸 Spain",
      level: "Advanced",
      change: "-1"
    },
    { 
      rank: 4, 
      name: "Yuki Tanaka", 
      avatar: "/placeholder.svg", 
      points: 1980, 
      streak: 18, 
      country: "🇯🇵 Japan",
      level: "Intermediate",
      change: "+3"
    },
    { 
      rank: 5, 
      name: "Emma Wilson", 
      avatar: "/placeholder.svg", 
      points: 1920, 
      streak: 6, 
      country: "🇬🇧 UK",
      level: "Advanced",
      change: "+1"
    },
    { 
      rank: 6, 
      name: "Ahmed Hassan", 
      avatar: "/placeholder.svg", 
      points: 1850, 
      streak: 9, 
      country: "🇪🇬 Egypt",
      level: "Beginner",
      change: "-2"
    },
    { 
      rank: 7, 
      name: "Maria Silva", 
      avatar: "/placeholder.svg", 
      points: 1780, 
      streak: 11, 
      country: "🇧🇷 Brazil",
      level: "Intermediate",
      change: "+4"
    }
  ];

  const monthlyLeaders = [
    { rank: 1, name: "Chen Wei", points: 8450, country: "🇨🇳 China" },
    { rank: 2, name: "Alex Kim", points: 7890, country: "🇺🇸 USA", isYou: true },
    { rank: 3, name: "Isabella Rodriguez", points: 7320, country: "🇲🇽 Mexico" }
  ];

  const allTimeLeaders = [
    { rank: 1, name: "Professor Lin", points: 45680, country: "🇹🇼 Taiwan" },
    { rank: 2, name: "David Park", points: 42130, country: "🇰🇷 Korea" },
    { rank: 3, name: "Sophie Mueller", points: 38950, country: "🇩🇪 Germany" }
  ];

  const getRankIcon = (rank: number) => {
    switch(rank) {
      case 1: return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2: return <Medal className="w-6 h-6 text-gray-400" />;
      case 3: return <Award className="w-6 h-6 text-orange-500" />;
      default: return <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center text-sm font-bold text-muted-foreground">{rank}</div>;
    }
  };

  const getChangeColor = (change: string) => {
    if (change.startsWith('+')) return 'text-green-500';
    if (change.startsWith('-')) return 'text-red-500';
    return 'text-muted-foreground';
  };

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* Header */}
      <header className="glass-card border-0 rounded-none border-b border-card-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => navigate('/dashboard')}>
                <ArrowLeft className="w-5 h-5" />
              </Button>
              <div>
                <div className="text-2xl font-bold gradient-text">Leaderboard</div>
                <div className="text-sm text-muted-foreground">Compete with learners worldwide</div>
              </div>
            </div>
            <Badge className="bg-gradient-secondary text-secondary-foreground">
              <Users className="w-3 h-3 mr-1" />
              50K+ Active Learners
            </Badge>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Your Rank Summary */}
        <Card className="glass-card border-card-border mb-8">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-1">#2</div>
                <div className="text-sm text-muted-foreground">Weekly Rank</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-1">2,180</div>
                <div className="text-sm text-muted-foreground">Points This Week</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-1">12</div>
                <div className="text-sm text-muted-foreground">Day Streak</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-warning mb-1">85%</div>
                <div className="text-sm text-muted-foreground">Win Rate</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-muted/20 mb-8">
            <TabsTrigger value="weekly" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Calendar className="w-4 h-4 mr-2" />
              This Week
            </TabsTrigger>
            <TabsTrigger value="monthly" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <TrendingUp className="w-4 h-4 mr-2" />
              This Month
            </TabsTrigger>
            <TabsTrigger value="alltime" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Globe className="w-4 h-4 mr-2" />
              All Time
            </TabsTrigger>
          </TabsList>

          {/* Weekly Leaderboard */}
          <TabsContent value="weekly">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Top 3 Podium */}
              <div className="lg:col-span-1">
                <Card className="glass-card border-card-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground text-center">🏆 Top 3 This Week</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {weeklyLeaders.slice(0, 3).map((leader) => (
                      <div
                        key={leader.rank}
                        className={`p-4 rounded-2xl transition-all ${
                          leader.isYou 
                            ? 'bg-gradient-primary/20 border border-primary/30 shadow-glow' 
                            : 'bg-background-secondary/30'
                        } ${leader.rank === 1 ? 'ring-2 ring-yellow-500/50' : ''}`}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="relative">
                            {getRankIcon(leader.rank)}
                            {leader.rank === 1 && (
                              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
                            )}
                          </div>
                          <Avatar className="h-12 w-12">
                            <AvatarImage src={leader.avatar} />
                            <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <div className="font-semibold text-card-foreground flex items-center">
                              {leader.name}
                              {leader.isYou && <Badge variant="secondary" className="ml-2 text-xs">You</Badge>}
                            </div>
                            <div className="text-sm text-muted-foreground">{leader.country}</div>
                            <div className="text-sm font-medium text-primary">{leader.points} pts</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Full Rankings */}
              <div className="lg:col-span-2">
                <Card className="glass-card border-card-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Weekly Rankings</CardTitle>
                    <CardDescription>Updated every hour</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {weeklyLeaders.map((leader) => (
                        <div
                          key={leader.rank}
                          className={`flex items-center justify-between p-4 rounded-xl transition-all hover:scale-[1.02] ${
                            leader.isYou 
                              ? 'bg-gradient-primary/20 border border-primary/30' 
                              : 'bg-background-secondary/30 hover:bg-background-secondary/50'
                          }`}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2">
                              {getRankIcon(leader.rank)}
                              <div className={`text-xs font-medium ${getChangeColor(leader.change)}`}>
                                {leader.change !== "0" && leader.change}
                              </div>
                            </div>
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={leader.avatar} />
                              <AvatarFallback>{leader.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold text-card-foreground flex items-center">
                                {leader.name}
                                {leader.isYou && <Badge variant="secondary" className="ml-2 text-xs">You</Badge>}
                              </div>
                              <div className="text-sm text-muted-foreground">{leader.country} • {leader.level}</div>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-card-foreground">{leader.points}</div>
                            <div className="flex items-center text-xs text-muted-foreground">
                              <Flame className="w-3 h-3 mr-1 text-orange-500" />
                              {leader.streak}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Monthly Leaderboard */}
          <TabsContent value="monthly">
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Monthly Champions</CardTitle>
                <CardDescription>Top performers this month</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {monthlyLeaders.map((leader) => (
                    <div
                      key={leader.rank}
                      className={`flex items-center justify-between p-6 rounded-xl ${
                        leader.isYou 
                          ? 'bg-gradient-primary/20 border border-primary/30' 
                          : 'bg-background-secondary/30'
                      }`}
                    >
                      <div className="flex items-center space-x-4">
                        {getRankIcon(leader.rank)}
                        <div>
                          <div className="font-semibold text-card-foreground text-lg">
                            {leader.name}
                            {leader.isYou && <Badge variant="secondary" className="ml-2">You</Badge>}
                          </div>
                          <div className="text-muted-foreground">{leader.country}</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-card-foreground">{leader.points}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* All Time Leaderboard */}
          <TabsContent value="alltime">
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Hall of Fame</CardTitle>
                <CardDescription>All-time highest achievers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {allTimeLeaders.map((leader) => (
                    <div
                      key={leader.rank}
                      className="flex items-center justify-between p-6 rounded-xl bg-background-secondary/30"
                    >
                      <div className="flex items-center space-x-4">
                        {getRankIcon(leader.rank)}
                        <div>
                          <div className="font-semibold text-card-foreground text-lg">{leader.name}</div>
                          <div className="text-muted-foreground">{leader.country}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-card-foreground">{leader.points}</div>
                        <div className="text-sm text-muted-foreground">lifetime points</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Leaderboard;