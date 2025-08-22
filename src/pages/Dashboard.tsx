import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import ProgressRing from "@/components/ProgressRing";
import { useNavigate } from "react-router-dom";
import { 
  Flame, 
  Target, 
  Trophy, 
  Clock, 
  MessageCircle, 
  Mic, 
  BookOpen, 
  Users,
  BarChart3,
  Star,
  ChevronRight,
  Settings,
  LogOut
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const stats = {
    streak: 12,
    totalSessions: 47,
    minutesPracticed: 1240,
    fluencyScore: 78,
    grammarScore: 85,
    pronunciationScore: 72
  };

  const achievements = [
    { id: 1, title: "First Conversation", icon: MessageCircle, earned: true },
    { id: 2, title: "Week Warrior", icon: Flame, earned: true },
    { id: 3, title: "Grammar Guru", icon: BookOpen, earned: true },
    { id: 4, title: "Pronunciation Pro", icon: Mic, earned: false },
    { id: 5, title: "Social Speaker", icon: Users, earned: false },
    { id: 6, title: "Fluency Master", icon: Star, earned: false }
  ];

  const recentActivities = [
    { type: "AI Practice", topic: "Job Interview", score: 92, duration: "15 min", timestamp: "2 hours ago" },
    { type: "Peer Chat", topic: "Travel Stories", score: 88, duration: "20 min", timestamp: "1 day ago" },
    { type: "Micro-Learning", topic: "Business Idioms", score: 95, duration: "5 min", timestamp: "2 days ago" }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary text-foreground">
      {/* Header */}
      <header className="glass-card border-0 rounded-none border-b border-card-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold gradient-text">SpeakFluently</div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => navigate('/')}>
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2 text-card-foreground">
            Welcome back, Alex! 👋
          </h1>
          <p className="text-muted-foreground text-lg">
            Ready to continue your English learning journey?
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="glass-card border-card-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Flame className="w-8 h-8 text-orange-500" />
              </div>
              <div className="text-2xl font-bold text-card-foreground">{stats.streak}</div>
              <div className="text-sm text-muted-foreground">Day Streak</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-card-foreground">{stats.totalSessions}</div>
              <div className="text-sm text-muted-foreground">Sessions</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-card-foreground">{stats.minutesPracticed}</div>
              <div className="text-sm text-muted-foreground">Minutes</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-card-border">
            <CardContent className="p-6 text-center">
              <div className="flex items-center justify-center mb-2">
                <Trophy className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-card-foreground">15</div>
              <div className="text-sm text-muted-foreground">Achievements</div>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Rings */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Your Progress</CardTitle>
                <CardDescription>Track your improvement across key skills</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-8 text-center">
                  <div>
                    <ProgressRing progress={stats.fluencyScore} size={100} color="hsl(var(--primary))">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-card-foreground">{stats.fluencyScore}%</div>
                        <div className="text-xs text-muted-foreground">Fluency</div>
                      </div>
                    </ProgressRing>
                  </div>
                  <div>
                    <ProgressRing progress={stats.grammarScore} size={100} color="hsl(var(--accent))">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-card-foreground">{stats.grammarScore}%</div>
                        <div className="text-xs text-muted-foreground">Grammar</div>
                      </div>
                    </ProgressRing>
                  </div>
                  <div>
                    <ProgressRing progress={stats.pronunciationScore} size={100} color="hsl(var(--secondary))">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-card-foreground">{stats.pronunciationScore}%</div>
                        <div className="text-xs text-muted-foreground">Pronunciation</div>
                      </div>
                    </ProgressRing>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Start Practicing</CardTitle>
                <CardDescription>Choose your learning style for today</CardDescription>
              </CardHeader>
              <CardContent className="grid md:grid-cols-3 gap-4">
                <Button 
                  variant="glass" 
                  className="h-20 flex-col space-y-2"
                  onClick={() => navigate('/practice')}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>AI Practice</span>
                </Button>
                <Button 
                  variant="glass" 
                  className="h-20 flex-col space-y-2"
                  onClick={() => navigate('/practice')}
                >
                  <Users className="w-6 h-6" />
                  <span>Peer Chat</span>
                </Button>
                <Button 
                  variant="glass" 
                  className="h-20 flex-col space-y-2"
                  onClick={() => navigate('/practice')}
                >
                  <BookOpen className="w-6 h-6" />
                  <span>Micro-Learning</span>
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Recent Activity</CardTitle>
                <CardDescription>Your latest practice sessions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background-secondary/30">
                      <div className="flex items-center space-x-4">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <div>
                          <div className="font-medium text-card-foreground">{activity.topic}</div>
                          <div className="text-sm text-muted-foreground">{activity.type} • {activity.duration}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary" className="bg-gradient-success text-success-foreground">
                          {activity.score}%
                        </Badge>
                        <div className="text-xs text-muted-foreground mt-1">{activity.timestamp}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Achievements</CardTitle>
                <CardDescription>Your learning milestones</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-3 rounded-xl text-center transition-all ${
                        achievement.earned
                          ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                          : 'bg-muted/20 text-muted-foreground'
                      }`}
                    >
                      <achievement.icon className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-xs font-medium">{achievement.title}</div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/profile')}>
                  View All
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Leaderboard Preview */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">This Week's Top Learners</CardTitle>
                <CardDescription>See where you rank</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { rank: 1, name: "Sarah M.", points: 2340, isYou: false },
                    { rank: 2, name: "Alex K.", points: 2180, isYou: true },
                    { rank: 3, name: "Mike L.", points: 2050, isYou: false }
                  ].map((user) => (
                    <div
                      key={user.rank}
                      className={`flex items-center justify-between p-3 rounded-xl ${
                        user.isYou ? 'bg-gradient-primary/20 border border-primary/30' : 'bg-background-secondary/30'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                          user.rank === 1 ? 'bg-yellow-500 text-white' :
                          user.rank === 2 ? 'bg-gray-400 text-white' :
                          'bg-orange-500 text-white'
                        }`}>
                          {user.rank}
                        </div>
                        <span className={`font-medium ${user.isYou ? 'text-primary' : 'text-card-foreground'}`}>
                          {user.name} {user.isYou && '(You)'}
                        </span>
                      </div>
                      <span className="text-sm text-muted-foreground">{user.points} pts</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4" onClick={() => navigate('/leaderboard')}>
                  View Full Leaderboard
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;