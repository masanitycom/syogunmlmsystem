import { getUserNFTs, getAllUsers, updateUserRewards } from "@/lib/db"
import { getUserLevel, getLevelRewardRate } from "@/lib/userLevels"
import { PROFIT_DISTRIBUTION_PERCENTAGE } from "@/lib/constants"

export async function calculateWeeklyRewards(weeklyProfit: number) {
  const distributionAmount = (weeklyProfit * PROFIT_DISTRIBUTION_PERCENTAGE) / 100
  const users = await getAllUsers()
  const userRewards: { [userId: string]: number } = {}

  // Calculate total points
  let totalPoints = 0
  for (const user of users) {
    const userNFTs = await getUserNFTs(user.id)
    const userLevel = getUserLevel(user.maxSeriesInvestment, user.otherSeriesInvestment, userNFTs)
    const levelRewardRate = getLevelRewardRate(userLevel)
    const userPoints = user.maxSeriesInvestment * levelRewardRate
    totalPoints += userPoints
    userRewards[user.id] = userPoints
  }

  // Calculate and distribute rewards
  for (const userId in userRewards) {
    const userShare = userRewards[userId] / totalPoints
    const userReward = distributionAmount * userShare
    await updateUserRewards(userId, userReward)
  }

  return { totalDistributed: distributionAmount, userRewards }
}

