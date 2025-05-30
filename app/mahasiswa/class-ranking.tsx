"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Crown, Medal, Users, TrendingUp, Star } from "lucide-react"

export function ClassRanking() {
  const [classLeaderboard] = useState([
    { rank: 1, name: "Ahmad Rizki", points: 2450, avatar: "AR", isCurrentUser: true, badges: 4 },
    { rank: 2, name: "Siti Nurhaliza", points: 2380, avatar: "SN", badges: 3 },
    { rank: 3, name: "Budi Hartono", points: 2250, avatar: "BH", badges: 3 },
    { rank: 4, name: "Dewi Kartika", points: 2100, avatar: "DK", badges: 2 },
    { rank: 5, name: "Eko Prasetyo", points: 1950, avatar: "EP", badges: 2 },
    { rank: 6, name: "Fitri Handayani", points: 1800, avatar: "FH", badges: 1 },
    { rank: 7, name: "Gilang Ramadhan", points: 1650, avatar: "GR", badges: 1 },
    { rank: 8, name: "Hana Permata", points: 1500, avatar: "HP", badges: 1 },
  ])

  const [interClassRanking] = useState([
    {
      rank: 1,
      className: "TI-3A",
      avgPoints: 2156,
      totalStudents: 25,
      activeStudents: 23,
      isCurrentClass: true,
      topStudent: "Ahmad Rizki",
    },
    {
      rank: 2,
      className: "TI-3B",
      avgPoints: 2089,
      totalStudents: 24,
      activeStudents: 22,
      topStudent: "Sarah Putri",
    },
    {
      rank: 3,
      className: "TI-3C",
      avgPoints: 1967,
      totalStudents: 26,
      activeStudents: 24,
      topStudent: "Michael Chen",
    },
    {
      rank: 4,
      className: "TI-3D",
      avgPoints: 1845,
      totalStudents: 25,
      activeStudents: 20,
      topStudent: "Lisa Andriani",
    },
  ])

  const [classStats] = useState({
    className: "TI-3A",
    totalStudents: 25,
    activeStudents: 23,
    avgPoints: 2156,
    totalCourses: 12,
    completionRate: 78,
    rank: 1,
  })

  return (
    <div className="space-y-6">
      {/* Class Stats Overview */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rank Kelas</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#{classStats.rank}</div>
            <p className="text-xs text-muted-foreground">dari 4 kelas</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata Poin</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classStats.avgPoints}</div>
            <p className="text-xs text-muted-foreground">poin per mahasiswa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mahasiswa Aktif</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classStats.activeStudents}</div>
            <p className="text-xs text-muted-foreground">dari {classStats.totalStudents} mahasiswa</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tingkat Penyelesaian</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classStats.completionRate}%</div>
            <p className="text-xs text-muted-foreground">course diselesaikan</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="class-leaderboard" className="space-y-4">
        <TabsList>
          <TabsTrigger value="class-leaderboard">Ranking Kelas TI-3A</TabsTrigger>
          <TabsTrigger value="inter-class">Ranking Antar Kelas</TabsTrigger>
        </TabsList>

        <TabsContent value="class-leaderboard">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Crown className="h-5 w-5 text-yellow-500" />
                Leaderboard Kelas TI-3A
              </CardTitle>
              <CardDescription>Ranking mahasiswa dalam kelas Anda</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {classLeaderboard.map((student) => (
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
                        <div className="flex items-center gap-2">
                          {student.isCurrentUser && (
                            <Badge variant="secondary" className="text-xs">
                              Anda
                            </Badge>
                          )}
                          <span className="text-xs text-gray-500">{student.badges} badge</span>
                        </div>
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

        <TabsContent value="inter-class">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                Kompetisi Antar Kelas
              </CardTitle>
              <CardDescription>Ranking kelas berdasarkan rata-rata poin mahasiswa</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {interClassRanking.map((classData) => (
                  <div
                    key={classData.rank}
                    className={`p-6 rounded-lg border ${
                      classData.isCurrentClass
                        ? "bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200 border-2"
                        : "bg-white"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          {classData.rank === 1 && <Crown className="h-6 w-6 text-yellow-500" />}
                          {classData.rank === 2 && <Medal className="h-6 w-6 text-gray-400" />}
                          {classData.rank === 3 && <Medal className="h-6 w-6 text-orange-500" />}
                          <span className="font-bold text-2xl">#{classData.rank}</span>
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-xl font-bold">{classData.className}</h3>
                            {classData.isCurrentClass && (
                              <Badge variant="default" className="text-xs">
                                Kelas Anda
                              </Badge>
                            )}
                          </div>
                          <p className="text-sm text-gray-600">
                            Top Student: <span className="font-medium">{classData.topStudent}</span>
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-blue-600">{classData.avgPoints}</p>
                        <p className="text-sm text-gray-600">rata-rata poin</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Total Mahasiswa</p>
                        <p className="font-semibold">{classData.totalStudents}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-500">Mahasiswa Aktif</p>
                        <p className="font-semibold text-green-600">{classData.activeStudents}</p>
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
  )
}
