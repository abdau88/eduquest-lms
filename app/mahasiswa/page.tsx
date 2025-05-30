"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Star, Award, BookOpen, Target, Flame, Crown, Medal, Zap } from "lucide-react"

// Import the new ClassRanking component
import { ClassRanking } from "./class-ranking"

export default function MahasiswaDashboard() {
  // Update the useState for studentData to include class information
  const [studentData] = useState({
    name: "Ahmad Rizki",
    class: "TI-3A",
    level: 15,
    totalPoints: 2450,
    rank: 3,
    classRank: 1,
    streak: 7,
    completedCourses: 8,
    badges: [
      { id: 1, name: "First Course", icon: "🎯", earned: true },
      { id: 2, name: "Speed Learner", icon: "⚡", earned: true },
      { id: 3, name: "Perfect Score", icon: "💯", earned: true },
      { id: 4, name: "Week Warrior", icon: "🔥", earned: true },
      { id: 5, name: "Master Coder", icon: "👨‍💻", earned: false },
      { id: 6, name: "Team Player", icon: "🤝", earned: false },
    ],
  })

  const [enrolledCourses] = useState([
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      subject: "Pemrograman Web",
      progress: 85,
      instructor: "Dr. Sarah",
      nextLesson: "CSS Grid Layout",
      points: 120,
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      subject: "Pemrograman Web",
      progress: 60,
      instructor: "Prof. Ahmad",
      nextLesson: "Async/Await",
      points: 200,
    },
    {
      id: 3,
      title: "Database Design",
      subject: "Basis Data",
      progress: 30,
      instructor: "Dr. Lisa",
      nextLesson: "Normalization",
      points: 150,
    },
  ])

  const [leaderboard] = useState([
    { rank: 1, name: "Sarah Putri", points: 3200, avatar: "SP" },
    { rank: 2, name: "Budi Santoso", points: 2800, avatar: "BS" },
    { rank: 3, name: "Ahmad Rizki", points: 2450, avatar: "AR", isCurrentUser: true },
    { rank: 4, name: "Dewi Sari", points: 2300, avatar: "DS" },
    { rank: 5, name: "Eko Prasetyo", points: 2100, avatar: "EP" },
  ])

  const [achievements] = useState([
    {
      id: 1,
      title: "First Steps",
      description: "Menyelesaikan course pertama",
      points: 100,
      earned: true,
      date: "2024-01-15",
    },
    {
      id: 2,
      title: "Speed Runner",
      description: "Menyelesaikan 3 course dalam seminggu",
      points: 250,
      earned: true,
      date: "2024-01-22",
    },
    {
      id: 3,
      title: "Perfect Student",
      description: "Mendapat nilai 100 di 5 quiz berturut-turut",
      points: 300,
      earned: true,
      date: "2024-02-01",
    },
    {
      id: 4,
      title: "Knowledge Seeker",
      description: "Menyelesaikan 10 course",
      points: 500,
      earned: false,
      progress: 80,
    },
  ])

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder-user.jpg" />
                <AvatarFallback>AR</AvatarFallback>
              </Avatar>
              {/* Update the header section to show class information */}
              <div>
                <h1 className="text-xl font-bold">{studentData.name}</h1>
                <p className="text-sm text-gray-600">
                  {studentData.class} • Level {studentData.level} • {studentData.totalPoints} Poin
                </p>
              </div>
            </div>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Poin</CardTitle>
              <Star className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.totalPoints}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ranking</CardTitle>
              <Trophy className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{studentData.rank}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Selesai</CardTitle>
              <BookOpen className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.completedCourses}</div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Streak</CardTitle>
              <Flame className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{studentData.streak} hari</div>
            </CardContent>
          </Card>

          {/* Update the stats cards to include class rank */}
          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rank Kelas</CardTitle>
              <Crown className="h-4 w-4" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">#{studentData.classRank}</div>
              <p className="text-xs text-purple-100">di {studentData.class}</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="courses" className="space-y-6">
          {/* Update the TabsList to include class ranking */}
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="courses">Course Saya</TabsTrigger>
            <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            <TabsTrigger value="class-ranking">Rank Kelas</TabsTrigger>
            <TabsTrigger value="badges">Badge</TabsTrigger>
            <TabsTrigger value="achievements">Achievement</TabsTrigger>
          </TabsList>

          <TabsContent value="courses" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Course yang Sedang Diikuti</CardTitle>
                <CardDescription>Lanjutkan pembelajaran dan raih poin lebih banyak</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {enrolledCourses.map((course) => (
                    <div key={course.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{course.title}</h3>
                          <p className="text-sm text-gray-600">
                            {course.subject} • {course.instructor}
                          </p>
                        </div>
                        <Badge variant="secondary">+{course.points} poin</Badge>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress: {course.progress}%</span>
                          <span>Selanjutnya: {course.nextLesson}</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                      <Button className="mt-3" size="sm">
                        Lanjutkan Belajar
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leaderboard" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-yellow-500" />
                  Leaderboard
                </CardTitle>
                <CardDescription>Lihat posisi Anda dibanding mahasiswa lain</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaderboard.map((student) => (
                    <div
                      key={student.rank}
                      className={`flex items-center justify-between p-4 rounded-lg ${
                        student.isCurrentUser ? "bg-blue-50 border-blue-200 border-2" : "border"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {student.rank === 1 && <Crown className="h-5 w-5 text-yellow-500" />}
                          {student.rank === 2 && <Medal className="h-5 w-5 text-gray-400" />}
                          {student.rank === 3 && <Medal className="h-5 w-5 text-orange-500" />}
                          <span className="font-bold text-lg">#{student.rank}</span>
                        </div>
                        <Avatar>
                          <AvatarFallback>{student.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{student.name}</p>
                          {student.isCurrentUser && (
                            <Badge variant="secondary" className="text-xs">
                              Anda
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{student.points}</p>
                        <p className="text-sm text-gray-600">poin</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-purple-500" />
                  Koleksi Badge
                </CardTitle>
                <CardDescription>Badge yang telah Anda kumpulkan</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {studentData.badges.map((badge) => (
                    <div
                      key={badge.id}
                      className={`p-4 text-center border rounded-lg ${
                        badge.earned
                          ? "bg-gradient-to-b from-yellow-50 to-yellow-100 border-yellow-200"
                          : "bg-gray-50 border-gray-200 opacity-50"
                      }`}
                    >
                      <div className="text-3xl mb-2">{badge.icon}</div>
                      <p className="text-sm font-medium">{badge.name}</p>
                      {badge.earned && (
                        <Badge variant="secondary" className="mt-2 text-xs">
                          Diraih
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-green-500" />
                  Achievement
                </CardTitle>
                <CardDescription>Pencapaian dan milestone pembelajaran</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {achievements.map((achievement) => (
                    <div
                      key={achievement.id}
                      className={`p-4 border rounded-lg ${
                        achievement.earned ? "bg-green-50 border-green-200" : "border-gray-200"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-3">
                          {achievement.earned ? (
                            <Zap className="h-5 w-5 text-green-500" />
                          ) : (
                            <Target className="h-5 w-5 text-gray-400" />
                          )}
                          <div>
                            <h3 className="font-semibold">{achievement.title}</h3>
                            <p className="text-sm text-gray-600">{achievement.description}</p>
                          </div>
                        </div>
                        <Badge variant={achievement.earned ? "default" : "secondary"}>+{achievement.points} poin</Badge>
                      </div>
                      {achievement.earned ? (
                        <p className="text-sm text-green-600">Diraih pada {achievement.date}</p>
                      ) : (
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progress: {achievement.progress}%</span>
                          </div>
                          <Progress value={achievement.progress} className="h-2" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Add the new TabsContent for class-ranking */}
          <TabsContent value="class-ranking" className="space-y-6">
            <ClassRanking />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
