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
import { Plus, BookOpen, Users, GraduationCap, Settings, BarChart3 } from "lucide-react"
// Import the ClassManagement component
import { ClassManagement } from "./class-management"
// Add the Tabs import at the top
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AdminDashboard() {
  const [subjects, setSubjects] = useState([
    { id: 1, name: "Pemrograman Web", code: "PWB101", description: "Mata kuliah dasar pemrograman web", courses: 5 },
    { id: 2, name: "Basis Data", code: "BD201", description: "Konsep dan implementasi basis data", courses: 3 },
    { id: 3, name: "Algoritma", code: "ALG101", description: "Dasar-dasar algoritma dan struktur data", courses: 4 },
  ])

  const [newSubject, setNewSubject] = useState({
    name: "",
    code: "",
    description: "",
  })

  const handleAddSubject = () => {
    if (newSubject.name && newSubject.code) {
      setSubjects([
        ...subjects,
        {
          id: subjects.length + 1,
          ...newSubject,
          courses: 0,
        },
      ])
      setNewSubject({ name: "", code: "", description: "" })
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Settings className="h-8 w-8 text-red-600" />
              <h1 className="text-2xl font-bold">Admin Dashboard</h1>
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
              <CardTitle className="text-sm font-medium">Total Mata Kuliah</CardTitle>
              <BookOpen className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{subjects.length}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Dosen</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
              <GraduationCap className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">245</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Course</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {subjects.reduce((total, subject) => total + subject.courses, 0)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mata Kuliah Management */}
        <Tabs defaultValue="subjects" className="space-y-6">
          <TabsList>
            <TabsTrigger value="subjects">Mata Kuliah</TabsTrigger>
            <TabsTrigger value="classes">Kelola Kelas</TabsTrigger>
          </TabsList>

          <TabsContent value="subjects">
            {/* Move the existing Mata Kuliah Management card content here */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Kelola Mata Kuliah</CardTitle>
                    <CardDescription>Tambah dan kelola mata kuliah yang tersedia</CardDescription>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Tambah Mata Kuliah
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Tambah Mata Kuliah Baru</DialogTitle>
                        <DialogDescription>Isi form di bawah untuk menambah mata kuliah baru</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Nama Mata Kuliah</Label>
                          <Input
                            id="name"
                            value={newSubject.name}
                            onChange={(e) => setNewSubject({ ...newSubject, name: e.target.value })}
                            placeholder="Contoh: Pemrograman Web"
                          />
                        </div>
                        <div>
                          <Label htmlFor="code">Kode Mata Kuliah</Label>
                          <Input
                            id="code"
                            value={newSubject.code}
                            onChange={(e) => setNewSubject({ ...newSubject, code: e.target.value })}
                            placeholder="Contoh: PWB101"
                          />
                        </div>
                        <div>
                          <Label htmlFor="description">Deskripsi</Label>
                          <Textarea
                            id="description"
                            value={newSubject.description}
                            onChange={(e) => setNewSubject({ ...newSubject, description: e.target.value })}
                            placeholder="Deskripsi mata kuliah..."
                          />
                        </div>
                        <Button onClick={handleAddSubject} className="w-full">
                          Tambah Mata Kuliah
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {subjects.map((subject) => (
                    <div key={subject.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold">{subject.name}</h3>
                          <Badge variant="secondary">{subject.code}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{subject.description}</p>
                        <p className="text-sm text-blue-600">{subject.courses} course tersedia</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Edit
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
          </TabsContent>

          <TabsContent value="classes">
            <ClassManagement />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
