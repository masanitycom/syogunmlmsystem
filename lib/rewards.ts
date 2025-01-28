export function checkNFTStatus(nft: NFT): { isActive: boolean; remainingPercentage: number } {
  // 無効な NFT データの場合はデフォルト値を返す
  if (!nft || typeof nft.currentValue !== "number" || typeof nft.price !== "number" || nft.price <= 0) {
    console.error("Invalid NFT values:", { currentValue: nft.currentValue, price: nft.price })
    return { isActive: false, remainingPercentage: 0 }
  }

  try {
    const maxValue = nft.price * 3
    const currentProgress = Math.max(0, maxValue - nft.currentValue)
    const remainingPercentage = Math.round((currentProgress / nft.price) * 100)

    // 確実に 0-100 の範囲に収める
    const clampedPercentage = Math.min(100, Math.max(0, remainingPercentage))

    return {
      isActive: nft.currentValue < maxValue,
      remainingPercentage: clampedPercentage,
    }
  } catch (error) {
    console.error("Error calculating NFT status:", error)
    return { isActive: false, remainingPercentage: 0 }
  }
}

