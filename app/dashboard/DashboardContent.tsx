;(
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {(user?.nfts ?? []).map((nft) => {
      if (!nft || typeof nft.currentValue !== "number" || typeof nft.price !== "number" || nft.price <= 0) {
        console.error("Invalid NFT object:", nft)
        return null // 無効な NFT オブジェクトはスキップ
      }

      const { isActive, remainingPercentage } = checkNFTStatus(nft)

      return (
        <Card key={nft.id} className="overflow-hidden">
          <CardContent className="p-4">
            <div className="aspect-square relative mb-2">
              <Image
                src={nft.imageUrl || "/placeholder.svg"}
                alt={nft.name}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
            <h3 className="font-bold text-lg truncate">{nft.name}</h3>
            <p className="text-sm text-gray-600">現在の価値: ${nft.currentValue.toLocaleString()}</p>
            <p className="text-sm text-gray-600">累積報酬: ${(nft.accumulatedRewards ?? 0).toLocaleString()}</p>
            <p className="text-sm text-gray-600">ステータス: {isActive ? "運用中" : "運用終了"}</p>
            {isActive && <Progress value={remainingPercentage} className="w-full" />}
          </CardContent>
        </Card>
      )
    })}
  </div>
) < Button
onClick={() => setIsNFTPurchaseModalOpen(true)}
className = "w-full mt-4" > <FaShoppingCart className="mr-2" />
NFTを購入
</Button>

