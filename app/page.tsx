import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap, Users, BookOpen, Trophy, Star, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">EduQuest LMS</h1>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" asChild>
                <Link href="/login">Masuk</Link>
              </Button>
              <Button asChild>
                <Link href="/register">Daftar</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Belajar dengan Sistem Gamifikasi</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Platform pembelajaran yang mengubah proses belajar menjadi petualangan seru dengan sistem poin, badge, dan
            ranking
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Sistem Ranking</CardTitle>
              <CardDescription>Kompetisi sehat dengan leaderboard dan ranking berdasarkan pencapaian</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-purple-500 mx-auto mb-4" />
              <CardTitle>Badge & Achievement</CardTitle>
              <CardDescription>Kumpulkan badge dan achievement untuk setiap milestone yang dicapai</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Star className="h-12 w-12 text-orange-500 mx-auto mb-4" />
              <CardTitle>Sistem Poin</CardTitle>
              <CardDescription>Dapatkan poin untuk setiap aktivitas pembelajaran yang diselesaikan</CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Role Selection */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Users className="h-16 w-16 text-red-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Admin</CardTitle>
              <CardDescription>Kelola mata kuliah dan sistem pembelajaran</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/admin">Dashboard Admin</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <BookOpen className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Dosen</CardTitle>
              <CardDescription>Buat dan kelola course untuk mahasiswa</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/dosen">Dashboard Dosen</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <GraduationCap className="h-16 w-16 text-blue-500 mx-auto mb-4" />
              <CardTitle className="text-xl">Mahasiswa</CardTitle>
              <CardDescription>Ikuti course dan raih achievement</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <Link href="/mahasiswa">Dashboard Mahasiswa</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
