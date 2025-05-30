"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Play, Clock, Users, Star, CheckCircle, Lock, BookOpen, Award } from "lucide-react"

export default function CoursePage() {
  const [courseData] = useState({
    id: 1,
    title: "HTML & CSS Fundamentals",
    subject: "Pemrograman Web",
    instructor: "Dr. Sarah Johnson",
    rating: 4.8,
    students: 245,
    duration: "4 minggu",
    level: "Pemula",
    description:
      "Pelajari dasar-dasar HTML dan CSS untuk membangun website yang menarik dan responsif. Course ini cocok untuk pemula yang ingin memulai karir di web development.",
    points: 500,
    progress: 65,
    enrolled: true,
  })

  const [lessons] = useState([
    {
      id: 1,
      title: "Pengenalan HTML",
      duration: "15 menit",
      completed: true,
      locked: false,
      points: 50,
    },
    {
      id: 2,
      title: "HTML Tags dan Elements",
      duration: "20 menit",
      completed: true,
      locked: false,
      points: 75,
    },
    {
      id: 3,
      title: "HTML Forms",
      duration: "25 menit",
      completed: true,
      locked: false,
      points: 100,
    },
    {
      id: 4,
      title: "Pengenalan CSS",
      duration: "18 menit",
      completed: false,
      locked: false,
      points: 75,
      current: true,
    },
    {
      id: 5,
      title: "CSS Selectors",
      duration: "22 menit",
      completed: false,
      locked: true,
      points: 100,
    },
    {
      id: 6,
      title: "CSS Layout dengan Flexbox",
      duration: "30 menit",
      completed: false,
      locked: true,
      points: 125,
    },
  ])

  const [quizzes] = useState([
    {
      id: 1,
      title: "Quiz HTML Basics",
      questions: 10,
      completed: true,
      score: 90,
      points: 150,
    },
    {
      id: 2,
      title: "Quiz CSS Fundamentals",
      questions: 15,
      completed: false,
      locked: false,
      points: 200,
    },
  ])

  const completedLessons = lessons.filter((lesson) => lesson.completed).length
  const totalLessons = lessons.length

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold">Course Detail</h1>
            </div>
            <Button variant="outline">Kembali ke Dashboard</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Course Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-2">
                      {courseData.subject}
                    </Badge>
                    <CardTitle className="text-2xl mb-2">{courseData.title}</CardTitle>
                    <CardDescription className="text-base">{courseData.description}</CardDescription>
                  </div>
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{courseData.instructor}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{courseData.rating}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{courseData.students} mahasiswa</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{courseData.duration}</span>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  Progress & Reward
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Progress Course</span>
                    <span>{courseData.progress}%</span>
                  </div>
                  <Progress value={courseData.progress} className="h-3" />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Lessons Selesai</span>
                  <span className="font-semibold">
                    {completedLessons}/{totalLessons}
                  </span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm">Total Poin</span>
                  <Badge variant="secondary">+{courseData.points} poin</Badge>
                </div>

                {!courseData.enrolled ? (
                  <Button className="w-full">Daftar Course</Button>
                ) : (
                  <Button className="w-full">Lanjutkan Belajar</Button>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Course Content */}
        <Tabs defaultValue="lessons" className="space-y-6">
          <TabsList>
            <TabsTrigger value="lessons">Lessons</TabsTrigger>
            <TabsTrigger value="quizzes">Quiz</TabsTrigger>
            <TabsTrigger value="discussion">Diskusi</TabsTrigger>
          </TabsList>

          <TabsContent value="lessons">
            <Card>
              <CardHeader>
                <CardTitle>Daftar Lessons</CardTitle>
                <CardDescription>Selesaikan semua lessons untuk mendapatkan poin maksimal</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {lessons.map((lesson, index) => (
                    <AccordionItem key={lesson.id} value={`lesson-${lesson.id}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-3 flex-1">
                          <div className="flex items-center gap-2">
                            {lesson.completed ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : lesson.locked ? (
                              <Lock className="h-5 w-5 text-gray-400" />
                            ) : (
                              <Play className="h-5 w-5 text-blue-500" />
                            )}
                            <span className="font-medium">
                              {index + 1}. {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 ml-auto mr-4">
                            <Badge variant="outline" className="text-xs">
                              +{lesson.points} poin
                            </Badge>
                            <span className="text-sm text-gray-500">{lesson.duration}</span>
                            {lesson.current && (
                              <Badge variant="default" className="text-xs">
                                Sedang Belajar
                              </Badge>
                            )}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="pt-4 pl-8">
                          <p className="text-sm text-gray-600 mb-4">
                            Lesson ini akan membahas tentang {lesson.title.toLowerCase()} secara mendalam dengan contoh
                            praktis.
                          </p>
                          <div className="flex gap-2">
                            {lesson.completed ? (
                              <Button variant="outline" size="sm">
                                Review Lesson
                              </Button>
                            ) : lesson.locked ? (
                              <Button variant="outline" size="sm" disabled>
                                Terkunci
                              </Button>
                            ) : (
                              <Button size="sm">{lesson.current ? "Lanjutkan" : "Mulai"} Lesson</Button>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="quizzes">
            <Card>
              <CardHeader>
                <CardTitle>Quiz & Assessment</CardTitle>
                <CardDescription>Uji pemahaman Anda dengan quiz interaktif</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {quizzes.map((quiz) => (
                    <div key={quiz.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold">{quiz.title}</h3>
                            {quiz.completed && <CheckCircle className="h-4 w-4 text-green-500" />}
                          </div>
                          <p className="text-sm text-gray-600">
                            {quiz.questions} pertanyaan • +{quiz.points} poin
                          </p>
                          {quiz.completed && <p className="text-sm text-green-600 mt-1">Skor: {quiz.score}/100</p>}
                        </div>
                        <div className="flex gap-2">
                          {quiz.completed ? (
                            <Button variant="outline" size="sm">
                              Lihat Hasil
                            </Button>
                          ) : quiz.locked ? (
                            <Button variant="outline" size="sm" disabled>
                              Terkunci
                            </Button>
                          ) : (
                            <Button size="sm">Mulai Quiz</Button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="discussion">
            <Card>
              <CardHeader>
                <CardTitle>Forum Diskusi</CardTitle>
                <CardDescription>Diskusi dengan sesama mahasiswa dan dosen</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <p className="text-gray-500">Forum diskusi akan segera hadir!</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
