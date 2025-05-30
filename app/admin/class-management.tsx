"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { Plus, Users, Trophy, TrendingUp, Star } from "lucide-react"

export function ClassManagement() {
  const [classes, setClasses] = useState([
    {
      id: 1,
      name: "TI-3A",
      students: 25,
      activeStudents: 23,
      avgPoints: 2156,
      rank: 1,
      semester: "3",
      program: "Teknik Informatika",
    },
    {
      id: 2,
      name: "TI-3B",
      students: 24,
      activeStudents: 22,
      avgPoints: 2089,
      rank: 2,
      semester: "3",
      program: "Teknik Informatika",
    },
    {
      id: 3,
      name: "TI-3C",
      students: 26,
      activeStudents: 24,
      avgPoints: 1967,
      rank: 3,
      semester: "3",
      program: "Teknik Informatika",
    },
    {
      id: 4,
      name: "TI-3D",
      students: 25,
      activeStudents: 20,
      avgPoints: 1845,
      rank: 4,
      semester: "3",
      program: "Teknik Informatika",
    },
  ])

  const [newClass, setNewClass] = useState({
    name: "",
    semester: "",
    program: "",
  })

  const handleAddClass = () => {
    if (newClass.name && newClass.semester && newClass.program) {
      setClasses([
        ...classes,
        {
          id: classes.length + 1,
          ...newClass,
          students: 0,
          activeStudents: 0,
          avgPoints: 0,
          rank: classes.length + 1,
        },
      ])
      setNewClass({ name: "", semester: "", program: "" })
    }
  }

  return (
    <div className="space-y-6">
      {/* Class Stats Overview */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Kelas</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Mahasiswa</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.reduce((total, cls) => total + cls.students, 0)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Mahasiswa Aktif</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{classes.reduce((total, cls) => total + cls.activeStudents, 0)}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Rata-rata Poin</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Math.round(classes.reduce((total, cls) => total + cls.avgPoints, 0) / classes.length)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Class Management */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Kelola Kelas</CardTitle>
              <CardDescription>Tambah dan kelola kelas untuk sistem ranking</CardDescription>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Tambah Kelas
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Tambah Kelas Baru</DialogTitle>
                  <DialogDescription>Isi form di bawah untuk menambah kelas baru</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="className">Nama Kelas</Label>
                    <Input
                      id="className"
                      value={newClass.name}
                      onChange={(e) => setNewClass({ ...newClass, name: e.target.value })}
                      placeholder="Contoh: TI-3A"
                    />
                  </div>
                  <div>
                    <Label htmlFor="semester">Semester</Label>
                    <Select
                      value={newClass.semester}
                      onValueChange={(value) => setNewClass({ ...newClass, semester: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih semester" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                          <SelectItem key={sem} value={sem.toString()}>
                            Semester {sem}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="program">Program Studi</Label>
                    <Select
                      value={newClass.program}
                      onValueChange={(value) => setNewClass({ ...newClass, program: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih program studi" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Teknik Informatika">Teknik Informatika</SelectItem>
                        <SelectItem value="Sistem Informasi">Sistem Informasi</SelectItem>
                        <SelectItem value="Teknik Komputer">Teknik Komputer</SelectItem>
                        <SelectItem value="Manajemen Informatika">Manajemen Informatika</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAddClass} className="w-full">
                    Tambah Kelas
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {classes.map((classData) => (
              <div key={classData.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{classData.name}</h3>
                    <Badge variant="outline">Rank #{classData.rank}</Badge>
                    {classData.rank === 1 && <Trophy className="h-4 w-4 text-yellow-500" />}
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    {classData.program} • Semester {classData.semester}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>{classData.students} mahasiswa</span>
                    <span>{classData.activeStudents} aktif</span>
                    <span>{classData.avgPoints} rata-rata poin</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    Lihat Detail
                  </Button>
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
    </div>
  )
}
