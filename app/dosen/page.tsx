"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, BookOpen, Users, Clock, Star, Play } from "lucide-react"

export default function DosenDashboard() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "HTML & CSS Fundamentals",
      subject: "Pemrograman Web",
      students: 45,
      duration: "4 minggu",
      status: "active",
      rating: 4.8,
      lessons: 12,
    },
    {
      id: 2,
      title: "JavaScript ES6+",
      subject: "Pemrograman Web",
      students: 38,
      duration: "6 minggu",
      status: "active",
      rating: 4.9,
      lessons: 18,
    },
    {
      id: 3,
      title: "Database Design",
      subject: "Basis Data",
      students: 52,
      duration: "5 minggu",
      status: "draft",
      rating: 0,
      lessons: 15,
    },
  ])

  const [newCourse, setNewCourse] = useState({
    title: "",
    subject: "",
    description: "",
    duration: "",
    difficulty: "",
  })

  const subjects = ["Pemrograman Web", "Basis Data", "Algoritma", "Jaringan Komputer"]

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.subject) {
      setCourses([
        ...courses,
        {
          id: courses.length + 1,
          ...newCourse,
          students: 0,
          status: "draft",
          rating: 0,
          lessons: 0,
        },
      ])
      setNewCourse({ title: "", subject: "", description: "", duration: "", difficulty: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold">Dashboard Dosen</h1>
            </div>
            <Button variant="outline">Logout</Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Course</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.reduce((total, course) => total + course.students, 0)}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Course Aktif</CardTitle>
              <Play className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{courses.filter((course) => course.status === "active").length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Rating Rata-rata</CardTitle>
              <Star className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.8</div>
            </CardContent>
          </Card>
        </div>

        {/* Course Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Kelola Course</CardTitle>
                <CardDescription>Buat dan kelola course untuk mahasiswa</CardDescription>
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Buat Course Baru
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md">
                  <DialogHeader>
                    <DialogTitle>Buat Course Baru</DialogTitle>
                    <DialogDescription>Isi form di bawah untuk membuat course baru</DialogDescription>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="title">Judul Course</Label>
                      <Input
                        id="title"
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                        placeholder="Contoh: React Fundamentals"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Mata Kuliah</Label>
                      <Select
                        value={newCourse.subject}
                        onValueChange={(value) => setNewCourse({ ...newCourse, subject: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih mata kuliah" />
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map((subject) => (
                            <SelectItem key={subject} value={subject}>
                              {subject}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="duration">Durasi</Label>
                      <Input
                        id="duration"
                        value={newCourse.duration}
                        onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                        placeholder="Contoh: 4 minggu"
                      />
                    </div>
                    <div>
                      <Label htmlFor="difficulty">Tingkat Kesulitan</Label>
                      <Select
                        value={newCourse.difficulty}
                        onValueChange={(value) => setNewCourse({ ...newCourse, difficulty: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Pilih tingkat kesulitan" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Pemula</SelectItem>
                          <SelectItem value="intermediate">Menengah</SelectItem>
                          <SelectItem value="advanced">Lanjutan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Deskripsi</Label>
                      <Textarea
                        id="description"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                        placeholder="Deskripsi course..."
                      />
                    </div>
                    <Button onClick={handleAddCourse} className="w-full">
                      Buat Course
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {courses.map((course) => (
                <div key={course.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{course.title}</h3>
                      <Badge variant={course.status === "active" ? "default" : "secondary"}>
                        {course.status === "active" ? "Aktif" : "Draft"}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{course.subject}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {course.students} mahasiswa
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration}
                      </span>
                      {course.rating > 0 && (
                        <span className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          {course.rating}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      Lihat
                    </Button>
                    <Button variant="destructive" size="sm">
                      Hapus
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
