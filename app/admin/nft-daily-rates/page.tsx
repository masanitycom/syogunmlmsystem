"use client"

import React, { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import { defaultNFTs } from "@/lib/models/nft"

export default function NFTDailyRatesPage() {
  const [nfts, setNfts] = useState(defaultNFTs)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0])

  useEffect(() => {
    // TODO: Fetch actual NFT data from the database
  }, [])

  const handleRateChange = (id: string, newRate: number) => {
    setNfts(
      nfts.map((nft) => (nft.id === id ? { ...nft, dailyRates: { ...nft.dailyRates, [selectedDate]: newRate } } : nft)),
    )
  }

  const handleSave = async () => {
    try {
      // TODO: Implement API call to save daily rates
      console.log(
        "Saving daily rates:",
        nfts.map((nft) => ({ id: nft.id, rate: nft.dailyRates[selectedDate] })),
      )
      toast({
        title: "日次利率を保存しました",
        description: `${selectedDate}の日次利率が更新されました。`,
      })
    } catch (error) {
      console.error("Error saving daily rates:", error)
      toast({
        title: "エラー",
        description: "日次利率の保存中にエラーが発生しました。",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">NFT日次利率設定</h1>
      <Card>
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>日次利率設定</span>
            <Input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-auto"
            />
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>NFT名</TableHead>
                <TableHead>価格 (USDT)</TableHead>
                <TableHead>日次利率 (%)</TableHead>
                <TableHead>最大日次利率 (%)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {nfts.map((nft) => (
                <TableRow key={nft.id}>
                  <TableCell>{nft.name}</TableCell>
                  <TableCell>{nft.price}</TableCell>
                  <TableCell>
                    <Input
                      type="number"
                      value={nft.dailyRates[selectedDate] || nft.maxDailyRate}
                      onChange={(e) => handleRateChange(nft.id, Number(e.target.value))}
                      step="0.001"
                      min="0"
                      max={nft.maxDailyRate}
                    />
                  </TableCell>
                  <TableCell>{(nft.maxDailyRate * 100).toFixed(3)}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button onClick={handleSave} className="mt-4">
            保存
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

