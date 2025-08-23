import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Mic, 
  MicOff, 
  Send, 
  MessageCircle, 
  Users, 
  BookOpen,
  Volume2,
  Lightbulb,
  Target,
  Clock,
  CheckCircle,
  XCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Practice = () => {
  const navigate = useNavigate();
  const [isRecording, setIsRecording] = useState(false);
  const [message, setMessage] = useState("");
  const [activeTab, setActiveTab] = useState("ai-practice");
  const [isTabsCollapsed, setIsTabsCollapsed] = useState(false);
  const [conversation, setConversation] = useState([
    {
      role: "ai",
      content: "Hello! I'm your AI English tutor. Let's practice a job interview scenario. Can you tell me about your background and experience?",
      feedback: null
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newConversation = [...conversation, { 
      role: "user", 
      content: message,
      feedback: {
        grammar: 85,
        pronunciation: 78,
        fluency: 82,
        suggestions: ["Consider using 'have been working' instead of 'am working' for ongoing experience"]
      }
    }];
    
    setConversation(newConversation);
    setMessage("");
    
    // Simulate AI response
    setTimeout(() => {
      setConversation(prev => [...prev, {
        role: "ai",
        content: "That's great experience! Can you tell me about a challenging project you worked on and how you handled it?",
        feedback: null
      }]);
    }, 1000);
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
  };

  const microLearningTopics = [
    { title: "Business Idioms", duration: "5 min", completed: false, difficulty: "Intermediate" },
    { title: "Small Talk Starters", duration: "3 min", completed: true, difficulty: "Beginner" },
    { title: "Presentation Skills", duration: "8 min", completed: false, difficulty: "Advanced" },
    { title: "Email Writing", duration: "6 min", completed: false, difficulty: "Intermediate" }
  ];

  const peerSessions = [
    { name: "Maria S.", level: "Intermediate", topic: "Travel Stories", status: "online" },
    { name: "Kenji T.", level: "Advanced", topic: "Business English", status: "busy" },
    { name: "Ahmed R.", level: "Beginner", topic: "Daily Conversations", status: "online" }
  ];

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
                <div className="text-2xl font-bold gradient-text">Practice Session</div>
                <div className="text-sm text-muted-foreground">Choose your learning method</div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className="bg-gradient-success text-success-foreground">
                <Clock className="w-3 h-3 mr-1" />
                15:23
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Mobile Collapsible Tabs */}
        <div className="md:hidden mb-6">
          <Collapsible open={!isTabsCollapsed} onOpenChange={setIsTabsCollapsed}>
            <CollapsibleTrigger asChild>
              <Button variant="glass" className="w-full justify-between">
                <span className="flex items-center">
                  {activeTab === "ai-practice" && <><MessageCircle className="w-4 h-4 mr-2" />AI Practice</>}
                  {activeTab === "peer-practice" && <><Users className="w-4 h-4 mr-2" />Peer Practice</>}
                  {activeTab === "micro-learning" && <><BookOpen className="w-4 h-4 mr-2" />Micro-Learning</>}
                </span>
                {isTabsCollapsed ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <Button 
                variant={activeTab === "ai-practice" ? "default" : "glass"} 
                className="w-full justify-start"
                onClick={() => { setActiveTab("ai-practice"); setIsTabsCollapsed(true); }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                AI Practice
              </Button>
              <Button 
                variant={activeTab === "peer-practice" ? "default" : "glass"} 
                className="w-full justify-start"
                onClick={() => { setActiveTab("peer-practice"); setIsTabsCollapsed(true); }}
              >
                <Users className="w-4 h-4 mr-2" />
                Peer Practice
              </Button>
              <Button 
                variant={activeTab === "micro-learning" ? "default" : "glass"} 
                className="w-full justify-start"
                onClick={() => { setActiveTab("micro-learning"); setIsTabsCollapsed(true); }}
              >
                <BookOpen className="w-4 h-4 mr-2" />
                Micro-Learning
              </Button>
            </CollapsibleContent>
          </Collapsible>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {/* Desktop Tabs */}
          <TabsList className="hidden md:grid w-full grid-cols-3 bg-muted/20 mb-8">
            <TabsTrigger value="ai-practice" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <MessageCircle className="w-4 h-4 mr-2" />
              AI Practice
            </TabsTrigger>
            <TabsTrigger value="peer-practice" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <Users className="w-4 h-4 mr-2" />
              Peer Practice
            </TabsTrigger>
            <TabsTrigger value="micro-learning" className="text-card-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
              <BookOpen className="w-4 h-4 mr-2" />
              Micro-Learning
            </TabsTrigger>
          </TabsList>

          {/* AI Practice Tab */}
          <TabsContent value="ai-practice" className="grid lg:grid-cols-3 gap-6">
            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="glass-card border-card-border h-[600px] flex flex-col">
                <CardHeader>
                  <CardTitle className="text-card-foreground flex items-center">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Job Interview Practice
                  </CardTitle>
                  <CardDescription>Practice common interview questions with real-time feedback</CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  {/* Messages */}
                  <div className="flex-1 space-y-4 overflow-y-auto mb-4">
                    {conversation.map((msg, index) => (
                      <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[80%] p-4 rounded-2xl ${
                          msg.role === 'user' 
                            ? 'bg-gradient-primary text-primary-foreground' 
                            : 'bg-background-secondary/50 text-card-foreground'
                        }`}>
                          <p>{msg.content}</p>
                          {msg.feedback && (
                            <div className="mt-3 p-3 bg-background-secondary/30 rounded-xl">
                              <div className="text-xs font-medium mb-2 text-muted-foreground">Feedback:</div>
                              <div className="grid grid-cols-3 gap-2 mb-2">
                                <div className="text-center">
                                  <div className="text-sm font-bold text-accent">{msg.feedback.grammar}%</div>
                                  <div className="text-xs text-muted-foreground">Grammar</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-bold text-secondary">{msg.feedback.pronunciation}%</div>
                                  <div className="text-xs text-muted-foreground">Pronunciation</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-sm font-bold text-primary">{msg.feedback.fluency}%</div>
                                  <div className="text-xs text-muted-foreground">Fluency</div>
                                </div>
                              </div>
                              {msg.feedback.suggestions.map((suggestion, i) => (
                                <div key={i} className="text-xs text-muted-foreground flex items-start mt-1">
                                  <Lightbulb className="w-3 h-3 mr-1 mt-0.5 text-yellow-500" />
                                  {suggestion}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input Area */}
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 relative">
                      <Input
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Type your response or use voice..."
                        className="glass-card border-card-border text-card-foreground pr-12"
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-1 top-1"
                        onClick={toggleRecording}
                      >
                        {isRecording ? (
                          <MicOff className="w-4 h-4 text-error animate-pulse" />
                        ) : (
                          <Mic className="w-4 h-4" />
                        )}
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage} disabled={!message.trim()}>
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Session Stats */}
            <div className="space-y-6">
              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Session Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Messages Exchanged</span>
                      <span className="text-card-foreground font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Average Score</span>
                      <span className="text-card-foreground font-medium">82%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-card-foreground font-medium">15:23</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="glass" className="w-full justify-start">
                    <Target className="w-4 h-4 mr-2" />
                    Change Topic
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <Volume2 className="w-4 h-4 mr-2" />
                    Pronunciation Focus
                  </Button>
                  <Button variant="glass" className="w-full justify-start">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Grammar Check
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Peer Practice Tab */}
          <TabsContent value="peer-practice">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Available Partners</CardTitle>
                  <CardDescription>Connect with learners around the world</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {peerSessions.map((peer, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-xl bg-background-secondary/30">
                      <div>
                        <div className="font-medium text-card-foreground">{peer.name}</div>
                        <div className="text-sm text-muted-foreground">{peer.level} • {peer.topic}</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className={`w-2 h-2 rounded-full ${
                          peer.status === 'online' ? 'bg-green-500' : 'bg-yellow-500'
                        }`}></div>
                        <Button variant="outline" size="sm">
                          {peer.status === 'online' ? 'Connect' : 'Wait'}
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="glass-card border-card-border">
                <CardHeader>
                  <CardTitle className="text-card-foreground">Create Session</CardTitle>
                  <CardDescription>Start your own practice room</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="default" className="w-full">
                    <Users className="w-4 h-4 mr-2" />
                    Create Room
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Or join someone else's session
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Micro-Learning Tab */}
          <TabsContent value="micro-learning">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {microLearningTopics.map((topic, index) => (
                <Card key={index} className="glass-card border-card-border hover:scale-105 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant={topic.difficulty === 'Beginner' ? 'secondary' : topic.difficulty === 'Intermediate' ? 'default' : 'destructive'}>
                        {topic.difficulty}
                      </Badge>
                      {topic.completed ? (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      ) : (
                        <Clock className="w-5 h-5 text-muted-foreground" />
                      )}
                    </div>
                    <CardTitle className="text-card-foreground">{topic.title}</CardTitle>
                    <CardDescription>{topic.duration}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant={topic.completed ? "outline" : "default"} 
                      className="w-full"
                    >
                      {topic.completed ? 'Review' : 'Start'}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Practice;