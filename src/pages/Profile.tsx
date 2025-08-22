import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProgressRing from "@/components/ProgressRing";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Edit3, 
  Camera, 
  Trophy, 
  Target, 
  Calendar,
  Clock,
  MessageCircle,
  Users,
  BookOpen,
  Mic,
  BarChart3,
  Star,
  Flame,
  Award,
  Crown,
  Settings,
  Save
} from "lucide-react";

const Profile = () => {
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Alex Kim",
    email: "alex.kim@email.com",
    bio: "Passionate learner improving English for career advancement. Love connecting with people from different cultures!",
    level: "Intermediate",
    joinDate: "March 2024",
    goals: "Business English, Job Interviews, Presentation Skills"
  });

  const stats = {
    totalSessions: 47,
    totalMinutes: 1240,
    currentStreak: 12,
    longestStreak: 18,
    averageScore: 82,
    totalPoints: 7890
  };

  const achievements = [
    { id: 1, title: "First Steps", description: "Complete your first conversation", icon: MessageCircle, earned: true, date: "March 15, 2024" },
    { id: 2, title: "Week Warrior", description: "Practice for 7 consecutive days", icon: Flame, earned: true, date: "March 22, 2024" },
    { id: 3, title: "Grammar Guru", description: "Score 90%+ on grammar in 10 sessions", icon: BookOpen, earned: true, date: "April 5, 2024" },
    { id: 4, title: "Social Speaker", description: "Complete 5 peer practice sessions", icon: Users, earned: true, date: "April 12, 2024" },
    { id: 5, title: "Consistent Learner", description: "Practice for 30 consecutive days", icon: Calendar, earned: true, date: "April 20, 2024" },
    { id: 6, title: "Pronunciation Pro", description: "Score 95%+ on pronunciation", icon: Mic, earned: false, date: null },
    { id: 7, title: "Fluency Master", description: "Reach Advanced level", icon: Star, earned: false, date: null },
    { id: 8, title: "Community Leader", description: "Help 10 other learners", icon: Crown, earned: false, date: null }
  ];

  const recentSessions = [
    { 
      type: "AI Practice", 
      topic: "Job Interview", 
      date: "2 hours ago", 
      duration: "15 min", 
      scores: { grammar: 92, pronunciation: 88, fluency: 85 }
    },
    { 
      type: "Peer Chat", 
      topic: "Travel Stories", 
      date: "1 day ago", 
      duration: "20 min", 
      scores: { grammar: 88, pronunciation: 82, fluency: 90 }
    },
    { 
      type: "Micro-Learning", 
      topic: "Business Idioms", 
      date: "2 days ago", 
      duration: "5 min", 
      scores: { grammar: 95, pronunciation: 85, fluency: 88 }
    },
    { 
      type: "AI Practice", 
      topic: "Presentation Skills", 
      date: "3 days ago", 
      duration: "18 min", 
      scores: { grammar: 90, pronunciation: 78, fluency: 86 }
    }
  ];

  const handleSaveProfile = () => {
    setIsEditing(false);
    // Here you would typically save to a backend
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
                <div className="text-2xl font-bold gradient-text">Profile</div>
                <div className="text-sm text-muted-foreground">Manage your learning journey</div>
              </div>
            </div>
            <Button
              variant={isEditing ? "default" : "glass"}
              onClick={isEditing ? handleSaveProfile : () => setIsEditing(true)}
            >
              {isEditing ? (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </>
              ) : (
                <>
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </>
              )}
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Basic Info */}
            <Card className="glass-card border-card-border">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="text-2xl">{profile.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="glass" size="icon" className="absolute bottom-0 right-0">
                        <Camera className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-card-foreground">Name</Label>
                        <Input
                          id="name"
                          value={profile.name}
                          onChange={(e) => setProfile({...profile, name: e.target.value})}
                          className="glass-card border-card-border text-card-foreground mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-card-foreground">Email</Label>
                        <Input
                          id="email"
                          value={profile.email}
                          onChange={(e) => setProfile({...profile, email: e.target.value})}
                          className="glass-card border-card-border text-card-foreground mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="bio" className="text-card-foreground">Bio</Label>
                        <Textarea
                          id="bio"
                          value={profile.bio}
                          onChange={(e) => setProfile({...profile, bio: e.target.value})}
                          className="glass-card border-card-border text-card-foreground mt-1"
                          rows={3}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className="text-2xl font-bold text-card-foreground mb-1">{profile.name}</h1>
                      <p className="text-muted-foreground mb-4">{profile.email}</p>
                      <Badge className="bg-gradient-secondary text-secondary-foreground mb-4">
                        {profile.level} Level
                      </Badge>
                      <p className="text-sm text-muted-foreground text-left">{profile.bio}</p>
                    </div>
                  )}
                </div>

                <div className="space-y-3 pt-4 border-t border-card-border">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Joined</span>
                    <span className="text-card-foreground">{profile.joinDate}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Goals</span>
                    <span className="text-card-foreground text-right text-sm">{profile.goals}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-card border-card-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{stats.totalSessions}</div>
                    <div className="text-xs text-muted-foreground">Sessions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{stats.totalMinutes}</div>
                    <div className="text-xs text-muted-foreground">Minutes</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{stats.currentStreak}</div>
                    <div className="text-xs text-muted-foreground">Day Streak</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-yellow-500">{stats.averageScore}%</div>
                    <div className="text-xs text-muted-foreground">Avg Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-muted/20 mb-6">
                <TabsTrigger value="overview" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="achievements" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Trophy className="w-4 h-4 mr-2" />
                  Achievements
                </TabsTrigger>
                <TabsTrigger value="history" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                  <Clock className="w-4 h-4 mr-2" />
                  History
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-6">
                {/* Progress Overview */}
                <Card className="glass-card border-card-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Skill Progress</CardTitle>
                    <CardDescription>Your improvement across different areas</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                      <div>
                        <ProgressRing progress={85} size={120} color="hsl(var(--primary))">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-card-foreground">85%</div>
                            <div className="text-xs text-muted-foreground">Grammar</div>
                          </div>
                        </ProgressRing>
                      </div>
                      <div>
                        <ProgressRing progress={78} size={120} color="hsl(var(--secondary))">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-card-foreground">78%</div>
                            <div className="text-xs text-muted-foreground">Pronunciation</div>
                          </div>
                        </ProgressRing>
                      </div>
                      <div>
                        <ProgressRing progress={82} size={120} color="hsl(var(--accent))">
                          <div className="text-center">
                            <div className="text-2xl font-bold text-card-foreground">82%</div>
                            <div className="text-xs text-muted-foreground">Fluency</div>
                          </div>
                        </ProgressRing>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Activity Summary */}
                <div className="grid md:grid-cols-2 gap-6">
                  <Card className="glass-card border-card-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Streaks</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Flame className="w-5 h-5 text-orange-500 mr-2" />
                            <span className="text-card-foreground">Current Streak</span>
                          </div>
                          <span className="text-2xl font-bold text-orange-500">{stats.currentStreak}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <Crown className="w-5 h-5 text-yellow-500 mr-2" />
                            <span className="text-card-foreground">Longest Streak</span>
                          </div>
                          <span className="text-2xl font-bold text-yellow-500">{stats.longestStreak}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="glass-card border-card-border">
                    <CardHeader>
                      <CardTitle className="text-card-foreground">Total Points</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-center">
                        <div className="text-4xl font-bold gradient-text mb-2">{stats.totalPoints}</div>
                        <div className="text-muted-foreground">Lifetime Points Earned</div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Achievements Tab */}
              <TabsContent value="achievements">
                <Card className="glass-card border-card-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Your Achievements</CardTitle>
                    <CardDescription>Unlock badges by reaching learning milestones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-4">
                      {achievements.map((achievement) => (
                        <div
                          key={achievement.id}
                          className={`p-4 rounded-xl border transition-all ${
                            achievement.earned
                              ? 'bg-gradient-primary/20 border-primary/30 shadow-glow'
                              : 'bg-muted/10 border-muted/30 opacity-60'
                          }`}
                        >
                          <div className="flex items-start space-x-4">
                            <div className={`p-2 rounded-lg ${
                              achievement.earned ? 'bg-primary/20' : 'bg-muted/20'
                            }`}>
                              <achievement.icon className={`w-6 h-6 ${
                                achievement.earned ? 'text-primary' : 'text-muted-foreground'
                              }`} />
                            </div>
                            <div className="flex-1">
                              <h3 className={`font-semibold ${
                                achievement.earned ? 'text-card-foreground' : 'text-muted-foreground'
                              }`}>
                                {achievement.title}
                              </h3>
                              <p className="text-sm text-muted-foreground mb-2">
                                {achievement.description}
                              </p>
                              {achievement.earned && achievement.date && (
                                <Badge variant="secondary" className="text-xs">
                                  Earned {achievement.date}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history">
                <Card className="glass-card border-card-border">
                  <CardHeader>
                    <CardTitle className="text-card-foreground">Recent Sessions</CardTitle>
                    <CardDescription>Your latest practice activities</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentSessions.map((session, index) => (
                        <div key={index} className="p-4 rounded-xl bg-background-secondary/30">
                          <div className="flex items-center justify-between mb-3">
                            <div>
                              <div className="font-semibold text-card-foreground">{session.topic}</div>
                              <div className="text-sm text-muted-foreground">
                                {session.type} • {session.duration} • {session.date}
                              </div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4 text-center">
                            <div>
                              <div className="text-lg font-bold text-accent">{session.scores.grammar}%</div>
                              <div className="text-xs text-muted-foreground">Grammar</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-secondary">{session.scores.pronunciation}%</div>
                              <div className="text-xs text-muted-foreground">Pronunciation</div>
                            </div>
                            <div>
                              <div className="text-lg font-bold text-primary">{session.scores.fluency}%</div>
                              <div className="text-xs text-muted-foreground">Fluency</div>
                            </div>
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
      </div>
    </div>
  );
};

export default Profile;