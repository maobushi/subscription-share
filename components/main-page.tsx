'use client'

import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

export function MainPage() {
  const [isMyPageOpen, setIsMyPageOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 p-8">
      <header className="flex justify-end mb-8">
        <Dialog open={isMyPageOpen} onOpenChange={setIsMyPageOpen}>
          <DialogTrigger asChild>
            <Button variant="ghost" className="rounded-full p-0">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder-user.jpg" alt="@username" />
                <AvatarFallback>UN</AvatarFallback>
              </Avatar>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>マイページ</DialogTitle>
              <DialogDescription>
                ここにユーザー情報や設定が表示されます。
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </header>

      <main className="flex justify-center items-center">
        <Card className="w-full max-w-2xl bg-white/80 backdrop-blur-sm shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">サブスクリプションシェア</CardTitle>
            <CardDescription>ホストが提供するサブスクリプションに参加しましょう</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder-user.jpg" alt="@hostname" />
                <AvatarFallback>HN</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-xl font-semibold">ホスト名</h3>
                <p className="text-sm text-gray-500">プレミアムプラン提供者</p>
              </div>
            </div>
            <div className="bg-gradient-to-r from-purple-400 to-indigo-500 p-6 rounded-lg text-white">
              <h4 className="text-lg font-semibold mb-2">提供サブスクリプション</h4>
              <ul className="list-disc list-inside space-y-1">
                <li>Netflix プレミアム</li>
                <li>Spotify ファミリー</li>
                <li>YouTube Premium</li>
              </ul>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">月額料金: ¥1,500</p>
              <p className="text-sm text-gray-500">4人でシェア中</p>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white">
              参加する
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}